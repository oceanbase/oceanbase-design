---
title: Pie & Donut
nav:
  title: Charts
  path: /charts
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/pie.tsx" title="Basic pie"></code>
<code src="./demo/donut.tsx" title="Basic donut"></code>
<code src="./demo/donut-floor.tsx" title="Donut float precision" debug></code>
<code src="./demo/half-donut.tsx" title="Half donut"></code>
<code src="./demo/state-change.tsx" title="useMemo state change" debug></code>

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| width | Chart width | number | container width | - |
| height | Chart height | number | 400 | - |
| data | Chart data | object[] | - | - |
| angleField | Field for slice size (radians) | string | - | - |
| colorField | Field for color mapping | string | - | - |
| isDonut <Badge>Extended</Badge> | Donut chart | boolean | false | - |
| isHalfDonut <Badge>Extended</Badge> | Half donut | boolean | false | - |
| statisticTitle <Badge>Extended</Badge> | Statistic title | string | Total | - |

- More API: https://charts.ant.design/zh/examples/pie/basic#basic
