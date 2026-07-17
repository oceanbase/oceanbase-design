import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import { getAntdCliStatus } from '../delegate/antd-cli.mjs';
import { installAntdCliGlobal } from '../delegate/install-antd-cli.mjs';
import { resetAntdCliCache } from '../delegate/resolve-antd-cli.mjs';

const OB_MCP = {
  mcpServers: {
    'oceanbase-design': {
      command: 'npx',
      args: ['-y', '@oceanbase/design-cli', 'mcp'],
    },
  },
};

function writeJson(path, data) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(data, null, 2) + '\n');
}

function mergeMcpConfig(path) {
  let existing = { mcpServers: {} };
  if (existsSync(path)) {
    try {
      existing = JSON.parse(readFileSync(path, 'utf8'));
    } catch {
      /* fresh */
    }
  }
  existing.mcpServers = { ...existing.mcpServers, ...OB_MCP.mcpServers };
  writeJson(path, existing);
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

  if (client === 'cursor' || client === 'all') {
    mergeMcpConfig(join(cwd, '.cursor', 'mcp.json'));
    console.log('Wrote .cursor/mcp.json (oceanbase-design only — no antd mcp)');
  }

  if (client === 'claude' || client === 'all') {
    const home = process.env.HOME || process.env.USERPROFILE;
    if (home) {
      mergeMcpConfig(join(home, 'Library/Application Support/Claude/claude_desktop_config.json'));
      console.log('Updated Claude desktop config');
    }
  }

  if (client === 'agents' || client === 'all') {
    const script = join(dirname(fileURLToPath(import.meta.url)), '../../../../scripts/generate-agents-md.mjs');
    execSync(`node "${script}" --out "${join(cwd, 'AGENTS.md')}"`, { stdio: 'inherit' });
  }

  reportAntdCliDelegate(cwd, { installAntdCli });

  console.log('\nSkill: npx openskills install oceanbase/oceanbase-design/skills/oceanbase-design-usage');
}
