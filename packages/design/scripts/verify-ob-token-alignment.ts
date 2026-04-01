/**
 * DTCG 与 obToken 子集对齐校验（仅脚本 / 测试，不进入 npm 包产物）。
 *
 * CLI：`pnpm run check:ob-token-dtcg`
 * 1) 本地目录（优先）：`OCEANBASE_DESIGN_TOKEN_DIR=/path/to/OceanBaseDesignToken/src/data/token`
 * 2) 未设置 DIR 时从固定 raw 拉取（https://github.com/4xxxxxxx/OceanBaseDesignToken ，main）
 * 3) 跳过：`OCEANBASE_DESIGN_TOKEN_SKIP=1`
 *
 * 子集对齐：DTCG 中声明的每个 WEB `--ob-*` 须在默认主题 `genCssVariablesStyle` 中出现；
 * 代码侧多出的变量不校验。
 */

import {
  existsSync,
  statSync,
  mkdirSync,
  writeFileSync,
  rmSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
} from 'fs';
import { join, dirname } from 'path';
import { tmpdir } from 'os';
import formatToken from 'antd/lib/theme/util/alias';
import designTheme from '../src/theme/index';
import defaultTheme from '../src/theme/default';
import { genCssVariablesStyle } from '../src/theme/obToken';
import type { GlobalToken } from '../src/theme/interface';

// ----- DTCG vs genCssVariablesStyle（供测试 import）-----

export function getDefaultGlobalToken(): GlobalToken {
  const { defaultAlgorithm, defaultSeed } = designTheme;
  const mapToken = {
    ...defaultAlgorithm(defaultSeed),
    ...defaultTheme.token,
    override: {
      boxShadow: defaultTheme.token?.boxShadow,
      boxShadowSecondary: defaultTheme.token?.boxShadowSecondary,
      boxShadowTertiary: defaultTheme.token?.boxShadowTertiary,
    },
  };
  return formatToken(mapToken) as GlobalToken;
}

/** 从 genCssVariablesStyle 收集 `:root` 上的 `--ob-*` 名（与运行时注入一致） */
export function collectGenCssVariableNames(prefix = 'ob'): Set<string> {
  const token = getDefaultGlobalToken();
  const style = genCssVariablesStyle(token, prefix);
  const root = (style as { ':root'?: Record<string, unknown> }[])[0]?.[':root'];
  const out = new Set<string>();
  if (root) {
    for (const k of Object.keys(root)) {
      out.add(k);
    }
  }
  return out;
}

export function collectDtcgWebVars(dtcgTokenDir: string): Set<string> {
  if (!existsSync(dtcgTokenDir) || !statSync(dtcgTokenDir).isDirectory()) {
    throw new Error(`collectDtcgWebVars: not a directory or does not exist: ${dtcgTokenDir}`);
  }
  const out = new Set<string>();
  const walk = (dir: string) => {
    for (const ent of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, ent.name);
      if (ent.isDirectory()) walk(full);
      else if (ent.name.endsWith('.tokens.json')) {
        const text = readFileSync(full, 'utf8');
        const re = /"WEB":\s*"(--ob-[^"]+)"/g;
        let m: RegExpExecArray | null;
        while ((m = re.exec(text))) out.add(m[1]);
      }
    }
  };
  walk(dtcgTokenDir);
  return out;
}

export function collectGenObTokenCssVars(prefix = 'ob'): Set<string> {
  return collectGenCssVariableNames(prefix);
}

export interface VerifyObTokenDtcgResult {
  /** DTCG 中声明了 WEB 但 `genCssVariablesStyle` 未注入的 `--ob-*` */
  missing: string[];
}

/**
 * 子集对齐：要求 DTCG `*.tokens.json` 里出现的每个 `--ob-*`（WEB）都在默认主题
 * `genCssVariablesStyle` 中有对应注入；代码侧多出的变量不报错。
 */
export function verifyObTokenDtcg(dtcgTokenDir: string): VerifyObTokenDtcgResult {
  const expected = collectDtcgWebVars(dtcgTokenDir);
  const actual = collectGenObTokenCssVars();
  const missing = Array.from(expected)
    .filter(v => !actual.has(v))
    .sort();
  return { missing };
}

