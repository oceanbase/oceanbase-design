---
title: Table 表格
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全继承 antd [Alert](https://ant.design/components/alert-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 📢 默认开启 `pagination.hideOnSinglePage`，即只有一页数据时会隐藏分页器。
- 🆕 设置 `column.ellipsis`，开启自动省略，并使用 Tooltip 展示全部内容。
- 🆕 新增 `批量操作栏`，可配置选中对象、批量操作项等，详见 [API](#api)。

## 代码演示

<code src="./demo/basic.tsx" title="基本"></code>

<code src="./demo/bordered.tsx" title="带边框" description="添加表格边框线"></code>

<code src="./demo/fixed-columns-header-tables.tsx" title="固定头和列"></code>

<code src="./demo/multiple-tables.tsx" title="选择和操作"></code>

<code src="./demo/nesting-tables.tsx" title="嵌套子表格"></code>

<code src="./demo/multiple-nesting-tables.tsx" title="可选择的嵌套子表格"></code>

<code src="./demo/ellipsis.tsx" title="单元格自动省略" description="设置 `column.ellipsis` 可以让单元格内容根据宽度自动省略，并使用 Tooltip 展示全部内容。`说明`: 列头缩略暂不支持和排序筛选一起使用。"></code>

<code src="./demo/edit-row.tsx" title="可编辑行" description="带行编辑功能的表格。"></code>

<code src="./demo/dynamic-settings.tsx" title="动态控制表格属性" description="选择不同配置组合查看效果。"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| cancelText | 选择表格中 取消 按钮文案 | ReactNode | - | - |
| collapseText | 选择表格中 收起 按钮文案 | ReactNode | - | - |
| openText | 选择表格中 展开 按钮文案 | ReactNode | - | - |
| hiddenCancelBtn | 选择表格中是否隐藏取消按钮 | boolean | false | - |
| locale | Table 默认文案设置，目前包括排序、过滤、空数据文案 | object | [默认值](https://github.com/ant-design/ant-design/blob/6dae4a7e18ad1ba193aedd5ab6867e1d823e2aa4/components/locale/zh_CN.tsx#L20-L37) | - |
| toolOptionsRender | 渲染工具栏，支持返回一个 dom 数组，会自动增加 margin | (selectedRowKeys, selectedRows) => ReactNode[] | - | - |
| toolAlertRender | 渲染 alert 提示信息 | ((selectedRowKeys, selectedRows) => ReactNode) \| false，设置 false 取消 alert 提示 | - | - |
| toolSelectedContent | 渲染展开内容 | (selectedRowKeys, selectedRows) => ReactNode | - | - |

- 详见 antd Table 文档: https://ant.design/components/table-cn
