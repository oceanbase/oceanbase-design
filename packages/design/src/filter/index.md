---
title: Filter 筛选器
nav:
  title: 基础组件
  path: /components
demo:
  cols: 1
---

Filter 是一组轻量级的筛选组件，提供了多种筛选类型，适用于表格、列表等数据筛选场景。

## 特性

- 🎨 符合 OceanBase Design 设计规范。
- 🎯 轻量级设计，适合作为表格/列表的筛选条件。
- 🔧 支持多种筛选类型：单选、多选、级联、开关等。
- 📦 支持响应式布局，自动收起到"更多"按钮。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/select.tsx" title="单选筛选" description="`Filter.Select` 单选筛选器的基本用法。"></code>
<code src="./demo/checkbox.tsx" title="多选筛选" description="`Filter.Checkbox` 多选筛选器，支持显示选中计数。"></code>
<code src="./demo/status.tsx" title="状态筛选" description="`Filter.Status` 状态筛选器，用于多选状态场景，支持重叠显示状态图标。"></code>
<code src="./demo/switch.tsx" title="开关筛选" description="`Filter.Switch` 开关筛选器，用于布尔值筛选场景。"></code>
<code src="./demo/input.tsx" title="输入筛选" description="`Filter.Input` 输入筛选器，带开关控制，只有开启开关后输入的值才会生效。"></code>
<code src="./demo/cascader.tsx" title="级联筛选" description="`Filter.Cascader` 级联筛选器，支持单选和多选模式。"></code>
<code src="./demo/date.tsx" title="时间段筛选" description="通过 `options` 属性可以自定义日期范围"></code>
<code src="./demo/custom-render.tsx" title="自定义渲染" description="通过 `optionRender` 自定义选项的渲染。"></code>
<code src="./demo/extra.tsx" title="额外内容" description="通过 `extra` 属性可以在筛选器弹框的标签旁边显示额外内容，如提示信息、标签等。"></code>
<code src="./demo/responsive.tsx" title="响应式折叠" description="Filter.ResponsiveGroup 支持响应式布局，当容器宽度不足时自动将筛选器折叠到“筛选”按钮中。"></code>
<code src="./demo/always-collapse.tsx" title="始终折叠" description="通过 `alwaysCollapse` 属性，可以让某些筛选器无论容器宽度是否充足，都始终折叠到“筛选”按钮中。"></code> <code src="./demo/form.tsx" title="表单集成" description="使用 `Form.Item` 包裹筛选组件，点击 Apply 按钮时获取并输出所有表单值。"></code>

<!-- <code src="./demo/wrap.tsx" title="筛选器容器" description="`Filter.Wrap` 筛选器容器，用于包裹多个筛选器，支持折叠模式。"></code> -->

## API

### 公共属性 BaseFilterProps

以下属性适用于所有 Filter 子组件：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 前缀图标 | `ReactNode` | - |
| label | 筛选器标签 | `ReactNode` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| bordered | 是否显示边框 | `boolean` | `true` |
| footer | 底部操作区域 | `ReactNode` | - |
| extra | 额外内容，显示在筛选器弹框的标签旁边 | `ReactNode` | - |
| loading | 是否加载中 | `boolean` | `false` |
| collapsible | 是否可以被 ResponsiveGroup 收集到 Wrap 中 | `boolean` | `true` |
| alwaysCollapse | 是否始终折叠到"更多"按钮中，无论容器宽度是否充足 | `boolean` | `false` |
| trigger | 触发方式 | `'hover' \| 'click' \| 'focus'` | `'click'` |
| placement | 弹出位置 | `PopoverProps['placement']` | `'bottomLeft'` |

### Filter.Select

单选筛选器。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 选项列表 | `SelectOption[]` | `[]` |
| value | 当前选中值 | `string` | - |
| onChange | 值变化回调 | `(value: string) => void` | - |
| optionRender | 自定义渲染选项 | `(option: SelectOption, info: { index: number }) => ReactNode` | - |
| loading | 是否加载中 | `boolean` | `false` |

#### SelectOption

| 属性     | 说明     | 类型        | 默认值  |
| -------- | -------- | ----------- | ------- |
| label    | 选项标签 | `ReactNode` | -       |
| value    | 选项值   | `string`    | -       |
| disabled | 是否禁用 | `boolean`   | `false` |

### Filter.Checkbox

