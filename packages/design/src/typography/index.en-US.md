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
- 🆕 Typography.Text, Typography.Link, Typography.Paragraph and Typography.Title support `copyable.hover`. When set to `true`, the copy entry is hidden by default and only shows on hover or keyboard focus. You can also set it globally via ConfigProvider `typography.copyable.hover`.
- 🆕 Typography.Text, Typography.Paragraph and Typography.Title show a Tooltip with the full text by default when `ellipsis` is enabled. Customize the tooltip content and placement with `ellipsis.tooltip`, or set it to `false` to disable (recommended when you already wrap Typography in your own Tooltip, to avoid two tooltips).
- 📢 Typography.Text and Typography.Paragraph default font color and line height inherit from parent instead of always `token.colorText` and `token.lineHeight`, for easier composition.

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/title.tsx" title="Title"></code>
<code src="./demo/text.tsx" title="Text and Link"></code>
<code src="./demo/text-caption.tsx" title="Caption" description="Set via `caption` for auxiliary description. Font size 12px, weight auto by locale."></code>
<code src="./demo/text-block.tsx" title="Block Text" description="Set via `block` to occupy a whole line."></code>
<code src="./demo/ellipsis.tsx" title="Ellipsis" description="Supports single line, multiple line and expandable ellipsis. A Tooltip with the full text is shown by default on overflow when `ellipsis` is enabled."></code>
<code src="./demo/copyable.tsx" title="Copyable" description="Enable copying with `copyable`; with `copyable.hover` set to `true`, the copy entry is hidden by default and only shows on hover or keyboard focus. You can also set it globally via [ConfigProvider](/components/config-provider#config-provider-demo-typography) `typography.copyable.hover`."></code>
<code src="./demo/editable.tsx" title="Editable"></code>
<code src="./demo/editable-modal.tsx" title="Edit in Modal"></code>
<code src="./demo/font-family.tsx" title="Font" description="See [typography spec](/docs/spec/typography)."></code>
<code src="./demo/inner.tsx" title="With Other Components" description="Inherit parent font and line height" debug></code>

## API

### Typography.Text

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| caption | Auxiliary description | boolean | false | - |
| block | Occupy a whole line | boolean | false | - |
| copyable | Copy config. With `hover: true`, the copy entry only shows on hover or keyboard focus | boolean \| [CopyConfig](https://ant.design/components/typography-cn) & `{ hover?: boolean }` | - | - |
| ellipsis | Auto ellipsis on overflow with a Tooltip by default, disable it with `tooltip: false` | boolean \| [EllipsisConfig](https://ant.design/components/typography-cn#ellipsis) | false | - |

### Typography.Link

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| block | Occupy a whole line | boolean | false | - |
| copyable | Copy config. With `hover: true`, the copy entry only shows on hover or keyboard focus | boolean \| [CopyConfig](https://ant.design/components/typography-cn) & `{ hover?: boolean }` | - | - |
| ellipsis | Auto ellipsis on overflow | boolean | false | - |

- `copyable.hover` does not apply to icon-only copyable (without children), since there is no visible content to hover. The copy entry stays visible in that case.
- You can set it globally via ConfigProvider `typography.copyable.hover`; component-level `copyable.hover` takes precedence.
- See antd Typography docs for more API: https://ant.design/components/typography-cn
