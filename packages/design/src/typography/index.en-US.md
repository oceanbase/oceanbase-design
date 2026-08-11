---
title: Typography
nav:
  title: General
  path: /components
---

- 🔥 Fully inherits antd [Typography](https://ant.design/components/typography-cn) capabilities and API, seamless migration.
- 💄 Custom theme and styles, aligned with OceanBase Design specification.
- 🆕 Typography.Text adds `caption` prop for auxiliary description.
- 🆕 Typography.Text and Typography.Link add `block` prop for occupying a whole line.
- 📢 Typography.Text and Typography.Paragraph default font color and line height inherit from parent instead of always `token.colorText` and `token.lineHeight`, for easier composition.

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/title.tsx" title="Title"></code>
<code src="./demo/text.tsx" title="Text and Link"></code>
<code src="./demo/text-caption.tsx" title="Caption" description="Set via `caption` for auxiliary description. Font size 12px, weight auto by locale."></code>
<code src="./demo/text-block.tsx" title="Block Text" description="Set via `block` to occupy a whole line."></code>
<code src="./demo/copyable.tsx" title="Copyable"></code>
<code src="./demo/editable.tsx" title="Editable"></code>
<code src="./demo/editable-modal.tsx" title="Edit in Modal"></code>
<code src="./demo/font-family.tsx" title="Font" description="See [typography spec](/docs/spec/typography)."></code>
<code src="./demo/inner.tsx" title="With Other Components" description="Inherit parent font and line height" debug></code>

## API

### Typography.Text

| Property | Description           | Type    | Default | Version |
| :------- | :-------------------- | :------ | :------ | :------ |
| caption  | Auxiliary description | boolean | false   | -       |
| block    | Occupy a whole line   | boolean | false   | -       |

### Typography.Link

| Property | Description         | Type    | Default | Version |
| :------- | :------------------ | :------ | :------ | :------ |
| block    | Occupy a whole line | boolean | false   | -       |

- See antd Typography docs for more API: https://ant.design/components/typography-cn
