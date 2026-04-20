/**
 * Fetches a Figma file, groups COMPONENT / COMPONENT_SET by page (CANVAS), and writes
 * one `index.figma.tsx` per page folder with `figma.connect` blocks and props mapped from
 * `componentPropertyDefinitions`, merged with COMPONENT_SET variant axes inferred from
 * child components (`variantProperties`).
 *
 * Usage（仓库根，见 `skills/figma-code-connect/SKILL.md`）:
 *   pnpm exec ts-node --esm --transpile-only skills/figma-code-connect/scripts/figma-components.ts
 *       Loads `skills/figma-code-connect/.env`（若存在）；不覆盖 shell 里已有的变量。
 *       全量：Figma 每个画板只在与本地 **同名** 的 `@oceanbase/design`、`@oceanbase/ui` 包目录中生成 `index.figma.tsx`。
 *       可匹配目录（均做不区分大小写、忽略连字符的目录名比较）：
 *       - `packages/design/src/<组件>/`、`packages/ui/src/<组件>/`（仅与已有组件目录匹配）。
 *       无匹配则 **不生成**（不新建其他路径）；有匹配且文件尚不存在才写入。
 *
 *   pnpm exec ts-node --esm --transpile-only skills/figma-code-connect/scripts/figma-components.ts -- --reset badge
 *   pnpm exec ts-node --esm --transpile-only skills/figma-code-connect/scripts/figma-components.ts -- badge
 *       重置单个页面 stub（如 `badge` → `packages/design/src/badge/index.figma.tsx`）。
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

/** Monorepo root (`oceanbase-design/`). */
const repoRoot = findMonorepoRoot();

const figmaEnvPath = path.join(repoRoot, 'skills', 'figma-code-connect', '.env');
const figmaConfigPath = path.join(repoRoot, 'skills', 'figma-code-connect', 'figma.config.json');

/**
 * Minimal `.env` loader so we do not depend on `dotenv`.
 * Does not override existing `process.env` entries.
 */
function loadEnvFile(filePath: string): void {
  if (!fs.existsSync(filePath)) {
    return;
  }
  const raw = fs.readFileSync(filePath, 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (process.env[key] === undefined) {
      process.env[key] = val;
    }
  }
}

loadEnvFile(figmaEnvPath);

const TOKEN = process.env.FIGMA_ACCESS_TOKEN ?? '';
const FILE_KEY_ENV = process.env.FIGMA_FILE_KEY ?? '';

/** Lowercase + strip `-` so `Alert` / `InputNumber` / `input-number` match the same component dir. */
function normComponentDirName(name: string): string {
  return name.toLowerCase().replace(/-/g, '');
}

/**
 * Resolve `.../index.figma.tsx` only if a matching component directory already exists under
 * `packages/design/src/<组件>/`（跳过顶层 `figma` 目录）或 `packages/ui/src/<组件>/`. No new folders; `null` = skip.
 * `matchNameBase` comes from `pageNameToFileBase` (before disambiguation suffix `_1`, …).
 */
function findMatchedPackageOutputPath(matchNameBase: string, repo: string): string | null {
  const n = normComponentDirName(matchNameBase);
  const matches: { tier: number; abs: string }[] = [];
  const designSrc = path.join(repo, 'packages/design/src');

  if (fs.existsSync(designSrc)) {
    for (const ent of fs.readdirSync(designSrc, { withFileTypes: true })) {
      if (!ent.isDirectory() || ent.name.startsWith('.')) continue;
      if (ent.name === 'figma') continue;
      if (normComponentDirName(ent.name) === n) {
        matches.push({ tier: 0, abs: path.join(designSrc, ent.name, 'index.figma.tsx') });
      }
    }
  }

  const uiSrc = path.join(repo, 'packages/ui/src');
  if (fs.existsSync(uiSrc)) {
    for (const ent of fs.readdirSync(uiSrc, { withFileTypes: true })) {
      if (!ent.isDirectory()) continue;
      if (normComponentDirName(ent.name) === n) {
        matches.push({ tier: 1, abs: path.join(uiSrc, ent.name, 'index.figma.tsx') });
      }
    }
  }

  matches.sort((a, b) => a.tier - b.tier || a.abs.localeCompare(b.abs));
  if (matches.length === 0) {
    return null;
  }
  return matches[0]!.abs;
}

