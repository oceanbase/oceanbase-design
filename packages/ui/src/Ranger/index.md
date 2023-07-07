---
title: Ranger 日期快速选择
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<code src="./demo/basic.tsx" title="基本"></code>

<code src="./demo/with-form.tsx" title="配合 Form 使用"></code>

<code src="./demo/selected.tsx" title="时间范围快捷选项"></code>

<code src="./demo/default-value.tsx" title="指定默认值"></code>

<code src="./demo/mini.tsx" title="mini 模式"></code>

<code src="./demo/quick-picker.tsx" title="单独使用"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| selects | 快速选择时间配置项 | RangeOption | [NEAR_1_MINUTES, NEAR_30_MINUTES, NEAR_1_HOURS] | - |
| value | DatePicker 控件的值 | Dayjs[] \| Moment[] | - | - |
| onChange | value 变化时的回调函数 | (range: Dayjs[] \| Moment[]) => void | noop | - |
| defaultValue | DatePicker 控件的默认值 | Dayjs[] \| Moment[] | - | - |
| defaultQuickValue | 快速选择的默认值（优先级低于 value/defaultValue） | string | - | - |
| mode | 渲染类型 | 'default' \| 'mini' | 'default' | - |
| pastOnly | 只能选择过去时间 | boolean | false | - |
| disabledDate | 不可选择的日期 | (currentDate: Dayjs \| Moment) => boolean | - | - |
| 其他 antd/RangePicker 的 `props` | [antd-RangePicker](https://ant.design/components/date-picker-cn/#RangePicker) | - | - | - |

### QuickPicker

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| selects | 快速选择时间配置项 | RangeOption | [NEAR_1_MINUTES, NEAR_30_MINUTES, NEAR_1_HOURS] | - |
| name | 快速选择的值 | - | - | - |
| defaultName | name 的默认值 | string | - | - |
| onNameChange | value 变化时的回调函数 | (name: string) => void | - | - |
| onChange | value 变化时的回调函数 | (range: Dayjs[] \| Moment[]) => void | noop | - |
| type | 渲染类型 | 'select' or 'dropdown' | 'select' | - |

### RangeOption

| 参数       | 说明                 | 类型                      | 默认值 | 版本 |
| :--------- | :------------------- | :------------------------ | :----- | :--- |
| name       | 快速选择的名称       | string                    | -      | -    |
| localeName | 快速选择的名称(英文) | string                    | -      | -    |
| range      | 选中的时间区间       | () => Dayjs[] \| Moment[] | -      | -    |
