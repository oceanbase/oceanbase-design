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
<code src="./demo/password.tsx" title="Password" description='Use `autoComplete="new-password"` for new-password fields; Input.Password applies extra hints to reduce saved-password dropdown overlap. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).'></code>
<code src="./demo/presuffix.tsx" title="Prefix and Suffix" description="Add prefix or suffix icon to input."></code>
<code src="./demo/showCount.tsx" title="Character Count" description="Cannot input beyond max length."></code>
<code src="./demo/allowClear.tsx" title="Clear Icon" description="One-click clear input."></code>

## API

- See antd Input docs: https://ant.design/components/input

### Input.Password extensions

When `autoComplete="new-password"`, the component also uses readOnly-until-focus and password-manager `data-*` hints to reduce saved-password dropdown overlap beyond the standard autocomplete value.
