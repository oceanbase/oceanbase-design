---
title: Migrate from antd
order: 5
group: General
---

OceanBase Design is aligned with the Ant Design design system and fully inherits the capabilities and API of [Ant Design](https://ant.design). The differences are only in component theme, styles, and extended capabilities. You can migrate from Ant Design to OceanBase Design by simply replacing the module entry.

## Automated Migration

- Use [@oceanbase/codemod](https://github.com/oceanbase/oceanbase-design/tree/master/packages/codemod) to migrate from `antd` to `@oceanbase/design` in one step:

```shell
# Run directly through npx
# `src` is the target directory or file that you want to transform.
npx -p @oceanbase/codemod codemod src
# options
# --disablePrettier   // disable prettier
```

## Manual Migration

```diff
- import { xxx } from 'antd';
- import { xxx } from 'antd/es/button';
+ import { xxx } from '@oceanbase/design';
+ import { xxx } from '@oceanbase/design/es/button';
```
