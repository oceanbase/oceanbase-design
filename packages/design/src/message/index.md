---
title: Message 全局提示
nav:
  title: 基础组件
  path: /components
---

<code src="./demo/deprecated-notice.tsx" inline></code>

## 组件说明

- 🔥 兼容 antd [Message](https://ant.design/components/message-cn) 调用方式，现有代码无需修改。
- 💄 内部转发至 [Notification](/zh-CN/components/notification)，统一 OBUI 2.0 通知样式与行为。
- 📌 新代码请直接使用 `notification`，不再新增 `message` 用法。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="兼容用法" description="message 方法仍可使用，但会渲染为 Notification。"></code>

## API

- 兼容 antd Message 静态方法与 `message.useMessage()`，参数与返回值语义保持一致。
- 通知场景请改用 [Notification API](/components/notification#api)。
