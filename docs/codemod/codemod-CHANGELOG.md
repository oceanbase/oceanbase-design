---
title: 更新日志
order: 12
group: 自动化迁移工具
---

`@oceanbase/codemod` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

---

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
