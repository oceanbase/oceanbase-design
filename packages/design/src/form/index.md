---
title: Form 表单
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全继承 antd [Form](https://ant.design/components/form-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 📢 Form `requiredMark` 默认为 `optional` 可选样式。
- 🆕 Form.Item `tooltip` 新增 `type` 属性，支持不同类型的 Tooltip 提示，详见 [Tooltip 文档](/components/Tooltip)。

## 代码演示

<code src="./demo/basic.tsx" title="基本" description="默认为可选样式"></code>

<code src="./demo/requiredMark-same-with-antd.tsx" title="设置为必选样式" description="可以通过全局或局部设置 `requiredMark`，让必选样式和 `antd` 保持一致"></code>

<code src="./demo/hideRequiredMark.tsx" title="hideRequiredMark" debug></code>

<code src="./demo/form-item-tooltip.tsx" title="配置提示信息"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| requiredMark | 设置必选或可选样式。此为 Form 配置，Form.Item 无法单独配置 | boolean \| `optional` \| ((label: ReactNode, info: { required: boolean }) => ReactNode) | `optional` | - |

- 更多 API 详见 antd Form 文档: https://ant.design/components/form-cn
