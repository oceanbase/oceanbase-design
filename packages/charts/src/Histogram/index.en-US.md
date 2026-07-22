---
title: Histogram
nav:
  title: Charts
  path: /charts
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic histogram"></code>
<code src="./demo/stack.tsx" title="Stacked histogram"></code>

## API

| Property   | Description                               | Type     | Default         | Version |
| :--------- | :---------------------------------------- | :------- | :-------------- | :------ |
| width      | Chart width                               | number   | container width | -       |
| height     | Chart height                              | number   | 400             | -       |
| data       | Chart data                                | object[] | -               | -       |
| binField   | Value field for binning                   | string   | -               | -       |
| stackField | Series field for stacked                  | string   | -               | -       |
| binWidth   | Bin width (number of bins)                | number   | -               | -       |
| binNumber  | Number of bins (cannot use with binWidth) | number   | -               | -       |

- More API: https://charts.ant.design/zh/examples/more-plots/histogram#basic
