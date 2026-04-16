/**
 * 扫描 packages/design/src 下各组件目录中的 index.$tab-playground.md，
 * 根据 embed 定位 figma 目录下全部 *.figma.tsx，提取每条 figma.connect 的第二个参数（Code Connect 链接键），
 * 映射到文档站「组件映射」Tab：{origin}/components/{slug}?tab=playground
 *
 * slug 取自 $tab-playground.md 所在目录名（与 gen-link.md 一致）。
 *
 * Usage:
 *   pnpm exec ts-node-esm --transpile-only scripts/figma/code-connect/gen-playground-connect-map.ts
 *   pnpm exec ts-node-esm --transpile-only scripts/figma/code-connect/gen-playground-connect-map.ts -- --out figma/playground-connect-map.json
 *   PLAYGROUND_DOC_ORIGIN=https://design.oceanbase.com pnpm exec ts-node-esm --transpile-only ...
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../../..');
const designSrc = path.join(repoRoot, 'packages/design/src');
const TAB_PLAYGROUND = 'index.$tab-playground.md';
const EMBED_RE = /embed\s+src=["']\.\.\/figma\/([^/]+)\/index\.md/i;

/** `figma.connect(第一参, '第二参', …)` — 提取第二参（Code Connect 链接键） */
function extractConnectSecondArgs(source: string): string[] {
  const keys: string[] = [];
  const re = /figma\.connect\s*\(\s*[^,]+,\s*(['"])((?:\\.|(?!\1).)*)\1/gms;
  let m: RegExpExecArray | null;
  while ((m = re.exec(source)) !== null) {
    keys.push(m[2]);
  }
  return keys;
}

const DEFAULT_ORIGIN = 'https://design.oceanbase.com';

function walkTabPlaygroundFiles(dir: string, acc: string[]): void {
  if (!fs.existsSync(dir)) return;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'figma') continue;
      walkTabPlaygroundFiles(p, acc);
    } else if (ent.name === TAB_PLAYGROUND) {
      acc.push(p);
    }
  }
}

function parseEmbedFigmaBase(body: string): string | null {
  const m = body.match(EMBED_RE);
  return m ? m[1] : null;
}

function parseArgs(argv: string[]): { out: string | null } {
  let out: string | null = path.join(repoRoot, 'figma', 'playground-connect-map.json');
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--out' && argv[i + 1]) {
      out = path.resolve(repoRoot, argv[++i]);
    }
    if (argv[i] === '--stdout') {
      out = null;
    }
  }
  return { out };
}

function main(): void {
  const argv = process.argv.slice(2);
  const { out: outPath } = parseArgs(argv);
  const origin = DEFAULT_ORIGIN.replace(/\/$/, '');

  const tabFiles: string[] = [];
  walkTabPlaygroundFiles(designSrc, tabFiles);
  tabFiles.sort((a, b) => a.localeCompare(b));

  /** connect 第二个参数 → 文档站 URL */
  const map: Record<string, string> = {};
  const conflicts: { key: string; prev: string; next: string }[] = [];

  for (const abs of tabFiles) {
    const rel = path.relative(designSrc, abs);
    const slug = path.dirname(rel);
    const body = fs.readFileSync(abs, 'utf8');
    const figmaBase = parseEmbedFigmaBase(body);
    if (!figmaBase) {
      console.warn(`[skip] no embed ../figma/<Name>/index.md in ${rel}`);
      continue;
    }

    const playgroundUrl = `${origin}/components/${slug}?tab=playground`;
    const figmaDir = path.join(designSrc, 'figma', figmaBase);
    if (!fs.existsSync(figmaDir)) {
      console.warn(`[skip] missing directory packages/design/src/figma/${figmaBase} (${rel})`);
      continue;
    }

    const figmaTsx = fs
      .readdirSync(figmaDir)
      .filter(f => f.endsWith('.figma.tsx'))
      .map(f => path.join(figmaDir, f));

    for (const fp of figmaTsx) {
      const src = fs.readFileSync(fp, 'utf8');
      for (const connectKey of extractConnectSecondArgs(src)) {
        const existing = map[connectKey];
        if (existing !== undefined && existing !== playgroundUrl) {
          conflicts.push({ key: connectKey, prev: existing, next: playgroundUrl });
        }
        map[connectKey] = playgroundUrl;
      }
    }
  }

  for (const c of conflicts) {
    console.warn(
      `[warn] duplicate connect key with different URLs (last wins): ${JSON.stringify(c.key)}\n  was: ${c.prev}\n  now: ${c.next}`
    );
  }

  const sortedKeys = Object.keys(map).sort((a, b) => a.localeCompare(b));
  const ordered: Record<string, string> = {};
  for (const k of sortedKeys) {
    ordered[k] = map[k];
  }

  const json = JSON.stringify(ordered, null, 2) + '\n';

  if (outPath) {
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, json, 'utf8');
    console.log(`Wrote ${path.relative(repoRoot, outPath)} (${sortedKeys.length} keys)`);
  } else {
    process.stdout.write(json);
  }
}

main();
