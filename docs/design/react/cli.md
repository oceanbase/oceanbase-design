---
title: CLI
order: 5
group:
  title: AI
  order: 0
---

`@oceanbase/design-cli` 是 OceanBase Design 的**单体 Agent 入口**：命令行工具 + MCP 服务（`ob-design mcp`）。业务项目编写 OB 代码时，只配置此 CLI 的 MCP，不要单独配置 `@ant-design/cli mcp`。

> 叙事规范见 [Agent Skills](/docs/design/design-skills)；接入流程见 [For Agents](/docs/react/for-agents)。

## 安装

```bash
npm install -g @oceanbase/design-cli
```

需要 Node.js `>=18`。也可以使用 `pnpm add -g @oceanbase/design-cli` 或 `bun add -g @oceanbase/design-cli` 全局安装。

其他方式：

```bash
# 无需全局安装：一次性命令
npx @oceanbase/design-cli <command>

# 项目内 devDependency（CI / 锁定版本）
pnpm add -D @oceanbase/design-cli
pnpm exec ob-design list
```

二进制名：`ob-design`（与 `@ant-design/cli` 的 `antd` 对标；避免与 npm 全局包 `ob` 冲突）。

## 快速开始

```bash
ob-design list                           # 所有组件及 diffLevel
ob-design info Table                     # 组件 Props（OB merge 后）
ob-design doc Filter                     # OB 组件 Markdown 文档
ob-design demo Table basic               # 可运行 Demo 源码
ob-design route "用户列表带筛选"         # 页面意图 → 组件组合
ob-design constraint --dense             # 设计约束
ob-design token                          # obToken / CSS 变量
ob-design design.md                      # 设计语言（antd + OB）
ob-design lint ./src                     # 约定静态检查
ob-design doctor                         # 项目健康检查
ob-design migrate ./src                  # 封装 @oceanbase/codemod
ob-design template list-filter-table     # 页面模板
ob-design mcp                            # 启动 MCP 服务
ob-design setup --client cursor          # 写入 MCP / AGENTS.md
```

## 命令一览

| 命令                         | MCP 工具        | 用途                                        |
| ---------------------------- | --------------- | ------------------------------------------- |
| `ob-design list`             | —               | 已注册组件与 diffLevel                      |
| `ob-design info <Name>`      | `ob_info`       | **组件 API 真相**（OB 扩展 props 已 merge） |
| `ob-design doc <Name>`       | `ob_doc`        | OB 组件文档（用法/约束；不含 antd 附录）    |
| `ob-design demo <Name> [id]` | `ob_demo`       | Demo 源码（import 已改写为 OB 包）          |
| `ob-design route "<intent>"` | `ob_route`      | 页面意图 → 推荐组件组合                     |
| `ob-design constraint`       | `ob_constraint` | 设计约束（ASSEMBLY）                        |
| `ob-design token`            | `ob_token`      | obToken / CSS 变量参考                      |
| `ob-design design.md`        | —               | 设计语言                                    |
| `ob-design search <query>`   | `ob_search`     | 全文检索文档与元数据                        |
| `ob-design lint <path>`      | `ob_lint`       | 约定静态检查                                |
| `ob-design doctor`           | `ob_doctor`     | 项目健康检查（MCP/Skill/依赖）              |
| `ob-design setup`            | —               | 写入 MCP 配置 + 生成 `AGENTS.md`            |
| `ob-design migrate <path>`   | —               | 封装 `@oceanbase/codemod`                   |
| `ob-design template <name>`  | —               | 页面模板（见下方）                          |
| `ob-design mcp`              | —               | 启动 MCP 服务（stdio）                      |

常用选项：`--dense`（token 友好输出）、`--json`（机器可读）。

## 命令与 antd 依赖矩阵

业务项目**只配置 `oceanbase-design` MCP**，**不要**配置 `@ant-design/cli` MCP。antd 仅作为 `ob_info` 的**内部子进程 delegate**（不是 MCP）。

### 三层命名

| 层级           | 名称                 | 说明                                  |
| -------------- | -------------------- | ------------------------------------- |
| CLI 二进制     | `ob-design`          | 终端命令；避免与 npm 全局包 `ob` 冲突 |
| MCP server key | `oceanbase-design`   | IDE 里配置的服务名                    |
| MCP 工具       | `ob_info`、`ob_doc`… | Agent 实际调用的工具（前缀 `ob_`）    |

CLI 名与 MCP 工具前缀**不必一致**（对标 `antd` CLI + `antd_info` 工具）。

### 命令 × 数据源 × antd

