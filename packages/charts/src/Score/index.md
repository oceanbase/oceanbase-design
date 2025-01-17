---
title: Score 得分图
nav:
  title: 图表
  path: /charts
---

## 默认规范

- 默认 85 <= num 分为优（绿色），70 <= num < 85 为良（蓝色），60 <= num < 70 为中（橙色），NUM < 60 为差（红色）

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基础使用"></code>
<code src="./demo/customColor.tsx" title="自定义颜色和单位"></code>
<code src="./demo/customThreshold.tsx" title="自定义阈值"></code>

## API

| 参数       | 说明                 | 类型            | 默认值 | 版本 |
| :--------- | :------------------- | :-------------- | :----- | :--- |
| size       | 图表大小             | string\| number | middle | -    |
| color      | 图表颜色             | string          | green  | -    |
| value      | 数值                 | number          | -      | -    |
| valueStyle | 数字样式             | CSSProperties   | -      | -    |
| unit       | 单位                 | string          | 分     | -    |
| unitStyle  | 单位样式             | CSSProperties   | -      | -    |
| thresholds | 阈值和颜色值映射对象 | object          | -      | -    |
| className  | 类名                 | string          | -      | -    |
