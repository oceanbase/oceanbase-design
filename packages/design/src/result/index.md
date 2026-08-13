---
title: Result 结果
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全继承 antd [Result](https://ant.design/components/result-cn) 的能力和 API，可无缝切换。
- 💄 定制插图、主题和样式，以符合 OceanBase Design 设计规范。
- 🆕 `status` 属性新增 `processing`、`normal` 枚举值。
- 🆕 新增 `PRESENTED_IMAGE_NOT_FOUND`、`PRESENTED_IMAGE_NETWORK_ERROR`、`PRESENTED_IMAGE_VERSION_UPDATE` 内置插图。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/success.tsx" title="成功"></code>
<code src="./demo/error.tsx" title="失败"></code>
<code src="./demo/warning.tsx" title="警告"></code>
<code src="./demo/processing.tsx" title="进行中"></code>
<code src="./demo/normal.tsx" title="正常"></code>
<code src="./demo/403.tsx" title="403" description="无访问权限。"></code>
<code src="./demo/404.tsx" title="404" description="页面未找到。"></code>
<code src="./demo/500.tsx" title="500" description="服务器发生了错误。"></code>
<code src="./demo/presented-images.tsx" title="更多内置插图" description="通过 icon 使用 PRESENTED_IMAGE_* 常量。"></code>
<code src="./demo/icon.tsx" title="自定义 icon"></code>
<code src="./demo/over-length.tsx" title="超长内容" description="为了避免无限拉伸，限制副标题的最大宽度为 600px、内容区的最大宽度为 1000px。"></code>
<code src="./demo/with-page-container.tsx" title="和页容器搭配使用"></code>

## 内置插图

### 通过 status 使用

<code src="./demo/built-in-images-status.tsx" inline></code>

### 通过 icon 使用

通过 `icon={<Result.PRESENTED_IMAGE_* />}` 使用：

<code src="./demo/built-in-images-icon.tsx" inline></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| status | 状态 | success \| error \| warning \| processing \| normal \| info \| 403 \| 404 \| 500 | info | - |

- 更多 API 详见 antd Result 文档: https://ant.design/components/result-cn
