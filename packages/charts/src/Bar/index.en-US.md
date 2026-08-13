---
title: Bar
nav:
  title: Charts
  path: /charts
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic bar"></code>
<code src="./demo/stack.tsx" title="Stacked bar"></code>
<code src="./demo/group.tsx" title="Grouped bar"></code>
<code src="./demo/percent.tsx" title="Percent bar"></code>
<code src="./demo/progress.tsx" title="Progress bar" description="Shows percent with warning/danger thresholds."></code>
<code src="./demo/range.tsx" title="Range bar"></code>

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| width | Chart width | number | container width | - |
| height | Chart height | number | 400 | - |
| data | Chart data | object[] | - | - |
| xField | x-axis field | string | - | - |
| yField | y-axis field | string | - | - |
| seriesField | Series field for stacked/grouped/percent | string | - | - |
| isStack | Stacked bar | boolean | - | - |
| isGroup | Grouped bar | boolean | - | - |
| isPercent | Percent bar (use with isStack) | boolean | - | - |
| isRange | Range bar | boolean | - | - |
| isProgress <Badge>Extended</Badge> | Progress bar, value 0–1 | boolean | - | - |
| warningPercent <Badge>Extended</Badge> | Warning threshold when isProgress | number, 0–1 | - | - |
| dangerPercent <Badge>Extended</Badge> | Danger threshold when isProgress | number, 0–1 | - | - |

- More API: https://charts.ant.design/zh/examples/bar/basic#basic
