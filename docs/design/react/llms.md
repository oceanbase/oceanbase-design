---
title: LLMs.txt
order: 2
group:
  title: AI
  order: 0
---

我们支持 [LLMs.txt](https://llmstxt.org/)，将 OceanBase Design 文档以结构化纯文本提供给大语言模型与 AI 编程工具，便于理解组件库、OB 差异约束与迁移方式。

> 单体 Agent 入口见 [For Agents](/docs/react/for-agents)；MCP 见 [MCP Server](/docs/react/mcp)。

## 文件说明

站点构建后在**根路径**提供以下文件（根相对路径，本地开发与生产均可用）：

| 文件 | 说明 |
| --- | --- |
| <a href="/llms.txt" target="_blank" rel="noopener noreferrer">llms.txt</a> | 导航索引：文档、组件、Agent 入口链接 |
| <a href="/design.md" target="_blank" rel="noopener noreferrer">design.md</a> | 设计语言 |
| <a href="/llms-full.txt" target="_blank" rel="noopener noreferrer">llms-full.txt</a> | 全量组件与文档 Markdown 聚合 |
| <a href="/llms-ob-constraints.txt" target="_blank" rel="noopener noreferrer">llms-ob-constraints.txt</a> | `metadata/constraints.yaml` + diffLevel 摘要 |
| <a href="/llms-codemod.txt" target="_blank" rel="noopener noreferrer">llms-codemod.txt</a> | 迁移与 `@oceanbase/codemod` 要点 |

单组件文档亦可按站点路径访问，例如 <a href="/components/button.md" target="_blank" rel="noopener noreferrer">/components/button.md</a>。

## 在 AI 工具中使用

### Cursor

- 使用 **@Docs** 添加站点的 `https://design.oceanbase.com/llms.txt`，或在 `.cursor/rules` 中加入：

```text
编写 OceanBase Design 代码前，阅读 https://design.oceanbase.com/docs/react/for-agents.md 与 /llms-ob-constraints.txt（前缀当前站点 origin）。组件 API 以 ob-design mcp 的 ob_info 为准，禁止 from 'antd'。
```

推荐同时配置 [MCP Server](/docs/react/mcp)（`ob-design mcp`）。

### Claude Code / Claude Desktop

```bash
npm install -g @oceanbase/design-cli
ob-design setup --client claude
```

未全局安装时：`npx @oceanbase/design-cli setup --client claude`

或在对话开头粘贴 [For Agents](/docs/react/for-agents) 中的 Prompt。

### 无 MCP 时的最小上下文

将以下路径交给 Agent 阅读（按优先级）：

1. `https://design.oceanbase.com/docs/react/for-agents.md`
2. `https://design.oceanbase.com/llms-ob-constraints.txt`
3. `https://design.oceanbase.com/llms-full.txt`（上下文充足时）

并安装 Skill：

```bash
npx openskills install oceanbase/oceanbase-design/skills/oceanbase-design-usage
```

## 与 MCP 的关系

| 方式              | 适用                                                               |
| ----------------- | ------------------------------------------------------------------ |
| **LLMs.txt**      | 工具不支持 MCP；需要一次性灌入大量文档                             |
| **ob-design mcp** | Cursor / Claude 等支持 MCP；**组件 API 以 `ob_info` 为准**（推荐） |

二者可并存：MCP 查 API 与约束，LLMs 作背景知识。

## 相关文档

- [For Agents](/docs/react/for-agents)
- [MCP Server](/docs/react/mcp)
- [CLI 参考](/docs/react/cli)
- [Agent Skills](/docs/design/design-skills)
- [design.md](/docs/react/design-md)
