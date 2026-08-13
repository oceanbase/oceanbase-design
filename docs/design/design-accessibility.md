---
title: Accessibility (WCAG 2.1)
order: 9
group: General
---

OceanBase Design default theme aligns with antd 5.x. In production, aim for [WCAG 2.1](https://www.w3.org/TR/WCAG21/) Level AA. Below are **Design Token** conventions; contrast checks and component audits are in the <a href="/wcag-audit-report.html" target="_blank" rel="noopener noreferrer">WCAG audit report</a>.

## Text and semantic colors

- **Body text** (small, ~12–14px): foreground/background contrast should be ≥ **4.5:1**. Do not use `colorSuccess`, `colorWarning`, `colorError` **fills** as body text on white — those tokens are for status blocks, tags, etc.
- **Status copy**: Prefer `colorSuccessText` / `colorWarningText` / `colorErrorText` with matching `color*Bg`; the theme configures high-contrast pairs.
- **Tertiary / quaternary text**: `colorTextTertiary` (`gray7`) and `colorTextQuaternary` (`gray6`) on white fail 4.5:1 for small body text — use only for **hints, placeholders**, or **large/bold** text (≥3:1). Input/Select/DatePicker placeholders bump quaternary to `gray8` via component tokens.

### Avoid (common AA failures)

| Scenario | Avoid | Prefer |
| --- | --- | --- |
| Small body / table cells | `colorTextTertiary`, `colorTextQuaternary` on white | `colorText` / `colorTextSecondary`, or larger type |
| Status messaging | `colorSuccess` / `colorWarning` / `colorError` text alone | `color*Text` + `color*Bg`, with icon or label |
| Structure | Rely only on `colorBorder` hue | Stronger stroke, gutters, light shadow, or adjacent headings |
| Information | Color-only success/error/warning | Color + icon + text (1.4.1) |

## Use of color alone (1.4.1)

- Alert, Tag, form validation, etc. should pair **icons or labels** with color — not color alone.
- Thin borders (`colorBorder` / `colorBorderSecondary`) may lack non-text contrast on white; add **width, gutters, or light shadow** — do not rely on border hue alone for critical structure.

## Keyboard and focus (2.4.7)

- Default theme uses `lineWidthFocus: 2`, matching antd control focus rings. Avoid setting `lineWidthFocus` to `0` in business themes.
- Global styles add `:focus-visible` outlines for **native** focusable elements outside antd class names; antd components follow theme tokens.

## Touch targets (2.5.8)

- Icon-only buttons, in-table actions, etc. should be **≥ 24×24 CSS pixels** (including transparent padding / hit slop).
- `@oceanbase/ui` Dialog controls and FullscreenBox toggles meet minimum touch targets; compact Table / ProTable row actions may need extra `padding` or `Button` wrappers with `aria-label`.

## Page level

- Set `<html lang="...">` to match content (`zh-CN` / `en`).
- Use semantic landmarks (`main`, `nav`, `toolbar`, etc.); `@oceanbase/ui` BasicLayout, BatchOperationBar, FooterToolbar, NavMenu include relevant attributes.

## Related links

- <a href="/wcag-audit-report.html" target="_blank" rel="noopener noreferrer">WCAG audit report</a>
- [Design Token](design-token.md)
- [Theme](design-theme.md)
