---
title: 更新日志
order: 12
group: 自动化迁移工具
---

`@oceanbase/codemod` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

---

## 0.2.7

`2023-10-26`

- 🔥 新增 `style-to-token` 迁移能力，支持将 JS、TS、JSX、TSX 中固定的颜色值样式自动改写为 Design Token。[#215](https://github.com/oceanbase/oceanbase-design/pull/215)
- 🔥 新增 `less-to-token` 迁移能力，支持将 less 中固定的颜色值样式自动改写为 Design Token。[#217](https://github.com/oceanbase/oceanbase-design/pull/217)
- 🐞 修复 `dir` 目录参数没有限制迁移范围的问题。[#205](https://github.com/oceanbase/oceanbase-design/pull/205)
