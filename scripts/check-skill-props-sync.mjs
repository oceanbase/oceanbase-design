#!/usr/bin/env node
/**
 * @input generated props-index.md vs generator output
 */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outPath = join(root, 'skills/oceanbase-design/references/generated/props-index.md');

const before = readFileSync(outPath, 'utf8');
execSync('node scripts/generate-skill-props.mjs', { cwd: root, stdio: 'pipe' });
const after = readFileSync(outPath, 'utf8');

if (before !== after) {
  console.error('check:skill-props-sync failed: props-index.md is stale. Run pnpm run generate:skill-props');
  process.exit(1);
}

console.log('check:skill-props-sync passed');
