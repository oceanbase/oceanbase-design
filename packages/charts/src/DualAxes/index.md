---
title: DualAxes 双轴图
nav:
  title: 图表
  path: /charts
---

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/dual-line.tsx" title="双折线双轴图"></code>
<code src="./demo/multi-line.tsx" title="多折线双轴图"></code>
<code src="./demo/column-line.tsx" title="柱线混合双轴图"></code>
<code src="./demo/column-multi-line.tsx" title="柱线混合双轴图-多折线"></code>
<code src="./demo/tooltip-scrollable.tsx" title="Tooltip 可滚动" description="适用于 Tooltip 项较多、超出图表的场景，可通过 `tooltip.scrollable: true` 配置进行开启。"></code>

## API

### DualAxes

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| width | 图表宽度 | number | 容器宽度 | - |
| height | 图表高度 | number | 400 | - |
| data | 图表数据二维数组，形式为 `[左轴图形数据，右轴图形数据]` | object[][] | - | - |
| xField | x 方向字段名 | string | - | - |
| yField | y 方向字段名数组，形式为 `[左轴图形数据字段名，右轴图形数据字段名]` | string[] | - | - |
| geometryOptions | 双轴各自对应的图形配置，形式为 `[左轴图形配置，右轴图形配置]`，配置类型为 [GeometryLineOption](#geometrylineoption) 或 [GeometryColumnOption](#geometrycolumnoption) | (GeometryLineOption \| GeometryColumnOption)[] | - | - |

### GeometryLineOption

| 参数        | 说明           | 类型      | 默认值 | 版本 |
| :---------- | :------------- | :-------- | :----- | :--- |
| geometry    | 图形类型       | string    | line   | -    |
| seriesField | 分类字段名     | string    | -      | -    |
| smooth      | 是否平滑       | boolean   | false  | -    |
| lineStyle   | 折线样式       | LineStyle | -      | -    |
| point       | 折线数据点样式 | Point     | -      | -    |

### GeometryColumnOption

| 参数        | 说明           | 类型        | 默认值 | 版本 |
| :---------- | :------------- | :---------- | :----- | :--- |
| geometry    | 图形类型       | string      | line   | -    |
| seriesField | 分类字段名     | string      | -      | -    |
| groupField  | 分组字段名     | string      | -      | -    |
| isStack     | 是否堆叠柱状图 | boolean     | false  | -    |
| isGroup     | 是否分组柱状图 | boolean     | false  | -    |
| isRange     | 是否区间柱状图 | boolean     | false  | -    |
| columnStyle | 柱子样式       | ColumnStyle | -      | -    |
| label       | 柱状图 label   | Label       | -      | -    |

- 更多 API 详见 Ant Design Charts 文档：https://charts.ant.design/zh/examples/dual-axes/dual-line#dual-line