/** When `designSrcRoot` is set, skip the direct child directory named `figma` under it (legacy layout; not used for new Code Connect). */
function walkIndexFigmaFiles(dir: string, acc: string[], designSrcRoot?: string): void {
  if (!fs.existsSync(dir)) return;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules' || ent.name === 'dist' || ent.name === '.git') continue;
      if (designSrcRoot && p === path.join(designSrcRoot, 'figma')) continue;
      walkIndexFigmaFiles(p, acc, designSrcRoot);
    } else if (ent.name === 'index.figma.tsx') {
      acc.push(p);
    }
  }
}

/** Appended after every discovered `index.figma.tsx` (recursive scan) when syncing `codeConnect.include`. */
const CODE_CONNECT_ICONS_INCLUDES = [
  'packages/icons/src/index.ts',
  'packages/icons/src/types.ts',
  'packages/icons/src/icons/**/*.tsx',
  'packages/icons/src/asn/**/*.ts',
  'packages/icons/src/components/**/*.ts',
  'packages/icons/src/components/**/*.tsx',
] as const;

type ComponentPropDef = {
  type: string;
  defaultValue?: string | boolean;
  variantOptions?: string[];
};

type FigmaNode = {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
  componentPropertyDefinitions?: Record<string, ComponentPropDef>;
  variantProperties?: Record<string, string>;
};

function nodeIdToUrlParam(id: string): string {
  return String(id).replace(/:/g, '-');
}

function toPlaceholderKey(
  componentName: string,
  nodeId: string,
  prefix: string,
  used: Set<string>
): string {
  const slug = componentName
    .replace(/[/\\]+/g, ' ')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .toUpperCase();
  const idSuffix = nodeId.replace(/[^0-9a-zA-Z]/g, '');
  const base = `${prefix}_${slug || 'COMPONENT'}`;
  let inner = base;
  let n = 0;
  while (used.has(inner)) {
    n += 1;
    inner = `${base}_${idSuffix}_${n}`;
  }
  used.add(inner);
  return `<${inner}>`;
}

function safePascalExport(name: string, nodeId: string): string {
  const words = name.replace(/[/\\]/g, ' ').match(/[a-zA-Z][a-zA-Z0-9]*|[0-9]+/g);
  if (!words?.length) {
    return `FigmaNode${nodeId.replace(/[^0-9a-zA-Z]/g, '')}`;
  }
  let start = 0;
  while (start < words.length && /^\d+$/.test(words[start])) {
    start += 1;
  }
  const meaningful = words.slice(start);
  if (meaningful.length === 0) {
    return `FigmaNode${nodeId.replace(/[^0-9a-zA-Z]/g, '')}`;
  }
  const pascal = meaningful.map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join('');
  if (!/^[A-Za-z_$]/.test(pascal)) {
    return `Figma${pascal}`;
  }
  return pascal;
}

const SKIPPED_CANVAS_TITLES = new Set(['icon', 'cursor', 'cover', 'demo', 'assests']);

/** True when this Figma page (CANVAS) should not emit a page folder with `index.figma.tsx`. */
function isSkippedCanvasPage(pageName: string): boolean {
  const cleaned = pageName.replace(/^[\s↵\u21b5]+/u, '').trim();
  if (!cleaned) return false;
  return SKIPPED_CANVAS_TITLES.has(cleaned.toLowerCase());
}

function pageNameToFileBase(pageName: string, pageIndex: number): string {
  const cleaned = pageName.replace(/^[\s↵\u21b5]+/u, '').trim();
  const base = safePascalExport(cleaned || `Page${pageIndex}`, String(pageIndex));
  if (!base || base.startsWith('FigmaNode')) {
    return `Page${pageIndex}`;
  }
  return base;
}

