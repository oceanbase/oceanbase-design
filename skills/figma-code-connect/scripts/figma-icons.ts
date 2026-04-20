/**
 * Sync Figma icons → `Icons/index.figma.tsx`, optional SVG under `packages/icons/svg`.
 * Regenerate TSX under `packages/icons` is not run here; run `pnpm --filter @oceanbase/icons generate` manually when needed.
 *
 * Usage（仓库根，见 `skills/figma-code-connect/SKILL.md`）:
 *   pnpm exec ts-node --esm --transpile-only skills/figma-code-connect/scripts/figma-icons.ts
 *
 * SVG 去重：`outlined|filled|twotone|colored` 各自目录树下 **basename（*.svg 主文件名）全局唯一**（任意子文件夹间不可同名）。
 * 同一 theme 下多候选时：优先更浅路径；遇到同名文件时始终保留旧文件（磁盘已有内容不会被 Figma 内容覆盖）。
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

const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY;
const URL_BASE = 'https://api.figma.com/v1/files';
const URL_BASE_IMAGES = 'https://api.figma.com/v1/images';

const ROOT_TRAVERSE_IDS = (process.env.FIGMA_ICON_ROOT_IDS ?? '5026:7968')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

const FIGMA_SVG_OUT_DIR = path.join(repoRoot, 'packages/icons/svg');
/** Comma-separated palette folder slugs preferred when two Figma exports compete for the same theme + basename; defaults to shallower path. */
const FIGMA_SVG_PALETTE_PREFERENCE: string[] = [];
const FIGMA_ICON_FETCH_CONCURRENCY = 8;
const FIGMA_IMAGE_WAIT_MS = 15_000;
const FIGMA_SVG_FETCH_TIMEOUT_MS = 90_000;
const FIGMA_SVG_FETCH_ATTEMPTS = 5;

const iconsFigmaPath = path.join(repoRoot, 'packages/icons/index.figma.tsx');

function normalizeFigmaNodeId(id) {
  return String(id).replace(/-/g, ':');
}

/**
 * @template T
 * @param {T[]} items
 * @param {number} limit
 * @param {(item: T) => Promise<void>} worker
 */
async function runPool(items, limit, worker) {
  let next = 0;
  async function runWorker() {
    while (true) {
      const i = next++;
      if (i >= items.length) break;
      await worker(items[i]);
    }
  }
  const n = Math.min(Math.max(1, limit), items.length || 1);
  await Promise.all(Array.from({ length: items.length ? n : 0 }, () => runWorker()));
}

/**
 * Fetch SVG bytes from Figma-hosted URL with timeout + exponential backoff.
 * @param {string} url
 */
async function fetchSvgTextWithRetry(url) {
  let lastErr;
  for (let attempt = 1; attempt <= FIGMA_SVG_FETCH_ATTEMPTS; attempt++) {
    const ac = new AbortController();
    const timer = setTimeout(() => ac.abort(), FIGMA_SVG_FETCH_TIMEOUT_MS);
    try {
      const fileResponse = await fetch(url, { method: 'GET', signal: ac.signal });
      const svgText = await fileResponse.text();
      clearTimeout(timer);
      if (!fileResponse.ok || !svgText.includes('<svg')) {
        throw new Error(`HTTP ${fileResponse.status} or non-SVG: ${svgText.slice(0, 120)}`);
      }
      return svgText;
    } catch (e) {
      clearTimeout(timer);
      lastErr = e;
      if (attempt < FIGMA_SVG_FETCH_ATTEMPTS) {
        const delay = Math.min(12_000, 800 * 2 ** (attempt - 1));
        await new Promise(r => setTimeout(r, delay));
      }
    }
  }
  throw lastErr;
}

/** @returns {{ localName: string, nodeId: string, codeConnectVariant?: Record<string, string> }[]} */
function normalizeIconRows(json) {
  const rows = [];
  for (const row of json) {
    if (Array.isArray(row) && row.length >= 3) {
      const localName = row[0];
      const m = String(row[2]).match(/node-id=([\d:-]+)/);
      if (!m) throw new Error(`Cannot parse node-id from: ${row[2]}`);
      const out: {
        localName: unknown;
        nodeId: string;
        codeConnectVariant?: Record<string, string>;
      } = {
        localName,
        nodeId: normalizeFigmaNodeId(m[1]),
      };
      if (row.length >= 4 && row[3] && typeof row[3] === 'object' && !Array.isArray(row[3])) {
        out.codeConnectVariant = row[3] as Record<string, string>;
      }
      rows.push(out);
    } else if (row && typeof row === 'object' && row.localName && row.nodeId) {
      rows.push(row);
    } else if (Array.isArray(row) && row.length === 2) {
      rows.push({ localName: row[0], nodeId: normalizeFigmaNodeId(row[1]) });
    } else {
      throw new Error(`Unrecognized icon row: ${JSON.stringify(row)}`);
    }
  }
  return rows;
}

function uniqueSorted(arr) {
  return [...new Set(arr)].sort();
}

function nodeIdForUrl(nodeId) {
  return String(nodeId).replace(/:/g, '-');
}

/** `variant` option for figma.connect — Dev Mode picks the mapping that matches the selected instance. */
function formatCodeConnectVariantOption(codeConnectVariant) {
  if (
    !codeConnectVariant ||
    typeof codeConnectVariant !== 'object' ||
    Object.keys(codeConnectVariant).length === 0
  ) {
    return '';
  }
  return ` variant: ${JSON.stringify(codeConnectVariant)},`;
}

