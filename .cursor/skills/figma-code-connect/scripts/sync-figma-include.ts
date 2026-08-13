/**
 * Sync figma.config.json codeConnect.include from colocated index.figma.tsx files.
 *
 * Usage: pnpm run figma:sync-include
 */
import fs from 'fs';
import path from 'path';

function findMonorepoRoot(startDir: string = process.cwd()): string {
  let dir = path.resolve(startDir);
  for (;;) {
    if (fs.existsSync(path.join(dir, 'pnpm-workspace.yaml'))) {
      return dir;
    }
    const parent = path.dirname(dir);
    if (parent === dir) {
      throw new Error('Could not find monorepo root.');
    }
    dir = parent;
  }
}

function walkIndexFigmaFiles(dir: string, acc: string[], designSrcRoot?: string): void {
  if (!fs.existsSync(dir)) return;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules' || ent.name === 'dist' || ent.name === '.git') continue;
      if (designSrcRoot && p === path.join(designSrcRoot, 'figma')) continue;
      walkIndexFigmaFiles(p, acc, designSrcRoot);
    } else if (ent.name === 'index.figma.tsx') {
      acc.push(p);
    }
  }
}

const repoRoot = findMonorepoRoot();
const configPath = path.join(
  repoRoot,
  '.cursor',
  'skills',
  'figma-code-connect',
  'figma.config.json'
);

const found: string[] = [];
walkIndexFigmaFiles(
  path.join(repoRoot, 'packages/design/src'),
  found,
  path.join(repoRoot, 'packages/design/src')
);
walkIndexFigmaFiles(path.join(repoRoot, 'packages/ui/src'), found);

const include = found
  .map(abs => path.relative(repoRoot, abs).split(path.sep).join('/'))
  .sort((a, b) => a.localeCompare(b));

const raw = fs.readFileSync(configPath, 'utf8');
const json = JSON.parse(raw) as { codeConnect?: { include?: string[] } };
const cc = json.codeConnect ?? (json.codeConnect = {});
const prev = cc.include ?? [];
const same = prev.length === include.length && prev.every((p, i) => p === include[i]);

if (same) {
  console.log(`figma.config.json include unchanged (${include.length} files).`);
} else {
  cc.include = include;
  fs.writeFileSync(configPath, `${JSON.stringify(json, null, 2)}\n`, 'utf8');
  console.log(`Updated figma.config.json include (${include.length} files).`);
}
