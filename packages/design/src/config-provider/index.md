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
- 🆕 按 `locale` 自动调整排版：导出 `defaultTheme`（标准，14px）与 `compactTheme`（紧凑，Inter 字体 + 13px）；默认随语言生效，也可通过 `theme={defaultTheme}` / `theme={compactTheme}` 手动覆盖。`compactTheme` 为 locale 排版 preset，与 `theme.isCompact`（间距算法）无关。

## 代码演示

<!-- prettier-ignore -->
<code src="../locale/demo/basic.tsx" title="国际化"></code>
<code src="./demo/locale-typography-theme.tsx" title="Locale 排版主题" description="切换 locale 与 defaultTheme / compactTheme；默认随语言自动应用排版 preset。"></code>
<code src="./demo/size.tsx" title="尺寸"></code>
<code src="./demo/theme.tsx" title="主题"></code>
<code src="./demo/css-var.tsx" title="CSS 变量模式"></code>
<code src="./demo/spin.tsx" title="Spin"></code>
<code src="./demo/card.tsx" title="Card"></code>
<code src="../empty/demo/config-provider.tsx" title="空状态"></code>
<code src="./demo/style-provider.tsx" title="低版本浏览器样式兼容"></code>

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

启用 CSS 变量模式后，内嵌 `App` 会自动使用 `component="div"` 挂载 cssVar 作用域类名（可通过 `appProps` 覆盖）；未启用时仍为 `component={false}`，避免多余 DOM 包裹。

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

### Locale 排版主题

| 导出           | 说明                                                                          |
| :------------- | :---------------------------------------------------------------------------- |
| `defaultTheme` | Cn-like（zh/ja/ko）标准排版：14px 正文与表格单元格；**字体随 locale**         |
| `compactTheme` | En-like 紧凑排版：13px 正文与表格单元格；**字体随 locale**（非 Inter 硬编码） |

- 未传 `theme` 时按 `locale` 自动 merge 对应 preset；传入 `defaultTheme` / `compactTheme` 后锁定**字号/表格单元格**排版，**字体与字重仍随 locale**。
- 与 preset 组合其它 `theme` 字段时使用展开：`theme={{ ...compactTheme, isDark: true }}`；覆盖 `token` 时需合并 preset 已有字段：`token: { ...compactTheme.token, colorPrimary: '#0064c8' }`。
- `theme.isCompact` 为间距紧凑算法，与 `compactTheme` 无关。

- 更多 API 详见 antd ConfigProvider 文档: https://ant.design/components/config-provider-cn

### 低版本浏览器（Chrome 83）兼容说明

antd 5.x 默认使用 `:where()` 选择器（Chrome 88+）与 CSS 逻辑属性（Chrome 87+），在低版本浏览器（如 Chrome 83）中需要按以下方式接入：

- **样式降级**：通过 `styleProviderProps` 配置 `hashPriority: 'high'`（规避 `:where()` 选择器，适用于 Chrome 88 以下）与 `legacyLogicalPropertiesTransformer`（将 cssinjs 生成的逻辑属性转为物理属性），参考上方「低版本浏览器样式兼容」示例。
- **弹性间距**：`gap` 弹性布局（`flex`/`grid`）在 Chrome 84 以下无效。请优先使用本库封装的 `Flex` 组件（自动检测浏览器能力，不支持时降级为 `margin` 方案）或 `Space` 组件（自定义 `size` 时同样降级），避免直接使用裸 antd `Flex`。
- **已知副作用**：配置 `hashPriority: 'high'` 后，`:where()` 选择器不再包裹样式，Popover 等浮层组件注入的 `position: fixed` 样式可能覆盖业务侧样式；如遇定位异常，可在业务样式上使用 `!important` 或改用 `right` 等物理属性定位。
- **业务侧编译配置**：`@oceanbase/util` 依赖 `query-string@9`（产物含 Chrome 85+ 语法），需在 Umi 的 `extraBabelIncludes` 中按嵌套绝对路径引入该依赖，库侧无需改动代码。
