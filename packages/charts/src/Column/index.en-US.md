---
title: Column
nav:
  title: Charts
  path: /charts
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic column"></code>
<code src="./demo/stack.tsx" title="Stacked column"></code>
<code src="./demo/group.tsx" title="Grouped column"></code>
<code src="./demo/percent.tsx" title="Percent column"></code>
<code src="./demo/range.tsx" title="Range column"></code>

## API

| Property    | Description                              | Type     | Default         | Version |
| :---------- | :--------------------------------------- | :------- | :-------------- | :------ |
| width       | Chart width                              | number   | container width | -       |
| height      | Chart height                             | number   | 400             | -       |
| data        | Chart data                               | object[] | -               | -       |
| xField      | x-axis field                             | string   | -               | -       |
| yField      | y-axis field                             | string   | -               | -       |
| seriesField | Series field for stacked/grouped/percent | string   | -               | -       |
| isStack     | Stacked column                           | string   | -               | -       |
| isGroup     | Grouped column                           | string   | -               | -       |
| isPercent   | Percent column                           | string   | -               | -       |
| isRange     | Range column                             | string   | -               | -       |

- More API: https://charts.ant.design/zh/examples/column/basic#basic
