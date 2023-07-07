---
title: Action 操作项
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<code src="./demo/link.tsx" title="Action.Link"></code>

<code src="./demo/button.tsx" title="Action.Button"></code>

<code src="./demo/loading.tsx" title="loading 状态"></code>

<code src="./demo/fixed.tsx" title="固定的 Action"></code>

<code src="./demo/groupControl.tsx" title="整体控制状态"></code>

## API

### Action.Link

| 参数      | 说明               | 类型                           | 默认值 |
| :-------- | :----------------- | :----------------------------- | :----- |
| visible   | 是否可见           | boolean                        | true   |
| loading   | 设置加载状态       | boolean                        | false  |
| tooltip   | 设置提示文案       | string                         | -      |
| disabled  | 是否禁用           | boolean                        | false  |
| onClick   | 点击链接的回调     | async () => void \| () => void | -      |
| className | 设置 link 的样式名 | string                         | -      |

### Action.Button

| 参数      | 说明             | 类型                           | 默认值  |
| :-------- | :--------------- | :----------------------------- | :------ |
| visible   | 是否可见         | boolean                        | true    |
| loading   | 设置加载状态     | boolean                        | false   |
| tooltip   | 设置提示文案     | string                         | -       |
| disabled  | 是否禁用         | boolean                        | false   |
| type      | 设置按钮类型     | primary \| default             | default |
| danger    | 设置危险按钮     | boolean                        | false   |
| onClick   | 点击链接的回调   | async () => void \| () => void | -       |
| className | 设置按钮的样式名 | string                         | -       |

### Action.Group

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| size | 最多展示几个 | number | 3 |
| dropDownPlacement | 菜单弹出位置 | topLeft \| topCenter \| topRight \| bottomLeft \| bottomCenter \| bottomRight | bottomLeft |
| shouldVisible | 通过函数对 action 是否展示的处理 | (key: string) => boolean | - |
| shouldDisabled | 通过函数对 action 是否禁用的处理 | (key: string) => boolean | - |
| enableLoading | 是否展示 loading 状态 | boolean | true |
| moreText | 更多操作的自定义展示 | string \| ReactElement | - |
