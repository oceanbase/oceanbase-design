---
title: Liquid
nav:
  title: Charts
  path: /charts
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/circle.tsx" title="Circle liquid"></code>
<code src="./demo/rect.tsx" title="Rect liquid"></code>
<code src="./demo/horizontal.tsx" title="Horizontal layout"></code>
<code src="./demo/decimal.tsx" title="Decimal precision" description="Default 2 decimals; use decimal to change."></code>

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| width | Chart width | number | height | - |
| height | Chart height | number | 400 | - |
| layout <Badge>Extended</Badge> | Layout | vertical | horizontal \| vertical | - |
| title <Badge>Extended</Badge> | Title | ReactNode | - | - |
| percent | Percent value, 0–1 | number | - | - |
| warningPercent <Badge>Extended</Badge> | Warning threshold | number, 0–1 | - | - |
| dangerPercent <Badge>Extended</Badge> | Danger threshold | number, 0–1 | - | - |
| decimal <Badge>Extended</Badge> | Max decimal places | number | 2 | - |
| containerStyle | Container style | CSSProperties | - | - |
| percentStyle | Percent style | CSSProperties | - | - |
| titleStyle | Title style | CSSProperties | - | - |

- More API: https://charts.ant.design/zh/examples/progress-plots/liquid#basic
