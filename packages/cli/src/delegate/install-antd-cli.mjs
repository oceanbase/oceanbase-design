/**
 * @input none
 * @output global @ant-design/cli install for faster delegate
 */
import { execFileSync, spawnSync } from 'node:child_process';
import { resetAntdCliCache } from './resolve-antd-cli.mjs';

function detectGlobalPm() {
  try {
    execFileSync('pnpm', ['--version'], { stdio: 'ignore' });
    return 'pnpm';
  } catch {
    return 'npm';
  }
}

export function installAntdCliGlobal() {
  const pm = detectGlobalPm();
  const args = pm === 'pnpm' ? ['add', '-g', '@ant-design/cli'] : ['install', '-g', '@ant-design/cli'];
  const result = spawnSync(pm, args, { stdio: 'inherit' });
  resetAntdCliCache();
  if (result.status !== 0) {
    throw new Error(`Failed to install @ant-design/cli via ${pm}`);
  }
}
