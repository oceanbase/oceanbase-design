/**
 * @input cwd, PATH, local node_modules
 * @output antd CLI invocation (path → local → npx fallback)
 * @position delegate layer — avoids npx cold-start when antd is installed
 */
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { createRequire } from 'node:module';

/** @typedef {'path' | 'local-bin' | 'local-package' | 'npx'} AntdCliVia */

/** @type {{ command: string, args: string[], via: AntdCliVia, label: string } | null} */
let _cached;

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

function walkUp(startDir, fn) {
  let dir = startDir;
  while (dir) {
    const hit = fn(dir);
    if (hit) return hit;
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return null;
}

function resolveLocalBin(cwd) {
  return walkUp(cwd, (dir) => {
    const name = process.platform === 'win32' ? 'antd.cmd' : 'antd';
    const bin = join(dir, 'node_modules', '.bin', name);
    if (!existsSync(bin)) return null;
    return {
      command: bin,
      args: [],
      via: 'local-bin',
      label: bin,
    };
  });
}

function resolveLocalPackage(cwd) {
  return walkUp(cwd, (dir) => {
    try {
      const req = createRequire(join(dir, 'package.json'));
      const pkgJson = req.resolve('@ant-design/cli/package.json');
      const entry = join(dirname(pkgJson), 'dist', 'index.js');
      if (!existsSync(entry)) return null;
      return {
        command: process.execPath,
        args: [entry],
        via: 'local-package',
        label: entry,
      };
    } catch {
      return null;
    }
  });
}

/**
 * Resolve how to invoke @ant-design/cli.
 * Priority: PATH `antd` → local .bin → resolved package → `npx -y`.
 * @param {string} [cwd]
 */
export function resolveAntdCliInvocation(cwd = process.cwd()) {
  if (_cached) return _cached;

  const onPath = whichBinary('antd');
  if (onPath) {
    _cached = { command: onPath, args: [], via: 'path', label: onPath };
    return _cached;
  }

  const localBin = resolveLocalBin(cwd);
  if (localBin) {
    _cached = localBin;
    return _cached;
  }

  const localPkg = resolveLocalPackage(cwd);
  if (localPkg) {
    _cached = localPkg;
    return _cached;
  }

  _cached = {
    command: 'npx',
    args: ['-y', '@ant-design/cli'],
    via: 'npx',
    label: 'npx -y @ant-design/cli',
  };
  return _cached;
}

/** @param {string} [cwd] */
export function getAntdCliStatus(cwd = process.cwd()) {
  const inv = resolveAntdCliInvocation(cwd);
  return {
    via: inv.via,
    label: inv.label,
    fast: inv.via !== 'npx',
  };
}

export function resetAntdCliCache() {
  _cached = null;
}
