---
title: design.md
order: 1
group:
  title: AI
  order: 0
---

This guide describes OceanBase Design's `design.md` for AI design and coding tools.

## What is design.md?

<a href="/design.md" target="_blank" rel="noopener noreferrer">design.md</a> is a design-language file for AI design tools, following the [google-labs-code/design.md](https://github.com/google-labs-code/design.md) spec.

- **Baseline**: antd visual language (color hierarchy, typography, spacing, component patterns)
- **OB additions**: brand color `#0D6CF2`, `obToken` / `var(--ob-*)`, `Filter.*`, `innerBordered`, package routing, etc.

## Read online

AI tools can fetch:

```text
https://design.oceanbase.com/design.md
```

Example prompt for AI design tools:

```text
Read /design.md and generate UI following OceanBase Design (Ant Design heritage). Use @oceanbase/design for component code; never import from 'antd'.
```

## Via CLI

```bash
ob-design design.md
ob-design design.md --format json
```

Generate in-repo before build: `pnpm run generate:design-md` (merges antd baseline + OB overlay into `public/design.md`).

## Contents

- antd default Light theme colors, type scale, radius, spacing, shadows, and component visuals
- OB brand color and `ConfigProvider` / `obToken` theme notes
- OB conventions: Filter, Card+Table, package selection
- Agent tooling entry points (`ob_info`, `ob_constraint`)

## Related docs

- [For Agents](/docs/react/for-agents)
- [LLMs.txt](/docs/react/llms)
- [MCP Server](/docs/react/mcp)
