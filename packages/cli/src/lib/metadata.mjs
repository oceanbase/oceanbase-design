import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

let _components;
let _constraints;
let _extracted;

export function getRepoRoot() {
  // packages/cli/src/lib -> repo root (4 levels up)
  return join(__dirname, '../../../..');
}

export function loadExtractedProps() {
  if (!_extracted) {
    try {
      const p = join(__dirname, '../metadata/extracted-props.json');
      _extracted = JSON.parse(readFileSync(p, 'utf8'));
    } catch {
      _extracted = {};
    }
  }
  return _extracted;
}

export function loadComponents() {
  if (!_components) {
    const p = join(__dirname, '../metadata/components.json');
    _components = JSON.parse(readFileSync(p, 'utf8'));
  }
  return _components;
}

export function loadConstraintsYaml() {
  if (!_constraints) {
    _constraints = readFileSync(join(__dirname, '../metadata/constraints.yaml'), 'utf8');
  }
  return _constraints;
}

export function getComponent(name) {
  const components = loadComponents();
  const key = Object.keys(components).find((k) => k.toLowerCase() === name.toLowerCase());
  return key ? components[key] : null;
}

export function listComponents() {
  return Object.values(loadComponents());
}
