# 主题与 Design Token

design 的主题与 Token 使用方式；ConfigProvider 渲染时自动注入 CSS 变量，业务侧优先使用 obToken 保持一致性。

## 主题配置

通过 ConfigProvider 的 `theme` 配置：

```tsx
import { ConfigProvider, theme } from '@oceanbase/design';

// 默认主题
<ConfigProvider>
  <App />
</ConfigProvider>

// 暗色主题
<ConfigProvider theme={{ isDark: true }}>
  <App />
</ConfigProvider>

// 紧凑主题
<ConfigProvider theme={{ isCompact: true }}>
  <App />
</ConfigProvider>

// 阿里云主题
<ConfigProvider theme={{ isAliyun: true }}>
  <App />
</ConfigProvider>

// 组合：暗色 + 紧凑
<ConfigProvider theme={{ isDark: true, isCompact: true }}>
  <App />
</ConfigProvider>

// 自定义 algorithm（antd 主题算法）
<ConfigProvider
  theme={{
    algorithm: theme.darkAlgorithm,
    token: { colorPrimary: '#006AFF' },
  }}
>
  <App />
</ConfigProvider>
```

**theme 扩展**：`isAliyun`、`isDark`、`isCompact`；可与 antd 的 `algorithm`、`token`、`components` 等组合使用。

## Design Token 消费方式

| 场景            | 推荐方式                  | 说明                                    |
| --------------- | ------------------------- | --------------------------------------- |
| CSS/Less/Sass   | `var(--ob-*)`             | ConfigProvider 渲染时自动注入，开箱即用 |
| React 函数组件  | `useToken()` 的 `obToken` | 响应主题变化，类型安全                  |
| React 类组件    | 静态导入 `obToken`        | 类组件无法用 hooks                      |
| 非 React 上下文 | 静态导入 `obToken`        | 工具函数、配置对象等                    |

**注意**：勿混用 antd 的 `useToken` 与 design 的 `theme.useToken()`；design 的 `useToken` 返回 `obToken`，antd 的返回 `token`。

## CSS 变量（var(--ob-\*)）

ConfigProvider 渲染时自动注入到 `:root`，无需额外配置：

```css
.my-card {
  background-color: var(--ob-color-bg-default);
  color: var(--ob-color-text-default);
  border: 1px solid var(--ob-color-border-default);
  border-radius: var(--ob-radius-md);
  padding: var(--ob-space-400);
  box-shadow: var(--ob-shadow-2);
}
```

**命名规则**：`--ob-` 前缀 + 语义化命名；与 antd `--ant-*` 不同，design 的 `--ob-*` 自动注入，无需配置 `theme.cssVar`。

## obToken（React / 非 React）

### Hooks 方式（推荐）

```tsx
import { useToken } from '@oceanbase/design';

const MyComponent = () => {
  const { obToken } = useToken();

  return (
    <div
      style={{
        backgroundColor: obToken.colorBgDefault,
        color: obToken.colorTextDefault,
        padding: obToken.space400,
        borderRadius: obToken.radiusSm,
      }}
    >
      内容
    </div>
  );
};
```

### 静态导入（类组件 / 非 React）

```tsx
import { obToken } from '@oceanbase/design';

// 类组件
class MyComponent extends React.Component {
  render() {
    return <div style={{ backgroundColor: obToken.colorBgDefault }}>内容</div>;
  }
}

// 非 React：工具函数、配置对象
const styleConfig = {
  backgroundColor: obToken.colorBgDefault,
  padding: obToken.space400,
};
```

### 命名规则

obToken 键名与 CSS 变量对应，去掉 `--ob-` 前缀，驼峰命名：

| CSS 变量                  | obToken            |
| ------------------------- | ------------------ |
| `--ob-color-bg-default`   | `colorBgDefault`   |
| `--ob-color-text-default` | `colorTextDefault` |
| `--ob-space-400`          | `space400`         |
| `--ob-radius-sm`          | `radiusSm`         |
| `--ob-font-h1`            | `fontH1`           |

## 最佳实践

1. **优先语义化变量**：用 `colorBgDefault`、`colorTextDefault` 等，勿直接写 `blue1`、`blue6`。
2. **保持一致性**：同一项目统一用 obToken 的间距、圆角、阴影，不手写 px 值。
3. **函数组件用 useToken**：响应主题切换；类组件或非 React 才用静态 obToken。
4. **自定义样式时**：业务侧写样式优先 obToken，与 design 组件风格一致。

