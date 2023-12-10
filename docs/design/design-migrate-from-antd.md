---
title: 从 antd 迁移
order: 5
group: 基础组件
---

OceanBase Design 与 Ant Design 设计体系一脉相承，完全继承 [Ant Design](https://ant.design) 的能力和 API。两者仅在组件主题、样式和扩展能力上存在差异，因此只需简单替换模块入口，即可从 Ant Design 平滑迁移至 OceanBase Design。

## 自动化迁移

- 使用 [@oceanbase/codemod](https://github.com/oceanbase/oceanbase-design/tree/master/packages/codemod) 可以从 `antd` 一键迁移到 `@oceanbase/design`:

```shell
# Run directly through npx
# `src` is the target directory or file that you want to transform.
npx -p @oceanbase/codemod codemod src
# options
# --disablePrettier   // disable prettier
```

## 手动迁移

```diff
- import { xxx } from 'antd';
- import { xxx } from 'antd/es/button';
+ import { xxx } from '@oceanbase/design';
+ import { xxx } from '@oceanbase/design/es/button';
```
