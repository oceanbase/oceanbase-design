---
title: ConfigProvider
nav:
  title: General
  path: /components
---

- 🔥 Fully inherits antd [ConfigProvider](https://ant.design/components/config-provider-cn) capabilities and API, seamless migration.
- 🌈 Custom global theme and empty state, aligned with OceanBase Design specification.
- 🆕 [App wrapper](https://ant.design/components/app-cn) included by default; message, notification, Modal static methods consume ConfigProvider config.
- 🆕 `theme.isAliyun` to enable Aliyun theme.
- 🆕 CSS variable mode via `theme.cssVar`. See [CSS Variable Mode](#css-variable-mode).
- 🆕 `card.divided` to control Card divider visibility.
- 🆕 `locale.Input.placeholder` for default Input placeholder.
- 🆕 `locale.Card.viewDocument` for Card document link text.
- 🆕 `table.selectionColumnWidth` for table selection column width.
- 🆕 `styleProviderProps` for [StyleProvider](https://github.com/ant-design/cssinjs#styleprovider) config (e.g. `hashPriority`, `transformers`) for style fallback on Chrome < 88. See [antd v5 style compatibility](https://ant-design.antgroup.com/docs/react/compatible-style-cn).
- 🆕 `appProps` for embedded [App component props](https://ant-design.antgroup.com/components/app-cn#app).

- 🆕 Locale typography presets `defaultTheme` / `compactTheme`: auto-applied by `locale`, or pass via `theme` to override. `compactTheme` is locale typography, not `theme.isCompact` (spacing).

## Code Examples

<!-- prettier-ignore -->
<code src="../locale/demo/basic.tsx" title="Internationalization"></code>
<code src="./demo/locale-typography-theme.tsx" title="Locale typography theme" description="Switch locale and defaultTheme / compactTheme presets."></code>
<code src="./demo/size.tsx" title="Size"></code>
<code src="./demo/theme.tsx" title="Theme"></code>
<code src="./demo/css-var.tsx" title="CSS Variable Mode"></code>
<code src="./demo/spin.tsx" title="Spin"></code>
<code src="./demo/card.tsx" title="Card"></code>
<code src="../empty/demo/config-provider.tsx" title="Empty"></code>

### Style Prefix

- Use `prefixCls` and `iconPrefixCls` to set unified style prefix for antd components and icons.

```tsx | pure
import React, { useState } from 'react';
import { ConfigProvider } from '@oceanbase/design';

const App: React.FC = () => {
  return (
    <ConfigProvider prefixCls="prefix" iconPrefixCls="icon-prefix">
      {...}
    </ConfigProvider>
  );
};

export default App;
```

## CSS Variable Mode

CSS variable mode lets you use CSS custom properties to switch themes without re-rendering. Useful for static theme switching, less runtime style computation, and better performance.

### Basic Usage

Enable CSS variable mode:

```tsx | pure
import React from 'react';
import { ConfigProvider, Button } from '@oceanbase/design';

const App: React.FC = () => {
  return (
    <ConfigProvider theme={{ cssVar: true }}>
      <Button type="primary">Primary Button</Button>
    </ConfigProvider>
  );
};

export default App;
```

### Custom Prefix and Key

Customize CSS variable prefix and key:

```tsx | pure
import React from 'react';
import { ConfigProvider, Button } from '@oceanbase/design';

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        cssVar: {
          prefix: 'ob', // CSS variable prefix, default 'ant'
          key: 'app', // Theme isolation key, auto-generated in React 18+, manual in React 16/17
        },
      }}
    >
      <Button type="primary">Primary Button</Button>
    </ConfigProvider>
  );
};

export default App;
```

### React 16/17 Compatibility

In React 16 or 17, `useId` is unavailable; specify a unique `key` manually:

```tsx | pure
import React from 'react';
import { ConfigProvider, Button } from '@oceanbase/design';

const App: React.FC = () => {
  return (
    <ConfigProvider theme={{ cssVar: { key: 'my-app' } }}>
      <Button type="primary">Primary Button</Button>
    </ConfigProvider>
  );
};

export default App;
```

### Disable Hash

When using CSS variable mode, you can disable style hash to reduce stylesheet size (recommended only for single-version usage):

```tsx | pure
import React from 'react';
import { ConfigProvider, Button } from '@oceanbase/design';

const App: React.FC = () => {
  return (
    <ConfigProvider theme={{ cssVar: true, hashed: false }}>
      <Button type="primary">Primary Button</Button>
    </ConfigProvider>
  );
};

export default App;
```

### Static Theme Switching

CSS variable mode supports static theme switching via CSS classes, no JavaScript:

```css
.light .css-hash {
  --ant-color-primary: #0d6cf2;
}

.dark .css-hash {
  --ant-color-primary: #177ddc;
}
```

### More Info

- See [Ant Design CSS Variables](https://ant.design/docs/react/css-variables-cn)
- CSS variable benefits and use cases: [Ant Design CSS Variable Plan](https://ant.design/docs/blog/css-var-plan-cn)

## API

| Prop | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| theme.isAliyun | Enable Aliyun theme | boolean | - | 0.3.5 |
| locale.Input.placeholder | Default Input placeholder | string | - | 0.3.2 |
| card | Card global config | `{ divided?: boolean; classNames?: Record<string, string>; styles?: Record<string, React.CSSProperties>; }` | - | - |
| spin | Spin global config | `{ indicator?: ReactNode; className?: string; style?: React.CSSProperties; }` | - | - |
| table | Table global config | `{ selectionColumnWidth?: width; className?: string; style?: React.CSSProperties; }` | - | - |
| styleProviderProps | [StyleProvider](https://github.com/ant-design/cssinjs#styleprovider) config (e.g. `hashPriority`, `transformers`) for style fallback | [StyleProviderProps](https://github.com/ant-design/cssinjs/blob/master/src/StyleContext.tsx#L88) | - | - |
| appProps | Embedded App component props | [AppProps](https://ant-design.antgroup.com/components/app-cn#app) | - | - |

### Locale typography presets

| Export | Description |
| :-- | :-- |
| `defaultTheme` | Cn-like (zh/ja/ko) standard typography: 14px body and table cells; **font follows locale** |
| `compactTheme` | Compact typography: 13px body and table cells; **font follows locale** |

- When `theme` is omitted, the matching preset is merged from `locale` automatically.
- Pass `theme={defaultTheme}` or `theme={compactTheme}` to lock **font size / table cell** typography; **font family and weights still follow `locale`**.
- Combine with other theme fields via spread: `theme={{ ...compactTheme, isDark: true }}`; when overriding `token`, merge preset fields: `token: { ...compactTheme.token, colorPrimary: '#0064c8' }`.

- More API: https://ant.design/components/config-provider-cn
