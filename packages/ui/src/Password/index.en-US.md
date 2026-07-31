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

Built-in defaults follow the multi-cloud password spec (**Breaking**: was length 8–32 and at least 2 of each character class):

- Length **8–20** characters
- Letters, digits, and special characters only (`! @ # $ % ^ & * ( ) _ - + = [ ] { } | \ : ; " ' < > , . ? ~ `)
- **At least 3 of 4** classes: uppercase, lowercase, digits, special characters
- No spaces, tabs, newlines, emoji, or CJK characters (shown on blur; not listed as a separate popover rule)

On focus, a popover shows the three rules above and a strength bar. `mode="new"` defaults to `autoComplete="new-password"` to reduce saved-password dropdown overlap. For tenant DB accounts (**8–64**, etc.), override with custom `rules` / `generatePasswordRegex`.

## Form integration

Validation timing follows Form default `validateMode`. `Password` handles the rules popover, strength UI, and messages; configure `Form.Item` rules as usual:

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

Use `ConfigProvider` `locale.Password` for messages (`emptyMessage`, `genericFailMessage`, `forbiddenCharsMessage`, etc.). For custom `rules` / `generatePasswordRegex`, keep `Form.Item` validators or patterns aligned with the component `rules`.

- **New password**: `<Password />` (`mode="new"`). Form validation errors use `Form.Item` explain. Blur rule messages and the copy hint are absolutely positioned below the input (no document-flow height).
- **Current password**: `<Password mode="plain" />` with `required` only; map API accuracy errors on submit.
- **Confirm password**: `Input.Password` + match validator.
- **Registration**: `Login` `RegisterForm` includes cloud password validation out of the box.

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| mode | `new` shows strength popover on focus; `plain` is a simple input | `'new' \| 'plain'` | `'new'` | - |
| rules | Rules shown in the popover (UI only; Form handles validation timing) | [Validator](password#validator)[] | Cloud defaults | - |
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
