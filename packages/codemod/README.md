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
# --token-target=ob|antd  // default ob; antd restores legacy antd token migration
# --skip-install          // skip dependency install/upgrade after codemod
# --prefix=ob             // cssvar prefix (default ob)
# --disablePrettier       // disable prettier
# --ignore-config         // ignore config file
```

Run specific transformers:

```shell
npx -p @oceanbase/codemod codemod src --transformer=token-to-obtoken
```

Legacy antd token migration:

```shell
npx -p @oceanbase/codemod codemod src --token-target=antd
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

Transform fixed inline styles to **obToken** (default). Injects `useToken()` for `@oceanbase/design` imports, or `theme.useToken()` when `theme` comes from `antd` / `@alipay/bigfish/antd` (webpack alias). Use `--token-target=antd` for legacy `token` output.

- React function components:

```diff
  import React from 'react';
- import { Alert, Button } from '@oceanbase/design';
+ import { Alert, Button, useToken } from '@oceanbase/design';

  const Demo = () => {
+   const { obToken } = useToken();
    return (
-     <Alert style={{ color: 'rgba(0, 0, 0, 0.85)', border: '1px solid #d9d9d9', fontSize: 14 }} />
+     <Alert style={{ color: obToken.colorTextDefault, border: `1px solid ${obToken.colorBorderDefault}`, fontSize: obToken.fontSize325 }} />
    );
  };
```

### `less-to-token`

> Explicit only. Not run by default. Use `--token-target=antd` or `--transformer=less-to-token` for legacy Less `@token` migration.

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

Transform Less hardcoded values / `@variables` to OB semantic CSS variables like `var(--ob-color-text-default)`. **Runs by default** in the main codemod pipeline (keeps `.less` extension; use `--rename-to=css` to rename files).

```shell
# Explicit run with file rename
npx -p @oceanbase/codemod codemod src --transformer=less-to-cssvar --rename-to=css

# Output as .scss instead of .css
npx -p @oceanbase/codemod codemod src --transformer=less-to-cssvar --rename-to=scss

# With custom prefix (default: ob)
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
| `--prefix`     | CSS variable prefix, e.g. `var(--ob-color-text-default)` | `ob`    |
| `--rename-to`  | Target format: `css`, `scss`, or `false` to keep `.less` | `false` |
| `--add-module` | Add `.module` suffix when renaming                       | `true`  |

**`--rename-to` 说明：**

| 值      | 行为                                  | 示例                        |
| ------- | ------------------------------------- | --------------------------- |
| `false` | 保持 `.less` 扩展名，不重命名（默认） | `style.less` → `style.less` |
| `css`   | 输出为 `.css` 文件                    | `style.less` → `style.css`  |
| `scss`  | 输出为 `.scss` 文件                   | `style.less` → `style.scss` |

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

When `--rename-to` is set to `css` or `scss` (explicit `--transformer=less-to-cssvar` without default pipeline):

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
  .container {
-   color: #1890ff;
-   background: #ffffff;
-   border: 1px solid #d9d9d9;
-   font-size: 14px;
+   color: var(--ob-color-text-link);
+   background: var(--ob-color-bg-default);
+   border: 1px solid var(--ob-color-border-default);
+   font-size: var(--ob-font-size-325);
  }

  .status {
    &.success {
-     color: #52c41a;
-     background: #f6ffed;
+     color: var(--ob-color-text-success);
+     background: var(--ob-color-bg-success);
    }
    &.error {
-     color: #ff4d4f;
-     background: #fff2f0;
+     color: var(--ob-color-text-error);
+     background: var(--ob-color-bg-error);
    }
  }
```

### `sass-to-cssvar`

Transform SASS/SCSS hardcoded values / `$variables` to OB semantic CSS variables like `var(--ob-color-text-default)`. **Runs by default** in the main codemod pipeline.

```shell
# Basic usage
npx -p @oceanbase/codemod codemod src --transformer=sass-to-cssvar

# With custom prefix (default: ob)
npx -p @oceanbase/codemod codemod src --transformer=sass-to-cssvar --prefix=ob
```

**Options:**

| Option     | Description                                              | Default |
| ---------- | -------------------------------------------------------- | ------- |
| `--prefix` | CSS variable prefix, e.g. `var(--ob-color-text-default)` | `ob`    |

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
+   color: var(--ob-color-text-link);
+   background: var(--ob-color-bg-default);
+   border-color: var(--ob-color-border-default);
+   font-size: var(--ob-font-size-325);
  }

  .status {
    &.success {
-     color: $colorSuccess;
-     background: $colorSuccessBg;
+     color: var(--ob-color-text-success);
+     background: var(--ob-color-bg-success);
    }
    &.error {
-     color: $colorError;
-     background: $colorErrorBg;
+     color: var(--ob-color-text-error);
+     background: var(--ob-color-bg-error);
    }
  }
```

### `token-to-obtoken`

Upgrade existing antd token usage to OB semantic tokens. **Not run by default** — use `--transformer=token-to-obtoken` explicitly.

Typical use cases:

- Code already migrated with `--token-target=antd` or hand-written `token.xxx`
- `createStyles` bodies still using `token.xxx` (this transformer rewrites them to `obToken.xxx`)
- Styles with `var(--ant-*)` that need `var(--ob-*)`

```shell
# JS/TS token → obToken
npx -p @oceanbase/codemod codemod src --transformer=token-to-obtoken

# Combined with cssvar prefix migration
npx -p @oceanbase/codemod codemod src --transformer=token-to-obtoken,less-to-cssvar --prefix=ob
```

**Example** (`@oceanbase/design` import — keeps `theme.useToken()`):

```diff
  import { Alert, theme } from '@oceanbase/design';

  const Demo = () => {
-   const { token } = theme.useToken();
+   const { obToken } = theme.useToken();
    return (
-     <Alert style={{ color: token.colorText, border: `1px solid ${token.colorBorder}` }} />
+     <Alert style={{ color: obToken.colorTextDefault, border: `1px solid ${obToken.colorBorderDefault}` }} />
    );
  };
```

**Example** (`antd` import with webpack alias — import unchanged):

```diff
  import { Collapse, theme } from 'antd';

  const Demo = () => {
-   const { token } = theme.useToken();
+   const { obToken } = theme.useToken();
    return <Collapse style={{ borderRadius: obToken.radiusLg }} />;
  };
```
