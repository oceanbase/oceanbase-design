#!/usr/bin/env node
/**
 * @input @ant-design/cli design.md (v6 baseline), OB overlay
 * @output public/design.md — site root + ob-design design.md
 */
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outPath = join(root, 'public/design.md');

const OB_OVERLAY = `
## OceanBase Design overrides

OceanBase Design extends **Ant Design v5** (\`@oceanbase/design\`). The YAML above follows [google-labs-code/design.md](https://github.com/google-labs-code/design.md) and inherits antd visual language; apply the rules below when generating OceanBase product UI.

### Brand & theme

- Root: \`ConfigProvider\` from \`@oceanbase/design\`
- Tokens: \`obToken\` or \`var(--ob-*)\` — not hardcoded hex/px
- Primary brand: \`#0D6CF2\` (replaces antd default \`#1677FF\` for OB surfaces)
- Aliyun: \`theme={{ isAliyun: true }}\` · Dark: \`theme={{ isDark: true }}\` · Compact: \`theme={{ isCompact: true }}\`

### Packages

| Need | Package |
|------|---------|
| Base components, Filter, Table | \`@oceanbase/design\` |
| Layout, ProTable, LightFilter | \`@oceanbase/ui\` |
| Icons | \`@oceanbase/icons\` |
| Charts | \`@oceanbase/charts\` |

Never \`from 'antd'\` or \`@ant-design/icons\`.

### Component conventions

| Scenario | OceanBase approach |
|----------|-------------------|
| List filter bar | \`Filter.*\` / \`Filter.ResponsiveGroup\`, not bare \`Select\` |
| Table inside zero-padding Card | \`Table innerBordered\` |
| Data list with \`request\` / built-in search | \`@oceanbase/ui\` \`ProTable\` only then |

### Agent toolchain

- Design language: \`https://design.oceanbase.com/design.md\`
- API: \`ob-design info\` / \`ob_info\` (\`@oceanbase/design-cli mcp\`)
- Constraints: \`ob-design constraint --dense\`
- Guide: \`https://design.oceanbase.com/docs/react/design-md\`
`;

function fetchAntdDesignMd() {
  try {
    return execFileSync('npx', ['-y', '@ant-design/cli', 'design.md', '--version', '6'], {
      encoding: 'utf8',
      cwd: root,
      timeout: 120000,
      stdio: ['ignore', 'pipe', 'pipe'],
    });
  } catch (e) {
    console.warn('generate-design-md: antd design.md unavailable —', e.message?.slice(0, 120));
    return null;
  }
}

function patchForOb(content) {
  return content
    .replace(/^name: Ant Design/m, 'name: OceanBase Design')
    .replace(
      /^description: .*/m,
      "description: Enterprise React design system extending Ant Design for OceanBase products — inherits antd visual language with OB brand (#0D6CF2) and component conventions.",
    )
    .replace(/^(\s+primary: )'#[0-9A-Fa-f]{6}'/m, "$1'#0D6CF2'");
}

let body = fetchAntdDesignMd();
if (!body) {
  body = `---
version: alpha
name: OceanBase Design
description: Enterprise React design system extending Ant Design for OceanBase products
colors:
  primary: '#0D6CF2'
---

Inherits [Ant Design design.md](https://ant.design/design.md). Regenerate with network access to merge full antd baseline.
`;
} else {
  body = patchForOb(body);
}

if (!body.includes('## OceanBase Design overrides')) {
  body = `${body.trimEnd()}\n${OB_OVERLAY}`;
}

writeFileSync(outPath, body);
console.log(`generate:design-md wrote ${outPath} (${body.length} bytes)`);
