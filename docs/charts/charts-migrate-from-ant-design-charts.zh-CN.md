---
title: 从 @ant-design/charts 迁移
order: 10
group: 可视化图表
---

OceanBase Charts 与 AntV 设计体系一脉相承，完全继承 [Ant Design Charts](https://charts.ant.design) 的能力和 API。两者仅在图表样式、交互和部分扩展能力上存在差异，因此只需简单替换模块入口，即可从 Ant Design Charts 平滑迁移至 OceanBase Charts。

## 自动化迁移

- 使用 [@oceanbase/codemod](https://github.com/oceanbase/oceanbase-design/tree/master/packages/codemod) 可以从 `@ant-design/charts` 一键迁移到 `@oceanbase/charts`:

```shell
# Run directly through npx
# `src` is the target directory or file that you want to transform.
npx -p @oceanbase/codemod codemod src
# options
# --disablePrettier   // disable prettier
```

## 手动迁移

```diff
- import { xxx } from '@ant-design/charts';
+ import { xxx } from '@oceanbase/charts';
```

作为 OceanBase 的图表最佳实践，大多数情况下，只需指定数据相关属性、无需定制图表样式和交互，即可保证最佳展示效果。因此迁移至 OceanBase Charts 后，如无必要，建议去掉自定义样式，使用默认样式和交互即可。
