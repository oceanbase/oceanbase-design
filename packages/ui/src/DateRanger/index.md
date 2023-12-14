---
title: DateRanger 新日期快速选择
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<code src="./demo/basic.tsx" title="基本"></code>

<code src="./demo/with-form.tsx" title="配合 Form 使用"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| selects | 快速选择时间配置项 | RangeOption | [NEAR_1_MINUTES, NEAR_30_MINUTES, NEAR_1_HOURS] | - |
| value | DatePicker 控件的值 | Dayjs[] \| Moment[] | - | - |
| onChange | value 变化时的回调函数 | (range: Dayjs[] \| Moment[]) => void | noop | - |
| defaultValue | DatePicker 控件的默认值 | Dayjs[] \| Moment[] | - | - |
| defaultQuickValue | 快速选择的默认值（优先级低于 value/defaultValue） | string | - | - |
| mode | 渲染类型 | default \| mini | default | - |
| pastOnly | 只能选择过去时间 | boolean | false | - |
| disabledDate | 不可选择的日期 | (currentDate: Dayjs \| Moment) => boolean | - | - |
| 其他 antd/RangePicker 的 `props` | [antd-RangePicker](https://ant.design/components/date-picker-cn/#RangePicker) | - | - | - |

### RangeOption

| 参数       | 说明                 | 类型                      | 默认值 | 版本 |
| :--------- | :------------------- | :------------------------ | :----- | :--- |
| name       | 快速选择的名称       | string                    | -      | -    |
| localeName | 快速选择的名称(英文) | string                    | -      | -    |
| range      | 选中的时间区间       | () => Dayjs[] \| Moment[] | -      | -    |
