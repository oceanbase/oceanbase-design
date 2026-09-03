---
title: Input
nav:
  title: General
  path: /components
demo:
  cols: 2
---

- 🔥 Fully inherits antd [Input](https://ant.design/components/input-cn) capabilities and API, seamless migration.
- 💄 Custom theme and styles, aligned with OceanBase Design specification.
- 📢 Default `placeholder` filled, configurable via ConfigProvider `locale.Input.placeholder`.

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic" description="Default `placeholder` filled."></code>
<code src="./demo/search.tsx" title="Search"></code>
<code src="./demo/password.tsx" title="Password" description='For new-password fields, set `autoComplete="new-password"` to disable browser autofill, password manager, and saved-password dropdown prompts. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).'></code>
<code src="./demo/presuffix.tsx" title="Prefix and Suffix" description="Add prefix or suffix icon to input."></code>
<code src="./demo/showCount.tsx" title="Character Count" description="Cannot input beyond max length."></code>
<code src="./demo/allowClear.tsx" title="Clear Icon" description="One-click clear input."></code>

## API

- See antd Input docs: https://ant.design/components/input

### Input.Password extensions

Matches antd via `Input.Password` with native `type="password"` for browser autofill. When `autoComplete="new-password"`, the input is text masked with text-security to suppress the saved-password dropdown, with password-manager `data-*` hints.
