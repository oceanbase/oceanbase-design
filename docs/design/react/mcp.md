---
title: MCP Server
order: 4
group:
  title: AI
  order: 0
---

With [Model Context Protocol (MCP)](https://modelcontextprotocol.io/), AI assistants can query OceanBase Design component APIs, constraints, demos, and page composition suggestions in real time.

For OB business code, configure **only** the unified `ob-design mcp` (`@oceanbase/design-cli`). **Do not** configure `@ant-design/cli mcp` or call `antd_info` — Ant Design CLI is an internal delegate for `ob_info` only. See the [CLI matrix](/docs/react/cli#命令与-antd-依赖矩阵).

## Quick setup

After global install (recommended):

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

One-click setup for Cursor:

```bash
npm install -g @oceanbase/design-cli
ob-design setup --client cursor
```

Without global install: `npx @oceanbase/design-cli setup --client cursor`

Local start (debugging):

```bash
ob-design mcp
```

## MCP tools (9)

| Tool            | Description                                                                  |
| --------------- | ---------------------------------------------------------------------------- |
| `ob_info`       | **Single source of component API** (OB-merged props by diffLevel)            |
| `ob_doc`        | OB component docs (usage/constraints; full antd via `ob_info` or antd links) |
| `ob_demo`       | Demo source (imports rewritten to `@oceanbase/design`, etc.)                 |
| `ob_route`      | Page intent → recommended component set                                      |
| `ob_constraint` | ASSEMBLY / `constraints.yaml` design rules                                   |
| `ob_token`      | obToken and CSS variables                                                    |
| `ob_search`     | Full-text search over metadata and docs                                      |
| `ob_lint`       | Static convention checks (antd imports, icon packages, etc.)                 |
| `ob_doctor`     | Project health (OB deps, antd CLI availability for ob_info)                  |

## MCP prompts (2)

| Prompt         | Description                                         |
| -------------- | --------------------------------------------------- |
| `ob-expert`    | OB expert system prompt with hard rules             |
| `ob-list-page` | List page scaffold (Filter + Table + PageContainer) |

## Recommended workflow

```
ob_route "<page intent>"
  → ob_info <Component>
  → ob_constraint (when unsure, prefer --dense)
  → generate code
  → ob_lint ./src
```

## Without MCP

If your IDE does not support MCP, use [LLMs.txt](/docs/react/llms) to load docs into context and install the `oceanbase-design` Skill. **Dynamic API queries still work best with MCP.**

## Discovery protocol

Machine-readable cards (after build):

- `/.well-known/mcp/server-card.json`
- `/.well-known/agent-card.json`

## Related docs

- [For Agents](/docs/react/for-agents)
- [LLMs.txt](/docs/react/llms)
- [CLI reference](/docs/react/cli)
- [Agent Skills](/docs/design/design-skills)
- [Migration guide](/docs/react/migrate)
