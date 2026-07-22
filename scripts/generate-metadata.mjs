#!/usr/bin/env node
/**
 * @input metadata/components/*.json, metadata/constraints.yaml
 * @output packages/cli/src/metadata/*
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(root, 'packages/cli/src/metadata');
mkdirSync(srcDir, { recursive: true });

execSync('node scripts/extract-added-props.mjs', { cwd: root, stdio: 'inherit' });
execSync('node scripts/generate-skill-props.mjs', { cwd: root, stdio: 'inherit' });

const components = {};
for (const file of readdirSync(join(root, 'metadata/components')).filter((f) => f.endsWith('.json'))) {
  const data = JSON.parse(readFileSync(join(root, 'metadata/components', file), 'utf8'));
  components[data.name] = data;
}

const extractedPath = join(root, 'metadata/.extracted-props.json');
const extracted = existsSync(extractedPath)
  ? JSON.parse(readFileSync(extractedPath, 'utf8'))
  : {};

writeFileSync(join(srcDir, 'components.json'), JSON.stringify(components, null, 2));
writeFileSync(
  join(srcDir, 'constraints.yaml'),
  readFileSync(join(root, 'metadata/constraints.yaml'), 'utf8'),
);
writeFileSync(join(srcDir, 'extracted-props.json'), JSON.stringify(extracted, null, 2));

console.log(`generate:metadata wrote ${Object.keys(components).length} components + extracted props`);
