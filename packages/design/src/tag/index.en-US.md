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
<code src="./demo/ellipsis.tsx" title="Over-length Ellipsis"></code>

## API

| Property | Description | Type | Default |
| :-- | :-- | :-- | :-- |
| pill | Whether pill style | `boolean` | false |
| ellipsis | Auto-ellipsis when over-length | `boolean` \| [EllipsisConfig](https://ant-design.antgroup.com/components/typography-cn#ellipsis) | true |

- See antd Tag docs: https://ant.design/components/tag-cn/