function toCamelCase(figmaPropName: string): string {
  const parts = figmaPropName
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map(p => p[0].toUpperCase() + p.slice(1).toLowerCase());
  if (!parts.length) return 'prop';
  return parts[0].toLowerCase() + parts.slice(1).join('');
}

function uniqueCamelCase(figmaPropName: string, used: Set<string>): string {
  let base = toCamelCase(figmaPropName);
  if (!base) base = 'prop';
  let key = base;
  let n = 0;
  while (used.has(key)) {
    n += 1;
    key = `${base}_${n}`;
  }
  used.add(key);
  return key;
}

function jsStringLiteral(s: string): string {
  return JSON.stringify(s);
}

function objectKeyForEnumValue(v: string): string {
  if (/^[a-zA-Z_$][\w$]*$/.test(v)) return v;
  return jsStringLiteral(v);
}

function escBlockComment(s: string): string {
  return s.replace(/\*\//g, '* /');
}

/**
 * Figma REST API appends internal ids like `#5002:4` to component property names.
 * Without stripping, camelCase becomes `label50024` and figma.string gets the wrong key.
 */
function stripFigmaPropertyIdSuffix(s: string): string {
  return s
    .replace(/#[0-9]+:[0-9]+/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function inferVariantDefinitionsFromSet(set: FigmaNode): Record<string, ComponentPropDef> {
  const valuesByProp = new Map<string, Set<string>>();
  for (const ch of set.children ?? []) {
    if (ch.type !== 'COMPONENT' || !ch.variantProperties) continue;
    for (const [k, v] of Object.entries(ch.variantProperties)) {
      if (!valuesByProp.has(k)) valuesByProp.set(k, new Set());
      valuesByProp.get(k)!.add(v);
    }
  }
  const out: Record<string, ComponentPropDef> = {};
  for (const [k, setVals] of valuesByProp) {
    out[k] = {
      type: 'VARIANT',
      variantOptions: [...setVals].sort(),
    };
  }
  return out;
}

function getPropertyDefinitions(node: FigmaNode): Record<string, ComponentPropDef> {
  const raw = node.componentPropertyDefinitions;
  const hasRaw = raw && Object.keys(raw).length > 0;
  if (node.type === 'COMPONENT_SET') {
    const inferred = inferVariantDefinitionsFromSet(node);
    if (!hasRaw) return inferred;
    return { ...inferred, ...raw };
  }
  if (hasRaw) return raw!;
  return {};
}

function buildPropsAndExample(defs: Record<string, ComponentPropDef>): {
  propsInner: string;
  exampleInner: string;
} {
  const camelUsed = new Set<string>();
  const lines: string[] = [];
  const propsForExample: { codeProp: string; figmaName: string; kind: string }[] = [];

  for (const [rawKey, def] of Object.entries(defs)) {
    const figmaName = stripFigmaPropertyIdSuffix(rawKey) || rawKey;
    const trimmed = figmaName.trim();
    const codePropHint = /^property\s*1$/i.test(trimmed)
      ? 'layout'
      : /^property\s*2$/i.test(trimmed)
        ? 'layout2'
        : /^property\s*3$/i.test(trimmed)
          ? 'layout3'
          : figmaName;
    const codeProp = uniqueCamelCase(codePropHint, camelUsed);
    const nameLit = jsStringLiteral(figmaName);
    const t = String(def.type).toUpperCase();

    if (t === 'VARIANT') {
      const opts = def.variantOptions ?? [];
      if (opts.length === 0) continue;
      const entries = opts
        .map(v => `      ${objectKeyForEnumValue(v)}: ${jsStringLiteral(v)},`)
        .join('\n');
      lines.push(`    ${codeProp}: figma.enum(${nameLit}, {\n${entries}\n    }),`);
      propsForExample.push({ codeProp, figmaName, kind: 'VARIANT' });
    } else if (t === 'BOOLEAN' || t === 'BOOL') {
      lines.push(
        `    ${codeProp}: figma.boolean(${nameLit}, {\n      true: true,\n      false: false,\n    }),`
      );
      propsForExample.push({ codeProp, figmaName, kind: 'BOOLEAN' });
    } else if (t === 'TEXT' || t === 'STRING') {
      lines.push(`    ${codeProp}: figma.string(${nameLit}),`);
      propsForExample.push({ codeProp, figmaName, kind: 'TEXT' });
    } else if (t === 'INSTANCE_SWAP' || t === 'INSTANCE') {
      lines.push(`    ${codeProp}: figma.instance(${nameLit}),`);
      propsForExample.push({ codeProp, figmaName, kind: 'INSTANCE_SWAP' });
    }
  }

  const propsInner =
    lines.length > 0
      ? `\n${lines.join('\n')}\n  `
      : '\n    // (no mapped component properties in API response)\n  ';

  const propNames = propsForExample.map(p => p.codeProp);
  const destructure = propNames.join(', ');

  let exampleInner: string;
  if (destructure) {
    exampleInner = `({ ${destructure} }) => {\n    void [${propNames.join(', ')}];\n    return <div></div>;\n  }`;
  } else {
    exampleInner = `() => <div></div>`;
  }

  return { propsInner, exampleInner };
}

function connectBlock(
  placeholder: string,
  figmaName: string,
  nodeId: string,
  devUrl: string,
  defs: Record<string, ComponentPropDef>
): string {
  const { propsInner, exampleInner } = buildPropsAndExample(defs);
  return `// Figma: "${escBlockComment(figmaName)}" · ${nodeId}
// ${devUrl}
figma.connect(<></>, "${placeholder}", {
  props: {${propsInner}},
  example: ${exampleInner},
});
`;
}

function walkCollect(
  node: FigmaNode,
  pageName: string,
  insideComponentSet: boolean,
  out: { node: FigmaNode; pageName: string }[]
): void {
  let nextPage = pageName;
  if (node.type === 'CANVAS') {
    nextPage = node.name;
  }

  const nextInside = insideComponentSet || node.type === 'COMPONENT_SET';

  if (node.type === 'COMPONENT_SET') {
    out.push({ node, pageName: nextPage });
  } else if (node.type === 'COMPONENT' && !insideComponentSet) {
    out.push({ node, pageName: nextPage });
  }

  for (const c of node.children ?? []) {
    walkCollect(c, nextPage, nextInside, out);
  }
}

function collectAll(document: FigmaNode) {
  const collected: { node: FigmaNode; pageName: string }[] = [];
  walkCollect(document, '', false, collected);
  return collected;
}

async function figmaGetFile(fileKey: string): Promise<{
  name: string;
  document: FigmaNode;
}> {
  const url = `https://api.figma.com/v1/files/${encodeURIComponent(fileKey)}?geometry=none`;
  const res = await fetch(url, {
    headers: { 'X-Figma-Token': TOKEN },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Figma API ${res.status}: ${text.slice(0, 500)}`);
  }
  return res.json() as Promise<{ name: string; document: FigmaNode }>;
}

function buildDevUrl(fileKey: string, fileNameForUrl: string, nodeId: string): string {
  const enc = encodeURIComponent(fileNameForUrl);
  const nid = nodeIdToUrlParam(nodeId);
  return `https://www.figma.com/design/${fileKey}/${enc}?node-id=${nid}&m=dev`;
}

function mergeFigmaConfig(configPath: string, additions: Record<string, string>) {
  if (Object.keys(additions).length === 0) return;
  const raw = fs.readFileSync(configPath, 'utf8');
  const json = JSON.parse(raw) as {
    codeConnect?: { documentUrlSubstitutions?: Record<string, string> };
  };
  const cc = json.codeConnect ?? (json.codeConnect = {});
  const subs = cc.documentUrlSubstitutions ?? (cc.documentUrlSubstitutions = {});
  for (const [k, v] of Object.entries(additions)) {
    if (subs[k] != null && subs[k] !== v) {
      console.warn(`Config key exists with different URL, skipping: ${k}`);
      continue;
    }
    subs[k] = v;
  }
  fs.writeFileSync(configPath, `${JSON.stringify(json, null, 2)}\n`, 'utf8');
}

/**
 * Align `codeConnect.include` with every `index.figma.tsx` under `packages/design/src` (excluding the
 * direct `figma` subdirectory if present) and `packages/ui/src`, then append `@oceanbase/icons` entry points.
 */
function syncCodeConnectInclude(configPath: string, projectRoot: string): void {
  const designSrc = path.join(projectRoot, 'packages/design/src');
  const uiSrc = path.join(projectRoot, 'packages/ui/src');
  const found: string[] = [];
  walkIndexFigmaFiles(designSrc, found, designSrc);
  walkIndexFigmaFiles(uiSrc, found);
  const figmaRels = found
    .map(abs => path.relative(projectRoot, abs).split(path.sep).join('/'))
    .filter(p => p.endsWith('index.figma.tsx'))
    .sort((a, b) => a.localeCompare(b));
  const include = [...figmaRels, ...CODE_CONNECT_ICONS_INCLUDES];

  if (!fs.existsSync(configPath)) {
    console.warn(`syncCodeConnectInclude: missing config at ${configPath}, skip.`);
    return;
  }
  const raw = fs.readFileSync(configPath, 'utf8');
  const json = JSON.parse(raw) as {
    codeConnect?: { include?: string[] };
  };
  const cc = json.codeConnect ?? (json.codeConnect = {});
  const prev = cc.include ?? [];
  const same = prev.length === include.length && prev.every((p, i) => p === include[i]);
  if (same) return;

  cc.include = include;
  fs.writeFileSync(configPath, `${JSON.stringify(json, null, 2)}\n`, 'utf8');
  console.log(
    `Synced figma.config.json codeConnect.include (${figmaRels.length} index.figma.tsx + ${CODE_CONNECT_ICONS_INCLUDES.length} icons).`
  );
}

function pageFileContent(pageName: string, blocks: { block: string }[]): string {
  const body = blocks.map(b => b.block).join('\n\n');
  return `// @ts-nocheck

import { figma } from "@figma/code-connect";

/**
 * Auto-generated — Code Connect (one file per Figma page).
 * Page: "${escBlockComment(pageName)}"
 * Stubs use figma.connect(<></>, …); swap in your component and refine prop mappings.
 */

${body}
`;
}

type PagePlan = {
  /** Disambiguated key (e.g. `Badge_1`); for logs / CLI. */
  fileBase: string;
  /** `pageNameToFileBase` before disambiguation; used to match package component dirs. */
  matchNameBase: string;
  pageName: string;
  pageItems: { node: FigmaNode; pageName: string }[];
  /** `null` = no existing `design` / `ui` component folder for this Figma page — do not generate. */
  outPath: string | null;
};

function groupItemsByPage(
  itemsActive: { node: FigmaNode; pageName: string }[]
): Map<string, typeof itemsActive> {
  const byPage = new Map<string, typeof itemsActive>();
  for (const it of itemsActive) {
    const key = it.pageName || '—';
    if (!byPage.has(key)) byPage.set(key, []);
    byPage.get(key)!.push(it);
  }
  return byPage;
}

/** Same file naming as the original generator (page order + disambiguation). */
function buildPagePlans(
  byPage: Map<string, { node: FigmaNode; pageName: string }[]>,
  projectRoot: string
): PagePlan[] {
  const pageEntries = [...byPage.entries()].sort(([a], [b]) => a.localeCompare(b));
  let pageIndex = 0;
  const usedFileBases = new Set<string>();
  const plans: PagePlan[] = [];

  for (const [pageName, pageItems] of pageEntries) {
    pageIndex += 1;
    const matchNameBase = pageNameToFileBase(pageName, pageIndex);
    let fileBase = matchNameBase;
    let disambig = fileBase;
    let n = 0;
    while (usedFileBases.has(disambig)) {
      n += 1;
      disambig = `${fileBase}_${n}`;
    }
    usedFileBases.add(disambig);
    fileBase = disambig;
    const outPath = findMatchedPackageOutputPath(matchNameBase, projectRoot);
    plans.push({
      fileBase,
      matchNameBase,
      pageName,
      pageItems,
      outPath,
    });
  }
  return plans;
}

function normalizeResetArg(raw: string): string {
  let s = raw.trim();
  s = s.replace(/\/index\.figma\.tsx$/i, '');
  s = s.replace(/^.*[/\\]/, '');
  s = s.replace(/\.figma\.tsx$/i, '');
  return s;
}

/**
 * Match `badge` / `Badge` / `badge_1` to the plan: `fileBase` disambig or `matchNameBase`
 * (same norm as directory matching).
 */
function planMatchesResetTarget(plan: PagePlan, wantedRaw: string): boolean {
  if (!wantedRaw) return false;
  const wN = normComponentDirName(wantedRaw);
  if (normComponentDirName(plan.fileBase) === wN) return true;
  if (normComponentDirName(plan.matchNameBase) === wN) return true;
  return false;
}

function parseResetTarget(argv: string[]): string | null {
  const args = argv.slice(2);
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`Usage (from repo root):
  pnpm exec ts-node --esm --transpile-only skills/figma-code-connect/scripts/figma-components.ts
      Reads skills/figma-code-connect/.env. Emits only where a design/ui component dir already exists.
      Figma pages without a matching local folder are skipped (no file created).

  pnpm exec ts-node --esm --transpile-only skills/figma-code-connect/scripts/figma-components.ts -- <name>
  pnpm exec ts-node --esm --transpile-only skills/figma-code-connect/scripts/figma-components.ts -- --reset <name>
  pnpm exec ts-node --esm --transpile-only skills/figma-code-connect/scripts/figma-components.ts -- -r <name>
      Regenerate one file, e.g. badge → packages/design/src/badge/index.figma.tsx (by name match).

  pnpm exec ts-node --esm --transpile-only skills/figma-code-connect/scripts/figma-components.ts -- badge
  pnpm exec ts-node --esm --transpile-only skills/figma-code-connect/scripts/figma-components.ts -- --reset Badge
`);
    process.exit(0);
  }

  let fromFlag: string | undefined;
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--reset' || a === '-r') {
      fromFlag = args[i + 1];
      if (!fromFlag || fromFlag.startsWith('-')) {
        console.error('Missing value for --reset / -r.');
        process.exit(1);
      }
      i++;
    }
  }
  if (fromFlag) return normalizeResetArg(fromFlag);

  const positionals = args.filter(a => !a.startsWith('-'));
  if (positionals.length === 0) return null;
  if (positionals.length > 1) {
    console.error('Too many arguments. Use a single name, e.g. `badge` or `--reset badge`.');
    process.exit(1);
  }
  return normalizeResetArg(positionals[0]!);
}

