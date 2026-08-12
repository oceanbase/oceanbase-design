---
title: Tag 标签
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全继承 antd [Tag](https://ant.design/components/tag-cn/) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 🆕 新增 `critical` 状态色，用于表示严重的场景，比如告警等级-严重。
- 🆕 新增 `pill` 属性，用于设置胶囊标签样式。
- 🆕 新增 `ellipsis` 属性，用于配置内容溢出时的省略和 Tooltip 提示。
- 🆕 新增 `ellipsis="css"` 轻量省略模式：纯 CSS 截断 + 原生 `title`（字符串内容自动派生），不引入测量和 Tooltip 开销，适合标签数量多的场景，如详情页、表格。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本"></code>
<code src="./demo/status.tsx" title="状态标签" description="支持 `default`、`success`、`processing`、`error`、`warning` 和 `critical` 六种状态颜色。"></code>
<code src="./demo/pill.tsx" title="胶囊标签" description="通过 `pill` 属性设置胶囊形状的标签样式。"></code>
<code src="./demo/control.tsx" title="添加和删除"></code>
<code src="./demo/color.tsx" title="彩色标签" description="支持多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以自定义颜色。"></code>
<code src="./demo/icon.tsx" title="自定义图标和颜色"></code>
<code src="./demo/borderless.tsx" title="无边框模式"></code>
<code src="./demo/checkable.tsx" title="可选择标签"></code>
<code src="./demo/ellipsis.tsx" title="内容超长自动省略" description="默认模式基于溢出检测与 Tooltip 提示，适合少量标签；需要自定义 Tooltip 内容或 placement 时使用。"></code>
<code src="./demo/ellipsis-css.tsx" title="轻量级省略" description="`ellipsis='css'` 走纯 CSS 截断 + 原生 title，无测量与 Tooltip 开销，适合标签数量多的详情页、表格；需要父容器有宽度约束（如 `max-width`、flex 布局）才会出现省略号，提示内容需为纯文本。"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| pill | 是否使用胶囊标签样式 | `boolean` | false |
| ellipsis | 内容超长时是否自动省略。`"css"` 为轻量模式：纯 CSS 单行截断 + 原生 `title`（字符串内容自动派生），无 Tooltip、无测量开销，但需要父容器有宽度约束（如 `max-width`、flex 布局）才会出现省略号，适合标签密集场景；`true` 或 [EllipsisConfig](https://ant-design.antgroup.com/components/typography-cn#ellipsis) 为完整模式：溢出检测 + Tooltip，支持自定义提示内容与多行省略 | `boolean` \| [EllipsisConfig](https://ant-design.antgroup.com/components/typography-cn#ellipsis) \| `"css"` | true |

- 详见 antd Tag 文档: https://ant.design/components/tag-cn/
