---
title: Filter
nav:
  title: General
  path: /components
demo:
  cols: 1
---

Filter is a lightweight set of filter components with multiple filter types, suitable for table, list and other data filtering scenarios.

## Features

- 🎨 Aligned with OceanBase Design specification.
- 🎯 Lightweight design, suitable as table/list filter conditions.
- 🔧 Multiple filter types: single select, multi select, cascader, switch, etc.
- 📦 Responsive layout, auto-collapse into "More" button.
- 💡 Tooltip shows selected value on hover.

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/select.tsx" title="Single Select Filter" description="Basic usage of `Filter.Select`."></code>
<code src="./demo/checkbox.tsx" title="Multi Select Filter" description="`Filter.Checkbox` with optional selected count.<br>When `options` includes `color`, status mode is enabled (overlap icon, Badge for color)."></code>
<code src="./demo/switch.tsx" title="Switch Filter" description="`Filter.Switch` for boolean filtering."></code>
<code src="./demo/input.tsx" title="Input Filter" description="`Filter.Input` with switch; value applies only when switch is on."></code>
<code src="./demo/cascader.tsx" title="Cascader Filter" description="`Filter.Cascader` supports single and multiple modes."></code>
<code src="./demo/range.tsx" title="Time Range Filter" description="Set time range list via `options`."></code>
<code src="./demo/custom-render.tsx" title="Custom Render" description="Custom option render via `optionRender`."></code>
<code src="./demo/extra.tsx" title="Extra Content" description="Show extra content (hint, tag) next to label in filter popup via `extra`."></code>
<code src="./demo/wrap.tsx" title="Filter Container" description="`Filter.Wrap` wraps multiple filters, supports collapse mode."></code>
<code src="./demo/responsive.tsx" title="Responsive Collapse" description="Filter.ResponsiveGroup auto-collapses filters into 'Filter' button when width is insufficient."></code>
<code src="./demo/always-collapse.tsx" title="Always Collapsed" description="`alwaysCollapse` keeps certain filters always in 'Filter' button regardless of width."></code> 
<code src="./demo/slot.tsx" title="Custom Slot" description="`Filter.Slot` integrates custom components (tag picker, rating, etc.) into Filter with responsive collapse."></code>
<code src="./demo/form.tsx" title="Form Integration" description="Wrap filter components with `Form.Item`, get all form values on Apply click."></code>
<code src="./demo/complex.tsx" title="Complex Scenario" description="For page-top multi-action scenarios"></code>

## Use Cases

### Table Filtering

Filter works best for table and list data filtering:

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

### Responsive Layout

`Filter.ResponsiveGroup` handles responsive layout; filters auto-collapse when width is insufficient:

```tsx
<Filter.ResponsiveGroup
  onApply={handleApply}
  onClearAll={handleClearAll}
>
  <Filter.Select label="状态" options={[...]} />
  <Filter.Select label="类型" options={[...]} />
  {/* Filters auto-collapse when width is insufficient */}
</Filter.ResponsiveGroup>
```

### Collapse Mode

`Filter.Wrap` collapses multiple filters into one button:

```tsx
<Filter.Wrap collapsed label="筛选条件">
  <Filter.Select label="状态" options={[...]} />
  <Filter.Checkbox label="类型" options={[...]} />
</Filter.Wrap>
```

## API

### BaseFilterProps (Common)

Applies to all Filter sub-components:

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| icon | Prefix icon | `ReactNode` | - |
| label | Filter label | `ReactNode` | - |
| disabled | Whether disabled | `boolean` | `false` |
| bordered | Whether to show border | `boolean` | `true` |
| footer | Footer action area | `ReactNode` | - |
| extra | Extra content next to label in filter popup | `ReactNode` | - |
| loading | Whether loading | `boolean` | `false` |
| collapsible | Whether collectable by ResponsiveGroup into Wrap | `boolean` | `true` |
| alwaysCollapse | Always collapse into "More" regardless of width | `boolean` | `false` |
| showSuffixIcon | Whether to show suffix icon (dropdown arrow, clear icon) | `boolean` | `true` |
| trigger | Trigger mode | `'hover' \| 'click' \| 'focus'` | `'click'` |
| placement | Popup position | `PopoverProps['placement']` | `'bottomLeft'` |
| allowClear | Show clear icon | boolean | `true` |

