# OceanBase Codemod

A collection of codemod scripts that help migrate to OceanBase Design using [jscodeshift](https://github.com/facebook/jscodeshift) and [postcss](https://github.com/postcss/postcss).(Inspired by [@oceanbase/codemod](https://github.com/ant-design/codemod-v5))

[![NPM version](https://img.shields.io/npm/v/@oceanbase/codemod.svg?style=flat)](https://npmjs.org/package/@oceanbase/codemod) [![NPM downloads](http://img.shields.io/npm/dm/@oceanbase/codemod.svg?style=flat)](https://npmjs.org/package/@oceanbase/codemod) [![Github Action](https://github.com/oceanbase/design/actions/workflows/ci.yml/badge.svg)](https://github.com/oceanbase/design/actions/workflows/ci.yml)

## Usage

Before run codemod scripts, you'd better make sure to commit your local git changes firstly.

```shell
# Run directly through npx
npx -p @oceanbase/codemod codemod src
```

## Codemod scripts introduction

### `antd-to-oceanbase-design`

import components and typs from `antd` and `@alipay/bigfish/antd` to `@oceanbase/design`.

```diff
  import React from 'react';
- import { Button, Card } from 'antd';
- import type { ButtonProps, CardProps } from 'antd';
- import type { ModalProps } from 'antd/es/modal';
- import type { Route } from 'antd/es/breadcrumb/Breadcrumb';
- import type { TooltipProps } from 'antd/lib/tooltip';
- import type { FilterDropdownProps } from 'antd/lib/table/interface';
+ import { Button, Card } from '@oceanbase/design';
+ import type { ButtonProps, CardProps } from '@oceanbase/design';
+ import type { ModalProps } from '@oceanbase/design/es/modal';
+ import type { Route } from '@oceanbase/design/es/breadcrumb/Breadcrumb';
+ import type { TooltipProps } from '@oceanbase/design/lib/tooltip';
+ import type { FilterDropdownProps } from '@oceanbase/design/lib/table/interface';

  const Demo = () => {
    return <div />;
  };

  export default Demo;
```

### `obui-to-oceanbase-design-and-ui`

import components and typs from `antd` to `@oceanbase/design` and `@oceanbase/ui`.

```diff
  import React from 'react';
- import { Alert, Button, BasicLayout, Login, PageContainer } from '@alipay/ob-ui';
- import type { BasicLayoutProps } from '@alipay/ob-ui/es/BasicLayout';
- import type { LoginProps } from '@alipay/ob-ui/es/Login';
- import type { PageContainerProps } from '@alipay/ob-ui/es/PageContainer';
+ import { Alert, Button } from '@oceanbase/design';
+ import { BasicLayout, Login, PageContainer } from '@oceanbase/ui';
+ import type { BasicLayoutProps } from '@oceanbase/ui/es/BasicLayout';
+ import type { LoginProps } from '@oceanbase/ui/es/Login';
+ import type { PageContainerProps } from '@oceanbase/ui/es/PageContainer';

  const Demo = () => {
    return <div />;
  };

  export default Demo;
```

### `page-container-to-oceanbase-ui`

import `PageContainer` from `@alipay/tech-ui` to `@ant-design/pro-components` and `@oceanbase/ui`.

```diff
  import React from 'react';
- import { PageContainer, ProTable, WelcomeCard } from '@alipay/tech-ui';
- import type { PageContainerProps, ProTableProps, WelcomeCardProps } from '@alipay/tech-ui';
+ import { ProTable, WelcomeCard } from '@alipay/tech-ui';
+ import { PageContainer } from '@oceanbase/ui';
+ import type { ProTableProps, WelcomeCardProps } from '@alipay/tech-ui';
+ import type { PageContainerProps } from '@oceanbase/ui';

  const Demo = () => {
    return <div />;
  };

  export default Demo;
```

### `antd-and-ob-charts-to-oceanbase-charts`

import components and typs from `@ant-design/charts` and `@alipay/ob-charts` to `@oceanbase/charts`.

```diff
  import React from 'react';
- import { Bar, Line } from '@ant-design/charts';
- import type { BarConfig, LineConfig } from '@ant-design/charts';
+ import { Bar, Line } from '@oceanbase/charts';
+ import type { BarConfig, LineConfig } from '@oceanbase/charts';

  const Demo = () => {
    return <div />;
  };

  export default Demo;
```

```diff
  import React from 'react';
- import { Bar, Line } from '@alipay/ob-charts';
- import type { BarConfig, LineConfig } from '@ant-design/ob-charts';
+ import { Bar, Line } from '@oceanbase/charts';
+ import type { BarConfig, LineConfig } from '@oceanbase/charts';

  const Demo = () => {
    return <div />;
  };

  export default Demo;
```

### `obutil-to-oceanbase-util`

import components and typs from `@alipay/ob-util` to `@oceanbase/util`.

```diff
  import React from 'react';
- import { isNullValue, sortByNumber } from '@alipay/ob-util';
+ import { isNullValue, sortByNumber } from '@oceanbase/util';

  const Demo = () => {
    return <div />;
  };

  export default Demo;
```
