---
title: Empty 空状态
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全兼容 antd [Empty](https://ant.design/components/Empty-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 🆕 新增 `layout` 属性，用于设置空状态布局 ，默认为 `vertical`。
- 🆕 新增 `title` 属性。
- 🆕 新增 `extra` 属性。
- 🆕 新增 `mode` 属性，默认为 `pageCard`。

## 代码演示

<code src="./demo/basic.tsx" title="基本" description="简单的展示。"></code>

<code src="./demo/empty-simple.tsx" title="选择图片" description="可以通过设置 image 为 Empty.PRESENTED_IMAGE_SIMPLE 选择另一种风格的图片。"></code>

<code src="./demo/customize-icon-desc.tsx" title="自定义 Icon" description="自定义 Icon"></code>

<code src="./demo/empty-horizontal.tsx" title="暂无数据-欢迎" description="暂无数据-欢迎"></code>

<code src="./demo/empty-guide-page.tsx" title="暂无数据-引导" description="暂无数据-引导"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| layout | 布局 | horizontal \| vertical | horizontal | - |
| title | 标题 | React.ReactNode | horizontal | - |
| extra | 额外内容 | React.ReactNode | horizontal | - |
| mode | 展示模式: 页面模式 \| 卡片模式 \| 组件模式 | page \| pageCard \| component | pageCard | - |

- 更多 API 详见 antd Empty 文档: https://ant.design/components/Empty-cn
