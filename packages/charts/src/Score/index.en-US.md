---
title: Score
nav:
  title: Charts
  path: /charts
---

## Default rules

- 85 <= num: Excellent (green)
- 70 <= num < 85: Good (blue)
- 60 <= num < 70: Fair (orange)
- num < 60: Poor (red)

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic"></code>
<code src="./demo/customColor.tsx" title="Custom color and unit"></code>
<code src="./demo/customThreshold.tsx" title="Custom threshold"></code>

## API

| Property   | Description                 | Type            | Default | Version |
| :--------- | :-------------------------- | :-------------- | :------ | :------ |
| size       | Chart size                  | string\| number | middle  | -       |
| color      | Chart color                 | string          | green   | -       |
| value      | Value                       | number          | -       | -       |
| valueStyle | Number style                | CSSProperties   | -       | -       |
| unit       | Unit                        | string          | pts     | -       |
| unitStyle  | Unit style                  | CSSProperties   | -       | -       |
| thresholds | Threshold and color mapping | object          | -       | -       |
| className  | Class name                  | string          | -       | -       |
