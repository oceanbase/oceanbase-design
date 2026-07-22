# @oceanbase/design-cli

CLI and MCP for OceanBase Design — single programmatic entry for AI agents.

> Site docs: [CLI reference](https://design.oceanbase.com/docs/react/cli) · [For Agents](https://design.oceanbase.com/docs/react/for-agents)

## Package naming

| Name                     | Role                                  |
| ------------------------ | ------------------------------------- |
| **OceanBase Design CLI** | Product name (docs, `ob --help`)      |
| `@oceanbase/design-cli`  | npm package                           |
| `ob-design`              | Shell binary (`ob-design info Table`) |
| `oceanbase-design`       | MCP server key in IDE config          |

Same `@oceanbase/*` scope as `@oceanbase/design` and `@oceanbase/codemod`. **Not** the OceanBase Database ops CLI.

## Install

```bash
npm install -g @oceanbase/design-cli
```

Requires Node.js `>=18`. Also: `pnpm add -g @oceanbase/design-cli` or `bun add -g @oceanbase/design-cli`.

Without global install:

```bash
npx @oceanbase/design-cli <command>
pnpm add -D @oceanbase/design-cli && pnpm exec ob-design list
```

## Commands

| Command | Description |
| --- | --- |
| `ob-design list` | Registered components (diffLevel) |
| `ob-design info <Name>` | Merged OB API (`ob_info`) |
| `ob-design doc` / `ob-design demo` | Docs and demos (imports rewritten) |
| `ob-design route <intent>` | Page → components |
| `ob-design constraint` | ASSEMBLY constraints |
| `ob-design token` | obToken reference |
| `ob-design lint` / `ob-design doctor` | Conventions and health |
| `ob-design setup` | Write ob-design mcp + AGENTS.md (`@ant-design/cli` bundled) |
| `ob-design migrate` | `@oceanbase/codemod` wrapper |
| `ob-design template <name>` | Page templates |
| `ob-design mcp` | MCP server (stdio) |

## MCP

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

**Do not** configure `@ant-design/cli mcp`. Ant Design CLI is an internal delegate only.
