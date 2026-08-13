---
title: 更新日志
order: 12
group: 自动化迁移工具
---

`@oceanbase/codemod` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

---

## 1.1.0

`2026-08-04`

- 🆕 默认样式迁移输出 `obToken` 与 `var(--ob-*)`，替代 antd token。[#1510](https://github.com/oceanbase/oceanbase-design/pull/1510)
  - 新增 `token-to-obtoken`，用于升级存量 `token.xxx` / `var(--ant-*)` 代码。
  - `less-to-cssvar` / `sass-to-cssvar` 纳入默认流水线。
  - `--token-target=antd` 可恢复 antd token 输出。
- 🆕 新增 `ob-css-tokens` transformer。[#1517](https://github.com/oceanbase/oceanbase-design/pull/1517)

## 1.0.0-alpha.10

`2025-12-19`

- 🆕 新增 `sass-to-cssvar` 迁移能力，支持将 SASS/SCSS 变量自动迁移为 CSS 变量，用法详见 [文档](https://github.com/oceanbase/oceanbase-design/blob/v1/packages/codemod/README.md#sass-to-cssvar)。[#1342](https://github.com/oceanbase/oceanbase-design/pull/1342)
  - 支持将 `$colorPrimary` 等 SASS 变量转换为 `var(--ant-color-primary)` 等 CSS 变量。
  - 支持通过 `--prefix` 参数自定义 CSS 变量前缀，默认为 `ant`。
  - 支持 `.sass` 和 `.scss` 文件格式。
  - 仅转换匹配 `@oceanbase/design` 主题的 token 变量。
- ⭐️ 增强 `less-to-cssvar` 迁移能力。[#1341](https://github.com/oceanbase/oceanbase-design/pull/1341)
  - 支持 `--rename-to` 参数，可指定输出格式为 `css`、`scss` 或 `false`（保持 `.less` 扩展名），替代原有的 `--rename-to-css` 和 `--to-scss` 参数。
  - 当 `--rename-to=false` 时，自动将 `--add-module` 设置为 `false`（除非用户显式指定）。
- ⭐️ 默认开启 `disablePrettier`，即默认不执行 prettier 格式化。

## 1.0.0-alpha.9

`2025-12-11`

- 🔥 新增 `less-to-cssvar` 迁移能力，支持将 Less 变量自动迁移为 CSS 变量，用法详见 [文档](https://github.com/oceanbase/oceanbase-design/blob/v1/packages/codemod/README.md#less-to-cssvar)。[#1333](https://github.com/oceanbase/oceanbase-design/pull/1333)
  - 支持将 `@colorPrimary` 等 Less 变量转换为 `var(--ant-color-primary)` 等 CSS 变量，并自动移除 `@import '~@oceanbase/design/es/theme/index.less';` 导入语句。
  - 支持通过 `--prefix` 参数自定义 CSS 变量前缀，默认为 `ant`。
  - 默认将 `.less` 文件重命名为 `.css`，支持自动检测导入方式，智能添加 `.module` 后缀（CSS Module 导入 → `.module.css`，全局导入 → `.css`）。可通过 `--rename-to-css=false` 禁用。
  - 自动将 Less 单行注释 `//` 转换为 CSS 注释 `/* */`。
  - 自动更新 JS/TS 文件中的样式文件引用路径。
- ⭐️ 支持更多颜色值到 Design Token 的自动改写。[#1335](https://github.com/oceanbase/oceanbase-design/pull/1335)
  - `#1843ff` => `colorInfo`
  - `#597ef7` => `colorInfo`
  - `#91a9f8` => `colorInfoBg`
  - `#ffa940` => `colorWarning`
  - `#fed59c` => `colorWarningBg`
  - `#eb4444` => `colorError`
  - `#ced5e3` => `@colorTextPlaceholder`
- 🆕 `style-to-token` 和 `less-to-token` 工具支持对 `fontWeight` 和 `borderRadius` 进行改写。[#1325](https://github.com/oceanbase/oceanbase-design/pull/1325)

## 1.0.0-alpha.6

`2025-12-01`

- 🐞 修复 `style-to-token` 未正确处理模板字符串的问题。[#1286](https://github.com/oceanbase/oceanbase-design/pull/1286)
- 🐞 修复 `#5c6b8a` token 映射错误的问题，从 `colorTextTertiary` 更正为 `colorTextSecondary`，与主题定义一致。[#1286](https://github.com/oceanbase/oceanbase-design/pull/1286)
- 🛠 增强 package.json 读取的错误处理和鲁棒性，并优化废弃包的卸载和日志打印。[#1286](https://github.com/oceanbase/oceanbase-design/pull/1286)

## 1.0.0-alpha.3

`2025-10-23`

- 🐞 修复 `less-to-token` 未正确处理复合值的问题。[#1233](https://github.com/oceanbase/oceanbase-design/pull/1233)
- 🐞 修复 `less-to-token` 处理嵌套对象时未导入 token 对象的问题。[#1236](https://github.com/oceanbase/oceanbase-design/pull/1236)
- 🐞 修复 `style-to-token` 未正确处理复合值的问题。[#1234](https://github.com/oceanbase/oceanbase-design/pull/1234)

## 1.0.0-alpha.2

`2025-09-24`

- ⭐️ 支持 `#f93939` => `colorError` 和 `#f8fafe` => `colorBgLayout` 的 Design Token 自动改写。[#1217](https://github.com/oceanbase/oceanbase-design/pull/1217)
- 🐞 修复 `less-to-token` 可能重复导入主题文件的问题。[#1199](https://github.com/oceanbase/oceanbase-design/pull/1199)

## 1.0.0-alpha.1

`2025-09-10`

- style-to-token
  - ⭐️ 优化 `style-to-token` 对匿名函数组件的改写结果。[#1188](https://github.com/oceanbase/oceanbase-design/pull/1188)
  - ⭐️ `style-to-token` 工具支持更多 `fontSize` 的改写场景。[#1190](https://github.com/oceanbase/oceanbase-design/pull/1190)
  - 🐞 修复 `style-to-token` 对单个函数的改写结果错误的问题。[#1189](https://github.com/oceanbase/oceanbase-design/pull/1189)
- 🐞 修复依赖升级的目标版本不正确的问题。[#1192](https://github.com/oceanbase/oceanbase-design/pull/1192)

## 1.0.0-alpha.0

`2025-09-08`

- 🆕 `style-to-token` 工具支持改写成 `fontSize` 相关 token。[#1181](https://github.com/oceanbase/oceanbase-design/pull/1181)
- 🆕 `less-to-token` 工具支持改写成 `fontSize` 相关 token。[#1182](https://github.com/oceanbase/oceanbase-design/pull/1182)
- 🆕 less 主题文件中的 `token` 值增加单位后缀，便于直接使用，比如 `@fontSize: 14;` => `@fontSize: 14px;`。[#1183](https://github.com/oceanbase/oceanbase-design/pull/1183)

## 0.4.14

`2025-08-07`

- 🆕 `style-to-token` 工具支持改写 antd-style `createStyles`。[#1131](https://github.com/oceanbase/oceanbase-design/pull/1131)
- 🆕 新增 `--ignore-config` 命令行参数，用于指定 `ignore` 配置文件。[#1132](https://github.com/oceanbase/oceanbase-design/pull/1132)

## 0.4.7

`2025-02-05`

- ⭐️ 支持颜色值 `rgb(240,242,245)` 到 `colorBgLayout` 的自动改写。[#946](https://github.com/oceanbase/oceanbase-design/pull/946)

## 0.4.0

`2024-10-09`

- 📢 自动化升级的目标版本更新为 `^0.4.0`。[#784](https://github.com/oceanbase/oceanbase-design/pull/784)

## 0.3.7

`2024-09-23`

- 🆕 新增 `techui-and-pro-components-to-oceanbase-ui` 迁移能力。[#706](https://github.com/oceanbase/oceanbase-design/pull/706)
- ⭐️ 支持从 `pro-components` 和 `tech-ui` 迁移更多的组件和类型。[#718](https://github.com/oceanbase/oceanbase-design/pull/718)
- 🐞 修复普通函数和匿名函数自动改写成 Design Token 时，应该使用 `token` 对象而不是 `useToken()` 的问题。[#685](https://github.com/oceanbase/oceanbase-design/pull/685)

## 0.3.6

`2024-07-26`

- ⭐️ 新增 `rgba(0,0,0,xx%)` 颜色值到 Design Token 的自动改写。[#656](https://github.com/oceanbase/oceanbase-design/pull/656)
- ⭐️ 支持 `#000000xx` 等颜色值到 Design Token 的自动改写。[#639](https://github.com/oceanbase/oceanbase-design/pull/639)

## 0.3.4

`2024-06-27`

- 🐞 修复自动安装的依赖版本不是最新的问题。[#597](https://github.com/oceanbase/oceanbase-design/pull/597)

## 0.3.1

`2024-04-12`

- ⭐️ 支持 @oceanbase/design 颜色值到 Design Token 的自动改写。[#539](https://github.com/oceanbase/oceanbase-design/pull/539)

## 0.3.0

`2024-03-22`

- ⭐️ 支持更多颜色值到 Design Token 的自动改写。[#511](https://github.com/oceanbase/oceanbase-design/pull/511) [#519](https://github.com/oceanbase/oceanbase-design/pull/519)
  - `rgb(250,250,250)` => `colorBgLayout`
  - `rgb(255 255 255 / 100%)` => `colorBgContainer`
  - `rgb(0 0 0 / 85%)` => `colorText`
  - `rgb(0 0 0 / 65%)` => `colorTextSecondary`
  - `rgb(0 0 0 / 45%)` => `colorTextTertiary`
  - `rgb(0 0 0 / 25%)` => `colorTextQuaternary`

## 0.2.10

`2023-11-09`

- 🆕 新增 `--transformer` 命令行参数，用于指定要运行的转换脚本。[#270](https://github.com/oceanbase/oceanbase-design/pull/270)
- 🐞 修复包含 token 的 less 文件没有自动引入 `~@oceanbase/design/es/theme/index.less` 主题文件的问题。[#269](https://github.com/oceanbase/oceanbase-design/pull/269)

## 0.2.9

`2023-11-03`

- 🐞 修复 less 函数 `.mixin()` 被错误改写为 `@mixin()` 的问题。[#261](https://github.com/oceanbase/oceanbase-design/pull/261)
- 🐞 修复 `pro-components` 成员没有正确从 `@alipay/ob-ui` 迁移到 `@oceanbase/ui` 的问题。[#262](https://github.com/oceanbase/oceanbase-design/pull/262)

## 0.2.8

`2023-10-31`

- 📖 新增 `@oceanbase/design`、`@oceanbase/ui` 和 `@oceanbase/charts` 基于 @oceanbase/codemod 的自动化迁移文档。[#243](https://github.com/oceanbase/oceanbase-design/pull/243)
- ⭐️ 支持更多颜色值到 Design Token 的自动改写。[#252](https://github.com/oceanbase/oceanbase-design/pull/252)
- 🐞 修复 `prettier` 代码格式化执行报错的问题。[#236](https://github.com/oceanbase/oceanbase-design/pull/236)
- 🐞 修复颜色值的匹配规则不严谨导致 token 改写错误的问题。[#238](https://github.com/oceanbase/oceanbase-design/pull/238)
- 🐞 修复部分颜色值由于大小写敏感没有被改写为 token 的问题。[#244](https://github.com/oceanbase/oceanbase-design/pull/244)
- style-to-token
  - 🐞 修复 `JSX` 属性中的颜色值改写后缺少 `{}` 的问题。[#234](https://github.com/oceanbase/oceanbase-design/pull/234)
  - 🐞 修复 `const { token } = theme.useToken();` 被重复声明的问题。[#240](https://github.com/oceanbase/oceanbase-design/pull/240)
  - 🐞 修复在非块语句下没有导入 `token` 对象的问题。[#250](https://github.com/oceanbase/oceanbase-design/pull/250)
- less-to-token
  - 🐞 修复转换脚本执行报错的问题。[#235](https://github.com/oceanbase/oceanbase-design/pull/235)
  - 🐞 修复指定单个非 `less` 文件时解析报错的问题。[#242](https://github.com/oceanbase/oceanbase-design/pull/242)

## 0.2.7

`2023-10-26`

- 🔥 新增 `style-to-token` 迁移能力，支持将 JS、TS、JSX、TSX 中固定的颜色值样式自动改写为 Design Token。[#215](https://github.com/oceanbase/oceanbase-design/pull/215)
- 🔥 新增 `less-to-token` 迁移能力，支持将 less 中固定的颜色值样式自动改写为 Design Token。[#217](https://github.com/oceanbase/oceanbase-design/pull/217)
- 🐞 修复 `dir` 目录参数没有限制迁移范围的问题。[#205](https://github.com/oceanbase/oceanbase-design/pull/205)
