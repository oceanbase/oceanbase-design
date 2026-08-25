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

- 长度为 **8~20** 个字符
- 只能包含字母、数字和特殊字符（`! @ # $ % ^ & * ( ) _ - + = [ ] { } | \ : ; " ' < > , . ? ~ `）
- 大写字母、小写字母、数字、特殊字符，**至少包含 3 种**
- 禁止空格、Tab、换行、emoji、中文等（失焦时报错，不单独展示为气泡规则）

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| autoComplete | 浏览器自动填充提示；`new-password` 展示强度气泡，`current-password` 为简单当前密码输入 | string | `'new-password'` | - |
| rules | 自定义密码校验规则；传入后强度气泡与失焦校验均按自定义规则执行，未传入时使用内置多云规则 | [Validator](password#validator)[] | 多云默认规则 | - |
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
