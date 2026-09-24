---
title: Descriptions
nav:
  title: General
  path: /components
---

- 🔥 Fully inherits antd [Descriptions](https://ant.design/components/descriptions-cn) capabilities and API, seamless migration.
- 💄 Custom theme and global styles, aligned with OceanBase Design specification.
- 🆕 In borderless mode, content overflow auto-ellipsis with `Tooltip`.
- 🆕 In borderless mode, `items` and Descriptions.Item add `contentProps` for ellipsis, edit, copy, etc.
- 🆕 New `collapsible` prop for expandable/collapsible content area.
- 🆕 New `contentAlign` prop for left-aligned content.

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic" description="Simple display."></code>
<code src="./demo/content.tsx" title="Content Display" description="Overflow auto-ellipsis with `Tooltip`. Set ellipsis, edit, copy via `contentProps`."></code>
<code src="./demo/ellipsis-css.tsx" title="Lightweight Ellipsis" description="`contentProps.ellipsis='css'` uses pure CSS truncation + native `title`, no measuring or Tooltip overhead, ideal for descriptions with many items. Set it once with the component-level `contentProps`, and override it with each item's `contentProps`. An item that enables `copyable` or `editable` falls back to the full mode so its inline action buttons are not clipped."></code>
<code src="./demo/collapsible.tsx" title="Collapsible" description="Content area can be expanded or collapsed."></code>
<code src="./demo/content-align.tsx" title="Content Left Align" description="Set `contentAlign` to `left` for left alignment, always single column."></code>
<code src="./demo/popover.tsx" title="In Popover" description="Left align + small size."></code>
<code src="./demo/debug-typography.tsx" title="Verify Typography in Various Scenarios" description="Ellipsis, edit, copy should work correctly." debug></code>
<code src="./demo/vertical.tsx" title="Vertical" description="Colon removed by default."></code>
<code src="./demo/bordered.tsx" title="Bordered"></code>
<code src="./demo/vertical-bordered.tsx" title="Vertical Bordered"></code>
<code src="./demo/size.tsx" title="Different Sizes"></code>

## API

| Parameter | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| collapsible | Whether collapsible | boolean | - | - |
| collapsed | Whether collapsed (controlled) | boolean | - | - |
| defaultCollapsed | Whether collapsed by default | boolean | false | - |
| onCollapse | Callback when collapse state changes | (collapsed: boolean) => void | - | - |
| contentAlign | Content alignment; set to `left` to align by longest label width | `left` | - | - |
| contentProps | Default content props for all items, overridden by each item's `contentProps`; only effective in borderless mode | [TextProps](https://ant.design/components/typography-cn#typographytext) | - | - |

### items and Descriptions.Item

| Parameter | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| contentProps | Content props; only effective in borderless mode. `ellipsis='css'` is the lightweight mode: pure CSS single-line truncation + native `title` (auto-derived from string children), no Tooltip and no measuring overhead, ideal for descriptions with many items; falls back to the full mode when `copyable` or `editable` is enabled | [TextProps](https://ant.design/components/typography-cn#typographytext) | - | - |

- More API see antd Descriptions docs: https://ant.design/components/descriptions-cn
