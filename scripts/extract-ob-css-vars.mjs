#!/usr/bin/env node
/**
 * Extract runtime --ob-* CSS variable names from obToken.tsx; categories and descriptions from obTokenMeta.
 * @output metadata/obToken.css-vars.json
 *
 * SYNC: .dumi/theme/builtins/ObTokenTable (same obTokenMeta source as design-token.md)
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseObTokenMeta } from './lib/parse-ob-token-meta.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const obTokenPath = join(root, 'packages/design/src/theme/obToken.tsx');
const obTokenMetaPath = join(root, 'packages/design/src/theme/obTokenMeta.ts');
const outPath = join(root, 'metadata/obToken.css-vars.json');

function kebabToCamel(str) {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

const obTokenSource = readFileSync(obTokenPath, 'utf8');
const tokenRe = /\[`--\$\{prefix\}-([^`]+)`\]/g;
const tokens = [];
const seen = new Set();
let m;
while ((m = tokenRe.exec(obTokenSource)) !== null) {
  const name = `--ob-${m[1]}`;
  if (!seen.has(name)) {
    seen.add(name);
    tokens.push(name);
  }
}
tokens.sort();

const obTokenMeta = parseObTokenMeta(obTokenMetaPath);
const metaByName = new Map(obTokenMeta.map(meta => [meta.name, meta]));
const categories = {};

for (const meta of obTokenMeta) {
  const cssVar = `--ob-${meta.name}`;
  if (!seen.has(cssVar)) {
    console.warn(`extract-ob-css-vars: obTokenMeta "${meta.name}" not in obToken.tsx runtime injection`);
    continue;
  }
  if (!categories[meta.category]) categories[meta.category] = [];
  categories[meta.category].push(cssVar);
}

for (const cat of Object.keys(categories)) {
  categories[cat].sort();
}

const uncategorized = tokens.filter(t => !Object.values(categories).some(arr => arr.includes(t)));
if (uncategorized.length) {
  categories.other = uncategorized.sort();
  console.warn(
    `extract-ob-css-vars: ${uncategorized.length} runtime token(s) missing from obTokenMeta (→ categories.other)`,
  );
}

const entries = tokens.map(cssVar => {
  const name = cssVar.slice(5);
  const meta = metaByName.get(name);
  if (!meta) {
    return { cssVar, name, category: 'other' };
  }
  return {
    cssVar,
    name: meta.name,
    jsToken: kebabToCamel(meta.name),
    desc: meta.desc,
    descEn: meta.descEn,
    category: meta.category,
  };
});

const result = {
  version: '1.0.0',
  source: 'packages/design/src/theme/obToken.tsx',
  metaSource: 'packages/design/src/theme/obTokenMeta.ts',
  count: tokens.length,
  tokens,
  categories,
  entries,
};

writeFileSync(outPath, `${JSON.stringify(result, null, 2)}\n`);
console.log(`extract-ob-css-vars: wrote ${tokens.length} tokens → ${outPath}`);
