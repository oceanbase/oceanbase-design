---
title: Form
nav:
  title: General
  path: /components
---

- 🔥 Fully inherits antd [Form](https://ant.design/components/form-cn) capabilities and API, seamless migration.
- 💄 Custom theme and styles, aligned with OceanBase Design specification.
- 📢 Form `preserve` defaults to `true`.
- 📢 Form `requiredMark` defaults to `optional` style.
- 🆕 Form.Item `tooltip` adds `type` prop for different Tooltip types, see [Tooltip docs](/components/Tooltip).
- 🆕 Form.Item adds `description` prop for description before form control.

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic" description="Default optional style."></code>
<code src="./demo/requiredMark-same-with-antd.tsx" title="Required Style" description="Set via `requiredMark`."></code>
<code src="./demo/form-item-description.tsx" title="Description" description="Set description before form control via Form.Item `description`."></code>
<code src="./demo/form-item-extra.tsx" title="Extra Info" description="Set extra info after form control via Form.Item `extra`."></code>
<code src="./demo/form-item-tooltip.tsx" title="Tooltip" description="Set tooltip via Form.Item `tooltip`."></code>
<code src="./demo/form-item-action.tsx" title="Action" description="Set `action` on Form.Item, only for vertical layout."></code>
<code src="./demo/layout.tsx" title="Form Layout"></code>
<code src="./demo/multiple-layout.tsx" title="Mixed Layout"></code>
<code src="./demo/control-hooks.tsx" title="Form Methods"></code>
<code src="./demo/hideRequiredMark.tsx" title="hideRequiredMark" debug></code>
<code src="./demo/pro-form.tsx" title="ProForm" debug></code>

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| preserve | Preserve field value when removed. Use `getFieldsValue(true)` to get preserved values | boolean | false | 0.3.1 |
| requiredMark | Required or optional style. Form-level config, Form.Item cannot configure separately | boolean \| `optional` \| ((label: ReactNode, info: { required: boolean }) => ReactNode) | `optional` | - |

### Form.Item

| Property    | Description                                        | Type      | Default | Version |
| :---------- | :------------------------------------------------- | :-------- | :------ | :------ |
| action      | Action item, only for vertical layout              | ReactNode | -       | 0.4.10  |
| description | Description before input, only for vertical layout | ReactNode | -       | -       |

- See antd Form docs for more API: https://ant.design/components/form-cn
