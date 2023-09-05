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

- <Badge>⭐️ 推荐</Badge> 通过 `token` 对象来获取 Design Token，和 `useToken` 获取的值完全相同，且有两大优势:
  - 使用时不用声明 `useToken`，`@oceanbase/design` 会帮你在 ConfigProvider 中自动注入，以降低业务调用成本。
  - 支持在 React 类组件中使用。

```tsx | pure
// 无需声明 useToken，即引即用
import { Button, ConfigProvider, token } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <Button style={{ backgroundColor: token.colorPrimary }}>Button</Button>
    </ConfigProvider>
  );
};

export default App;
```

```tsx | pure
// 支持在 React 类组件中使用
import { Button, ConfigProvider, token } from '@oceanbase/design';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <ConfigProvider>
        <Button style={{ backgroundColor: token.colorPrimary }}>Button</Button>
      </ConfigProvider>
    );
  }
}

export default App;
```

- 当然，也可以通过 `useToken` hook 来获取 Design Token。只不过在实际的业务场景中会比较繁琐，而且只能在函数组件中使用。

```tsx | pure
import { Button, useToken } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => {
  const { token } = useToken();

  return <Button style={{ backgroundColor: token.colorPrimary }}>Button</Button>;
};

export default App;
```

### 在非 React 中使用

- 在常量文件、dva model 等非 React 环境下，也可以使用 `token` 对象来获取 Design Token。

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

<!-- ## 主题预览 -->

<!-- ### 基本预览 -->

<!-- <code src="./demo/previewer-basic.tsx"></code> -->

<!-- ### 高级预览 (Token)

<code src="./demo/previewer-advanced.tsx"></code> -->

## 默认字体预览

| 数字字体 <br/> Helvetica Neue | 英文字体 <br/> Source Sans Pro | 中文字体 <br/> PingFang SC | 代码字体 <br/> Menlo |
| :-- | :-- | :-- | :-- |
| <div style="font-size: 30px">0123456789</div> | <div style="font-size: 24px"><div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div><div>abcdefghijklmnopqrstuvwxyz</div></div> | <div style="font-size: 24px">汉 雀</div> | <code>import { Button } from '@oceanbase/design';</code> |
