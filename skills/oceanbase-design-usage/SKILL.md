---
name: oceanbase-design-usage
description: Guide for using OceanBase Design (OBUI) packages—design, ui, icons, charts, util—correctly. Use when developing or modifying components in this repo, adding new components, reviewing code for consistency, or migrating from antd/obui/techui to oceanbase-design. Covers import conventions, theme/style patterns, code standards, and @oceanbase/codemod for automated migration. Trigger terms: OceanBase Design, OBUI, oceanbase design, @oceanbase/design, Table, Filter, ConfigProvider, antd 迁移, obui, techui, codemod, obToken, 主题, 组件规范, design 组件 Code Review.
---

# OceanBase Design 使用规范

## 概述

**OceanBase Design**，包含 design、ui、icons、charts、util 等多个库。本 Skill 指导正确使用 `@oceanbase/design`、`@oceanbase/ui`、`@oceanbase/icons`、`@oceanbase/util`、`@oceanbase/charts`（适用于 oceanbase-design 仓库及引用上述包的业务项目）；并说明使用 `@oceanbase/codemod` 进行自动化迁移与升级。遵循推荐用法可减少差异、提升样式一致性和代码规范性。

## 包关系与依赖

- **@oceanbase/design**：设计系统与基础组件，依赖 `@oceanbase/icons`、`@oceanbase/util`；被 ui/charts 等消费。
- **@oceanbase/ui**：业务级组件与布局，依赖 `@oceanbase/design`、`@oceanbase/icons`、`@oceanbase/util`。
- **@oceanbase/icons**：图标库，被 design、ui 等引用。
- **@oceanbase/util**：工具函数与 hooks，被 design、ui、charts 等引用。
- **@oceanbase/charts**：图表组件，依赖 `@oceanbase/util`；与 design 主题联动时需配合 `ChartProvider`。
- **@oceanbase/codemod**：自动化迁移工具，将 antd、obui、techui、pro-components、obutil、ob-charts 等迁移到 design/ui/util/charts，并支持 Less/Sass 转 token 或 CSS 变量。

应用入口应使用 `ConfigProvider`（来自 design）包裹，需要图表主题时在内部使用 `ChartProvider`（来自 charts）。存量项目迁移时可使用 codemod 自动转换后再按本 skill 规范核对。

## 包选择速查

| 需求 | 推荐包 | 说明 |
| --- | --- | --- |
| 基础组件、表格、筛选、表单、空状态、结果页、主题 | **@oceanbase/design** | 表格用 Table、筛选用 Filter；根节点用 ConfigProvider |
| 页面布局、ProTable、LightFilter、Action、DateRanger 等业务组件 | @oceanbase/ui | 根节点已包 design ConfigProvider 即可 |
| 图标 | @oceanbase/icons | 与 design/ui 组件搭配，不混用 @ant-design/icons |
| 格式化、hooks、通用工具 | @oceanbase/util | format、useLocalStorageState、useQuery 等 |
| 图表 | @oceanbase/charts | 需 ChartProvider 与 design 主题联动 |
| 迁移/升级（antd、obui、techui、Less/Sass 等） | @oceanbase/codemod | 自动化迁移到 design/ui/util/charts；见 [references/codemod.md](references/codemod.md) |

## 最高优先级（必遵）

- **根节点**：应用入口用 design 的 `ConfigProvider` 包裹；使用 message/notification/Modal 静态方法或图表时，必须已在 ConfigProvider/ChartProvider 子树内。
- **组件与图标**：基础组件、Table、Filter、表单等从 `@oceanbase/design` 引入；图标从 `@oceanbase/icons` 引入，**不要**从 `@ant-design/icons` 引入。
- **Card + Table**：Card 使用 `bodyStyle={{ padding: 0 }}` 时，Table **必须**设 `innerBordered`，否则边框错乱。
- **迁移**：从 antd/obui/techui 迁移时，先运行 `@oceanbase/codemod`，再按本 skill 做人工核对。

## 快速规范

1. **组件与主题**：从 `@oceanbase/design` 引入组件、`ConfigProvider`、`theme`（含 `useToken`）；业务侧写样式时用 `useToken()` 的 **obToken** 或 CSS 变量 `var(--ob-*)`；主题配置见 [references/design/01-theme-and-token.md](references/design/01-theme-and-token.md)。
2. **图标**：从 `@oceanbase/icons` 按名引入（如 `CloseOutlined`、`FilterOutlined`），与 design 组件搭配使用。
3. **业务组件**：从 `@oceanbase/ui` 引入 ProTable、PageContainer 等业务组件；其内部已依赖 design，业务代码无需重复包裹 ConfigProvider（根节点已包裹即可）。
4. **工具**：从 `@oceanbase/util` 引入 format、hooks 等；图表从 `@oceanbase/charts` 引入，并确保根节点已用 `ChartProvider` 提供主题。

## 各包详细说明

- **@oceanbase/design**：按模块拆分，支持按需与渐进式加载。**主题与 Token** 见 [references/design/01-theme-and-token.md](references/design/01-theme-and-token.md)；概述见 [references/design/00-overview.md](references/design/00-overview.md)，模块导航见 [references/design/README.md](references/design/README.md)；各组件模块 02-basic～09-combo 含约束、场景与代码示例。
- **@oceanbase/ui**：见 [references/ui.md](references/ui.md)。
- **@oceanbase/icons**：见 [references/icons.md](references/icons.md)。
- **@oceanbase/util**：见 [references/util.md](references/util.md)。
- **@oceanbase/charts**：见 [references/charts.md](references/charts.md)。
- **@oceanbase/codemod**：自动化迁移工具，见 [references/codemod.md](references/codemod.md)。用于从 antd、obui、techui、pro-components 等迁移到 design/ui/util/charts，以及 Less/Sass 转 token 或 CSS 变量。执行时须指定版本 `@oceanbase/codemod@^1.0.0-alpha.0`。

在修改或新增组件、做 Code Review、统一样式与导入方式时，按需查阅上述 reference 以保持与 design 及各包使用规范一致。存量项目迁移时先运行 codemod，再按 design 与各包规范做人工核对。本 skill 的 reference 位于 `references/`；design 细则入口为 [references/design/README.md](references/design/README.md)；**关键约束一句话汇编**见 [references/ASSEMBLY.md](references/ASSEMBLY.md)。高价值约定（ConfigProvider 必包、图标来源、Card+Table innerBordered、Filter 受控）已融入各相关 reference。

## 何时不用 / 例外

- **不接入的项目**：若业务明确只使用 antd、不引入 OceanBase Design，则无需遵循本 skill；一旦引入 design/ui/icons 任一包，即应按本 skill 统一来源与用法。
- **临时原型或一次性脚本**：可放宽（如暂不 ConfigProvider），但上线前需补齐根节点 ConfigProvider 与图标来源。
- **与第三方库强绑定**：若某第三方组件强制依赖 @ant-design/icons 或 antd 的 useToken，可在该局部保留，其余业务代码仍应使用 @oceanbase/icons 与 obToken。
- **例外必须说明**：未遵循某条约定时，在注释或 PR 中写明原因（如「此处因 xxx 暂未使用 innerBordered」），便于后续收敛。

**使用本 Skill 生成或修改代码时**：请遵循对应 reference 中的约束与示例；若未遵循某条约定（如 Card+Table 未设 innerBordered），请在注释或 PR 中简要说明原因；迁移场景请注明是否已用或拟用 codemod。高价值约定已融入 00-overview、icons、09-combo、08-filter 等 reference。
