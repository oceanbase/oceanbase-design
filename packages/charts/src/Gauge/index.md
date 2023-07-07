---
title: Gauge 仪表盘
nav:
  title: 图表
  path: /charts
---

## 代码演示

<code src="./demo/basic.tsx" title="基础仪表盘"></code>

<code src="./demo/custom-color.tsx" title="多色仪表盘"></code>

<code src="./demo/meter.tsx" title="米轨仪表盘"></code>

<code src="./demo/without-indicator.tsx" title="无指针和刻度仪表盘"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| width | 图表宽度 | number | 容器宽度 | - |
| height | 图表高度 | number | 400 | - |
| type | 仪表盘类型 | undefined \| 'meter' | undefined | - |
| percent | 百分比数值，范围 0-1 | number | - | - |
| innerRadius | 内环半径，范围 0-1 | number | - | - |
| range | 圆弧样式 | { ticks: number[]; color: string \| string[]; width: number } | - | - |
| gaugeStyle | 圆弧背景样式 | StyleAttr | - | - |

- 更多 API 详见 Ant Design Charts 文档：https://charts.ant.design/zh/examples/progress-plots/gauge#basic
