---
title: Result
nav:
  title: General
  path: /components
---

- 🔥 Fully inherits antd [Result](https://ant.design/components/result-cn) capabilities and API, seamless migration.
- 💄 Custom illustration, theme and styles, aligned with OceanBase Design specification.
- 🆕 `status` prop adds `processing` and `normal` enum values.
- 🆕 Added `PRESENTED_IMAGE_NOT_FOUND`, `PRESENTED_IMAGE_NETWORK_ERROR`, `PRESENTED_IMAGE_VERSION_UPDATE` built-in illustrations.

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/success.tsx" title="Success"></code>
<code src="./demo/error.tsx" title="Error"></code>
<code src="./demo/warning.tsx" title="Warning"></code>
<code src="./demo/processing.tsx" title="Processing"></code>
<code src="./demo/normal.tsx" title="Normal"></code>
<code src="./demo/403.tsx" title="403" description="No access permission."></code>
<code src="./demo/404.tsx" title="404" description="Page not found."></code>
<code src="./demo/500.tsx" title="500" description="Server error."></code>
<code src="./demo/presented-images.tsx" title="More Built-in Illustrations" description="Use PRESENTED_IMAGE_* via icon prop."></code>
<code src="./demo/icon.tsx" title="Custom Icon"></code>
<code src="./demo/over-length.tsx" title="Over-length Content" description="Max width 600px for subtitle, 1000px for content to avoid infinite stretch."></code>
<code src="./demo/with-page-container.tsx" title="With Page Container"></code>

## Built-in Illustrations

### Via status

<code src="./demo/built-in-images-status.en-US.tsx" inline></code>

### Via icon

Use via `icon={<Result.PRESENTED_IMAGE_* />}`:

<code src="./demo/built-in-images-icon.en-US.tsx" inline></code>

## API

| Parameter | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| status | Status | success \| error \| warning \| processing \| normal \| info \| 403 \| 404 \| 500 | info | - |

- More API see antd Result docs: https://ant.design/components/result-cn
