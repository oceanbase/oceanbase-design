---
title: Table
nav:
  title: General
  path: /components
markdown: |
  Presents data in a two-dimensional table format, arranged in rows (each row shows one item) and columns. Row items can contain any type of data or interactive controls such as editing, viewing details, or triggering actions.

  ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/H0SVSZSjbisAAAAAAAAAAAAADv3-AQBr/original)
---

## Component Description

- 🔥 Fully inherits antd [Table](https://ant.design/components/table-cn) capabilities and API, seamless migration.
- 💄 Custom theme and styles, aligned with OceanBase Design specification.
- 🆕 Set `column.ellipsis` for auto-ellipsis with Tooltip.
- 🆕 Set `column.tooltip` for column header help.
- 🆕 New batch action bar for selected items and batch actions, see [API](#api).

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic"></code>
<code src="./demo/bordered.tsx" title="Bordered" description="Add table borders."></code>
<code src="./demo/inner-bordered.tsx" title="Inner Bordered" description="Borders only inside table, often with bordered Card."></code>
<code src="./demo/ellipsis.tsx" title="Cell Ellipsis" description="`column.ellipsis` enables auto-ellipsis with Tooltip. Note: column header ellipsis does not support sort/filter yet."></code>
<code src="./demo/column-tooltip.tsx" title="Column Header Tooltip" description="Use `column.tooltip` for column header help. Works with sort and filter."></code>
<code src="./demo/fixed-columns-header-tables.tsx" title="Fixed Header and Columns"></code>
<code src="./demo/filter-and-sorter.tsx" title="Filter and Sort"></code>
<code src="./demo/row-selection.tsx" title="Selection and Actions"></code>
<code src="./demo/expandable.tsx" title="Expandable"></code>
<code src="./demo/nesting-tables.tsx" title="Nested Table"></code>
<code src="./demo/multiple-nesting-tables.tsx" title="Selectable Nested Table"></code>
<code src="./demo/tree-table.tsx" title="Tree Table" description="Auto tree when data has `children`; use childrenColumnName for other field. Use indentSize for indent."></code>
<code src="./demo/grouping-columns.tsx" title="Column Grouping" description="Nest children in columns for grouped headers."></code>
<code src="./demo/rowspan.tsx" title="Row Span" description="Use onCell rowSpan for row merge."></code>
<code src="./demo/colspan-rowspan.tsx" title="Row and Column Span" description="Header supports column span via column colSpan.<br>Table supports row/column span; colSpan or rowSpan 0 in render hides cell."></code>
<code src="./demo/edit-row.tsx" title="Editable Row" description="Table with row edit."></code>
<code src="./demo/virtual.tsx" title="Virtual Scroll" description="Enable via `virtual`; requires `scroll.x` and `scroll.y` as number."></code>
<code src="./demo/dynamic-settings.tsx" title="Dynamic Table Props" description="Select different configs to see effect."></code>
<code src="./demo/card-table.tsx" title="With Card"></code>
<code src="./demo/pro-card-table.tsx" title="With ProCard" debug></code>
<code src="./demo/empty.tsx" title="Empty State"></code>
<code src="./demo/button.tsx" title="With Button" description="Cell buttons default to small size" debug></code>

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| innerBordered | Inner borders | boolean | - | - |
| pagination | Pagination config | ReactNode | {} | - |
| cancelText | Cancel button text in selection | ReactNode | - | - |
| collapseText | Collapse button text in selection | ReactNode | - | - |
| openText | Expand button text in selection | ReactNode | - | - |
| hiddenCancelBtn | Hide cancel button in selection | boolean | false | - |
| locale | Table locale (sort, filter, empty) | object | [default](https://github.com/ant-design/ant-design/blob/6dae4a7e18ad1ba193aedd5ab6867e1d823e2aa4/components/locale/zh_CN.tsx#L20-L37) | - |
| toolOptionsRender | Render toolbar, returns dom array with auto margin | (selectedRowKeys, selectedRows) => ReactNode[] | - | - |
| toolAlertRender | Render alert | ((selectedRowKeys, selectedRows) => ReactNode) \| false | - | - |
| toolSelectedContent | Render expanded content | (selectedRowKeys, selectedRows) => ReactNode | - | - |

### Column

| Property | Description                | Type                | Default | Version |
| :------- | :------------------------- | :------------------ | :------ | :------ |
| tooltip  | Column header help tooltip | `ColumnTooltipType` | -       | -       |

- `tooltip` semantics align with `Form.Item.tooltip`: pass a `ReactNode` (incl. JSX) as tooltip content, or `{ title, icon }` to customize content and trigger icon.

- See antd Table docs: https://ant.design/components/table-cn
