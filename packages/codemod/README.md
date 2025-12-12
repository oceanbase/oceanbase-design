# OceanBase Codemod

A collection of codemod transformers that help migrate from `antd`, `@alipay/ob-ui`, `@alipay/tech-ui`, `@ant-design/pro-components` and `@ant-design/charts` to OceanBase Design System by using [jscodeshift](https://github.com/facebook/jscodeshift) and [postcss](https://github.com/postcss/postcss). (Inspired by [@ant-design/codemod-v5](https://github.com/ant-design/codemod-v5))

[![NPM version](https://img.shields.io/npm/v/@oceanbase/codemod.svg?style=flat)](https://npmjs.org/package/@oceanbase/codemod) [![NPM downloads](http://img.shields.io/npm/dm/@oceanbase/codemod.svg?style=flat)](https://npmjs.org/package/@oceanbase/codemod) [![Github Action](https://github.com/oceanbase/oceanbase-design/actions/workflows/ci.yml/badge.svg)](https://github.com/oceanbase/oceanbase-design/actions/workflows/ci.yml)

## Prerequisite

- `antd v5` is the prerequisite. If you are using `antd v4`, please refer to [Upgrade Guideline](https://ant-design.antgroup.com/docs/react/migration-v5).

## Usage

Before run codemod, you'd better make sure to commit your local git changes firstly.

```shell
# Run directly through npx
# `src` is the target directory or file that you want to transform.
npx -p @oceanbase/codemod codemod src
# options
# --transformer=t1,t2     // run specify transformers
# --disablePrettier       // disable prettier
# --ignore-config         // ignore config file
```

Run specific transformers:

```shell
npx -p @oceanbase/codemod codemod src --transformer=style-to-token,less-to-token
```

Ignore config file:

```shell
npx -p @oceanbase/codemod codemod src --ignore-config=.codemodignore
```

- `.codemodignore`:

```bash
node_modules
*.css
*.json
.umi
.umi-production
.umi-test
```

## Codemod transformers introduction

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

### `techui-and-pro-components-to-oceanbase-ui`

import `PageContainer` from `@alipay/tech-ui` and `@ant-design/pro-components` to `@oceanbase/ui`.

```diff
  import React from 'react';
- import { PageContainer, ProTable, WelcomeCard } from '@alipay/tech-ui';
- import type { PageContainerProps, ProTableProps, WelcomeCardProps } from '@alipay/tech-ui';
+ import { WelcomeCard } from '@alipay/tech-ui';
+ import { PageContainer, ProTable } from '@oceanbase/ui';
+ import type { WelcomeCardProps } from '@alipay/tech-ui';
+ import type { PageContainerProps, ProTableProps } from '@oceanbase/ui';

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
-       <Alert style={{ color: 'rgba(0, 0, 0, 0.85)', background: 'rgba(0, 0, 0,0.65)', backgroundColor: 'rgba(0,0,0,0.45)', border: '1px solid #d9d9d9', fontSize: 14 }} />
-       <Button style={{ color: '#1890ff', background: '#52c41a', backgroundColor: '#faad14', borderColor: '#ff4d4f', fontSize: 12 }}></Button>
-     </div>
+     <div>
+       <Alert style={{ color: token.colorText, background: token.colorTextSecondary, backgroundColor: token.colorTextTertiary, border: `1px solid ${token.colorBorder}`, fontSize: token.fontSize }} />
+       <Button style={{ color: token.colorInfo, background: token.colorSuccess, backgroundColor: token.colorWarning, borderColor: token.colorError, fontSize: token.fontSizeSM }}></Button>
+     </div>
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
-         <Alert style={{ color: 'rgba(0, 0, 0, 0.85)', background: 'rgba(0, 0, 0,0.65)', backgroundColor: 'rgba(0,0,0,0.45)', border: '#d9d9d9', fontSize: 14 }} />
-         <Button style={{ color: '#1890ff', background: '#52c41a', backgroundColor: '#faad14', borderColor: '#ff4d4f', fontSize: 12 }}></Button>
-         <div color="#fafafa" border="1px solid #fafafa" />
-       </div>
+       <div>
+         <Alert style={{ color: token.colorText, background: token.colorTextSecondary, backgroundColor: token.colorTextTertiary, border: `1px solid ${token.colorBgLayout}`, fontSize: token.fontSize }} />
+         <Button style={{ color: token.colorInfo, background: token.colorSuccess, backgroundColor: token.colorWarning, borderColor: token.colorError, fontSize: token.fontSizeSM }}></Button>
+         <div color={token.colorBgLayout} border={`1px solid ${token.colorBgLayout}`} />
+       </div>
      );
    }
  }

  export default Demo;
```

- Static file (not react components):

```diff
+ import { token } from '@oceanbase/design';
- const color = '#fafafa';
- const border = '1px solid #fafafa';
+ const color = token.colorBgLayout;
+ const border = `1px solid ${token.colorBgLayout}`;
  const colorMap = {
-   info: '#1890ff',
-   success: '#52c41a',
-   warning: '#faad14',
-   error: '#ff4d4f',
-   border: '1px solid #d9d9d9',
-   fontSize: 14,
+   info: token.colorInfo,
+   success: token.colorSuccess,
+   warning: token.colorWarning,
+   error: token.colorError,
+   border: `1px solid ${token.colorBorder}`,
+   fontSize: token.fontSize,
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
-       color: '#ff4d4f',
+       color: token.colorError,
      },
      {
        type: 'border',
-       color: '1px solid #d9d9d9',
+       color: `1px solid ${token.colorBorder}`,
      },
      {
        type: 'fontSize',
-       fontSize: 14,
+       fontSize: token.fontSize,
      }
    ];
  }
```

### `less-to-token`

transform fixed less style to antd v5 design token.

```diff
+ @import '~@oceanbase/design/es/theme/index.less';
  .container {
-   color: #1890ff;
-   background: #52c41a;
-   background-color: #faad14;
-   border-color: #ff4d4f;
-   font-size: 14px;
+   color: @colorInfo;
+   background: @colorSuccess;
+   background-color: @colorWarning;
+   border-color: @colorError;
+   font-size: @fontSize;
    .content {
-     color: rgba(0, 0, 0, 0.85);
-     background: rgba(0, 0, 0,0.65);
-     background-color: rgba(0,0,0,0.45);
-     border: 1px solid #d9d9d9;
-     font-size: 12px;
+     color: @colorText;
+     background: @colorTextSecondary;
+     background-color: @colorTextTertiary;
+     border: 1px solid @colorBorder;
+     font-size: @fontSizeSM;
    }
  }
```

### `less-to-cssvar`

Transform Less variables to CSS variables. This transformer must be explicitly specified via `--transformer` option.

```shell
# Basic usage (auto-detect: CSS Module import → .module.css, global import → .css)
npx -p @oceanbase/codemod codemod src --transformer=less-to-cssvar

# Output as .scss instead of .css
npx -p @oceanbase/codemod codemod src --transformer=less-to-cssvar --rename-to=scss

# With custom prefix (default: ant)
npx -p @oceanbase/codemod codemod src --transformer=less-to-cssvar --prefix=ob

# Never add .module suffix (skip auto-detection)
npx -p @oceanbase/codemod codemod src --transformer=less-to-cssvar --add-module=false

# Keep .less extension (disable renaming)
npx -p @oceanbase/codemod codemod src --transformer=less-to-cssvar --rename-to=false

# Combine options: output as .scss with custom prefix
npx -p @oceanbase/codemod codemod src --transformer=less-to-cssvar --rename-to=scss --prefix=ob
```

**Options:**

| Option         | Description                                              | Default |
| -------------- | -------------------------------------------------------- | ------- |
| `--prefix`     | CSS variable prefix, e.g. `var(--ant-color-primary)`     | `ant`   |
| `--rename-to`  | Target format: `css`, `scss`, or `false` to keep `.less` | `css`   |
| `--add-module` | Add `.module` suffix when renaming                       | `true`  |

**`--rename-to` 说明：**

| 值      | 行为                          | 示例                        |
| ------- | ----------------------------- | --------------------------- |
| `css`   | 输出为 `.css` 文件（默认）    | `style.less` → `style.css`  |
| `scss`  | 输出为 `.scss` 文件           | `style.less` → `style.scss` |
| `false` | 保持 `.less` 扩展名，不重命名 | `style.less` → `style.less` |

**`--add-module` 说明：**

| 值      | 行为                                         |
| ------- | -------------------------------------------- |
| `true`  | 自动检测：根据导入方式判断是否添加 `.module` |
| `false` | 跳过检测：统一不添加 `.module`               |

**注意**：当 `--rename-to=false` 时，如果用户没有显式指定 `--add-module`，则 `--add-module` 会自动设置为 `false`（因为不重命名文件时，添加 `.module` 后缀没有意义）。如果用户显式指定了 `--add-module`，则使用用户指定的值。

**自动检测规则：**

| 导入方式                                       | 结果（CSS）      | 结果（SCSS）      |
| ---------------------------------------------- | ---------------- | ----------------- |
| `import styles from './xxx.less'` (CSS Module) | `xxx.module.css` | `xxx.module.scss` |
| `import './xxx.less'` (全局样式)               | `xxx.css`        | `xxx.scss`        |
| `global.less` / `reset.less` 等常见全局文件名  | `xxx.css`        | `xxx.scss`        |

**Important Notes:**

When `--rename-to` is set to `css` or `scss` (default: `css`):

1. **Comment conversion**:
   - For `.css` output: Less single-line comments (`//`) will be automatically converted to CSS block comments (`/* */`).
   - For `.scss` output: Comments are kept as `//` (SCSS supports single-line comments).
2. **`:global` syntax**: CSS Modules `:global` syntax will continue to work in `.module.css` or `.module.scss` files.
3. **Import references**: Import references in JS/TS/JSX/TSX files will be **automatically updated**:

```diff
- import './style.less';
+ import './style.css';  // or './style.scss' if --rename-to=scss
```

**Example:**

```diff
- @import '~@oceanbase/design/es/theme/index.less';
  .container {
-   color: @colorPrimary;
-   background: @colorBgContainer;
-   border-color: @colorBorder;
-   font-size: @fontSize;
+   color: var(--ant-color-primary);
+   background: var(--ant-color-bg-container);
+   border-color: var(--ant-color-border);
+   font-size: var(--ant-font-size);
  }

  .status {
    &.success {
-     color: @colorSuccess;
-     background: @colorSuccessBg;
+     color: var(--ant-color-success);
+     background: var(--ant-color-success-bg);
    }
    &.error {
-     color: @colorError;
-     background: @colorErrorBg;
+     color: var(--ant-color-error);
+     background: var(--ant-color-error-bg);
    }
  }
```

### `sass-to-cssvar`

Transform SASS/SCSS variables to CSS variables. This transformer must be explicitly specified via `--transformer` option.

```shell
# Basic usage
npx -p @oceanbase/codemod codemod src --transformer=sass-to-cssvar

# With custom prefix (default: ant)
npx -p @oceanbase/codemod codemod src --transformer=sass-to-cssvar --prefix=ob
```

**Options:**

| Option     | Description                                          | Default |
| ---------- | ---------------------------------------------------- | ------- |
| `--prefix` | CSS variable prefix, e.g. `var(--ant-color-primary)` | `ant`   |

**Important Notes:**

1. **File format**: Supports both `.sass` and `.scss` files.
2. **Variable syntax**: Converts SASS variables (`$variableName`) to CSS variables (`var(--prefix-variable-name)`).
3. **Token matching**: Only converts variables that match tokens from `@oceanbase/design` theme.
4. **No file renaming**: Files keep their original `.sass` or `.scss` extension.

**Example:**

```diff
  .container {
-   color: $colorPrimary;
-   background: $colorBgContainer;
-   border-color: $colorBorder;
-   font-size: $fontSize;
+   color: var(--ant-color-primary);
+   background: var(--ant-color-bg-container);
+   border-color: var(--ant-color-border);
+   font-size: var(--ant-font-size);
  }

  .status {
    &.success {
-     color: $colorSuccess;
-     background: $colorSuccessBg;
+     color: var(--ant-color-success);
+     background: var(--ant-color-success-bg);
    }
    &.error {
-     color: $colorError;
-     background: $colorErrorBg;
+     color: var(--ant-color-error);
+     background: var(--ant-color-error-bg);
    }
  }
```
