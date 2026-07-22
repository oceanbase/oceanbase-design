---
title: Drawer
nav:
  title: General
  path: /components
---

- 🔥 Fully inherits antd [Drawer](https://ant.design/components/drawer-cn) capabilities and API, seamless migration.
- 💄 Custom theme and styles, aligned with OceanBase Design specification, e.g.:
  - Button area and primary button aligned left.
  - Dynamic header/footer shadow when content scrolls.
  - Footer sticks to bottom when content height >= drawer height; follows content when content is shorter.
- 📢 Default value of `destroyOnClose` is `true`.
- 🆕 New `document` prop for document link next to title.
- 🆕 New `footer` prop for drawer footer content, defaults to Cancel and OK buttons.
- 🆕 New `footerExtra` prop for extra footer content, only effective with default footer.
- 🆕 New `onOk` and `onCancel` props for Cancel and OK button callbacks.
- 🆕 New `cancelText` and `okText` props for button text.
- 🆕 New `okButtonProps` prop for OK button props.
- 🆕 New `confirmLoading` prop for OK button loading state.

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic Drawer" description="Default includes title and content."></code>
<code src="./demo/document.tsx" title="Document Link" description="Show document link icon next to title via `document` prop."></code>
<code src="./demo/footer.tsx" title="Enable Footer" description="Footer follows content when short; enable via `onOk` or `footer`."></code>
<code src="./demo/footerExtra.tsx" title="Footer Extra Content" description="Set via `footerExtra`, only effective with default footer."></code>
<code src="./demo/custom-footer.tsx" title="Custom Footer"></code>
<code src="./demo/confirmLoading.tsx" title="OK Button Loading"></code>
<code src="./demo/form-drawer.tsx" title="With Form" description="Use with Form for data collection."></code>
<code src="./demo/descriptions.tsx" title="For Detail Display" description="Use with Descriptions for detail display."></code>
<code src="./demo/over-height.tsx" title="Content Overflow" description="Supports scroll; footer sticks to bottom when content is long."></code>
<code src="./demo/loading.tsx" title="Loading"></code>

## API

| Parameter | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| destroyOnClose | Destroy child elements when Modal closes | boolean | true | - |
| document | Document link; supports string, function, or custom icon | string \| React.MouseEventHandler\<HTMLAnchorElement\> \| React.ReactNode | - | - |
| onOk | OK button click callback; enables default footer when set | (e) => void | - | - |
| onCancel | Cancel button click callback | (e) => void | - | - |
| cancelText | Cancel button text | string | Cancel | - |
| okText | OK button text | string | OK | - |
| okButtonProps | OK button props | ButtonProps | - | - |
| confirmLoading | OK button loading | boolean | - | - |
| footer | Drawer footer | boolean \| ReactNode | - | - |
| footerExtra | Extra footer content; only effective with default footer | ReactNode | - | - |

- More API see antd Drawer docs: https://ant.design/components/drawer-cn
