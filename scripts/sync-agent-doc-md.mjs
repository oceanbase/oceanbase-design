#!/usr/bin/env node
/**
 * @input docs/design/react/*.md, docs/design/design-skills.md
 * @output public/docs/** — static .md URLs for agents (/docs/react/for-agents.md, etc.)
 */
import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function copyDoc(srcRel, destRel) {
  const src = join(root, srcRel);
  const dest = join(root, destRel);
  if (!existsSync(src)) {
    console.warn(`sync-agent-doc-md: skip missing ${srcRel}`);
    return 0;
  }
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(src, dest);
  return 1;
}

let count = 0;
for (const name of readdirSync(join(root, 'docs/design/react')).filter(f => f.endsWith('.md'))) {
  count += copyDoc(`docs/design/react/${name}`, `public/docs/react/${name}`);
}
count += copyDoc('docs/design/design-skills.md', 'public/docs/design/design-skills.md');
console.log(`sync-agent-doc-md: wrote ${count} files`);
