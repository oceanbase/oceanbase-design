---
title: Tag
nav:
  title: General
  path: /components
---

- 🔥 Fully inherits antd [Tag](https://ant.design/components/tag-cn/) capabilities and API, seamless migration.
- 💄 Custom theme and styles, aligned with OceanBase Design specification.
- 🆕 New `critical` status color for severe scenarios (e.g. critical alert level).
- 🆕 New `pill` prop for pill-style tag.
- 🆕 New `ellipsis` prop for overflow ellipsis and Tooltip.
- 🆕 New `ellipsis="css"` lightweight mode: pure CSS truncation + native `title` (auto-derived from string children), zero measuring/Tooltip overhead, for tag-dense scenes such as detail pages and tables.

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic"></code>
<code src="./demo/status.tsx" title="Status Tag" description="Six status colors: `default`, `success`, `processing`, `error`, `warning`, `critical`."></code>
<code src="./demo/pill.tsx" title="Pill Tag" description="Pill shape via `pill` prop."></code>
<code src="./demo/control.tsx" title="Add and Remove"></code>
<code src="./demo/color.tsx" title="Color Tag" description="Preset colors for different scenarios; custom color supported."></code>
<code src="./demo/icon.tsx" title="Custom Icon and Color"></code>
<code src="./demo/borderless.tsx" title="Borderless"></code>
<code src="./demo/checkable.tsx" title="Checkable Tag"></code>
<code src="./demo/ellipsis.tsx" title="Over-length Ellipsis" description="Default mode based on overflow detection with Tooltip; for few tags, or when custom Tooltip content / placement is needed."></code>
<code src="./demo/ellipsis-css.tsx" title="Lightweight Ellipsis" description="`ellipsis='css'` uses pure CSS truncation + native `title`, no measuring or Tooltip overhead, ideal for tag-dense detail pages and tables. A width-constrained parent (e.g. `max-width`, flex layout) is required for the ellipsis to appear, and the hint must be plain text."></code>

## API

| Property | Description | Type | Default |
| :-- | :-- | :-- | :-- |
| pill | Whether pill style | `boolean` | false |
| ellipsis | Auto-ellipsis when over-length. `"css"` is the lightweight mode: pure CSS single-line truncation + native `title` (auto-derived from string children), no Tooltip and no measuring overhead, but a width-constrained parent (e.g. `max-width`, flex layout) is required for the ellipsis to appear; ideal for tag-dense scenes. `true` or an [EllipsisConfig](https://ant-design.antgroup.com/components/typography-cn#ellipsis) is the full mode: overflow detection + Tooltip, custom tooltip content and multi-line ellipsis supported | `boolean` \| [EllipsisConfig](https://ant-design.antgroup.com/components/typography-cn#ellipsis) \| `"css"` | true |

- See antd Tag docs: https://ant.design/components/tag-cn/
