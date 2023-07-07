---
title: Password 密码输入框
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<code src="./demo/basic.tsx" title="基本" description="使用内置的校验规则"></code>

<code src="./demo/custom-rules.tsx" title="自定义校验规则"></code>

<code src="./demo/random-generate-password.tsx" title="生成随机密码"></code>

<code src="./demo/custom-rules-and-random-generate.tsx" title="自定义校验规则 + 生成随机密码"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| rules | 密码校验规则 | [Validator](password#validator)[] | - | - |
| generatePasswordRegex | 随机生成密码的正则表达式，不为空则展示随机生成的按钮 | RegExp | - | - |
| value | 密码框内容 | string | - | - |
| onChange | 密码框内容变化的回调 | (value?: string) => void | - | - |
| onValidate | 密码框内容变化触发校验的回调 | (passed: boolean) => void | - | - |

### Validator

| 参数     | 说明                     | 类型                        | 默认值 | 版本 |     |
| :------- | :----------------------- | :-------------------------- | :----- | :--- | --- |
| validate | 密码规则                 | (value?: string) => boolean | -      | -    |
| message  | 密码规则说明             | string                      | -      | -    |
| optional | 密码规则是否为校验可选项 | boolean                     | true   | -    |
