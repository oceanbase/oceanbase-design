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
- 💡 支持 Tooltip 显示选中值，hover 时自动展示当前选中的内容。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/select.tsx" title="单选筛选" description="`Filter.Select` 单选筛选器的基本用法。"></code>
<code src="./demo/checkbox.tsx" title="多选筛选" description="`Filter.Checkbox` 多选筛选器，支持显示选中计数。<br />当 `options` 包含 `color` 属性时自动启用状态模式（显示重叠图标、使用 Badge 显示颜色）。"></code>
<code src="./demo/switch.tsx" title="开关筛选" description="`Filter.Switch` 开关筛选器，用于布尔值筛选场景。"></code>
<code src="./demo/input.tsx" title="输入筛选" description="`Filter.Input` 输入筛选器，带开关控制，只有开启开关后输入的值才会生效。"></code>
<code src="./demo/cascader.tsx" title="级联筛选" description="`Filter.Cascader` 级联筛选器，支持单选和多选模式。"></code>
<code src="./demo/range.tsx" title="时间段筛选" description="通过 `options` 属性设置时间段列表。"></code>
<code src="./demo/custom-render.tsx" title="自定义渲染" description="通过 `optionRender` 自定义选项的渲染。"></code>
<code src="./demo/extra.tsx" title="额外内容" description="通过 `extra` 属性可以在筛选器弹框的标签旁边显示额外内容，如提示信息、标签等。"></code>
<code src="./demo/wrap.tsx" title="筛选器容器" description="`Filter.Wrap` 筛选器容器，用于包裹多个筛选器，支持折叠模式。"></code>
<code src="./demo/responsive.tsx" title="响应式折叠" description="Filter.ResponsiveGroup 支持响应式布局，当容器宽度不足时自动将筛选器折叠到“筛选”按钮中。"></code>
<code src="./demo/always-collapse.tsx" title="始终折叠" description="通过 `alwaysCollapse` 属性，可以让某些筛选器无论容器宽度是否充足，都始终折叠到“筛选”按钮中。"></code> <code src="./demo/form.tsx" title="表单集成" description="使用 `Form.Item` 包裹筛选组件，点击 Apply 按钮时获取并输出所有表单值。"></code>

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
| showSuffixIcon | 是否显示后缀图标区域（包括下拉箭头和清除图标） | `boolean` | `true` |
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

多选筛选器。当 `options` 中包含 `color` 属性时，会自动启用状态模式（显示重叠状态图标、使用 Badge 显示颜色）。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 选项列表 | `CheckboxOption[]` | `[]` |
| value | 当前选中值 | `string[]` | - |
| onChange | 值变化回调 | `(value: string[]) => void` | - |
| count | 是否显示计数，可传入 `{ showTotal: true }` 同时显示总数 | `boolean \| { showTotal?: boolean }` | `false` |

#### CheckboxOption

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 选项标签 | `ReactNode` | - |
| value | 选项值 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| color | 状态颜色，如果提供则启用状态模式（显示重叠图标、使用 Badge 显示颜色） | `string` | - |

**状态模式说明：**

- 当 `options` 中包含 `color` 属性时，`Filter.Checkbox` 会自动启用状态模式
- 状态模式下，按钮上会显示重叠的状态图标（选中的显示彩色 Badge，未选中的显示白色圆圈）
- 选项列表中会使用 Badge 组件显示状态颜色
- `label` 为 `string` 类型时，会在 Badge 中显示；为 `ReactNode` 时，直接显示

**使用示例：**

```tsx
// 普通多选模式
<Filter.Checkbox
  options={[
    { value: 'option1', label: '选项一' },
    { value: 'option2', label: '选项二' },
  ]}
/>

// 状态模式（自动启用，当 options 包含 color 属性时）
<Filter.Checkbox
  options={[
    { value: 'success', label: '成功', color: '#52c41a' },
    { value: 'error', label: '失败', color: '#ff4d4f' },
  ]}
/>
```

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

### Filter.Range

时间段筛选器。

| 属性     | 说明       | 类型                              | 默认值                       |
| -------- | ---------- | --------------------------------- | ---------------------------- |
| options  | 时间段列表 | `RangeOption[]`                   | 默认提供最近 1/3/7/30 天选项 |
| value    | 当前选中值 | `[Dayjs, Dayjs]`                  | -                            |
| onChange | 值变化回调 | `(value: [Dayjs, Dayjs]) => void` | -                            |

#### RangeOption

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
| gap | 非折叠模式下的间距 | number | 8 |
| filterButtonRef | FilterButton 的 ref，用于控制弹窗关闭 | `React.RefObject<FilterButtonRef>` | - |

### Filter.ResponsiveGroup

响应式筛选器组，当宽度不足时自动将后面的筛选器收起到"更多"按钮中。

| 属性        | 说明                             | 类型                  | 默认值      |
| ----------- | -------------------------------- | --------------------- | ----------- |
| children    | 子元素                           | `ReactNode`           | -           |
| gap         | 容器间距                         | `number`              | `8`         |
| label       | FilterWrap 的 label              | `ReactNode`           | `'Filters'` |
| icon        | FilterWrap 的图标                | `ReactNode`           | -           |
| onApply     | 点击 Apply 按钮时的回调          | `() => void`          | -           |
| onClearAll  | 点击 Clear All 按钮时的回调      | `() => void`          | -           |
| showActions | 是否显示 Apply 和 Clear All 按钮 | `boolean`             | `true`      |
| style       | 容器样式                         | `React.CSSProperties` | -           |
| extra       | 额外内容                         | `ReactNode`           | -           |
| count       | 是否显示计数                     | `boolean`             | `true`      |

## Context

### FilterProvider

筛选器上下文 Provider，用于在折叠模式下共享状态。

```tsx | pure
import { FilterProvider, useFilterContext } from '@oceanbase/design';

// 在自定义组件中获取上下文
const MyComponent = () => {
  const { isCollapsed } = useFilterContext();
  // isCollapsed 为 true 时表示组件处于折叠模式
  return <div>{isCollapsed ? '折叠模式' : '普通模式'}</div>;
};
```

### useFilterContext

获取筛选器上下文，包含以下属性：

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| isCollapsed | 是否处于折叠模式 | `boolean` |
| filterValues | 当前所有筛选器的值 | `FilterValueItem[]` |
| updateFilterValue | 更新筛选器值 | `(id: string, label: ReactNode, value: FilterValue, options?: unknown[], componentName?: FilterComponentName) => void` |
| clearAllFilterValues | 清除所有筛选器值 | `() => void` |
