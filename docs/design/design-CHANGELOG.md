---
title: Changelog
order: 6
group: General
---

`@oceanbase/design` strictly follows [Semantic Versioning 2.0.0](http://semver.org/).

---

## 1.4.2

`2026-08-31`

- ConfigProvider
  - 🆕 Added global `form.preserve` config to control whether unmounted field values are kept; the `Form` `preserve` prop takes precedence, and values are still dropped by default. [#1557](https://github.com/oceanbase/oceanbase-design/pull/1557)
- Form
  - 🐞 Forwarded `ref` to the underlying antd form instance, exposing the form instance and the native `<form>` element. [#1558](https://github.com/oceanbase/oceanbase-design/pull/1558)
  - 🐞 Kept antd's generic `Values` typing on `Form` and `Form.Item`, restoring type inference for typed forms. [#1560](https://github.com/oceanbase/oceanbase-design/pull/1560)

## 1.4.1

`2026-08-28`

- Drawer
  - 🐞 Fixed the header bottom divider overrunning the header content edges. [#1554](https://github.com/oceanbase/oceanbase-design/pull/1554)
- Table
  - 🐞 Fixed the selection column overlapping the first content column when `outerBordered` is combined with fixed columns and row selection. [#1555](https://github.com/oceanbase/oceanbase-design/pull/1555)

## 1.4.0

`2026-08-25`

- ConfigProvider
  - 🐞 Avoided the antd deprecation warning emitted when accessing `ConfigProvider.SizeContext`. [#1550](https://github.com/oceanbase/oceanbase-design/pull/1550)
- Notification
  - 🆕 Added `maxHeight` token (default `320px`); when content exceeds the limit it scrolls inside the content area while the close button and auto-close progress bar stay fixed at the card edge. [#1551](https://github.com/oceanbase/oceanbase-design/pull/1551)
  - 🐞 Fixed Notification styles (e.g. width, spacing) being overridden by antd's default styles. [#1552](https://github.com/oceanbase/oceanbase-design/pull/1552)

## 1.3.0

`2026-08-18`

- AI / Agent
  - 🐞 `ob-design -V` now reports the real installed package version instead of a stale `0.1.0-alpha.1`. [#1545](https://github.com/oceanbase/oceanbase-design/pull/1545)
- Form
  - 🆕 `scrollToFirstError` now also scrolls to the first error field when `validateFields()` fails directly (e.g. Modal `onOk`), enabled by default. [#1546](https://github.com/oceanbase/oceanbase-design/pull/1546)
- Notification
  - 🐞 Fixed countdown progress bar clipping to hug the card rounded corners. [#1547](https://github.com/oceanbase/oceanbase-design/pull/1547)
  - 🐞 Fixed error-details actions (expand / copy) not following the notification type color. [#1547](https://github.com/oceanbase/oceanbase-design/pull/1547)
  - 🐞 Fixed title font size and left spacing styles not taking effect. [#1547](https://github.com/oceanbase/oceanbase-design/pull/1547)

## 1.2.0

`2026-08-13`

- Chrome 83 Compatibility
  - 🆕 Added Flex component with `gap` fallback to `margin` on browsers without flex `gap` support (e.g. Chrome 83). [#1535](https://github.com/oceanbase/oceanbase-design/pull/1535)
  - 💄 Space fallback margins now honor custom `size` on browsers without flex `gap` support. [#1535](https://github.com/oceanbase/oceanbase-design/pull/1535)
  - 🐞 Fixed Table default pagination total text breaking on browsers below Chrome 85 (replaced `replaceAll` with `split`/`join`). [#1535](https://github.com/oceanbase/oceanbase-design/pull/1535)
  - 📖 Added low-version browser (Chrome 83) style compatibility demo and migration guidance in ConfigProvider. [#1535](https://github.com/oceanbase/oceanbase-design/pull/1535)
- Table
  - 🆕 Added `outerBordered` to show outer borders in addition to `innerBordered` column borders. [#1533](https://github.com/oceanbase/oceanbase-design/pull/1533)
  - 🆕 Aligned `column.tooltip` semantics with `Form.Item.tooltip` (text or config object). [#1532](https://github.com/oceanbase/oceanbase-design/pull/1532)
- Typography
  - 🆕 Added `block` prop to `Text` and `Link`. [#1525](https://github.com/oceanbase/oceanbase-design/pull/1525)
  - 🐞 Added missing units to editable padding and margins. [#1530](https://github.com/oceanbase/oceanbase-design/pull/1530)
- Tag
  - 🆕 Added lightweight CSS ellipsis mode to prevent content overflow. [#1529](https://github.com/oceanbase/oceanbase-design/pull/1529)
- Radio / Checkbox
  - 🐞 Restored baseline alignment of Radio and Checkbox wrappers. [#1531](https://github.com/oceanbase/oceanbase-design/pull/1531)
  - 🐞 Top-aligned Radio and Checkbox labels for multi-line content. [#1522](https://github.com/oceanbase/oceanbase-design/pull/1522)
- Input.Password
  - 🐞 Renders as a text input until user interaction to suppress the saved-password dropdown. [#1528](https://github.com/oceanbase/oceanbase-design/pull/1528)
- Upload
  - 🐞 Preserved Button icon color inside Upload. [#1523](https://github.com/oceanbase/oceanbase-design/pull/1523)

## 1.1.0

`2026-08-04`

- AI / Agent
  - 📖 Recommend global `ob-design` install for faster MCP startup. [#1499](https://github.com/oceanbase/oceanbase-design/pull/1499)
  - ⭐️ Agent skill renamed to `oceanbase-design` (`npx skills add oceanbase/oceanbase-design`). [#1500](https://github.com/oceanbase/oceanbase-design/pull/1500)
  - 🤖 `ob-design lint` validates `var(--ob-*)` in styles; `ob-design token` lists runtime CSS variables with `--json` and `--check`. [#1517](https://github.com/oceanbase/oceanbase-design/pull/1517)
- 🤖 Figma Code Connect mappings bridge design and frontend workflows. [#1502](https://github.com/oceanbase/oceanbase-design/pull/1502)
- 🌐 Bilingual documentation site with `/zh-CN` routing and homepage locale preference. [#1501](https://github.com/oceanbase/oceanbase-design/pull/1501)
- Theme
  - 🆕 Export `defaultTheme` and `compactTheme` locale typography presets. [#1516](https://github.com/oceanbase/oceanbase-design/pull/1516)
  - 🐞 Fixed custom `token.fontFamily` on English locales not being preserved. [#1516](https://github.com/oceanbase/oceanbase-design/pull/1516)
- Empty
  - 💄 Updated illustrations. [#1504](https://github.com/oceanbase/oceanbase-design/pull/1504)
  - 💄 Improved illustration sizing, description color, and title/description/footer spacing. [#1505](https://github.com/oceanbase/oceanbase-design/pull/1505)
  - 💄 Horizontal layout adapts on narrow containers (stacks at ≤560px, hides illustration at ≤400px). [#1505](https://github.com/oceanbase/oceanbase-design/pull/1505)
- Result
  - 💄 Updated illustrations; added presets such as `PRESENTED_IMAGE_NOT_FOUND`, `PRESENTED_IMAGE_NETWORK_ERROR`, and `PRESENTED_IMAGE_VERSION_UPDATE`. [#1504](https://github.com/oceanbase/oceanbase-design/pull/1504)
  - 🆕 `status` adds `normal` with its illustration. [#1504](https://github.com/oceanbase/oceanbase-design/pull/1504)
  - 💄 Aligned icon size and spacing with Empty. [#1505](https://github.com/oceanbase/oceanbase-design/pull/1505)
- Form
  - 🆕 Added `validateMode` and `reValidateMode`; ConfigProvider global defaults supported. [#1512](https://github.com/oceanbase/oceanbase-design/pull/1512)
  - 🆕 `Form.Item` explain shows built-in blur and hint feedback from child controls. [#1515](https://github.com/oceanbase/oceanbase-design/pull/1515)
  - 💄 Aligned explain/extra padding with control height. [#1514](https://github.com/oceanbase/oceanbase-design/pull/1514)
- Input
  - 💄 Updated `Input.Search` styling and interaction. [#1508](https://github.com/oceanbase/oceanbase-design/pull/1508)
- Message
  - 🔄 Message API remains compatible but displays via Notification (including `useMessage`). [#1507](https://github.com/oceanbase/oceanbase-design/pull/1507)
  - 📌 Message documented as deprecated; migrate to Notification. [#1507](https://github.com/oceanbase/oceanbase-design/pull/1507)
- Notification
  - 💄 Default bottom-left placement, fixed width 350px, linear icons with auto-close progress bar; links in title/description use type color. [#1506](https://github.com/oceanbase/oceanbase-design/pull/1506)
  - 💄 Aligned Notification styles with design tokens and fixed close icon alignment. [#1520](https://github.com/oceanbase/oceanbase-design/pull/1520)
  - 🆕 Added `notification.loading` for in-progress feedback. [#1507](https://github.com/oceanbase/oceanbase-design/pull/1507)
  - 🆕 Added `errorDetails` with Markdown copy support. [#1506](https://github.com/oceanbase/oceanbase-design/pull/1506)
  - 🆕 Added `dedupeKey` to deduplicate notifications. [#1506](https://github.com/oceanbase/oceanbase-design/pull/1506)
- Table
  - 🆕 Added `column.tooltip` for column header help. [#1509](https://github.com/oceanbase/oceanbase-design/pull/1509)

## 1.0.0

`2026-07-17`

- AI / Agent
  - 🆕 Added `@oceanbase/design-cli` CLI for component API lookup, docs, demos, page routing, and design constraint checks.
  - 🆕 Added MCP server (IDE key `oceanbase-design`) with `ob_info`, `ob_doc`, `ob_constraint`, `ob_route`, and more tools; configure only this MCP when writing OB business code.
  - 📖 Added `For Agents`, `design.md`, `LLMs.txt`, `MCP Server`, and `CLI` docs.

## 1.0.0-alpha.22

`2026-06-17`

- Theme
  - 🐞 Fixed ConfigProvider when cssVar is enabled, nested App with `component={false}` breaking CSS variable scope. [#1495](https://github.com/oceanbase/oceanbase-design/pull/1495)
- Spin
  - 🐞 Fixed Spin default Lottie indicator occasionally rendering at 360px original size. [#1494](https://github.com/oceanbase/oceanbase-design/pull/1494)

## 1.0.0-alpha.21

`2026-06-16`

- Theme
  - 🐞 Fixed extra global focus-visible outline on native HTML elements. [#1492](https://github.com/oceanbase/oceanbase-design/pull/1492)

## 1.0.0-alpha.20

`2026-06-14`

- Accessibility
  - 🌈 Theme: Improved keyboard focus visibility and hover contrast for Select, Slider, and more. [#1483](https://github.com/oceanbase/oceanbase-design/pull/1483)
  - 📖 Docs: Added [Accessibility guide](https://oceanbase-design-v1.vercel.app/docs/design-accessibility) and [WCAG audit report](https://oceanbase-design-v1.vercel.app/wcag-audit-report.html). [#1483](https://github.com/oceanbase/oceanbase-design/pull/1483)
  - ✅ Added automated accessibility tests. [#1483](https://github.com/oceanbase/oceanbase-design/pull/1483)
- Spin
  - 💄 Updated Spin loading animations (gray/color). [#1484](https://github.com/oceanbase/oceanbase-design/pull/1484)
- Skeleton
  - 💄 Improved Skeleton block skeleton border radius. [#1485](https://github.com/oceanbase/oceanbase-design/pull/1485)
- [Icon] ♿ Improved decorative vs semantic icon accessibility. [#1483](https://github.com/oceanbase/oceanbase-design/pull/1483)
- [Icon] 💄 Updated OceanBase brand logo. [#1486](https://github.com/oceanbase/oceanbase-design/pull/1486)

## 1.0.0-alpha.19

`2026-04-07`

- Theme
  - 🌈 Aligned with design-side [Design Token](https://design-token-system.vercel.app/), including missing tokens and corrected token values. [#1462](https://github.com/oceanbase/oceanbase-design/pull/1462)
  - 🐞 Fixed ConfigProvider theme CSS variable mode causing component styles to be lost. [#1463](https://github.com/oceanbase/oceanbase-design/pull/1463)
- Table
  - 🐞 Fixed Table first-column row merge `padding-left` misalignment in Card. [#1466](https://github.com/oceanbase/oceanbase-design/pull/1466)
  - 💄 Improved Table button and page-size select styles in Chinese locale. [#1467](https://github.com/oceanbase/oceanbase-design/pull/1467)

## 1.0.0-alpha.18

`2026-03-31`

- 🌈 Chinese, Japanese, and Korean body and table font size set to `14px`, distinct from English. [#1458](https://github.com/oceanbase/oceanbase-design/pull/1458)
- Filter
  - 🆕 Filter.Input Added `showSwitch` prop to control whether the switch is shown. [#1452](https://github.com/oceanbase/oceanbase-design/pull/1452) [@Richard-Zhang1019](https://github.com/Richard-Zhang1019)
  - 🆕 Added Filter.Slot component for custom dropdown panels. [#1446](https://github.com/oceanbase/oceanbase-design/pull/1446) [@Richard-Zhang1019](https://github.com/Richard-Zhang1019)
  - 🆕 Filter Added `allowClear` prop to control whether the clear icon is shown. [#1447](https://github.com/oceanbase/oceanbase-design/pull/1447) [@Richard-Zhang1019](https://github.com/Richard-Zhang1019)
  - ⭐️ Filter.Cascader pass-through props to Cascader.Panel. [#1447](https://github.com/oceanbase/oceanbase-design/pull/1447) [@Richard-Zhang1019](https://github.com/Richard-Zhang1019)
  - 💄 Improved Filter.Select dropdown panel width defaults to container width. [#1444](https://github.com/oceanbase/oceanbase-design/pull/1444) [@Richard-Zhang1019](https://github.com/Richard-Zhang1019)
  - 💄 Removed Filter.Cascader selected background color. [#1444](https://github.com/oceanbase/oceanbase-design/pull/1444) [@Richard-Zhang1019](https://github.com/Richard-Zhang1019)

## 1.0.0-alpha.17

`2026-03-03`

- 🤖 Added `oceanbase-design-usage` skills for style and component conventions; see [usage docs](https://oceanbase-design-v1.vercel.app/docs/design-skills). [#1439](https://github.com/oceanbase/oceanbase-design/pull/1439)
- 🐞 Fixed Alert `closeIcon`-only close icon styles not applying. [#1440](https://github.com/oceanbase/oceanbase-design/pull/1440)
- Filter
  - 💄 Improved Filter.Checkbox merging same-color options. [#1442](https://github.com/oceanbase/oceanbase-design/pull/1442) [@Richard-Zhang1019](https://github.com/Richard-Zhang1019)
  - 💄 Improved Filter.ResponsiveGroup last non-Filter item position in ResponsiveGroup. [#1438](https://github.com/oceanbase/oceanbase-design/pull/1438) [@Richard-Zhang1019](https://github.com/Richard-Zhang1019)

## 1.0.0-alpha.16

`2026-02-11`

- Filter
  - 🆕 Filter.Cascader Added `flat` prop for flat cascader display in 3+ level scenarios. [#1425](https://github.com/oceanbase/oceanbase-design/pull/1425) [@Richard-Zhang1019](https://github.com/Richard-Zhang1019)
  - 🐞 Fixed Filter `showCount` prop not working under ResponsiveGroup. [#1435](https://github.com/oceanbase/oceanbase-design/pull/1435) [@Richard-Zhang1019](https://github.com/Richard-Zhang1019)

## 1.0.0-alpha.15

`2026-02-05`

- 💄 Improved Button border and background on hover. [#1428](https://github.com/oceanbase/oceanbase-design/pull/1428)
- 🐞 Fixed Card nested Card styles incorrect due to parent Card styles. [#1430](https://github.com/oceanbase/oceanbase-design/pull/1430)
- Filter
  - 🔥 Filter Added `showSearch` prop for dropdown search. [#1424](https://github.com/oceanbase/oceanbase-design/pull/1424) [@Richard-Zhang1019](https://github.com/Richard-Zhang1019)
  - 🌐 Filter i18n support for copy. [#1432](https://github.com/oceanbase/oceanbase-design/pull/1432)
  - 💄 Improved Filter.Checkbox horizontal spacing of tag container in collapsed mode. [#1432](https://github.com/oceanbase/oceanbase-design/pull/1432)
  - 💄 Improved popover min-width `200px` => `120px`. [#1432](https://github.com/oceanbase/oceanbase-design/pull/1432)
- 💄 Improved Radio, InputNumber, Collapse, Tree, and TreeSelect icon colors. [#1429](https://github.com/oceanbase/oceanbase-design/pull/1429)
- Table
  - 🐞 Fixed Table pagination right margin not applying with Card. [#1427](https://github.com/oceanbase/oceanbase-design/pull/1427)
  - 💄 Improved Table border radius in Card without pagination or horizontal scroll. [#1431](https://github.com/oceanbase/oceanbase-design/pull/1431)

## 1.0.0-alpha.14

`2026-01-22`

- Theme
  - 🌈 Removed click wave effect on Button, Switch, Radio, and Checkbox. [#1408](https://github.com/oceanbase/oceanbase-design/pull/1408)
  - 🌈 Removed Input, InputNumber, Select, TreeSelect, DatePicker, TimePicker, and Cascader `activeShadow` active shadow. [#1409](https://github.com/oceanbase/oceanbase-design/pull/1409)
  - 🐞 Fixed incorrect `less` variables for some tokens. [#1416](https://github.com/oceanbase/oceanbase-design/pull/1416)
- Button
  - 💄 Improved Button loading state styles. [#1419](https://github.com/oceanbase/oceanbase-design/pull/1419)
  - 💄 Improved Button hover background for outlined and dashed types. [#1420](https://github.com/oceanbase/oceanbase-design/pull/1420)
- 💄 Improved Button, Collapse action, Tree and TreeSelect expand/collapse icon colors. [#1415](https://github.com/oceanbase/oceanbase-design/pull/1415)
- Filter
  - 🆕 Filter.ResponsiveGroup Added `showCount` prop to control whether count is shown. [#1402](https://github.com/oceanbase/oceanbase-design/pull/1402) [@Richard-Zhang1019](https://github.com/Richard-Zhang1019)
  - 🐞 Fixed incorrect collapsed panel font weight. [#1402](https://github.com/oceanbase/oceanbase-design/pull/1402) [@Richard-Zhang1019](https://github.com/Richard-Zhang1019)
  - 💄 Improved Filter border color aligned with Select. [#1414](https://github.com/oceanbase/oceanbase-design/pull/1414)
- 💄 Improved Input and Select disabled icon colors. [#1410](https://github.com/oceanbase/oceanbase-design/pull/1410)
- InputNumber
  - 💄 Improved InputNumber stepper button hover border color. [#1411](https://github.com/oceanbase/oceanbase-design/pull/1411)
  - 💄 Improved InputNumber addon font colors. [#1412](https://github.com/oceanbase/oceanbase-design/pull/1412)
- 💄 Fixed Modal doc icon not vertically centered. [#1405](https://github.com/oceanbase/oceanbase-design/pull/1405)
- 💄 Improved Radio.Button icon colors. [#1413](https://github.com/oceanbase/oceanbase-design/pull/1413)
- 💄 Updated Segmented track, item, and label colors. [#1417](https://github.com/oceanbase/oceanbase-design/pull/1417)
- 💄 Improved Select selected tag font color. [#1418](https://github.com/oceanbase/oceanbase-design/pull/1418)
- 💄 Transfer border radius set to `6px`. [#1404](https://github.com/oceanbase/oceanbase-design/pull/1404)
- Table [#1422](https://github.com/oceanbase/oceanbase-design/pull/1422)
  - 💄 Improved bordered Table border radius with row/col merge, virtual scroll, and grouped headers.
  - 💄 Improved grouped header vertical dividers; body keeps only last column divider.
  - 💄 Fixed fixed columns not fully covering columns behind in rounded Table.
  - 💄 Custom sort icons `<SwapRightOutlined />` and `<SwapLeftOutlined />`, highlighting different icons for ascend/descend.
  - 💄 Custom filter icon `<FilterOutlined />`.
  - 💄 Improved virtual scroll Table bottom radius and border.

## 1.0.0-alpha.13

`2026-01-05`

- 🛠 Fixed `use client;` directive order in ESM/CJS builds to avoid SSR errors. [#1380](https://github.com/oceanbase/oceanbase-design/pull/1380)
- Theme
  - 🌈 Updated Design Token `controlItemBgActiveHover` => `#f5f7fc` to improve Dropdown selected item hover background. [#1382](https://github.com/oceanbase/oceanbase-design/pull/1382)
  - 🌈 Improved `12px` font line height set to 20px for Breadcrumb, Descriptions, Empty, Form, Table, Typography, etc. [#1386](https://github.com/oceanbase/oceanbase-design/pull/1386)
- 💄 Improved Alert `mini` mode styles aligned with design spec. [#1388](https://github.com/oceanbase/oceanbase-design/pull/1388)
- Button
  - 💄 Improved `outlined` and `dashed` Button loading background. [#1400](https://github.com/oceanbase/oceanbase-design/pull/1400)
  - 💄 Improved small Button icon size. [#1400](https://github.com/oceanbase/oceanbase-design/pull/1400)
- 💄 DatePicker & TimePicker linear icon color set to gray8 `#5c6b8a`. [#1385](https://github.com/oceanbase/oceanbase-design/pull/1385)
- 🆕 Drawer Added `document` prop for doc link next to title. [#1390](https://github.com/oceanbase/oceanbase-design/pull/1390)
- 💄 Improved Dropdown.Button primary button hover divider style. [#1399](https://github.com/oceanbase/oceanbase-design/pull/1399)
- Filter
  - 🆕 Filter Added `showSuffixIcon` prop to control whether suffix icons (arrow and clear) are shown. [#1378](https://github.com/oceanbase/oceanbase-design/pull/1378) [@Richard-Zhang1019](https://github.com/Richard-Zhang1019)
  - 📢 FilterProvider props and useFilterContext return renamed `isWrapped` => `isCollapsed`. [#1379](https://github.com/oceanbase/oceanbase-design/pull/1379) [@Richard-Zhang1019](https://github.com/Richard-Zhang1019)
  - 💄 Improved collapsed container width calculation for better responsiveness. [#1379](https://github.com/oceanbase/oceanbase-design/pull/1379) [@Richard-Zhang1019](https://github.com/Richard-Zhang1019)
- 💄 Input, InputNumber, and Select focus border color set to blue4 `#0d6cf2`. [#1392](https://github.com/oceanbase/oceanbase-design/pull/1392)
- Modal
  - 🆕 Modal Added `document` prop for doc link next to title. [#1390](https://github.com/oceanbase/oceanbase-design/pull/1390)
  - 💄 Modal title icon size set to 16px instead of inheriting 18px title. [#1391](https://github.com/oceanbase/oceanbase-design/pull/1391)
- Radio
  - 🆕 Radio.Button Added `icon` prop. [#1398](https://github.com/oceanbase/oceanbase-design/pull/1398)
  - 💄 Radio.Button horizontal spacing set to 12px, aligned with Button. [#1398](https://github.com/oceanbase/oceanbase-design/pull/1398)
  - 💄 Improved Radio radio dot vertical alignment. [#1398](https://github.com/oceanbase/oceanbase-design/pull/1398)
  - 💄 Improved Radio selected item hover background. [#1393](https://github.com/oceanbase/oceanbase-design/pull/1393)
- 💄 Improved Select custom tag spacing. [#1381](https://github.com/oceanbase/oceanbase-design/pull/1381)
- 💄 Improved Switch unchecked hover background. [#1393](https://github.com/oceanbase/oceanbase-design/pull/1393)
- Table
  - 💄 Removed extra bottom border for paginated-less Table in bordered Card with zero body padding. [#1383](https://github.com/oceanbase/oceanbase-design/pull/1383)
  - 💄 Removed extra bottom border for empty Table in bordered Card with zero body padding. [#1383](https://github.com/oceanbase/oceanbase-design/pull/1383)

## 1.0.0-alpha.12

`2025-12-25`

- 🔥 Added Filter component with multiple filter types for tables and lists. [#1363](https://github.com/oceanbase/oceanbase-design/pull/1363) [@Richard-Zhang1019](https://github.com/Richard-Zhang1019)
- Theme
  - 🆕 `theme.useToken()` Added `obToken` return for consuming new Design Tokens in function components and hooks. [#1376](https://github.com/oceanbase/oceanbase-design/pull/1376)
  - 🆕 Added `obToken` static object for class components and non-React contexts. [#1376](https://github.com/oceanbase/oceanbase-design/pull/1376)
  - 📝 Added [Design Token usage docs](https://oceanbase-design-v1.vercel.app/docs/design-token) with full token list and usage. [#1376](https://github.com/oceanbase/oceanbase-design/pull/1376)
  - 📢 CSS variable renamed `--ob-spacing-negative-25` => `--ob-space-negative-25`. [#1376](https://github.com/oceanbase/oceanbase-design/pull/1376)
  - 🐞 Fixed CSS variable `--ob-font-weight-**` incorrect values; removed extra `px` unit. [#1375](https://github.com/oceanbase/oceanbase-design/pull/1375)

## 1.0.0-alpha.11

`2025-12-23`

- 🛠 Added `use client` directive to ESM/CJS build output for SSR. [#1362](https://github.com/oceanbase/oceanbase-design/pull/1362)
- Theme:
  - ⭐️ `fontWeight` less theme variables now reference `--ob-font-weight-**` CSS variables for dynamic values. [#1364](https://github.com/oceanbase/oceanbase-design/pull/1364)
  - 🌈 CSS variable token updates: [#1365](https://github.com/oceanbase/oceanbase-design/pull/1365)
    - `--ob-color-text-info` renamed to `--ob-color-text-description`.
    - `--ob-color-bg-active` renamed to `--ob-color-bg-selected`.
    - `--ob-color-border-hover` value changed from blue-4 to grey-7.
- Alert
  - 💄 Improved `mini` Alert height. [#1369](https://github.com/oceanbase/oceanbase-design/pull/1369)
  - 💄 Improved Alert vertical spacing when `extra` without `description`. [#1369](https://github.com/oceanbase/oceanbase-design/pull/1369)
  - 💄 Improved Alert content and action max width. [#1370](https://github.com/oceanbase/oceanbase-design/pull/1370)
- Badge
  - 🆕 Badge Added `progressProps` prop for progress info in icon mode `processing` state. [#1368](https://github.com/oceanbase/oceanbase-design/pull/1368)
  - 💄 Badge 1px padding around status dot for 10px total size. [#1368](https://github.com/oceanbase/oceanbase-design/pull/1368)
  - 💄 Updated Badge `processing` status icon. [#1368](https://github.com/oceanbase/oceanbase-design/pull/1368)
- 💄 Improved Card title line height set to 24px. [#1371](https://github.com/oceanbase/oceanbase-design/pull/1371)
- 💄 Improved Modal spacing when no title/footer. [#1372](https://github.com/oceanbase/oceanbase-design/pull/1372)
- 🐞 Fixed Table some styles not applying. [#1367](https://github.com/oceanbase/oceanbase-design/pull/1367)
- 💄 Improved capsule Tag height. [#1366](https://github.com/oceanbase/oceanbase-design/pull/1366)

## 1.0.0-alpha.10

`2025-12-19`

- Theme:
  - 🌈 Updated neutral/functional colors and hover/active/border/nav tokens; unified hover border to `gray7`. [#1345](https://github.com/oceanbase/oceanbase-design/pull/1345)
  - 🌈 Link hover/active color set to `blue5`. [#1345](https://github.com/oceanbase/oceanbase-design/pull/1345)
  - 🌈 Reduced `placeholder` font weight in English locale. [#1354](https://github.com/oceanbase/oceanbase-design/pull/1354)
  - 🌈 Added `[style*='font-size: 12px']` global style rule for automatic font weight in some cases. [#1346](https://github.com/oceanbase/oceanbase-design/pull/1346)
  - 🌈 Updated `lineHeight` line-height Design Tokens aligned with font sizes. [#1347](https://github.com/oceanbase/oceanbase-design/pull/1347)
  - 🐞 Fixed incorrect `colorIcon` variable values in less theme files. [#1345](https://github.com/oceanbase/oceanbase-design/pull/1345)
- 💄 Alert status icon size set to 14px. [#1351](https://github.com/oceanbase/oceanbase-design/pull/1351)
- 💄 Badge removed `processing` dot animation. [#1359](https://github.com/oceanbase/oceanbase-design/pull/1359)
- Button
  - 💄 Outlined & dashed button hover border set to `gray7`. [#1345](https://github.com/oceanbase/oceanbase-design/pull/1345)
  - 💄 Outlined & dashed preset-color buttons: hover fill with inverted text.
- 🆕 Card Added `document` prop for document link. [#1352](https://github.com/oceanbase/oceanbase-design/pull/1352)
- 💄 Checkbox / Radio hover border color set to `gray7`. [#1345](https://github.com/oceanbase/oceanbase-design/pull/1345)
- 💄 Improved Descriptions left-aligned content spacing and title size at all sizes. [#1358](https://github.com/oceanbase/oceanbase-design/pull/1358)
- 💄 Improved Dropdown.Button divider style when primary button. [#1355](https://github.com/oceanbase/oceanbase-design/pull/1355)
- 💄 Reduced Empty description font weight in English locale. [#1349](https://github.com/oceanbase/oceanbase-design/pull/1349)
- Input & Select [#1350](https://github.com/oceanbase/oceanbase-design/pull/1350)
  - 💄 Improved Input prefix/suffix font size and color.
  - 💄 Improved Input clear icon color.
  - 💄 Improved Select clear icon color.
- 💄 Input, InputNumber, Select, DatePicker hover/active border set to `gray7`. [#1345](https://github.com/oceanbase/oceanbase-design/pull/1345)
- 💄 Improved message border radius. [#1344](https://github.com/oceanbase/oceanbase-design/pull/1344)
- 💄 Improved notification background and border radius. [#1344](https://github.com/oceanbase/oceanbase-design/pull/1344)
- Table
  - 💄 Buttons under Table default to small size styles. [#1338](https://github.com/oceanbase/oceanbase-design/pull/1338)
  - 💄 Improved Table spacing in divider-less Card and ProCard. [#1339](https://github.com/oceanbase/oceanbase-design/pull/1339)
  - 💄 Improved Table pagination styles, including font size, height, and spacing. [#1357](https://github.com/oceanbase/oceanbase-design/pull/1357)
- 💄 Tabs labels deepen font weight on `hover`. [#1356](https://github.com/oceanbase/oceanbase-design/pull/1356)
- Tag
  - 🆕 Tag Added `critical` status color for severe scenarios such as critical alerts. [#1348](https://github.com/oceanbase/oceanbase-design/pull/1348)
  - 💄 Improved Tag font weight. [#1347](https://github.com/oceanbase/oceanbase-design/pull/1347)
  - 💄 Improved capsule Tag font weight, font color, and border color. [#1347](https://github.com/oceanbase/oceanbase-design/pull/1347)
- 🆕 Typography.Text Added `caption` prop for auxiliary description scenarios. [#1346](https://github.com/oceanbase/oceanbase-design/pull/1346)
- 🛠 Refactored style generation following antd: migrated `genComponentStyleHook` to `genStyleHooks` for better flexibility and consistency. [#1343](https://github.com/oceanbase/oceanbase-design/pull/1343)

## 1.0.0-alpha.9

`2025-12-11`

- 🔥 CSS variables:
  - 🆕 Added `--ob-*` prefixed CSS variable system with concise, semantic Design Tokens for business consumption and Figma token-mapped styles. [#1330](https://github.com/oceanbase/oceanbase-design/pull/1330)
  - 📝 Added CSS variable docs with usage guide and full variable list. [#1330](https://github.com/oceanbase/oceanbase-design/pull/1330)
- 💄 Button content and icon spacing changed `8` => `4`. [#1319](https://github.com/oceanbase/oceanbase-design/pull/1319)
- Card
  - 🆕 Card Added `subTitle` prop for subtitle. [#1327](https://github.com/oceanbase/oceanbase-design/pull/1327)
  - 🆕 Card Added `gray` prop for gray background mode. [#1320](https://github.com/oceanbase/oceanbase-design/pull/1320)
  - 💄 Improved Card expand/collapse interaction to avoid height jitter. [#1320](https://github.com/oceanbase/oceanbase-design/pull/1320)
  - 💄 Card `tabs` size aligned with card size. [#1320](https://github.com/oceanbase/oceanbase-design/pull/1320)
- 🐞 Fixed Checkbox checkbox not vertically aligned. [#1316](https://github.com/oceanbase/oceanbase-design/pull/1316)
- Descriptions
  - 🆕 Descriptions Added `collapsible` prop for content expand/collapse. [#1331](https://github.com/oceanbase/oceanbase-design/pull/1331)
  - 🆕 Descriptions Added `contentAlign` prop for left-aligned content. [#1332](https://github.com/oceanbase/oceanbase-design/pull/1332)
  - 💄 Improved Descriptions title area bottom spacing at all sizes. [#1332](https://github.com/oceanbase/oceanbase-design/pull/1332)
- Drawer
  - 🐞 Fixed Drawer content area unexpected horizontal scroll. [#1329](https://github.com/oceanbase/oceanbase-design/pull/1329)
  - 💄 Drawer title icon size set to `16px` instead of inheriting 18px title. [#1329](https://github.com/oceanbase/oceanbase-design/pull/1329)
  - 💄 Updated Drawer content area scroll `box-shadow`. [#1329](https://github.com/oceanbase/oceanbase-design/pull/1329)
- 🐞 Fixed Slider left and right labels not aligned. [#1328](https://github.com/oceanbase/oceanbase-design/pull/1328)
- Table
  - ⭐️ Table enables horizontal scroll by default when no ellipsis columns. [#1318](https://github.com/oceanbase/oceanbase-design/pull/1318)
  - 🐞 Fixed Table nested sub-table style alignment under fixed columns. [#1334](https://github.com/oceanbase/oceanbase-design/pull/1334)
  - 💄 Improved tree Table expand icon spacing. [#1317](https://github.com/oceanbase/oceanbase-design/pull/1317)
- 💄 Improved horizontal Tabs label inner spacing. [#1321](https://github.com/oceanbase/oceanbase-design/pull/1321)
- 💄 Improved Tag line height aligned with design spec. [#1314](https://github.com/oceanbase/oceanbase-design/pull/1314)

## 1.0.0-alpha.8

`2025-12-08`

- Theme:
  - 🐞 Fixed token `fontWeightWeak` incorrect value in English locale. [#1308](https://github.com/oceanbase/oceanbase-design/pull/1308)
  - 🐞 Fixed `Inter-Medium` and `Inter-SemiBold` remote font URLs incorrect. [#1309](https://github.com/oceanbase/oceanbase-design/pull/1309)
- 🐞 Fixed Form.Item `renderProps` not working. [#1310](https://github.com/oceanbase/oceanbase-design/pull/1310)

## 1.0.0-alpha.7

`2025-12-04`

- 📝 Updated docs for using with Next.js. [#1291](https://github.com/oceanbase/oceanbase-design/pull/1291)
- 🌈 Globally updated English font weights, including:
  - Updated `Inter` font files, style definitions, and weights. [#1304](https://github.com/oceanbase/oceanbase-design/pull/1304)
  - Changed auxiliary description weight token `fontWeightWeak` `300 => 400`. [#1304](https://github.com/oceanbase/oceanbase-design/pull/1304)
  - Adapted font weights at component level in Table, Descriptions, PageContainer, ProTable, etc. [#1304](https://github.com/oceanbase/oceanbase-design/pull/1304)
- 🌈 `<a>` links with `href` or `data-aspm-param^="obcloud_openLink=` show underline on hover. [#1297](https://github.com/oceanbase/oceanbase-design/pull/1297)
- 🐞 Fixed Alert icon display incorrect when `type` is not set. [#1296](https://github.com/oceanbase/oceanbase-design/pull/1296)
- 💄 Improved Form.Item validation message font size and spacing. [#1293](https://github.com/oceanbase/oceanbase-design/pull/1293)
- Input
  - 💄 Improved Input suffix font size. [#1294](https://github.com/oceanbase/oceanbase-design/pull/1294)
  - 💄 Input `showCount` default format changed `count / maxLength` => `count/maxLength`. [#1294](https://github.com/oceanbase/oceanbase-design/pull/1294)
- 💄 Improved InputNumber addon font size and color. [#1295](https://github.com/oceanbase/oceanbase-design/pull/1295)

## 1.0.0-alpha.6

`2025-12-01`

- 🛠 Refactored global styles: migrated `global.css` to CSS-in-JS injection for better flexibility and consistency, and support in non-Webpack frameworks (e.g. Next.js, Vite). [#1283](https://github.com/oceanbase/oceanbase-design/pull/1283)
- 📝 Added Cascader and Tooltip custom offset examples. [#1287](https://github.com/oceanbase/oceanbase-design/pull/1287)
- 🐞 Fixed Alert `action` area position incorrect. [#1284](https://github.com/oceanbase/oceanbase-design/pull/1284)
- 💄 Improved dark and compact themes. [#1285](https://github.com/oceanbase/oceanbase-design/pull/1285)
- 💄 Removed Button `box-shadow`. [#1288](https://github.com/oceanbase/oceanbase-design/pull/1288)
- 💄 Improved DatePicker, Dropdown, Popover, Select, Tooltip, and Menu popup border radius. [#1289](https://github.com/oceanbase/oceanbase-design/pull/1289)
- 💄 Improved large Input and InputNumber border radius. [#1289](https://github.com/oceanbase/oceanbase-design/pull/1289)

## 1.0.0-alpha.5

`2025-11-28`

- Theme:
  - 🆕 Added CSS variable mode support via ConfigProvider `theme.cssVar`. [#1280](https://github.com/oceanbase/oceanbase-design/pull/1280)
  - 🛠 Refactored Design Token style computation using dedicated functions (cal, unit, etc.) for CSS variable mode. [#1281](https://github.com/oceanbase/oceanbase-design/pull/1281)
  - 📝 Added CSS variable mode usage docs and examples. [#1280](https://github.com/oceanbase/oceanbase-design/pull/1280)

## 1.0.0-alpha.4

`2025-11-27`

- 🌐 Site supports Chinese/English language switching. [#1265](https://github.com/oceanbase/oceanbase-design/pull/1265)
- Theme
  - 🌈 Updated Design Token tertiary fill `colorFillTertiary` and quaternary fill `colorFillQuaternary` values. [#1273](https://github.com/oceanbase/oceanbase-design/pull/1273)
  - 🌈 Updated Design Token layout background `colorBgLayout` value. [#1275](https://github.com/oceanbase/oceanbase-design/pull/1275)
  - 💄 Improved font weight styles using Design Token `fontWeight` and `fontWeightStrong` instead of hardcoded values. [#1265](https://github.com/oceanbase/oceanbase-design/pull/1265)
- Alert
  - 🔥 New Alert component with updated colors, fonts, spacing, etc. [#1266](https://github.com/oceanbase/oceanbase-design/pull/1266)
  - 🆕 Added `mini` prop for ultra-light info mode: more compact, borderless, width fits content. [#1266](https://github.com/oceanbase/oceanbase-design/pull/1266)
  - 🗑️ Removed `colored` prop support. [#1266](https://github.com/oceanbase/oceanbase-design/pull/1266)
  - 💄 Moved action buttons from top-right to below content. [#1266](https://github.com/oceanbase/oceanbase-design/pull/1266)
  - 💄 Alert links default to underline; link color matches message. [#1266](https://github.com/oceanbase/oceanbase-design/pull/1266)
- Badge
  - 💄 Badge status dot size changed to `8px`. [#1267](https://github.com/oceanbase/oceanbase-design/pull/1267)
  - 💄 Improved Badge `default` status dot color. [#1267](https://github.com/oceanbase/oceanbase-design/pull/1267)
- Card
  - 🔥 New Card component with updated styles per design spec; adjusted title, content, and tabs spacing. [#1270](https://github.com/oceanbase/oceanbase-design/pull/1270)
  - 🆕 Added `collapsible` prop for content expand/collapse. [#1270](https://github.com/oceanbase/oceanbase-design/pull/1270)
- 💄 Collapse updated expand icon color. [#1274](https://github.com/oceanbase/oceanbase-design/pull/1274)
- 🔥 New Drawer component with updated styles: title divider, title font size `16px => 18px`, content spacing, etc. [#1269](https://github.com/oceanbase/oceanbase-design/pull/1269)
- Form
  - 🆕 Form.Item Added `description` prop for description before form control. [#1272](https://github.com/oceanbase/oceanbase-design/pull/1272)
  - 💄 Form.Item `extra` font size and spacing updated per design spec. [#1272](https://github.com/oceanbase/oceanbase-design/pull/1272)
- Modal
  - 🔥 New Modal component with updated styles: title divider, title font size `16px => 18px`, improved content spacing, etc. [#1268](https://github.com/oceanbase/oceanbase-design/pull/1268)
  - 🐞 Fixed Modal static method styles not applying without `<Modal />`; styles must be registered in global config. [#1271](https://github.com/oceanbase/oceanbase-design/pull/1271)
  - 💄 Modal static methods use linear icons instead of filled icons. [#1268](https://github.com/oceanbase/oceanbase-design/pull/1268)
- 💄 Table uses `CaretRightOutlined` as expand icon. [#1274](https://github.com/oceanbase/oceanbase-design/pull/1274)
- 💄 Improved Tabs vertical tab divider spacing. [#1263](https://github.com/oceanbase/oceanbase-design/pull/1263)
- Tag
  - 🆕 Tag Added `pill` prop for capsule tag style. [#1264](https://github.com/oceanbase/oceanbase-design/pull/1264)
  - 💄 Non-capsule Tag font weight bolded. [#1264](https://github.com/oceanbase/oceanbase-design/pull/1264)

## 1.0.0-alpha.3

`2025-10-23`

- Design Token
  - 🌈 Updated functional and neutral color related Design Tokens. [#1244](https://github.com/oceanbase/oceanbase-design/pull/1244)
  - 🌈 Updated `lineHeight` and `controlHeightSM` related Design Tokens. [#1245](https://github.com/oceanbase/oceanbase-design/pull/1245)
  - 🌈 Updated controlHeightSM control height `20` => `24`. [#1249](https://github.com/oceanbase/oceanbase-design/pull/1249)
  - 🌈 Updated Menu `groupTitleColor` group title color `#8592AD` => `#5C6B8A`. [#1223](https://github.com/oceanbase/oceanbase-design/pull/1223)
  - 🌈 Updated `fontWeight` and `fontWeightStrong` Design Tokens with locale-specific values for Chinese/English. [#1246](https://github.com/oceanbase/oceanbase-design/pull/1246)
  - 🌈 Added custom Design Tokens `fontWeightWeak`, `borderRadiusMD`, and colorFuchsia related tokens. [#1247](https://github.com/oceanbase/oceanbase-design/pull/1247)
- 🔥 New Tag component with improved colors, spacing, icons, etc. [#1251](https://github.com/oceanbase/oceanbase-design/pull/1251)
- 💄 Improved multi-select tag styles in Select, TreeSelect, and Cascader. [#1251](https://github.com/oceanbase/oceanbase-design/pull/1251)
- Button
  - 💄 Improved Button inline spacing and border radius. [#1248](https://github.com/oceanbase/oceanbase-design/pull/1248)
  - 💄 Small Button font size `13` => `12`. [#1250](https://github.com/oceanbase/oceanbase-design/pull/1250)
- 💄 Bordered Card nested border radius decrements progressively. [#1235](https://github.com/oceanbase/oceanbase-design/pull/1235)
- 💄 Improved Drawer loading spacing styles. [#1238](https://github.com/oceanbase/oceanbase-design/pull/1238)
- 🐞 Fixed duplicate class names in App, Drawer, Empty, and Result components. [#1254](https://github.com/oceanbase/oceanbase-design/pull/1254)

## 1.0.0-alpha.2

`2025-09-24`

- Design Token
  - 🌈 Updated `fontSizeLG` and `fontSizeHeading` font sizes. [#1200](https://github.com/oceanbase/oceanbase-design/pull/1200)
  - 🌈 Updated `controlHeight` control height `32` => `28`. [#1201](https://github.com/oceanbase/oceanbase-design/pull/1201)
  - 🌈 Updated `borderRadiusLG` large border radius `6` => `8`. [#1206](https://github.com/oceanbase/oceanbase-design/pull/1206)
  - 🌈 Updated Table `cellPaddingBlock` cell vertical padding. [#1208](https://github.com/oceanbase/oceanbase-design/pull/1208)
- Badge
  - 🐞 Fixed Badge status text font size not inheriting parent, for easier composition. [#1214](https://github.com/oceanbase/oceanbase-design/pull/1214)
  - 💄 Adjusted Badge `processing` state color and dot size. [#1205](https://github.com/oceanbase/oceanbase-design/pull/1205)
- Card
  - 💄 Card `tabs` default size changed to `middle`. [#1216](https://github.com/oceanbase/oceanbase-design/pull/1216)
  - 💄 Improved Card nested border radius; inner card radius decrements progressively. [#1211](https://github.com/oceanbase/oceanbase-design/pull/1211)
- 💄 Improved Descriptions `label` font color and vertical layout spacing. [#1204](https://github.com/oceanbase/oceanbase-design/pull/1204)
- 💄 Skeleton block border radius `2` => `4`. [#1212](https://github.com/oceanbase/oceanbase-design/pull/1212)

## 1.0.0-alpha.1

`2025-09-10`

- 🌈 Updated theme, text, and fill color related Design Tokens. [#1186](https://github.com/oceanbase/oceanbase-design/pull/1186)
- 🌈 [Icon] Updated two-tone icon theme color `#006AFF` => `#0D6CF2`. [#1191](https://github.com/oceanbase/oceanbase-design/pull/1191)

## 1.0.0-alpha.0

`2025-09-08`

- 🌈 Updated theme, font size, and border radius related Design Tokens. [#1174](https://github.com/oceanbase/oceanbase-design/pull/1174)
- 💄 Removed Button custom styles including shadow, border, and background. [#1173](https://github.com/oceanbase/oceanbase-design/pull/1173)
- 💄 Removed Empty and Result large size styles. [#1175](https://github.com/oceanbase/oceanbase-design/pull/1175)
- 💄 Updated Table styles: removed zebra striping, added row dividers, adjusted cell spacing, etc. [#1176](https://github.com/oceanbase/oceanbase-design/pull/1176)
- 💄 Adjusted Tabs font color and ink bar length. [#1177](https://github.com/oceanbase/oceanbase-design/pull/1177)

## 0.4.22

`2026-08-13`

- Flex
  - 🆕 Added Flex component, fully inheriting antd Flex capabilities and API with seamless switching. [#1535](https://github.com/oceanbase/oceanbase-design/pull/1535)
  - 💄 Low-version browser compatibility: falls back to a `margin` solution on browsers without flex `gap` support (e.g. Chrome 83). [#1535](https://github.com/oceanbase/oceanbase-design/pull/1535)
- 💄 Space spacing fallback also applies to custom `size` on browsers without flex `gap` support. [#1535](https://github.com/oceanbase/oceanbase-design/pull/1535)
- 🐞 Fixed Table default pagination total text rendering abnormally on low-version browsers (below Chrome 85) due to unsupported `replaceAll`. [#1535](https://github.com/oceanbase/oceanbase-design/pull/1535)
- 📖 Added low-version browser (Chrome 83) style compatibility demo and integration guidance in ConfigProvider. [#1535](https://github.com/oceanbase/oceanbase-design/pull/1535)

## 0.4.21

`2026-06-14`

- Spin
  - 💄 Updated Spin loading animation (gray/color). [#1484](https://github.com/oceanbase/oceanbase-design/pull/1484)
  - 🐞 Fixed Spin background being opaque in dark theme. [#1484](https://github.com/oceanbase/oceanbase-design/pull/1484)

## 0.4.20

`2026-01-05`

- 🐞 Fixed Tag ellipsis and closable style issues when content overflows. [#1394](https://github.com/oceanbase/oceanbase-design/pull/1394)

## 0.4.19

`2025-12-04`

- 🌐 Improved Japanese (ja-JP) locale copy. [#1299](https://github.com/oceanbase/oceanbase-design/pull/1299)
- Segmented
  - 🐞 Fixed Segmented style issues with `icon`. [#1300](https://github.com/oceanbase/oceanbase-design/pull/1300)
  - ⭐️ Segmented enables `ellipsis` and tooltip by default. [#1300](https://github.com/oceanbase/oceanbase-design/pull/1300)
- 💄 Improved Typography position jitter when switching to edit mode. [#1301](https://github.com/oceanbase/oceanbase-design/pull/1301)

## 0.4.18

`2025-11-24`

- 🌐 Added Japanese (ja-JP) internationalization support. [#1258](https://github.com/oceanbase/oceanbase-design/pull/1258)

## 0.4.17

`2025-09-24`

- Tabs
  - 🆕 Tabs Added `divider` prop for divider line. [#1179](https://github.com/oceanbase/oceanbase-design/pull/1179)
  - 🐞 Fixed Tabs `ref` not working. [#1178](https://github.com/oceanbase/oceanbase-design/pull/1178)
- 🐞 Fixed Typography `Text` and `Paragraph` class name styles (line height, font color, size) not applying. [#1180](https://github.com/oceanbase/oceanbase-design/pull/1180)
- TypeScript
  - 🤖 Exported FormItem type for antd-compatible type usage. [#1171](https://github.com/oceanbase/oceanbase-design/pull/1171)

## 0.4.16

`2025-08-29`

- ⭐️ Optimized custom font load order to `system fonts -> self-hosted fonts -> online fonts` to avoid network requests. [#1158](https://github.com/oceanbase/oceanbase-design/pull/1158)
- 🐞 Fixed Descriptions.Item copy tooltip position incorrect when child is Typography. [#1159](https://github.com/oceanbase/oceanbase-design/pull/1159)
- 🐞 Fixed `sideEffects` config for tree shaking. [#1161](https://github.com/oceanbase/oceanbase-design/pull/1161)

## 0.4.15

`2025-08-21`

- 🐞 Fixed Form.Item `action` prop not working on antd 5.27.0. [#1141](https://github.com/oceanbase/oceanbase-design/pull/1141)

## 0.4.14

`2025-08-07`

- 🆕 Modal Added `extra` prop for extra bottom content. [#1130](https://github.com/oceanbase/oceanbase-design/pull/1121)
- 🐞 Fixed Tag `font-size` style not applying. [#1121](https://github.com/oceanbase/oceanbase-design/pull/1121)

## 0.4.13

`2025-07-27`

- 🆕 Segmented `options` Added `badge` prop for badge after tab label. [#1100](https://github.com/oceanbase/oceanbase-design/pull/1100) [@wzc520pyfm](https://github.com/wzc520pyfm)
- 🆕 Tabs `options` Added `badge` prop for badge after tab label. Original `tag` prop deprecated. [#1110](https://github.com/oceanbase/oceanbase-design/pull/1110) [@wzc520pyfm](https://github.com/wzc520pyfm)
- 💄 Improved Slider `marks` styles when min equals max. [#1105](https://github.com/oceanbase/oceanbase-design/pull/1105)

## 0.4.12

`2025-07-10`

- 🐞 Fixed incorrect `boxShadow` related Design Tokens. [#1096](https://github.com/oceanbase/oceanbase-design/pull/1096)
- 💄 Updated boxShadowTertiary token value. [#1097](https://github.com/oceanbase/oceanbase-design/pull/1097)

## 0.4.11

`2025-07-01`

- 🐞 Fixed Form.Item `layout` prop not working. [#1085](https://github.com/oceanbase/oceanbase-design/pull/1085)
- 🐞 Fixed Table sorted column header divider missing. [#1076](https://github.com/oceanbase/oceanbase-design/pull/1076) [@wzc520pyfm](https://github.com/wzc520pyfm)

## 0.4.10

`2025-04-18`

- 📖 Added AutoComplete examples and docs. [#1012](https://github.com/oceanbase/oceanbase-design/pull/1012)
- 📖 Added Anchor docs and examples. [#1013](https://github.com/oceanbase/oceanbase-design/pull/1013)
- 📖 Added Steps docs and examples. [#1014](https://github.com/oceanbase/oceanbase-design/pull/1014)
- 📖 Added Menu docs and examples. [#1015](https://github.com/oceanbase/oceanbase-design/pull/1015)
- 📖 Added Pagination docs and examples. [#1016](https://github.com/oceanbase/oceanbase-design/pull/1016)
- 📖 Added Upload docs and examples. [#1017](https://github.com/oceanbase/oceanbase-design/pull/1017)
- 📖 Added Tree docs and examples. [#1018](https://github.com/oceanbase/oceanbase-design/pull/1018)
- 📖 Added TreeSelect docs and examples. [#1019](https://github.com/oceanbase/oceanbase-design/pull/1019)
- 📖 [Icon] Show more icons. [#1024](https://github.com/oceanbase/oceanbase-design/pull/1024)
- 🆕 Form.Item Added `action` prop for action items. [#1028](https://github.com/oceanbase/oceanbase-design/pull/1028)
- Table
  - 🆕 Table Added `innerBordered` prop for inner borders. [#1036](https://github.com/oceanbase/oceanbase-design/pull/1036)
  - 💄 Improved Table styles in zero horizontal padding Card: first column aligned with title, last column with actions, pagination side spacing. [#1030](https://github.com/oceanbase/oceanbase-design/pull/1030)
  - 💄 Bordered Table header changed to gray background. [#1035](https://github.com/oceanbase/oceanbase-design/pull/1035)
- 🐞 Fixed multiple Empty instances causing svg id conflict and illustration display issues. [#1027](https://github.com/oceanbase/oceanbase-design/pull/1027)
- 🐞 Fixed editable Typography clipped and not vertically centered in Descriptions. [#1033](https://github.com/oceanbase/oceanbase-design/pull/1033)
- 💄 Improved Descriptions vertical layout spacing; multi-column and single-column vertical spacing differ. [#1031](https://github.com/oceanbase/oceanbase-design/pull/1031) [#1032](https://github.com/oceanbase/oceanbase-design/pull/1032)

## 0.4.9

`2025-02-20`

- 📖 Table design docs added `highlight emphasis` guideline. [#986](https://github.com/oceanbase/oceanbase-design/pull/986)
- 📖 Typography added copyable and edit-in-Modal examples. [#985](https://github.com/oceanbase/oceanbase-design/pull/985)
- ⭐️ ConfigProvider removed `injectStaticFunction` prop; auto-detects whether to inject static methods that consume global config. [#981](https://github.com/oceanbase/oceanbase-design/pull/981)
- Table
  - 🐞 Fixed Table expandable & fixed column spacing. [#982](https://github.com/oceanbase/oceanbase-design/pull/982)
  - 🐞 Fixed Table expandable & scrollable should not show zebra stripes. [#983](https://github.com/oceanbase/oceanbase-design/pull/983)
- 💄 Alert uses linear icons aligned with latest design spec. [#987](https://github.com/oceanbase/oceanbase-design/pull/987)
- 💄 Dropdown.Button default icon changed to `DownOutlined`. [#984](https://github.com/oceanbase/oceanbase-design/pull/984)

## 0.4.8

`2025-02-13`

- 📖 Improved design foundations, principles, and component design docs content and styles. [#966](https://github.com/oceanbase/oceanbase-design/pull/966)
- 🐞 Fixed missing `@ctrl/tinycolor` dependency. [#973](https://github.com/oceanbase/oceanbase-design/pull/973)
- Tooltip:
  - 🔨 Removed NaN warning in Tooltip `mouseFollow` mode console. [#968](https://github.com/oceanbase/oceanbase-design/pull/968)
  - 🔨 Inlined [react-sticky-mouse-tooltip](https://github.com/marlo22/react-sticky-mouse-tooltip) into Tooltip to avoid console warnings/errors pointing to `MouseTooltip.jsx` and interfering with debugging. [#969](https://github.com/oceanbase/oceanbase-design/pull/969)

## 0.4.7

`2025-02-05`

- 🔥 Added 11 design guideline docs: 5 design principles and 6 design foundations. [#954](https://github.com/oceanbase/oceanbase-design/pull/954)
- 🔥 Added 6 component guideline docs: Alert, Button, Tabs, Table, Modal, and DateRanger. [#955](https://github.com/oceanbase/oceanbase-design/pull/955)
- 📖 Improved site mobile styles and browsing experience. [#956](https://github.com/oceanbase/oceanbase-design/pull/956)
- 💄 Removed optional styles by default when Form.Item wraps Switch. [#949](https://github.com/oceanbase/oceanbase-design/pull/949)
- 💄 Improved Table empty state height: large/middle/small are 360px, 260px, and 160px. [#947](https://github.com/oceanbase/oceanbase-design/pull/947)

## 0.4.6

`2025-01-15`

- 🌈 Custom Tabs `horizontalItemGutter` token for global tab gap. [#935](https://github.com/oceanbase/oceanbase-design/pull/935)
- 🆕 ConfigProvider Added `card.divided` prop to configure Card divider display. [#939](https://github.com/oceanbase/oceanbase-design/pull/939)
- Table
  - 🐞 Fixed middle/small expandable Table cell height incorrect. [#924](https://github.com/oceanbase/oceanbase-design/pull/924)
  - 💄 Table row style set to `cursor: pointer` when row click expands. [#925](https://github.com/oceanbase/oceanbase-design/pull/925)
  - 💄 Improved Table spacing in divider-less Card and ProCard. [#933](https://github.com/oceanbase/oceanbase-design/pull/933)
  - 💄 Improved Table styles in zero-padding ProCard: first column aligned with title, last column with actions, pagination side spacing. [#923](https://github.com/oceanbase/oceanbase-design/pull/923)
  - 💄 Improved Table top border radius. [#941](https://github.com/oceanbase/oceanbase-design/pull/941)

## 0.4.5

`2024-12-30`

- 🐞 Fixed Table bottom border radius and column left padding incorrect. [#910](https://github.com/oceanbase/oceanbase-design/pull/910)

## 0.4.4

`2024-12-16`

- 🐞 Fixed antd reset styles import path `antd/dist/reset.css` => `~antd/dist/reset.css` for Umi 3 and Bigfish 3 resolution. [#894](https://github.com/oceanbase/oceanbase-design/pull/894)

## 0.4.3

`2024-12-14`

- 📖 Fixed demo expand all code not working. [#888](https://github.com/oceanbase/oceanbase-design/pull/888)
- 📖 Fixed some components not showing demo action bar. [#888](https://github.com/oceanbase/oceanbase-design/pull/888)
- ⚡ Set `sideEffects` to support tree shaking. [#886](https://github.com/oceanbase/oceanbase-design/pull/886)
- Collapse [#882](https://github.com/oceanbase/oceanbase-design/pull/882)
  - 📖 Added Collapse docs and examples.
  - 💄 Collapse default expand icon changed to solid arrow.
  - 💄 Softened Collapse border color to `#E2E8F3`.
- Table
  - 🐞 Fixed normal Table cells showing bottom border. [#879](https://github.com/oceanbase/oceanbase-design/pull/879)
  - 💄 Improved Table bordered bottom border radius. [#880](https://github.com/oceanbase/oceanbase-design/pull/880)
  - 💄 Improved Table empty state height in Popover and Tooltip. [#891](https://github.com/oceanbase/oceanbase-design/pull/891)

## 0.4.2

`2024-11-29`

- 📖 Added DatePicker docs and examples. [#852](https://github.com/oceanbase/oceanbase-design/pull/852)
- 📖 Added TimePicker docs and examples. [#853](https://github.com/oceanbase/oceanbase-design/pull/853)
- 📖 Added Popconfirm docs and examples. [#851](https://github.com/oceanbase/oceanbase-design/pull/851)
- 📖 Added Popover docs and examples. [#850](https://github.com/oceanbase/oceanbase-design/pull/850)
- 📖 Added Progress docs and examples. [#834](https://github.com/oceanbase/oceanbase-design/pull/834)
- 🌈 Design Token lineWidthFocus set to 0 to remove component focus line styles. [#841](https://github.com/oceanbase/oceanbase-design/pull/841)
- ⭐️ Prefer loading `Inter`, `Consolas`, and `Helvetica Neue` from system fonts. [#861](https://github.com/oceanbase/oceanbase-design/pull/861)
- 🐞 Fixed Slider end label alignment not applying in some scenarios. [#832](https://github.com/oceanbase/oceanbase-design/pull/832)
- 💄 Global scrollbar color changed to `#e2e8f3`. [#846](https://github.com/oceanbase/oceanbase-design/pull/846)
- Empty
  - 💄 Empty main title font size changed from 24px to 20px. [#845](https://github.com/oceanbase/oceanbase-design/pull/845)
  - 💄 Improved Empty long content styles: description max width 600px, steps max width 1000px. [#844](https://github.com/oceanbase/oceanbase-design/pull/844)
- Result
  - 💄 Result main title font size changed from 24px to 20px. [#845](https://github.com/oceanbase/oceanbase-design/pull/845)
  - 💄 Improved Result long content styles: subtitle max width 600px, content max width 1000px. [#842](https://github.com/oceanbase/oceanbase-design/pull/842)
- 💄 Improved Switch unchecked background to distinguish from disabled state. [#833](https://github.com/oceanbase/oceanbase-design/pull/833)
- Table
  - 💄 Improved Table nested sub-table and expandable content styles per latest design spec. [#865](https://github.com/oceanbase/oceanbase-design/pull/865)
  - 💄 Table virtual scrollbar color changed to `#e2e8f3` to match global scrollbar. [#864](https://github.com/oceanbase/oceanbase-design/pull/864)
- Tooltip
  - 🐞 Fixed Tooltip with `mouseFollow` not inheriting `.ant-tooltip` class and styles. [#849](https://github.com/oceanbase/oceanbase-design/pull/849)
  - 💄 Improved Tooltip closable icon color. [#848](https://github.com/oceanbase/oceanbase-design/pull/848)
  - 💄 Tooltip max width 300px, max height 250px; overflow wraps horizontally and scrolls vertically. [#847](https://github.com/oceanbase/oceanbase-design/pull/847)
- Typography
  - 💄 Typography edit mode text trigger shows hover border to indicate click-to-edit. [#839](https://github.com/oceanbase/oceanbase-design/pull/839)
  - 💄 Improved Typography edit mode styles to avoid jitter between read-only and edit modes. [#839](https://github.com/oceanbase/oceanbase-design/pull/839)
- 🔨 Added `reset.css` to `dist` output to align with antd. [#855](https://github.com/oceanbase/oceanbase-design/pull/855)
- 🔨 Fixed CodeSandbox compile errors preventing preview. [#855](https://github.com/oceanbase/oceanbase-design/pull/855)

## 0.4.1

`2024-11-11`

- 📖 Added Checkbox docs and examples. [#812](https://github.com/oceanbase/oceanbase-design/pull/812)
- 📖 Added Dropdown docs and examples. [#803](https://github.com/oceanbase/oceanbase-design/pull/803)
- 📖 Added Slider docs and examples. [#815](https://github.com/oceanbase/oceanbase-design/pull/815)
- ⭐️ ConfigProvider Added `appProps` prop to control whether embedded App renders components so wrapped elements inherit `.ant-app` styles. [#824](https://github.com/oceanbase/oceanbase-design/pull/824)
- 🐞 Removed custom Design Tokens `fontSizeHeading` and `lineHeightHeading`; fixed incorrect heading sizes. [#813](https://github.com/oceanbase/oceanbase-design/pull/813)
- 🐞 Fixed Dropdown.Button divider overflow and background color when primary button. [#803](https://github.com/oceanbase/oceanbase-design/pull/803)
- 🐞 [Icon] Removed custom UserOutlined icon to avoid conflict with `@ant-design/icons` and display issues in Login. [#802](https://github.com/oceanbase/oceanbase-design/pull/802)
- 💄 Softened Breadcrumb last item font color to `#5c6b8a`. [#816](https://github.com/oceanbase/oceanbase-design/pull/816)
- Card
  - 💄 Improved small Card with tabs header spacing. [#821](https://github.com/oceanbase/oceanbase-design/pull/821)
  - 💄 Improved Card bottom spacing without divider. [#819](https://github.com/oceanbase/oceanbase-design/pull/819)
- 💄 Improved Checkbox long content vertical alignment from center to top. [#812](https://github.com/oceanbase/oceanbase-design/pull/812)
- 💄 Updated Empty default illustration. [#814](https://github.com/oceanbase/oceanbase-design/pull/814)
- 💄 Improved Radio long content vertical alignment from center to top. [#811](https://github.com/oceanbase/oceanbase-design/pull/811)
- 💄 Improved Slider track fill color and end label alignment. [#815](https://github.com/oceanbase/oceanbase-design/pull/815)
- Table
  - 💄 Improved Table bottom divider logic; should show even without pagination. [#822](https://github.com/oceanbase/oceanbase-design/pull/822)
  - 💄 Non-nested Table empty state min height set to `360px`. [#818](https://github.com/oceanbase/oceanbase-design/pull/818)

## 0.4.0

`2024-10-09`

- 📖 Added Skeleton docs and examples. [#724](https://github.com/oceanbase/oceanbase-design/pull/724)
- 📖 Added Divider examples and docs. [#723](https://github.com/oceanbase/oceanbase-design/pull/723)
- Next.js support:
  - 📖 Added @oceanbase/design [usage docs](https://design.oceanbase.com/docs/design-use-with-nextjs) and [project template](https://stackblitz.com/edit/nextjs-oceanbase-design) for Next.js. [#785](https://github.com/oceanbase/oceanbase-design/pull/785)
  - 🔨 lottie-web lazy-loaded to support Next.js SSR. [#751](https://github.com/oceanbase/oceanbase-design/pull/751)
  - 🔨 All components explicitly import React for Next.js builds. [#783](https://github.com/oceanbase/oceanbase-design/pull/783)
- Design Token updates:
  - 🌈 Updated `fontSizeHeading` and `lineHeightHeading`; reduced heading font size and line height. [#727](https://github.com/oceanbase/oceanbase-design/pull/727)
  - 🌈 Updated Tag `defaultColor` to `#5c6b8a` to soften font color. [#786](https://github.com/oceanbase/oceanbase-design/pull/786)
  - 🌈 Updated Tooltip `colorBgSpotlight` to `#ffffff`, `colorTextLightSolid` to `#132039`; default background white, text black. [#653](https://github.com/oceanbase/oceanbase-design/pull/653)
- Font updates:
  - ⭐️ Updated default, English, and code fonts with automatic locale-based switching. [#726](https://github.com/oceanbase/oceanbase-design/pull/726)
  - ⭐️ Bundled `Inter`, `Consolas`, and `Helvetica Neue` fonts for consistent rendering. [#732](https://github.com/oceanbase/oceanbase-design/pull/732)
- Icon updates:
  - 🔥 Added 36 outline icons, 37 filled icons, and 76 colored icons. [#733](https://github.com/oceanbase/oceanbase-design/pull/733)
- 🆕 Tabs `items` and `TabPane` Added `divider` prop for tab dividers. [#659](https://github.com/oceanbase/oceanbase-design/pull/659)
- 🐞 `@theme` less variables changed to lazy load; fixed inability to override. [#725](https://github.com/oceanbase/oceanbase-design/pull/725)

## 0.3.8

`2024-09-23`

- 🔥 Added `Design` and `Blog` modules with 10 design guideline docs and 2 blog posts. [#682](https://github.com/oceanbase/oceanbase-design/pull/682)
- 📖 Theme docs added Design Token list for developer reference. [#701](https://github.com/oceanbase/oceanbase-design/pull/701)
- 💄 Upgraded [@oceanbase/aliyun-theme](https://www.npmjs.com/package/@oceanbase/aliyun-theme) and updated Aliyun theme less styles. [#668](https://github.com/oceanbase/oceanbase-design/pull/668)
- 🐞 Fixed Space spacing jitter in newer browsers. [#722](https://github.com/oceanbase/oceanbase-design/pull/722)
- 🐞 Fixed Tag ellipsis style issues when both `icon` and `ellipsis` are set. [#687](https://github.com/oceanbase/oceanbase-design/pull/687) [@linhf123](https://github.com/linhf123)

## 0.3.7

`2024-07-26`

- 📖 Added Button, Input, and Switch examples and docs. [#640](https://github.com/oceanbase/oceanbase-design/pull/640) [#657](https://github.com/oceanbase/oceanbase-design/pull/657) [#658](https://github.com/oceanbase/oceanbase-design/pull/658)
- 📖 Added Aliyun and less theme usage docs; improved dark theme usage docs. [#644](https://github.com/oceanbase/oceanbase-design/pull/644)
- ⭐️ Added Aliyun theme less variable file for use in less. [#643](https://github.com/oceanbase/oceanbase-design/pull/643)
- 💄 Updated Design Token `colorBgBase` color `#132039` => `#000000`. [#642](https://github.com/oceanbase/oceanbase-design/pull/642)
- 💄 Improved Table header font color aligned with design spec. [#641](https://github.com/oceanbase/oceanbase-design/pull/641)

## 0.3.6

`2024-07-10`

- 🐞 Fixed Table empty state illustration missing. [#630](https://github.com/oceanbase/oceanbase-design/pull/630)

## 0.3.5

`2024-06-27`

- 🆕 ConfigProvider Added `theme.isAliyun` prop to enable Aliyun theme. [#602](https://github.com/oceanbase/oceanbase-design/pull/602)
- 🐞 Fixed Modal, message, notification static functions not triggering. [#606](https://github.com/oceanbase/oceanbase-design/pull/606)
- Table
  - 🐞 Fixed Table batch action bar not linked to `rowSelection`. [#591](https://github.com/oceanbase/oceanbase-design/pull/591)
  - 🐞 Fixed Table batch action bar i18n not working. [#591](https://github.com/oceanbase/oceanbase-design/pull/591)
  - 💄 Improved Table display in zero-padding Card: first column aligned with title, last column with actions, pagination side spacing. [#618](https://github.com/oceanbase/oceanbase-design/pull/618)
- 💄 Improved Alert spacing aligned with design spec. [#615](https://github.com/oceanbase/oceanbase-design/pull/615)
- Empty
  - ⭐️ Empty Added PRESENTED_IMAGE_DATABASE illustration for database instance empty states. [#607](https://github.com/oceanbase/oceanbase-design/pull/607)
  - 💄 Updated Empty PRESENTED_IMAGE_COLORED illustration. [#607](https://github.com/oceanbase/oceanbase-design/pull/607)
  - 💄 Improved Empty action button styles with larger line height and border radius. [#608](https://github.com/oceanbase/oceanbase-design/pull/608)
- 💄 Improved Result styles: bold title, larger action button line height and border radius. [#609](https://github.com/oceanbase/oceanbase-design/pull/609)
- 💄 Improved Select loader color for better visibility. [#616](https://github.com/oceanbase/oceanbase-design/pull/616)

## 0.3.4

`2024-05-11`

- 💄 Improved Empty step tip background color aligned with design spec. [#586](https://github.com/oceanbase/oceanbase-design/pull/587)
- 💄 Breadcrumb font size changed to 12px aligned with design spec. [#587](https://github.com/oceanbase/oceanbase-design/pull/587)

## 0.3.3

`2024-04-25`

- ConfigProvider
  - 🐞 Fixed ConfigProvider `theme.customFont` with nested usage causing incorrect `fontFamily`. [#572](https://github.com/oceanbase/oceanbase-design/pull/572)
  - 🐞 Fixed ConfigProvider custom `theme.token.fontFamily` not applying. [#573](https://github.com/oceanbase/oceanbase-design/pull/573)
  - 🐞 Fixed ConfigProvider multiple usage injecting StaticFunction multiple times, breaking Modal, message, and notification static methods. [#574](https://github.com/oceanbase/oceanbase-design/pull/574)
- 🐞 Fixed theme Token `boxShadowSecondary` incorrect via static token object and less variables. [#569](https://github.com/oceanbase/oceanbase-design/pull/569)
- 💄 Improved Radio.Button selected disabled background to distinguish from font color. [#570](https://github.com/oceanbase/oceanbase-design/pull/570)

## 0.3.2

`2024-04-12`

- 📢 Input `placeholder` defaults to `Please enter`. [#540](https://github.com/oceanbase/oceanbase-design/pull/540)
- 📢 InputNumber `placeholder` defaults to `Please enter`. [#548](https://github.com/oceanbase/oceanbase-design/pull/548)
- 📢 Select `placeholder` defaults to `Please select`. [#546](https://github.com/oceanbase/oceanbase-design/pull/546)
- 📢 TreeSelect `placeholder` defaults to `Please select`. [#547](https://github.com/oceanbase/oceanbase-design/pull/547)
- ConfigProvider
  - 🆕 ConfigProvider Added `locale.Input.placeholder` prop for Input default placeholder. [#540](https://github.com/oceanbase/oceanbase-design/pull/540)
  - 🆕 ConfigProvider Added `locale.global.inputPlaceholder` and `locale.InputNumber.placeholder` props for InputNumber default placeholder. [#548](https://github.com/oceanbase/oceanbase-design/pull/548)
  - 🆕 ConfigProvider Added `locale.Select.placeholder` prop for Select default placeholder. [#546](https://github.com/oceanbase/oceanbase-design/pull/546)
  - 🆕 ConfigProvider Added `locale.TreeSelect.placeholder` prop for TreeSelect default `placeholder`. [#547](https://github.com/oceanbase/oceanbase-design/pull/547)
- 🐞 Fixed theme Token `boxShadow` and `boxShadowSecondary` incorrect via static token object and less variables. [#552](https://github.com/oceanbase/oceanbase-design/pull/552)
- 💄 Improved Select, TreeSelect, and Cascader multi-select background and border colors aligned with design spec. [#553](https://github.com/oceanbase/oceanbase-design/pull/553)
- 💄 Table pagination defaults to `{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '50', '100'], showTotal: total => \`Total ${total} items\` }`.

## 0.3.1

`2024-03-29`

- ConfigProvider
  - 🆕 Added `theme.customFont` prop to enable `Source Sans Pro` custom font for online apps and English locale only. [#536](https://github.com/oceanbase/oceanbase-design/pull/536)
  - 🐞 ConfigProvider `form.requiredMark` default changed to `optional` to fix optional styles not enabled by default in ProForm. [#535](https://github.com/oceanbase/oceanbase-design/pull/535)
- Empty
  - ⭐️ Empty Added `PRESENTED_IMAGE_GUIDE` built-in image for feature activation and guide scenarios. [#532](https://github.com/oceanbase/oceanbase-design/pull/532)
  - 🐞 Fixed Empty `style` prop not applying. [#529](https://github.com/oceanbase/oceanbase-design/pull/529)
- 📢 Form `preserve` prop default changed to `false`. [#534](https://github.com/oceanbase/oceanbase-design/pull/534)
- Modal
  - 📢 Modal `destroyOnClose` prop default changed to `true`. [#530](https://github.com/oceanbase/oceanbase-design/pull/530)
  - 🐞 Fixed Modal `footer` as `false` not removing footer DOM. [#531](https://github.com/oceanbase/oceanbase-design/pull/531)

## 0.3.0

`2024-03-22`

- ⭐️ Removed all component reset styles to avoid font size/color override when wrapped by Tooltip, Popover, Space, Dropdown, etc. [#450](https://github.com/oceanbase/oceanbase-design/pull/450)
- ⭐️ Component style load order set to -900 so custom styles take priority over antd. [#464](https://github.com/oceanbase/oceanbase-design/pull/464)
- 🌈 Updated neutral color palette including Design Tokens and less theme variables. [#484](https://github.com/oceanbase/oceanbase-design/pull/484)
- 🔥 New Empty component [#465](https://github.com/oceanbase/oceanbase-design/pull/465)
  - 💄 Custom illustrations, theme, and styles per OceanBase Design spec.
  - 🆕 Added `title` prop for empty state title.
  - 🆕 Added `steps` prop for step tips.
  - 🆕 Added `layout` prop for empty state layout; default `vertical`.
  - 🆕 Customize global component empty states via ConfigProvider `renderEmpty`. [#467](https://github.com/oceanbase/oceanbase-design/pull/467)
- 🔥 New Result component [#476](https://github.com/oceanbase/oceanbase-design/pull/476)
  - 💄 Custom illustrations, theme, and styles per OceanBase Design spec.
  - 🆕 `status` prop added `processing` enum for in-progress state.
- Spin
  - 💄 Updated Spin loading animations (gray and color). [#512](https://github.com/oceanbase/oceanbase-design/pull/512)
  - 💄 Spin default indicator changed from color animation to gray animation. [#491](https://github.com/oceanbase/oceanbase-design/pull/491)
- Table
  - 🐞 Fixed Table loading animation not horizontally and vertically centered. [#518](https://github.com/oceanbase/oceanbase-design/pull/518)
  - 💄 Table hides empty state when `loading`. [#518](https://github.com/oceanbase/oceanbase-design/pull/518)
- 💄 Improved Badge default state color; updated default and warning state icons. [#500](https://github.com/oceanbase/oceanbase-design/pull/500)
- [Icon] 🆕 Added `EllipsisCircleFilled` icon. [#499](https://github.com/oceanbase/oceanbase-design/pull/499)

## 0.2.37

`2024-01-30`

- 🆕 Added `injectStaticFunction` prop to configure whether message, notification, and Modal static methods consume global config; enabled by default. [#446](https://github.com/oceanbase/oceanbase-design/pull/446)
- 🐞 Fixed Typography style priority so font and line height inherit parent by default for easier composition. [#428](https://github.com/oceanbase/oceanbase-design/pull/428) [@wdyea-ya](https://github.com/wdyea-ya)
- 🐞 Fixed Table selected row and `hover` row background color inconsistency. [#455](https://github.com/oceanbase/oceanbase-design/pull/455)

## 0.2.36

`2024-01-19`

- 💄 ConfigProvider embedded App component no longer creates DOM nodes, avoiding extra DOM layer affecting child styles. [#431](https://github.com/oceanbase/oceanbase-design/pull/431)

## 0.2.35

`2024-01-18`

- 🆕 ConfigProvider Added `table.selectionColumnWidth` prop for table selection column width. [#421](https://github.com/oceanbase/oceanbase-design/pull/421)
- Table
  - 🐞 Fixed Table duplicate bottom border when expandable. [#420](https://github.com/oceanbase/oceanbase-design/pull/420)
  - 💄 Improved Table display in zero-padding Card: first column aligned with title, last column with actions, pagination side spacing. [#422](https://github.com/oceanbase/oceanbase-design/pull/422)
  - 💄 Reduced Table cell vertical padding aligned with design spec. [#425](https://github.com/oceanbase/oceanbase-design/pull/425)
- 💄 Modal removed max height limit; content scroll controlled by parent when height exceeds. [#411](https://github.com/oceanbase/oceanbase-design/pull/411)

## 0.2.34

`2024-01-12`

- Drawer
  - 🆕 Added `footerExtra` prop for extra drawer footer content; default footer only. [#408](https://github.com/oceanbase/oceanbase-design/pull/408)
  - 📢 Adjusted footer DOM structure; renamed `.ant-drawer-footer-content` to `.ant-drawer-footer-container`. [#408](https://github.com/oceanbase/oceanbase-design/pull/408)
- 🐞 Fixed Tooltip still showing when `title` is empty. [#405](https://github.com/oceanbase/oceanbase-design/pull/405) [@linhf123](https://github.com/linhf123)

## 0.2.33

`2023-12-28`

- 🐞 ConfigProvider `hideOnSinglePage` default changed to `false` to avoid issues from globally hiding pagination. [#388](https://github.com/oceanbase/oceanbase-design/pull/388)
- 🐞 Fixed Table pagination hidden when single page with batch actions or `pageSize` change. [#389](https://github.com/oceanbase/oceanbase-design/pull/389)
- 🐞 Fixed List pagination hidden when single page with `pageSize` change. [#390](https://github.com/oceanbase/oceanbase-design/pull/390)
- 💄 Updated Design Tokens; added `fontHeight`, `fontHeightLG`, and `fontHeightSM` less variables. [#381](https://github.com/oceanbase/oceanbase-design/pull/381)

## 0.2.32

`2023-12-14`

- 🔥 Space and Grid spacing styles compatible with browsers below Chrome 84. [#344](https://github.com/oceanbase/oceanbase-design/pull/344) [@wdyea-ya](https://github.com/wdyea-ya)
- 🌈 Updated default theme functional color palette including Design Tokens and less variables. [#354](https://github.com/oceanbase/oceanbase-design/pull/354)
- Tag
  - 🆕 Tag Added `ellipsis` prop for overflow ellipsis and Tooltip. [#361](https://github.com/oceanbase/oceanbase-design/pull/361)
  - 🐞 Fixed Tag incorrect font size. [#360](https://github.com/oceanbase/oceanbase-design/pull/360)
- 🐞 Fixed Select multi-select mode missing border styles at `large` & `small` sizes. [#332](https://github.com/oceanbase/oceanbase-design/pull/332) [@wdyea-ya](https://github.com/wdyea-ya)
- 💄 Improved Button styles: updated primary gradient and removed `box-shadow`. [#352](https://github.com/oceanbase/oceanbase-design/pull/352)
- TypeScript
  - 🤖 Exported SpaceProps, SpaceSize, ColProps, ColSize, and RowProps types. [#344](https://github.com/oceanbase/oceanbase-design/pull/344)

## 0.2.31

`2023-12-08`

- 🆕 ConfigProvider Added `styleProviderProps` prop, typically for StyleProvider `hashPriority` and `transformers` for style downgrade to support browsers below Chrome 88. [#343](https://github.com/oceanbase/oceanbase-design/pull/343)
- 🐞 Fixed Drawer separator shadow not updating in real time with content and window size. [#337](https://github.com/oceanbase/oceanbase-design/pull/337)
- 🐞 Fixed Form `hideRequiredMark` priority lower than ConfigProvider `form.requiredMark`. [#349](https://github.com/oceanbase/oceanbase-design/pull/349)

## 0.2.30

`2023-11-30`

- 🌈 Updated functional color palette including Design Tokens and less variables.
- 🔥 Implemented new Drawer styles and interaction. [#319](https://github.com/oceanbase/oceanbase-design/pull/319)
  - Improved header, content, and footer spacing.
  - Footer sticks to bottom when content exceeds drawer height; follows content when shorter.
  - Dynamic header/footer shadow on content scroll for separation effect.
  - Primary button in footer actions aligned left.
- 📢 Form enables `requiredMark: optional` by default. [#312](https://github.com/oceanbase/oceanbase-design/pull/312)
- 📢 Table and List enable `pagination.hideOnSinglePage` by default; pagination hidden on single page. [#330](https://github.com/oceanbase/oceanbase-design/pull/330)
- 🆕 ConfigProvider supports global `hideOnSinglePage` config. [#330](https://github.com/oceanbase/oceanbase-design/pull/330)
- 🆕 Segmented `options` Added `ellipsis` prop for overflow ellipsis and Tooltip. [#227](https://github.com/oceanbase/oceanbase-design/pull/227) [@TianWuwt](https://github.com/TianWuwt)
- Descriptions
  - 🆕 Descriptions `items` Added `contentProps` prop for ellipsis, edit, copy, etc.; borderless mode only. [#329](https://github.com/oceanbase/oceanbase-design/pull/329)
  - 💄 Descriptions vertical layout removes `colon` by default. [#328](https://github.com/oceanbase/oceanbase-design/pull/328)
- Badge
  - 🐞 Fixed status icon spacing not applying. [#300](https://github.com/oceanbase/oceanbase-design/pull/300)
  - 💄 Status text default font color inherits parent instead of always `token.colorText` for easier composition. [#322](https://github.com/oceanbase/oceanbase-design/pull/322)
- Card
  - 🐞 Fixed Card divider possibly covered by content area. [#326](https://github.com/oceanbase/oceanbase-design/pull/326)
  - 💄 Removed borderless inner card shadow; improved nested card styles. [#325](https://github.com/oceanbase/oceanbase-design/pull/325)
- 💄 Typography.Text and Typography.Paragraph default font color and line height inherit parent instead of always `token.colorText` and `token.lineHeight` for easier composition. [#321](https://github.com/oceanbase/oceanbase-design/pull/321)
- TypeScript
  - 🤖 Exported AlertProps, CardProps, ConfigProviderProps, DescriptionsItemProps, FormItemProps, ModalProps, ModalProgressProps, DrawerProps, TableProps, TabsProps, TagProps, TooltipProps, SpinProps, BadgeProps, and other extended component TS types. [#311](https://github.com/oceanbase/oceanbase-design/pull/311)

## 0.2.29

`2023-11-17`

- 🐞 Fixed Drawer some styles not applying. [#298](https://github.com/oceanbase/oceanbase-design/pull/298)

## 0.2.28

`2023-11-14`

- 🌈 Added theme preview and editor for theme debugging and preview. [#287](https://github.com/oceanbase/oceanbase-design/pull/287)
- 💄 Improved Drawer title, content, and footer styles per design spec. [#283](https://github.com/oceanbase/oceanbase-design/pull/283) [@Vanleehao](https://github.com/Vanleehao)

## 0.2.27

`2023-11-09`

- 🌈 Updated neutral color palette including Design Tokens and less theme variables. [#272](https://github.com/oceanbase/oceanbase-design/pull/272)
- 🔥 Drawer [#228](https://github.com/oceanbase/oceanbase-design/pull/228) [@Vanleehao](https://github.com/Vanleehao)
  - 🌈 Custom theme and styles per OceanBase Design spec.
  - 🆕 Added `footer` prop for drawer footer content; defaults to `Cancel` and `OK` buttons.
  - 🆕 Added `onOk` and `onCancel` props for `Cancel` and `OK` button callbacks.
  - 🆕 Added `cancelText` and `okText` props for `Cancel` and `OK` button text.
  - 🆕 Added `okButtonProps` prop for `OK` button props.
  - 🆕 Added `confirmLoading` prop for `OK` button loading state.
- 🆕 Globally set Spin indicator to OceanBase loading animation. [#273](https://github.com/oceanbase/oceanbase-design/pull/273)
- 🆕 Badge, Button, Card, Select, Table, Tag, and Tooltip support `ref` forwarding. [#259](https://github.com/oceanbase/oceanbase-design/pull/259) [@linhf123](https://github.com/linhf123)
- 💄 Improved Modal confirm dialog content area styles. [#275](https://github.com/oceanbase/oceanbase-design/pull/275)

## 0.2.26

`2023-11-03`

## 0.2.25

`2023-10-31`

- 🔥 Added Tag component with softened borders, auto ellipsis for long content via `ellipsis` prop. [#113](https://github.com/oceanbase/oceanbase-design/pull/113) [@wdyea-ya](https://github.com/wdyea-ya)
- 🐞 Fixed Tooltip not supporting `visible` prop for controlled show/hide. [#231](https://github.com/oceanbase/oceanbase-design/pull/231)

## 0.2.24

`2023-10-26`

- Table
  - 🐞 Fixed Table crash and white screen when `columns` is empty. [#206](https://github.com/oceanbase/oceanbase-design/pull/206)
  - 💄 Improved bordered Table styles; removed extra bottom border. [#207](https://github.com/oceanbase/oceanbase-design/pull/207)
