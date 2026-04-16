import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
/** Monorepo root (parent of `scripts/`). */
const repoRoot = path.resolve(__dirname, '../../..');

const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY;
const URL_BASE = 'https://api.figma.com/v1/files';
const URL_BASE_IMAGES = 'https://api.figma.com/v1/images';

const ROOT_TRAVERSE_IDS = (process.env.FIGMA_ICON_ROOT_IDS ?? '5026:7968')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);
const SKIP_REST_API = process.argv.includes('--skip-rest-api');
const SKIP_ICONS_GENERATE = process.argv.includes('--skip-icons-generate');

const FIGMA_SVG_OUT_DIR = path.join(repoRoot, 'packages/icons/svg');
/** Do not delete `packages/icons/svg`; existing tracked SVGs must be preserved. */
const FIGMA_SVG_CLEAN = false;
const FIGMA_ICON_FETCH_CONCURRENCY = 8;
const FIGMA_IMAGE_WAIT_MS = 15_000;
const FIGMA_SVG_FETCH_TIMEOUT_MS = 90_000;
const FIGMA_SVG_FETCH_ATTEMPTS = 5;

const iconsFigmaPath = path.join(repoRoot, 'packages/design/src/figma/Icons/index.figma.tsx');

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
      const out = {
        localName,
        nodeId: normalizeFigmaNodeId(m[1]),
      };
      if (row.length >= 4 && row[3] && typeof row[3] === 'object' && !Array.isArray(row[3])) {
        out.codeConnectVariant = row[3];
      }
      rows.push(out);
    } else if (row && typeof row === 'object' && row.localName && row.nodeId) {
      rows.push(row);
    } else if (Array.isArray(row) && row.length === 2) {
      rows.push({ localName: row[0], nodeId: normalizeFigmaNodeId(row[1]) });
    } else {
      throw new Error(`Unrecognized icons.json row: ${JSON.stringify(row)}`);
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

/** Run `packages/icons` `generate` (ts-node scripts/generate.ts) after SVG / Icons.figma sync. */
function runIconsPackageGenerate() {
  console.log('Running pnpm --filter @oceanbase/icons generate…');
  const r = spawnSync('pnpm', ['--filter', '@oceanbase/icons', 'run', 'generate'], {
    cwd: repoRoot,
    stdio: 'inherit',
    env: process.env,
  });
  if (r.error) throw r.error;
  if (r.status !== 0) {
    throw new Error(`@oceanbase/icons generate exited with code ${r.status}`);
  }
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
    `// @ts-nocheck\n/* eslint-disable */\n/* Auto-generated by scripts/figma/icons/app.mjs — no Icon* prefix; names align with packages/icons/svg/{theme}/{stem}.svg + theme suffix (Outlined|Filled|TwoTone|Colored) */\nimport { figma } from "@figma/code-connect";\n${importBlock}\n\n${connects}\n`
  );
  console.log(
    `Wrote ${sortedRows.length} figma.connect + @oceanbase/icons (no Icon prefix; stem + theme like packages/icons/svg) → ${path.relative(repoRoot, iconsFigmaPath)}`
  );
}