多选筛选器。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 选项列表 | `CheckboxOption[]` | `[]` |
| value | 当前选中值 | `string[]` | - |
| onChange | 值变化回调 | `(value: string[]) => void` | - |
| count | 是否显示计数，可传入 `{ showTotal: true }` 同时显示总数 | `boolean \| { showTotal?: boolean }` | `false` |

#### CheckboxOption

| 属性  | 说明     | 类型        | 默认值 |
| ----- | -------- | ----------- | ------ |
| label | 选项标签 | `ReactNode` | -      |
| value | 选项值   | `string`    | -      |

### Filter.Status

状态筛选器，用于多选状态场景，支持重叠显示状态图标。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 状态选项列表 | `StatusOption[]` | `[]` |
| value | 当前选中值 | `string[]` | - |
| onChange | 值变化回调 | `(value: string[]) => void` | - |
| count | 是否显示计数，可传入 `{ showTotal: true }` 同时显示总数 | `boolean \| { showTotal?: boolean }` | `false` |

#### StatusOption

| 属性     | 说明     | 类型      | 默认值  |
| -------- | -------- | --------- | ------- |
| label    | 状态文本 | `string`  | -       |
| value    | 状态值   | `string`  | -       |
| color    | 状态颜色 | `string`  | -       |
| disabled | 是否禁用 | `boolean` | `false` |

### Filter.Cascader

级联筛选器。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 选项列表 | `CascaderOption[]` | `[]` |
| value | 当前选中值，格式为 `[[parentValue, childValue], ...]` | `string[][]` | - |
| onChange | 值变化回调 | `(value: string[][]) => void` | - |
| multiple | 是否多选 | `boolean` | `false` |
| count | 是否显示计数，可传入 `{ showTotal: true }` 同时显示总数 | `boolean \| { showTotal?: boolean }` | `false` |

#### CascaderOption

| 属性     | 说明       | 类型                                     | 默认值 |
| -------- | ---------- | ---------------------------------------- | ------ |
| label    | 选项标签   | `ReactNode`                              | -      |
| value    | 选项值     | `string`                                 | -      |
| children | 子选项列表 | `{ label?: ReactNode; value: string }[]` | -      |

### Filter.Switch

开关筛选器。

| 属性        | 说明                  | 类型                       | 默认值 |
| ----------- | --------------------- | -------------------------- | ------ |
| value       | 当前值                | `boolean`                  | -      |
| onChange    | 值变化回调            | `(value: boolean) => void` | -      |
| switchProps | Switch 组件的额外属性 | `SwitchProps`              | -      |

### Filter.Input

输入筛选器（带开关控制）。

| 属性        | 说明                  | 类型                      | 默认值 |
| ----------- | --------------------- | ------------------------- | ------ |
| value       | 当前值                | `string`                  | -      |
| onChange    | 值变化回调            | `(value: string) => void` | -      |
| inputProps  | Input 组件的额外属性  | `InputProps`              | -      |
| switchProps | Switch 组件的额外属性 | `SwitchProps`             | -      |

### Filter.DatePreset

日期预设筛选器。

| 属性     | 说明         | 类型                              | 默认值                       |
| -------- | ------------ | --------------------------------- | ---------------------------- |
| options  | 预设选项列表 | `DatePresetOption[]`              | 默认提供最近 1/3/7/30 天选项 |
| value    | 当前选中值   | `[Dayjs, Dayjs]`                  | -                            |
| onChange | 值变化回调   | `(value: [Dayjs, Dayjs]) => void` | -                            |

#### DatePresetOption

| 属性  | 说明     | 类型                     | 默认值 |
| ----- | -------- | ------------------------ | ------ |
| label | 选项标签 | `ReactNode`              | -      |
| value | 选项值   | `[Dayjs, Dayjs] \| null` | -      |

### Filter.Wrap

筛选器容器，用于包裹多个筛选器。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 子元素 | `ReactNode` | - |
| label | 折叠模式下的标签 | `ReactNode` | `'Filters'` |
| collapsed | 是否折叠模式（使用弹框包裹所有子元素） | `boolean` | `false` |
| extra | 额外内容 | `ReactNode` | - |
| filterButtonRef | FilterButton 的 ref，用于控制弹窗关闭 | `React.RefObject<FilterButtonRef>` | - |

### Filter.ResponsiveGroup

响应式筛选器组，当宽度不足时自动将后面的筛选器收起到"更多"按钮中。

