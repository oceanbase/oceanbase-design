---
title: Input 输入框
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="密码框" description="密码框"></code>
<code src="./demo/input-password-basic.tsx" title="密码强度校验" description="使用内置的校验规则"></code>
<code src="./demo/custom-rules.tsx" title="自定义密码校验规则"></code>
<code src="./demo/random-generate-password.tsx" title="生成随机密码"></code>
<code src="./demo/custom-rules-and-random-generate.tsx" title="自定义密码校验规则 + 生成随机密码"></code>
<code src="./demo/encrypt-password.tsx" title="密码加密"></code>

## API

### Input.Password

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| rules | 是否激活密码校验提示，传入 true 表示采用默认校验规则，传入相应规则，采用自定义校验规则 | boolean \| [Validator](password#validator)[] | false | - |
| generatePasswordRegex | 随机生成密码的正则表达式，不为空则展示随机生成的按钮 | RegExp | - | - |
| value | 密码框内容 | string | - | - |
| publicKey | RSA 加密用的公钥，如果需要进行密码加密，且采用RSA方式加密，传入公钥即可,与 customEncryption 不可同时使用 | string | - | - |
| customEncryption | 自定义加密方式，需要将加密后结果 return；与 publicKey 不可同时使用， | (password?: string) => string | - | - |
| onChange | 密码框内容变化的回调 | (value?: string) => void | - | - |
| onValidate | 密码框内容变化触发校验的回调 | (passed: boolean) => void | - | - |

### Validator

| 参数     | 说明                     | 类型                        | 默认值 | 版本 |
| :------- | :----------------------- | :-------------------------- | :----- | :--- |
| validate | 密码规则                 | (value?: string) => boolean | -      | -    |
| message  | 密码规则说明             | string                      | -      | -    |
| optional | 密码规则是否为校验可选项 | boolean                     | true   | -    |
