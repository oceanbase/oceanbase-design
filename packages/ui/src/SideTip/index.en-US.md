---
title: SideTip
nav:
  title: Biz Components
  path: /biz-components
---

Side tip is a floating action button at the bottom-right of the page with these features:

- Default position: bottom-right
- Draggable
- Hideable (hover to reveal small button)
- Clickable

## Use Cases

Help, surveys, feedback collection, etc.

## Code Examples

### Basic

SideTip provides `primary` and default styles. Use `defaultHide` to hide initially. See the hidden button at bottom-right.

<code src="./demo/basic.tsx"></code>

### Normal button mode

SideTip can be non-hideable, acting as a normal button.

<code src="./demo/normal.tsx"></code>

### Small size

SideTip supports `small` and default sizes.

<code src="./demo/small.tsx"></code>

### Action options

Action options depend on button position. Use `id` for the button and set `getPopupContainer` on Dropdown for popup placement.

<code src="./demo/operation.tsx"></code>

### Back to top

Back to top using SideTip.

<code src="./demo/backTop.tsx"></code>

### Disabled

Set `disabled` to disable the button.

<code src="./demo/disabled.tsx"></code>

### Loading

Loading color varies by `type`.

<code src="./demo/loading.tsx"></code>

### Content display

Integrates antd Badge props. See <a href="https://ant.design/components/badge-cn/#API" target="_blank">badge</a>.

<code src="./demo/content.tsx"></code>

### Click to open Modal

<code src="./demo/modal.tsx"></code>

### ToolTip

<code src="./demo/tooltip.tsx"></code>

### Disable drag

<code src="./demo/draggable.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| type | Button type: `primary` or omit | string | - | - |
| hideable | Whether hideable | boolean | true | - |
| size | Button size | small \| default | default | - |
| icon | Button icon | URL \| ReactNode | - | - |
| open | Whether open | boolean | false | - |
| defaultHide | Default hidden when hideable | boolean | false | - |
| disabled | Whether disabled | boolean | false | - |
| loading | Loading state | boolean | false | - |
| position | Initial position | { right: number, bottom: number } | {right: 24, bottom: 24} | - |
| badge | antd Badge props | See <a href="https://ant.design/components/badge-cn/#API" target="_blank">badge</a> | - | - |
| tooltip | antd Tooltip props | See <a href="https://ant.design/components/tooltip-cn/#API" target="_blank">tooltip</a> | - | - |
| id | Unique id when multiple SideTips, for hide state cache | string | - | - |
| onDragStart | Drag start callback | () => void | - | - |
| onDragEnd | Drag end callback | () => void | - | - |
| onDrag | Drag callback | (offset: {right: number, bottom: number}) => void | - | - |
| buttonStyle | Button style | React.CSSProperties | - | - |
| buttonClassName | Button class | string | - | - |
| draggable | Whether draggable | boolean | true | 0.4.11 |
