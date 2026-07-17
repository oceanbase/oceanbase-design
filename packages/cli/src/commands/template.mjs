import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const templatesDir = join(__dirname, '../templates');

const TEMPLATE_MAP = {
  'list-filter-table': 'list-filter-table.tsx',
  'detail-descriptions': 'detail-descriptions.tsx',
  'app-basic-layout': 'app-basic-layout.tsx',
  'form-in-modal': 'form-in-modal.tsx',
};

export function templateCommand(name, { skeleton }) {
  const file = TEMPLATE_MAP[name];
  if (!file) {
    throw new Error(`Unknown template: ${name}. Available: ${Object.keys(TEMPLATE_MAP).join(', ')}`);
  }
  let content = readFileSync(join(templatesDir, file), 'utf8');
  if (skeleton) {
    content = content.replace(/\/\* IMPLEMENT:.*?\*\//gs, '/* TODO */');
  }
  console.log(content);
}
