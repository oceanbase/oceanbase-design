---
title: Changelog
order: 12
group: Codemod
---

`@oceanbase/codemod` strictly follows [Semantic Versioning 2.0.0](http://semver.org/).

---

## 1.0.0-alpha.10

`2025-12-19`

- 🆕 Added `sass-to-cssvar` migration to convert SASS/SCSS variables to CSS variables. See [docs](https://github.com/oceanbase/oceanbase-design/blob/v1/packages/codemod/README.md#sass-to-cssvar). [#1342](https://github.com/oceanbase/oceanbase-design/pull/1342)
  - Converts SASS variables like `$colorPrimary` to CSS variables like `var(--ant-color-primary)`.
  - `--prefix` option for CSS variable prefix (default `ant`).
  - Supports `.sass` and `.scss` files.
  - Only converts tokens aligned with `@oceanbase/design` theme.
- ⭐️ Enhanced `less-to-cssvar` migration. [#1341](https://github.com/oceanbase/oceanbase-design/pull/1341)
  - Added `--rename-to` (`css`, `scss`, or `false` to keep `.less`), replacing `--rename-to-css` and `--to-scss`.
  - When `--rename-to=false`, `--add-module` defaults to `false` unless explicitly set.
- ⭐️ `disablePrettier` is now enabled by default (no Prettier formatting by default).

## 1.0.0-alpha.9

`2025-12-11`

- 🔥 Added `less-to-cssvar` migration to convert Less variables to CSS variables. See [docs](https://github.com/oceanbase/oceanbase-design/blob/v1/packages/codemod/README.md#less-to-cssvar). [#1333](https://github.com/oceanbase/oceanbase-design/pull/1333)
  - Converts Less variables like `@colorPrimary` to `var(--ant-color-primary)` and removes `@import '~@oceanbase/design/es/theme/index.less';`.
  - `--prefix` option for CSS variable prefix (default `ant`).
  - Renames `.less` to `.css` by default; auto-detects import style and adds `.module` suffix when needed. Disable with `--rename-to-css=false`.
  - Converts Less `//` comments to CSS `/* */`.
  - Updates style file references in JS/TS files.
- ⭐️ More color values auto-rewritten to Design Tokens. [#1335](https://github.com/oceanbase/oceanbase-design/pull/1335)
  - `#1843ff` => `colorInfo`
  - `#597ef7` => `colorInfo`
  - `#91a9f8` => `colorInfoBg`
  - `#ffa940` => `colorWarning`
  - `#fed59c` => `colorWarningBg`
  - `#eb4444` => `colorError`
  - `#ced5e3` => `@colorTextPlaceholder`
- 🆕 `style-to-token` and `less-to-token` now rewrite `fontWeight` and `borderRadius`. [#1325](https://github.com/oceanbase/oceanbase-design/pull/1325)

## 1.0.0-alpha.6

`2025-12-01`

- 🐞 Fixed `style-to-token` not handling template literals correctly. [#1286](https://github.com/oceanbase/oceanbase-design/pull/1286)
- 🐞 Fixed `#5c6b8a` token mapping: `colorTextTertiary` → `colorTextSecondary` to match theme. [#1286](https://github.com/oceanbase/oceanbase-design/pull/1286)
- 🛠 Improved package.json reading robustness; better deprecated package uninstall and logging. [#1286](https://github.com/oceanbase/oceanbase-design/pull/1286)

## 1.0.0-alpha.3

`2025-10-23`

- 🐞 Fixed `less-to-token` not handling compound values. [#1233](https://github.com/oceanbase/oceanbase-design/pull/1233)
- 🐞 Fixed `less-to-token` not importing token object for nested objects. [#1236](https://github.com/oceanbase/oceanbase-design/pull/1236)
- 🐞 Fixed `style-to-token` not handling compound values. [#1234](https://github.com/oceanbase/oceanbase-design/pull/1234)

## 1.0.0-alpha.2

`2025-09-24`

- ⭐️ Auto-rewrite `#f93939` => `colorError` and `#f8fafe` => `colorBgLayout`. [#1217](https://github.com/oceanbase/oceanbase-design/pull/1217)
- 🐞 Fixed `less-to-token` possibly importing theme file twice. [#1199](https://github.com/oceanbase/oceanbase-design/pull/1199)

## 1.0.0-alpha.1

`2025-09-10`

- style-to-token
  - ⭐️ Improved rewrite results for anonymous function components. [#1188](https://github.com/oceanbase/oceanbase-design/pull/1188)
  - ⭐️ More `fontSize` rewrite scenarios. [#1190](https://github.com/oceanbase/oceanbase-design/pull/1190)
  - 🐞 Fixed incorrect rewrite for single functions. [#1189](https://github.com/oceanbase/oceanbase-design/pull/1189)
- 🐞 Fixed incorrect target version for dependency upgrades. [#1192](https://github.com/oceanbase/oceanbase-design/pull/1192)

## 1.0.0-alpha.0

`2025-09-08`

- 🆕 `style-to-token` supports rewriting to `fontSize` tokens. [#1181](https://github.com/oceanbase/oceanbase-design/pull/1181)
- 🆕 `less-to-token` supports rewriting to `fontSize` tokens. [#1182](https://github.com/oceanbase/oceanbase-design/pull/1182)
- 🆕 Less theme `token` values now include unit suffix, e.g. `@fontSize: 14;` => `@fontSize: 14px;`. [#1183](https://github.com/oceanbase/oceanbase-design/pull/1183)

## 0.4.14

`2025-08-07`

- 🆕 `style-to-token` supports antd-style `createStyles`. [#1131](https://github.com/oceanbase/oceanbase-design/pull/1131)
- 🆕 Added `--ignore-config` CLI option for ignore config file. [#1132](https://github.com/oceanbase/oceanbase-design/pull/1132)

## 0.4.7

`2025-02-05`

- ⭐️ Auto-rewrite `rgb(240,242,245)` to `colorBgLayout`. [#946](https://github.com/oceanbase/oceanbase-design/pull/946)

## 0.4.0

`2024-10-09`

- 📢 Automated upgrade target version updated to `^0.4.0`. [#784](https://github.com/oceanbase/oceanbase-design/pull/784)

## 0.3.7

`2024-09-23`

- 🆕 Added `techui-and-pro-components-to-oceanbase-ui` migration. [#706](https://github.com/oceanbase/oceanbase-design/pull/706)
- ⭐️ More components and types migrated from `pro-components` and `tech-ui`. [#718](https://github.com/oceanbase/oceanbase-design/pull/718)
- 🐞 Fixed regular/anonymous functions should use `token` object instead of `useToken()` when rewriting to Design Token. [#685](https://github.com/oceanbase/oceanbase-design/pull/685)

## 0.3.6

`2024-07-26`

- ⭐️ Auto-rewrite `rgba(0,0,0,xx%)` colors to Design Tokens. [#656](https://github.com/oceanbase/oceanbase-design/pull/656)
- ⭐️ Auto-rewrite `#000000xx` colors to Design Tokens. [#639](https://github.com/oceanbase/oceanbase-design/pull/639)

## 0.3.4

`2024-06-27`

- 🐞 Fixed auto-installed dependency versions not being latest. [#597](https://github.com/oceanbase/oceanbase-design/pull/597)

## 0.3.1

`2024-04-12`

- ⭐️ Auto-rewrite `@oceanbase/design` color values to Design Tokens. [#539](https://github.com/oceanbase/oceanbase-design/pull/539)

## 0.3.0

`2024-03-22`

- ⭐️ More color values auto-rewritten to Design Tokens. [#511](https://github.com/oceanbase/oceanbase-design/pull/511) [#519](https://github.com/oceanbase/oceanbase-design/pull/519)
  - `rgb(250,250,250)` => `colorBgLayout`
  - `rgb(255 255 255 / 100%)` => `colorBgContainer`
  - `rgb(0 0 0 / 85%)` => `colorText`
  - `rgb(0 0 0 / 65%)` => `colorTextSecondary`
  - `rgb(0 0 0 / 45%)` => `colorTextTertiary`
  - `rgb(0 0 0 / 25%)` => `colorTextQuaternary`

## 0.2.10

`2023-11-09`

- 🆕 Added `--transformer` CLI option to specify transformers to run. [#270](https://github.com/oceanbase/oceanbase-design/pull/270)
- 🐞 Fixed Less files with tokens not auto-importing `~@oceanbase/design/es/theme/index.less`. [#269](https://github.com/oceanbase/oceanbase-design/pull/269)

## 0.2.9

`2023-11-03`

- 🐞 Fixed Less `.mixin()` incorrectly rewritten to `@mixin()`. [#261](https://github.com/oceanbase/oceanbase-design/pull/261)
- 🐞 Fixed `pro-components` members not correctly migrated from `@alipay/ob-ui` to `@oceanbase/ui`. [#262](https://github.com/oceanbase/oceanbase-design/pull/262)

## 0.2.8

`2023-10-31`

- 📖 Added migration docs for `@oceanbase/design`, `@oceanbase/ui`, and `@oceanbase/charts` using `@oceanbase/codemod`. [#243](https://github.com/oceanbase/oceanbase-design/pull/243)
- ⭐️ More color values auto-rewritten to Design Tokens. [#252](https://github.com/oceanbase/oceanbase-design/pull/252)
- 🐞 Fixed Prettier formatting errors. [#236](https://github.com/oceanbase/oceanbase-design/pull/236)
- 🐞 Fixed loose color matching causing incorrect token rewrites. [#238](https://github.com/oceanbase/oceanbase-design/pull/238)
- 🐞 Fixed case-sensitive colors not rewritten to tokens. [#244](https://github.com/oceanbase/oceanbase-design/pull/244)
- style-to-token
  - 🐞 Fixed JSX attribute color rewrites missing `{}`. [#234](https://github.com/oceanbase/oceanbase-design/pull/234)
  - 🐞 Fixed duplicate `const { token } = theme.useToken();` declarations. [#240](https://github.com/oceanbase/oceanbase-design/pull/240)
  - 🐞 Fixed missing `token` import outside block statements. [#250](https://github.com/oceanbase/oceanbase-design/pull/250)
- less-to-token
  - 🐞 Fixed transformer execution errors. [#235](https://github.com/oceanbase/oceanbase-design/pull/235)
  - 🐞 Fixed parse errors when specifying a single non-`less` file. [#242](https://github.com/oceanbase/oceanbase-design/pull/242)

## 0.2.7

`2023-10-26`

- 🔥 Added `style-to-token` migration: auto-rewrite fixed color values in JS/TS/JSX/TSX to Design Tokens. [#215](https://github.com/oceanbase/oceanbase-design/pull/215)
- 🔥 Added `less-to-token` migration: auto-rewrite fixed color values in Less to Design Tokens. [#217](https://github.com/oceanbase/oceanbase-design/pull/217)
- 🐞 Fixed `dir` option not scoping migration range. [#205](https://github.com/oceanbase/oceanbase-design/pull/205)