## Token 列表

### 语义颜色（推荐优先使用）

| 分类 | obToken | CSS 变量 | 说明 |
| --- | --- | --- | --- |
| **填充** | colorBgDefault | --ob-color-bg-default | 默认背景 |
|  | colorBgHover | --ob-color-bg-hover | 悬浮背景 |
|  | colorBgSelected | --ob-color-bg-selected | 选中背景 |
|  | colorBgDisabled | --ob-color-bg-disabled | 禁用背景 |
| **边框** | colorBorderDefault | --ob-color-border-default | 默认边框 |
|  | colorBorderHover | --ob-color-border-hover | 悬浮边框 |
|  | colorBorderFocus | --ob-color-border-focus | 聚焦边框 |
|  | colorBorderError | --ob-color-border-error | 错误边框 |
| **文本** | colorTextDefault | --ob-color-text-default | 默认文本 |
|  | colorTextLabel | --ob-color-text-label | 标签文本 |
|  | colorTextDescription | --ob-color-text-description | 描述文本 |
|  | colorTextDisabled | --ob-color-text-disabled | 禁用文本 |
|  | colorTextLink | --ob-color-text-link | 链接文本 |
| **图标** | colorIconDefault | --ob-color-icon-default | 默认图标 |
|  | colorIconHover | --ob-color-icon-hover | 悬浮图标 |
|  | colorIconCritical | --ob-color-icon-critical | 严重/警示图标 |
| **语义背景** | colorBgInfo | --ob-color-bg-info | 信息背景 |
|  | colorBgSuccess / colorBgWarning / colorBgError | 对应 `--ob-color-bg-*` | 成功/警告/错误背景 |
| **语义文本** | colorTextSuccess / colorTextError / colorTextWarning | 对应 `--ob-color-text-*` | 成功/错误/警告强调文本 |

### 间距

| obToken  | CSS 变量       | 说明 |
| -------- | -------------- | ---- |
| space0   | --ob-space-0   | 0    |
| space50  | --ob-space-50  | 2px  |
| space100 | --ob-space-100 | 4px  |
| space150 | --ob-space-150 | 6px  |
| space200 | --ob-space-200 | 8px  |
| space300 | --ob-space-300 | 12px |
| space400 | --ob-space-400 | 16px |
| space500 | --ob-space-500 | 20px |
| space600 | --ob-space-600 | 24px |
| space800 | --ob-space-800 | 32px |

### 圆角

| obToken  | CSS 变量       | 说明   |
| -------- | -------------- | ------ |
| radiusSm | --ob-radius-sm | 小圆角 |
| radiusMd | --ob-radius-md | 中圆角 |
| radiusLg | --ob-radius-lg | 大圆角 |

### 阴影

| obToken                    | CSS 变量                                 | 说明     |
| -------------------------- | ---------------------------------------- | -------- |
| shadow1Top / shadow1Bottom | --ob-shadow-1-top / --ob-shadow-1-bottom | 轻阴影   |
| shadow2                    | --ob-shadow-2                            | 次级阴影 |

### 字体

| obToken                                    | CSS 变量                          | 说明        |
| ------------------------------------------ | --------------------------------- | ----------- |
| fontFamilyDefault                          | --ob-font-family-default          | 默认字体族  |
| fontH1～fontH4                             | --ob-font-h1～--ob-font-h4        | 标题 H1～H4 |
| fontBody1 / fontBody2                      | --ob-font-body1 / --ob-font-body2 | 正文        |
| fontCaption                                | --ob-font-caption                 | 辅助说明    |
| fontSize300 / fontSize325 / fontSize400    | --ob-font-size-300 等             | 字号        |
| fontWeightSm / fontWeightMd / fontWeightLg | --ob-font-weight-sm 等            | 字重        |

### 基础颜色（按需使用）

中性色 gray1～gray10、蓝色 blue1～blue6、绿色 green1～green6、橙色 orange1～orange6、红色 red1～red6、紫色 fuchsia1～fuchsia6。优先使用语义化 token。

完整列表见 design 官网。
