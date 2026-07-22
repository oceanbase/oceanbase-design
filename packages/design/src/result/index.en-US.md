---
title: Result
nav:
  title: General
  path: /components
---

- 🔥 Fully inherits antd [Result](https://ant.design/components/result-cn) capabilities and API, seamless migration.
- 💄 Custom illustration, theme and styles, aligned with OceanBase Design specification.
- 🆕 `status` prop adds `processing` enum for in-progress state.

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/success.tsx" title="Success"></code>
<code src="./demo/error.tsx" title="Error"></code>
<code src="./demo/warning.tsx" title="Warning"></code>
<code src="./demo/processing.tsx" title="Processing"></code>
<code src="./demo/403.tsx" title="403" description="No access permission."></code>
<code src="./demo/404.tsx" title="404" description="Page not found."></code>
<code src="./demo/500.tsx" title="500" description="Server error."></code>
<code src="./demo/icon.tsx" title="Custom Icon"></code>
<code src="./demo/over-length.tsx" title="Over-length Content" description="Max width 600px for subtitle, 1000px for content to avoid infinite stretch."></code>
<code src="./demo/with-page-container.tsx" title="With Page Container"></code>

## API

| Parameter | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| status | Status | success \| error \| warning \| processing \| info \| 403 \| 404 \| 500 | info | - |

- More API see antd Result docs: https://ant.design/components/result-cn
