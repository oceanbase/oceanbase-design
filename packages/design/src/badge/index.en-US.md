---
title: Badge
nav:
  title: General
  path: /components
demo:
  cols: 2
---

- 🔥 Fully inherits antd [Badge](https://ant.design/components/badge-cn) capabilities and API, seamless migration.
- 💄 Custom theme and styles, aligned with OceanBase Design specification.
- 🆕 New `icon` prop for status icon, only effective when `status` is set.
- 🆕 New `progressProps` prop for configuring progress info in icon mode when `processing` status.
- 📢 Default font color of status text inherits from parent element instead of always `token.colorText`, for better composition with other components.

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/status.tsx" title="Status Dot" description="Small dot for indicating status."></code>
<code src="./demo/status-icon.tsx" title="Status Icon" description="Use icon to indicate status for better perception."></code>
<code src="./demo/status-custom-icon.tsx" title="Custom Status Icon"></code>
<code src="./demo/status-inner.tsx" title="Status Dot and Icon with Other Components" description="Font size and color should inherit from parent element." debug></code>
<code src="./demo/count.tsx" title="Count Badge"></code>
<code src="./demo/count-independent.tsx" title="Standalone Count Badge" description="Not wrapping any element."></code>
<code src="./demo/dot.tsx" title="Badge Dot"></code>

<!-- <code src="./demo/ribbon.tsx" title="Ribbon Badge"></code> -->

## API

| Parameter | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| icon | Whether to use icon mode; shows default icon when true, custom icon when value is ReactNode | boolean \| React.ReactNode | false | - |
| progressProps | Progress info for `processing` status in icon mode | [ProgressProps](https://ant.design/components/progress-cn/) | - | - |

- More API see antd Badge docs: https://ant.design/components/badge-cn
