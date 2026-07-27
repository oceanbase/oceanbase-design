---
title: Empty 空状态
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全兼容 antd [Empty](https://ant.design/components/Empty-cn) 的能力和 API，可无缝切换。
- 💄 定制插图、主题和样式，以符合 OceanBase Design 设计规范。
- 📢 不再区分默认图片和简单图片，即 PRESENTED_IMAGE_DEFAULT 和 PRESENTED_IMAGE_SIMPLE 图片相同。
- ⭐️ 新增 PRESENTED_IMAGE_COLORED 内置插图，用于页面和区块级的空状态场景。
- ⭐️ 新增 PRESENTED_IMAGE_DATABASE 内置插图，用于引导新建等场景。
- ⭐️ 新增 PRESENTED_IMAGE_GUIDE 内置插图，用于功能开通等引导类场景。
- 🆕 新增 `title` 属性，用于设置空状态标题。
- 🆕 新增 `steps` 属性，用于设置步骤提示。
- 🆕 新增 `layout` 属性，用于设置空状态布局，默认为 `vertical`。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="默认" description="简单展示。"></code>
<code src="./demo/complete.tsx" title="完整使用" description="图片为 Empty.PRESENTED_IMAGE_COLORED，包含标题、描述和操作。"></code>
<code src="./demo/complete-debug.tsx" title="完整使用 debug" description="图片为 Empty.PRESENTED_IMAGE_COLORED，包含标题、描述和操作" debug></code>
<code src="./demo/tab-switch.tsx" title="Tab 切换" debug></code>
<code src="./demo/database.tsx" title="引导新建插图" description="图片为 Empty.PRESENTED_IMAGE_DATABASE。"></code>
<code src="./demo/image.tsx" title="自定义图片" description="可设置图片链接或 ReactNode。"></code>
<code src="./demo/steps.tsx" title="步骤提示"></code>
<code src="./demo/over-length.tsx" title="超长内容" description="为了避免无限拉伸，限制描述区的最大宽度为 600px、步骤区的最大宽度为 1000px。"></code>
<code src="./demo/horizontal.tsx" title="横向布局" description="图片为 PRESENTED_IMAGE_GUIDE，常用于功能开通等引导类场景。"></code>
<code src="./demo/responsive.tsx" title="横向自适应" description="horizontal 布局在容器变窄时自动切换为纵向布局，并在更窄时隐藏插图。"></code>
<code src="./demo/with-page-container.tsx" title="和页容器搭配使用"></code>
<code src="./demo/config-provider.tsx" title="全局组件的 Empty 样式"></code>

## 内置插图

| 常量                                                  | 说明                 |
| :---------------------------------------------------- | :------------------- |
| `PRESENTED_IMAGE_DEFAULT`<br>`PRESENTED_IMAGE_SIMPLE` | 默认与简单空状态     |
| `PRESENTED_IMAGE_COLORED`                             | 页面和区块级空状态   |
| `PRESENTED_IMAGE_DATABASE`                            | 引导新建             |
| `PRESENTED_IMAGE_GUIDE`                               | 功能开通等引导类场景 |

<code src="./demo/built-in-images.tsx" inline></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| title | 标题 | React.ReactNode | horizontal | - |
| steps | 步骤提示 | [StepItem](https://ant-design.antgroup.com/components/steps-cn#stepitem)[] | - | - |
| layout | 布局 | vertical \| horizontal | vertical | - |

- 更多 API 详见 antd Empty 文档: https://ant.design/components/Empty-cn
