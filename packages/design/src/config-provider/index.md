---
title: ConfigProvider 全局配置
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全继承 antd [ConfigProvider](https://ant.design/components/config-provider-cn) 的能力和 API，可无缝切换。
- 🌈 定制全局主题和空状态，以符合 OceanBase Design 设计规范。
- 🆕 默认内嵌 [App 包裹组件](https://ant.design/components/app-cn)，支持 message, notification 和 Modal 等静态方法消费 ConfigProvider 配置。
- 🆕 新增 `table.selectionColumnWidth` 属性，用于配置表格的展开列宽度。
- 🆕 新增 `injectStaticFunction` 属性，用于配置 `message`, `notification` 和 `Modal` 静态方法是否可以消费全局配置，默认开启。

<Alert type="warning" showIcon={true} message="📢 注意: 如果有多个 ConfigProvider，建议在最顶层的 ConfigProvider 开启 `injectStaticFunction` 即可，其他 ConfigProvider 则需要关闭该配置，否则静态方法可能会有冲突。"></Alert>

- 🆕 新增 `styleProviderProps` 属性，一般用于配置 [StyleProvider](https://github.com/ant-design/cssinjs#styleprovider) 的 `hashPriority` 和 `transformers` 属性实现样式降级，来兼容 Chrome 88 以下的低版本浏览器，详见 [antd v5 样式兼容说明](https://ant-design.antgroup.com/docs/react/compatible-style-cn)。

## 代码演示

<!-- prettier-ignore -->
<code src="../locale/demo/basic.tsx" title="国际化"></code>
<code src="./demo/size.tsx" title="尺寸"></code>
<code src="./demo/theme.tsx" title="主题"></code>
<code src="./demo/spin.tsx" title="Spin"></code>
<code src="../empty/demo/config-provider.tsx" title="空状态"></code>

### 样式前缀

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
| table | Table 全局配置 | `{ selectionColumnWidth?: width; className?: string; style?: React.CSSProperties; }` | undefined | - |
| injectStaticFunction | 用于配置 `message`, `notification` 和 `Modal` 静态方法是否可以消费全局配置 <Alert type="warning" showIcon={true} message="📢 注意: 如果有多个 ConfigProvider，建议在最顶层的 ConfigProvider 开启 `injectStaticFunction` 即可，其他 ConfigProvider 则需要关闭该配置，否则静态方法可能会有冲突。"></Alert> | boolean | true | - |
| styleProviderProps | [StyleProvider 配置](https://github.com/ant-design/cssinjs#styleprovider)，一般用于配置 `hashPriority` 和 `transformers` 属性实现样式降级 | [StyleProviderProps](https://github.com/ant-design/cssinjs/blob/master/src/StyleContext.tsx#L88) | undefined | - |

- 更多 API 详见 antd ConfigProvider 文档: https://ant.design/components/config-provider-cn
