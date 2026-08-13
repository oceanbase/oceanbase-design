/**
 * @input cwd, @oceanbase/design package.json
 * @output `--version` argv for antd-cli (antd v5 only — OB 1.x)
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** OceanBase Design 1.x wraps antd v5 only; do not query antd v6 API via ob_info. */
export const OB_SUPPORTED_ANTD_MAJOR = 5;

function antdMajor(versionOrRange) {
  const cleaned = String(versionOrRange).replace(/^[\^~>=< ]+/, '');
  return cleaned.split('.')[0];
}

function isSupportedAntd(versionOrRange) {
  return antdMajor(versionOrRange) === String(OB_SUPPORTED_ANTD_MAJOR);
}

function readAntdRange(pkgPath) {
  if (!existsSync(pkgPath)) return null;
  try {
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
    return (
      pkg.dependencies?.antd ||
      pkg.devDependencies?.antd ||
      pkg.peerDependencies?.antd ||
      null
    );
  } catch {
    return null;
  }
}

function resolveInstalledAntdVersion(cwd) {
  let dir = cwd;
  while (dir) {
    const nm = join(dir, 'node_modules', 'antd', 'package.json');
    if (existsSync(nm)) {
      try {
        return JSON.parse(readFileSync(nm, 'utf8')).version;
      } catch {
        /* continue */
      }
    }
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return null;
}

function obDesignAntdRange() {
  const designPkg = join(__dirname, '../../../../packages/design/package.json');
  return readAntdRange(designPkg);
}

/**
 * antd-cli `--version` flag. OB 1.x → antd v5 only; ignores v6 installs in node_modules.
 * @param {string} [cwd]
 * @returns {string[]}
 */
export function resolveAntdVersionArgs(cwd = process.cwd()) {
  const installed = resolveInstalledAntdVersion(cwd);
  if (installed && isSupportedAntd(installed)) return ['--version', installed];

  const fromCwd = readAntdRange(join(cwd, 'package.json'));
  if (fromCwd && isSupportedAntd(fromCwd)) return ['--version', fromCwd];

  const fromObDesign = obDesignAntdRange();
  if (fromObDesign) return ['--version', fromObDesign];

  return ['--version', String(OB_SUPPORTED_ANTD_MAJOR)];
}

/**
 * Parse `antd info` text table into JSON-shaped API (fallback when JSON format unavailable).
 * @param {string} stdout
 */
export function parseAntdInfoText(stdout) {
  const lines = stdout.split('\n');
  const headerIdx = lines.findIndex((l) => /^Property\s+Type/.test(l));
  if (headerIdx < 0) return null;

  const titleLine = lines.slice(0, headerIdx).find((l) => l.trim() && !l.startsWith('-'));
  const titleMatch = titleLine?.match(/^(\S+)\s*(?:\(([^)]+)\))?\s+—\s+(.+)$/);
  const props = [];

  for (let i = headerIdx + 2; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim() || /^-+$/.test(line.trim())) continue;
    const cols = line.split(/\s{2,}/);
    if (cols.length < 2 || cols[0] === 'Property') continue;
    props.push({
      name: cols[0],
      type: cols[1] ?? '',
      default: cols[2] ?? '-',
      since: cols[3] ?? '',
    });
  }

  if (!props.length) return null;

  return {
    name: titleMatch?.[1] ?? '',
    nameZh: titleMatch?.[2] ?? '',
    description: titleMatch?.[3] ?? '',
    props,
    source: 'antd-cli-text',
  };
}
