/**
 * 为 Figma 里「组件 / 组件集 / 变体」在 Dev Mode 中可配置的 **documentationLinks**（设计说明里可点的文档链接）
 * 准备数据：扫描各包下的 `index.$tab-playground.md`，与同目录 `index.figma.tsx` 配对，产出 **Code Connect 占位键 → 文档站 URL** 的 JSON。
 *
 * 典型用法：把每条 URL 通过 Figma MCP **`use_figma`** 写到对应节点的 **`documentationLinks`**（必要时配合 **`descriptionMarkdown`**），
 * 让设计师在稿面说明区直接跳到文档站 **「组件映射」** Tab（`?tab=playground`）做交互对照。
 *
 * 与 `references/figma-documentation-links_reference.md` 一致。
 *
 * Usage（仓库根）:
 *   默认 **只向 stdout 打印 JSON**，不落盘到仓库内（便于重定向到本机任意路径）。
 *   pnpm exec ts-node --esm --transpile-only skills/figma-code-connect/scripts/figma-documentation-link-urls.ts > /tmp/documentation-link-urls.json
 *   若必须写文件：显式 `--out <绝对路径或仓库外路径>`（**不要**默认写入 `skills/figma-code-connect/` 下会被误提交的产物路径）。
 *   DOCUMENTATION_LINK_DOC_ORIGIN=https://design.oceanbase.com pnpm exec ts-node --esm --transpile-only skills/figma-code-connect/scripts/figma-documentation-link-urls.ts > /tmp/documentation-link-urls.json
 *   （仍支持旧名 **`PLAYGROUND_DOC_ORIGIN`**，与上面等价。）
 */
import fs from 'fs';
import path from 'path';

/** Resolve repo root without `import.meta` (root tsconfig uses `module: commonjs`). */
function findMonorepoRoot(startDir: string = process.cwd()): string {
  let dir = path.resolve(startDir);
  for (;;) {
    if (fs.existsSync(path.join(dir, 'pnpm-workspace.yaml'))) {
      return dir;
    }
    const parent = path.dirname(dir);
    if (parent === dir) {
      throw new Error(
        'Could not find monorepo root (pnpm-workspace.yaml). Run this script from inside oceanbase-design.'
      );
    }
    dir = parent;
  }
}

const repoRoot = findMonorepoRoot();
const designSrc = path.join(repoRoot, 'packages/design/src');
const uiSrc = path.join(repoRoot, 'packages/ui/src');
const TAB_PLAYGROUND = 'index.$tab-playground.md';
const INDEX_FIGMA = 'index.figma.tsx';

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

/** Dumi 路由段：PascalCase → kebab-case；已是 `input-number` 等则保持小写。 */
function toKebabRouteSegment(folderName: string): string {
  return folderName
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase();
}

/**
 * Walk `dir` for `index.$tab-playground.md`. When `skipFigmaDir` and immediate child is `figma`, do not descend.
 */
function walkTabPlaygroundFiles(dir: string, acc: string[], skipFigmaDir: boolean): void {
  if (!fs.existsSync(dir)) return;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (skipFigmaDir && ent.name === 'figma') continue;
      walkTabPlaygroundFiles(p, acc, false);
    } else if (ent.name === TAB_PLAYGROUND) {
      acc.push(p);
    }
  }
}

/** 文档站「组件映射」Tab URL；不识别的路径返回 `null`。 */
function playgroundDocUrlForTabFile(tabFileAbs: string, origin: string): string | null {
  const folder = path.basename(path.dirname(tabFileAbs));
  const seg = toKebabRouteSegment(folder);

  const normalized = path.normalize(tabFileAbs);
  const designNorm = path.normalize(designSrc + path.sep);
  const uiNorm = path.normalize(uiSrc + path.sep);

  if (normalized.startsWith(designNorm)) {
    return `${origin}/components/${seg}?tab=playground`;
  }
  if (normalized.startsWith(uiNorm)) {
    return `${origin}/biz-components/${seg}?tab=playground`;
  }
  return null;
}

function parseArgs(argv: string[]): { out: string | null } {
  /** 默认 stdout，避免在仓库内误提交临时 JSON。 */
  let out: string | null = null;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--out' && argv[i + 1]) {
      out = path.resolve(repoRoot, argv[++i]);
    }
  }
  return { out };
}

function main(): void {
  const argv = process.argv.slice(2);
  const { out: outPath } = parseArgs(argv);
  const origin = (
    process.env.DOCUMENTATION_LINK_DOC_ORIGIN ??
    process.env.PLAYGROUND_DOC_ORIGIN ??
    DEFAULT_ORIGIN
  ).replace(/\/$/, '');

  const tabFiles: string[] = [];
  walkTabPlaygroundFiles(designSrc, tabFiles, true);
  walkTabPlaygroundFiles(uiSrc, tabFiles, false);
  tabFiles.sort((a, b) => a.localeCompare(b));

  /** connect 第二个参数 → 文档站 URL（写入 Figma documentationLinks 的目标地址） */
  const map: Record<string, string> = {};
  const conflicts: { key: string; prev: string; next: string }[] = [];

  for (const abs of tabFiles) {
    const relFromRepo = path.relative(repoRoot, abs);
    const documentationTargetUrl = playgroundDocUrlForTabFile(abs, origin);
    if (!documentationTargetUrl) {
      console.warn(
        `[skip] not under packages/design/src (non-figma) or packages/ui/src: ${relFromRepo}`
      );
      continue;
    }

    const figmaPath = path.join(path.dirname(abs), INDEX_FIGMA);
    if (!fs.existsSync(figmaPath)) {
      console.warn(`[skip] missing ${INDEX_FIGMA} next to tab: ${relFromRepo}`);
      continue;
    }

    const src = fs.readFileSync(figmaPath, 'utf8');
    for (const connectKey of extractConnectSecondArgs(src)) {
      const existing = map[connectKey];
      if (existing !== undefined && existing !== documentationTargetUrl) {
        conflicts.push({ key: connectKey, prev: existing, next: documentationTargetUrl });
      }
      map[connectKey] = documentationTargetUrl;
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
    console.error(`[figma-documentation-link-urls] JSON on stdout (${sortedKeys.length} keys)`);
  }
}

main();
