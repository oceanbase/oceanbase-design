#!/usr/bin/env node
/**
 * @input metadata/constraints.yaml, skills/oceanbase-design-usage/references/ASSEMBLY.md
 * @output exit 0 if constraint ids stay in sync
 */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];

const yaml = readFileSync(join(root, 'metadata/constraints.yaml'), 'utf8');
const assembly = readFileSync(
  join(root, 'skills/oceanbase-design-usage/references/ASSEMBLY.md'),
  'utf8',
);

const yamlIds = new Set();
for (const line of yaml.split('\n')) {
  const m = line.match(/^\s*- id:\s*(.+)$/);
  if (m) yamlIds.add(m[1].trim());
}

const assemblyChecks = [
  ['config-provider-root', /ConfigProvider/],
  ['import-design-not-antd', /@oceanbase\/design|from\s+['"]antd/],
  ['card-table-inner-bordered', /innerBordered/],
  ['filter-not-select-for-bar', /Filter/],
  ['table-over-protable', /ProTable/],
];

for (const [id, pattern] of assemblyChecks) {
  if (!yamlIds.has(id)) {
    errors.push(`Missing constraint id in yaml: ${id}`);
  }
  if (!pattern.test(assembly)) {
    errors.push(`ASSEMBLY.md may be out of sync for: ${id}`);
  }
}

if (errors.length) {
  console.error('check:skill-doc-sync failed:\n');
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}

console.log(`check:skill-doc-sync passed (${yamlIds.size} constraint ids)`);
