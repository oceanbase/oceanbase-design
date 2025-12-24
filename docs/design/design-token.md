---
title: Design Token
order: 4
group: 基础组件
---

OceanBase Design 自定义了一套完整的 Design Token，提供 CSS 变量、hooks 和静态对象三中消费方式，支持在 CSS、Less、Sass、React 组件、非 React 组件中进行使用。

## 快速开始

### 1. 确保使用 ConfigProvider

CSS 变量会在 `ConfigProvider` 渲染时自动注入，确保你的应用根组件使用了 `ConfigProvider`：

```tsx | pure
import { ConfigProvider } from '@oceanbase/design';

export default () => {
  return (
    <ConfigProvider>
      {...}
    </ConfigProvider>
  );
};
```

### 2. 选择使用方式

- **CSS/Less/Sass 文件**：使用 CSS 变量 `var(--ob-*)`
- **React 组件**：使用 `obToken` 对象，支持 hooks 和静态对象两种方式。

### 3. 基本示例

**在 CSS 中使用：**

```css
.my-button {
  background-color: var(--ob-color-bg-selected);
  color: var(--ob-color-text-selected);
  border-radius: var(--ob-radius-sm);
}
```

**在 React 函数组件中使用（Hooks 方式）：**

```tsx | pure
import { useToken } from '@oceanbase/design';

const MyComponent = () => {
  const { obToken } = useToken();

  return (
    <div
      style={{
        backgroundColor: obToken.colorBgDefault,
        color: obToken.colorTextDefault,
        borderRadius: obToken.radiusSm,
      }}
    >
      {...}
    </div>
  );
};
```

**在 React 类组件中使用（静态导入）：**

```tsx | pure
import { obToken } from '@oceanbase/design';
import React from 'react';

class MyComponent extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: obToken.colorBgDefault,
          color: obToken.colorTextDefault,
          borderRadius: obToken.radiusSm,
        }}
      >
        {...}
      </div>
    );
  }
}
```

## 核心特性

### 开箱即用

带 `--ob-` 前缀的 CSS 变量会在 `ConfigProvider` 渲染时自动注入到 `:root`，**无需开启 CSS 变量模式**即可直接使用。只要应用中包含 `ConfigProvider` 组件，这些变量就会自动生效。

### 与 Ant Design CSS 变量的区别

| 特性 | OceanBase CSS 变量 (`--ob-*`) | [Ant Design CSS 变量](https://5x.ant.design/docs/react/css-variables-cn) (`--ant-*`) |
| --- | --- | --- |
| 启用方式 | 自动注入，开箱即用 | 需要配置 `theme.cssVar` 开启 |
| 命名风格 | 精简、语义化命名 | 与 Token 名称一一对应 |
| 设计目的 | 便于业务层快速使用 | 完整暴露所有 Token |
| 变量数量 | 精选常用变量 | 覆盖所有 Design Token |

## 使用方式

### 如何选择：CSS 变量 vs obToken？

| 场景                   | 推荐方式                 | 原因                      |
| ---------------------- | ------------------------ | ------------------------- |
| CSS/Less/Sass 样式文件 | CSS 变量 (`var(--ob-*)`) | 原生支持，无需 JavaScript |
| React 函数组件         | `obToken`（useToken）    | 响应主题变化，类型安全    |
| React 类组件           | `obToken`（静态导入）    | 类组件无法使用 hooks      |
| 非 React 上下文        | `obToken`（静态导入）    | 工具函数、配置对象等      |

---

## 在样式文件中使用 CSS 变量

### CSS

```css
.my-button {
  background-color: var(--ob-color-bg-selected);
  color: var(--ob-color-text-selected);
  border-radius: var(--ob-radius-sm);
  padding: var(--ob-space-200) var(--ob-space-300);
}
```

.my-title { font: var(--ob-font-h1); color: var(--ob-color-text-default); }

````

### Less

```less
.my-card {
  background-color: var(--ob-color-bg-default);
  border: 1px solid var(--ob-color-border-default);
  border-radius: var(--ob-radius-md);
  box-shadow: var(--ob-shadow-2);
}
````

### Sass/SCSS

```scss
.my-card {
  background-color: var(--ob-color-bg-default);
  border: 1px solid var(--ob-color-border-default);
  border-radius: var(--ob-radius-md);
  box-shadow: var(--ob-shadow-2);
}
```

### React 内联样式（使用 CSS 变量）

```tsx | pure
<div
  style={{
    backgroundColor: 'var(--ob-color-info-fill)',
    color: 'var(--ob-color-info-text)',
    padding: 'var(--ob-space-400)',
  }}
>
  Info Card
</div>
```

## 在 React 组件中使用 obToken

除了 CSS 变量，OceanBase Design 还提供了 `obToken` 对象，它是所有 CSS 变量的 JavaScript 表示，可以在 React 组件中直接使用，提供更好的类型支持和开发体验。

### 使用方式

有两种方式可以获取 `obToken`：

1. **Hooks 方式**（推荐）：通过 `useToken` hooks 获取，会根据当前主题动态更新
2. **静态导入**：直接导入静态 `obToken` 对象，仅推荐在 React 类组件和非 React 上下文中使用

### Hooks 方式（推荐）

通过 `useToken` hooks 获取 `obToken`，会根据当前 `ConfigProvider` 的主题配置动态更新：

```tsx | pure
import { useToken } from '@oceanbase/design';
import React from 'react';

const MyComponent: React.FC = () => {
  const { obToken } = useToken();

  return (
    <div
      style={{
        backgroundColor: obToken.colorInfoFill,
        color: obToken.colorInfoText,
        padding: obToken.space400,
        borderRadius: obToken.radiusSm,
      }}
    >
      Info Card
    </div>
  );
};
```

### 静态导入

直接导入静态 `obToken` 对象，**仅推荐在 React 类组件和非 React 上下文中使用**：

**React 类组件中使用：**

```tsx | pure
import { obToken } from '@oceanbase/design';
import React from 'react';

class MyComponent extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: obToken.colorBgDefault,
          color: obToken.colorTextDefault,
          padding: obToken.space400,
          borderRadius: obToken.radiusSm,
        }}
      >
        My Component
      </div>
    );
  }
}
```

**非 React 上下文中使用：**

```tsx | pure
import { obToken } from '@oceanbase/design';

