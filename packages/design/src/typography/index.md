---
title: Typography 排版
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全继承 antd [Typography](https://ant.design/components/typography-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 🆕 Typography.Text 新增 `caption` 属性，用于辅助描述的场景。
- 📢 Typography.Text 和 Typography.Paragraph 的默认字体颜色和行高，会继承父元素的设置，而不总是 `token.colorText` 和 `token.lineHeight`，便于和其他组件组合使用。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/title.tsx" title="标题"></code>
<code src="./demo/text.tsx" title="文本与超链接"></code>
<code src="./demo/text-caption.tsx" title="描述文本" description="通过 `caption` 进行设置，用于辅助描述的场景。字体大小为 12px，字重会根据中英文自动设置。"></code>
<code src="./demo/copyable.tsx" title="可复制"></code>
<code src="./demo/editable.tsx" title="可编辑"></code>
<code src="./demo/editable-modal.tsx" title="在 Modal 中编辑"></code>
<code src="./demo/font-family.tsx" title="字体" description="详见 [字体设计规范](/docs/spec/typography)。"></code>
<code src="./demo/inner.tsx" title="和其他组件组合使用" description="需要继承父组件的字体样式和行高" debug></code>

## API

### Typography.Text

| 参数    | 说明     | 类型    | 默认值 | 版本 |
| :------ | :------- | :------ | :----- | :--- |
| caption | 辅助藐视 | boolean | false  |      |

- 更多 API详见 antd Typography 文档: https://ant.design/components/typography-cn
