---
title: Liquid 水波图
nav:
  title: 图表
  path: /charts
---

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/circle.tsx" title="圆形水波图"></code>
<code src="./demo/rect.tsx" title="矩形水波图"></code>
<code src="./demo/horizontal.tsx" title="水平布局的水波图"></code>
<code src="./demo/decimal.tsx" title="数据精度" description="默认最多保留两位有效小数，可通过 `decimal` 进行设置。"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| width | 图表宽度 | number | height | - |
| height | 图表高度 | number | 400 | - |
| layout <Badge>扩展属性</Badge> | 布局 | vertical | horizontal \| vertical | - |
| title <Badge>扩展属性</Badge> | 标题 | ReactNode | - | - |
| percent | 百分比数值 | number，范围 0-1 | - | - |
| warningPercent <Badge>扩展属性</Badge> | 警告水位线 | number，范围 0-1 | - | - |
| dangerPercent <Badge>扩展属性</Badge> | 危险水位线 | number，范围 0-1 | - | - |
| decimal <Badge>扩展属性</Badge> | 百分比最多保留的有效小数位数 | number | 2 | - |
| containerStyle | 容器样式 | CSSProperties | - | - |
| percentStyle | 百分比样式 | CSSProperties | - | - |
| titleStyle | 标题样式 | CSSProperties | - | - |

- 更多 API 详见 Ant Design Charts 文档：https://charts.ant.design/zh/examples/progress-plots/liquid#basic
