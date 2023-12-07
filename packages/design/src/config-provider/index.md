---
title: ConfigProvider 全局配置
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全继承 antd [ConfigProvider](https://ant.design/components/config-provider-cn) 的能力和 API，可无缝切换。
- 🆕 默认内嵌 [App 包裹组件](https://ant.design/components/app-cn)，支持 message, notification 和 Modal 等静态方法消费 ConfigProvider 配置。
- 🆕 新增 `styleProviderProps` 属性，一般用于配置 [StyleProvider](https://github.com/ant-design/cssinjs#styleprovider) 的 `hashPriority` 和 `transformers` 属性实现样式降级，来兼容 Chrome 88 以下的低版本浏览器，详见 [antd v5 样式兼容说明](https://ant-design.antgroup.com/docs/react/compatible-style-cn)。

## 代码演示

<!-- prettier-ignore -->
<code src="../locale/demo/basic.tsx" title="国际化"></code>
<code src="./demo/size.tsx" title="尺寸"></code>
<code src="./demo/theme.tsx" title="主题"></code>
<code src="./demo/spin.tsx" title="Spin"></code>

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

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| spin | Spin 全局配置 | `{ indicator?: ReactNode; className?: string; style?: React.CSSProperties; }` | undefined | - |
| styleProviderProps | [StyleProvider 配置](https://github.com/ant-design/cssinjs#styleprovider)，一般用于配置 `hashPriority` 和 `transformers` 属性实现样式降级 | [StyleProviderProps](https://github.com/ant-design/cssinjs/blob/master/src/StyleContext.tsx#L88) | undefined | - |

- 更多 API 详见 antd ConfigProvider 文档: https://ant.design/components/config-provider-cn