### Filter.Select

Single select filter.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| options | Option list | `SelectOption[]` | `[]` |
| value | Current value | `string` | - |
| onChange | Value change callback | `(value: string) => void` | - |
| optionRender | Custom option render | `(option: SelectOption, info: { index: number }) => ReactNode` | - |
| showSearch | Whether to show search | `boolean` | `false` |
| loading | Whether loading | `boolean` | `false` |

#### SelectOption

| Property | Description      | Type        | Default |
| -------- | ---------------- | ----------- | ------- |
| label    | Option label     | `ReactNode` | -       |
| value    | Option value     | `string`    | -       |
| disabled | Whether disabled | `boolean`   | `false` |

### Filter.Checkbox

Multi select filter. When `options` includes `color`, status mode is enabled (overlap icon, Badge for color).

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| options | Option list | `CheckboxOption[]` | `[]` |
| value | Current value | `string[]` | - |
| onChange | Value change callback | `(value: string[]) => void` | - |
| count | Whether to show count; pass `{ showTotal: true }` for total | `boolean \| { showTotal?: boolean }` | `false` |
| showSearch | Whether to show search | `boolean` | `false` |

#### CheckboxOption

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| label | Option label | `ReactNode` | - |
| value | Option value | `string` | - |
| disabled | Whether disabled | `boolean` | `false` |
| color | Status color; when provided enables status mode (overlap icon, Badge for color) | `string` | - |

**Status mode:**

- When `options` includes `color`, `Filter.Checkbox` enables status mode
- In status mode, overlap icon on button (selected shows colored Badge, unselected shows white circle)
- Option list uses Badge for status color
- When `label` is string, shown in Badge; when ReactNode, shown directly

**Example:**

```tsx
// Normal multi select
<Filter.Checkbox
  options={[
    { value: 'option1', label: '选项一' },
    { value: 'option2', label: '选项二' },
  ]}
/>

// Status mode (auto when options include color)
<Filter.Checkbox
  options={[
    { value: 'success', label: '成功', color: '#52c41a' },
    { value: 'error', label: '失败', color: '#ff4d4f' },
  ]}
/>
```

### Filter.Cascader

Cascader filter.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| options | Option list | `CascaderOption[]` | `[]` |
| value | Current value, format `[[parentValue, childValue], ...]` | `string[][]` | - |
| onChange | Value change callback | `(value: string[][]) => void` | - |
| multiple | Whether multiple | `boolean` | `false` |
| count | Whether to show count; pass `{ showTotal: true }` for total | `boolean \| { showTotal?: boolean }` | `false` |
| showSearch | Whether to show search (parent and child) | `boolean` | `false` |
| flat | Whether flat display, for 3+ level cascader | `boolean` | `false` |

#### CascaderOption

| Property | Description   | Type                                     | Default |
| -------- | ------------- | ---------------------------------------- | ------- |
| label    | Option label  | `ReactNode`                              | -       |
| value    | Option value  | `string`                                 | -       |
| children | Child options | `{ label?: ReactNode; value: string }[]` | -       |

### Filter.Switch

Switch filter.

| Property    | Description           | Type                       | Default |
| ----------- | --------------------- | -------------------------- | ------- |
| value       | Current value         | `boolean`                  | -       |
| onChange    | Value change callback | `(value: boolean) => void` | -       |
| switchProps | Extra Switch props    | `SwitchProps`              | -       |

### Filter.Input

Input filter (with switch control).

| Property    | Description           | Type                      | Default |
| ----------- | --------------------- | ------------------------- | ------- |
| value       | Current value         | `string`                  | -       |
| onChange    | Value change callback | `(value: string) => void` | -       |
| inputProps  | Extra Input props     | `InputProps`              | -       |
| switchProps | Extra Switch props    | `SwitchProps`             | -       |

### Filter.Range

Time range filter.

| Property | Description           | Type                              | Default            |
| -------- | --------------------- | --------------------------------- | ------------------ |
| options  | Time range list       | `RangeOption[]`                   | Last 1/3/7/30 days |
| value    | Current value         | `[Dayjs, Dayjs]`                  | -                  |
| onChange | Value change callback | `(value: [Dayjs, Dayjs]) => void` | -                  |