// 在工具函数、配置对象等非 React 上下文中使用
const styleConfig = {
  backgroundColor: obToken.colorBgDefault,
  color: obToken.colorTextDefault,
  padding: obToken.space400,
  borderRadius: obToken.radiusSm,
};
```

### 命名规则

`obToken` 中的键名与 CSS 变量名一一对应，但去掉了 `--ob-` 前缀，并使用驼峰命名：

| CSS 变量                    | obToken 键名         | 说明        |
| --------------------------- | -------------------- | ----------- |
| `--ob-color-bg-default`     | `colorBgDefault`     | 默认背景色  |
| `--ob-color-text-default`   | `colorTextDefault`   | 默认文本色  |
| `--ob-color-border-default` | `colorBorderDefault` | 默认边框色  |
| `--ob-space-400`            | `space400`           | 间距 400    |
| `--ob-radius-sm`            | `radiusSm`           | 小圆角      |
| `--ob-font-h1`              | `fontH1`             | H1 字体样式 |

### 在组件中使用

```tsx | pure
import { useToken, Button } from '@oceanbase/design';
import React from 'react';

const CustomButton: React.FC = () => {
  const { obToken } = useToken();

  return (
    <Button
      style={{
        backgroundColor: obToken.colorBgSelected,
        color: obToken.colorTextSelected,
        borderColor: obToken.colorBorderFocus,
      }}
    >
      自定义按钮
    </Button>
  );
};
```

## 最佳实践

### 1. 优先使用语义化变量

推荐使用语义化的变量名，而不是直接使用颜色值：

```tsx
// ✅ 推荐：使用语义化变量
backgroundColor: obToken.colorBgDefault;
color: obToken.colorTextDefault;

// ❌ 不推荐：直接使用基础颜色
backgroundColor: obToken.blue1;
color: obToken.blue6;
```

### 2. 保持一致性

在同一项目中，尽量使用相同的 Token 来保持视觉一致性：

```tsx
// ✅ 推荐：统一使用相同的间距变量
padding: obToken.space400;
margin: obToken.space400;

// ❌ 不推荐：混用不同的间距值
padding: '16px';
margin: obToken.space400;
```

### 3. 利用类型提示

在 TypeScript 项目中，充分利用 `obToken` 的类型提示功能，避免拼写错误：

```tsx
import { obToken } from '@oceanbase/design';

// ✅ TypeScript 会提供自动补全和类型检查
const color = obToken.colorBgDefault;

// ❌ 字符串容易拼写错误，且没有类型检查
const color = 'var(--ob-color-bg-default)';
```

### 5. 优先使用 `useToken` hooks

在 React 函数组件中，推荐使用 `useToken` hooks 获取 `obToken`：

```tsx
// ✅ 推荐：React 函数组件中使用 hooks，响应主题变化
import { useToken } from '@oceanbase/design';

const MyComponent = () => {
  const { obToken } = useToken();
  return <div style={{ backgroundColor: obToken.colorBgDefault }}>Content</div>;
};

// ⚠️ 仅在 React 类组件或非 React 上下文中使用静态导入
import { obToken } from '@oceanbase/design';

// React 类组件
class MyClassComponent extends React.Component {
  render() {
    return <div style={{ backgroundColor: obToken.colorBgDefault }}>Content</div>;
  }
}

// 非 React 上下文（工具函数、配置对象等）
const config = { backgroundColor: obToken.colorBgDefault };
```

### 4. 响应式设计

结合 CSS 变量和媒体查询，实现响应式设计：

```css
.my-container {
  padding: var(--ob-space-200);
}

@media (min-width: 768px) {
  .my-container {
    padding: var(--ob-space-400);
  }
}
```

## Design Token 列表

### 基础颜色

<ObTokenTable category="color"></ObTokenTable>

### 语义颜色

#### 填充色

<ObTokenTable category="color-bg"></ObTokenTable>

#### 边框色

<ObTokenTable category="color-border"></ObTokenTable>

#### 文本色

<ObTokenTable category="color-text"></ObTokenTable>

#### 图标色

<ObTokenTable category="color-icon"></ObTokenTable>

#### 状态色

<ObTokenTable category="color-status"></ObTokenTable>

### 字体

<ObTokenTable category="font"></ObTokenTable>

### 圆角

<ObTokenTable category="radius"></ObTokenTable>

### 阴影

<ObTokenTable category="shadow"></ObTokenTable>

### 间距

<ObTokenTable category="space"></ObTokenTable>

### 组件

<ObTokenTable category="component"></ObTokenTable>
