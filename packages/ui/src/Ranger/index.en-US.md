---
title: Ranger
nav:
  title: Biz Components
  path: /biz-components
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic"></code>
<code src="./demo/with-form.tsx" title="With Form"></code>
<code src="./demo/selected.tsx" title="Time range quick options"></code>
<code src="./demo/default-value.tsx" title="Default value"></code>
<code src="./demo/mini.tsx" title="Mini mode"></code>
<code src="./demo/quick-picker.tsx" title="Standalone"></code>

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| selects | Quick select config | RangeOption | [NEAR_1_MINUTES, NEAR_30_MINUTES, NEAR_1_HOURS] | - |
| value | DatePicker value | Dayjs[] \| Moment[] | - | - |
| onChange | Value change callback | (range: Dayjs[] \| Moment[]) => void | noop | - |
| defaultValue | DatePicker default value | Dayjs[] \| Moment[] | - | - |
| defaultQuickValue | Default quick select (lower priority than value/defaultValue) | string | - | - |
| mode | Render type | default \| mini | default | - |
| pastOnly | Only allow past time | boolean | false | - |
| disabledDate | Disabled dates | (currentDate: Dayjs \| Moment) => boolean | - | - |
| quickPickerProps | QuickPicker props | QuickPickerProps | - | - |
| Other antd RangePicker props | [antd-RangePicker](https://ant.design/components/date-picker-cn/#RangePicker) | - | - | - |

### QuickPicker

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| selects | Quick select config | RangeOption | [NEAR_1_MINUTES, NEAR_30_MINUTES, NEAR_1_HOURS] | - |
| name | Quick select value | - | - | - |
| defaultName | Default name | string | - | - |
| onNameChange | Name change callback | (name: string) => void | - | - |
| onChange | Value change callback | (range: Dayjs[] \| Moment[]) => void | noop | - |
| type | Render type | select \| dropdown | select | - |

### RangeOption

| Property   | Description                 | Type                      | Default | Version |
| :--------- | :-------------------------- | :------------------------ | :------ | :------ |
| name       | Quick select name           | string                    | -       | -       |
| localeName | Quick select name (English) | string                    | -       | -       |
| range      | Selected time range         | () => Dayjs[] \| Moment[] | -       | -       |
