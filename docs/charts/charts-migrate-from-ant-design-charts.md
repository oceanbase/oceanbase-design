---
title: Migrate from @ant-design/charts
order: 10
group: Charts
---

OceanBase Charts shares the same design system as AntV and fully inherits the capabilities and API of [Ant Design Charts](https://charts.ant.design). The two differ only in chart styling, interaction, and some extension capabilities. Therefore, you can migrate from Ant Design Charts to OceanBase Charts by simply replacing the module entry.

## Automated Migration

- Use [@oceanbase/codemod](https://github.com/oceanbase/oceanbase-design/tree/master/packages/codemod) to migrate from `@ant-design/charts` to `@oceanbase/charts` in one step:

```shell
# Run directly through npx
# `src` is the target directory or file that you want to transform.
npx -p @oceanbase/codemod codemod src
# options
# --disablePrettier   // disable prettier
```

## Manual Migration

```diff
- import { xxx } from '@ant-design/charts';
+ import { xxx } from '@oceanbase/charts';
```

As the recommended chart practice for OceanBase, in most cases you only need to specify data-related properties; no custom styling is required to achieve the best display. After migrating to OceanBase Charts, we recommend removing custom styles and using the default styles and interactions unless necessary.
