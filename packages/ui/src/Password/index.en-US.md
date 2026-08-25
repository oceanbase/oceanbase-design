---
title: Password
nav:
  title: Biz Components
  path: /biz-components
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic" description="Built-in validation rules."></code>
<code src="./demo/change-password-scenario.tsx" title="Change password"></code>
<code src="./demo/custom-rules.tsx" title="Custom validation rules"></code>
<code src="./demo/random-generate-password.tsx" title="Generate random password"></code>
<code src="./demo/custom-generate-password.tsx" title="Custom generate password" description="Use generatePassword for custom logic when built-in is insufficient"></code>
<code src="./demo/custom-rules-and-random-generate.tsx" title="Custom rules + random generate"></code>

## Default password rules

- Length **8–20** characters
- Letters, digits, and special characters only (`! @ # $ % ^ & * ( ) _ - + = [ ] { } | \ : ; " ' < > , . ? ~ `)
- **At least 3 of 4** classes: uppercase, lowercase, digits, special characters
- No spaces, tabs, newlines, emoji, or CJK characters (shown on blur; not listed as a separate popover rule)

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| autoComplete | Browser autofill hint; `new-password` shows strength popover, `current-password` is a plain current-password field | string | `'new-password'` | - |
| rules | Custom password validation rules; when provided, the strength popover and blur validation follow these rules; defaults to the built-in cloud rules | [Validator](password#validator)[] | Cloud defaults | - |
| generatePasswordRegex | Regex for random password; non-empty shows generate button | RegExp | - | - |
| value | Password value | string | - | - |
| onChange | Value change callback | (value?: string) => void | - | - |
| generatePassword | Custom generate function | () => string | - | - |

### Validator

| Property     | Description              | Type                        | Default | Version |
| :----------- | :----------------------- | :-------------------------- | :------ | :------ |
| validate     | Password rule            | (value?: string) => boolean | -       | -       |
| message      | Rule description         | string                      | -       | -       |
| messageLines | Multi-line rule text     | string[]                    | -       | -       |
| optional     | Whether rule is optional | boolean                     | `true`  | -       |
