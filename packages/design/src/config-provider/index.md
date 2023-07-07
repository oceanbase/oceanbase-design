---
title: ConfigProvider 全局配置
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全兼容 antd [ConfigProvider](https://ant.design/components/config-provider-cn) 的能力和 API，可无缝切换。
- 🆕 默认内嵌 [App 包裹组件](https://ant.design/components/app-cn)，支持 message, notification 和 Modal 等静态方法消费 ConfigProvider 配置。

## 代码演示

<code src="../locale/demo/basic.tsx" title="国际化"></code>

<code src="./demo/size.tsx" title="尺寸"></code>

<code src="./demo/theme.tsx" title="主题"></code>

### 统一样式前缀

- 通过 `prefixCls` 和 `iconPrefixCls` 可设置 antd 组件和图标的统一样式前缀。

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

- 对于 Umi:

```js
// config.ts 或 .umirc.ts
export default {
  lessLoader: {
    modifyVars: {
      prefixCls: 'prefix',
      iconPrefixCls: 'icon-prefix',
    },
  },
};
```

- 对于 Webpack:

```js
// webpack.config.js
{
  loader: "less-loader",
  options: {
    lessOptions: {
      modifyVars: {
        prefixCls: 'prefix',
        iconPrefixCls: 'icon-prefix',
      },
    },
  },
}
```

## API

- 详见 antd ConfigProvider 文档: https://ant.design/components/config-provider-cn
