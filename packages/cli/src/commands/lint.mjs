import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const RULES = [
  {
    id: 'import-design-not-antd',
    test: (content, file) => {
      const issues = [];
      if (/from\s+['"]antd['"]/.test(content) || /from\s+['"]antd\//.test(content)) {
        issues.push({ file, message: "Import from 'antd' — use @oceanbase/design" });
      }
      if (/from\s+['"]@ant-design\/icons/.test(content)) {
        issues.push({ file, message: "Import from '@ant-design/icons' — use @oceanbase/icons" });
      }
      return issues;
    },
  },
  {
    id: 'card-table-inner-bordered',
    test: (content, file) => {
      if (
        /bodyStyle\s*=\s*\{\{[^}]*padding\s*:\s*0/.test(content) &&
        /<Table[\s>]/.test(content) &&
        !/innerBordered/.test(content)
      ) {
        return [{ file, message: 'Card padding:0 with Table may need innerBordered' }];
      }
      return [];
    },
  },
  {
    id: 'filter-not-select-for-bar',
    test: (content, file) => {
      if (/筛选|filter/i.test(file) && /<Select[\s>]/.test(content) && !/Filter/.test(content)) {
        return [{ file, message: 'Consider Filter.* instead of bare Select for filter bars' }];
      }
      return [];
    },
  },
  {
    id: 'table-over-protable',
    test: (content, file) => {
      if (/<ProTable[\s>]/.test(content) && !/request\s*=/.test(content)) {
        return [{ file, message: 'ProTable without request — prefer Table unless search needed' }];
      }
      return [];
    },
  },
];

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory() && entry !== 'node_modules') walk(p, files);
    else if (['.tsx', '.ts', '.jsx', '.js'].includes(extname(p))) files.push(p);
  }
  return files;
}

export function lintCommand(target, { json }) {
  const issues = [];
  const files = walk(target);

  for (const file of files) {
    const content = readFileSync(file, 'utf8');
    for (const rule of RULES) {
      issues.push(...rule.test(content, file));
    }
  }

  if (json) {
    console.log(JSON.stringify({ issues, count: issues.length }, null, 2));
  } else {
    for (const i of issues) {
      console.log(`${i.file}: ${i.message}`);
    }
    if (!issues.length) console.log('No issues found.');
  }

  process.exitCode = issues.length ? 1 : 0;
}
