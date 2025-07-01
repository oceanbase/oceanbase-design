---
title: 更新日志
order: 11
group: 可视化图表
---

`@oceanbase/charts` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

---

## 0.4.6

`2025-07-01`

- 🆕 Line 新增 `area.gradientFill` 属性，用于设置渐变面积图。[#1078](https://github.com/oceanbase/oceanbase-design/pull/1078) [@wzc520pyfm](https://github.com/wzc520pyfm)

## 0.4.0

`2024-10-09`

## 0.3.3

`2024-09-23`

- 🐞 修复 `tooltip` 无法换行、导致内容溢出的问题。[#684](https://github.com/oceanbase/oceanbase-design/pull/684)

## 0.3.1

`2024-04-12`

- 🐞 Line、Area、Column 和 DualAxes 去掉不合理的 `xAxis.tickCount` 计算逻辑，改由上层进行控制。[#560](https://github.com/oceanbase/oceanbase-design/pull/560)
- 💄 去掉 Bar 条形的固定宽度，改为自适应。
- 💄 去掉 Column 和 DualAxes 柱形的固定宽度，改为自适应。

## 0.3.0

`2024-03-22`

## 0.2.22

`2024-01-18`

- 🆕 Stat 新增 padding 属性，用于设置图表的内间距。[#412](https://github.com/oceanbase/oceanbase-design/pull/412)
- 🐞 修复 Pie 环图统计组件标题和内容 `formatter` 不生效的问题。[#413](https://github.com/oceanbase/oceanbase-design/pull/413)

## 0.2.21

`2024-01-12`

- 🐞 修复 Pie 在环图模式下计算总和时浮点数精度不正确的问题。[#406](https://github.com/oceanbase/oceanbase-design/pull/406)

## 0.2.20

`2023-12-28`

- Stat
  - 🆕 新增 `chartConfig` 属性，用于配置图表。[#384](https://github.com/oceanbase/oceanbase-design/pull/384)
  - 💄 优化样式，包括限制 `title` 字体最小为 12px、限制 `value` 字体最大为 40px 以及优化内容居中对齐样式。[#385](https://github.com/oceanbase/oceanbase-design/pull/385)
  - 💄 容器高度小于 `72px` 时，图表的高度比例从 `0.5` 减小为 `0.25`。[#387](https://github.com/oceanbase/oceanbase-design/pull/387)
- Liquid
  - 🆕 新增 `containerStyle`、`percentStyle` 和 `titleStyle` 属性，分别用于设置容器样式、百分比样式和标题样式。[#374](https://github.com/oceanbase/oceanbase-design/pull/374)
  - 🐞 修复未设置图表高度时水波无法渲染的问题。[#383](https://github.com/oceanbase/oceanbase-design/pull/383)
- 💄 Column 适配 X 时序轴，自动对数据进行排序，并关闭自动美化避免两侧留白。[#382](https://github.com/oceanbase/oceanbase-design/pull/382)

## 0.2.19

`2023-12-14`

- 🐞 修复折线图、面积图和双轴图的 tooltip 无法关闭的问题。[#351](https://github.com/oceanbase/oceanbase-design/pull/351) [@Qiuhang817385](https://github.com/Qiuhang817385)

## 0.2.17

`2023-11-30`

- 🌈 更新浅色主题和暗色主题的分类色板和语义色板。[#306](https://github.com/oceanbase/oceanbase-design/pull/306)