function emitPageFile(
  plan: PagePlan,
  fileKey: string,
  fileNameForUrl: string,
  placeholderPrefix: string,
  usedPlaceholders: Set<string>,
  configAdditions: Record<string, string>
): void {
  const blocks: { block: string }[] = [];
  const sortedItems = [...plan.pageItems].sort((a, b) => a.node.name.localeCompare(b.node.name));

  for (const { node } of sortedItems) {
    const placeholder = toPlaceholderKey(node.name, node.id, placeholderPrefix, usedPlaceholders);
    const devUrl = buildDevUrl(fileKey, fileNameForUrl, node.id);
    configAdditions[placeholder] = devUrl;

    const defs = getPropertyDefinitions(node);
    const block = connectBlock(placeholder, node.name, node.id, devUrl, defs);
    blocks.push({ block });
  }

  const outPath = plan.outPath;
  if (!outPath) {
    throw new Error('emitPageFile: outPath is null (no @oceanbase/design|ui match)');
  }
  const content = pageFileContent(plan.pageName, blocks);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, content, 'utf8');
}

async function main() {
  const placeholderPrefix = 'FIGMA_OCEANBASE';
  const fileKey = FILE_KEY_ENV;
  const resetTargetRaw = parseResetTarget(process.argv);

  if (!TOKEN) {
    console.error(`Missing FIGMA_ACCESS_TOKEN (set in ${figmaEnvPath} or the environment).`);
    process.exit(1);
  }
  if (!fileKey) {
    console.error(`Missing FIGMA_FILE_KEY (set in ${figmaEnvPath} or the environment).`);
    process.exit(1);
  }

  console.log(`Fetching Figma file ${fileKey}...`);
  const file = await figmaGetFile(fileKey);
  const fileNameForUrl = file.name;

  const doc = file.document;
  const items = collectAll(doc);

  console.log(`Found ${items.length} root component / component set node(s).`);

  const skippedPages = new Set<string>();
  const itemsActive = items.filter(it => {
    const skip = isSkippedCanvasPage(it.pageName);
    if (skip) skippedPages.add(it.pageName || '—');
    return !skip;
  });
  if (skippedPages.size > 0) {
    console.log(
      `Skipping ${items.length - itemsActive.length} node(s) on ignored page(s): ${[...skippedPages].join(', ')}`
    );
  }

  const byPage = groupItemsByPage(itemsActive);
  const plans = buildPagePlans(byPage, repoRoot);

  if (resetTargetRaw) {
    const matches = plans.filter(p => planMatchesResetTarget(p, resetTargetRaw));
    if (matches.length === 0) {
      const available = plans
        .map(p => `${p.matchNameBase}${p.outPath ? '' : ' (no local dir)'}`)
        .join(', ');
      console.error(
        `No plan matches reset "${resetTargetRaw}". Tried Figma name bases: ${available || '(none)'}`
      );
      process.exit(1);
    }
    if (matches.length > 1) {
      console.error(
        `Ambiguous reset target "${resetTargetRaw}". Matches: ${matches.map(m => m.fileBase).join(', ')}`
      );
      process.exit(1);
    }

    const plan = matches[0]!;
    if (!plan.outPath) {
      console.error(
        `Reset target matches Figma page "${plan.pageName}" (base ${plan.matchNameBase}) but there is no matching @oceanbase/design or @oceanbase/ui component directory.`
      );
      process.exit(1);
    }
    const usedPlaceholders = new Set<string>();
    const configAdditions: Record<string, string> = {};
    emitPageFile(
      plan,
      fileKey,
      fileNameForUrl,
      placeholderPrefix,
      usedPlaceholders,
      configAdditions
    );
    mergeFigmaConfig(figmaConfigPath, configAdditions);
    syncCodeConnectInclude(figmaConfigPath, repoRoot);
    console.log(`Reset ${path.relative(repoRoot, plan.outPath!)} (${plan.pageName}).`);
    return;
  }

  const usedPlaceholders = new Set<string>();
  const configAdditions: Record<string, string> = {};
  let written = 0;
  let skippedExisting = 0;
  let skippedNoPackage = 0;

  const byOut = new Map<string, PagePlan[]>();
  for (const p of plans) {
    if (p.outPath) {
      const k = p.outPath;
      if (!byOut.has(k)) byOut.set(k, []);
      byOut.get(k)!.push(p);
    }
  }
  for (const [op, pls] of byOut) {
    if (pls.length > 1) {
      console.warn(
        `Warning: ${pls.length} Figma pages map to the same out path ${op}: ${pls.map(p => escBlockComment(p.pageName)).join(' | ')}. Last write wins in this run.`
      );
    }
  }

  for (const plan of plans) {
    if (!plan.outPath) {
      skippedNoPackage += 1;
      console.log(
        `Skip (no @oceanbase/design|ui component dir for "${escBlockComment(plan.pageName)}", base ${plan.matchNameBase})`
      );
      continue;
    }
    if (fs.existsSync(plan.outPath)) {
      skippedExisting += 1;
      continue;
    }

    emitPageFile(
      plan,
      fileKey,
      fileNameForUrl,
      placeholderPrefix,
      usedPlaceholders,
      configAdditions
    );
    written += 1;
  }

  mergeFigmaConfig(figmaConfigPath, configAdditions);
  syncCodeConnectInclude(figmaConfigPath, repoRoot);

  console.log(
    `Done. Wrote ${written} file(s), skipped ${skippedExisting} already present, ${skippedNoPackage} Figma page(s) with no local component folder.`
  );
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