| 命令 / MCP | 数据来源 | 内部调 antd CLI？ | 说明 |
| --- | --- | --- | --- |
| `ob_info` | OB metadata + 可选 antd merge | **是**（仅 `delegateAntd` 且有 `extendsAntd`） | **API 唯一真相入口**；B/C 级依赖 merge |
| `ob_doc` | OB 本地 `index.md` | 否 | 用法、约束、OB API 表；文内含 antd 官网链接 |
| `ob_demo` | OB 本地 `demo/*.tsx` | 否 | 仅本地 demo；缺失时列出可用 `demoId` |
| `ob_token` | `obTokenMeta.ts` | 否 | 仅 OB 主题 token |
| `ob_list` / `ob_search` | `metadata/` | 否 | 组件注册表与检索 |
| `ob_constraint` | `constraints.yaml` | 否 | ASSEMBLY 约束 |
| `ob_route` | 内置意图路由 | 否 | 页面 → 组件组合 |
| `ob_lint` | 项目源码 | 否 | import 与约定检查 |
| `ob_doctor` | 项目 `package.json` + antd 可解析性 | **否**（只检测 PATH/local/npx） | `antd-cli-for-ob_info` 为安装建议，非硬错误 |
| `ob-design design.md` | `public/design.md` | 否（仓库生成时 merge antd v6 基线） | 设计语言，对标 `antd design.md` |
| `setup` / `template` / `migrate` / `mcp` | OB 内置 | 否 | 配置、模板、迁移、启 MCP |

antd CLI 解析顺序（仅 `ob_info` 使用）：**PATH `antd` → 项目 `node_modules` → `npx`**。调用使用 `@ant-design/cli` 的 `--format json`，并**固定查询 antd v5 API**（`--version` 来自项目 antd 5 依赖或 `@oceanbase/design` 内置范围）。

### Agent 查什么用什么

```
写 OB 组件代码
  ob_route "<意图>"     → 选组件
  ob_info <Name>        → props / API（优先）
  ob_doc <Name>         → 用法、约束、OB 差异
  ob_demo <Name> [id]   → 可运行示例
  ob_constraint         → 组合/布局规则（有疑虑时）

仍需 antd 完整长文档？
  → 读 ob_doc 内的 ant.design 链接（antd **v5** 文档）
  → 或终端 antd --version 5 doc <Name>（勿配置 antd MCP）
```

### 业务侧需要装什么

| 安装项 | 必须？ | 作用 |
| --- | --- | --- |
| `@oceanbase/design-cli` | 是 | MCP + 全部 `ob_*` 命令；推荐全局安装，亦可用 `npx` / devDependency |
| `@oceanbase/design` | 是（业务项目） | 实际组件库 |
| `@ant-design/cli` | 否（建议） | 加速 `ob_info` 的 antd **v5** API merge；**不配 antd MCP**；勿依赖其默认 v6 数据 |

```bash
# 可选：全局安装 antd CLI，加速 ob_info 内部 merge（无需配置 antd MCP）
npm install -g @ant-design/cli
ob-design setup --install-antd-cli
```

### 演进说明

当前 `ob_info` 在运行时 merge antd API。后续计划在 `generate:metadata` 阶段**预合并**进 `metadata/`，业务侧可完全离线、零 antd CLI 依赖。`ob_doc` 已不包含 antd 截断附录。

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

## 一键接入

```bash
# 全局安装后（推荐）
npm install -g @oceanbase/design-cli
ob-design setup --client cursor    # MCP
ob-design setup --client agents    # AGENTS.md

# 或未全局安装时
npx @oceanbase/design-cli setup --client cursor
npx @oceanbase/design-cli setup --client agents

# 可选：全局安装 antd CLI，加速 ob_info 内部 merge（无需配置 antd MCP）
ob-design setup --install-antd-cli
# 或手动：npm install -g @ant-design/cli
```

详见上文 [命令与 antd 依赖矩阵](#命令与-antd-依赖矩阵)。

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

未全局安装时（`npx` 按需拉取，适合 CI 或锁定版本）：

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

**禁止**同时配置 `@ant-design/cli mcp`。Ant Design CLI 仅作为 `ob_info` 的内部 delegate，对外不暴露 `antd_info`。

## ob_info 与 diffLevel

组件元数据位于仓库 `metadata/components/*.json`，按 diffLevel 决定 API 合并策略：

| Level | 含义         | ob_info 行为                          |
| ----- | ------------ | ------------------------------------- |
| A     | OB 独有组件  | OB 元数据；可选 antd merge            |
| B     | OB 显著扩展  | OB `addedProps` + antd 基础 merge     |
| C     | 薄封装       | 以 antd 为主，标注 OB 差异            |
| D     | OB 独有/透传 | 仅 OB 元数据（`delegateAntd: false`） |

## 推荐 Agent 工作流

```
ob-design route "<页面意图>"
  → ob_info <组件>（API）
  → ob_doc <组件>（用法/约束，可选）
  → ob_constraint --dense（有疑虑时）
  → ob-design template <name>（可选起点）
  → 生成代码
  → ob-design lint ./src
```

## 与 @oceanbase/codemod 的分工

| 包                      | 职责                                  |
| ----------------------- | ------------------------------------- |
| `@oceanbase/design-cli` | 知识查询、MCP、约束、模板、项目 setup |
| `@oceanbase/codemod`    | AST 级代码迁移（antd → design 等）    |

迁移场景：`ob-design migrate` 调用 codemod；日常开发查 API 用 `ob-design info`。

## 相关文档

- [For Agents](/docs/react/for-agents)
- [LLMs.txt](/docs/react/llms)
- [MCP Server](/docs/react/mcp)
- [Agent Skills](/docs/design/design-skills)
- [design.md](/docs/react/design-md)
- [迁移指南](/docs/react/migrate)
