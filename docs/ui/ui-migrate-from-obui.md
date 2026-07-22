---
title: Migrate from @alipay/ob-ui
order: 6
group: Biz Components
---

The internal package `@alipay/ob-ui` contains various types of components, making it difficult to manage and use. Therefore, when open-sourcing, it was split into `@oceanbase/design` (base component library) and `@oceanbase/ui` (biz component library), with some breaking changes. We recommend using our automated migration tools.

## Automated Migration

- Use [@oceanbase/codemod](https://github.com/oceanbase/oceanbase-design/tree/master/packages/codemod) to migrate from `@alipay/ob-ui` to `@oceanbase/ui` in one step:

```shell
# Run directly through npx
# `src` is the target directory or file that you want to transform.
npx -p @oceanbase/codemod codemod src
# options
# --disablePrettier   // disable prettier
```
