---
title: Password 密码输入框
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本" description="使用内置的校验规则。"></code>
<code src="./demo/change-password-scenario.tsx" title="修改密码场景"></code>
<code src="./demo/custom-rules.tsx" title="自定义校验规则"></code>
<code src="./demo/random-generate-password.tsx" title="生成随机密码"></code>
<code src="./demo/custom-generate-password.tsx" title="自定义生成密码" description="当内置的生成逻辑不满足需求时，可以通过 `generatePassword` 进行自定义"></code>
<code src="./demo/custom-rules-and-random-generate.tsx" title="自定义校验规则 + 生成随机密码"></code>

## 默认密码规则

内置默认规则对齐多云密码规范（**Breaking**：原默认长度为 8~32、各类字符至少 2 个）：

- 长度为 **8~20** 个字符
- 只能包含字母、数字和特殊字符（`! @ # $ % ^ & * ( ) _ - + = [ ] { } | \ : ; " ' < > , . ? ~ `）
- 大写字母、小写字母、数字、特殊字符，**至少包含 3 种**
- 禁止空格、Tab、换行、emoji、中文等（失焦时报错，不单独展示为气泡规则）

聚焦时通过气泡展示上述三条规则及强度进度。`mode="new"` 默认 `autoComplete="new-password"`，减轻浏览器已保存密码下拉遮挡气泡。

租户建库等 **8~64** 场景请通过 `rules` / `generatePasswordRegex` 自定义覆盖。

## 与 Form 集成

校验时机由 Form 默认 `validateMode` 处理（提交前不报错，提交失败后输入实时更新）。`Password` 负责规则气泡、强度与文案；在 `Form.Item` 的 `rules` 中配置校验即可：

```tsx
import { Form } from '@oceanbase/design';
import { Password } from '@oceanbase/ui';

<Form>
  <Form.Item
    name="password"
    rules={[
      { required: true, message: passwordLocale.emptyMessage },
      { pattern: passwordPattern, message: passwordLocale.genericFailMessage },
    ]}
  >
    <Password />
  </Form.Item>
</Form>;
```

文案可来自 `ConfigProvider` 的 `locale.Password`（`emptyMessage`、`genericFailMessage`、`forbiddenCharsMessage` 等）。自定义 `rules` / `generatePasswordRegex` 时，在 `Form.Item` 中用对应的 `validator` 或 `pattern` 与组件 `rules` 保持一致。

- **新密码**：`<Password />`（`mode="new"`）；在 `Form.Item` 内与 `Input` 用法相同，失焦规则分析与「请牢记密码」会自动写入 `Form.Item` explain，与校验文案共用同一区域。

```tsx
<Form.Item name="password" rules={[...]}>
  <Password />
</Form.Item>
```

非 `Form.Item` 场景下，失焦文案仍以内联方式展示在控件下方。

- **当前密码**：`<Password mode="plain" />`，仅 `required`，不校验格式（允许空格等）；准确性由提交时接口报错映射到字段。
- **确认密码**：`Input.Password` + 一致性 `validator`。
- **注册表单**：`Login` 的 `RegisterForm` 已内置多云密码校验，可直接使用。

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| mode | `new` 聚焦展示规则气泡；`plain` 为简单密码输入（当前密码） | `'new' \| 'plain'` | `'new'` | - |
| rules | 气泡内展示的密码规则（仅 UI，校验时机由 Form 负责） | [Validator](password#validator)[] | 多云默认规则 | - |
| generatePasswordRegex | 随机生成密码的正则表达式，不为空则展示随机生成的按钮 | RegExp | - | - |
| value | 密码框内容 | string | - | - |
| onChange | 密码框内容变化的回调 | (value?: string) => void | - | - |
| generatePassword | 自定义生成密码 | () => string | - | - |

### Validator

| 参数         | 说明                     | 类型                        | 默认值 | 版本 |
| :----------- | :----------------------- | :-------------------------- | :----- | :--- |
| validate     | 密码规则                 | (value?: string) => boolean | -      | -    |
| message      | 密码规则说明             | string                      | -      | -    |
| messageLines | 多行规则说明             | string[]                    | -      | -    |
| optional     | 密码规则是否为校验可选项 | boolean                     | `true` | -    |
