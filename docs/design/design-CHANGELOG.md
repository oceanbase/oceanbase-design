---
title: 更新日志
order: 6
group: 基础组件
---

`@oceanbase/design` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

---

## 0.2.25

`2023-10-31`

- 🔥 新增 Tag 组件，优化 border 样式以弱化边框，内容超长支持自动省略，可通过 `ellipsis` 属性进行控制。[#113](https://github.com/oceanbase/oceanbase-design/pull/113) [@wdyea-ya](https://github.com/wdyea-ya)
- 🐞 修复 Tooltip 未兼容 `visible` 属性导致显示和隐藏无法受控的问题。[#231](https://github.com/oceanbase/oceanbase-design/pull/231)

## 0.2.24

`2023-10-26`

- Table
  - 🐞 修复 `columns` 为空时，Table 执行报错、导致页面白屏的问题。[#206](https://github.com/oceanbase/oceanbase-design/pull/206)
  - 💄 优化带边框的 Table 样式，去掉其底部多余的 border。[#207](https://github.com/oceanbase/oceanbase-design/pull/207)
