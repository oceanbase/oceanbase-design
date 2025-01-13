---
title: Action 操作项
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/button.tsx" title="Action.Button"></code>
<code src="./demo/link.tsx" title="Action.Link"></code>
<code src="./demo/loading.tsx" title="loading 状态"></code>
<code src="./demo/more-text.tsx" title="自定义更多操作"></code>
<code src="./demo/with-tooltip-popconfirm.tsx" title="带 Tooltip 和 Popconfirm"></code>
<code src="./demo/fixed.tsx" title="固定展示、不被折叠的 Action"></code>
<code src="./demo/group-control.tsx" title="整体控制状态"></code>
<code src="./demo/children-wrapper.tsx" title="子元素间接嵌套"></code>

## API

### Action.Group

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| size | 最多展示几个 | number | 3 |
| buttonSize | 设置按钮大小 | large \| middle \| small | middle |
| dropDownPlacement | 菜单弹出位置 | topLeft \| topCenter \| topRight \| bottomLeft \| bottomCenter \| bottomRight | bottomLeft |
| shouldVisible | 通过函数对 action 是否展示的处理 | (key: string) => boolean | - |
| shouldDisabled | 通过函数对 action 是否禁用的处理 | (key: string) => boolean | - |
| enableLoading | 是否展示 loading 状态 | boolean | true |
| moreText | 设置更多操作的文案 | ReactNode | - |
| moreType | 设置更多操作的元素类型 | button \| link | - |

### Action.Button

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| visible | 是否可见 | boolean | true |
| type | 设置按钮类型 | primary \| default | default |
| size | 设置按钮大小 | large \| middle \| small | middle |
| danger | 设置危险按钮 | boolean | false |
| disabled | 是否禁用 | boolean | false |
| loading | 设置加载状态 | boolean | false |
| tooltip | 设置提示文案 | string | - |
| fixed | 固定展示、不被折叠 | boolean | false |
| onClick | 点击链接的回调 | async (event: React.MouseEvent<HTMLElement, MouseEvent>) => void \| (event: React.MouseEvent<HTMLElement, MouseEvent>) => void | - |
| className | 设置按钮的样式名 | string | - |

### Action.Link

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| visible | 是否可见 | boolean | true |
| loading | 设置加载状态 | boolean | false |
| tooltip | 设置提示文案 | string | - |
| disabled | 是否禁用 | boolean | false |
| fixed | 固定展示、不被折叠 | boolean | false |
| onClick | 点击链接的回调 | async (event: React.MouseEvent<HTMLElement, MouseEvent>) => void \| (event: React.MouseEvent<HTMLElement, MouseEvent>) => void | - |
| className | 设置 link 的样式名 | string | - |
