---
title: Result 结果
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全继承 antd [Result](https://ant.design/components/result-cn) 的能力和 API，可无缝切换。
- 💄 定制插图、主题和样式，以符合 OceanBase Design 设计规范。
- 🆕 `status` 属性新增 `processing` 枚举值，用于设置进行中的状态。

## 代码演示

<code src="./demo/success.tsx" title="成功"></code>

<code src="./demo/error.tsx" title="失败"></code>

<code src="./demo/warning.tsx" title="警告"></code>

<code src="./demo/processing.tsx" title="进行中"></code>

<code src="./demo/403.tsx" title="403" description="无访问权限"></code>

<code src="./demo/404.tsx" title="404" description="页面未找到"></code>

<code src="./demo/500.tsx" title="500" description="服务器发生了错误"></code>

<code src="./demo/icon.tsx" title="自定义 icon"></code>

<code src="./demo/with-page-container.tsx" title="和页容器搭配使用"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| status | 状态 | success \| error \| warning \| processing \| info \| 403 \| 404 \| 500 | info | - |

- 更多 API 详见 antd Result 文档: https://ant.design/components/result-cn
