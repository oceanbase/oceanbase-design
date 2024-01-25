---
title: 更新日志
order: 6
group: 业务组件
---

`@oceanbase/ui` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

---

## 0.2.37

`2024-01-19`

- PageContainer
  - 💄 PageContainer 页头和页脚操作区的组件尺寸默认为 `large`、字体大小为 `middle`。[#432](https://github.com/oceanbase/oceanbase-design/pull/432)
  - 💄 优化 PageContainer 和 Tabs 组合使用时的间距，以对齐设计规范。[#434](https://github.com/oceanbase/oceanbase-design/pull/434)
- 💄 FooterToolbar 子元素的组件尺寸默认为 `large`、字体大小默认为 `middle`。[#433](https://github.com/oceanbase/oceanbase-design/pull/433)

## 0.2.36

`2024-01-18`

- 🐞 修复 Password 组件快速输入时丢失字符和焦点跳跃的问题。[#424](https://github.com/oceanbase/oceanbase-design/pull/424) [@Vanleehao](https://github.com/Vanleehao)
- 🐞 修复 Highlight 国际化不生效的问题。[#419](https://github.com/oceanbase/oceanbase-design/pull/419) [@linhf123](https://github.com/linhf123)
- 💄 优化 PageContainer 右上角和页脚操作区中的 Input 样式，保证宽高和字体大小符合设计规范。[#426](https://github.com/oceanbase/oceanbase-design/pull/426)

## 0.2.35

`2024-01-12`

- 🌐 Highlight 支持国际化，之前为固定的英文文案。[#409](https://github.com/oceanbase/oceanbase-design/pull/409) [@linhf123](https://github.com/linhf123)

## 0.2.34

`2023-12-28`

- IconFont
  - 🐞 修复 IconFont 会请求不必要 JS 资源的问题。[#375](https://github.com/oceanbase/oceanbase-design/pull/375)
  - 📢 将 IconFont 组件标记为即将废弃，不推荐使用。[#375](https://github.com/oceanbase/oceanbase-design/pull/375)
- 💄 优化 TagSelect 的 `disabled` 和 `hover` 样式，并将固定样式改造为 Design Token。[#373](https://github.com/oceanbase/oceanbase-design/pull/373)

## 0.2.33

`2023-12-14`

- 📝 新增 BasicLayout `location` 属性的用法说明，即用于实现选中菜单和当前路由之间的联动。[#363](https://github.com/oceanbase/oceanbase-design/pull/363)
- 💄 BasicLayout 支持根据当前路由自动设置展开菜单项。[#364](https://github.com/oceanbase/oceanbase-design/pull/364)

## 0.2.32

`2023-12-08`

- 💄 定制 FooterToolbar 样式，以符合 OceanBase Design 设计规范。[#345](https://github.com/oceanbase/oceanbase-design/pull/345)
- 🛠 将 Lottie 和 BasicLayout 中的图标固定类名 `.anticon` 改写为 `token.iconCls` 和 `iconPrefixCls`。[#338](https://github.com/oceanbase/oceanbase-design/pull/338)
- TypeScript
  - 🤖 导出 BasicLayoutProps、BatchOperationBarProps、LoginProps、LottieProps、PasswordProps、RangerProps、RangerProps 和 TreeSearchProps 等 TS 类型。[#346](https://github.com/oceanbase/oceanbase-design/pull/346)

## 0.2.31

`2023-11-30`

- 📢 默认关闭 FooterToolbar `portalDom`，即底部操作栏默认渲染到父元素，而不是 `body`。[#333](https://github.com/oceanbase/oceanbase-design/pull/333)

## 0.2.29

`2023-11-14`

- 🆕 Login 新增 `isMobile`` 属性，用于开启移动端样式。[#288](https://github.com/oceanbase/oceanbase-design/pull/288)
- 🔨 ContentWithQuestion 样式方案从 less 改造为 CSS-in-JS，以支持动态主题。[#283](https://github.com/oceanbase/oceanbase-design/pull/283) [@Vanleehao](https://github.com/Vanleehao)

## 0.2.28

`2023-11-09`

- 💄 优化 Login 在不同屏幕尺寸下的样式。[#274](https://github.com/oceanbase/oceanbase-design/pull/274)
- 💄 优化 TagSelect 选中态的样式。[#260](https://github.com/oceanbase/oceanbase-design/pull/260) [@wdyea-ya](https://github.com/wdyea-ya)
- 🐞 修复 PageContainer 页头未和内容区对齐，以及顶部间距过小的问题。[#271](https://github.com/oceanbase/oceanbase-design/pull/271)

## 0.2.27

`2023-11-03`

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
