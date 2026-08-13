---
title: TagSelect
nav:
  title: Biz Components
  path: /biz-components
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/tagSelect-base.tsx" title="Basic"></code>
<code src="./demo/tagSelect-group.tsx" title="Tag selector group"></code>
<code src="./demo/tagSelect-radio.tsx" title="Radio"></code>
<code src="./demo/tagSelect-multiple.tsx" title="Multiple"></code>
<code src="./demo/tagSelect-img.tsx" title="Image tag"></code>
<code src="./demo/tagSelect-size.tsx" title="Size"></code>

## API

### TagSelect.Item

| Property       | Description                    | Type                | Default |
| :------------- | :----------------------------- | :------------------ | :------ |
| checked        | Whether selected               | boolean             | false   |
| defaultChecked | Default selected               | boolean             | false   |
| value          | Option value                   | string \| number    | -       |
| disabled       | Disabled                       | boolean             | false   |
| cover          | Image option or custom content | string \| ReactNode | -       |
| onChange       | Change callback                | function(e: Event)  | -       |

### TagSelect.Group

| Property     | Description              | Type                                     | Default |
| :----------- | :----------------------- | :--------------------------------------- | :------ |
| title        | Group title              | string                                   | -       |
| defaultValue | Default selected options | string \| string[] \| number \| number[] | -       |
| disabled     | Disable whole group      | boolean                                  | false   |
| options      | Options                  | string[] \| number[] \| Option[]         | []      |
| value        | Selected options         | string \| string[] \| number \| number[] | -       |
| multiple     | Multiple selection       | boolean                                  | false   |
| size         | Option size              | large \| middle \| small                 | middle  |
| onChange     | Change callback          | function(checkedValue)                   | -       |
