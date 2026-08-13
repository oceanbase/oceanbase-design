---
title: TreeSearch
nav:
  title: Biz Components
  path: /biz-components
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic"></code>
<code src="./demo/customTitle.tsx" title="Custom node title"></code>
<code src="./demo/virtual.tsx" title="Virtual scroll"></code>

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| treeNode | Tree data | Node | [] | - |
| defaultExpandAll | Expand all by default | boolean | false | - |
| checkable | Node selectable | boolean | true | - |
| titleRender | Custom node title render | (nodeData: Node) => ReactNode | - | - |
| onChange | Selection change callback | (nodes: Node[]) => void | - | - |
| width | Width | number | auto | - |
| height | Max height for virtual scroll; auto from container if omitted | number | - | - |
| followLeaf | Only track leaf node changes | boolean | true | - |
| ref | Ref for component methods | TreeSearchRef | true | - |
| loadData | Async load node data | (data: unknown) => Promise<void> | - | - |
| searchStyle | Search box style | Record<string, unknown> | - | - |

### Node

| Property | Description                           | Type      | Default   | Version |
| :------- | :------------------------------------ | :-------- | :-------- | :------ |
| icon     | Custom icon                           | ReactNode | -         | -       |
| title    | Node label                            | string    | -         | -       |
| value    | Node value (used when title is empty) | string    | -         | -       |
| children | Child nodes (empty = leaf)            | Node[]    | undefined | -       |

### TreeSearchRef

| Property     | Description           | Type       | Default | Version |
| :----------- | :-------------------- | :--------- | :------ | :------ |
| reset        | Reset search and tree | () => void | -       | -       |
| checkAll     | Select all            | () => void | -       | -       |
| invertSelect | Invert selection      | () => void | -       | -       |
