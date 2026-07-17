#!/usr/bin/env node
/**
 * @input metadata/components/*.json + propsSource TS files
 * @output metadata/.extracted-props.json
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { extractAddedProps, obSpecificProps } from './lib/extract-props.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const componentsDir = join(root, 'metadata/components');
const outPath = join(root, 'metadata/.extracted-props.json');

const extracted = {};

for (const file of readdirSync(componentsDir).filter((f) => f.endsWith('.json'))) {
  const meta = JSON.parse(readFileSync(join(componentsDir, file), 'utf8'));
  const src = join(root, meta.propsSource || '');
  if (!meta.propsSource || !existsSync(src)) {
    extracted[meta.name] = { source: meta.propsSource, props: [], error: 'missing source' };
    continue;
  }
  const all = extractAddedProps(src, `${meta.name}Props`);
  const props = obSpecificProps(all, meta);
  extracted[meta.name] = {
    source: meta.propsSource,
    props,
    allInterfaceProps: all,
  };
}

writeFileSync(outPath, JSON.stringify(extracted, null, 2));
console.log(`extract:added-props wrote ${Object.keys(extracted).length} entries`);
