---
title: Line
nav:
  title: Charts
  path: /charts
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic line"></code>
<code src="./demo/step.tsx" title="Step line"></code>
<code src="./demo/multiple.tsx" title="Multi line"></code>
<code src="./demo/auto-fit.tsx" title="Auto-fit container" description="Resize browser to verify."></code>
<code src="./demo/mul-gradient-fill.tsx" title="Gradient fill" description="Enable gradient fill for contrast"></code>
<code src="./demo/tooltip-scrollable.tsx" title="Scrollable Tooltip" description="For many Tooltip items. Enable with tooltip.scrollable: true."></code>

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| width | Chart width | number | container width | - |
| height | Chart height | number | 400 | - |
| data | Chart data | object[] | - | - |
| xField | x-axis field | string | - | - |
| yField | y-axis field | string | - | - |
| seriesField | Series field | string | - | - |
| stepType | Step line type (h/v = horizontal/vertical; vh = vertical then horizontal) | string | - | - |
| area | Same as ant-design-charts line area, plus gradientFill for gradient | { gradientFill: boolean } & [area](https://ant-design-charts.antgroup.com/components/plots/line#%E6%A6%82%E8%A7%88) | - | - |

- More API: https://charts.ant.design/zh/examples/line/basic#line
