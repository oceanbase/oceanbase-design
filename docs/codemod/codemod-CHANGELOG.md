---
title: 更新日志
order: 12
group: 自动化迁移工具
---

`@oceanbase/codemod` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

---

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
