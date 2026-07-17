import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { getRepoRoot } from '../lib/metadata.mjs';

export async function tokenCommand({ dense, json }) {
  const root = getRepoRoot();
  const tokenPath = join(root, 'packages/design/src/theme/obTokenMeta.ts');
  let obExcerpt = '';
  if (existsSync(tokenPath)) {
    const content = readFileSync(tokenPath, 'utf8');
    obExcerpt = content.slice(0, dense ? 2000 : 8000);
  }

  const result = {
    obToken: {
      source: 'packages/design/src/theme/obTokenMeta.ts',
      usage: 'Prefer obToken or var(--ob-*) over hardcoded values',
      excerpt: obExcerpt,
    },
  };

  if (json) {
    console.log(JSON.stringify(result, null, 2));
    return;
  }
  if (dense) {
    console.log('# obToken\n');
    console.log(obExcerpt);
    return;
  }
  console.log(JSON.stringify(result, null, 2));
}
