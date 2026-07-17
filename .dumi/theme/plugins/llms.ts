import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import type { IApi } from 'dumi';
import { glob } from 'glob';

interface DocItem {
  title: string;
  url: string;
  category: 'docs' | 'component' | 'biz' | 'chart';
  content?: string;
}

function processMarkdownFile(
  markdownFile: string,
  siteDir: string,
  buckets: { docs: DocItem[]; components: DocItem[]; biz: DocItem[]; charts: DocItem[] }
): void {
  const mdPath = path.join(siteDir, markdownFile);
  const content = fs.readFileSync(mdPath, 'utf-8').trim();
  if (!content) return;

  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : path.basename(markdownFile, '.md');

  let urlPath = markdownFile.replace(/\.md$/, '');
  if (urlPath.endsWith('/index')) {
    urlPath = urlPath.replace(/\/index$/, '');
  }
  const url = `/${urlPath}.md`;

  if (markdownFile.startsWith('components/')) {
    buckets.components.push({ title, url, category: 'component', content });
  } else if (markdownFile.startsWith('biz-components/')) {
    buckets.biz.push({ title, url, category: 'biz', content });
  } else if (markdownFile.startsWith('charts/')) {
    buckets.charts.push({ title, url, category: 'chart', content });
  } else if (markdownFile.startsWith('docs/')) {
    buckets.docs.push({ title, url, category: 'docs', content });
  }
}

function generateCodemodLlms(root: string): string {
  const sources = [
    path.join(root, 'docs/design/react/migrate.md'),
    path.join(root, 'skills/oceanbase-design-usage/references/codemod.md'),
  ];
  const parts = [
    '# OceanBase Design — Codemod & Migration',
    '',
    'For AI agents: use `ob-design migrate` or `@oceanbase/codemod` before manual OB edits.',
    '',
  ];
  for (const src of sources) {
    if (fs.existsSync(src)) {
      parts.push(
        `## ${path.basename(src)}`,
        '',
        fs.readFileSync(src, 'utf8').trim(),
        '',
        '---',
        ''
      );
    }
  }
  return parts.join('\n');
}

function generateObConstraints(root: string): string {
  const constraintsPath = path.join(root, 'metadata/constraints.yaml');
  const componentsDir = path.join(root, 'metadata/components');
  const yaml = fs.readFileSync(constraintsPath, 'utf8');
  const components = fs
    .readdirSync(componentsDir)
    .filter(f => f.endsWith('.json'))
    .map(f => JSON.parse(fs.readFileSync(path.join(componentsDir, f), 'utf8')));

  const lines = [
    '# OceanBase Design Constraints',
    '',
    'Machine-readable constraints for AI agents. Use ob_constraint MCP tool for full detail.',
    '',
    '## constraints.yaml',
    '',
    yaml.trim(),
    '',
    '## diffLevel summary',
    '',
  ];

  for (const c of components.sort((a: { name: string }, b: { name: string }) =>
    a.name.localeCompare(b.name)
  )) {
    lines.push(
      `- **${c.name}** (${c.package}, diffLevel ${c.diffLevel})${
        c.addedProps?.length ? `: addedProps ${c.addedProps.join(', ')}` : ''
      }`
    );
  }
  lines.push('');
  return lines.join('\n');
}

async function generateLLms(api: IApi) {
  const siteDir = api.paths.absOutputPath;
  const root = api.cwd;

  if (!fs.existsSync(siteDir)) {
    api.logger.error('Output directory does not exist.');
    return;
  }

  const markdownFiles = await glob('**/*.md', {
    cwd: siteDir,
    ignore: ['llms*.md', 'llms*.txt'],
  });

  const englishDocs = markdownFiles.filter(
    file => !file.includes('-cn/') && !file.endsWith('-cn.md')
  );

  const buckets = {
    docs: [] as DocItem[],
    components: [] as DocItem[],
    biz: [] as DocItem[],
    charts: [] as DocItem[],
  };

  for (const file of englishDocs) {
    try {
      processMarkdownFile(file, siteDir, buckets);
    } catch (error) {
      api.logger.warn(`Error processing ${file}:`, error);
    }
  }

  const sort = (a: DocItem, b: DocItem) => a.title.localeCompare(b.title);
  buckets.docs.sort(sort);
  buckets.components.sort(sort);
  buckets.biz.sort(sort);
  buckets.charts.sort(sort);

  const allComponents = [...buckets.components, ...buckets.biz, ...buckets.charts];

  const fullContent = [
    '# OceanBase Design Documentation',
    '',
    `> ${allComponents.length} component docs aggregated`,
    '',
    ...allComponents.flatMap(item => [
      `## ${item.title}`,
      '',
      `Source: ${item.url}`,
      '',
      item.content || '',
      '',
      '---',
      '',
    ]),
  ].join('\n');

  const llmsNav = [
    '# OceanBase Design',
    '',
    'Enterprise React design system extending Ant Design for OceanBase products.',
    '',
    '## Agent entry',
    '',
    '- [For Agents](./docs/react/for-agents.md)',
    '- [design.md guide](./docs/react/design-md.md)',
    '- [design.md (root)](./design.md)',
    '- [LLMs.txt guide](./docs/react/llms.md)',
    '- [MCP Server](./docs/react/mcp.md)',
    '- [CLI](./docs/react/cli.md)',
    '',
    '## More for agents',
    '',
    '- [Agent Skills](./docs/design/design-skills.md)',
    '- [Migrate guide](./docs/react/migrate.md)',
    '',
    '## LLM resources',
    '',
    '- [Full Documentation](./llms-full.txt)',
    '- [OB Constraints](./llms-ob-constraints.txt)',
    '- [Codemod](./llms-codemod.txt)',
    '',
    '## Docs',
    '',
    ...buckets.docs.map(({ title, url }) => `- [${title}](${url})`),
    '',
    '## Design Components',
    '',
    ...buckets.components.map(({ title, url }) => `- [${title}](${url})`),
    '',
    '## UI Components',
    '',
    ...buckets.biz.map(({ title, url }) => `- [${title}](${url})`),
    '',
    '## Charts',
    '',
    ...buckets.charts.map(({ title, url }) => `- [${title}](${url})`),
    '',
  ].join('\n');

  const obConstraints = generateObConstraints(root);
  const codemodLlms = generateCodemodLlms(root);

  fs.writeFileSync(path.join(siteDir, 'llms.txt'), llmsNav);
  fs.writeFileSync(path.join(siteDir, 'llms-full.txt'), fullContent);
  fs.writeFileSync(path.join(siteDir, 'llms-ob-constraints.txt'), obConstraints);
  fs.writeFileSync(path.join(siteDir, 'llms-codemod.txt'), codemodLlms);

  try {
    execSync('node scripts/generate-design-md.mjs', { cwd: root, stdio: 'pipe' });
  } catch (error) {
    api.logger.warn('generate-design-md failed during site build:', error);
  }

  const designMd = path.join(root, 'public/design.md');
  if (fs.existsSync(designMd)) {
    fs.copyFileSync(designMd, path.join(siteDir, 'design.md'));
  }

  api.logger.event(
    `Generated llms.txt, llms-full.txt (${allComponents.length} components), llms-ob-constraints.txt, llms-codemod.txt`
  );
}

export default async function llmsPlugin(api: IApi) {
  api.modifyExportHTMLFiles(async files => {
    await generateLLms(api);
    return files;
  });
}
