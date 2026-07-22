---
title: BatchOperationBar
nav:
  title: Biz Components
  path: /biz-components
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic"></code>
<code src="./demo/with-table.tsx" title="With Table"></code>
<code src="./demo/with-multiple-table.tsx" title="With multiple Tables"></code>
<code src="./demo/with-drawer.tsx" title="In Drawer"></code>
<code src="./demo/with-multiple-drawer-table.tsx" title="In Drawer with multiple Tables"></code>

## API

### BatchOperationBar

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| open | Whether expanded | boolean | false | - |
| title | Bar title | ReactNode | - | - |
| content | Expanded area content | ReactNode \| (props: [AlertRenderParams](batch-operation-bar#alertrenderparams)) => ReactNode) | - | - |
| selectedRows | Data array | any[] | - | - |
| className | Custom class name | string | - | - |
| width | Component width | (number \| string) | - | - |
| position | Component position | [bottom \| top, right \| left] | [bottom, right] | - |
| showCancelBtn | Whether to show cancel selection button | boolean | true | - |
| showOpenBtn | Whether to show expand/collapse button | boolean | true | - |
| cancelText | Cancel selection button text | ReactNode | - | - |
| openText | Expand hint text | ReactNode | - | - |
| openIcon | Expand hint icon | ReactNode | - | - |
| hiddenText | Collapse hint text | ReactNode | - | - |
| hiddenIcon | Collapse hint icon | ReactNode | - | - |
| barStyle | Component style | React.CSSProperties | {} | - |
| alertRender | Alert bar renderer, return ReactNode or JSX.Element, false to hide | (selectedRows: object[]) => (ReactNode \| JSX.Element) | - | - |
| alertOptionRender | Action bar renderer, return ReactNode or JSX.Element, false to hide | (props: [AlertRenderParams](batch-operation-bar#alertrenderparams)) => ReactNode \| JSX.Element) | - | - |

### AlertRenderParams

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| selectedRows | Selected data | any[] | - | - |
| setSelectedRows | Set selected data | (selectedRows: any[]) => void | - | - |
| cleanSelectedRows | Clear selected data, no args clears all | (cleanSelectdRows?: any[]) => void | - | - |
