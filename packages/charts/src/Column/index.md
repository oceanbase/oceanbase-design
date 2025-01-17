---
title: Column 柱状图
nav:
  title: 图表
  path: /charts
---

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基础柱状图"></code>
<code src="./demo/stack.tsx" title="堆叠柱状图"></code>
<code src="./demo/group.tsx" title="分组柱状图"></code>
<code src="./demo/percent.tsx" title="百分比柱状图"></code>
<code src="./demo/range.tsx" title="区间柱状图"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| width | 图表宽度 | number | 容器宽度 | - |
| height | 图表高度 | number | 400 | - |
| data | 图表数据 | object[] | - | - |
| xField | x 方向字段名 | string | - | - |
| yField | y 方向字段名 | string | - | - |
| seriesField | 分类字段名，常用于堆叠柱状图、分组柱状图、百分比柱状图 | string | - | - |
| isStack | 是否为堆叠柱状图 | string | - | - |
| isGroup | 是否为分组柱状图 | string | - | - |
| isPercent | 是否为百分比柱状图 | string | - | - |
| isRange | 是否为区间柱状图 | string | - | - |

- 更多 API 详见 Ant Design Charts 文档：https://charts.ant.design/zh/examples/column/basic#basic
