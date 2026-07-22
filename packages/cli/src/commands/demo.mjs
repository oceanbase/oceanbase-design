import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { getComponent, getRepoRoot } from '../lib/metadata.mjs';
import { rewriteImports } from '../normalize/import-rewrite.mjs';

function listLocalDemos(meta) {
  const root = getRepoRoot();
  if (!meta.docSource) return [];
  const demoDir = join(root, meta.docSource.replace(/index\.md$/, 'demo'));
  if (!existsSync(demoDir)) return [];
  return readdirSync(demoDir)
    .filter((f) => f.endsWith('.tsx'))
    .map((f) => f.replace(/\.tsx$/, ''));
}

function readLocalDemo(meta, demoId) {
  const root = getRepoRoot();
  if (!meta.docSource) return null;
  const demoDir = join(root, meta.docSource.replace(/index\.md$/, 'demo'));
  if (!existsSync(demoDir)) return null;

  const demos = listLocalDemos(meta);
  const id = demoId || demos[0];
  if (!id) return null;

  const file = join(demoDir, `${id}.tsx`);
  if (!existsSync(file)) return null;
  return { id, source: readFileSync(file, 'utf8') };
}

export async function demoCommand(name, demoId) {
  const meta = getComponent(name);
  if (!meta) throw new Error(`Unknown component: ${name}`);

  const local = readLocalDemo(meta, demoId);
  if (local) {
    console.log(rewriteImports(local.source));
    return;
  }

  const available = listLocalDemos(meta);
  if (demoId && available.length) {
    throw new Error(`No demo "${demoId}" for ${name}. Available: ${available.join(', ')}`);
  }
  throw new Error(
    `No local demo for ${name}${available.length ? `. Available: ${available.join(', ')}` : ''}`,
  );
}
