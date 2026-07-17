#!/usr/bin/env node
/** Write public/llms-codemod.txt for static hosting before site:build */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sources = [
  join(root, 'docs/design/react/migrate.md'),
  join(root, 'skills/oceanbase-design-usage/references/codemod.md'),
];

const parts = [
  '# OceanBase Design — Codemod & Migration',
  '',
  'For AI agents: use `ob-design migrate` or `@oceanbase/codemod` before manual OB edits.',
  '',
];

for (const src of sources) {
  if (existsSync(src)) {
    parts.push(`## ${basename(src)}`, '', readFileSync(src, 'utf8').trim(), '', '---', '');
  }
}

const out = join(root, 'public/llms-codemod.txt');
writeFileSync(out, parts.join('\n'));
console.log(`Wrote ${out}`);
