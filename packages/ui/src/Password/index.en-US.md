---
title: Password
nav:
  title: Biz Components
  path: /biz-components
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic" description="Built-in validation rules."></code>
<code src="./demo/custom-rules.tsx" title="Custom validation rules"></code>
<code src="./demo/random-generate-password.tsx" title="Generate random password"></code>
<code src="./demo/custom-generate-password.tsx" title="Custom generate password" description="Use generatePassword for custom logic when built-in is insufficient"></code>
<code src="./demo/custom-rules-and-random-generate.tsx" title="Custom rules + random generate"></code>

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| rules | Password validation rules | [Validator](password#validator)[] | - | - |
| generatePasswordRegex | Regex for random password; non-empty shows generate button | RegExp | - | - |
| value | Password value | string | - | - |
| onChange | Value change callback | (value?: string) => void | - | - |
| onValidate | Validation callback on value change | (passed: boolean) => void | - | - |
| generatePassword | Custom generate function | () => string | - | - |

### Validator

| Property | Description              | Type                        | Default | Version |
| :------- | :----------------------- | :-------------------------- | :------ | :------ |
| validate | Password rule            | (value?: string) => boolean | -       | -       |
| message  | Rule description         | string                      | -       | -       |
| optional | Whether rule is optional | boolean                     | true    | -       |
