/**
 * @input component name, CLI args
 * @output antd CLI stdout (spawn via resolve-antd-cli)
 * @position internal delegate for ob_info only
 */
import { spawn } from 'node:child_process';
import { resolveAntdCliInvocation, getAntdCliStatus } from './resolve-antd-cli.mjs';
import { resolveAntdVersionArgs, parseAntdInfoText } from './antd-info.mjs';

export { getAntdCliStatus };

export async function runAntdCli(args, { timeout = 60000, cwd = process.cwd() } = {}) {
  const inv = resolveAntdCliInvocation(cwd);
  const spawnArgs = [...inv.args, ...args];

  return new Promise((resolve) => {
    const child = spawn(inv.command, spawnArgs, {
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: process.platform === 'win32',
      cwd,
    });

    let stdout = '';
    let stderr = '';
    const timer = setTimeout(() => {
      child.kill();
      resolve({ ok: false, stdout, stderr: stderr || 'timeout', code: -1, via: inv.via });
    }, timeout);

    child.stdout.on('data', (d) => {
      stdout += d.toString();
    });
    child.stderr.on('data', (d) => {
      stderr += d.toString();
    });
    child.on('close', (code) => {
      clearTimeout(timer);
      resolve({ ok: code === 0, stdout, stderr, code, via: inv.via });
    });
    child.on('error', (err) => {
      clearTimeout(timer);
      resolve({ ok: false, stdout, stderr: err.message, code: -1, via: inv.via });
    });
  });
}

export async function antdInfo(name, { cwd = process.cwd() } = {}) {
  const versionArgs = resolveAntdVersionArgs(cwd);
  const attempts = [
    [...versionArgs, '--format', 'json', 'info', name],
    ['info', name, '--json'],
    [...versionArgs, 'info', name],
  ];

  for (const args of attempts) {
    const result = await runAntdCli(args, { cwd });
    if (!result.ok) continue;
    try {
      return JSON.parse(result.stdout);
    } catch {
      const parsed = parseAntdInfoText(result.stdout);
      if (parsed) return parsed;
    }
  }
  return null;
}
