---
title: For Agents
order: 0
group:
  title: AI
  order: 0
---

This page provides **copy-paste prompts** so any AI coding agent can use OceanBase Design efficiently. Coding rules and composition patterns live in the **Skill**; component APIs are defined by **ob-design mcp**.

## Copy this prompt

Paste into your agent chat or automation flow:

```text
You are building a React app with @oceanbase/design. Component APIs, conventions, and file layout may differ from your training data. Before writing code, read and follow:
https://design.oceanbase.com/docs/react/for-agents.md
https://raw.githubusercontent.com/oceanbase/oceanbase-design/master/skills/oceanbase-design/SKILL.md

Configure only ob-design mcp (@oceanbase/design-cli) for business projects. Do not configure antd MCP or call antd_info.

If you can install Skills:
npx skills add oceanbase/oceanbase-design
```

## What agents get

### CLI — offline knowledge and project tooling

`@oceanbase/design-cli` provides metadata, constraints, templates, and migration wrappers. Component APIs come from `ob-design info` / `ob_info` (merged by diffLevel).

```bash
npm install -g @oceanbase/design-cli   # recommended, same usage as antd CLI

ob-design list
ob-design info Table --dense
ob-design doc Filter
ob-design demo Table basic
ob-design route "user list with filters"
ob-design constraint --dense
ob-design token
ob-design design.md
ob-design search Filter
ob-design lint ./src
ob-design doctor
ob-design migrate ./src
ob-design template list-filter-table
ob-design setup --client cursor
ob-design mcp
```

Without a global install: `npx @oceanbase/design-cli <command>`.

Built-in page templates: `list-filter-table`, `detail-descriptions`, `app-basic-layout`, `form-in-modal`.

Full reference: [CLI](/docs/react/cli)

### design.md — design language

[design.md](/docs/react/design-md) extends [Ant Design design.md](https://ant.design/design.md) with OB brand color and component conventions for AI design tools.

Full reference: [design.md guide](/docs/react/design-md)

### MCP Server — IDE integration

The CLI exposes **9 tools** and **2 prompts** via `ob-design mcp` for Cursor, Claude Desktop, and similar tools.

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

Full reference: [MCP Server](/docs/react/mcp)

### Skill — narrative and composition patterns

The `oceanbase-design` Skill explains **why** to use patterns (Filter vs LightFilter, Card+Table, migration checks) without duplicating prop lists.

```bash
npx skills add oceanbase/oceanbase-design
```

Full reference: [Agent Skills](/docs/design/design-skills)

### LLMs.txt — structured docs

Load full documentation into AI context (for tools without MCP):

| File | Description |
| --- | --- |
| <a href="/llms.txt" target="_blank" rel="noopener noreferrer">llms.txt</a> | Navigation index |
| <a href="/design.md" target="_blank" rel="noopener noreferrer">design.md</a> | Design language (antd + OB) |
| <a href="/llms-full.txt" target="_blank" rel="noopener noreferrer">llms-full.txt</a> | Full component docs |
| <a href="/llms-ob-constraints.txt" target="_blank" rel="noopener noreferrer">llms-ob-constraints.txt</a> | Constraint summary |
| <a href="/llms-codemod.txt" target="_blank" rel="noopener noreferrer">llms-codemod.txt</a> | Migration notes |

Full reference: [LLMs.txt](/docs/react/llms)

## One-shot setup

```bash
npm install -g @oceanbase/design-cli   # bundles @ant-design/cli for ob_info merge
ob-design setup --client cursor   # MCP (Cursor)
ob-design setup --client claude    # MCP (Claude Desktop)
ob-design setup --client agents    # AGENTS.md
npx skills add oceanbase/oceanbase-design
```

Without global install, replace `ob-design` with `npx @oceanbase/design-cli`.

## Do not

- **Do not** configure `@ant-design/cli mcp` or `antd_info`
- **Do not** import from `antd` / `@ant-design/icons`
- **Do not** use ProTable instead of Table unless you need `request` / built-in search

## Architecture

| Layer         | Carrier                                   | Responsibility                       |
| ------------- | ----------------------------------------- | ------------------------------------ |
| Narrative     | Skill + ASSEMBLY                          | Patterns, anti-patterns, code review |
| Machine truth | `@oceanbase/design-cli` + `ob-design mcp` | API, demos, routing, lint            |
| Constraints   | `metadata/constraints.yaml`               | Machine-readable rules               |

## Related docs

Sidebar **AI** group (aligned with Ant Design):

1. [design.md](/docs/react/design-md)
2. [LLMs.txt](/docs/react/llms)
3. [Agent Skills](/docs/design/design-skills)
4. [MCP Server](/docs/react/mcp)
5. [CLI](/docs/react/cli)

See also: [Migration guide](/docs/react/migrate)
