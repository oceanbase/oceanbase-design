# Agent 工具链与 CLI

本页说明 `@oceanbase/design-cli`（`ob-design`）与 MCP 的完整用法。Skill 叙事见 [SKILL.md](../SKILL.md)；**组件 API 以 CLI / MCP 为准**，不在此重复 props 表。

## 包名

| 名称                     | 角色                     |
| ------------------------ | ------------------------ |
| **OceanBase Design CLI** | 产品名                   |
| `@oceanbase/design-cli`  | npm 包                   |
| `ob-design`              | 命令行二进制             |
| `oceanbase-design`       | IDE 中 MCP server 的 key |

**不是** OceanBase Database 运维 CLI。

## 安装

```bash
npm install -g @oceanbase/design-cli   # Node >= 18
```

未全局安装：`npx @oceanbase/design-cli <command>` 或 `pnpm add -D @oceanbase/design-cli && pnpm exec ob-design list`。

## 分工

| 层       | 载体                                             | 何时用                        |
| -------- | ------------------------------------------------ | ----------------------------- |
| 叙事     | Skill（SKILL.md + references）                   | 范式、组合场景、Code Review   |
| 机器真相 | `ob-design` / `ob-design mcp`                    | props、demo、约束、路由、lint |
| 项目规则 | `AGENTS.md`（`ob-design setup --client agents`） | 业务仓库常驻规则              |
| 代码迁移 | `@oceanbase/codemod`（`ob-design migrate`）      | AST 级 antd → design 等       |

## 推荐接入

```bash
npm install -g @oceanbase/design-cli
ob-design setup --client cursor
ob-design setup --client agents
npx skills add oceanbase/oceanbase-design
```

## MCP 配置

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

**禁止**单独配置 `@ant-design/cli mcp`。Ant Design CLI 已捆绑在 design-cli 内，仅供 `ob_info` merge antd **v5** API。

## 命令一览

| 命令 | MCP 工具 | 用途 |
| --- | --- | --- |
| `ob-design list` | — | 已注册组件与 diffLevel |
| `ob-design info <Name>` | `ob_info` | **组件 API 真相**（OB 扩展已 merge） |
| `ob-design doc <Name>` | `ob_doc` | OB 组件文档（用法/约束） |
| `ob-design demo <Name> [id]` | `ob_demo` | Demo 源码（import 已改写为 OB） |
| `ob-design route "<intent>"` | `ob_route` | 页面意图 → 推荐组件 |
| `ob-design constraint` | `ob_constraint` | ASSEMBLY 设计约束 |
| `ob-design token` | `ob_token` | 运行时 `--ob-*` 列表、分类、migration hints、`check` |
| `ob-design design.md` | — | 设计语言（antd + OB） |
| `ob-design search <query>` | `ob_search` | 全文检索 |
| `ob-design lint <path>` | `ob_lint` | 约定 + CSS token 静态检查（默认含样式） |
| `ob-design doctor` | `ob_doctor` | 依赖与健康（MCP/Skill/版本） |
| `ob-design setup` | — | 写入 MCP + `AGENTS.md` |
| `ob-design migrate <path>` | — | 封装 `@oceanbase/codemod` |
| `ob-design template <name>` | — | 页面模板 |
| `ob-design mcp` | — | 启动 MCP（stdio） |

常用选项：`--dense`（省 token）、`--json`（机器可读）。

## Agent 查什么用什么

```
写 OB 组件代码
  ob_route "<意图>"       → 选组件组合
  ob_info <Name>          → props / API（优先）
  ob_doc <Name>           → 用法、约束、OB 差异
  ob_demo <Name> [id]     → 可运行示例
  ob_constraint --dense   → 组合/布局规则（有疑虑时）

涉及自定义样式（CSS/SCSS/内联 style）
  ob_token --dense / ob-design token --json  → 合法 --ob-* 列表
  ob_lint ./src                              → 提交前校验（默认含样式 token）

仍需 antd 完整长文档？
  → 读 ob_doc 内的 ant.design 链接（antd v5）
  → 或终端 antd doc <Name>（勿配置 antd MCP）
```

`ob_token` 参数：`dense`、`json`、`check`（单 token 校验）。`ob_lint` 参数：`includeStyles`（默认 true）、`codeOnly`、`stylesOnly`、`json`。

## 推荐工作流

```
ob-design route "<页面意图>"
  → ob-design info <Component>
  → ob-design doc <Component>          # 可选
  → ob-design constraint --dense       # 有疑虑时
  → ob-design template <name>          # 可选起点
  → 生成代码
  → ob-design lint ./src
```

样式 token 规范见 [css-tokens.md](css-tokens.md)。

## 页面模板

| 名称                  | 场景                  |
| --------------------- | --------------------- |
| `list-filter-table`   | 列表 + Filter + Table |
| `detail-descriptions` | 详情 + Descriptions   |
| `app-basic-layout`    | BasicLayout 应用壳    |
| `form-in-modal`       | Modal 内嵌表单        |

```bash
ob-design template list-filter-table
ob-design template list-filter-table --skeleton
```

## ob_info 与 diffLevel

`metadata/components/*.json` 按 diffLevel 决定 merge 策略：

| Level | 含义         | ob_info 行为                      |
| ----- | ------------ | --------------------------------- |
| A     | OB 独有      | OB 元数据；可选 antd merge        |
| B     | OB 显著扩展  | OB `addedProps` + antd 基础 merge |
| C     | 薄封装       | 以 antd 为主，标注 OB 差异        |
| D     | OB 独有/透传 | 仅 OB 元数据                      |

OB 扩展 props 机器索引：[generated/props-index.md](generated/props-index.md)（CI 生成，与 `ob_info` 同源）。

## MCP Prompts（可选）

| Prompt         | 用途                                           |
| -------------- | ---------------------------------------------- |
| `ob-list-page` | 列表页脚手架（Filter + Table + PageContainer） |

## 决策速查

| 场景                  | 推荐                                  |
| --------------------- | ------------------------------------- |
| 标准多条件筛选条      | `Filter.*` + `Filter.ResponsiveGroup` |
| 轻量单行筛选          | `@oceanbase/ui` 的 `LightFilter`      |
| 静态列表表格          | `Table`                               |
| 需 request / 内置搜索 | `ProTable`                            |
| Card 无内边距 + Table | `Table innerBordered`                 |
| 图标                  | `@oceanbase/icons`                    |

完整分支见 [design/08-filter.md](design/08-filter.md#filter-vs-lightfilter-决策树)。

## 禁止

- 不要配置 `@ant-design/cli mcp` 或调用 `antd_info` 写 OB 代码
- 不要从 `antd` / `@ant-design/icons` import
- 不要用裸 `Select` 充当列表筛选条

## 站点文档

- [For Agents](https://design.oceanbase.com/docs/react/for-agents)
- [CLI 参考](https://design.oceanbase.com/docs/react/cli)
- [MCP Server](https://design.oceanbase.com/docs/react/mcp)
- [LLMs.txt](https://design.oceanbase.com/docs/react/llms)

发现协议（构建后）：`/.well-known/agent-card.json`、`/.well-known/mcp/server-card.json`。
