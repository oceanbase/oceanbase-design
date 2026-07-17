---
title: For Agents
order: 0
group:
  title: AI
  order: 0
---

本页提供**可复制 Prompt**，让任意 AI 编程 Agent 高效使用 OceanBase Design。具体编码规则与组合范式见 **Skill**；组件 API 以 **ob-design mcp** 为准。

## 复制这段 prompt

复制到 Agent 对话或自动化流程中：

```text
你正在开发使用 @oceanbase/design 的 React 项目。组件 API、约定与文件结构可能与训练数据不一致。写任何代码前，请先阅读下列文档并遵循其中说明使用 OceanBase Design：
https://design.oceanbase.com/docs/react/for-agents.md
https://raw.githubusercontent.com/oceanbase/oceanbase-design/master/skills/oceanbase-design/SKILL.md

业务项目只配置 ob-design mcp（@oceanbase/design-cli），不要单独配置 antd MCP 或调用 antd_info。

若可安装 Skill：
npx skills add oceanbase/oceanbase-design
```

## Agent 获得什么

### CLI — 离线知识与项目工具

`@oceanbase/design-cli` 提供 metadata、约束、模板与迁移封装；组件 API 以 `ob-design info` / `ob_info` 为准（按 diffLevel merge）。

```bash
npm install -g @oceanbase/design-cli   # 推荐，与 antd CLI 用法一致

ob-design list
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

未全局安装时可用 `npx @oceanbase/design-cli <command>`。

内置页面模板：`list-filter-table`、`detail-descriptions`、`app-basic-layout`、`form-in-modal`。

完整参考：[CLI](/docs/react/cli)

### design.md — 设计语言

[design.md](/docs/react/design-md) 在 [Ant Design design.md](https://ant.design/design.md) 上融合 OB 品牌色与组件约定，供 AI 设计工具使用。

完整参考：[design.md 指南](/docs/react/design-md)

### MCP Server — IDE 集成

CLI 以 `ob-design mcp` 提供 **9 个工具**与 **2 个 Prompt**，供 Cursor、Claude Desktop 等调用。

全局安装后：

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

未全局安装时：

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

`oceanbase-design` Skill 说明**为何**这样用（Filter vs LightFilter、Card+Table、迁移核对），不重复维护 props 列表。

```bash
npx skills add oceanbase/oceanbase-design
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
npm install -g @oceanbase/design-cli   # 自带 @ant-design/cli，加速 ob_info merge
ob-design setup --client cursor   # MCP（Cursor）
ob-design setup --client claude    # MCP（Claude Desktop）
ob-design setup --client agents    # AGENTS.md
npx skills add oceanbase/oceanbase-design
```

未全局安装时，将 `ob-design` 替换为 `npx @oceanbase/design-cli`。

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

## 相关文档

侧栏 **AI** 分组（与 Ant Design 对齐）：

1. [design.md](/docs/react/design-md)
2. [LLMs.txt](/docs/react/llms)
3. [Agent Skills](/docs/design/design-skills)
4. [MCP Server](/docs/react/mcp)
5. [CLI](/docs/react/cli)

扩展阅读：[迁移指南](/docs/react/migrate)
