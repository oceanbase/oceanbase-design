---
title: Modal
nav:
  title: General
  path: /components
markdown: |
  Modal displays content as a centered overlay above the current page. The underlying content is covered and inaccessible until the user completes the task or closes the modal. This pattern focuses user attention on the current task, suitable for scenarios requiring quick completion.

  ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/lI3EQ6WmlxgAAAAAAAAAAAAADv3-AQBr/original)
---

## Component Description

- 🔥 Fully inherits antd [Modal](https://ant.design/components/modal-cn) capabilities and API, seamless migration.
- 💄 Custom theme and styles, aligned with OceanBase Design specification.
- 📢 Default value of `destroyOnClose` is `true`.
- 🆕 Modal adds `extra` prop for bottom extra content.
- 🆕 Modal adds `document` prop for document link next to title.
- 🆕 New `Modal.Progress` component for async or long-running tasks.
- 🆕 `Modal.method()` static method supports ConfigProvider global config.

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic"></code>
<code src="./demo/no-title.tsx" title="No Title" description="Modal with empty title for debugging." debug></code>
<code src="./demo/no-footer.tsx" title="No Footer" description="Modal with empty footer for debugging." debug></code>
<code src="./demo/document.tsx" title="Document Link" description="Show document link icon next to title via `document` prop."></code>
<code src="./demo/extra.tsx" title="Bottom Extra Content" description="Set via `extra` prop."></code>
<code src="./demo/form.tsx" title="Form"></code>
<code src="./demo/scroll.tsx" title="Content Scroll" description="Limit max height and enable scroll."></code>
<code src="./demo/progress.tsx" title="Progress Modal" description="For async or long-running tasks."></code>
<code src="./demo/progress-with-loading.tsx" title="Progress Modal without Percentage" description="Shows loading when progress is unknown."></code>
<code src="./demo/static-function.tsx" title="Static Method" description="Supports ConfigProvider global config."></code>

## API

### Modal

| Parameter | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| destroyOnClose | Destroy child elements when Modal closes | boolean | true | 0.3.1 |
| document | Document link; supports string, function, or custom icon | string \| React.MouseEventHandler\<HTMLAnchorElement\> \| React.ReactNode | - | - |

- More API see antd Modal docs: https://ant.design/components/modal-cn#api

### Modal.Progress

| Parameter | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| width | Modal width | string \| number | 480 | - |
| maskClosable | Whether to close on mask click | boolean | false | - |
| destroyOnClose | Destroy child elements when Modal closes | boolean | true | 0.3.1 |
| title | Title | ReactNode | - | - |
| loading | Whether loading | boolean | false | - |
| progress | Progress bar props | [ProgressProps](https://ant-design.antgroup.com/components/progress-cn#api) | `{ type: 'circle', size: 150  }` | - |
| description | Description | ReactNode | - | - |
| footer | Footer content | ReactNode | null | - |
| extra | Extra footer content | ReactNode | null | - |

- More API see antd Modal docs: https://ant.design/components/modal-cn#api

### Modal.method()

- See antd Modal.method() docs https://ant.design/components/modal-cn#modalmethod
