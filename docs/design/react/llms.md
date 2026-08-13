---
title: LLMs.txt
order: 2
group:
  title: AI
  order: 0
---

We support [LLMs.txt](https://llmstxt.org/) to expose OceanBase Design documentation as structured plain text for LLMs and AI coding tools — component library, OB constraint deltas, and migration notes.

> Unified Agent entry: [For Agents](/docs/react/for-agents). MCP: [MCP Server](/docs/react/mcp).

## Files

After site build, these files are served at the **site root**:

| File | Description |
| --- | --- |
| <a href="/llms.txt" target="_blank" rel="noopener noreferrer">llms.txt</a> | Navigation index: docs, components, Agent entry links |
| <a href="/design.md" target="_blank" rel="noopener noreferrer">design.md</a> | Design language |
| <a href="/llms-full.txt" target="_blank" rel="noopener noreferrer">llms-full.txt</a> | Aggregated component and doc Markdown |
| <a href="/llms-ob-constraints.txt" target="_blank" rel="noopener noreferrer">llms-ob-constraints.txt</a> | `metadata/constraints.yaml` + diffLevel summary |
| <a href="/llms-codemod.txt" target="_blank" rel="noopener noreferrer">llms-codemod.txt</a> | Migration and `@oceanbase/codemod` notes |

Per-component docs are also available, e.g. <a href="/components/button.md" target="_blank" rel="noopener noreferrer">/components/button.md</a>.

## Use in AI tools

### Cursor

- Add site `https://design.oceanbase.com/llms.txt` via **@Docs**, or add to `.cursor/rules`:

```text
Before writing OceanBase Design code, read https://design.oceanbase.com/docs/react/for-agents.md and /llms-ob-constraints.txt (prefix with site origin). Component API: ob-design mcp ob_info only; never import from 'antd'.
```

Also configure [MCP Server](/docs/react/mcp) (`ob-design mcp`).

### Claude Code / Claude Desktop

```bash
npm install -g @oceanbase/design-cli
ob-design setup --client claude
```

Without global install: `npx @oceanbase/design-cli setup --client claude`

Or paste the prompt from [For Agents](/docs/react/for-agents) at the start of a chat.

### Minimum context without MCP

Give the agent these URLs (priority order):

1. `https://design.oceanbase.com/docs/react/for-agents.md`
2. `https://design.oceanbase.com/llms-ob-constraints.txt`
3. `https://design.oceanbase.com/llms-full.txt` (when context allows)

And install the Skill:

```bash
npx skills add oceanbase/oceanbase-design
```

## MCP vs LLMs.txt

| Approach          | When to use                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| **LLMs.txt**      | No MCP support; need one-shot large doc context                         |
| **ob-design mcp** | Cursor / Claude with MCP; **component API via `ob_info`** (recommended) |

Use both: MCP for API/constraints, LLMs for background knowledge.

## Related docs

- [For Agents](/docs/react/for-agents)
- [MCP Server](/docs/react/mcp)
- [CLI reference](/docs/react/cli)
- [Agent Skills](/docs/design/design-skills)
- [design.md](/docs/react/design-md)
