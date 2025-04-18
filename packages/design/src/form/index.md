---
title: Form 表单
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全继承 antd [Form](https://ant.design/components/form-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 📢 Form `preserve` 属性的默认值为 `true`。
- 📢 Form `requiredMark` 默认为 `optional` 可选样式。
- 🆕 Form.Item `tooltip` 新增 `type` 属性，支持不同类型的 Tooltip 提示，详见 [Tooltip 文档](/components/Tooltip)。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本" description="默认为可选样式。"></code>
<code src="./demo/requiredMark-same-with-antd.tsx" title="设置为必选样式" description="通过 `requiredMark` 进行设置。"></code>
<code src="./demo/form-item-tooltip.tsx" title="设置提示信息" description="可在 `Form.Item` 上设置 `tooltip` 和 `extra` 提示信息。"></code>
<code src="./demo/form-item-action.tsx" title="操作项" description="可在 `Form.Item` 上设置 `action` 操作项，仅垂直布局生效。"></code>
<code src="./demo/layout.tsx" title="表单布局"></code>
<code src="./demo/multiple-layout.tsx" title="表单混合布局"></code>
<code src="./demo/hideRequiredMark.tsx" title="hideRequiredMark" debug></code>
<code src="./demo/pro-form.tsx" title="ProForm" debug></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| preserve | 当字段被删除时保留字段值。你可以通过 `getFieldsValue(true)` 来获取保留字段值 | boolean | false | 0.3.1 |
| requiredMark | 设置必选或可选样式。此为 Form 配置，Form.Item 无法单独配置 | boolean \| `optional` \| ((label: ReactNode, info: { required: boolean }) => ReactNode) | `optional` | - |

### Form.Item

| 参数   | 说明                   | 类型      | 默认值 | 版本   |
| :----- | :--------------------- | :-------- | :----- | :----- |
| action | 操作项，仅垂直布局生效 | ReactNode | -      | 0.4.10 |

- 更多 API 详见 antd Form 文档: https://ant.design/components/form-cn
