---
title: Pie 饼图 & 环图
nav:
  title: 图表
  path: /charts
---

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/pie.tsx" title="基础饼图"></code>
<code src="./demo/donut.tsx" title="基础环图"></code>
<code src="./demo/donut-floor.tsx" title="环图-浮点数精度" debug></code>
<code src="./demo/half-donut.tsx" title="半圆环图"></code>
<code src="./demo/state-change.tsx" title="useMemo-状态改变" debug></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| width | 图表宽度 | number | 容器宽度 | - |
| height | 图表高度 | number | 400 | - |
| data | 图表数据 | object[] | - | - |
| angleField | 扇形切片大小（弧度）所对应的数据字段名 | string | - | - |
| colorField | 扇形颜色映射对应的数据字段名 | string | - | - |
| isDonut <Badge>扩展属性</Badge> | 是否为环图 | boolean | false | - |
| isHalfDonut <Badge>扩展属性</Badge> | 是否为半圆环图 | boolean | false | - |
| statisticTitle <Badge>扩展属性</Badge> | 统计标题 | string | 总数 | - |

- 更多 API 详见 Ant Design Charts 文档：https://charts.ant.design/zh/examples/pie/basic#basic
