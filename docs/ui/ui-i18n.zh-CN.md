---
title: 国际化
order: 4
group: 业务组件
---

`@oceanbase/ui` 默认语言是中文，如果要支持其他语言，需要手动开启国际化。

## 开启国际化

可通过 ConfigProvider 全局配置开启国际化，`ConfigProvider` 使用 `React` 的 `context` 特性，只需在应用外围包裹一次即可全局生效。

```jsx | pure
import { ConfigProvider } from '@oceanbase/design';
import zhCN from '@oceanbase/ui/es/locale/zh-CN'; // also including zh-CN of @oceanbase/design

return (
  <ConfigProvider locale={zhCN}>
    {...}
  </ConfigProvider>
);
```

## 目前支持语言

目前支持以下语言：

| 语言     | 文件名 |
| -------- | ------ |
| 简体中文 | zh-CN  |
| 繁体中文 | zh-TW  |
| 英文     | en-US  |
| 日文     | ja-JP  |

如当前国际化语言有问题或者需要支持其他语言，欢迎反馈给我们。