function writeGeneratedFiles(rows) {
  const sortedRows = [...rows].sort((a, b) => a.localName.localeCompare(b.localName));
  const specifiers = uniqueSorted(sortedRows.map(p => p.localName));
  const importBlock = `import {\n  ${specifiers.join(',\n  ')},\n} from "@oceanbase/icons";`;
  const connects = sortedRows
    .map(p => {
      const v = formatCodeConnectVariantOption(p.codeConnectVariant);
      return `figma.connect(${p.localName}, "<FIGMA_ICONS_BASE>?node-id=${nodeIdForUrl(p.nodeId)}", {${v} example: () => <${p.localName} /> });`;
    })
    .join('\n');

  fs.mkdirSync(path.dirname(iconsFigmaPath), { recursive: true });
  fs.writeFileSync(
    iconsFigmaPath,
    `// @ts-nocheck\n/* eslint-disable */\n/* Auto-generated by skills/figma-code-connect/scripts/figma-icons.ts — no Icon* prefix; names align with packages/icons/svg/{theme}/…/{stem}.svg + theme suffix (Outlined|Filled|TwoTone|Colored); palette folders (e.g. gray) become nested dirs + kebab stem prefix */\nimport { figma } from "@figma/code-connect";\n${importBlock}\n\n${connects}\n`
  );
  console.log(
    `Wrote ${sortedRows.length} figma.connect + @oceanbase/icons (no Icon prefix; stem + theme like packages/icons/svg) → ${path.relative(repoRoot, iconsFigmaPath)}`
  );
}

async function go() {
  if (!TOKEN || !FILE_KEY) {
    console.error(
      'Missing FIGMA_ACCESS_TOKEN or FIGMA_FILE_KEY in environment (use .env at repo root).'
    );
    process.exit(1);
  }
  const data = await getIconComponents();
  const sorted = [...data].sort((a, b) => a[0].localeCompare(b[0]));
  const rows = normalizeIconRows(sorted);
  writeGeneratedFiles(rows);
  console.log('DONE!');
}

go().catch(err => {
  console.error(err);
  process.exit(1);
});

async function getIconComponents() {
  const fileResponse = await fetch(`${URL_BASE}/${FILE_KEY}`, {
    method: 'GET',
    headers: { 'X-FIGMA-TOKEN': TOKEN },
  });
  const data = await fileResponse.json();
  if (!fileResponse.ok) {
    throw new Error(`Figma GET file failed (${fileResponse.status}): ${JSON.stringify(data)}`);
  }
  if (!data.document) {
    throw new Error(
      `Figma file response has no document (check FIGMA_FILE_KEY and token). ${JSON.stringify(data).slice(0, 500)}`
    );
  }
  return await fileRESTResponseToIconRows(data);
}

async function getSVGImages(nodeIds) {
  const fileResponse = await fetch(
    `${URL_BASE_IMAGES}/${FILE_KEY}?format=svg&ids=${nodeIds.join(',')}`,
    {
      method: 'GET',
      headers: { 'X-FIGMA-TOKEN': TOKEN },
    }
  );
  return await fileResponse.json();
}

function figmaComponentNameToLocalName(name) {
  return (
    'Icon' +
    name
      .split(/[^a-zA-Z0-9]+/)
      .map(a => a.charAt(0).toUpperCase() + a.substring(1))
      .join('')
  );
}

/** PascalCase token run from a Figma label (no `Icon` prefix). Digits-only segments kept as-is. */
function wordsToPascalName(str) {
  return String(str)
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map(a => (/^\d+$/.test(a) ? a : a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()))
    .join('');
}

/** kebab-case for SVG paths / filenames (oceanbase-style). */
function wordsToKebab(str) {
  return String(str)
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map(a => a.toLowerCase())
    .join('-');
}

/**
 * camelCase / PascalCase → kebab with hyphens at word boundaries.
 * e.g. ArrowDown → arrow-down, DownDefault → down-default
 */
