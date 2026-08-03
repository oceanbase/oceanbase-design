import { readFileSync, existsSync, statSync } from 'node:fs';
import { extname } from 'node:path';
import {
  scanCssVarUsage,
  walkFiles,
  STYLE_EXTENSIONS,
  JS_EXTENSIONS,
} from '../lib/css-tokens.mjs';

const CODE_RULES = [
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

function lintFile(file, { includeCode, includeStyles }) {
  const issues = [];
  const content = readFileSync(file, 'utf8');
  const ext = extname(file);

  if (includeCode && JS_EXTENSIONS.has(ext)) {
    for (const rule of CODE_RULES) {
      for (const issue of rule.test(content, file)) {
        issues.push({ ...issue, ruleId: rule.id });
      }
    }
    issues.push(...scanCssVarUsage(content, file));
  } else if (includeStyles && STYLE_EXTENSIONS.has(ext)) {
    issues.push(...scanCssVarUsage(content, file));
  }

  return issues;
}

function collectFiles(target, { includeCode, includeStyles }) {
  const extensions = new Set();
  if (includeCode) {
    for (const e of JS_EXTENSIONS) extensions.add(e);
  }
  if (includeStyles) {
    for (const e of STYLE_EXTENSIONS) extensions.add(e);
  }
  const st = statSync(target);
  if (st.isDirectory()) {
    return walkFiles(target, extensions);
  }
  return [target];
}

function formatHumanIssue(issue) {
  const loc = issue.line ? `${issue.file}:${issue.line}` : issue.file;
  return `${loc}: ${issue.message}`;
}

export function lintCommand(target, { json, codeOnly, stylesOnly } = {}) {
  if (!existsSync(target)) {
    console.error(`Target not found: ${target}`);
    process.exitCode = 1;
    return;
  }

  const includeCode = !stylesOnly;
  const includeStyles = !codeOnly;
  const files = collectFiles(target, { includeCode, includeStyles });
  const issues = [];

  for (const file of files) {
    issues.push(...lintFile(file, { includeCode, includeStyles }));
  }

  if (json) {
    console.log(JSON.stringify({ issues, count: issues.length }, null, 2));
  } else {
    for (const i of issues) {
      console.log(formatHumanIssue(i));
    }
    if (!issues.length) console.log('No issues found.');
  }

  process.exitCode = issues.length ? 1 : 0;
}
