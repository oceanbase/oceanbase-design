---
title: ConfigProvider 必包
impact: high
tags: [design, theme, message, notification]
---

# 应用根节点必须使用 ConfigProvider

## Why

Message、Notification、Modal 等静态方法及 Design Token（obToken/CSS 变量）依赖 ConfigProvider 提供的上下文。根节点未包裹时会导致主题错乱、静态方法无法正确渲染或样式不一致。

## Incorrect

```tsx
// 根节点未包 ConfigProvider
function App() {
  return (
    <div>
      <Button onClick={() => message.success('ok')}>提示</Button>
    </div>
  );
}
```

## Correct

```tsx
import { ConfigProvider } from '@oceanbase/design';

function Root() {
  return (
    <ConfigProvider>
      <App />
    </ConfigProvider>
  );
}
```

## When not to use

- 纯展示/脚本环境且不调用 message/notification/Modal 且不消费 obToken 时，可暂不包裹；上线前应补齐。
