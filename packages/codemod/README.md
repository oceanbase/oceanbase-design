# OceanBase Codemod

A collection of codemod scripts that help migrate to OceanBase Design using [jscodeshift](https://github.com/facebook/jscodeshift) and [postcss](https://github.com/postcss/postcss).(Inspired by [@oceanbase/codemod](https://github.com/ant-design/codemod-v5))

[![NPM version](https://img.shields.io/npm/v/@oceanbase/codemod.svg?style=flat)](https://npmjs.org/package/@oceanbase/codemod) [![NPM downloads](http://img.shields.io/npm/dm/@oceanbase/codemod.svg?style=flat)](https://npmjs.org/package/@oceanbase/codemod) [![Github Action](https://github.com/oceanbase/oceanbase-design/actions/workflows/ci.yml/badge.svg)](https://github.com/oceanbase/oceanbase-design/actions/workflows/ci.yml)

## Prerequisite

- antd v5 is the prerequisite. If you are using antd v4, please refer to [Upgrade Guideline](https://ant-design.antgroup.com/docs/react/migration-v5).

## Usage

Before run codemod scripts, you'd better make sure to commit your local git changes firstly.

```shell
# Run directly through npx
npx -p @oceanbase/codemod codemod src
```

## Codemod scripts introduction

### `antd-to-oceanbase-design`

import components and types from `antd` and `@alipay/bigfish/antd` to `@oceanbase/design`.

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

import components and types from `antd` to `@oceanbase/design` and `@oceanbase/ui`.

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

import components and types from `@ant-design/charts` and `@alipay/ob-charts` to `@oceanbase/charts`.

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

import utils and hooks from `@alipay/ob-util` to `@oceanbase/util`. Additionally, it will rename `getTableData` to `useTableData` to follow hooks naming conventions.

```diff
  import React from 'react';
- import { isNullValue, sortByNumber, getTableData } from '@alipay/ob-util';
+ import { isNullValue, sortByNumber, useTableData } from '@oceanbase/util';

  const Demo = () => {
-    const { tableProps } = getTableData(fn, {});
+    const { tableProps } = useTableData(fn, {});
     return <div />;
  };

  export default Demo;
```

### `style-to-token`

transform fixed style to antd v5 design token.

- React function components:

```diff
  import React from 'react';
- import { Alert, Button } from '@oceanbase/design';
+ import { Alert, Button, theme } from '@oceanbase/design';

  const Demo = () => {
+   const { token } = theme.useToken();
    return (
-     <div>
-       <Alert style={{ color: 'rgba(0, 0, 0, 0.85)', background: 'rgba(0, 0, 0,0.65)', backgroundColor: 'rgba(0,0,0,0.45)', borderColor: '#fafafa' }} />
-       <Button style={{ color: '#1890ff', background: '#52c41a', backgroundColor: '#faad14', borderColor: '#ff4D4F' }}></Button>
-     </div>
+     (<div>
+       <Alert style={{ color: token.colorText, background: token.colorTextSecondary, backgroundColor: token.colorTextTertiary, borderColor: token.colorBgLayout }} />
+       <Button style={{ color: token.colorInfo, background: token.colorSuccess, backgroundColor: token.colorWarning, borderColor: token.colorError }}></Button>
+     </div>)
    );
  };

export default Demo;
```

- React class components:

```diff
  import React from 'react';
- import { Alert, Button } from '@oceanbase/design';
+ import { Alert, Button, token } from '@oceanbase/design';

  class Demo extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return (
-       <div>
-         <Alert style={{ color: 'rgba(0, 0, 0, 0.85)', background: 'rgba(0, 0, 0,0.65)', backgroundColor: 'rgba(0,0,0,0.45)', borderColor: '#fafafa' }} />
-         <Button style={{ color: '#1890ff', background: '#52c41a', backgroundColor: '#faad14', borderColor: '#ff4D4F' }}></Button>
-       </div>
+       (<div>
+         <Alert style={{ color: token.colorText, background: token.colorTextSecondary, backgroundColor: token.colorTextTertiary, borderColor: token.colorBgLayout }} />
+         <Button style={{ color: token.colorInfo, background: token.colorSuccess, backgroundColor: token.colorWarning, borderColor: token.colorError }}></Button>
+       </div>)
      );
    }
  }

  export default Demo;
```

- Static file (not react components):

```diff
+ import { token } from '@oceanbase/design';
  const colorMap = {
-   info: '#1890ff',
-   success: '#52c41a',
-   warning: '#faad14',
-   error: '#ff4D4F',
+   info: token.colorInfo,
+   success: token.colorSuccess,
+   warning: token.colorWarning,
+   error: token.colorError,
  };

  function getColorList() {
    return [
      {
        type: 'info',
-       color: '#1890ff',
+       color: token.colorInfo,
      },
      {
        type: 'success',
-       color: '#52c41a',
+       color: token.colorSuccess,
      },
      {
        type: 'warning',
-       color: '#faad14',
+       color: token.colorWarning,
      },
      {
        type: 'error',
-       color: '#ff4D4F',
+       color: token.colorError,
      }
    ];
  }
```

### `less-to-token`

transform less style to antd v5 design token.

```diff
+ @import '~@oceanbase/design/es/theme/index.less';
  .container {
-   color: #1890ff;
+   color: @colorInfo;
-   background: #52c41a;
+   background: @colorSuccess;
-   background-color: #faad14;
+   background-color: @colorWarning;
-   border-color: #ff4D4F;
+   border-color: @colorError;
    .content {
-     color: rgba(0, 0, 0, 0.85);
+     color: @colorText;
-     background: rgba(0, 0, 0,0.65);
+     background: @colorTextSecondary;
-     background-color: rgba(0,0,0,0.45);
+     background-color: @colorTextTertiary;
-     border: 1px solid #d9d9d9;
+     border: 1px solid @colorBorder;
    }
}
```
