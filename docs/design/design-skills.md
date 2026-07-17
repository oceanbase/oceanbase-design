---
title: Agent Skills
order: 7
group: 基础组件
---

本仓库提供 **oceanbase-design-usage** Skill，用于在开发、Code Review、迁移时统一 **OceanBase Design** 各包（design、ui、icons、charts、util）的使用方式，减少样式与代码差异。适用于本仓库及引用上述包的业务项目；迁移场景覆盖 `@oceanbase/codemod` 与人工核对。

程序化接入见侧栏 **AI** 分组（与 Ant Design 对齐）；本页为叙事与 Code Review 规范，入口见 [For Agents](/docs/react/for-agents)。

## Skill 与 CLI 的分工

| 问题 | 查哪里 |
| --- | --- |
| 为什么 Card+Table 要 `innerBordered`？ | Skill `09-combo` / ASSEMBLY |
| `Table` 有哪些 OB 扩展 props？ | `ob-design info Table` / `ob_info`（**不以 Skill 为准**） |
| 页面该用 Filter 还是 LightFilter？ | Skill `08-filter` + `ob-design route` |
| 项目 MCP 怎么配？ | `ob-design setup` / For Agents |

Skill 是**叙事与范式**；`@oceanbase/design-cli` 是**API 与约束的机器真相**。二者互补，不重复维护 props 表（props 由 `extract:added-props` → `references/generated/props-index.md` CI 生成）。

## vibe-tests 对 Skill 的启示

真实 LLM 跑批中 **ob-skill-only 18/18**，说明当前 Skill 对模型已足够清晰。优先优化方向：

1. **保持 Skill 精简**——不在 SKILL.md 堆 API 表；细节放 `references/`，机器索引放 `generated/props-index.md`
2. **补强 Agent 入口**——SKILL.md 顶部指向 `ob-design setup` 与 For Agents（已加「Agent 工具链」节）
3. **高价值约束前置**——Filter、innerBordered、图标包路由保持在「最高优先级」区块

## 在外部项目中使用

若业务项目使用 `@oceanbase/design` / `@oceanbase/ui`，希望 AI 按同一套规范辅助开发，可从 **GitHub** 直接安装本 Skill，无需先 clone 整个仓库。skills 不会作为 npm 包发布，也不会随 `@oceanbase/design` 一起发布。

### 安装

在业务项目根目录执行（OpenSkills 会拉取仓库并只安装 skill 子目录）：

```bash
npx openskills install oceanbase/oceanbase-design/skills/oceanbase-design-usage
```

安装后可执行 `npx openskills update oceanbase-design-usage` 更新为仓库最新版本。

### 安装后使用

- 在项目中执行 `npx openskills read oceanbase-design-usage` 可加载规范内容。
- 在 Cursor、Claude Code 等支持 OpenSkills 的环境中，Agent 会在涉及「OceanBase Design」「OBUI」「Table」「Filter」「ConfigProvider」「迁移」「obToken」等任务时自动引用该 Skill。

## Skill 内容结构

```
oceanbase-design-usage/
├── SKILL.md                              # 入口与总览
└── references/
    ├── ASSEMBLY.md                       # 00～09 约束汇总
    ├── design/                           # 基础组件
    │   ├── README.md                     # 模块导航
    │   ├── 00-overview.md                # 概述、ConfigProvider、约定（根节点必包）
    │   ├── 01-theme-and-token.md         # 主题与 Token
    │   ├── 02-basic.md                   # 基础组件
    │   ├── 03-layout-card.md             # 布局与卡片
    │   ├── 04-form.md                    # 表单
    │   ├── 05-data-display.md            # 数据展示
    │   ├── 06-feedback.md                # 反馈
    │   ├── 07-navigation.md              # 导航
    │   ├── 08-filter.md                  # 筛选（含受控约定）
    │   └── 09-combo.md                   # 组合用法（含 Card+Table innerBordered）
    ├── ui.md                             # 业务组件
    ├── icons.md                          # 图标
    ├── util.md                           # 工具
    ├── charts.md                         # 图表
    ├── codemod.md                        # codemod 迁移
    ├── agent-tooling.md                  # Agent 工具链（CLI/MCP/AGENTS.md）
    └── generated/
        └── props-index.md                # CI 生成的 OB 扩展 props 索引
```
