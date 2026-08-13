---
title: Internationalization
order: 4
group: Biz Components
---

`@oceanbase/ui` uses Chinese as the default language. To support other languages, you need to enable internationalization manually.

## Enable Internationalization

Enable internationalization via ConfigProvider global configuration. `ConfigProvider` uses React's `context` feature, so wrapping it once around your app makes it effective globally.

```jsx | pure
import { ConfigProvider } from '@oceanbase/design';
import zhCN from '@oceanbase/ui/es/locale/zh-CN'; // also including zh-CN of @oceanbase/design

return (
  <ConfigProvider locale={zhCN}>
    {...}
  </ConfigProvider>
);
```

## Supported Languages

The following languages are supported:

| Language            | File  |
| ------------------- | ----- |
| Simplified Chinese  | zh-CN |
| Traditional Chinese | zh-TW |
| English             | en-US |
| Japanese            | ja-JP |

If you encounter issues with any language or need support for additional languages, please let us know.
