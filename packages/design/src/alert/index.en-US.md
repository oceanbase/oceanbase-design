---
title: Alert
nav:
  title: General
  path: /components
markdown: |
  Displays prominent information and optional related actions in a banner format.

  ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/3jjcQ6Q0uIIAAAAAAAAAAAAADv3-AQBr/original)
---

## Component Description

- 🔥 Fully inherits antd [Alert](https://ant.design/components/alert-cn) capabilities and API, seamless migration.
- 💄 Custom theme and styles, aligned with OceanBase Design specification.
- 📢 `showIcon` defaults to true, supports transparent background.
- 🆕 New `ghost` prop for transparent background.
- 🆕 New `mini` prop for ultra-lightweight information reminder.

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/type.tsx" title="Four Types" description="Four types: `success`, `info`, `warning`, `error`. Default is `info`."></code>
<code src="./demo/description.tsx" title="Description"></code>
<code src="./demo/mini.tsx" title="Mini Mode" description="For lightweight information reminder, more compact size."></code>
<code src="./demo/closable.tsx" title="Closable Alert" description="Shows close button, click to close the alert."></code>
<code src="./demo/action.tsx" title="Action" description="Custom action items."></code>
<code src="./demo/link.tsx" title="Link"></code>
<code src="./demo/ghost.tsx" title="Transparent Background"></code>
<code src="./demo/banner.tsx" iframe="250" title="Top Banner" description="Page top announcement format, default has icon and `type` is 'warning'."></code>
<code src="./demo/loop-banner.tsx" title="Carousel Banner" description="Works with [react-text-loop-next](https://npmjs.com/package/react-text-loop-next) or [react-fast-marquee](https://npmjs.com/package/react-fast-marquee) for message carousel notification bar."></code>
<code src="./demo/error-boundary.tsx" title="React Error Boundary" description="Friendly [React error handling](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html) wrapper component.
"></code>
<code src="./demo/over-length.tsx" title="Over-length Content" debug></code>

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| ghost | Whether to use transparent background; when enabled, removes background, border and inner padding, suitable for lightweight hints or embedded hints | boolean | false | - |
| mini | Whether to use mini mode for ultra-lightweight information reminder, more compact size | boolean | false | - |

- See antd Alert docs for more API: https://ant.design/components/alert-cn
