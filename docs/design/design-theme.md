---
title: Theme Usage
order: 3
group: General
---

OceanBase Design follows the Ant Design 5.0 design specification and extends it with OceanBase product-style design patterns, including but not limited to global styles (color palette, radius, border) and visual customization of specific components, to convey OceanBase's brand characteristics of technology, vitality, focus, and care.

## Theme Configuration

```tsx | pure
import { ConfigProvider } from '@oceanbase/design';

export default () {
  return (
    <ConfigProvider theme={{ xxx }}>
      {...}
    </ConfigProvider>
  );
};
```

## Built-in Themes

### Dark Theme

```ts | pure
import {  ConfigProvider } from '@oceanbase/design';

export default () {
  return (
    <ConfigProvider
      theme={{
        isDark: true,
        algorithm: theme.darkAlgorithm,
      }}
    >
      {...}
    </ConfigProvider>
  );
};
```

### Compact Theme

```ts | pure
import {  ConfigProvider } from '@oceanbase/design';

export default () {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.compactAlgorithm
      }}
    >
      {...}
    </ConfigProvider>
  );
};
```

### Aliyun Theme

```ts | pure
import {  ConfigProvider } from '@oceanbase/design';

export default () {
  return (
    <ConfigProvider
      theme={{
        isAliyun: true,
      }}
    >
      {...}
    </ConfigProvider>
  );
};
```

### Theme Preview

<!-- prettier-ignore -->
<code src="../../packages/design/src/theme/demo/previewer.tsx"></code>

## Using Design Token

- See [Design Token](/docs/design-token).

## Using Design Token (Legacy)

- See [Design Token (Legacy)](/docs/design-token-legacy).
