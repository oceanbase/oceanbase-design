---
title: Theme 主题
nav:
  title: 基础组件
  path: /components
---

OceanBase Design 的设计体系遵循 Ant Design 5.0 设计规范，并在此基础上扩展出了很多具备 OceanBase 产品风格的设计规范模式，包括但不限于全局样式（色板、圆角、边框）和特定组件的视觉定制，以传递 OceanBase 科技、活力、专注和关怀的品牌特点。

OceanBase Design Token 由设计师进行维护和更新，在技术上 @oceanbase/design 支持和 [antd](https://ant.design/docs/react/customize-theme-cn) 完全一致的主题定制能力。

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

## 使用 Design Token

### 在 React 中使用

- 如果是函数组件，推荐使用 `useToken` hook 来获取 Design Token:

```tsx | pure
import { Button, useToken } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => {
  const { token } = useToken();

  return <Button style={{ backgroundColor: token.colorPrimary }}>Button</Button>;
};

export default App;
```

- 如果是类组件，可以通过 `token` 对象来获取 Design Token:

```tsx | pure
import { Button, ConfigProvider, token } from '@oceanbase/design';
import React from 'react';

class App extends React.Component {
  render() {
    return <Button style={{ backgroundColor: token.colorPrimary }}>Button</Button>;
  }
}

export default App;
```

### 在非 React 中使用

- 在常量文件、dva model 等非 React 环境下，可以使用 `token` 对象来获取 Design Token。

```ts
import { token } from '@oceanbase/design';

export const taskStatusList = [
  {
    value: 'running',
    label: '运行中',
    color: token.colorPrimary,
  },
];
```

### 在 less 中使用

- 通过引用 @oceanbase/design 提供的 `less` 主题文件，可直接使用 Design Token 对应的 less 变量:

```less
@import '~@oceanbase/design/es/theme/index.less';

.button {
  color: @colorPrimary;
  border-radius: ~'@{borderRadius}px';
}
```

- 在 VSCode 中安装 [Less IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-less) 插件，可支持变量提示和补全。

![](https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*t3tmTLWo5UUAAAAAAAAAAAAADvSFAQ/original)

## 暗色和紧凑主题

```ts | pure
import {  ConfigProvider } from '@oceanbase/design';

export default () {
  return (
    <ConfigProvider
      theme={{
        // 暗色主题
        algorithm: theme.darkAlgorithm,
        // 紧凑主题
        // algorithm: theme.compactAlgorithm
      }}
    >
      {...}
    </ConfigProvider>
  );
};
```

## 更多用法

- 主题的更多用法，请参考 antd 文档: https://ant.design/docs/react/customize-theme-cn

## 主题预览

<code src="./demo/previewer.tsx"></code>
