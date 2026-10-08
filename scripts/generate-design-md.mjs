#!/usr/bin/env node
/**
 * @input @ant-design/cli design.md (v6 baseline) or https://ant.design/design.md, OB overlay
 * @output public/design.md — site root + ob-design design.md
 *
 * Prefer bundled/local @ant-design/cli (after pnpm install). On total fetch failure,
 * keep the committed public/design.md instead of overwriting with a stub.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { resolveAntdCliInvocation } from '../packages/cli/src/delegate/resolve-antd-cli.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outPath = join(root, 'public/design.md');

const STUB_MARKER = 'Regenerate with network access to merge full antd baseline';

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

const STUB_BODY = `---
version: alpha
name: OceanBase Design
description: Enterprise React design system extending Ant Design for OceanBase products
colors:
  primary: '#0D6CF2'
---

Inherits [Ant Design design.md](https://ant.design/design.md). ${STUB_MARKER}.
`;

function isUsableDesignMd(content) {
  return Boolean(
    content &&
      !content.includes(STUB_MARKER) &&
      content.includes('name: OceanBase Design') &&
      content.length > 4000,
  );
}

function fetchAntdDesignMdViaCli() {
  try {
    const inv = resolveAntdCliInvocation(root);
    const out = execFileSync(inv.command, [...inv.args, 'design.md', '--version', '6'], {
      encoding: 'utf8',
      cwd: root,
      timeout: 120000,
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    if (out?.includes('name: Ant Design') || out?.includes('name: OceanBase Design')) {
      console.log(`generate-design-md: fetched via ${inv.via} (${inv.label})`);
      return out;
    }
    console.warn('generate-design-md: CLI returned unexpected content');
    return null;
  } catch (e) {
    const detail = [e.stderr, e.message].filter(Boolean).join(' | ').slice(0, 200);
    console.warn('generate-design-md: antd CLI unavailable —', detail);
    return null;
  }
}

async function fetchAntdDesignMdViaHttp() {
  try {
    const res = await fetch('https://ant.design/design.md', {
      headers: { Accept: 'text/markdown,text/plain,*/*' },
      signal: AbortSignal.timeout(30000),
    });
    if (!res.ok) {
      console.warn(`generate-design-md: HTTP ${res.status} from ant.design/design.md`);
      return null;
    }
    const text = await res.text();
    if (!text.includes('name: Ant Design')) {
      console.warn('generate-design-md: HTTP body missing Ant Design frontmatter');
      return null;
    }
    console.log('generate-design-md: fetched via https://ant.design/design.md');
    return text;
  } catch (e) {
    console.warn('generate-design-md: HTTP fetch unavailable —', e.message?.slice(0, 120));
    return null;
  }
}

function readExistingFallback() {
  if (!existsSync(outPath)) return null;
  const existing = readFileSync(outPath, 'utf8');
  if (!isUsableDesignMd(existing)) return null;
  console.warn(
    `generate-design-md: keeping existing ${outPath} (${existing.length} bytes) after fetch failure`,
  );
  return existing;
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

function withOverlay(body) {
  if (body.includes('## OceanBase Design overrides')) return body;
  return `${body.trimEnd()}\n${OB_OVERLAY}`;
}

async function main() {
  let body = fetchAntdDesignMdViaCli();
  if (!body) {
    body = await fetchAntdDesignMdViaHttp();
  }

  let source = 'fresh';
  if (body) {
    body = withOverlay(patchForOb(body));
  } else {
    const existing = readExistingFallback();
    if (existing) {
      body = withOverlay(existing);
      source = 'existing';
    } else {
      body = withOverlay(STUB_BODY);
      source = 'stub';
      console.warn('generate-design-md: writing stub — no CLI/HTTP/existing baseline available');
    }
  }

  writeFileSync(outPath, body);
  console.log(`generate:design-md wrote ${outPath} (${body.length} bytes, source=${source})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
