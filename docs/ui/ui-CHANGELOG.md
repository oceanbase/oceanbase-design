---
title: 更新日志
order: 6
group: 业务组件
---

`@oceanbase/ui` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

---

## 0.4.8

`2025-01-24`

- DateRanger
  - 🆕 DateRanger 支持自定义快捷选项。[#952](https://github.com/oceanbase/oceanbase-design/pull/952)
  - ⭐️ DateRanger 支持自动校验和交换起止时间。[#953](https://github.com/oceanbase/oceanbase-design/pull/953)
- 💄 优化 ProTable 间距，以对齐 Table 在 Card 中的样式。[#948](https://github.com/oceanbase/oceanbase-design/pull/948)

## 0.4.7

`2025-01-15`

- Action
  - 🆕 Action 支持子元素间接嵌套。[#928](https://github.com/oceanbase/oceanbase-design/pull/928)
  - 💄 Action.Link 之间的间隔改为 16px。[#926](https://github.com/oceanbase/oceanbase-design/pull/926)
  - 💄 优化 Action 更多按钮的宽度，并去掉下拉菜单的最小宽度。[#931](https://github.com/oceanbase/oceanbase-design/pull/931)
- DateRanger
  - 🆕 DateRanger 新增 `rules` 属性，用于设置起止时间的校验规则。[#940](https://github.com/oceanbase/oceanbase-design/pull/940) [@linhf123](https://github.com/linhf123)
  - 🆕 DateRanger 新增 `NEAR_12_HOURS` 和 `LAST_1_DAY` 快捷选项。[#927](https://github.com/oceanbase/oceanbase-design/pull/927) [@wzc520pyfm](https://github.com/wzc520pyfm)
  - 🌐 优化 DateRanger 的英文文案和日期格式。[#918](https://github.com/oceanbase/oceanbase-design/pull/918) [@18735185652](https://github.com/18735185652)
  - 🐞 修复 DateRanger `allowClear` 不生效的问题。[#929](https://github.com/oceanbase/oceanbase-design/pull/929) [@linhf123](https://github.com/linhf123)
  - 💄 去掉 DateRanger `focus` 时的阴影样式。[#934](https://github.com/oceanbase/oceanbase-design/pull/934)
  - 💄 DateRanger 横向空间不足时，切换按钮不换行。[#920](https://github.com/oceanbase/oceanbase-design/pull/920) [@wzc520pyfm](https://github.com/wzc520pyfm)
- ProCard
  - 📖 新增 ProCard 的文档和示例。[#923](https://github.com/oceanbase/oceanbase-design/pull/923)
  - 💄 优化 ProCard 在无间距时的头部样式。[#923](https://github.com/oceanbase/oceanbase-design/pull/923)
  - 💄 优化 ProCard 的圆角、阴影和内间距，以对齐 Card 样式。[#938](https://github.com/oceanbase/oceanbase-design/pull/938)
  - 💄 优化 ProCard 页标签样式，以对齐 Card 页标签样式。[#937](https://github.com/oceanbase/oceanbase-design/pull/937)

## 0.4.6

`2024-12-30`

- DateRanger:
  - 🌐 快捷选项支持国际化。[#903](https://github.com/oceanbase/oceanbase-design/pull/903)
  - 🆕 `selects` 新增 `enLabel` 属性，用于设置快捷选项的英文文案。[#903](https://github.com/oceanbase/oceanbase-design/pull/903)
- Action
  - 🆕 新增 `moreType` 属性，用于设置更多操作的元素类型。[#911](https://github.com/oceanbase/oceanbase-design/pull/911)
  - 💄 优化 Action 更多操作元素类型的判断逻辑。[#911](https://github.com/oceanbase/oceanbase-design/pull/911)
  - 📖 Action 新增带 Tooltip 和 Popconfirm 的示例。[#902](https://github.com/oceanbase/oceanbase-design/pull/902)

## 0.4.4

`2024-12-14`

- ⚡ 设置 `sideEffects`，以支持 tree shaking。[#886](https://github.com/oceanbase/oceanbase-design/pull/886)
- ⚡ TaskGraph 依赖的 `@antv/g6` 改为动态加载，以提升加载性能。[#884](https://github.com/oceanbase/oceanbase-design/pull/884)
- ⭐️ 优化 DateRanger 的交互和样式: [#885](https://github.com/oceanbase/oceanbase-design/pull/885) [@wzc520pyfm](https://github.com/wzc520pyfm)
  - 移除时间 icon
  - 不再禁用后退时间按钮
  - 刷新时间按钮在选中自定义时间时隐藏
  - 时间组件添加 hover 样式、优化
  - 前进/后退时间按钮添加 tooltip
  - 时间选择组件不支持清空值
  - 优化选择框圆角、按钮组边框和快速选项的字体颜色
  - 支持英文格式日期时间
  - 优化 DateRanger 的鼠标样式 [#883](https://github.com/oceanbase/oceanbase-design/pull/883)
- 🆕 Action 组件 `onClick` 函数增加 event 参数。[#874](https://github.com/oceanbase/oceanbase-design/pull/874)
- 🐞 修复 PageContainer 右上角操作区 Select 多选框没有垂直居中的问题。[#881](https://github.com/oceanbase/oceanbase-design/pull/881)
- 💄 优化 ContentWithQuestion 问号图标的颜色。[#887](https://github.com/oceanbase/oceanbase-design/pull/887)

## 0.4.3

`2024-12-02`

- 🐞 修复引入的 @oceanbase/design 国际化语言路径不正确、导致运行报错的问题。[#870](https://github.com/oceanbase/oceanbase-design/pull/870)

## 0.4.2

`2024-11-29`

- 💄 DateRanger 组件对外透出 `updateCurrentTime` 函数，用于更新当前时间。[#862](https://github.com/oceanbase/oceanbase-design/pull/862) [@18735185652](https://github.com/18735185652)

## 0.4.1

`2024-11-11`

- ⭐️ 大幅优化 DateRanger 的交互和样式: [#810](https://github.com/oceanbase/oceanbase-design/pull/810) [#795](https://github.com/oceanbase/oceanbase-design/pull/795)
  - 调整布局和样式
  - 日期和时间输入框支持快捷选中
  - 修复手动输入日期时日历面板不更新的问题
  - 默认关闭极简模式
  - 默认展示年份和秒
  - 使用刷新图标 替换 `当前` 按钮
  - 移除快捷选项的 tag
  - 信息提示和报错信息移到面板底部
  - 自定义时间默认不自动计算时间跨度，并移除自定义选项
- 🆕 Ranger 支持透传属性到 QuickPicker 组件。[#799](https://github.com/oceanbase/oceanbase-design/pull/799)
- 💄 去掉 PageContainer 页头的上内间距，让页面布局更加紧凑。[#817](https://github.com/oceanbase/oceanbase-design/pull/817)
- ProTable
  - 💄 对齐 Table 的可展开、空状态和 `footer` 样式。[#825](https://github.com/oceanbase/oceanbase-design/pull/825)
  - 💄 优化查询表单样式，将搜索&重置按钮组和展开收起互换位置。[#801](https://github.com/oceanbase/oceanbase-design/pull/801)
- 💄 优化 Password 的多处样式，以对齐设计规范。[#820](https://github.com/oceanbase/oceanbase-design/pull/820)

## 0.4.0

`2024-10-09`

- 🔥 新增 DateRanger 新版日期时间选择组件。[#295](https://github.com/oceanbase/oceanbase-design/pull/295)

## 0.3.8

`2024-09-23`

- 📖 新增 @oceanbase/ui 在 Vite 中的使用文档和项目模板。[#673](https://github.com/oceanbase/oceanbase-design/pull/673)
- 🆕 Action.Group 新增 `buttonSize` 属性，用于设置按钮大小。[#719](https://github.com/oceanbase/oceanbase-design/pull/719)
- 🆕 Action.Button 新增 `size` 属性，用于设置按钮大小。[#719](https://github.com/oceanbase/oceanbase-design/pull/719)
- 💄 优化 PageContainer 仅设置 title 属性时页头和内容区的间距。[#721](https://github.com/oceanbase/oceanbase-design/pull/721)

## 0.3.6

`2024-07-10`

- 📢 BasicLayout 公司名从 `蚂蚁集团` 改为 `北京奥星贝斯科技有限公司`。[#629](https://github.com/oceanbase/oceanbase-design/pull/629)

## 0.3.4

`2024-05-11`

- 💄 调整 PageContainer 刷新图标的大小和间距，以对齐设计规范。[#588](https://github.com/oceanbase/oceanbase-design/pull/588)

## 0.3.3

`2024-04-25`

- ⭐️ Boundary 组件支持 `className` 属性，并且根据不同组件内置 ob-boundary-error、ob-boundary-403 和 ob-boundary-404 类名，便于上层判断异常类型。[#571](https://github.com/oceanbase/oceanbase-design/pull/571)

## 0.3.2

`2024-04-12`

- 💄 优化 LightFilter 圆角、内间距、背景色等样式，以对齐设计规范。[#554](https://github.com/oceanbase/oceanbase-design/pull/554)
- ProTable [#549](https://github.com/oceanbase/oceanbase-design/pull/549)
  - 🐞 修复 ProTable 没有继承 Table 样式的问题。
  - 🐞 修复 ProTable 查询表单带有 `requiredMark` 可选样式的问题。
  - 💄 ProTable 分页器配置默认改为 `{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '50', '100'], showTotal: total => \`共 ${total} 条\` }`。

## 0.3.1

`2024-03-29`

- 🌐 国际化:
  - 优化 Ranger 的 `en-US` 翻译。[#533](https://github.com/oceanbase/oceanbase-design/pull/533)

## 0.3.0

`2024-03-22`

- 🆕 新增 PageLoading 页面级加载组件。[#497](https://github.com/oceanbase/oceanbase-design/pull/497)
- 🐞 修复 Password 部分英文文案不正确的问题。[#469](https://github.com/oceanbase/oceanbase-design/pull/469)
- 💄 优化 PageContainer 加载样式，保证页面内垂直居中。[#497](https://github.com/oceanbase/oceanbase-design/pull/497)

## 0.2.38

`2024-01-30`

- PageContainer
  - 🐞 修复 PageContainer 页头和页脚操作区外的组件尺寸也可能被改为 large 的问题。[#443](https://github.com/oceanbase/oceanbase-design/pull/443)
  - 💄 修复 PageContainer 页头和页脚操作区样式适配 Space.Compact 组件。[#454](https://github.com/oceanbase/oceanbase-design/pull/454)
- 🐞 修复 FooterToolbar 子元素外的组件尺寸被改为 large 的问题。[#447](https://github.com/oceanbase/oceanbase-design/pull/447)

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
