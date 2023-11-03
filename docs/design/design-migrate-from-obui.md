---
title: 从 @alipay/ob-ui 迁移
order: 6
group: 基础组件
---

内部包 `@alipay/ob-ui` 由于包含多种类型的组件，不便于管理和使用。因此在对外开源时，将其拆分成了 `@oceanbase/design` 基础组件库和 `@oceanbase/ui` 业务组件库，且有一定的不兼容变更，建议使用我们提供的自动化工具进行迁移。

## 自动化迁移

- 使用 [@oceanbase/codemod](https://github.com/oceanbase/oceanbase-design/tree/master/packages/codemod) 可以从 `@alipay/ob-ui` 一键迁移到 `@oceanbase/design`:

```shell
# Run directly through npx
# `src` is the target directory or file that you want to transform.
npx -p @oceanbase/codemod codemod src
# options
# --disablePrettier   // disable prettier
```