| 属性            | 说明                             | 类型                  | 默认值      |
| --------------- | -------------------------------- | --------------------- | ----------- |
| children        | 子元素                           | `ReactNode`           | -           |
| gap             | 容器间距                         | `number`              | `8`         |
| label           | FilterWrap 的 label              | `ReactNode`           | `'Filters'` |
| icon            | FilterWrap 的图标                | `ReactNode`           | -           |
| onApply         | 点击 Apply 按钮时的回调          | `() => void`          | -           |
| onClearAll      | 点击 Clear All 按钮时的回调      | `() => void`          | -           |
| showActions     | 是否显示 Apply 和 Clear All 按钮 | `boolean`             | `true`      |
| moreButtonWidth | 预留给"更多"按钮的宽度           | `number`              | `100`       |
| style           | 容器样式                         | `React.CSSProperties` | -           |
| extra           | 额外内容                         | `ReactNode`           | -           |

## 使用场景

### 表格筛选

Filter 组件最适合用于表格、列表等数据展示场景的筛选功能：

```tsx
import { Filter, Table } from '@oceanbase/design';

const App = () => {
  return (
    <div>
      <Filter.ResponsiveGroup>
        <Filter.Select label="状态" options={[...]} />
        <Filter.Checkbox label="类型" options={[...]} />
      </Filter.ResponsiveGroup>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};
```

### 响应式布局

使用 `Filter.ResponsiveGroup` 可以自动处理响应式布局，当容器宽度不足时自动折叠：

```tsx
<Filter.ResponsiveGroup
  onApply={handleApply}
  onClearAll={handleClearAll}
>
  <Filter.Select label="状态" options={[...]} />
  <Filter.Select label="类型" options={[...]} />
  {/* 当宽度不足时，后面的筛选器会自动折叠 */}
</Filter.ResponsiveGroup>
```

### 折叠模式

使用 `Filter.Wrap` 可以将多个筛选器折叠到一个按钮中：

```tsx
<Filter.Wrap collapsed label="筛选条件">
  <Filter.Select label="状态" options={[...]} />
  <Filter.Checkbox label="类型" options={[...]} />
</Filter.Wrap>
```

## 最佳实践

### 1. 选择合适的筛选类型

- **Filter.Select**: 适用于单选场景，选项数量较少（建议 < 10 个）
- **Filter.Checkbox**: 适用于多选场景，选项数量适中
- **Filter.Cascader**: 适用于有层级关系的筛选场景
- **Filter.Status**: 适用于状态筛选，需要视觉化展示状态
- **Filter.Switch**: 适用于布尔值筛选（开启/关闭）
- **Filter.Input**: 适用于文本搜索场景，需要开关控制
- **Filter.DatePreset**: 适用于日期范围筛选

### 2. 响应式布局建议

- 使用 `Filter.ResponsiveGroup` 处理响应式布局
- 对于不常用的筛选器，设置 `alwaysCollapse={true}` 始终折叠
- 合理设置 `moreButtonWidth` 预留"更多"按钮的宽度

### 3. 性能优化

- 对于大量选项，考虑使用 `optionRender` 自定义渲染
- 使用受控模式时，合理使用 `useMemo` 优化选项列表
- 避免在 `onChange` 回调中执行重计算操作

### 4. 用户体验

- 提供清晰的标签说明
- 使用 `footer` 属性提供额外提示信息
- 对于重要筛选器，使用 `extra` 属性显示额外说明
- 合理使用 `loading` 状态提示数据加载

## Context

### FilterProvider

筛选器上下文 Provider，用于在折叠模式下共享状态。

```tsx | pure
import { FilterProvider, useFilterContext } from '@oceanbase/design';

// 在自定义组件中获取上下文
const MyComponent = () => {
  const { isWrapped } = useFilterContext();
  // isWrapped 为 true 时表示组件在折叠模式的 Wrap 中
  return <div>{isWrapped ? '折叠模式' : '普通模式'}</div>;
};
```

### useFilterContext

获取筛选器上下文，包含以下属性：

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| isWrapped | 是否在折叠模式的 Wrap 中 | `boolean` |
| filterValues | 当前所有筛选器的值 | `FilterValueItem[]` |
| updateFilterValue | 更新筛选器值 | `(id: string, label: ReactNode, value: FilterValue, options?: unknown[], componentName?: FilterComponentName) => void` |
| clearAllFilterValues | 清除所有筛选器值 | `() => void` |
