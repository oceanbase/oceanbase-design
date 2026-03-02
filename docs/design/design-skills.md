---
title: Agent Skills
order: 7
group: 基础组件
---

本仓库提供 **oceanbase-design-usage** Skill，用于在开发、Code Review、迁移时统一 **OceanBase Design** 各包（design、ui、icons、charts、util）的使用方式，减少样式与代码差异。适用于本仓库及引用上述包的业务项目；迁移场景覆盖 `@oceanbase/codemod` 与人工核对。

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
    └── codemod.md                        # codemod 迁移
```
