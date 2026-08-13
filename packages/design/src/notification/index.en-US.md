---
title: Notification
nav:
  title: Components
  path: /components
---

Use notifications for non-blocking task results or system feedback that can reach users across pages without interrupting their current work.

- 🔥 Extends antd [Notification](https://ant.design/components/notification) with OBUI 2.0 capabilities.
- 💄 Default placement is bottom left, fixed width 350px, linear icons with auto-close progress bar, and links in title/description automatically use the type color style.
- 🆕 Add `notification.loading` method to display long-running process status.
- 🆕 Add `errorDetails` property to display error information, supporting copy as Markdown format.
- 🆕 Add `dedupeKey` property to deduplicate notifications.
- 📌 **Use `notification` for all notification scenarios**; `message` remains as a compatibility alias implemented via Notification.

## Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic" description="Five types — info, success, warning, error, and loading — for common scenarios."></code>
<code src="./demo/placement.tsx" title="Placement" description="Defaults to `bottomLeft`."></code>
<code src="./demo/auto-close.tsx" title="Auto close" description="5s for title only, 10s with description; errors do not auto close; pause on hover."></code>
<code src="./demo/update.tsx" title="Update content" description="Use `key` to update the same notification, e.g. loading progress."></code>
<code src="./demo/error-details.tsx" title="Error details" description="Structured diagnostics for warning / error with collapse and Markdown copy."></code>
<code src="./demo/actions.tsx" title="Text link actions" description="Custom `<a>` or `Typography.Link` in `message` / `description`; styles match the notification type."></code>
<code src="./demo/dedupe.tsx" title="Dedupe" description="`dedupeKey` skips duplicates per type; different from `key`, which replaces in place."></code>
<code src="./demo/stack.tsx" title="Stack" description="Up to 3 stacked notifications."></code>
<code src="./demo/hooks.tsx" title="Hooks" description="Use `notification.useNotification()` to access ConfigProvider context."></code>

## Notification types

| Type | Meaning | Recommended usage |
| --- | --- | --- |
| info | Worth knowing | Background sync, cross-page updates; auto closes by default |
| success | Write succeeded | Create / save / submit success; 5s when title only |
| warning | Pay attention | Quota, permission, network issues; use `dedupeKey` for repeated alerts |
| error | Something went wrong | Does not auto close; include reassurance, cause, and next steps |
| loading | In progress | Long-running tasks; show ETA or stage, update via `key` |

## API

### Extended props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| errorDetails | Error details for warning / error | `ErrorDetailItem[]` | - |
| dedupeKey | Deduplicate by key per type; skips duplicates until the first one closes | `string` | - |

- See antd Notification：https://ant.design/components/notification for other APIs.

### `key` vs `dedupeKey`

|  | `key` | `dedupeKey` |
| --- | --- | --- |
| Same value called again | **Replaces** the existing notification | **Skips** the new notification |
| Typical use | Loading progress, export stage updates | Polling alerts, error storm prevention |
| After close | Can open a new notification with the same key | Can open again with the same dedupeKey |

### ErrorDetailItem

| Property | Description            | Type      | Default |
| -------- | ---------------------- | --------- | ------- |
| label    | Detail label           | `string`  | -       |
| value    | Detail value           | `string`  | -       |
| copyable | Include in copy output | `boolean` | `true`  |

### Defaults

| Behavior                    | Default                            |
| --------------------------- | ---------------------------------- |
| placement                   | `bottomLeft`                       |
| bottom                      | `24`                               |
| width                       | `350px`                            |
| stack                       | up to 3, 8px gap when expanded     |
| duration (title only)       | `5`                                |
| duration (with description) | `10`                               |
| duration (error)            | `0` (no auto close)                |
| showProgress                | enabled when auto closing          |
| pauseOnHover                | `true`                             |
| closable                    | `true` (close button always shown) |

Pass `duration` explicitly to override the auto-close strategy above.

### Methods

- `notification.loading(config)`: Show in-progress notification.
- `notification.useNotification()`: Returns a Hook API and `contextHolder`; insert `contextHolder` into the tree to consume ConfigProvider context.

### Message compatibility

| Legacy | Recommended |
| --- | --- |
| `message.success('Saved')` | `notification.success({ message: 'Saved' })` |
| `message.error('Failed')` | `notification.error({ message: 'Failed' })` |
| `message.loading('Processing', 0)` | `notification.loading({ message: 'Processing', duration: 0 })` |
| `message.useMessage()` | `notification.useNotification()` |

`message` remains as an antd Message-compatible alias implemented via Notification; prefer `notification` for new code.
