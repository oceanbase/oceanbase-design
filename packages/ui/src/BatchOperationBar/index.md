---
title: BatchOperationBar 批量操作栏
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<code src="./demo/basic.tsx" title="基本"></code>

<code src="./demo/with-table.tsx" title="配合 Table 使用"></code>

<code src="./demo/with-multiple-table.tsx" title="配合多个 Table 使用"></code>

<code src="./demo/with-drawer.tsx" title="在 Drawer 中使用"></code>

<code src="./demo/with-multiple-drawer-table.tsx" title="在 Drawer 中配合多个 Table 使用"></code>

## API

### BatchOperationBar

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| open | 是否展开 | boolean | false |
| title | 设置 bar 的 title 信息 | ReactNode | - |
| content | 设置展开区的内容 | ReactNode \| (props: [AlertRenderParams](batch-operation-bar#alertrenderparams)) => ReactNode) | - |
| selectedRows | 数据数组 | any[] | - |
| className | 设置 BatchOperationBar 的样式名 | string | - |
| width | 设置组件的宽度 | (number \| string) | - |
| position | 设置组件的位置 | ['bottom' \| 'top', 'right' \| 'left'] | ['bottom','right'] |
| showCancelBtn | 是否显示取消选择按钮 | boolean | true |
| showOpenBtn | 是否显示展开收起按钮 | boolean | true |
| cancelText | 设置取消选择按钮文本 | ReactNode | - |
| openText | 设置展开提示文案 | ReactNode | - |
| openIcon | 设置展开提示 icon | ReactNode | - |
| hiddenText | 设置收起提示文案 | ReactNode | - |
| hiddenIcon | 设置收起提示 icon | ReactNode | - |
| barStyle | 设置组件 style 样式 | React.CSSProperties | {} |
| alertRender | 提示信息栏渲染工具，支持返回一个 ReactNode 或者 JSX.Element 设置 false 不展示 | (selectedRows: object[]) => (ReactNode \| JSX.Element) | - |
| alertOptionRender | 操作信息栏渲染工具，支持返回一个 ReactNode 或者 JSX.Element 设置 false 不展示 | (props: [AlertRenderParams](batch-operation-bar#alertrenderparams)) => ReactNode \| JSX.Element) | - |

### AlertRenderParams

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| selectedRows | 选中的数据 | any[] | - |
| setSelectedRows | 设置选中的数据 | (selectedRows: any[]) => void | - |
| cleanSelectedRows | 清除选中的数据不传值默认清空全部 | (cleanSelectdRows?: any[]) => void | - |
