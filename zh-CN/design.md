---
version: alpha
name: OceanBase Design
description: Enterprise React design system extending Ant Design for OceanBase products
colors:
  primary: '#0D6CF2'
---

Inherits [Ant Design design.md](https://ant.design/design.md). Regenerate with network access to merge full antd baseline.

## OceanBase Design overrides

OceanBase Design extends **Ant Design v5** (`@oceanbase/design`). The YAML above follows [google-labs-code/design.md](https://github.com/google-labs-code/design.md) and inherits antd visual language; apply the rules below when generating OceanBase product UI.

### Brand & theme

- Root: `ConfigProvider` from `@oceanbase/design`
- Tokens: `obToken` or `var(--ob-*)` — not hardcoded hex/px
- Primary brand: `#0D6CF2` (replaces antd default `#1677FF` for OB surfaces)
- Aliyun: `theme={{ isAliyun: true }}` · Dark: `theme={{ isDark: true }}` · Compact: `theme={{ isCompact: true }}`

### Packages

| Need | Package |
|------|---------|
| Base components, Filter, Table | `@oceanbase/design` |
| Layout, ProTable, LightFilter | `@oceanbase/ui` |
| Icons | `@oceanbase/icons` |
| Charts | `@oceanbase/charts` |

Never `from 'antd'` or `@ant-design/icons`.

### Component conventions

| Scenario | OceanBase approach |
|----------|-------------------|
| List filter bar | `Filter.*` / `Filter.ResponsiveGroup`, not bare `Select` |
| Table inside zero-padding Card | `Table innerBordered` |
| Data list with `request` / built-in search | `@oceanbase/ui` `ProTable` only then |

### Agent toolchain

- Design language: `https://design.oceanbase.com/design.md`
- API: `ob-design info` / `ob_info` (`@oceanbase/design-cli mcp`)
- Constraints: `ob-design constraint --dense`
- Guide: `https://design.oceanbase.com/docs/react/design-md`
