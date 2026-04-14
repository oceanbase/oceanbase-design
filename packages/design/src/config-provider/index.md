---
title: ConfigProvider 全局配置
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全继承 antd [ConfigProvider](https://ant.design/components/config-provider-cn) 的能力和 API，可无缝切换。
- 🌈 定制全局主题和空状态，以符合 OceanBase Design 设计规范。
- 🆕 默认内嵌 [App 包裹组件](https://ant.design/components/app-cn)，支持 message, notification 和 Modal 等静态方法消费 ConfigProvider 配置。
- 🆕 新增 `theme.isAliyun` 属性，用于开启阿里云主题。
- 🆕 支持 CSS 变量模式，通过 `theme.cssVar` 配置启用，详见 [CSS 变量模式](#css-变量模式)。
- 🆕 新增 `card.divided` 属性，用于配置 Card 是否展示分割线。
- 🆕 新增 `locale.Input.placeholder` 属性，用于配置 Input 的默认 `placeholder`。
- 🆕 新增 `locale.Card.viewDocument` 属性，用于配置 Card 文档链接的提示文本。
- 🆕 新增 `table.selectionColumnWidth` 属性，用于配置表格的选择列宽度。
- 🆕 新增 `styleProviderProps` 属性，一般用于配置 [StyleProvider](https://github.com/ant-design/cssinjs#styleprovider) 的 `hashPriority` 和 `transformers` 属性实现样式降级，来兼容 Chrome 88 以下的低版本浏览器，详见 [antd v5 样式兼容说明](https://ant-design.antgroup.com/docs/react/compatible-style-cn)。
- 🆕 新增 `appProps` 属性，用于配置内嵌的 [App 组件属性](https://ant-design.antgroup.com/components/app-cn#app)。
- 🆕 按 `locale` 自动调整正文字号与表格单元格字号：`zh` / `ja` / `ko`（含 `zh-cn`、`ja-JP` 等）下默认正文 **14px**、表格单元格 **14px**；其它 locale（如 `en`、`de`）与英文一致，为 **13px / 12px**。

## 代码演示

<!-- prettier-ignore -->
<code src="../locale/demo/basic.tsx" title="国际化"></code>
<code src="./demo/size.tsx" title="尺寸"></code>
<code src="./demo/theme.tsx" title="主题"></code>
<code src="./demo/css-var.tsx" title="CSS 变量模式"></code>
<code src="./demo/spin.tsx" title="Spin"></code>
<code src="./demo/card.tsx" title="Card"></code>
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

## CSS 变量模式

CSS 变量模式允许你使用 CSS 自定义属性来动态切换主题，而无需重新渲染组件。这对于实现静态主题切换、减少运行时样式计算以及提升性能非常有用。

### 基本用法

启用 CSS 变量模式：

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

### 自定义前缀和键

你可以自定义 CSS 变量的前缀和键：

```tsx | pure
import React from 'react';
import { ConfigProvider, Button } from '@oceanbase/design';

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        cssVar: {
          prefix: 'ob', // CSS 变量前缀，默认为 'ant'
          key: 'app', // 主题隔离键，React 18+ 会自动生成，React 16/17 需要手动指定
        },
      }}
    >
      <Button type="primary">Primary Button</Button>
    </ConfigProvider>
  );
};

export default App;
```

### React 16/17 兼容性

在 React 16 或 17 中，由于 `useId` 不可用，需要手动指定唯一的 `key`：

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

### 禁用 Hash

当使用 CSS 变量模式时，可以禁用样式 hash 以减少样式表大小（仅在单一版本使用时推荐）：

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

### 静态主题切换

CSS 变量模式支持通过 CSS 类实现静态主题切换，无需 JavaScript：

```css
.light .css-hash {
  --ant-color-primary: #0d6cf2;
}

.dark .css-hash {
  --ant-color-primary: #177ddc;
}
```

### 更多信息

- 详细文档请参考 [Ant Design CSS 变量文档](https://ant.design/docs/react/css-variables-cn)
- CSS 变量模式的优势和使用场景，请参考 [Ant Design CSS 变量计划](https://ant.design/docs/blog/css-var-plan-cn)

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| theme.isAliyun | 用于开启阿里云主题 | boolean | - | 0.3.5 |
| locale.Input.placeholder | 用于配置 Input 的默认 `placeholder` | string | - | 0.3.2 |
| card | Card 全局配置 | `{ divided?: boolean; classNames?: Record<string, string>; styles?: Record<string, React.CSSProperties>; }` | - | - |
| spin | Spin 全局配置 | `{ indicator?: ReactNode; className?: string; style?: React.CSSProperties; }` | - | - |
| table | Table 全局配置 | `{ selectionColumnWidth?: width; className?: string; style?: React.CSSProperties; }` | - | - |
| styleProviderProps | [StyleProvider 配置](https://github.com/ant-design/cssinjs#styleprovider)，一般用于配置 `hashPriority` 和 `transformers` 属性实现样式降级 | [StyleProviderProps](https://github.com/ant-design/cssinjs/blob/master/src/StyleContext.tsx#L88) | - | - |
| appProps | 内嵌的 App 组件属性 | [AppProps](https://ant-design.antgroup.com/components/app-cn#app) | - | - |

- 更多 API 详见 antd ConfigProvider 文档: https://ant.design/components/config-provider-cn
