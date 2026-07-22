---
title: Migrate from @alipay/ob-ui
order: 6
group: General
---

The internal package `@alipay/ob-ui` contained multiple types of components, making it hard to manage and use. For open source, it was split into `@oceanbase/design` (base components) and `@oceanbase/ui` (biz components), with some breaking changes. We recommend using our automated migration tool.

## Automated Migration

- Use [@oceanbase/codemod](https://github.com/oceanbase/oceanbase-design/tree/master/packages/codemod) to migrate from `@alipay/ob-ui` to `@oceanbase/design` in one step:

```shell
# Run directly through npx
# `src` is the target directory or file that you want to transform.
npx -p @oceanbase/codemod codemod src
# options
# --disablePrettier   // disable prettier
```
