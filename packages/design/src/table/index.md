---
title: Table 表格
nav:
  title: 基础组件
  path: /components
markdown: |
  以二维表格格式呈现数据，以矩形形式按行（每行显示一个行项目）和列排列。行项目可以包含任何类型的数据，也可以包含交互式控件，例如编辑数据、查看详情或触发行项目相关操作。

  ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/H0SVSZSjbisAAAAAAAAAAAAADv3-AQBr/original)
---

## 组件说明

- 🔥 完全继承 antd [Alert](https://ant.design/components/alert-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 🆕 设置 `column.ellipsis`，开启自动省略，并使用 Tooltip 展示全部内容。
- 🆕 新增 `批量操作栏`，可配置选中对象、批量操作项等，详见 [API](#api)。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本"></code>
<code src="./demo/bordered.tsx" title="带边框" description="添加表格边框线。"></code>
<code src="./demo/inner-bordered.tsx" title="带内部边框" description="仅表格内部添加边框线，常和带边框的 Card 一起使用，以避免外部边框重复。"></code>
<code src="./demo/ellipsis.tsx" title="单元格自动省略" description="设置 `column.ellipsis` 可以让单元格内容根据宽度自动省略，并使用 Tooltip 展示全部内容。`说明`: 列头缩略暂不支持和排序筛选一起使用。"></code>
<code src="./demo/fixed-columns-header-tables.tsx" title="固定头和列"></code>
<code src="./demo/filter-and-sorter.tsx" title="筛选和排序"></code>
<code src="./demo/row-selection.tsx" title="选择和操作"></code>
<code src="./demo/expandable.tsx" title="可展开"></code>
<code src="./demo/nesting-tables.tsx" title="嵌套子表格"></code>
<code src="./demo/multiple-nesting-tables.tsx" title="可选择的嵌套子表格"></code>
<code src="./demo/tree-table.tsx" title="树形表格" description="当数据中有 `children` 字段时会自动展示为树形表格，如果不需要或配置为其他字段可以用 childrenColumnName 进行配置。可以通过设置 indentSize 以控制每一层的缩进宽度。"></code>
<code src="./demo/grouping-columns.tsx" title="表头分组" description="columns 可以通过嵌套 children，实现表头分组。"></code>
<code src="./demo/rowspan.tsx" title="行合并" description="通过 onCell 设置单元格属性 rowSpan，可以实现行合并。"></code>
<code src="./demo/colspan-rowspan.tsx" title="行列合并" description="表头只支持列合并，使用 column 里的 colSpan 进行设置。<br/>表格支持行/列合并，使用 render 里的单元格属性 colSpan 或者 rowSpan 设值为 0 时，设置的表格不会渲染。"></code>
<code src="./demo/edit-row.tsx" title="可编辑行" description="带行编辑功能的表格。"></code>
<code src="./demo/virtual.tsx" title="虚拟滚动" description="通过 `virtual` 开启虚拟滚动，要求设置 `scroll.x` 和 `scroll.y` 且必须为 number 类型。"></code>
<code src="./demo/dynamic-settings.tsx" title="动态控制表格属性" description="选择不同配置组合查看效果。"></code>
<code src="./demo/card-table.tsx" title="和 Card 组合使用"></code>
<code src="./demo/pro-card-table.tsx" title="和 ProCard 组合使用" debug></code>
<code src="./demo/empty.tsx" title="空状态"></code>
<code src="./demo/button.tsx" title="带按钮" description="单元格内的按钮默认为小尺寸" debug></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| innerBordered | 带内部边框 | boolean | - | - |
| pagination | 分页配置 | ReactNode | {} | - |
| cancelText | 选择表格中 `取消` 按钮文案 | ReactNode | - | - |
| collapseText | 选择表格中 `收起` 按钮文案 | ReactNode | - | - |
| openText | 选择表格中 `展开` 按钮文案 | ReactNode | - | - |
| hiddenCancelBtn | 选择表格中是否隐藏取消按钮 | boolean | false | - |
| locale | Table 默认文案设置，目前包括排序、过滤、空数据文案 | object | [默认值](https://github.com/ant-design/ant-design/blob/6dae4a7e18ad1ba193aedd5ab6867e1d823e2aa4/components/locale/zh_CN.tsx#L20-L37) | - |
| toolOptionsRender | 渲染工具栏，支持返回一个 dom 数组，会自动增加 margin | (selectedRowKeys, selectedRows) => ReactNode[] | - | - |
| toolAlertRender | 渲染 alert 提示信息 | ((selectedRowKeys, selectedRows) => ReactNode) \| false，设置 false 取消 alert 提示 | - | - |
| toolSelectedContent | 渲染展开内容 | (selectedRowKeys, selectedRows) => ReactNode | - | - |

- 详见 antd Table 文档: https://ant.design/components/table-cn
