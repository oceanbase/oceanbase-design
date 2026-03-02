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

| 入口 | 说明 |
| --- | --- |
| **SKILL.md** | 概述、包关系与依赖、包选择速查、最高优先级（必遵）、快速规范、各包详细说明与链接、何时不用/例外 |
| **references/design/** | README 为模块导航；00 概述、01 主题与 Token、02～09 为组件约束与示例（基础、布局与卡片、表单、数据展示、反馈、导航、筛选、组合） |
| **references/ui.md** | @oceanbase/ui：业务级组件与布局（ProTable、PageContainer、BasicLayout、LightFilter、Action、DateRanger 等），导入约定与使用要点 |
| **references/icons.md** | @oceanbase/icons：图标库与 design/ui 搭配使用，按名引入、不混用 @ant-design/icons |
| **references/util.md** | @oceanbase/util：工具函数与 hooks（format、robust、sort、hooks、util、component），导入约定 |
| **references/charts.md** | @oceanbase/charts：图表组件与 ChartProvider，与 design 主题联动 |
| **references/codemod.md** | @oceanbase/codemod：自动化迁移工具（antd/obui/techui/pro-components 等到 design/ui/charts/util），版本要求与使用方式 |
| **references/ASSEMBLY.md** | design 模块 00～09 关键约束一句话汇总，便于一次性查阅或 Code Review |
| **rules/** | 4 条原子化规则：ConfigProvider 必包、图标从 @oceanbase/icons 引入、Card+Table innerBordered、Filter 受控；每则含 Why / Incorrect / Correct / When not to use，可做 CI/门禁 |
