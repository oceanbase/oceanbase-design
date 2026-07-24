#!/usr/bin/env node
/**
 * Ensure exposed component demos use English UI text.
 * Scope: components listed in .dumi/sidebar-locales.ts
 *
 * Usage:
 *   node scripts/check-demo-locale.mjs
 *   node scripts/check-demo-locale.mjs --allowlist path/to/demo.tsx
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const CJK = /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/;

const DEFAULT_ALLOWLIST = [
  'packages/design/src/locale/demo/basic.tsx',
  'packages/design/src/typography/demo/font-family.tsx',
  'packages/ui/src/DateRanger/demo/locale.tsx',
  'packages/ui/src/DateRanger/demo/copy-paste.tsx',
];

const PKG_MAP = {
  '/components': 'packages/design/src',
  '/biz-components': 'packages/ui/src',
  '/charts': 'packages/charts/src',
};

function parseArgs(argv) {
  const allowlist = [...DEFAULT_ALLOWLIST];
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--allowlist' && argv[i + 1]) {
      allowlist.push(argv[i + 1].replace(/\\/g, '/'));
      i += 1;
    }
  }
  return { allowlist: new Set(allowlist) };
}

function readSidebarLinks() {
  const sidebarPath = path.join(root, '.dumi/sidebar-locales.ts');
  const content = fs.readFileSync(sidebarPath, 'utf8');
  return [...content.matchAll(/link: '([^']+)'/g)].map(m => m[1]);
}

function toComponentDir(link) {
  const [prefix, ...segments] = link.split('/').filter(Boolean);
  const routePrefix = `/${prefix}`;
  const base = PKG_MAP[routePrefix];
  if (!base) return null;

  const slug = segments.join('/');
  if (routePrefix === '/components') {
    return path.join(root, base, slug);
  }

  const pascal = slug
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  return path.join(root, base, pascal);
}

function collectDemoFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectDemoFiles(fullPath, files);
      continue;
    }
    if (/demo[/\\].+\.(t|j)sx?$/.test(fullPath.replace(/\\/g, '/'))) {
      files.push(fullPath);
    }
  }
  return files;
}

function main() {
  const { allowlist } = parseArgs(process.argv.slice(2));
  const links = readSidebarLinks();
  const componentDirs = [...new Set(links.map(toComponentDir).filter(Boolean))];

  const violations = [];
  for (const dir of componentDirs) {
    for (const file of collectDemoFiles(dir)) {
      const rel = path.relative(root, file).replace(/\\/g, '/');
      if (allowlist.has(rel)) continue;

      const content = fs.readFileSync(file, 'utf8');
      if (CJK.test(content)) {
        violations.push(rel);
      }
    }
  }

  if (violations.length === 0) {
    console.log(`check-demo-locale: OK (${componentDirs.length} exposed components)`);
    process.exit(0);
  }

  console.error(`check-demo-locale: found ${violations.length} demo file(s) with CJK text:\n`);
  for (const file of violations.sort()) {
    console.error(`  - ${file}`);
  }
  console.error('\nAllowlisted exceptions:');
  for (const file of [...allowlist].sort()) {
    console.error(`  - ${file}`);
  }
  process.exit(1);
}

main();
