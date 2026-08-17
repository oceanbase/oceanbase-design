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
- 🆕 Form.Item 新增 `description` 属性，用于设置表单控件前的描述信息。
- 🆕 Form 新增 `validateMode` / `reValidateMode`，对齐 [react-hook-form](https://react-hook-form.com/docs/useform) 校验时机；默认 `validateMode="onSubmit"` + `reValidateMode="onChange"`（与 shadcn 官方示例一致）。可通过 [ConfigProvider](/components/config-provider) `form.validateMode` 全局配置。
- 🆕 Form `scrollToFirstError` 校验失败时支持滚动到首个错误字段：antd 仅在 `form.submit()` 失败时触发，`@oceanbase/design` 对直接调用 `form.validateFields()` 失败同样生效（如 Modal `onOk` 场景），默认开启，可通过 `scrollToFirstError={false}` 或 [ConfigProvider](/components/config-provider) `form.scrollToFirstError` 全局关闭。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本" description="默认为可选样式。"></code>
<code src="./demo/requiredMark-same-with-antd.tsx" title="设置为必选样式" description="通过 `requiredMark` 进行设置。"></code>
<code src="./demo/form-item-description.tsx" title="描述信息" description="可通过 `Form.Item` 的 `description` 属性在表单控件前设置描述信息。"></code>
<code src="./demo/form-item-extra.tsx" title="额外信息" description="可通过 `Form.Item` 的 `extra` 属性在表单控件后设置额外信息。"></code>
<code src="./demo/form-item-tooltip.tsx" title="提示信息" description="可通过 `Form.Item` 的 `tooltip` 属性设置提示信息。"></code>
<code src="./demo/form-item-action.tsx" title="操作项" description="可在 `Form.Item` 上设置 `action` 操作项，仅垂直布局生效。"></code>
<code src="./demo/layout.tsx" title="表单布局"></code>
<code src="./demo/multiple-layout.tsx" title="表单混合布局"></code>
<code src="./demo/control-hooks.tsx" title="表单方法调用"></code>
<code src="./demo/hideRequiredMark.tsx" title="hideRequiredMark" debug></code>
<code src="./demo/pro-form.tsx" title="ProForm" debug></code>
<code src="./demo/validate-mode.tsx" title="校验模式" description="对齐 react-hook-form 的 `mode` / `reValidateMode`，默认 submit 前不展示错误。" debug></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| preserve | 当字段被删除时保留字段值。你可以通过 `getFieldsValue(true)` 来获取保留字段值 | boolean | false | 0.3.1 |
| requiredMark | 设置必选或可选样式。此为 Form 配置，Form.Item 无法单独配置 | boolean \| `optional` \| ((label: ReactNode, info: { required: boolean }) => ReactNode) | `optional` | - |
| validateMode | 首次校验时机，对齐 react-hook-form `mode` | `onSubmit` \| `onBlur` \| `onChange` \| `onTouched` \| `all` | `onSubmit` | - |
| reValidateMode | submit 后的重校验时机，对齐 react-hook-form `reValidateMode`（支持 `onChange`、`onSubmit`） | `onChange` \| `onSubmit` | `onChange` | - |

显式设置 `validateTrigger` 时以 `validateTrigger` 为准，不注入 `validateMode` 相关逻辑。恢复 antd 旧行为（输入即报错）：`validateMode="onChange"`。

### ConfigProvider

可通过 `ConfigProvider` 的 `form.validateMode` / `form.reValidateMode` / `form.scrollToFirstError` 全局配置，仅对 `@oceanbase/design` 的 `Form` 生效（ProForm 等内部使用 antd Form 的组件不适用）。

### Form.Item

| 参数        | 说明                                             | 类型      | 默认值 | 版本   |
| :---------- | :----------------------------------------------- | :-------- | :----- | :----- |
| action      | 操作项，仅垂直布局生效                           | ReactNode | -      | 0.4.10 |
| description | 描述信息，在输入框前显示操作说明，仅垂直布局生效 | ReactNode | -      | -      |

- 更多 API 详见 antd Form 文档: https://ant.design/components/form-cn
