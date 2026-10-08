import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync, execFileSync } from 'node:child_process';
import { getAntdCliStatus } from '../delegate/antd-cli.mjs';

function whichBinary(name) {
  try {
    const lookup = process.platform === 'win32' ? 'where' : 'which';
    const out = execFileSync(lookup, [name], { encoding: 'utf8' }).trim();
    const first = out.split(/\r?\n/)[0]?.trim();
    return first || null;
  } catch {
    return null;
  }
}

function resolveLocalObDesignBin(cwd) {
  let dir = cwd;
  while (dir) {
    const name = process.platform === 'win32' ? 'ob-design.cmd' : 'ob-design';
    const bin = join(dir, 'node_modules', '.bin', name);
    if (existsSync(bin)) return bin;
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return null;
}

/** @returns {{ command: string, args: string[], via: 'path' | 'local-bin' | 'npx' }} */
function resolveObDesignMcpInvocation(cwd) {
  if (whichBinary('ob-design')) {
    return { command: 'ob-design', args: ['mcp'], via: 'path' };
  }
  const localBin = resolveLocalObDesignBin(cwd);
  if (localBin) {
    return { command: localBin, args: ['mcp'], via: 'local-bin' };
  }
  return {
    command: 'npx',
    args: ['-y', '@oceanbase/design-cli', 'mcp'],
    via: 'npx',
  };
}

function buildObMcpConfig(cwd) {
  const inv = resolveObDesignMcpInvocation(cwd);
  return {
    mcpServers: {
      'oceanbase-design': {
        command: inv.command,
        args: inv.args,
      },
    },
    _via: inv.via,
  };
}

function writeJson(path, data) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(data, null, 2) + '\n');
}

function mergeMcpConfig(path, cwd) {
  const obMcp = buildObMcpConfig(cwd);
  const { _via, ...mcpPayload } = obMcp;
  let existing = { mcpServers: {} };
  if (existsSync(path)) {
    try {
      existing = JSON.parse(readFileSync(path, 'utf8'));
    } catch {
      /* fresh */
    }
  }
  existing.mcpServers = { ...existing.mcpServers, ...mcpPayload.mcpServers };
  writeJson(path, existing);
  return _via;
}

const DESIGN_CSS_DATA_PATH = join(
  'node_modules',
  '@oceanbase',
  'design',
  'tokens',
  'ob-css-vars.css-data.json',
);

/** Walk up from cwd like Node resolves modules, so hoisted / monorepo installs work. */
function resolveDesignCssData(cwd) {
  let dir = cwd;
  while (dir) {
    const candidate = join(dir, DESIGN_CSS_DATA_PATH);
    if (existsSync(candidate)) return candidate;
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return null;
}

function mergeVscodeSettings(cwd) {
  const cssData = resolveDesignCssData(cwd);
  if (!cssData) {
    console.log('\nSkipped .vscode/settings.json: @oceanbase/design is not installed');
    console.log('  Install it, then re-run: ob-design setup --client vscode');
    return;
  }

  const relPath = relative(cwd, cssData).split(sep).join('/');
  const path = join(cwd, '.vscode', 'settings.json');

  let settings = {};
  if (existsSync(path)) {
    try {
      const parsed = JSON.parse(readFileSync(path, 'utf8'));
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('not an object');
      settings = parsed;
    } catch {
      console.log('\nSkipped .vscode/settings.json: existing file is not plain JSON');
      console.log(`  Add manually: "css.customData": ["${relPath}"]`);
      return;
    }
  }

  const current = Array.isArray(settings['css.customData']) ? settings['css.customData'] : [];
  if (current.includes(relPath)) {
    console.log('Kept .vscode/settings.json (css.customData already configured)');
    return;
  }
  settings['css.customData'] = [...current, relPath];
  writeJson(path, settings);
  console.log(`Wrote .vscode/settings.json (css.customData → ${relPath})`);
}

/**
 * Only workspace-scanning CSS variable extensions complete `var(--ob-*)` arguments
 * (the built-in language service reads the current document only). Recommending one
 * in `.vscode/extensions.json` is an optional hint, not a dependency: VS Code only
 * prompts to install it, and the entry can be removed or swapped for another tool.
 */
const RECOMMENDED_VSCODE_EXTENSIONS = ['vunguyentuan.vscode-css-variables'];

function mergeVscodeExtensions(cwd) {
  const path = join(cwd, '.vscode', 'extensions.json');

  let file = {};
  if (existsSync(path)) {
    try {
      const parsed = JSON.parse(readFileSync(path, 'utf8'));
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('not an object');
      file = parsed;
    } catch {
      console.log('\nSkipped .vscode/extensions.json: existing file is not plain JSON');
      const ids = RECOMMENDED_VSCODE_EXTENSIONS.map(id => `"${id}"`).join(', ');
      console.log(`  Add manually: "recommendations": [${ids}]`);
      return;
    }
  }

  const current = Array.isArray(file.recommendations) ? file.recommendations : [];
  const added = RECOMMENDED_VSCODE_EXTENSIONS.filter(id => !current.includes(id));
  if (!added.length) {
    console.log('Kept .vscode/extensions.json (recommended extensions already present)');
    return;
  }

  file.recommendations = [...current, ...added];
  writeJson(path, file);
  console.log(`Wrote .vscode/extensions.json (recommends ${added.join(', ')})`);
}

function reportAntdCliDelegate(cwd) {
  const status = getAntdCliStatus(cwd);
  if (status.fast) {
    console.log(`\nantd CLI for ob_info: ${status.via} (${status.label})`);
  } else {
    console.log('\nantd CLI for ob_info: npx (slow — reinstall @oceanbase/design-cli to bundle @ant-design/cli)');
  }
  console.log('  Do NOT add @ant-design/cli mcp — delegate stays internal.');
}

export function setupCommand(client) {
  const cwd = process.cwd();
  let mcpVia = 'npx';
  let mcpWritten = false;

  if (client === 'cursor' || client === 'all') {
    mcpVia = mergeMcpConfig(join(cwd, '.cursor', 'mcp.json'), cwd);
    mcpWritten = true;
    console.log(`Wrote .cursor/mcp.json (oceanbase-design via ${mcpVia})`);
  }

  if (client === 'cursor' || client === 'vscode' || client === 'all') {
    mergeVscodeSettings(cwd);
    mergeVscodeExtensions(cwd);
  }

  if (client === 'claude' || client === 'all') {
    const home = process.env.HOME || process.env.USERPROFILE;
    if (home) {
      mcpVia = mergeMcpConfig(join(home, 'Library/Application Support/Claude/claude_desktop_config.json'), cwd);
      mcpWritten = true;
      console.log(`Updated Claude desktop config (oceanbase-design via ${mcpVia})`);
    }
  }

  if (client === 'agents' || client === 'all') {
    const script = join(dirname(fileURLToPath(import.meta.url)), '../../../../scripts/generate-agents-md.mjs');
    execSync(`node "${script}" --out "${join(cwd, 'AGENTS.md')}"`, { stdio: 'inherit' });
  }

  reportAntdCliDelegate(cwd);

  if (mcpWritten && mcpVia === 'npx') {
    console.log('\nTip: npm install -g @oceanbase/design-cli for faster MCP startup (ob-design mcp on PATH)');
  }

  console.log('\nSkill: npx skills add oceanbase/oceanbase-design');
}
