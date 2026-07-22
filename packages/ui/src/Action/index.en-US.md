---
title: Action
nav:
  title: Biz Components
  path: /biz-components
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/button.tsx" title="Action.Button"></code>
<code src="./demo/link.tsx" title="Action.Link"></code>
<code src="./demo/loading.tsx" title="Loading state"></code>
<code src="./demo/more-text.tsx" title="Custom more actions"></code>
<code src="./demo/with-tooltip-popconfirm.tsx" title="With Tooltip and Popconfirm"></code>
<code src="./demo/fixed.tsx" title="Fixed Action (not collapsible)"></code>
<code src="./demo/group-control.tsx" title="Group state control"></code>
<code src="./demo/children-wrapper.tsx" title="Indirect child nesting"></code>

## API

### Action.Group

| Property | Description | Type | Default |
| :-- | :-- | :-- | :-- |
| size | Maximum number of visible actions | number | 3 |
| buttonSize | Button size | large \| middle \| small | middle |
| dropDownPlacement | Dropdown placement | topLeft \| topCenter \| topRight \| bottomLeft \| bottomCenter \| bottomRight | bottomLeft |
| shouldVisible | Control action visibility via function | (key: string) => boolean | - |
| shouldDisabled | Control action disabled state via function | (key: string) => boolean | - |
| enableLoading | Whether to show loading state | boolean | true |
| moreText | Text for more actions | ReactNode | - |
| moreType | Element type for more actions | button \| link | - |

### Action.Button

| Property | Description | Type | Default |
| :-- | :-- | :-- | :-- |
| visible | Whether visible | boolean | true |
| type | Button type | primary \| default | default |
| size | Button size | large \| middle \| small | middle |
| danger | Danger button | boolean | false |
| disabled | Whether disabled | boolean | false |
| loading | Loading state | boolean | false |
| fixed | Fixed display, not collapsible | boolean | false |
| divider | Whether to show divider in dropdown | boolean | false |
| tooltip | Tooltip text | string | - |
| onClick | Click callback | async (event: React.MouseEvent<HTMLElement, MouseEvent>) => void \| (event: React.MouseEvent<HTMLElement, MouseEvent>) => void | - |
| className | Custom class name | string | - |

### Action.Link

| Property | Description | Type | Default |
| :-- | :-- | :-- | :-- |
| visible | Whether visible | boolean | true |
| loading | Loading state | boolean | false |
| disabled | Whether disabled | boolean | false |
| divider | Whether to show divider in dropdown | boolean | false |
| fixed | Fixed display, not collapsible | boolean | false |
| tooltip | Tooltip text | string | - |
| onClick | Click callback | async (event: React.MouseEvent<HTMLElement, MouseEvent>) => void \| (event: React.MouseEvent<HTMLElement, MouseEvent>) => void | - |
| className | Custom class name for link | string | - |
