---
title: Histogram 直方图
nav:
  title: 图表
  path: /charts
---

## 代码演示

<code src="./demo/basic.tsx" title="基础直方图"></code>

<code src="./demo/stack.tsx" title="堆叠直方图"></code>

## API

| 参数       | 说明                               | 类型     | 默认值   | 版本 |
| :--------- | :--------------------------------- | :------- | :------- | :--- |
| width      | 图表宽度                           | number   | 容器宽度 | -    |
| height     | 图表高度                           | number   | 400      | -    |
| data       | 图表数据                           | object[] | -        | -    |
| binField   | 值字段名，用于分箱                 | string   | -        | -    |
| stackField | 分类字段名，用于堆叠直方图         | string   | -        | -    |
| binWidth   | 分箱宽度，决定直方图被分成多少箱   | number   | -        | -    |
| binNumber  | 分箱数，不能与 `binWidth` 一起使用 | number   | -        | -    |

- 更多 API 详见 Ant Design Charts 文档：https://charts.ant.design/zh/examples/more-plots/histogram#basic
