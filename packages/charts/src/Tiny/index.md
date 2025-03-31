---
title: Tiny 迷你图
nav:
  title: 图表
  path: /charts
---

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/line.tsx" title="迷你折线图"></code>
<code src="./demo/area.tsx" title="迷你面积图"></code>
<code src="./demo/column.tsx" title="迷你柱状图"></code>
<code src="./demo/progress.tsx" title="进度条图"></code>

## API

### TinyLine

| 参数      | 说明       | 类型                           | 默认值   | 版本 |
| :-------- | :--------- | :----------------------------- | :------- | :--- |
| width     | 图表宽度   | number                         | 容器宽度 | -    |
| height    | 图表高度   | number                         | 60       | -    |
| data      | 图表数据   | number[]                       | -        | -    |
| color     | 颜色       | string \| string[] \| Function | -        | -    |
| lineStyle | line 样式  | -                              | -        | -    |
| point     | point 样式 | -                              | -        | -    |

### TinyArea

| 参数      | 说明       | 类型                           | 默认值   | 版本 |
| :-------- | :--------- | :----------------------------- | :------- | :--- |
| width     | 图表宽度   | number                         | 容器宽度 | -    |
| height    | 图表高度   | number                         | 60       | -    |
| data      | 图表数据   | number[]                       | -        | -    |
| color     | 颜色       | string \| string[] \| Function | -        | -    |
| areaStyle | area 样式  | StyleAttr \| Function          | -        | -    |
| line      | line 样式  | object                         | -        | -    |
| point     | point 样式 | object                         | -        | -    |

### TinyColumn

| 参数        | 说明        | 类型                           | 默认值   | 版本 |
| :---------- | :---------- | :----------------------------- | :------- | :--- |
| width       | 图表宽度    | number                         | 容器宽度 | -    |
| height      | 图表高度    | number                         | 60       | -    |
| data        | 图表数据    | number[]                       | -        | -    |
| color       | 颜色        | string \| string[] \| Function | -        | -    |
| columnStyle | column 样式 | StyleAttr \| Function          | -        | -    |
| label       | label 样式  | object                         | -        | -    |

### Progress

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| width | 图表宽度 | number | 容器宽度 | - |
| height | 图表高度 | number | 20 | - |
| compact <Badge>扩展属性</Badge> | 是否为紧凑型布局，此时进度条与标签的间距较小，常用于表格等场景 | boolean | false | - |
| title <Badge>扩展属性</Badge> | 标题 | ReactNode | - | - |
| percent | 百分比数值 | number，范围 0-1 | - | - |
| warningPercent <Badge>扩展属性</Badge> | 警告水位线 | number，范围 0-1 | - | - |
| dangerPercent <Badge>扩展属性</Badge> | 危险水位线 | number，范围 0-1 | - | - |
| color | 颜色 | string \| string[] \| Function | - | - |
| progressStyle | 进度条样式 | StyleAttr \| Function | - | - |
| percentStyle <Badge>扩展属性</Badge> | 百分比标签样式 | CSSProperties | - | - |
| maxColumnWidth | 进度条最大宽度 | number | - | - |
| decimal <Badge>扩展属性</Badge> | 百分比最多保留的有效小数位数 | number | 2 | - |
| formatter <Badge>扩展属性</Badge> | 自定义百分比展示的函数 | (percent: number) => ReactNode | (percent) => \`${percent \* 100}%\` | - |

- 更多 API 详见 Ant Design Charts 文档：https://charts.ant.design/zh/examples/tiny/tiny-line#basic-line
