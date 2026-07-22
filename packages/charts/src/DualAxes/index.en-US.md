---
title: DualAxes
nav:
  title: Charts
  path: /charts
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/dual-line.tsx" title="Dual line dual axes"></code>
<code src="./demo/multi-line.tsx" title="Multi line dual axes"></code>
<code src="./demo/column-line.tsx" title="Column-line dual axes"></code>
<code src="./demo/column-multi-line.tsx" title="Column-line dual axes (multi line)"></code>
<code src="./demo/tooltip-scrollable.tsx" title="Scrollable Tooltip" description="For many Tooltip items. Enable with tooltip.scrollable: true."></code>

## API

### DualAxes

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| width | Chart width | number | container width | - |
| height | Chart height | number | 400 | - |
| data | Chart data array `[left axis data, right axis data]` | object[][] | - | - |
| xField | x-axis field | string | - | - |
| yField | y-axis fields `[left, right]` | string[] | - | - |
| geometryOptions | Geometry config per axis `[left, right]`, type [GeometryLineOption](#geometrylineoption) or [GeometryColumnOption](#geometrycolumnoption) | (GeometryLineOption \| GeometryColumnOption)[] | - | - |

### GeometryLineOption

| Property    | Description   | Type      | Default | Version |
| :---------- | :------------ | :-------- | :------ | :------ |
| geometry    | Geometry type | string    | line    | -       |
| seriesField | Series field  | string    | -       | -       |
| smooth      | Smooth line   | boolean   | false   | -       |
| lineStyle   | Line style    | LineStyle | -       | -       |
| point       | Point style   | Point     | -       | -       |

### GeometryColumnOption

| Property    | Description    | Type        | Default | Version |
| :---------- | :------------- | :---------- | :------ | :------ |
| geometry    | Geometry type  | string      | line    | -       |
| seriesField | Series field   | string      | -       | -       |
| groupField  | Group field    | string      | -       | -       |
| isStack     | Stacked column | boolean     | false   | -       |
| isGroup     | Grouped column | boolean     | false   | -       |
| isRange     | Range column   | boolean     | false   | -       |
| columnStyle | Column style   | ColumnStyle | -       | -       |
| label       | Column label   | Label       | -       | -       |

- More API: https://charts.ant.design/zh/examples/dual-axes/dual-line#dual-line
