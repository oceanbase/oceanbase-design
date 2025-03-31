---
title: Area 面积图
nav:
  title: 图表
  path: /charts
---

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基础面积图"></code>
<code src="./demo/stack.tsx" title="堆叠面积图"></code>
<code src="./demo/percent.tsx" title="百分比面积图"></code>
<code src="./demo/tooltip-scrollable.tsx" title="Tooltip 可滚动" description="适用于 Tooltip 项较多、超出图表的场景，可通过 `tooltip.scrollable: true` 配置进行开启。"></code>

## API

| 参数        | 说明               | 类型     | 默认值   | 版本 |
| :---------- | :----------------- | :------- | :------- | :--- |
| width       | 图表宽度           | number   | 容器宽度 | -    |
| height      | 图表高度           | number   | 400      | -    |
| data        | 图表数据           | object[] | -        | -    |
| xField      | x 方向字段名       | string   | -        | -    |
| yField      | y 方向字段名       | string   | -        | -    |
| seriesField | 分类字段名         | string   | -        | -    |
| isStack     | 是否为堆叠面积图   | string   | -        | -    |
| isPercent   | 是否为百分比面积图 | string   | -        | -    |

- 更多 API 详见 Ant Design Charts 文档：https://charts.ant.design/zh/examples/area/basic#basic