// ----- CLI：拉取 raw DTCG 并执行校验 -----

async function fetchDtcgRawToTemp(): Promise<{ dir: string; cleanup: () => void }> {
  const dir = mkdtempSync(join(tmpdir(), 'ob-dtcg-'));
  const cleanup = () => {
    try {
      rmSync(dir, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  };

  const save = async (relativePath: string, url: string) => {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'oceanbase-design-check-ob-token' },
    });
    if (!res.ok) {
      cleanup();
      throw new Error(
        `fetch ${url} -> ${res.status}. Use OCEANBASE_DESIGN_TOKEN_DIR with a local OceanBaseDesignToken/src/data/token.`
      );
    }
    const outPath = join(dir, relativePath);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, await res.text(), 'utf8');
  };

  await save(
    'color-seed.tokens.json',
    'https://raw.githubusercontent.com/4xxxxxxx/OceanBaseDesignToken/main/src/data/token/color-seed.tokens.json'
  );
  await save(
    'color-semantic.tokens.json',
    'https://raw.githubusercontent.com/4xxxxxxx/OceanBaseDesignToken/main/src/data/token/color-semantic.tokens.json'
  );
  await save(
    'size.tokens.json',
    'https://raw.githubusercontent.com/4xxxxxxx/OceanBaseDesignToken/main/src/data/token/size.tokens.json'
  );
  await save(
    'font/中文.tokens.json',
    'https://raw.githubusercontent.com/4xxxxxxx/OceanBaseDesignToken/main/src/data/token/font/中文.tokens.json'
  );
  await save(
    'font/英文.tokens.json',
    'https://raw.githubusercontent.com/4xxxxxxx/OceanBaseDesignToken/main/src/data/token/font/英文.tokens.json'
  );
  await save(
    'font/日文.tokens.json',
    'https://raw.githubusercontent.com/4xxxxxxx/OceanBaseDesignToken/main/src/data/token/font/日文.tokens.json'
  );

  return { dir, cleanup };
}

async function main(): Promise<void> {
  if (process.env.OCEANBASE_DESIGN_TOKEN_SKIP === '1') {
    console.warn('[check:ob-token-dtcg] OCEANBASE_DESIGN_TOKEN_SKIP=1; skip DTCG comparison.');
    process.exit(0);
  }

  const envDir = process.env.OCEANBASE_DESIGN_TOKEN_DIR;
  let dtcgDir: string;
  let cleanup: (() => void) | undefined;

  if (envDir) {
    if (!existsSync(envDir) || !statSync(envDir).isDirectory()) {
      console.error(
        `[check:ob-token-dtcg] OCEANBASE_DESIGN_TOKEN_DIR is not an existing directory:\n  ${envDir}\n` +
          '  Use the absolute path to OceanBaseDesignToken/src/data/token (not the placeholder /path/to/...).'
      );
      process.exit(1);
    }
    dtcgDir = envDir;
    console.log('[check:ob-token-dtcg] Using local DTCG:', dtcgDir);
  } else {
    console.log(
      '[check:ob-token-dtcg] OCEANBASE_DESIGN_TOKEN_DIR unset; fetching DTCG from raw.githubusercontent.com (main) ...'
    );
    const fetched = await fetchDtcgRawToTemp();
    dtcgDir = fetched.dir;
    cleanup = fetched.cleanup;
  }

  try {
    const { missing } = verifyObTokenDtcg(dtcgDir);

    if (missing.length) {
      console.error('[check:ob-token-dtcg] DTCG WEB vars not covered by genCssVariablesStyle:');
      console.error('  missing:', missing);
      process.exit(1);
    }

    console.log(
      '[check:ob-token-dtcg] OK: every DTCG WEB `--ob-*` is present in genCssVariablesStyle (subset alignment).'
    );
  } finally {
    cleanup?.();
  }
}

// 仅直接执行本文件时跑 CLI；vitest import 时不执行
// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
if (require.main === module) {
  main().catch((err: unknown) => {
    console.error('[check:ob-token-dtcg]', err instanceof Error ? err.message : err);
    process.exit(1);
  });
}
