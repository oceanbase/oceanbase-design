---
title: Message
nav:
  title: General
  path: /components
---

<code src="./demo/deprecated-notice.en-US.tsx" inline></code>

## Overview

- 🔥 Compatible with antd [Message](https://ant.design/components/message) call sites; existing code keeps working.
- 💄 Internally forwards to [Notification](/components/notification) with OBUI 2.0 styles and behavior.
- 📌 Prefer `notification` for all new notification scenarios.

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Compatibility" description="message methods still work but render as Notification."></code>

## API

- Compatible with antd Message static methods and `message.useMessage()`; params and return semantics are preserved.
- For notification scenarios, use the [Notification API](/components/notification#api).
