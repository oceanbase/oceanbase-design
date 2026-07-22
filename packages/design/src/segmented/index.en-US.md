---
title: Segmented
nav:
  title: General
  path: /components
---

- 🔥 Fully inherits antd [Segmented](https://ant.design/components/segmented-cn) capabilities and API, seamless migration.
- 💄 Custom theme and styles (color, width, etc.), aligned with OceanBase Design specification.
- 🆕 `options` adds `ellipsis` prop for ellipsis and Tooltip when content overflows.

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic"></code>
<code src="./demo/icon.tsx" title="With Icon"></code>
<code src="./demo/disabled.tsx" title="Disabled"></code>
<code src="./demo/size.tsx" title="Three Sizes"></code>
<code src="./demo/block.tsx" title="Block" description="`block` prop makes it fill parent width."></code>
<code src="./demo/ellipsis.tsx" title="Ellipsis" description="Overflow auto-ellipsis with tooltip; only when block enabled. Set via ellipsis prop."></code>
<code src="./demo/badge.tsx" title="With Badge" description="Show badge."></code>

## API

| Parameter | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| options | Option list | string[] \| number[] \| { label: ReactNode; value: string; icon?: ReactNode; disabled?: boolean; ellipsis?: [EllipsisConfig](https://ant.design/components/typography-cn#ellipsis); badge?: ReactNode \| [BadgeProps](https://ant.design/components/badge-cn#badge); className?: string }[] | [] | - |

- More API see antd Segmented docs: https://ant.design/components/segmented-cn
