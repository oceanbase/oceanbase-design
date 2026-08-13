---
title: Tiny
nav:
  title: Charts
  path: /charts
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/line.tsx" title="Tiny line"></code>
<code src="./demo/area.tsx" title="Tiny area"></code>
<code src="./demo/column.tsx" title="Tiny column"></code>
<code src="./demo/progress.tsx" title="Progress"></code>

## API

### TinyLine

| Property  | Description  | Type                           | Default         | Version |
| :-------- | :----------- | :----------------------------- | :-------------- | :------ |
| width     | Chart width  | number                         | container width | -       |
| height    | Chart height | number                         | 60              | -       |
| data      | Chart data   | number[]                       | -               | -       |
| color     | Color        | string \| string[] \| Function | -               | -       |
| lineStyle | Line style   | -                              | -               | -       |
| point     | Point style  | -                              | -               | -       |

### TinyArea

| Property  | Description  | Type                           | Default         | Version |
| :-------- | :----------- | :----------------------------- | :-------------- | :------ |
| width     | Chart width  | number                         | container width | -       |
| height    | Chart height | number                         | 60              | -       |
| data      | Chart data   | number[]                       | -               | -       |
| color     | Color        | string \| string[] \| Function | -               | -       |
| areaStyle | Area style   | StyleAttr \| Function          | -               | -       |
| line      | Line style   | object                         | -               | -       |
| point     | Point style  | object                         | -               | -       |

### TinyColumn

| Property    | Description  | Type                           | Default         | Version |
| :---------- | :----------- | :----------------------------- | :-------------- | :------ |
| width       | Chart width  | number                         | container width | -       |
| height      | Chart height | number                         | 60              | -       |
| data        | Chart data   | number[]                       | -               | -       |
| color       | Color        | string \| string[] \| Function | -               | -       |
| columnStyle | Column style | StyleAttr \| Function          | -               | -       |
| label       | Label style  | object                         | -               | -       |

### Progress

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| width | Chart width | number | container width | - |
| height | Chart height | number | 20 | - |
| compact <Badge>Extended</Badge> | Compact layout | boolean | false | - |
| title <Badge>Extended</Badge> | Title | ReactNode | - | - |
| percent | Percent value, 0–1 | number | - | - |
| warningPercent <Badge>Extended</Badge> | Warning threshold | number, 0–1 | - | - |
| dangerPercent <Badge>Extended</Badge> | Danger threshold | number, 0–1 | - | - |
| color | Color | string \| string[] \| Function | - | - |
| progressStyle | Progress bar style | StyleAttr \| Function | - | - |
| percentStyle <Badge>Extended</Badge> | Percent label style | CSSProperties | - | - |
| maxColumnWidth | Max progress bar width | number | - | - |
| decimal <Badge>Extended</Badge> | Max decimal places | number | 2 | - |
| formatter <Badge>Extended</Badge> | Custom percent display | (percent: number) => ReactNode | (percent) => `${percent * 100}%` | - |

- More API: https://charts.ant.design/zh/examples/tiny/tiny-line#basic-line
