---
title: 主题使用
order: 3
group: 基础组件
---

OceanBase Design 的设计体系遵循 Ant Design 5.0 设计规范，并在此基础上扩展出了很多具备 OceanBase 产品风格的设计规范模式，包括但不限于全局样式（色板、圆角、边框）和特定组件的视觉定制，以传递 OceanBase 科技、活力、专注和关怀的品牌特点。

## 主题配置

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

## 内置主题

### 暗色主题

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

### 紧凑主题

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

### 阿里云主题

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

### 主题预览

<!-- prettier-ignore -->
<code src="../../packages/design/src/theme/demo/previewer.tsx"></code>

## 使用 Design Token

- 请参考 [Design Token](/docs/design-token)。

## 使用 Design Token (旧版)

- 请参考 [Design Token (旧版)](/docs/design-token-legacy)。
