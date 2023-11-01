---
title: 更新日志
order: 6
group: 业务组件
---

`@oceanbase/ui` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

---

## 0.2.26

`2023-10-31`

- 🆕 BackgroundTaskManager 消息通知增加唯一 key，并透出 `closeNotification` 接口用于手动关闭。[#239](https://github.com/oceanbase/oceanbase-design/pull/239) [@Qiuhang817385](https://github.com/Qiuhang817385)
- 🐞 修复 PageContainer 页头相关样式不生效的问题。[#254](https://github.com/oceanbase/oceanbase-design/pull/254)
- 🐞 修复 BasicLayout 顶部语言切换的字体大小偏大的问题。[#255](https://github.com/oceanbase/oceanbase-design/pull/255)

## 0.2.25

`2023-10-26`

- BasicLayout
  - 🔥 样式方案从 less 改造为 CSS-in-JS，以支持动态主题。[#201](https://github.com/oceanbase/oceanbase-design/pull/201) [@Vanleehao](https://github.com/Vanleehao)
  - 🆕 菜单项超长支持自动省略，并展示 tooltip 提示。[#208](https://github.com/oceanbase/oceanbase-design/pull/208)
  - 💄 适配暗色主题。[#208](https://github.com/oceanbase/oceanbase-design/pull/208)
  - 💄 优化和 Welcome 组合使用的样式效果。[#208](https://github.com/oceanbase/oceanbase-design/pull/208)
- 💄 PageContainer 适配 pro-components 的最新版本，优化页头和面包屑导航的样式。[#209](https://github.com/oceanbase/oceanbase-design/pull/209)
