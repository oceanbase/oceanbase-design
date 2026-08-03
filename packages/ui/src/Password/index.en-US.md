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

On focus, a popover shows the three rules above and a strength bar. Defaults to `autoComplete="new-password"` to reduce saved-password dropdown overlap; `autoComplete="current-password"` skips the strength popover for current-password fields.

For tenant DB accounts (**8–64**, etc.), override with custom `rules` / `generatePasswordRegex`.

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

- **New password**: `<Password />` (default `autoComplete="new-password"`). Inside `Form.Item`, use it like `Input` — blur rule messages and the copy hint are written to `Form.Item` explain automatically.

```tsx
<Form.Item name="password" rules={[...]}>
  <Password />
</Form.Item>
```

Outside `Form.Item`, blur feedback stays inline below the control.

- **Current password**: `<Password autoComplete="current-password" />` with `required` only; map API accuracy errors on submit.
- **Confirm password**: `Input.Password` + match validator.
- **Registration**: `Login` `RegisterForm` includes cloud password validation out of the box.

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| autoComplete | Browser autofill hint; `new-password` shows strength popover, `current-password` is a plain current-password field | string | `'new-password'` | - |
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
