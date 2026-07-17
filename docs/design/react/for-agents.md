---
title: For Agents
order: 0
group:
  title: AI
  order: 0
---

本页提供**可复制 Prompt**，让任意 AI 编程 Agent 高效使用 OceanBase Design。业务项目**只配置单体 `ob-design mcp`**，不要直接配置 antd MCP 编写 OB 代码。

## Copy this prompt

复制到 Agent 对话或自动化 Runner：

```text
你正在开发使用 @oceanbase/design 的 React 项目。组件 API 与训练数据可能不一致，写代码前请先阅读：
/docs/react/for-agents.md
https://github.com/oceanbase/oceanbase-design/blob/master/skills/oceanbase-design-usage/SKILL.md

规则：
1. 只使用 ob-design mcp（ob_info、ob_doc、ob_constraint、ob_route 等），禁止 antd MCP / antd_info。
2. 组件与图标从 @oceanbase/design、@oceanbase/ui、@oceanbase/icons 引入，禁止 from 'antd'。OB 1.x 基于 antd v5，勿按 antd v6 API 生成代码。
3. 列表筛选用 Filter.* 或 LightFilter，不要用裸 Select 充当筛选条。
4. Card bodyStyle padding:0 内嵌 Table 时必须 innerBordered。
5. 根节点包裹 ConfigProvider（@oceanbase/design）。

若可安装 Skill：
npx openskills install oceanbase/oceanbase-design/skills/oceanbase-design-usage

开始任务前：ob-design route "<页面意图>"，再 ob_info 相关组件。

ob_doc 仅含 OB 文档（用法、约束、OB API）；结构化 API 用 ob_info。若需 antd 完整说明，读 ob_doc 内 antd 链接或 shell 执行 antd doc <Name>（勿配置 antd MCP）。
```

> Prompt 中的 `/docs/...`、`/design.md` 等为**站点根相对路径**。Agent 抓取时请拼接当前 origin（本地 `http://localhost:8000`，生产 `https://design.oceanbase.com`）。

## What the agent gets

### CLI — 离线知识与项目工具

`@oceanbase/design-cli` 提供 metadata、约束、模板与迁移封装；组件 API 以 `ob-design info` / `ob_info` 为准（按 diffLevel merge）。

```bash
npx @oceanbase/design-cli list
ob-design info Table --dense
ob-design doc Filter
ob-design demo Table basic
ob-design route "用户列表带筛选"
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

内置页面模板：`list-filter-table`、`detail-descriptions`、`app-basic-layout`、`form-in-modal`。

完整参考：[CLI](/docs/react/cli)

### design.md — 设计语言（antd 基线 + OB 增量）

[design.md](/docs/react/design-md) 在 [Ant Design design.md](https://ant.design/design.md) 上融合 OB 品牌色与组件约定，供 AI 设计工具使用。

在线读取：<a href="/design.md" target="_blank" rel="noopener noreferrer">design.md</a> · CLI：`ob-design design.md`

完整参考：[design.md 指南](/docs/react/design-md)

### MCP Server — IDE 集成

CLI 以 `ob-design mcp` 提供 **9 个工具**与 **2 个 Prompt**，供 Cursor、Claude Desktop 等调用。

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

完整参考：[MCP Server](/docs/react/mcp)

### Skill — 叙事与组合范式

`oceanbase-design-usage` Skill 说明**为何**这样用（Filter vs LightFilter、Card+Table、迁移核对），不重复维护 props 列表。

```bash
npx openskills install oceanbase/oceanbase-design/skills/oceanbase-design-usage
```

完整参考：[Agent Skills](/docs/design/design-skills)

### LLMs.txt — 结构化文档

将完整文档灌入 AI 上下文（适合不支持 MCP 的工具）：

| 文件 | 说明 |
| --- | --- |
| <a href="/llms.txt" target="_blank" rel="noopener noreferrer">llms.txt</a> | 导航索引 |
| <a href="/design.md" target="_blank" rel="noopener noreferrer">design.md</a> | 设计语言（antd + OB） |
| <a href="/llms-full.txt" target="_blank" rel="noopener noreferrer">llms-full.txt</a> | 全量组件文档 |
| <a href="/llms-ob-constraints.txt" target="_blank" rel="noopener noreferrer">llms-ob-constraints.txt</a> | 约束摘要 |
| <a href="/llms-codemod.txt" target="_blank" rel="noopener noreferrer">llms-codemod.txt</a> | 迁移要点 |

完整参考：[LLMs.txt](/docs/react/llms)

## 一键接入

```bash
npx @oceanbase/design-cli setup --client cursor   # MCP
npx @oceanbase/design-cli setup --client agents   # AGENTS.md
npx openskills install oceanbase/oceanbase-design/skills/oceanbase-design-usage
```

## 禁止事项

- **不要**配置 `@ant-design/cli mcp` 或 `antd_info`
- **不要**从 `antd` / `@ant-design/icons` import
- **不要**用 ProTable 替代普通 Table（除非需要 `request` / 内置搜索）

## 架构说明

| 层         | 载体                                      | 职责                      |
| ---------- | ----------------------------------------- | ------------------------- |
| 叙事层     | Skill + ASSEMBLY                          | 范式、反模式、Code Review |
| 机器真相层 | `@oceanbase/design-cli` + `ob-design mcp` | API、demo、路由、lint     |
| 约束层     | `metadata/constraints.yaml`               | 机器可读规则              |

详见 [AI 设计原则](/docs/design/design-ai-principles)。

## 相关文档

侧栏 **AI** 分组（与 Ant Design 对齐）：

1. [design.md](/docs/react/design-md)
2. [LLMs.txt](/docs/react/llms)
3. [MCP Server](/docs/react/mcp)
4. [CLI](/docs/react/cli)

扩展阅读：[Agent Skills](/docs/design/design-skills) · [AI 设计原则](/docs/design/design-ai-principles) · [迁移指南](/docs/react/migrate)
