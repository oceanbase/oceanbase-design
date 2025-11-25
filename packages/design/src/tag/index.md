---
title: Tag 标签
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全继承 antd [Tag](https://ant.design/components/tag-cn/) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 🆕 新增 `pill` 属性，用于设置胶囊标签样式。
- 🆕 新增 `ellipsis` 属性，用于配置内容溢出时的省略和 Tooltip 提示。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本"></code>
<code src="./demo/status.tsx" title="状态标签" description="支持 `default`、`success`、`processing`、`error` 和 `warning` 五种状态颜色。"></code>
<code src="./demo/pill.tsx" title="胶囊标签" description="通过 `pill` 属性设置胶囊形状的标签样式。"></code>
<code src="./demo/color.tsx" title="彩色标签" description="支持多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以自定义颜色。"></code>
<code src="./demo/icon.tsx" title="自定义图标和颜色"></code>
<code src="./demo/borderless.tsx" title="无边框模式"></code>
<code src="./demo/checkable.tsx" title="可选择标签"></code>
<code src="./demo/ellipsis.tsx" title="内容超长自动省略"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| ellipsis | 内容超长时是否自动省略 | `boolean` \| [EllipsisConfig](https://ant-design.antgroup.com/components/typography-cn#ellipsis) | true |
| pill | 是否使用胶囊标签样式 | `boolean` | false |

- 详见 antd Tag 文档: https://ant.design/components/tag-cn/
