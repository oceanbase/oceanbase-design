---
title: MCP Server
order: 4
group:
  title: AI
  order: 0
---

通过 [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)，AI 助手可实时查询 OceanBase Design 组件 API、约束、demo 与页面组合建议。

业务项目编写 OB 代码时，**只配置单体 `ob-design mcp`**（`@oceanbase/design-cli`）。**不要**单独配置 `@ant-design/cli mcp` 或调用 `antd_info`——Ant Design CLI 仅作为 `ob_info` 的内部 delegate。命令与 antd 依赖见 [CLI 矩阵](/docs/react/cli#命令与-antd-依赖矩阵)。

## 快速配置

全局安装后（推荐）：

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

一键写入 Cursor：

```bash
npm install -g @oceanbase/design-cli
ob-design setup --client cursor
```

未全局安装时：`npx @oceanbase/design-cli setup --client cursor`

本地启动（调试）：

```bash
ob-design mcp
```

## MCP 工具（9）

| 工具            | 说明                                                                       |
| --------------- | -------------------------------------------------------------------------- |
| `ob_info`       | **组件 API 唯一真相**（diffLevel merge 后的 OB 视角 props）                |
| `ob_doc`        | OB 组件文档（用法/约束；完整 antd 由 Agent 按需查 `ob_info` 或 antd 链接） |
| `ob_demo`       | Demo 源码（import 已改写为 `@oceanbase/design` 等）                        |
| `ob_route`      | 页面意图 → 推荐组件组合                                                    |
| `ob_constraint` | ASSEMBLY / `constraints.yaml` 设计约束                                     |
| `ob_token`      | obToken 与 CSS 变量                                                        |
| `ob_search`     | 全文检索元数据与文档                                                       |
| `ob_lint`       | 静态约定检查（antd 导入、图标包等）                                        |
| `ob_doctor`     | 项目健康检查（OB 依赖、antd CLI 是否可用于 ob_info）                       |

## MCP Prompts（2）

| Prompt         | 说明                                           |
| -------------- | ---------------------------------------------- |
| `ob-expert`    | 带硬规则的 OB 专家系统提示                     |
| `ob-list-page` | 列表页脚手架（Filter + Table + PageContainer） |

## 推荐工作流

```
ob_route "<页面意图>"
  → ob_info <Component>
  → ob_constraint（有疑虑时，建议 --dense）
  → 生成代码
  → ob_lint ./src
```

## 无 MCP 时的替代方案

若 IDE 不支持 MCP，可使用 [LLMs.txt](/docs/react/llms) 将文档灌入上下文，并安装 `oceanbase-design` Skill。但**动态 API 查询仍建议在支持 MCP 的环境开发**。

## 发现协议

站点提供机器可读卡片（构建后）：

- `/.well-known/mcp/server-card.json`
- `/.well-known/agent-card.json`

## 相关文档

- [For Agents](/docs/react/for-agents)
- [LLMs.txt](/docs/react/llms)
- [CLI 参考](/docs/react/cli)
- [Agent Skills](/docs/design/design-skills)
- [迁移指南](/docs/react/migrate)