function pascalOrCamelToKebab(str) {
  const s = String(str).replace(/\s+/g, '');
  if (!s) return '';
  return s
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

/** Space-separated words (after stripping noise) → kebab; each token also splits internal PascalCase. */
function kebabFromSpacedLabel(s) {
  const segments = String(s).trim().split(/\s+/).filter(Boolean);
  if (!segments.length) return '';
  return segments
    .map(seg => pascalOrCamelToKebab(seg))
    .filter(Boolean)
    .join('-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/** @oceanbase/icons-svg themes: outlined, filled, twotone, colored → *Outlined / *Filled / *TwoTone / *Colored */
const THEME_KEYS = new Set(['outlined', 'filled', 'twotone', 'colored']);
/** Fixed order for mkdir / logs (always create these under packages/icons/svg). */
const THEME_DIR_ORDER = ['outlined', 'filled', 'twotone', 'colored'];

/** Theme dir → @oceanbase/icons export suffix (PascalCase). */
const THEME_OCEANBASE_SUFFIX = {
  outlined: 'Outlined',
  filled: 'Filled',
  twotone: 'TwoTone',
  colored: 'Colored',
};

/** Known palette / shade folder slugs (Figma FRAME names → `filled/gray/…` style paths). */
const PALETTE_FOLDER_SLUGS = new Set([
  'gray',
  'grey',
  'blue',
  'red',
  'green',
  'orange',
  'yellow',
  'purple',
  'pink',
  'brown',
  'cyan',
  'teal',
  'indigo',
  'violet',
  'magenta',
  'lime',
  'navy',
  'maroon',
  'multicolor',
  'multicolour',
  'brand',
  'default',
  'dark',
  'light',
  'mono',
  'shade',
  'palette',
  'tone',
]);

/**
 * `arrow-down-default` → `ArrowDownDefault` (matches stem under packages/icons/svg/{theme}/).
 */
function kebabStemToPascalBody(stem) {
  return String(stem)
    .split('-')
    .filter(Boolean)
    .map(seg =>
      /^\d+$/.test(seg) ? seg : seg.charAt(0).toUpperCase() + seg.slice(1).toLowerCase()
    )
    .join('');
}

/**
 * Export symbol for Code Connect / Icons.figma.tsx: SVG stem + theme, no `Icon` prefix
 * (e.g. outlined/arrow-down-default.svg → ArrowDownDefaultOutlined).
 */
function oceanbaseIconNameFromSvgTheme(themeKebab, stemKebab) {
  const theme = themeKebab && THEME_KEYS.has(themeKebab) ? themeKebab : 'outlined';
  const suf = THEME_OCEANBASE_SUFFIX[theme];
  const raw = String(stemKebab).trim() || 'glyph';
  const body = kebabStemToPascalBody(raw);
  return `${body}${suf}`;
}

/**
 * Assign `{PascalStem}{ThemeSuffix}` to every export id.
 * When multiple nodes resolve to the same symbol name they all share it —
 * each will get its own `figma.connect` row pointing to a different node-id.
 * Duplicate SVG file writes are handled separately; TSX generation is not affected.
 */
function assignOceanbaseLocalNames(entries) {
  /** @type {Map<string, string>} */
  const out = new Map();
  let dupCount = 0;
  const seen = new Set();
  for (const { nodeId, desired } of entries) {
    if (out.has(nodeId)) continue; // same nodeId listed twice — keep first
    if (seen.has(desired)) dupCount++;
    seen.add(desired);
    out.set(nodeId, desired);
  }
  if (dupCount > 0) {
    console.log(
      `[icons] ${dupCount} export(s) share the same resolved @oceanbase/icons name (same theme + stem) — each still gets its own figma.connect row.`
    );
  }
  return { nameByNodeId: out };
}

/**
 * @param {Record<string, { localName: string, urlId: string, codeConnectVariant?: Record<string, string>, categoryKebab: string, svgFileBase: string, themeKebab: string | null, nestedPathSegments?: string[] }>} idsMap
 */
function buildOceanbaseLocalNameByExportId(idsMap) {
  const entries = [];
  for (const nodeId of Object.keys(idsMap)) {
    const rec = idsMap[nodeId];
    const resolved = resolveThemeAndGlyphForSvgExport({
      themeKebab: rec.themeKebab,
      svgFileBase: rec.svgFileBase,
      localName: rec.localName,
    });
    const themeDir =
      resolved.themeKebab && THEME_KEYS.has(resolved.themeKebab) ? resolved.themeKebab : 'outlined';
    const stemOnly = svgFileStemWithoutTheme(rec.categoryKebab, resolved.svgFileBase);
    const nested = Array.isArray(rec.nestedPathSegments)
      ? rec.nestedPathSegments.filter(Boolean)
      : [];
    const stem = nested.length > 0 ? [...nested, stemOnly].filter(Boolean).join('-') : stemOnly;
    const desired = oceanbaseIconNameFromSvgTheme(themeDir, stem);
    entries.push({ nodeId, desired });
  }
  return assignOceanbaseLocalNames(entries);
}

/**
 * Normalize a Figma variant value or folder label to one of THEME_KEYS, or null.
 */
function normalizeThemeToken(raw) {
  const x = String(raw)
    .trim()
    .toLowerCase()
    .replace(/[-\s_]+/g, '');
  if (x === 'twotone' || x === 'duotone') return 'twotone';
  if (x === 'outline' || x === 'outlined' || x === 'stroke') return 'outlined';
  if (x === 'fill' || x === 'filled' || x === 'solid') return 'filled';
  if (x === 'color' || x === 'coloured' || x === 'colored') return 'colored';
  if (THEME_KEYS.has(x)) return x;
  return null;
}

/**
 * If node name is a theme folder (e.g. Outlined, filled, Two-tone), return theme key.
 */
function themeFromSectionNodeName(name) {
  return (
    normalizeThemeToken(wordsToKebab(String(name).trim()).replace(/-/g, '')) ||
    normalizeThemeToken(String(name).trim())
  );
}

/**
 * Non-theme folder that should become a nested path segment under the theme dir
 * (e.g. `Gray` → `filled/gray/billing.svg`). Skips Outlined/Filled/… theme wrappers.
 */
function nestedPathSegmentFromFolderName(name) {
  const folderTheme = themeFromSectionNodeName(name);
  if (folderTheme) return null;
  const slug = sanitizeCategoryFolderName(name);
  if (!slug || THEME_KEYS.has(slug)) return null;
  const compact = slug.replace(/-/g, '');
  const tok = normalizeThemeToken(compact);
  if (tok && THEME_KEYS.has(tok)) return null;
  if (PALETTE_FOLDER_SLUGS.has(slug)) return slug;
  if (
    /(gray|grey|blue|red|green|orange|yellow|purple|pink|brown|cyan|teal|violet|palette|shade|tone|brand|dark|light|mono|multicolor)/i.test(
      slug
    )
  ) {
    return slug;
  }
  return null;
}

/**
 * Infer theme from COMPONENT_SET variant key=value pairs (e.g. Property 2=outlined).
 */
function themeFromVariantFilter(filter) {
  if (!filter || typeof filter !== 'object') return null;
  for (const val of Object.values(filter)) {
    const t = normalizeThemeToken(val);
    if (t) return t;
  }
  return null;
}

/**
 * Figma section frames like `2-Arrow-Icon`, `6-LOGO` → folder slug `arrow`, `logo`.
 * Strips leading `^\d+[-–_]`, trailing `-Icon` / `_icon`, then kebab-cases.
 */
function sanitizeCategoryFolderName(name) {
  let s = String(name).trim();
  s = s.replace(/^\d+[-–_]\s*/, '');
  s = s.replace(/[-–_]icon$/i, '');
  s = s.replace(/[-–_]+$/g, '');
  const kebab = wordsToKebab(s);
  return kebab || 'misc';
}

/**
 * Icon layer / component name → SVG basename (no `.svg`). Removes leading ordinals and the word `icon`.
 */
function sanitizeSvgFileBase(raw) {
  let s = String(raw).trim();
  while (/^\d+[-–_]/.test(s)) {
    s = s.replace(/^\d+[-–_]\s*/, '');
  }
  s = s.replace(/^icon(?=[A-Z\d])/i, '');
  s = s.replace(/\bicon\b/gi, ' ');
  s = s.replace(/[=,，]/g, ' ');
  s = s.replace(/[-–_]+/g, ' ');
  s = s.trim();
  const kebab = kebabFromSpacedLabel(s);
  return kebab.replace(/-+/g, '-').replace(/^-|-$/g, '') || 'glyph';
}

/**
 * File slug from Figma layer names: PascalCase / camelCase words get hyphen boundaries
 * (DownDefault → down-default). Variant syntax (`key=value`) uses the same rules as {@link sanitizeSvgFileBase}.
 */
function sanitizeSvgFileBaseFigmaFileSlug(raw) {
  let s = String(raw).trim();
  if (/[=,，]/.test(s)) return sanitizeSvgFileBase(raw);
  while (/^\d+[-–_]/.test(s)) {
    s = s.replace(/^\d+[-–_]\s*/, '');
  }
  s = s.replace(/^icon(?=[A-Z\d])/i, '');
  s = s.replace(/\bicon\b/gi, ' ');
  s = s.replace(/[-–_]+/g, ' ');
  s = s.trim();
  const kebab = kebabFromSpacedLabel(s);
  return kebab || sanitizeSvgFileBase(raw);
}

/** Single-token variant like Default / Small — merge with COMPONENT_SET name for the slug. */
function isLikelyShortVariantToken(name) {
  const t = String(name).trim();
  if (!t || /[=,，]/.test(t)) return false;
  return /^[A-Z][a-z0-9]*$/i.test(t);
}

function svgBaseForExport(setOrComponentName, childNameForSet) {
  if (childNameForSet != null && String(childNameForSet).trim()) {
    const child = String(childNameForSet).trim();
    if (/[=,，]/.test(child)) {
      return sanitizeSvgFileBase(`${setOrComponentName} ${childNameForSet}`);
    }
    const set = String(setOrComponentName).trim();
    if (isLikelyShortVariantToken(child) && set) {
      return sanitizeSvgFileBaseFigmaFileSlug(`${set} ${child}`);
    }
    return sanitizeSvgFileBaseFigmaFileSlug(child);
  }
  return sanitizeSvgFileBaseFigmaFileSlug(setOrComponentName);
}

/** FRAME / SECTION / GROUP whose name looks like `1-General-Icon` (ordered section in file). */
function isCategorySection(node) {
  if (!node?.name) return false;
  const t = node.type;
  if (t !== 'FRAME' && t !== 'SECTION' && t !== 'GROUP') return false;
  return /^\d+[-–_]/.test(String(node.name).trim());
}

/**
 * SVG file stem only — theme is a subdirectory (outlined | filled | twotone | colored).
 * No Figma section / navigation prefix (e.g. arrow-, db-).
 */
function svgFileStemWithoutTheme(_categoryKebab, svgFileBase) {
  return svgFileBase;
}

/**
 * When theme is a directory, drop a duplicate theme token from the glyph basename
 * (e.g. `invoice-outlined` / `invoiceoutlined` + theme outlined → `invoice`).
 */
function svgFileBaseSansRedundantThemeSuffix(svgFileBase, themeKebab) {
  if (!themeKebab || !THEME_KEYS.has(themeKebab)) return svgFileBase;
  const sufHyphen = `-${themeKebab}`;
  if (svgFileBase.endsWith(sufHyphen)) {
    const cut = svgFileBase.slice(0, -sufHyphen.length);
    return cut || svgFileBase;
  }
  if (svgFileBase.endsWith(themeKebab)) {
    const cut = svgFileBase.slice(0, -themeKebab.length).replace(/-+$/g, '');
    return cut || svgFileBase;
  }
  return svgFileBase;
}

/**
 * Infer theme from kebab basename (Figma export), e.g. `arrow-downfilled`, `nav-invoice-outlined`.
 */
function inferThemeFromSvgFileBase(svgFileBase) {
  const s = String(svgFileBase);
  const lower = s.toLowerCase();
  const byLen = [...THEME_KEYS].sort((a, b) => b.length - a.length);
  for (const th of byLen) {
    if (!lower.endsWith(th) || lower.length <= th.length) continue;
    const rest = s.slice(0, -th.length);
    if (th === 'filled' && /un$/i.test(rest)) continue;
    return th;
  }
  if (s.includes('-')) {
    const last = s.split('-').pop();
    const t = normalizeThemeToken(last ?? '');
    if (t) return t;
  }
  return null;
}

/**
 * Infer theme from React symbol (COMPONENT_SET naming), e.g. IconArrowDownFilled → filled.
 */
function inferThemeFromLocalName(localName) {
  const s = String(localName);
  if (/TwoTone$/i.test(s)) return 'twotone';
  if (/Colored$/i.test(s)) return 'colored';
  if (/Filled$/i.test(s) && !/Unfilled$/i.test(s)) return 'filled';
  if (/Outlined$/i.test(s)) return 'outlined';
  return null;
}

/**
 * Final theme + glyph for raw SVG paths: Figma graph → basename → localName → outline aliases → default outlined.
 */
function resolveThemeAndGlyphForSvgExport({ themeKebab, svgFileBase, localName }) {
  const glyph = svgFileBase;

  if (themeKebab && THEME_KEYS.has(themeKebab)) {
    return {
      themeKebab,
      svgFileBase: svgFileBaseSansRedundantThemeSuffix(glyph, themeKebab),
    };
  }

  const fromBase = inferThemeFromSvgFileBase(glyph);
  if (fromBase) {
    return {
      themeKebab: fromBase,
      svgFileBase: svgFileBaseSansRedundantThemeSuffix(glyph, fromBase),
    };
  }

  const fromLocal = inferThemeFromLocalName(localName);
  if (fromLocal) {
    return {
      themeKebab: fromLocal,
      svgFileBase: svgFileBaseSansRedundantThemeSuffix(glyph, fromLocal),
    };
  }

  return { themeKebab: 'outlined', svgFileBase: glyph };
}

type RawSvgWriteItem = {
  exportId: string;
  categoryKebab: string;
  svgFileBase: string;
  themeKebab: string | null;
  svgText: string;
  /** e.g. `['gray']` → `filled/gray/billing.svg` */
  nestedPathSegments?: string[];
};

function themeDirForRawItem(it: RawSvgWriteItem) {
  return it.themeKebab && THEME_KEYS.has(it.themeKebab) ? it.themeKebab : 'outlined';
}

/**
 * Remove `mask-type:luminance` (and the surrounding `style="…"` attribute when it becomes empty)
 * from all `<mask>` elements in SVG text. Figma exports this automatically but it is not needed
 * for icon rendering and can cause issues in some environments.
 */
function stripMaskTypeLuminance(svgText: string): string {
  // Remove style="mask-type:luminance" (with optional surrounding whitespace / semicolons)
  return svgText.replace(/\s*style="[^"]*mask-type\s*:\s*luminance[^"]*"/gi, match => {
    // If the style attribute contains only mask-type:luminance (possibly with whitespace/semicolons), drop the whole attribute.
    const inner = match.replace(/^\s*style="/i, '').replace(/"$/, '');
    const rest = inner
      .split(';')
      .map(s => s.trim())
      .filter(s => s && !/^mask-type\s*:\s*luminance$/i.test(s))
      .join('; ');
    if (!rest) return '';
    return ` style="${rest}"`;
  });
}

/**
 * For `outlined` SVGs: replace all hardcoded `fill` colors with `currentColor` so the icon
 * follows the theme color, matching the behavior of legacy iconfont-style icons.
 * Preserves `fill="none"` (intentional transparent regions) unchanged.
 * Also removes the `fill="none"` on the root `<svg>` element so `currentColor` propagates correctly.
 */
function normalizeOutlinedFillColors(svgText: string): string {
  // Replace fill="<any color>" → fill="currentColor", keep fill="none"
  return svgText
    .replace(/(<svg\b[^>]*)\s+fill="none"/gi, '$1')
    .replace(/\bfill="(?!none")[^"]*"/gi, 'fill="currentColor"');
}

/**
 * Normalize SVG viewBox to 1024x1024 to match the legacy iconfont format.
 * For 16x16 SVGs from Figma: updates viewBox to "0 0 1024 1024" and wraps inner content
 * with `<g transform="scale(64)">` so coordinates render identically at the larger viewport.
 * SVGs that already use 1024x1024 (or other sizes) are returned unchanged.
 */
function normalizeViewBoxTo1024(svgText: string): string {
  // Only transform 16x16 viewBox SVGs
  if (!/viewBox="0 0 16 16"/i.test(svgText)) return svgText;

  // Replace viewBox, width, height on the <svg> root
  let result = svgText
    .replace(/\bviewBox="0 0 16 16"/gi, 'viewBox="0 0 1024 1024"')
    .replace(/(<svg\b[^>]*)\s+width="16"/gi, '$1')
    .replace(/(<svg\b[^>]*)\s+height="16"/gi, '$1');

  // Wrap all inner content with scale(64) transform
  result = result.replace(
    /(<svg\b[^>]*>)([\s\S]*)(<\/svg>)/i,
    (_, open, inner, close) => `${open}<g transform="scale(64)">${inner}</g>${close}`
  );

  return result;
}

/**
 * Pick one winner when multiple Figma exports map to the same theme + basename (e.g. `filled/billing.svg` vs `filled/gray/billing.svg`).
 * Preference list favors nested palette folders; else shallower path wins.
 */
function compareRawSvgCandidatesForStem(a: RawSvgWriteItem, b: RawSvgWriteItem) {
  const prefs = FIGMA_SVG_PALETTE_PREFERENCE;
  const na = (a.nestedPathSegments ?? []).filter(Boolean)[0] ?? '';
  const nb = (b.nestedPathSegments ?? []).filter(Boolean)[0] ?? '';
  const ia = prefs.indexOf(na);
  const ib = prefs.indexOf(nb);
  const pa = ia >= 0 ? ia : 999;
  const pb = ib >= 0 ? ib : 999;
  if (pa !== pb) return pa - pb;
  const da = (a.nestedPathSegments ?? []).filter(Boolean).length;
  const db = (b.nestedPathSegments ?? []).filter(Boolean).length;
  if (da !== db) return da - db;
  return String(a.exportId).localeCompare(String(b.exportId));
}

/**
 * Within each theme folder, at most one `stem.svg` anywhere in the subtree (not only per directory).
 */
function dedupeRawSvgItemsByThemeBasename(items: RawSvgWriteItem[]) {
  /** @type {Map<string, RawSvgWriteItem[]>} */
  const groups = new Map();
  for (const it of items) {
    const themeDir = themeDirForRawItem(it);
    const stem = svgFileStemWithoutTheme(it.categoryKebab, it.svgFileBase);
    const key = `${themeDir}:${stem}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(it);
  }
  const kept: RawSvgWriteItem[] = [];
  const skippedExportIds = new Set();
  let dupRun = 0;
  for (const [, group] of groups) {
    if (group.length === 1) {
      kept.push(group[0]);
      continue;
    }
    const sorted = [...group].sort(compareRawSvgCandidatesForStem);
    kept.push(sorted[0]);
    for (let i = 1; i < sorted.length; i++) {
      skippedExportIds.add(sorted[i].exportId);
      dupRun++;
    }
  }
  if (dupRun > 0) {
    console.log(
      `[icons] ${dupRun} SVG export(s) skipped — duplicate basename under same theme (use FIGMA_SVG_PALETTE_PREFERENCE to prefer a palette folder, e.g. gray).`
    );
  }
  return { kept, skippedExportIds };
}

/** Map `theme:stem` → relative path under `baseOutDir` (posix) for existing *.svg files. */
function scanDiskStemToRelPath(baseOutDir: string) {
  /** @type {Map<string, string>} */
  const map = new Map();
  for (const theme of THEME_DIR_ORDER) {
    const themeRoot = path.join(baseOutDir, theme);
    if (!fs.existsSync(themeRoot)) continue;
    function walk(dir: string) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const e of entries) {
        const full = path.join(dir, e.name);
        if (e.isDirectory()) walk(full);
        else if (e.isFile() && e.name.endsWith('.svg')) {
          const stem = path.basename(e.name, '.svg');
          const key = `${theme}:${stem}`;
          const rel = path.relative(baseOutDir, full).split(path.sep).join('/');
          if (map.has(key)) {
            console.warn(
              `[icons] on-disk duplicate stem "${stem}" under theme "${theme}": ${map.get(key)} vs ${rel} — keeping first`
            );
          } else {
            map.set(key, rel);
          }
        }
      }
    }
    walk(themeRoot);
  }
  return map;
}

function sortRawSvgItemsForWrite(items: RawSvgWriteItem[]) {
  return [...items].sort((a, b) => {
    const ca = a.categoryKebab.localeCompare(b.categoryKebab);
    if (ca !== 0) return ca;
    const ta = String(a.themeKebab ?? '').localeCompare(String(b.themeKebab ?? ''));
    if (ta !== 0) return ta;
    const na = (a.nestedPathSegments ?? []).join('/');
    const nb = (b.nestedPathSegments ?? []).join('/');
    const ncmp = na.localeCompare(nb);
    if (ncmp !== 0) return ncmp;
    const fa = a.svgFileBase.localeCompare(b.svgFileBase);
    if (fa !== 0) return fa;
    return String(a.exportId).localeCompare(String(b.exportId));
  });
}

function writeRawSvgFiles(
  baseOutDir: string,
  items: RawSvgWriteItem[]
): { skippedExportIds: Set<string> } {
  const skippedExportIds = new Set<string>();
  if (!baseOutDir || !items.length) return { skippedExportIds };

  // Ensure theme dirs exist.
  fs.mkdirSync(baseOutDir, { recursive: true });
  for (const theme of THEME_DIR_ORDER) {
    fs.mkdirSync(path.join(baseOutDir, theme), { recursive: true });
  }

  // Scan existing SVGs on disk: theme:stem → relative posix path.
  // Used to detect path conflicts (same stem already exists at a different path).
  const stemToRelPath = scanDiskStemToRelPath(baseOutDir);

  const svgCountByTheme = Object.fromEntries(THEME_DIR_ORDER.map(t => [t, 0]));
  let written = 0;
  let skippedExisting = 0;
  let skippedStemConflict = 0;

  const sorted = sortRawSvgItemsForWrite(items);
  for (const it of sorted) {
    const themeDir = themeDirForRawItem(it);
    const stem = svgFileStemWithoutTheme(it.categoryKebab, it.svgFileBase);
    const nested = (it.nestedPathSegments ?? []).filter(Boolean);
    const outDir = path.join(baseOutDir, themeDir, ...nested);
    const filePath = path.join(outDir, `${stem}.svg`);
    const relPosix = path.relative(baseOutDir, filePath).split(path.sep).join('/');
    const stemKey = `${themeDir}:${stem}`;

    const existingRel = stemToRelPath.get(stemKey);
    if (existingRel != null) {
      if (existingRel !== relPosix) {
        // Same stem already exists at a different path (e.g. filled/gray/billing.svg vs filled/billing.svg).
        // Always keep the existing path — never move or overwrite.
        skippedStemConflict++;
        skippedExportIds.add(it.exportId);
      } else {
        // Same path already on disk — skip to preserve the existing file.
        skippedExisting++;
      }
      continue;
    }

    // New file — process and write.
    svgCountByTheme[themeDir]++;
    fs.mkdirSync(outDir, { recursive: true });
    const svgContent = normalizeViewBoxTo1024(
      stripMaskTypeLuminance(
        themeDir === 'outlined' ? normalizeOutlinedFillColors(it.svgText) : it.svgText
      )
    );
    fs.writeFileSync(filePath, svgContent, 'utf8');
    written++;
    stemToRelPath.set(stemKey, relPosix);
  }

  for (const theme of THEME_DIR_ORDER) {
    if (svgCountByTheme[theme] === 0) {
      const gitkeepPath = path.join(baseOutDir, theme, '.gitkeep');
      if (!fs.existsSync(gitkeepPath)) {
        fs.writeFileSync(gitkeepPath, '# No SVG classified into this theme in this run.\n');
      }
    }
  }

  const themeSummary = THEME_DIR_ORDER.map(t => `${t}:${svgCountByTheme[t]}`).join(', ');
  const parts: string[] = [`SVG theme dirs: ${themeSummary}`, `wrote ${written} new file(s)`];
  if (skippedExisting > 0) parts.push(`skipped ${skippedExisting} existing file(s)`);
  if (skippedStemConflict > 0) parts.push(`skipped ${skippedStemConflict} path conflict(s)`);
  console.log(parts.join('; ') + '.');
  return { skippedExportIds };
}

/**
 * Parse variant child name (e.g. `Style=default, Direction=left`) into PascalCase suffix `DefaultLeft`.
 */
function variantSuffixFromChildComponentName(childName) {
  const parts = String(childName)
    .split(/[,，]/)
    .map(s => s.trim())
    .filter(Boolean);
  const chunks = [];
  for (const p of parts) {
    const m = p.match(/^[^=]+=(.+)$/);
    const raw = (m ? m[1] : p).trim();
    if (raw) chunks.push(wordsToPascalName(raw));
  }
  return chunks.join('');
}

/**
 * Local mode: React symbol for one COMPONENT under a COMPONENT_SET — set name + variant dimensions.
 * Example: set `Default`, child `Direction=left` → `IconDefaultLeft`.
 */
function componentSetVariantToLocalName(setName, childName) {
  const setPart = wordsToPascalName(setName);
  const varPart = variantSuffixFromChildComponentName(childName);
  const body = `${setPart}${varPart}`;
  if (!body) {
    return figmaComponentNameToLocalName(String(childName || setName || 'Variant'));
  }
  return `Icon${body}`;
}

/**
 * Parse Figma variant layer name into Code Connect `variant: { ... }` (property names must match the file).
 * @param {string} childName e.g. `Property 2=outlined, Size=16`
 * @returns {Record<string, string>}
 */
function figmaVariantLayerNameToConnectFilter(childName) {
  const out = {};
  for (const raw of String(childName)
    .split(/[,，]/)
    .map(s => s.trim())
    .filter(Boolean)) {
    const eq = raw.indexOf('=');
    if (eq <= 0) continue;
    const key = raw.slice(0, eq).trim();
    const val = raw.slice(eq + 1).trim();
    if (key && val) out[key] = val;
  }
  return out;
}

/** Shallow + one-level summary for error messages. */
function describeChildTypesSample(node) {
  if (!node?.children?.length) return '(no children)';
  const shallow = node.children
    .slice(0, 25)
    .map(c => `${c.id} ${c.type}${c.name ? ` "${c.name}"` : ''}`)
    .join('\n  ');
  /** @type {Record<string, number>} */
  const types: Record<string, number> = {};
  function count(n) {
    if (!n) return;
    types[n.type] = (types[n.type] ?? 0) + 1;
    if (n.children) n.children.forEach(count);
  }
  count(node);
  const summary = Object.entries(types)
    .sort((a, b) => b[1] - a[1])
    .map(([t, n]) => `${t}:${n}`)
    .join(', ');
  return `types under root: ${summary}\n  ${shallow}`;
}

/**
 * Stable localName per export. When the same Icon* base repeats in the same sibling scope,
 * later exports are skipped (no `_nodeId` suffix).
 */
function assignLocalNamesSkipDuplicates(entries) {
  /** @type {Map<string, Set<string>>} */
  const usedByScope = new Map();
  /** @type {Record<string, { localName: string, urlId: string, codeConnectVariant?: Record<string, string>, categoryKebab: string, svgFileBase: string, themeKebab: string | null, nestedPathSegments: string[] }>} */
  const out = {};
  let dupCount = 0;

  function usedInScope(scopeKey) {
    const k = scopeKey || '__root';
    if (!usedByScope.has(k)) usedByScope.set(k, new Set());
    return usedByScope.get(k);
  }

  const sorted = [...entries].sort((a, b) => String(a.exportId).localeCompare(String(b.exportId)));
  for (const {
    exportId,
    urlId,
    baseLocal,
    codeConnectVariant,
    categoryKebab,
    svgFileBase,
    themeKebab,
    siblingScopeId,
    nestedPathSegments,
  } of sorted) {
    const used = usedInScope(siblingScopeId);
    if (used.has(baseLocal)) {
      dupCount++;
      continue;
    }
    used.add(baseLocal);
    out[exportId] = {
      localName: baseLocal,
      urlId,
      codeConnectVariant,
      categoryKebab,
      svgFileBase,
      themeKebab: themeKebab ?? null,
      nestedPathSegments: Array.isArray(nestedPathSegments) ? nestedPathSegments : [],
    };
  }
  if (dupCount > 0) {
    console.log(
      `[icons] ${dupCount} duplicate Icon* base name(s) under the same frame or variant set — skipped (kept first by node id).`
    );
  }
  return out;
}

/**
 * Collect SVG export targets under `root`: export node id → [localName, nodeIdForCodeConnectUrl].
 * COMPONENT_SET: every COMPONENT child is exported. Standalone COMPONENT → itself. Recurses deeply
 * through FRAME/SECTION/GROUP; palette folders (Gray, Blue, …) become nested dirs under the theme.
 * `categoryKebab` from numbered sections like `2-Arrow-Icon` whose slug is not a theme.
 * `themeKebab` from: (1) numbered sections `2-Outlined-Icon` → slug `outlined`; (2) FRAME/SECTION/GROUP
 *   named Outlined/Filled/…; (3) COMPONENT_SET variant values (outlined / outline / filled / …).
 */
function collectIconExportTargets(root) {
  /** @type {{ exportId: string, urlId: string, baseLocal: string, codeConnectVariant?: Record<string, string>, categoryKebab: string, svgFileBase: string, themeKebab: string | null, siblingScopeId: string, nestedPathSegments: string[] }[]} */
  const entries = [];
  let localSetVariantMissingFilter = 0;

  /** `parentId`: direct parent node id (for standalone COMPONENT sibling groups). */
  function visit(node, categoryKebab, themeKebab, parentId, nestedPathSegments) {
    if (!node) return;
    const pathSeg = Array.isArray(nestedPathSegments) ? nestedPathSegments : [];
    let cat = categoryKebab;
    let th = themeKebab;
    if (isCategorySection(node)) {
      const slug = sanitizeCategoryFolderName(node.name);
      // e.g. `2-Outlined-Icon` → slug `outlined` → theme dir, not category prefix on filename
      if (THEME_KEYS.has(slug)) {
        th = slug;
      } else {
        cat = slug;
      }
    }
    const t = node.type;
    let childNested = pathSeg;
    if ((t === 'FRAME' || t === 'SECTION' || t === 'GROUP') && !isCategorySection(node)) {
      const folderTheme = themeFromSectionNodeName(node.name);
      if (folderTheme) {
        th = folderTheme;
      } else {
        const nest = nestedPathSegmentFromFolderName(node.name);
        if (nest) {
          childNested = [...pathSeg, nest];
        }
      }
    }
    if (node.type === 'COMPONENT_SET') {
      const components = node.children?.filter(c => c.type === 'COMPONENT') ?? [];
      const sorted = [...components].sort(
        (a, b) =>
          String(a.name).localeCompare(String(b.name)) || String(a.id).localeCompare(String(b.id))
      );
      for (const child of sorted) {
        const filter = figmaVariantLayerNameToConnectFilter(child.name);
        if (sorted.length > 1 && Object.keys(filter).length === 0) {
          localSetVariantMissingFilter++;
        }
        const variantTheme = themeFromVariantFilter(filter);
        const effectiveTheme = variantTheme ?? th ?? null;
        entries.push({
          exportId: child.id,
          urlId: node.id,
          baseLocal: componentSetVariantToLocalName(node.name, child.name),
          codeConnectVariant: Object.keys(filter).length > 0 ? filter : undefined,
          categoryKebab: cat,
          svgFileBase: svgBaseForExport(node.name, child.name),
          themeKebab: effectiveTheme,
          siblingScopeId: node.id,
          nestedPathSegments: childNested,
        });
      }
      return;
    }
    if (node.type === 'COMPONENT') {
      entries.push({
        exportId: node.id,
        urlId: node.id,
        baseLocal: figmaComponentNameToLocalName(node.name),
        categoryKebab: cat,
        svgFileBase: svgBaseForExport(node.name, null),
        themeKebab: th ?? null,
        siblingScopeId: parentId || '__root',
        nestedPathSegments: childNested,
      });
      return;
    }
    if (node.children?.length) {
      for (const c of node.children) {
        visit(c, cat, th, node.id, childNested);
      }
    }
  }

  visit(root, 'misc', null, '', []);
  if (localSetVariantMissingFilter > 0) {
    console.warn(
      `${localSetVariantMissingFilter} COMPONENT_SET child name(s) have no key=value pairs (e.g. Property 2=outlined). ` +
        `Code Connect cannot scope those rows by variant — Inspect may show the wrong Icon*.`
    );
  }
  return assignLocalNamesSkipDuplicates(entries);
}

async function fileRESTResponseToIconRows(response) {
  let parentNode = response.document;
  for (const rawId of ROOT_TRAVERSE_IDS) {
    const id = normalizeFigmaNodeId(rawId);
    if (!parentNode?.children?.length) {
      throw new Error(
        `ROOT_TRAVERSE_IDS: node "${rawId}" has no children to descend into. Set FIGMA_ICON_ROOT_IDS in .env (comma-separated ids from root to the icon list frame).`
      );
    }
    const next = parentNode.children.find(a => a.id === id);
    if (!next) {
      const sample = parentNode.children
        .slice(0, 30)
        .map(c => `${c.id} (${c.type}${c.name ? `: ${c.name}` : ''})`)
        .join('\n  ');
      throw new Error(
        `ROOT_TRAVERSE_IDS: no direct child with id matching "${rawId}" (API form "${id}"). ` +
          `Under current parent, children include:\n  ${sample}\n` +
          `Fix FIGMA_ICON_ROOT_IDS (use ids from the Figma API or URL; hyphens and colons both work).`
      );
    }
    parentNode = next;
  }

  const idsToNameAndComponentSetId = collectIconExportTargets(parentNode);
  /** Aligns Icons.figma.tsx with packages/icons/svg/{theme}/…/{stem}.svg + @oceanbase/icons naming. */
  const oceanbaseResult = buildOceanbaseLocalNameByExportId(idsToNameAndComponentSetId);
  const oceanbaseLocalByExportId = oceanbaseResult.nameByNodeId;
  const allExportIds = Object.keys(idsToNameAndComponentSetId);
  const nodeIds = allExportIds;
  if (allExportIds.length === 0) {
    const sample = describeChildTypesSample(parentNode);
    throw new Error(
      `No COMPONENT or COMPONENT_SET found under the icon root "${parentNode?.name ?? ''}" (${parentNode?.type}). ` +
        `Icons must be Figma components (not plain vector groups). ` +
        `Try a different FIGMA_ICON_ROOT_IDS. Each COMPONENT under a COMPONENT_SET is exported as its own Icon*. ` +
        `First children / subtree hint:\n  ${sample}`
    );
  }
  if (nodeIds.length === 0) {
    throw new Error(`No icon export(s) found — nothing to fetch SVG for.`);
  }
  const { images, err } = await getSVGImages(nodeIds);
  if (err) {
    console.warn('Figma images API err map:', err);
  }

  console.log(
    `Waiting ${FIGMA_IMAGE_WAIT_MS}ms for Figma to finish rendering SVGs, then downloading with concurrency=${FIGMA_ICON_FETCH_CONCURRENCY}…`
  );
  await new Promise(resolve => setTimeout(resolve, FIGMA_IMAGE_WAIT_MS));

  /** @type {{ exportId: string, row: unknown[] }[]} */
  const result = [];
  const fails = [];
  /** @type {Map<string, { exportId: string, categoryKebab: string, svgFileBase: string, themeKebab: string | null, svgText: string, nestedPathSegments?: string[] }>} */
  const rawSvgByExportId = new Map();

  async function processNodeId(nodeId) {
    const url = images[nodeId];
    if (!url) throw new Error(`No image URL for ${nodeId}`);
    const svgText = await fetchSvgTextWithRetry(url);
    const rec = idsToNameAndComponentSetId[nodeId];
    const name = oceanbaseLocalByExportId.get(nodeId) ?? rec.localName;
    const componentSetId = rec.urlId;
    const codeConnectVariant = rec.codeConnectVariant;
    const vOpt = formatCodeConnectVariantOption(codeConnectVariant);
    const connectStr = `figma.connect(${name}, "<FIGMA_ICONS_BASE>?node-id=${nodeIdForUrl(componentSetId)}", {${vOpt} example: () => <${name} /> });`;
    if (codeConnectVariant && Object.keys(codeConnectVariant).length > 0) {
      result.push({ exportId: nodeId, row: [name, '', connectStr, codeConnectVariant] });
    } else {
      result.push({ exportId: nodeId, row: [name, '', connectStr] });
    }
    const resolved = resolveThemeAndGlyphForSvgExport({
      themeKebab: rec.themeKebab,
      svgFileBase: rec.svgFileBase,
      localName: name,
    });
    rawSvgByExportId.set(nodeId, {
      exportId: nodeId,
      categoryKebab: rec.categoryKebab,
      svgFileBase: resolved.svgFileBase,
      themeKebab: resolved.themeKebab,
      svgText,
      nestedPathSegments: rec.nestedPathSegments ?? [],
    });
  }

  await runPool(nodeIds, FIGMA_ICON_FETCH_CONCURRENCY, async nodeId => {
    try {
      await processNodeId(nodeId);
    } catch {
      fails.push(nodeId);
    }
  });

  if (fails.length > 0) {
    console.warn(
      `First pass: ${fails.length}/${nodeIds.length} SVG fetch(es) failed — retrying those with the same concurrency + backoff…`
    );
  }

  const stillFails = [];
  await runPool(fails, FIGMA_ICON_FETCH_CONCURRENCY, async nodeId => {
    try {
      await processNodeId(nodeId);
    } catch (e) {
      console.error(e);
      console.warn(
        'Permanent failure:',
        nodeId,
        images[nodeId],
        idsToNameAndComponentSetId[nodeId]
      );
      stillFails.push(nodeId);
    }
  });

  if (stillFails.length > 0) {
    console.warn(
      `${stillFails.length} icon(s) still missing SVG after retries — SVG files omitted for those nodes. Re-run the script or raise FIGMA_IMAGE_WAIT_MS / FIGMA_SVG_FETCH_TIMEOUT_MS in figma-icons.ts.`
    );
  }

  // Write SVG files — dedup / disk-conflict logic only affects SVG output, not Icons.figma.tsx.
  if (rawSvgByExportId.size > 0) {
    const rawSvgItems = [...rawSvgByExportId.values()];
    const { kept } = dedupeRawSvgItemsByThemeBasename(rawSvgItems);
    writeRawSvgFiles(FIGMA_SVG_OUT_DIR, kept);
    console.log(
      `Figma SVG export target: ${path.relative(repoRoot, FIGMA_SVG_OUT_DIR)} (existing files are preserved; only new icons are added)`
    );
  }

  return result.map(r => r.row);
}
