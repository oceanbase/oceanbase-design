---
title: Migration Guide
order: 12
group: General
---

CLI and codemod guide for migrating from antd, obui, techui, etc. to OceanBase Design. Agent setup: [For Agents](/docs/react/for-agents).

## ob-design migrate (recommended)

```bash
ob-design migrate ./src
ob-design migrate ./src --dry
```

Without global install: `npx @oceanbase/design-cli migrate ./src`

Internally calls `@oceanbase/codemod` and writes `migration-report.json` at the project root.

## @oceanbase/codemod

```bash
npx @oceanbase/codemod@^1.0.0-alpha.0 ./src
```

### Common transformers

| Transformer | Description |
| --- | --- |
| antd-to-oceanbase-design | antd → @oceanbase/design |
| techui-and-pro-components-to-oceanbase-ui | pro-components → @oceanbase/ui |
| obutil-to-oceanbase-util | obutil → @oceanbase/util |
| style-to-token | Inline styles → `obToken` (default; keeps `theme.useToken()` with antd alias) |
| less-to-cssvar / sass-to-cssvar | Less/Sass → `var(--ob-*)` (default pipeline, keeps `.less`) |
| token-to-obtoken | Explicit: `token.xxx` / `var(--ant-*)` → `obToken` / `var(--ob-*)` |

Common flags: `--token-target=ob|antd` (default ob), `--skip-install` (transform only), `--force` (skip git check).

Run specific transformers only:

```bash
npx @oceanbase/codemod@^1.0.0-alpha.0 . --transformer=antd-to-oceanbase-design
```

## Post-migration checklist

1. Root `ConfigProvider` from `@oceanbase/design`
2. Icons from `@oceanbase/icons`
3. Filters via `Filter.*`
4. `ob-design lint ./src` static check
5. `ob-design doctor` dependency and health check

See Skill [codemod notes](https://github.com/oceanbase/oceanbase-design/blob/master/skills/oceanbase-design/references/codemod.md) and [For Agents](/docs/react/for-agents).
