---
title: Gauge
nav:
  title: Charts
  path: /charts
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic gauge"></code>
<code src="./demo/custom-color.tsx" title="Multi-color gauge"></code>
<code src="./demo/meter.tsx" title="Meter gauge"></code>
<code src="./demo/without-indicator.tsx" title="Gauge without indicator and scale"></code>

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| width | Chart width | number | container width | - |
| height | Chart height | number | 400 | - |
| type | Gauge type | undefined \| 'meter' | undefined | - |
| percent | Percent value, 0–1 | number | - | - |
| innerRadius | Inner radius, 0–1 | number | - | - |
| range | Arc style | { ticks: number[]; color: string \| string[]; width: number } | - | - |
| gaugeStyle | Arc background style | StyleAttr | - | - |

- More API: https://charts.ant.design/zh/examples/progress-plots/gauge#basic
