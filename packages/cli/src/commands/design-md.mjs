import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { getRepoRoot } from '../lib/metadata.mjs';

/** @typedef {{ format?: string }} DesignMdOptions */

export function designMdCommand({ format } = {}) {
  const path = join(getRepoRoot(), 'public/design.md');
  if (!existsSync(path)) {
    console.error(
      'design.md not found. Run `pnpm run generate:design-md` in oceanbase-design repo, or read /design.md on the design site.',
    );
    process.exitCode = 1;
    return;
  }
  const content = readFileSync(path, 'utf8');
  if (format === 'json') {
    const yamlMatch = content.match(/^---\n([\s\S]*?)\n---/);
    console.log(
      JSON.stringify(
        {
          source: 'public/design.md',
          url: '/design.md',
          yaml: yamlMatch?.[1] ?? null,
          markdown: yamlMatch ? content.slice(yamlMatch[0].length).trim() : content.trim(),
        },
        null,
        2,
      ),
    );
    return;
  }
  process.stdout.write(content);
}
