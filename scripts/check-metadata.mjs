#!/usr/bin/env node
/**
 * @input metadata/components/*.json, metadata/constraints.yaml, component source props
 * @output exit 0 if metadata is valid and consistent
 * @position CI check for diffLevel registry drift
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { extractAddedProps } from './lib/extract-props.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const componentsDir = join(root, 'metadata/components');
const constraintsPath = join(root, 'metadata/constraints.yaml');

const VALID_DIFF_LEVELS = new Set(['A', 'B', 'C', 'D']);
const errors = [];

function loadComponents() {
  const files = readdirSync(componentsDir).filter((f) => f.endsWith('.json'));
  return files.map((f) => {
    const data = JSON.parse(readFileSync(join(componentsDir, f), 'utf8'));
    return { file: f, ...data };
  });
}

function loadConstraintIds() {
  const yaml = readFileSync(constraintsPath, 'utf8');
  const ids = new Set();
  for (const line of yaml.split('\n')) {
    const m = line.match(/^\s*- id:\s*(.+)$/);
    if (m) ids.add(m[1].trim());
  }
  return ids;
}

const components = loadComponents();
const constraintIds = loadConstraintIds();

if (components.length < 20) {
  errors.push(`Expected at least 20 components, found ${components.length}`);
}

const names = new Set();
for (const comp of components) {
  if (names.has(comp.name)) {
    errors.push(`Duplicate component name: ${comp.name}`);
  }
  names.add(comp.name);

  if (!VALID_DIFF_LEVELS.has(comp.diffLevel)) {
    errors.push(`${comp.name}: invalid diffLevel "${comp.diffLevel}"`);
  }

  if (!comp.importFrom) {
    errors.push(`${comp.name}: missing importFrom`);
  }

  if (comp.diffLevel === 'D' && comp.delegateAntd !== false) {
    errors.push(`${comp.name}: diffLevel D must set delegateAntd: false`);
  }

  if (comp.diffLevel === 'A' && comp.addedProps?.length > 0) {
    errors.push(`${comp.name}: diffLevel A should not have addedProps (use B or C)`);
  }

  if (['B', 'C'].includes(comp.diffLevel) && !(comp.addedProps?.length > 0)) {
    errors.push(`${comp.name}: diffLevel ${comp.diffLevel} requires addedProps`);
  }

  for (const cid of comp.constraints || []) {
    if (!constraintIds.has(cid)) {
      errors.push(`${comp.name}: unknown constraint id "${cid}"`);
    }
  }

  if (comp.propsSource && comp.diffLevel !== 'A' && !comp.addedPropsManual) {
    const fullPath = join(root, comp.propsSource);
    if (!existsSync(fullPath)) {
      errors.push(`${comp.name}: propsSource not found: ${comp.propsSource}`);
    } else {
      const ifaceProps = extractAddedProps(fullPath, `${comp.name}Props`);
      for (const prop of comp.addedProps || []) {
        if (prop.includes('.')) continue;
        if (!ifaceProps.includes(prop)) {
          errors.push(`${comp.name}: addedProp "${prop}" not in ${comp.name}Props interface`);
        }
      }
    }
  }

  if (comp.docSource && !existsSync(join(root, comp.docSource))) {
    errors.push(`${comp.name}: docSource not found: ${comp.docSource}`);
  }
}

if (errors.length > 0) {
  console.error('check:metadata failed:\n');
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}

console.log(`check:metadata passed (${components.length} components)`);
