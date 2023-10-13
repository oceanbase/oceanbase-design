---
title: Line 折线图
nav:
  title: 图表
  path: /charts
---

## 代码演示

<code src="./demo/basic.tsx" title="基础折线图"></code>

<code src="./demo/step.tsx" title="阶梯折线图"></code>

<code src="./demo/multiple.tsx" title="多折线图"></code>

<code src="./demo/dynamic-data.tsx" title="动态数据" description="实时刷新的折线图"></code>

<code src="./demo/auto-fit.tsx" title="自适应容器高度" description="调整浏览器窗口高度即可验证"></code>

<code src="./demo/tooltip-scrollable.tsx" title="Tooltip 可滚动" description="适用于 Tooltip 项较多、超出图表的场景，可通过 `tooltip.scrollable: true` 配置进行开启。"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| width | 图表宽度 | number | 容器宽度 | - |
| height | 图表高度 | number | 400 | - |
| data | 图表数据 | object[] | - | - |
| xField | x 方向字段名 | string | - | - |
| yField | y 方向字段名 | string | - | - |
| seriesField | 分类字段名 | string | - | - |
| stepType | 阶梯折线图类型，配置后 smooth 无效。 h 和 v 分别指 horizontal 和 vertical，因此 vh 意为起始点先竖直方向，然后水平方向 | string | - | - |

- 更多 API 详见 Ant Design Charts 文档：https://charts.ant.design/zh/examples/line/basic#line
