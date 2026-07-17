import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync, execFileSync } from 'node:child_process';
import { getAntdCliStatus } from '../delegate/antd-cli.mjs';
import { installAntdCliGlobal } from '../delegate/install-antd-cli.mjs';
import { resetAntdCliCache } from '../delegate/resolve-antd-cli.mjs';

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

function reportAntdCliDelegate(cwd, { installAntdCli }) {
  if (installAntdCli) {
    console.log('\nInstalling @ant-design/cli globally (faster ob_info merge)...');
    installAntdCliGlobal();
    resetAntdCliCache();
  }

  const status = getAntdCliStatus(cwd);
  if (status.fast) {
    console.log(`\nantd CLI for ob_info: ${status.via} (${status.label})`);
    return;
  }

  console.log('\nantd CLI for ob_info: npx (slow — ~2s per merge on delegateAntd components)');
  console.log('  Speed up: npm install -g @ant-design/cli');
  console.log('  Or:       ob-design setup --install-antd-cli');
  console.log('  Do NOT add @ant-design/cli mcp — delegate stays internal.');
}

export function setupCommand(client, { installAntdCli = false } = {}) {
  const cwd = process.cwd();
  let mcpVia = 'npx';
  let mcpWritten = false;

  if (client === 'cursor' || client === 'all') {
    mcpVia = mergeMcpConfig(join(cwd, '.cursor', 'mcp.json'), cwd);
    mcpWritten = true;
    console.log(`Wrote .cursor/mcp.json (oceanbase-design via ${mcpVia})`);
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

  reportAntdCliDelegate(cwd, { installAntdCli });

  if (mcpWritten && mcpVia === 'npx') {
    console.log('\nTip: npm install -g @oceanbase/design-cli for faster MCP startup (ob-design mcp on PATH)');
  }

  console.log('\nSkill: npx openskills install oceanbase/oceanbase-design/skills/oceanbase-design-usage');
}
