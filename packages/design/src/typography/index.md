---
title: Typography 排版
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全继承 antd [Typography](https://ant.design/components/typography-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 🆕 Typography.Text 新增 `caption` 属性，用于辅助描述的场景。
- 🆕 Typography.Text 和 Typography.Link 新增 `block` 属性，用于占据一整行的场景。
- 🆕 Typography.Text、Typography.Link、Typography.Paragraph 和 Typography.Title 的 `copyable` 新增 `hover` 配置，设为 `true` 时复制入口默认隐藏，仅在 hover 文本或键盘聚焦时展示；也可通过 `ConfigProvider` 的 `typography.copyable.hover` 全局设置。
- 🆕 Typography.Text、Typography.Paragraph 和 Typography.Title 的 `ellipsis` 默认展示完整文本的 Tooltip，可通过 `ellipsis.tooltip` 自定义提示内容与位置，或设置为 `false` 关闭（在 Typography 外层自行包裹 Tooltip 时建议关闭，避免出现两个提示）。
- 📢 Typography.Text 和 Typography.Paragraph 的默认字体颜色和行高，会继承父元素的设置，而不总是 `token.colorText` 和 `token.lineHeight`，便于和其他组件组合使用。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/title.tsx" title="标题"></code>
<code src="./demo/text.tsx" title="文本与超链接"></code>
<code src="./demo/text-caption.tsx" title="描述文本" description="通过 `caption` 进行设置，用于辅助描述的场景。字体大小为 12px，字重会根据中英文自动设置。"></code>
<code src="./demo/text-block.tsx" title="整行文本" description="通过 `block` 进行设置，用于占据一整行的场景。"></code>
<code src="./demo/ellipsis.tsx" title="省略号" description="支持单行、多行和可展开省略；`ellipsis` 开启后内容溢出会默认展示完整文本的 Tooltip。"></code>
<code src="./demo/copyable.tsx" title="可复制" description="通过 `copyable` 开启复制；`copyable.hover` 设为 `true` 时复制入口默认隐藏，仅在 hover 文本或键盘聚焦时展示。也可通过 [ConfigProvider](/components/config-provider#config-provider-demo-typography) 的 `typography.copyable.hover` 全局设置。"></code>
<code src="./demo/editable.tsx" title="可编辑"></code>
<code src="./demo/editable-modal.tsx" title="在 Modal 中编辑"></code>
<code src="./demo/font-family.tsx" title="字体" description="详见 [字体设计规范](/docs/spec/typography)。"></code>
<code src="./demo/inner.tsx" title="和其他组件组合使用" description="需要继承父组件的字体样式和行高" debug></code>

## API

### Typography.Text

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| caption | 辅助藐视 | boolean | false |  |
| block | 占据一整行 | boolean | false |  |
| copyable | 复制配置，`hover: true` 时复制入口仅在 hover 文本或键盘聚焦时展示 | boolean \| [CopyConfig](https://ant.design/components/typography-cn) & `{ hover?: boolean }` | - |  |
| ellipsis | 内容超长时自动省略，溢出时默认展示 Tooltip，可通过 `tooltip: false` 关闭 | boolean \| [EllipsisConfig](https://ant.design/components/typography-cn#ellipsis) | false |  |

### Typography.Link

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| block | 占据一整行 | boolean | false |  |
| copyable | 复制配置，`hover: true` 时复制入口仅在 hover 文本或键盘聚焦时展示 | boolean \| [CopyConfig](https://ant.design/components/typography-cn) & `{ hover?: boolean }` | - |  |
| ellipsis | 内容超长时自动省略 | boolean | false |  |

- `copyable.hover` 不会应用于纯图标型复制（未设置子元素），因为此时没有可 hover 的内容，复制入口会保持常驻展示。
- 可通过 `ConfigProvider` 的 `typography.copyable.hover` 全局设置；组件级 `copyable.hover` 优先级更高。
- 更多 API详见 antd Typography 文档: https://ant.design/components/typography-cn