async function go() {
  if (!SKIP_REST_API) {
    if (!TOKEN || !FILE_KEY) {
      console.error(
        'Missing FIGMA_ACCESS_TOKEN or FIGMA_FILE_KEY in environment (use .env at repo root).'
      );
      process.exit(1);
    }
    const data = await getIconComponents();
    const sorted = [...data].sort((a, b) => a[0].localeCompare(b[0]));
    fs.writeFileSync(path.join(__dirname, 'icons.json'), JSON.stringify(sorted, null, 2));
  }

  const json = JSON.parse(fs.readFileSync(path.join(__dirname, 'icons.json'), 'utf8'));
  const rows = normalizeIconRows(json);
  writeGeneratedFiles(rows);
  if (!SKIP_ICONS_GENERATE) {
    runIconsPackageGenerate();
  } else {
    console.log('Skipped @oceanbase/icons generate (--skip-icons-generate).');
  }
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
 * Export symbol for Code Connect / icons.json: SVG stem + theme, no `Icon` prefix
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
 * Unique `{PascalStem}{ThemeSuffix}` per export id when stem+theme collide.
 */
function assignUniqueOceanbaseLocalNames(entries) {
  const sorted = [...entries].sort((a, b) => String(a.nodeId).localeCompare(String(b.nodeId)));
  const used = new Set();
  /** @type {Map<string, string>} */
  const out = new Map();
  let dupCount = 0;
  for (const { nodeId, desired } of sorted) {
    let name = desired;
    if (used.has(name)) {
      dupCount++;
      const idPart = String(nodeId).replace(/[:.-]/g, '_');
      name = `${desired}_${idPart}`;
      let n = 2;
      while (used.has(name)) {
        name = `${desired}_${idPart}_${n}`;
        n++;
      }
    }
    used.add(name);
    out.set(nodeId, name);
  }
  if (dupCount > 0) {
    console.log(
      `[icons] ${dupCount} export(s) shared the same stem+theme; added a stable _nodeId suffix so each stays unique.`
    );
  }
  return out;
}

/**
 * @param {Record<string, { localName: string, urlId: string, codeConnectVariant?: Record<string, string>, categoryKebab: string, svgFileBase: string, themeKebab: string | null }>} idsMap
 * @returns {Map<string, string>}
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
    const stem = svgFileStemWithoutTheme(rec.categoryKebab, resolved.svgFileBase);
    const desired = oceanbaseIconNameFromSvgTheme(themeDir, stem);
    entries.push({ nodeId, desired });
  }
  return assignUniqueOceanbaseLocalNames(entries);
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
  let glyph = svgFileBase;

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

function writeRawSvgFiles(baseOutDir, items, options = {}) {
  const clean = options.clean !== false;
  const skipExisting = options.skipExisting !== false;
  if (!baseOutDir || !items.length) return;
  if (clean && fs.existsSync(baseOutDir)) {
    fs.rmSync(baseOutDir, { recursive: true, force: true });
  }
  fs.mkdirSync(baseOutDir, { recursive: true });
  for (const theme of THEME_DIR_ORDER) {
    fs.mkdirSync(path.join(baseOutDir, theme), { recursive: true });
  }

  const used = new Map();
  /** @type {Record<string, number>} */
  const svgCountByTheme = Object.fromEntries(THEME_DIR_ORDER.map(t => [t, 0]));
  /** How many SVGs were actually written (existing paths skipped when skipExisting). */
  let written = 0;
  let skippedExisting = 0;
  const sorted = [...items].sort((a, b) => {
    const ca = a.categoryKebab.localeCompare(b.categoryKebab);
    if (ca !== 0) return ca;
    const ta = String(a.themeKebab ?? '').localeCompare(String(b.themeKebab ?? ''));
    if (ta !== 0) return ta;
    const fa = a.svgFileBase.localeCompare(b.svgFileBase);
    if (fa !== 0) return fa;
    return String(a.exportId).localeCompare(String(b.exportId));
  });
  for (const it of sorted) {
    const themeDir = it.themeKebab && THEME_KEYS.has(it.themeKebab) ? it.themeKebab : 'outlined';
    svgCountByTheme[themeDir]++;
    const stem = svgFileStemWithoutTheme(it.categoryKebab, it.svgFileBase);
    const mapKey = `${themeDir}/${stem}`;
    const n = (used.get(mapKey) ?? 0) + 1;
    used.set(mapKey, n);
    const base = n === 1 ? stem : `${stem}-${n}`;
    const outDir = path.join(baseOutDir, themeDir);
    const filePath = path.join(outDir, `${base}.svg`);
    if (skipExisting && fs.existsSync(filePath)) {
      skippedExisting++;
      continue;
    }
    fs.writeFileSync(filePath, it.svgText, 'utf8');
    written++;
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
  const skipNote =
    skippedExisting > 0
      ? `; skipped ${skippedExisting} path(s) already present under ${path.basename(baseOutDir)}`
      : '';
  console.log(
    `SVG theme dirs (classify counts under theme folders): ${themeSummary}; wrote ${written} file(s)${skipNote}.`
  );
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
  const types = {};
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
 * Stable localName per export; suffix only when the same base name repeats under the same
 * Figma sibling scope (same COMPONENT_SET or same parent FRAME/GROUP/SECTION).
 */
function assignUniqueLocalNames(entries) {
  /** @type {Map<string, Set<string>>} */
  const usedByScope = new Map();
  /** @type {Record<string, { localName: string, urlId: string, codeConnectVariant?: Record<string, string>, categoryKebab: string, svgFileBase: string, themeKebab: string | null }>} */
  const out = {};
  let dupCount = 0;

  function usedInScope(scopeKey) {
    const k = scopeKey || '__root';
    if (!usedByScope.has(k)) usedByScope.set(k, new Set());
    return usedByScope.get(k);
  }

  for (const {
    exportId,
    urlId,
    baseLocal,
    codeConnectVariant,
    categoryKebab,
    svgFileBase,
    themeKebab,
    siblingScopeId,
  } of entries) {
    const used = usedInScope(siblingScopeId);
    const idPart = String(urlId).replace(/[:.-]/g, '_');
    let local = baseLocal;
    if (used.has(local)) {
      dupCount++;
      local = `${baseLocal}_${idPart}`;
    }
    let n = 2;
    while (used.has(local)) {
      local = `${baseLocal}_${idPart}_${n}`;
      n++;
    }
    used.add(local);
    out[exportId] = {
      localName: local,
      urlId,
      codeConnectVariant,
      categoryKebab,
      svgFileBase,
      themeKebab: themeKebab ?? null,
    };
  }
  if (dupCount > 0) {
    console.log(
      `[icons] ${dupCount} duplicate name(s) under the same frame or variant set; added _nodeId suffix.`
    );
  }
  return out;
}

/**
 * Collect SVG export targets under `root`: export node id → [localName, nodeIdForCodeConnectUrl].
 * COMPONENT_SET: every COMPONENT child is exported. Standalone COMPONENT → itself. Recurses.
 * `categoryKebab` from numbered sections like `2-Arrow-Icon` whose slug is not a theme.
 * `themeKebab` from: (1) numbered sections `2-Outlined-Icon` → slug `outlined`; (2) FRAME/SECTION/GROUP
 *   named Outlined/Filled/…; (3) COMPONENT_SET variant values (outlined / outline / filled / …).
 */
function collectIconExportTargets(root) {
  /** @type {{ exportId: string, urlId: string, baseLocal: string, codeConnectVariant?: Record<string, string>, categoryKebab: string, svgFileBase: string, themeKebab: string | null, siblingScopeId: string }[]} */
  const entries = [];
  let localSetVariantMissingFilter = 0;

  /** `parentId`: direct parent node id (for standalone COMPONENT sibling groups). */
  function visit(node, categoryKebab, themeKebab, parentId) {
    if (!node) return;
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
    if (t === 'FRAME' || t === 'SECTION' || t === 'GROUP') {
      const folderTheme = themeFromSectionNodeName(node.name);
      if (folderTheme) th = folderTheme;
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
      });
      return;
    }
    if (node.children?.length) {
      for (const c of node.children) {
        visit(c, cat, th, node.id);
      }
    }
  }

  visit(root, 'misc', null, '');
  if (localSetVariantMissingFilter > 0) {
    console.warn(
      `${localSetVariantMissingFilter} COMPONENT_SET child name(s) have no key=value pairs (e.g. Property 2=outlined). ` +
        `Code Connect cannot scope those rows by variant — Inspect may show the wrong Icon*.`
    );
  }
  return assignUniqueLocalNames(entries);
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
  const nodeIds = Object.keys(idsToNameAndComponentSetId);
  if (nodeIds.length === 0) {
    const sample = describeChildTypesSample(parentNode);
    throw new Error(
      `No COMPONENT or COMPONENT_SET found under the icon root "${parentNode?.name ?? ''}" (${parentNode?.type}). ` +
        `Icons must be Figma components (not plain vector groups). ` +
        `Try a different FIGMA_ICON_ROOT_IDS. Each COMPONENT under a COMPONENT_SET is exported as its own Icon*. ` +
        `First children / subtree hint:\n  ${sample}`
    );
  }
  const { images, err } = await getSVGImages(nodeIds);
  if (err) {
    console.warn('Figma images API err map:', err);
  }

  /** Aligns icons.json / Icons.figma.tsx with packages/icons/svg/{theme}/{stem}.svg + @oceanbase/icons naming. */
  const oceanbaseLocalByExportId = buildOceanbaseLocalNameByExportId(idsToNameAndComponentSetId);

  console.log(
    `Waiting ${FIGMA_IMAGE_WAIT_MS}ms for Figma to finish rendering SVGs, then downloading with concurrency=${FIGMA_ICON_FETCH_CONCURRENCY}…`
  );
  await new Promise(resolve => setTimeout(resolve, FIGMA_IMAGE_WAIT_MS));

  const result = [];
  const fails = [];
  /** @type {Map<string, { exportId: string, categoryKebab: string, svgFileBase: string, themeKebab: string | null, svgText: string }>} */
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
      result.push([name, '', connectStr, codeConnectVariant]);
    } else {
      result.push([name, '', connectStr]);
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
      `${stillFails.length} icon(s) still missing SVG after retries — icons.json / Icons.figma.tsx will omit them. Re-run the script or raise FIGMA_IMAGE_WAIT_MS / FIGMA_SVG_FETCH_TIMEOUT_MS in app.mjs.`
    );
  }

  if (rawSvgByExportId.size > 0) {
    const rawSvgItems = [...rawSvgByExportId.values()];
    writeRawSvgFiles(FIGMA_SVG_OUT_DIR, rawSvgItems, {
      clean: FIGMA_SVG_CLEAN,
      skipExisting: true,
    });
    console.log(
      `Figma SVG export target: ${path.relative(repoRoot, FIGMA_SVG_OUT_DIR)} (outlined|filled|twotone|colored/; existing files are not overwritten)`
    );
  }

  return result;
}
