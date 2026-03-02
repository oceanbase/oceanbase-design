# @oceanbase/design 概述

design 是 OceanBase Design（OBUI）的设计系统与基础组件库，提供按钮、表格、筛选、表单、空状态、反馈、导航等组件，以及主题与布局能力。与 `@oceanbase/ui`、`@oceanbase/icons`、`@oceanbase/charts` 等配合使用。

## 定位与关系

- **基于 antd 扩展**：未在本文档列出的 API 与 antd 一致，具体用法以 antd 文档为参考；各模块文档中只写 design 新增或与 antd 不同的约束与推荐。
- **依赖**：依赖 `@oceanbase/icons`、`@oceanbase/util`；被 `@oceanbase/ui`、`@oceanbase/charts` 等消费。业务项目使用 design 时，根节点需用 design 的 `ConfigProvider` 包裹。
- **按需与模块**：支持按需引入与渐进式加载；本 skill 按功能拆分为 02～09，详见 [README.md](README.md)。

## 入口与主题

- **ConfigProvider**：应用入口应使用 `ConfigProvider`（从 `@oceanbase/design` 引入）包裹，message、notification、Modal 等静态方法会消费其配置；**主题与 Token** 详见 [01-theme-and-token.md](01-theme-and-token.md)。
- **主题与样式**：业务侧写样式时，使用 `theme.useToken()` 或 `useToken()` 获取 **obToken**，优先语义化 token，不推荐手写基础色值；勿混用 antd 与 design 的 `useToken`。

**ConfigProvider 扩展**：`theme` 支持 `isAliyun`、`isDark`、`isCompact`；`card` 支持 `divided`；`table` 支持 `selectionColumnWidth`；`spin` 支持 `indicator`；`pagination`、`appProps`、`navigate`、`hideOnSinglePage` 等。详见 [09-combo](09-combo.md) ConfigProvider 全局配置。

```tsx
import { ConfigProvider, theme, useToken } from '@oceanbase/design';

// 根节点：主题配置
<ConfigProvider theme={{ isDark: true }}>
  <App />
</ConfigProvider>;

// 组件内取 obToken（推荐）
const { obToken } = useToken();
// obToken.colorBgDefault、obToken.space400、obToken.radiusSm 等
```

## 模块与文档

| 模块 | 文件 | 内容概要 |
| --- | --- | --- |
| 概述 | 00-overview.md（本文件） | 定位、主题、模块划分 |
| 基础 | [02-basic.md](02-basic.md) | Alert、Button、Space、Grid、Typography、Tag、Divider |
| 布局与卡片 | [03-layout-card.md](03-layout-card.md) | Card、App、ConfigProvider |
| 表单与输入 | [04-form.md](04-form.md) | Form、Input、Select、TreeSelect、Radio、Checkbox、Switch、Slider |
| 数据展示 | [05-data-display.md](05-data-display.md) | Table、Descriptions、List、Empty、Result |
| 反馈 | [06-feedback.md](06-feedback.md) | Modal、Drawer、Spin、Badge、Tooltip、Popover、Message、Notification、Lottie、Pagination、Steps、Progress、Upload、Divider、Collapse |
| 导航 | [07-navigation.md](07-navigation.md) | Tabs、Breadcrumb、Dropdown、Segmented |
| 筛选器 | [08-filter.md](08-filter.md) | Filter（Select/Checkbox/Cascader/Range/Wrap/ResponsiveGroup） |
| 组合使用 | [09-combo.md](09-combo.md) | Card+Table、Filter+Table、Form+Modal/Drawer、Empty+Table、Descriptions+Drawer、Modal.Progress、ProCard+Table |

组件开发、Code Review 或迁移时，按任务从 02～09 中查阅对应模块的约束与示例即可。

**何时不用 design**：业务明确只使用 antd、不引入 OceanBase Design 时，无需遵循本模块；一旦引入 `@oceanbase/design` 或 `@oceanbase/ui`，即应按本 skill 使用 ConfigProvider、obToken 与组件/图标来源。
