---
title: DateRanger 新版日期时间选择
nav:
  title: 业务组件
  path: /biz-components
markdown: |
  用于指定日期和时间范围，并可以通过快捷操作向前、向后跳转时段或刷新当前时间。

  ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/hyMcRrWR4j0AAAAAAAAAAAAADv3-AQBr/original)
---

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本"></code>
<code src="./demo/simple-mode.tsx" title="极简模式"></code>
<code src="./demo/with-form.tsx" title="配合 Form 使用"></code>
<code src="./demo/rules.tsx" title="使用 rules 自定义校验"></code>
<code src="./demo/selected.tsx" title="时间范围快捷选项"></code>
<code src="./demo/default-value.tsx" title="指定默认值"></code>
<code src="./demo/locale.tsx" title="国际化"></code>
<code src="./demo/updateCurrentTime.tsx" title="从外部更新时间"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| selects | 快速选择时间配置项 | [RangeOption](#rangeoption) | [NEAR_1_MINUTES, NEAR_30_MINUTES, NEAR_1_HOURS,NEAR_3_HOURS, NEAR_6_HOURS, TODAY, LAST_3_DAYS] | - |
| value | DatePicker 控件的值 | Dayjs[] \| Moment[] | - | - |
| onChange | value 变化时的回调函数 | (range: Dayjs[] \| Moment[]) => void | noop | - |
| defaultValue | DatePicker 控件的默认值 | Dayjs[] \| Moment[] | - | - |
| defaultQuickValue | 快速选择的默认值（优先级低于 value/defaultValue） | string | - | - |
| isMoment | 是否使用 moment.js 作为时间插件 | boolean | - | - |
| hasRewind | 后退按钮 | boolean | true | - |
| hasForward | 前进按钮 | boolean | true | - |
| hasSync | 刷新按钮 | boolean | true | - |
| rules | 校验规则，设置字段的校验逻辑。[点击此处](#packages-ui-src-date-ranger-demo-rules)查看示例 | Rule[] | - | - |
| hasTagInPicker | 在选项面板中是否展示Tag | boolean | false | - |
| pastOnly | 只能选择过去时间 | boolean | false | - |
| disabledDate | 不可选择的日期 | (currentDate: Dayjs \| Moment) => boolean | - | - |
| simpleMode | 是否启用极简模式 | boolean | false | - |
| allowClear | 允许清空，仅普通模式支持，极简模式下不生效 | boolean | false | - |
| hideYear | 当时间范围在本年时，隐藏年份 | boolean | false | - |
| hideSecond | 隐藏"秒” | boolean | false | - |
| autoCalcRange | 自动计算时间范围并回显到选择器tag | boolean | false | - |
| ref | updateCurrentTime 手动更新当前时间 | function | - | - |
| 其他 antd/RangePicker 的 `props` | [antd-RangePicker](https://ant.design/components/date-picker-cn/#RangePicker) | - | - | - |

### RangeOption

| 参数       | 说明                   | 类型                      | 默认值 | 版本 |
| :--------- | :--------------------- | :------------------------ | :----- | :--- |
| label      | 快速选择的名称         | string                    | -      | -    |
| enLabel    | 快速选择的名称（英文） | string                    | -      | -    |
| name       | 选项标识               | string                    | -      | -    |
| rangeLabel | 快速选择的区间简写     | string                    | -      | -    |
| range      | 选中的时间区间         | () => Dayjs[] \| Moment[] | -      | -    |

### Rule

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| validator | 自定义校验，存在返回值时，会将对应位置标红并展示错误信息 | (value) => RuleErrorType \| RuleErrorType[] \| undefined | - | - |
| message | 错误信息 | string | - | - |

### RuleErrorType

`'all' | 'startDate' |  'startTime' | 'endDate' |   'endTime' |`
