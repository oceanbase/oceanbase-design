---
title: Empty 空状态
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全兼容 antd [Empty](https://ant.design/components/Empty-cn) 的能力和 API，可无缝切换。
- 💄 定制插图、主题和样式，符合 OceanBase Design 设计规范。
- 🆕 新增 `title` 属性，用于设置空状态标题。
- 🆕 新增 `steps` 属性，用于设置步骤引导。
- 🆕 新增 `layout` 属性，用于设置空状态布局，默认为 `vertical`。

## 代码演示

<code src="./demo/basic.tsx" title="基本" description="简单展示"></code>

<code src="./demo/complete.tsx" title="完整" description="设置标题、描述和操作"></code>

<code src="./demo/simple.tsx" title="简洁版" description="图片设置为 Empty.PRESENTED_IMAGE_SIMPLE"></code>

<code src="./demo/image.tsx" title="自定义图片" description="可设置图片链接或 ReactNode"></code>

<code src="./demo/steps.tsx" title="步骤引导"></code>

<code src="./demo/horizontal.tsx" title="横向布局"></code>

<code src="./demo/with-page-container.tsx" title="和页容器搭配使用"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| title | 标题 | React.ReactNode | horizontal | - |
| steps | 步骤引导 | [StepItem](https://ant-design.antgroup.com/components/steps-cn#stepitem)[] | - | - |
| layout | 布局 | vertical \| horizontal | vertical | - |

- 更多 API 详见 antd Empty 文档: https://ant.design/components/Empty-cn
