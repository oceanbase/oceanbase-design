import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { getComponent, getRepoRoot } from '../lib/metadata.mjs';
import { mergeObDoc } from '../normalize/merge.mjs';

function readObDoc(meta) {
  const root = getRepoRoot();
  if (!meta.docSource) return '';
  const p = join(root, meta.docSource);
  return existsSync(p) ? readFileSync(p, 'utf8') : '';
}

export async function docCommand(name, { dense }) {
  const meta = getComponent(name);
  if (!meta) throw new Error(`Unknown component: ${name}`);

  const obDoc = readObDoc(meta);
  const doc = mergeObDoc(meta, obDoc);
  if (dense) {
    console.log(doc.split('\n').slice(0, 40).join('\n'));
    return;
  }
  console.log(doc);
}
