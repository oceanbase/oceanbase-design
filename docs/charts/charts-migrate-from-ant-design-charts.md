---
title: 从 Ant Design Charts 迁移
order: 10
group: 可视化图表
---

OceanBase Charts 与 AntV 设计体系一脉相承，完全兼容 [Ant Design Charts](https://charts.ant.design) 的能力和 API。两者仅在图表样式、交互和部分扩展能力上存在差异，因此只需简单替换模块入口，即可从 Ant Design Charts 平滑迁移至 OceanBase Charts。

```diff
- import { xxx } from '@ant-design/charts';
+ import { xxx } from '@oceanbase/charts';
```

作为 OceanBase 的图表最佳实践，大多数情况下，只需指定数据相关属性、无需定制图表样式和交互，即可保证最佳展示效果。因此迁移至 OceanBase Charts 后，如无必要，建议去掉自定义样式，直接使用默认样式和交互即可。