#### RangeOption

| Property | Description  | Type                     | Default |
| -------- | ------------ | ------------------------ | ------- |
| label    | Option label | `ReactNode`              | -       |
| value    | Option value | `[Dayjs, Dayjs] \| null` | -       |

### Filter.Slot

Custom filter slot. Integrates custom components via `value`/`onChange` on Filter.Slot; injected into child via `cloneElement`.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| dropdownRender | Custom content in Popover; uses FilterButton + Popover mode when set | `ReactNode` | - |
| children | Direct render content, no FilterButton + Popover wrapper, only responsive container | `ReactNode` | - |
| value | Current filter value | `any` | - |
| defaultValue | Default filter value | `any` | - |
| onChange | Value change callback | `(value: any) => void` | - |
| formatValue | Format value for display (FilterButton label, collapsed Tooltip) | `(value: any) => string` | - |
| placeholder | Placeholder when no value | `string` | `'请选择'` |

**Example:**

```tsx
// dropdownRender mode: custom content in Popover
// value/onChange on Filter.Slot, TagPicker gets them automatically
<Filter.Slot
  label="标签"
  icon={<TagOutlined />}
  value={tags}
  onChange={setTags}
  formatValue={val => val?.join(', ')}
  dropdownRender={<MyCustomTagPicker />}
/>

// children direct render: responsive collection only
// value/onChange auto-injected to Input
<Filter.Slot
  label="搜索"
  value={keyword}
  onChange={setKeyword}
  formatValue={val => val}
>
  <Input prefix={<SearchOutlined />} placeholder="搜索..." />
</Filter.Slot>

// With Form.Item
<Form.Item name="customField" noStyle>
  <Filter.Slot
    label="自定义"
    formatValue={val => val?.name || ''}
    dropdownRender={<MyCustomSelector />}
  />
</Form.Item>
```

### Filter.Wrap

Filter container for multiple filters.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| children | Child elements | `ReactNode` | - |
| label | Label in collapse mode | `ReactNode` | `'Filters'` |
| collapsed | Whether collapse mode (popup wraps all children) | `boolean` | `false` |
| extra | Extra content | `ReactNode` | - |
| gap | Spacing in non-collapse mode | number | 8 |
| filterButtonRef | FilterButton ref for controlling popup close | `React.RefObject<FilterButtonRef>` | - |

### Filter.ResponsiveGroup

Responsive filter group; collapses filters into "More" when width is insufficient.

| Property    | Description                         | Type                  | Default     |
| ----------- | ----------------------------------- | --------------------- | ----------- |
| children    | Child elements                      | `ReactNode`           | -           |
| gap         | Container gap                       | `number`              | `8`         |
| label       | FilterWrap label                    | `ReactNode`           | `'Filters'` |
| icon        | FilterWrap icon                     | `ReactNode`           | -           |
| onApply     | Callback when Apply clicked         | `() => void`          | -           |
| onClearAll  | Callback when Clear All clicked     | `() => void`          | -           |
| showActions | Whether to show Apply and Clear All | `boolean`             | `true`      |
| style       | Container style                     | `React.CSSProperties` | -           |
| extra       | Extra content                       | `ReactNode`           | -           |
| showCount   | Whether to show count               | `boolean`             | `true`      |

## Context

### FilterProvider

Filter context Provider for shared state in collapse mode.

```tsx | pure
import { FilterProvider, useFilterContext } from '@oceanbase/design';

// Get context in custom component
const MyComponent = () => {
  const { isCollapsed } = useFilterContext();
  // isCollapsed true means component is in collapse mode
  return <div>{isCollapsed ? '折叠模式' : '普通模式'}</div>;
};
```

### useFilterContext

Returns filter context:

| Property | Description | Type |
| --- | --- | --- |
| isCollapsed | Whether in collapse mode | `boolean` |
| filterValues | Current filter values | `FilterValueItem[]` |
| updateFilterValue | Update filter value | `(id: string, label: ReactNode, value: FilterValue, options?: unknown[], componentName?: FilterComponentName) => void` |
| clearAllFilterValues | Clear all filter values | `() => void` |
