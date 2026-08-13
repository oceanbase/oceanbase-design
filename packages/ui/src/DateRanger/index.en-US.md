---
title: DateRanger
nav:
  title: Biz Components
  path: /biz-components
markdown: |
  For specifying date and time ranges, with quick actions to jump forward/backward or refresh the current time.

  ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/hyMcRrWR4j0AAAAAAAAAAAAADv3-AQBr/original)
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic"></code>
<code src="./demo/simple-mode.tsx" title="Simple mode"></code>
<code src="./demo/with-form.tsx" title="With Form"></code>
<code src="./demo/rules.tsx" title="Custom validation with rules"></code>
<code src="./demo/selected.tsx" title="Time range quick options"></code>
<code src="./demo/default-value.tsx" title="Default value"></code>
<code src="./demo/locale.tsx" title="Internationalization"></code>
<code src="./demo/updateCurrentTime.tsx" title="Update time from external"></code>
<code src="./demo/history.tsx" title="History"></code>
<code src="./demo/copy-paste.tsx" title="Copy and paste time"></code>

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| selects | Quick select config | [RangeOption](#rangeoption) | [NEAR_1_MINUTES, NEAR_30_MINUTES, NEAR_1_HOURS,NEAR_3_HOURS, NEAR_6_HOURS, TODAY, LAST_3_DAYS] | - |
| value | DatePicker value | Dayjs[] \| Moment[] | - | - |
| onChange | Callback when value changes | (range: Dayjs[] \| Moment[]) => void | noop | - |
| defaultValue | DatePicker default value | Dayjs[] \| Moment[] | - | - |
| defaultQuickValue | Default quick select (lower priority than value/defaultValue) | string | - | - |
| isMoment | Use moment.js for dates | boolean | - | - |
| hasRewind | Rewind button | boolean | true | - |
| hasForward | Forward button | boolean | true | - |
| hasSync | Refresh button | boolean | true | - |
| rules | Validation rules. [See example](#packages-ui-src-date-ranger-demo-rules) | Rule[] | - | - |
| hasTagInPicker | Show Tag in option panel | boolean | false | - |
| pastOnly | Only allow past time | boolean | false | - |
| disabledDate | Disabled dates | (currentDate: Dayjs \| Moment) => boolean | - | - |
| simpleMode | Enable simple mode | boolean | false | - |
| allowClear | Allow clear (normal mode only) | boolean | false | - |
| hideYear | Hide year when range is in current year | boolean | false | - |
| hideSecond | Hide seconds | boolean | false | - |
| autoCalcRange | Auto calculate range and display in picker tag | boolean | false | - |
| autoAdjustOverflow | Auto adjust position when panel is clipped | boolean | true | - |
| overlayClassName | Overlay root class name | string | - | - |
| overlayStyle | Overlay root style | CSSProperties | - | - |
| ref | updateCurrentTime for manual time update | function | - | - |
| history | Enable history, config max records (default 20) | boolean \| { capacity: number } | false | - |
| Other antd RangePicker props | [antd-RangePicker](https://ant.design/components/date-picker-cn/#RangePicker) | - | - | - |

### RangeOption

| Property   | Description                  | Type                      | Default | Version |
| :--------- | :--------------------------- | :------------------------ | :------ | :------ |
| label      | Quick select label           | string                    | -       | -       |
| enLabel    | Quick select label (English) | string                    | -       | -       |
| name       | Option identifier            | string                    | -       | -       |
| rangeLabel | Quick select range shorthand | string                    | -       | -       |
| range      | Selected time range          | () => Dayjs[] \| Moment[] | -       | -       |

### Rule

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| validator | Custom validator, return value marks error and shows message | (value) => RuleErrorType \| RuleErrorType[] \| undefined | - | - |
| message | Error message | string | - | - |

### RuleErrorType

`'all' | 'startDate' |  'startTime' | 'endDate' |   'endTime' |`
