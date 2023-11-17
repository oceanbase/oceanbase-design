---
title: 更新日志
order: 6
group: 基础组件
---

`@oceanbase/design` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

---

## 0.2.29

`2023-11-17`

- 🐞 修复 Drawer 部分样式不生效的问题。[#298](https://github.com/oceanbase/oceanbase-design/pull/298)

## 0.2.28

`2023-11-14`

- 🌈 新增主题预览和编辑器，便于主题调试和预览。[#287](https://github.com/oceanbase/oceanbase-design/pull/287)
- 💄 优化 Drawer 的标题、内容区和页脚样式，以符合设计规范。[#283](https://github.com/oceanbase/oceanbase-design/pull/283) [@Vanleehao](https://github.com/Vanleehao)

## 0.2.27

`2023-11-09`

- 🌈 更新中性色板，包括 Design Token 以及 less 主题变量。[#272](https://github.com/oceanbase/oceanbase-design/pull/272)
- 🔥 Drawer [#228](https://github.com/oceanbase/oceanbase-design/pull/228) [@Vanleehao](https://github.com/Vanleehao)
  - 🌈 定制主题和样式，符合 OceanBase Design 设计规范。
  - 🆕 新增 `footer` 属性，用于设置抽屉的底部内容，默认为 `取消` 和 `确定` 按钮。
  - 🆕 新增 `onOk` 和 `onCancel` 属性，用于设置 `取消` 和 `确定` 按钮的回调。
  - 🆕 新增 `cancelText` 和 `okText` 属性，用于设置 `取消` 和 `确定` 按钮的文字。
  - 🆕 新增 `okButtonProps` 属性，用于设置 `确定` 按钮的属性。
  - 🆕 新增 `confirmLoading` 属性，用于设置 `确定` 按钮的加载态。
- 🆕 全局设置 Spin 的加载指示符为 OceanBase 加载动画。[#273](https://github.com/oceanbase/oceanbase-design/pull/273)
- 🆕 Badge、Button、Card、Select、Table、Tag 和 Tooltip 支持转发 `ref`。[#259](https://github.com/oceanbase/oceanbase-design/pull/259) [@linhf123](https://github.com/linhf123)
- 💄 优化 Modal 确认对话框的内容区样式。[#275](https://github.com/oceanbase/oceanbase-design/pull/275)

## 0.2.26

`2023-11-03`

## 0.2.25

`2023-10-31`

- 🔥 新增 Tag 组件，优化 border 样式以弱化边框，内容超长支持自动省略，可通过 `ellipsis` 属性进行控制。[#113](https://github.com/oceanbase/oceanbase-design/pull/113) [@wdyea-ya](https://github.com/wdyea-ya)
- 🐞 修复 Tooltip 未兼容 `visible` 属性导致显示和隐藏无法受控的问题。[#231](https://github.com/oceanbase/oceanbase-design/pull/231)

## 0.2.24

`2023-10-26`

- Table
  - 🐞 修复 `columns` 为空时，Table 执行报错、导致页面白屏的问题。[#206](https://github.com/oceanbase/oceanbase-design/pull/206)
  - 💄 优化带边框的 Table 样式，去掉其底部多余的 border。[#207](https://github.com/oceanbase/oceanbase-design/pull/207)
