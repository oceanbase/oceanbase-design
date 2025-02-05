---
title: Bar 条形图
nav:
  title: 图表
  path: /charts
---

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基础条形图"></code>
<code src="./demo/stack.tsx" title="堆叠条形图"></code>
<code src="./demo/group.tsx" title="分组条形图"></code>
<code src="./demo/percent.tsx" title="百分比条形图"></code>
<code src="./demo/progress.tsx" title="进度条形图" description="展示百分比，支持设置警告水位线、危险水位线"></code>
<code src="./demo/range.tsx" title="区间条形图"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| width | 图表宽度 | number | 容器宽度 | - |
| height | 图表高度 | number | 400 | - |
| data | 图表数据 | object[] | - | - |
| xField | x 方向字段名 | string | - | - |
| yField | y 方向字段名 | string | - | - |
| seriesField | 分类字段名，常用于堆叠条形图、分组条形图、百分比条形图 | string | - | - |
| isStack | 是否为堆叠条形图 | boolean | - | - |
| isGroup | 是否为分组条形图 | boolean | - | - |
| isPercent | 是否为百分比条形图，通常需要搭配 `isStack` 使用 | boolean | - | - |
| isRange | 是否为区间条形图 | boolean | - | - |
| isProgress <Badge>扩展属性</Badge> | 是否为进度条形图，数值范围为 0 ~ 1 | boolean | - | - |
| warningPercent <Badge>扩展属性</Badge> | 警告水位线，仅 `isProgress` 为 `true` 时生效 | number，范围 0-1 | - | - |
| dangerPercent <Badge>扩展属性</Badge> | 危险水位线，仅 `isProgress` 为 `true` 时生效 | number，范围 0-1 | - | - |

- 更多 API 详见 Ant Design Charts 文档：https://charts.ant.design/zh/examples/bar/basic#basic
