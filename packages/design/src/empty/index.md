---
title: Empty 空状态
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全兼容 antd [Empty](https://ant.design/components/Empty-cn) 的能力和 API，可无缝切换。
- 💄 定制插图、主题和样式，以符合 OceanBase Design 设计规范。
- 📢 不再区分默认图片和简单图片，即 PRESENTED_IMAGE_DEFAULT 和 PRESENTED_IMAGE_SIMPLE 图片相同。
- ⭐️ 新增 PRESENTED_IMAGE_COLORED 内置图片，用于页面和区块级的空状态场景。
- ⭐️ 新增 PRESENTED_IMAGE_GUIDE 内置图片，用于功能开通等引导类场景。
- 🆕 新增 `title` 属性，用于设置空状态标题。
- 🆕 新增 `steps` 属性，用于设置步骤提示。
- 🆕 新增 `layout` 属性，用于设置空状态布局，默认为 `vertical`。

## 代码演示

<code src="./demo/basic.tsx" title="默认" description="简单展示"></code>

<code src="./demo/complete.tsx" title="完整版" description="图片设置为 Empty.PRESENTED_IMAGE_COLORED，包含标题、描述和操作"></code>

<code src="./demo/complete-debug.tsx" title="完整版 debug" description="图片设置为 Empty.PRESENTED_IMAGE_COLORED，包含标题、描述和操作" debug></code>

<code src="./demo/image.tsx" title="自定义图片" description="可设置图片链接或 ReactNode"></code>

<code src="./demo/steps.tsx" title="步骤提示"></code>

<code src="./demo/horizontal.tsx" title="横向布局" description="图片设置为 PRESENTED_IMAGE_GUIDE，常用于功能开通等引导类场景"></code>

<code src="./demo/with-page-container.tsx" title="和页容器搭配使用"></code>

<code src="./demo/config-provider.tsx" title="全局组件的 Empty 样式"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| title | 标题 | React.ReactNode | horizontal | - |
| steps | 步骤提示 | [StepItem](https://ant-design.antgroup.com/components/steps-cn#stepitem)[] | - | - |
| layout | 布局 | vertical \| horizontal | vertical | - |

- 更多 API 详见 antd Empty 文档: https://ant.design/components/Empty-cn

## 内置图片

- RESENTED_IMAGE_DEFAULT 和 PRESENTED_IMAGE_SIMPLE

<p><div><img src="https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*mC4VR4Cg0GYAAAAAAAAAAAAADmfOAQ/original" /></div></p>

- PRESENTED_IMAGE_COLORED

<p><div><img src="https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*eDOqTIaukyQAAAAAAAAAAAAADmfOAQ/original" /></div></p>

- PRESENTED_IMAGE_GUIDE

<p><div><img src="https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*DH4BTJUbkIUAAAAAAAAAAAAADmfOAQ/original" /></div></p>
