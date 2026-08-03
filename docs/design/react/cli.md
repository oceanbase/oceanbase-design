---
title: CLI
order: 5
group:
  title: AI
  order: 0
---

`@oceanbase/design-cli` is the **unified Agent entry** for OceanBase Design: CLI + MCP server (`ob-design mcp`). For OB business code, configure only this CLI's MCP — not `@ant-design/cli mcp`.

> Narrative conventions: [Agent Skills](/docs/design/design-skills). Setup flow: [For Agents](/docs/react/for-agents).

## Install

```bash
npm install -g @oceanbase/design-cli
```

Requires Node.js `>=18`. Also: `pnpm add -g @oceanbase/design-cli` or `bun add -g @oceanbase/design-cli`.

Other options:

```bash
# One-off without global install
npx @oceanbase/design-cli <command>

# Project devDependency (CI / pinned version)
pnpm add -D @oceanbase/design-cli
pnpm exec ob-design list
```

Binary name: `ob-design` (mirrors `@ant-design/cli`'s `antd`; avoids clashing with npm global `ob`).

## Quick start

```bash
ob-design list                           # all components and diffLevel
ob-design info Table                     # props (OB-merged)
ob-design doc Filter                     # OB markdown docs
ob-design demo Table basic               # runnable demo source
ob-design route "user list with filters" # page intent → components
ob-design constraint --dense             # design constraints
ob-design token                          # obToken / CSS variables (summary)
ob-design token --json                   # full --ob-* list + migration hints
ob-design token --check --ob-color-text-description
ob-design lint ./src                     # JS rules + CSS token check (default)
ob-design lint ./src --code-only         # JS rules only
ob-design lint ./src --styles            # CSS token rules only
ob-design migrate --rule ob-css-tokens ./src
ob-design design.md                      # design language (antd + OB)
ob-design doctor                         # project health check
ob-design migrate ./src                  # wraps @oceanbase/codemod (default rules)
ob-design template list-filter-table     # page template
ob-design mcp                            # start MCP server
ob-design setup --client cursor          # write MCP / AGENTS.md
```

## Commands

| Command | MCP tool | Purpose |
| --- | --- | --- |
| `ob-design list` | — | Registered components and diffLevel |
| `ob-design info <Name>` | `ob_info` | **Component API truth** (OB extensions merged) |
| `ob-design doc <Name>` | `ob_doc` | OB docs (usage/constraints; no antd appendix) |
| `ob-design demo <Name> [id]` | `ob_demo` | Demo source (OB package imports) |
| `ob-design route "<intent>"` | `ob_route` | Page intent → recommended components |
| `ob-design constraint` | `ob_constraint` | Design constraints (ASSEMBLY) |
| `ob-design token` | `ob_token` | Runtime `--ob-*` list, categories, hints, `check` |
| `ob-design design.md` | — | Design language |
| `ob-design search <query>` | `ob_search` | Full-text metadata and docs search |
| `ob-design lint <path>` | `ob_lint` | JS conventions + CSS token check (default) |
| `ob-design doctor` | `ob_doctor` | Project health (MCP/Skill/deps) |
| `ob-design setup` | — | Write MCP config + generate `AGENTS.md` |
| `ob-design migrate <path>` | — | Wraps `@oceanbase/codemod` (`--rule ob-css-tokens`) |
| `ob-design template <name>` | — | Page templates (see below) |
| `ob-design mcp` | — | Start MCP server (stdio) |

Common flags: `--dense` (token-friendly output), `--json` (machine-readable).

### What to use when coding

```
Write OB component code
  ob_route "<intent>"     → pick components
  ob_info <Name>        → props / API (primary)
  ob_doc <Name>         → usage, constraints, OB deltas
  ob_demo <Name> [id]   → runnable example
  ob_constraint         → composition/layout rules (when unsure)

Need full antd long docs?
  → Follow ant.design links in ob_doc (antd **v5**)
  → Or terminal: antd --version 5 doc <Name> (do not configure antd MCP)
```

## ob_info and @ant-design/cli

`@oceanbase/design-cli` **bundles** `@ant-design/cli` for internal antd **v5** API merge in `ob_info`. Business projects do **not** need a separate antd MCP.

Resolution order (ob_info only): **PATH `antd` → project `node_modules` → design-cli bundle → `npx`**.

## Page templates

| Name                  | Scenario              |
| --------------------- | --------------------- |
| `list-filter-table`   | List + Filter + Table |
| `detail-descriptions` | Detail + Descriptions |
| `app-basic-layout`    | BasicLayout app shell |
| `form-in-modal`       | Form inside Modal     |

```bash
ob-design template list-filter-table
ob-design template list-filter-table --skeleton
```

## One-shot setup

```bash
npm install -g @oceanbase/design-cli
ob-design setup --client cursor
ob-design setup --client agents
npx skills add oceanbase/oceanbase-design

# or without global install
npx @oceanbase/design-cli setup --client cursor
npx @oceanbase/design-cli setup --client agents
```

## MCP config

After global install:

```json
{
  "mcpServers": {
    "oceanbase-design": {
      "command": "ob-design",
      "args": ["mcp"]
    }
  }
}
```

Without global install:

```json
{
  "mcpServers": {
    "oceanbase-design": {
      "command": "npx",
      "args": ["-y", "@oceanbase/design-cli", "mcp"]
    }
  }
}
```

**Do not** configure `@ant-design/cli mcp`. Ant Design CLI is only an internal delegate for `ob_info`.

## ob_info and diffLevel

Component metadata lives in `metadata/components/*.json`. diffLevel controls API merge:

| Level | Meaning                  | ob_info behavior                         |
| ----- | ------------------------ | ---------------------------------------- |
| A     | OB-only component        | OB metadata; optional antd merge         |
| B     | Significant OB extension | OB `addedProps` + antd base merge        |
| C     | Thin wrapper             | Mostly antd, OB deltas noted             |
| D     | OB-only / passthrough    | OB metadata only (`delegateAntd: false`) |

## Recommended agent workflow

```
ob-design route "<page intent>"
  → ob_info <component> (API)
  → ob_doc <component> (usage/constraints, optional)
  → ob_constraint --dense (when unsure)
  → ob-design token --dense (before custom styles)
  → ob-design template <name> (optional starting point)
  → generate code
  → ob-design lint ./src
```

## Division with @oceanbase/codemod

| Package                 | Role                                                        |
| ----------------------- | ----------------------------------------------------------- |
| `@oceanbase/design-cli` | Knowledge query, MCP, constraints, templates, project setup |
| `@oceanbase/codemod`    | AST-level migration (antd → design, etc.)                   |

For migration: `ob-design migrate` calls codemod; for daily dev use `ob-design info` for APIs.

## Related docs

- [For Agents](/docs/react/for-agents)
- [LLMs.txt](/docs/react/llms)
- [MCP Server](/docs/react/mcp)
- [Agent Skills](/docs/design/design-skills)
- [design.md](/docs/react/design-md)
- [Migration guide](/docs/react/migrate)
