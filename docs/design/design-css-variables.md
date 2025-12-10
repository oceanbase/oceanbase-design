---
title: CSS 变量
order: 4
group: 基础组件
---

OceanBase Design 提供了一套完整的 CSS 变量系统，用于在非 React 环境（如纯 CSS、Less、Sass）中使用设计令牌。

## 特性说明

### 开箱即用

带 `--ob-` 前缀的 CSS 变量会在 `ConfigProvider` 渲染时自动注入到 `:root`，**无需开启 CSS 变量模式**即可直接使用。只要应用中包含 `ConfigProvider` 组件，这些变量就会自动生效。

### 与 Ant Design CSS 变量的区别

| 特性     | OceanBase CSS 变量 (`--ob-*`) | Ant Design CSS 变量 (`--ant-*`) |
| -------- | ----------------------------- | ------------------------------- |
| 启用方式 | 自动注入，开箱即用            | 需要配置 `theme.cssVar` 开启    |
| 命名风格 | 精简、语义化命名              | 与 Token 名称一一对应           |
| 设计目的 | 便于业务层快速使用            | 完整暴露所有 Token              |
| 变量数量 | 精选常用变量                  | 覆盖所有 Design Token           |

如果你需要使用 Ant Design 的完整 CSS 变量体系，可以通过以下方式开启：

```tsx | pure
import { ConfigProvider } from '@oceanbase/design';

export default () => {
  return (
    <ConfigProvider
      theme={{
        cssVar: {
          prefix: 'ant', // Ant Design CSS 变量前缀
        },
      }}
    >
      {/* 子组件可以使用 --ant-* CSS 变量 */}
    </ConfigProvider>
  );
};
```

## 使用方式

### 在 CSS 中使用

```css
.my-button {
  background-color: var(--ob-blue-4);
  color: var(--ob-white);
  border-radius: var(--ob-radius-sm);
  padding: var(--ob-space-200) var(--ob-space-300);
}

.my-title {
  font: var(--ob-font-h1);
  color: var(--ob-color-text-default);
}
```

### 在 Less 中使用

```less
.my-card {
  background-color: var(--ob-white);
  border: 1px solid var(--ob-color-border-default);
  border-radius: var(--ob-radius-md);
  box-shadow: var(--ob-shadow-2);
}
```

### 在内联样式中使用

```tsx | pure
<div
  style={{
    backgroundColor: 'var(--ob-blue-1)',
    color: 'var(--ob-blue-6)',
    padding: 'var(--ob-space-400)',
  }}
>
  Info Card
</div>
```

## CSS 变量列表

### 颜色 Token

#### 基础颜色

<CssVariableTable category="color"></CssVariableTable>

#### 填充色 Background

<CssVariableTable category="color-bg"></CssVariableTable>

#### 边框色 Border

<CssVariableTable category="color-border"></CssVariableTable>

#### 文本色 Text

<CssVariableTable category="color-text"></CssVariableTable>

#### 图标色 Icon

<CssVariableTable category="color-icon"></CssVariableTable>

#### 状态色 Status

<CssVariableTable category="color-status"></CssVariableTable>

### 字体 Token

<CssVariableTable category="font"></CssVariableTable>

### 阴影 Token

<CssVariableTable category="shadow"></CssVariableTable>

### 圆角 Token

<CssVariableTable category="radius"></CssVariableTable>

### 间距 Token

<CssVariableTable category="space"></CssVariableTable>

### 组件 Token

<CssVariableTable category="component"></CssVariableTable>
