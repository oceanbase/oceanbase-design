---
title: TreeSearch 树搜索
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本"></code>
<code src="./demo/customTitle.tsx" title="自定义节点 title"></code>
<code src="./demo/virtual.tsx" title="虚拟滚动"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| treeNode | 树结构数据 | Node | [] | - |
| defaultExpandAll | 是否默认展开所有节点 | boolean | false | - |
| checkable | 是否节点可选 | boolean | true | - |
| titleRender | 自定义节点 title 渲染函数 | (nodeData: Node) => ReactNode | - | - |
| onChange | 选中改变的回调函数 | (nodes: Node[]) => void | - | - |
| width | 宽度 | number | auto | - |
| height | 虚拟滚动最大高度，如果不传则会根据容器高度自适应 | number | - | - |
| followLeaf | 只关注叶子节点的变化 | boolean | true | - |
| ref | 获取组件内置函数的 ref | TreeSearchRef | true | - |
| loadData | 异步请求节点数据的回调函数 | (data: unknown) => Promise<void> | - | - |
| searchStyle | 搜索框样式 | Record<string, unknown> | - | - |

### Node

| 参数     | 说明                                     | 类型      | 默认值    | 版本 |
| :------- | :--------------------------------------- | :-------- | :-------- | :--- |
| icon     | 自定义 icon                              | ReactNode | -         | -    |
| title    | 节点的实际渲染文案                       | string    | -         | -    |
| value    | 节点的真实值（title 不填时会渲染 value） | string    | -         | -    |
| children | 子节点 (为空时代表当前节点为 leaf)       | Node[]    | undefined | -    |

### TreeSearchRef

| 参数         | 说明                     | 类型       | 默认值 | 版本 |
| :----------- | :----------------------- | :--------- | :----- | :--- |
| reset        | 重置搜索区和 tree 的内容 | () => void | -      | -    |
| checkAll     | 全选 tree 的内容         | () => void | -      | -    |
| invertSelect | 反选 tree 的内容         | () => void | -      | -    |
