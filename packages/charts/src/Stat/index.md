---
title: Stat 数字统计
nav:
  title: 图表
  path: /charts
---

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基础数字统计"></code>

## API

| 参数        | 说明                 | 类型                                    | 默认值     | 版本 |
| :---------- | :------------------- | :-------------------------------------- | :--------- | :--- |
| width       | 图表宽度             | number                                  | 容器宽度   | -    |
| height      | 图表高度             | number                                  | 400        | -    |
| padding     | 图表内间距           | number                                  | 8          | -    |
| title       | 标题                 | string                                  | -          | -    |
| value       | 数值                 | number                                  | -          | -    |
| prefix      | 数值前缀             | string                                  | -          | -    |
| suffix      | 数值后缀             | string                                  | -          | -    |
| layout      | 布局                 | vertical \| horizontal                  | vertical   | -    |
| theme       | 主题模式             | light \| dark                           | light      | -    |
| colorMode   | 着色模式             | none \| value \| background             | background | -    |
| chartMode   | 图表模式             | none \| line \| area                    | none       | -    |
| chartData   | 图表数据             | number[]                                | []         | -    |
| chartConfig | 图表配置             | [TinyAreaConfig](/charts/tiny#tinyarea) | -          | -    |
| textAlign   | 内容对齐方式         | auto \| center                          | -          | -    |
| thresholds  | 阈值和颜色值映射对象 | object                                  | -          | -    |
| className   | 类名                 | string                                  | -          | -    |
| style       | 样式                 | CSSProperties                           | -          | -    |
