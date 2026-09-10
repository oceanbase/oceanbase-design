#!/usr/bin/env node
/**
 * Dump every runtime `--ob-*` CSS variable (names, categories, descriptions) as JSON.
 * @output metadata/obToken.css-vars.json
 *
 * Names, values and documentation are joined by `packages/design/src/theme/tokenData.ts`, which is
 * shared with the IDE token artifacts generator, so this script only shapes the JSON.
 */
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { obTokenMeta } from '../packages/design/src/theme/obTokenMeta';
import {
  collectObCssVarEntries,
  getDefaultGlobalToken,
} from '../packages/design/src/theme/tokenData';

const root = join(__dirname, '..');
const outPath = join(root, 'metadata/obToken.css-vars.json');
const PREFIX = 'ob';

const allEntries = collectObCssVarEntries(getDefaultGlobalToken(), PREFIX);
const entryByCssVar = new Map(allEntries.map(entry => [entry.cssVar, entry]));
const tokens = allEntries.map(entry => entry.cssVar).sort();

// Categories follow obTokenMeta order; undocumented (deprecated compat) variables fall into `other`.
const categories: Record<string, string[]> = {};
const documented = new Set<string>();

for (const meta of obTokenMeta) {
  const cssVar = `--${PREFIX}-${meta.name}`;
  if (!entryByCssVar.has(cssVar)) {
    console.warn(
      `extract-ob-css-vars: obTokenMeta "${meta.name}" not in obToken.tsx runtime injection`
    );
    continue;
  }
  documented.add(cssVar);
  if (!categories[meta.category]) categories[meta.category] = [];
  categories[meta.category].push(cssVar);
}

const uncategorized = tokens.filter(cssVar => !documented.has(cssVar));
if (uncategorized.length) {
  categories.other = uncategorized;
  console.warn(
    `extract-ob-css-vars: ${uncategorized.length} runtime token(s) missing from obTokenMeta (→ categories.other)`
  );
}

for (const category of Object.keys(categories)) {
  categories[category].sort();
}

const entries = tokens.map(cssVar => {
  const entry = entryByCssVar.get(cssVar);
  if (!entry?.documented) {
    return { cssVar, name: entry?.name ?? cssVar.slice(PREFIX.length + 3), category: 'other' };
  }
  return {
    cssVar,
    name: entry.name,
    jsToken: entry.jsToken,
    desc: entry.desc,
    descEn: entry.descEn,
    category: entry.category,
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
