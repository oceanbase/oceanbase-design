---
title: Tooltip
nav:
  title: General
  path: /components
---

- 🔥 Fully inherits antd [Tooltip](https://ant.design/components/tooltip-cn) capabilities and API, seamless migration.
- 💄 Custom theme and styles, aligned with OceanBase Design specification.
- 🆕 New `type` prop: `default`, `info`, `success`, `warning`, `error`.
- 🆕 New `mouseFollow` prop for mouse follow.
- 🆕 New `closeIcon` prop for close button.
- 🆕 New `onClose` prop, called when close button clicked; use with `open` and `onOpenChange` to control display.

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic"></code>
<code src="./demo/over-length.tsx" title="Over-length Content" description="1. Popup max width 300px, max height 250px; wrap horizontally, scroll vertically when overflow.<br>2. Use `overlayStyle={{ maxWidth: 'xxx' }}` for max width, `overlayInnerStyle={{ maxHeight: 'xxx' }}` for max height."></code>
<code src="./demo/close-icon.tsx" title="Close Button" description="Set closeIcon for closable Tooltip; supports custom close button. closeIcon true uses default. Closable Tooltip has onClose."></code>
<code src="./demo/type.tsx" title="Tooltip Types" description="Five types: default, info, success, warning, error for different hint needs."></code>
<code src="./demo/mouse-follow.tsx" title="Mouse Follow" description="`mouseFollow: true` enables mouse follow; removes arrow, and placement, open, trigger etc. are disabled."></code>
<code src="./demo/custom-offset.tsx" title="Custom Offset" description="Use `align.offset` for offset. Format `[x, y]` in pixels; x positive right, y positive down."></code>

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| type | Type | default \| info \| success \| warning \| error | default | - |
| mouseFollow | Follow mouse; when on, removes arrow, disables placement, open, closeIcon, trigger | boolean | false | - |
| closeIcon | Custom close button | boolean \| ReactNode | false | - |
| onClose | Callback when closed (e.preventDefault() to prevent default) | (e) => void | - | - |

- See antd Tooltip docs for more API: https://ant.design/components/tooltip-cn
