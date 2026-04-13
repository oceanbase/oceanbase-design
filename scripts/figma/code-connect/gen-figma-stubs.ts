/**
 * Fetches a Figma file, groups COMPONENT / COMPONENT_SET by page (CANVAS), and writes
 * one `*.figma.tsx` per page with `figma.connect` blocks and props mapped from
 * `componentPropertyDefinitions`, merged with COMPONENT_SET variant axes inferred from
 * child components (`variantProperties`).
 *
 * Usage:
 *   npm run generate:figma-stubs
 *       Loads `figma/.env` (does not override vars already set in the shell).
 *       Full run: only creates pages that do not yet have a `*.figma.tsx` file.
 *
 *   npm run generate:figma-stubs -- --reset badge
 *   npm run generate:figma-stubs -- badge
 *       Reset one page file (e.g. `Badge.figma.tsx`) under `packages/design/src/figma/`.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
/** Monorepo root (`oceanbase-design/`). */
const repoRoot = path.resolve(__dirname, '../../..');
const figmaEnvPath = path.join(repoRoot, 'figma', '.env');
const figmaConfigPath = path.join(repoRoot, 'figma', 'figma.config.json');

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

/** True when this Figma page (CANVAS) should not emit a `*.figma.tsx` file. */
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

/** Align `codeConnect.include` with every `*.figma.tsx` on disk (sorted). Publish/parse use this list. */
function syncCodeConnectInclude(configPath: string, uiDirAbs: string, projectRoot: string): void {
  if (!fs.existsSync(uiDirAbs)) return;
  const names = fs.readdirSync(uiDirAbs).filter(f => f.endsWith('.figma.tsx'));
  const include = names
    .sort((a, b) => a.localeCompare(b))
    .map(f => {
      const abs = path.join(uiDirAbs, f);
      const rel = path.relative(projectRoot, abs);
      return rel.split(path.sep).join('/');
    });

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
  console.log(`Synced figma.config.json codeConnect.include (${include.length} file(s)).`);
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
  fileBase: string;
  pageName: string;
  pageItems: { node: FigmaNode; pageName: string }[];
  outPath: string;
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
  outDir: string
): PagePlan[] {
  const pageEntries = [...byPage.entries()].sort(([a], [b]) => a.localeCompare(b));
  let pageIndex = 0;
  const usedFileBases = new Set<string>();
  const plans: PagePlan[] = [];

  for (const [pageName, pageItems] of pageEntries) {
    pageIndex += 1;
    let fileBase = pageNameToFileBase(pageName, pageIndex);
    let disambig = fileBase;
    let n = 0;
    while (usedFileBases.has(disambig)) {
      n += 1;
      disambig = `${fileBase}_${n}`;
    }
    usedFileBases.add(disambig);
    fileBase = disambig;
    plans.push({
      fileBase,
      pageName,
      pageItems,
      outPath: path.join(outDir, `${fileBase}.figma.tsx`),
    });
  }
  return plans;
}

function normalizeResetArg(raw: string): string {
  let s = raw.trim();
  s = s.replace(/^.*[/\\]/, '');
  s = s.replace(/\.figma\.tsx$/i, '');
  return s;
}

/** Match user input `badge` / `Badge` to plan `fileBase` `Badge` or `Badge_2`. */
function planMatchesResetTarget(plan: PagePlan, wantedNormalized: string): boolean {
  if (!wantedNormalized) return false;
  const w = wantedNormalized.toLowerCase();
  if (plan.fileBase.toLowerCase() === w) return true;
  return false;
}

function parseResetTarget(argv: string[]): string | null {
  const args = argv.slice(2);
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`Usage:
  npm run generate:figma-stubs
      Reads figma/.env. Creates missing page stubs only (existing *.figma.tsx files are not overwritten).
      Output: packages/design/src/figma/

  npm run generate:figma-stubs -- <name>
  npm run generate:figma-stubs -- --reset <name>
  npm run generate:figma-stubs -- -r <name>
      Regenerate one file, e.g. badge → packages/design/src/figma/Badge.figma.tsx.

  npm run generate:figma-stubs -- badge
  npm run generate:figma-stubs -- --reset Badge
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

  const content = pageFileContent(plan.pageName, blocks);
  fs.mkdirSync(path.dirname(plan.outPath), { recursive: true });
  fs.writeFileSync(plan.outPath, content, 'utf8');
}

async function main() {
  const outDir = path.join(repoRoot, 'packages/design/src/figma');
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
  const plans = buildPagePlans(byPage, outDir);

  if (resetTargetRaw) {
    const matches = plans.filter(p => planMatchesResetTarget(p, resetTargetRaw));
    if (matches.length === 0) {
      const available = plans.map(p => p.fileBase).join(', ');
      console.error(
        `No page maps to "${resetTargetRaw}.figma.tsx". Figma-derived names: ${available || '(none)'}`
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
    syncCodeConnectInclude(figmaConfigPath, outDir, repoRoot);
    console.log(`Reset ${plan.fileBase}.figma.tsx (${plan.pageName}).`);
    return;
  }

  const usedPlaceholders = new Set<string>();
  const configAdditions: Record<string, string> = {};
  let written = 0;
  let skipped = 0;

  for (const plan of plans) {
    if (fs.existsSync(plan.outPath)) {
      skipped += 1;
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
  syncCodeConnectInclude(figmaConfigPath, outDir, repoRoot);

  console.log(
    `Done. Wrote ${written} page file(s), skipped ${skipped} existing (not overwritten).`
  );
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
