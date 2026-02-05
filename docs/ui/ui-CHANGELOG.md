---
title: 更新日志
order: 6
group: 业务组件
---

`@oceanbase/ui` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

---

## 1.0.0-alpha.15

`2026-02-05`

- ⭐️ DateRanger 时间选择器支持分段修改。[#1403](https://github.com/oceanbase/oceanbase-design/pull/1403) [@18735185652](https://github.com/18735185652)
- 🐞 修复 PageContainer 对浏览器 API 的使用，以适配 SSR。[#1426](https://github.com/oceanbase/oceanbase-design/pull/1426)

## 1.0.0-alpha.14

`2026-01-22`

- 🐞 修复 Action 被 Tooltip 和 Popconfirm 包裹时没有继承 Action.Group `buttonSize` 属性的问题。[#1421](https://github.com/oceanbase/oceanbase-design/pull/1421)
- 💄 优化 FooterToolbar 的阴影。[#1406](https://github.com/oceanbase/oceanbase-design/pull/1406)
- 💄 PageContainer 达到最大宽度时，其下的 tabs 分割线改为不拉通。[#1407](https://github.com/oceanbase/oceanbase-design/pull/1407)

## 1.0.0-alpha.13

`2026-01-05`

- Boundary
  - 💄 优化 Boundary 的背景和间距，方面业务侧直接使用，无需容器包裹。[#1389](https://github.com/oceanbase/oceanbase-design/pull/1389)
  - ⭐️ 优化 Boundary 的 `class` 命名，避免和业务常用类名冲突、导致样式被覆盖。[#1389](https://github.com/oceanbase/oceanbase-design/pull/1389)
- 💄 优化 DateRanger `hover` 时的边框色。[#1382](https://github.com/oceanbase/oceanbase-design/pull/1382)

## 1.0.0-alpha.12

`2025-12-25`

- 💄 优化 Password 提示文案的字体大小。[#1374](https://github.com/oceanbase/oceanbase-design/pull/1374)

## 1.0.0-alpha.10

`2025-12-19`

- 🐞 修复 ProTable 下的链接字体大小不正确的问题。[#1337](https://github.com/oceanbase/oceanbase-design/pull/1337)
- 💄 优化 ProCard 标题区的上间距，以对齐 Card 样式。[#1340](https://github.com/oceanbase/oceanbase-design/pull/1340)
- PageContainer
  - 💄 PageContainer 自定义文档链接时自动追加默认样式。[#1352](https://github.com/oceanbase/oceanbase-design/pull/1352)
  - 💄 优化 PageContainer 副标题的字体大小。[#1353](https://github.com/oceanbase/oceanbase-design/pull/1353)

## 1.0.0-alpha.9

`2025-12-11`

- 📝 更新国际化使用文档。[#1322](https://github.com/oceanbase/oceanbase-design/pull/1322)
- 🌐 修复站点中英文切换组件文案不生效的问题。[#1322](https://github.com/oceanbase/oceanbase-design/pull/1322)
- PageContainer
  - 🐞 修复 PageContainer 不兼容 `onBack` 属性的问题。[#1315](https://github.com/oceanbase/oceanbase-design/pull/1315)
  - 💄 PageContainer 页头区的 Tabs 增加分隔线并拉通。[#1326](https://github.com/oceanbase/oceanbase-design/pull/1326)
- 💄 优化 DateRanger 圆角、边框、宽度等样式。[#1323](https://github.com/oceanbase/oceanbase-design/pull/1323)
- 🐞 修复 Ranger 快捷选择的圆角问题。[#1324](https://github.com/oceanbase/oceanbase-design/pull/1324)

## 1.0.0-alpha.7

`2025-12-04`

- 📝 去掉在 Vite 中使用的文档，无需额外配置，即可在 Vite 中使用。[#1292](https://github.com/oceanbase/oceanbase-design/pull/1292)
- 🗑️ 移除 TaskGraph 和 GraphToolbar 组件，去掉 G6 依赖和历史包袱。[#1292](https://github.com/oceanbase/oceanbase-design/pull/1292)
- 🆕 PageContainer 新增 `header.document` 属性，用于设置文档链接。[#1305](https://github.com/oceanbase/oceanbase-design/pull/1305)
- 🐞 修复 ProTable `cardProps.headerBordered` 属性不生效的问题。[#1306](https://github.com/oceanbase/oceanbase-design/pull/1306)

## 1.0.0-alpha.5

`2025-11-28`

- 🛠 将所有组件的样式方案从 Less 迁移到 CSS-in-JS，以支持动态主题、更好的样式管理和在 Next.js 中使用。[#1279](https://github.com/oceanbase/oceanbase-design/pull/1279)
- 🛠 规范化类名前缀，将硬编码的 `ob-xxx` 改为动态 `prefixCls`，支持通过 ConfigProvider 自定义前缀。[#1279](https://github.com/oceanbase/oceanbase-design/pull/1279)
- 🛠 将类组件（Dialog、Dialog/Anchor、Action/Item）改造为函数组件。[#1279](https://github.com/oceanbase/oceanbase-design/pull/1279)
- ⚡ 声明无 `sideEffects` 副作用，以支持 Tree Shaking。[#1279](https://github.com/oceanbase/oceanbase-design/pull/1279)

## 1.0.0-alpha.4

`2025-11-27`

- 💄 更新 PageContainer 页头区、内容区的间距，以及底部操作栏的位置和间距。[#1276](https://github.com/oceanbase/oceanbase-design/pull/1276)
- 💄 更新 FooterToolbar 的位置和间距。[#1276](https://github.com/oceanbase/oceanbase-design/pull/1276)

## 1.0.0-alpha.3

`2025-10-23`

- 🐞 修复 ProTable 下的 ProCard 样式不生效的问题。[#1237](https://github.com/oceanbase/oceanbase-design/pull/1237)

## 1.0.0-alpha.2

`2025-09-24`

- PageContainer
  - 💄 更新 PageContainer 的返回图标。[#1215](https://github.com/oceanbase/oceanbase-design/pull/1215)
  - 💄 优化 PageContainer 标题和操作区的样式。[#1202](https://github.com/oceanbase/oceanbase-design/pull/1202)
- ProCard
  - 🐞 修复 ProCard 边框颜色和 Card 不一致的问题。[#1207](https://github.com/oceanbase/oceanbase-design/pull/1207)
  - 🐞 修复 ProCard 加载态骨架屏和 Card 不一致的问题。[#1213](https://github.com/oceanbase/oceanbase-design/pull/1213)
- ProTable
  - 🐞 修复 ProTable `cardBordered` 和 `cardProps` 不受 ConfigProvider `card` 配置影响的问题。[#1209](https://github.com/oceanbase/oceanbase-design/pull/1209)
  - 🐞 修复 ProTable `cardProps.headerBordered` 属性不生效的问题。[#1210](https://github.com/oceanbase/oceanbase-design/pull/1210)
  - 🐞 修复 ProTable 卡片底部间距过大的问题。[#1219](https://github.com/oceanbase/oceanbase-design/pull/1219)

## 1.0.0-alpha.1

`2025-09-10`

- 🆕 ProCard 支持 ConfigProvider 全局配置。[#1187](https://github.com/oceanbase/oceanbase-design/pull/1187)
- 🐞 修复 DateRanger、GraphToolbar 和 Highlight 圆角样式不生效的问题。[#1185](https://github.com/oceanbase/oceanbase-design/pull/1185)

## 1.0.0-alpha.0

`2025-09-08`

- 💄 去掉 FooterToolbar 和 PageContainer 的大尺寸样式。[#1175](https://github.com/oceanbase/oceanbase-design/pull/1175)

## 0.4.24

`2026-01-05`

- 💄 优化 DateRanger 时间前进和后退按钮的样式。[#1395](https://github.com/oceanbase/oceanbase-design/pull/1395)

## 0.4.23

`2025-12-08`

- 🐞 修复 Password 校验规则弹出层偏移过大的问题。[#1312](https://github.com/oceanbase/oceanbase-design/pull/1312)

## 0.4.22

`2025-12-04`

- 🌐 优化日语 (ja-JP) 的文案翻译。[#1299](https://github.com/oceanbase/oceanbase-design/pull/1299)

## 0.4.21

`2025-11-24`

- Action
  - 🆕 Action.Button 支持在下拉菜单中设置 `danger` 属性，用于设置危险状态样式。[#1260](https://github.com/oceanbase/oceanbase-design/pull/1260)
  - 🆕 Action.Button 支持在下拉菜单中嵌套 Popconfirm 和 Tooltip 组件。[#1260](https://github.com/oceanbase/oceanbase-design/pull/1260)
  - 🐞 修复 Action.Button 在下拉菜单中 Tooltip 显示不正确的问题。[#1260](https://github.com/oceanbase/oceanbase-design/pull/1260)
- 🌐 新增日语 (ja-JP) 国际化支持。[#1258](https://github.com/oceanbase/oceanbase-design/pull/1258)

## 0.4.20

`2025-09-24`

- DateRanger
  - 🆕 DateRanger 新增历史记录功能。[#1149](https://github.com/oceanbase/oceanbase-design/pull/1149) [@wzc520pyfm](https://github.com/wzc520pyfm)
  - 🐞 修复 DateRanger `上周` 时间段 label 过长的问题。[#1198](https://github.com/oceanbase/oceanbase-design/pull/1198) [@wzc520pyfm](https://github.com/wzc520pyfm)
- 🐞 修复 ProTable 卡片底部间距过大的问题。[#1219](https://github.com/oceanbase/oceanbase-design/pull/1219)

## 0.4.19

`2025-08-29`

- DateRanger
  - ⭐️ DateRanger 新增 `近 30 天` 的快捷选项。[#1160](https://github.com/oceanbase/oceanbase-design/pull/1160) [@Richard-Zhang1019](https://github.com/Richard-Zhang1019)
  - 🐞 修复 DateRanger `defaultValue` 为空时页面崩溃的问题。[#1152](https://github.com/oceanbase/oceanbase-design/pull/1152) [@linhf123](https://github.com/linhf123)
- 🐞 修复 `sideEffects` 配置问题，以支持 tree shaking。[#1161](https://github.com/oceanbase/oceanbase-design/pull/1161)

## 0.4.18

`2025-08-21`

- DateRanger
  - ⭐️ DateRanger 新增 `近 7 天` 的快捷选项。[#1142](https://github.com/oceanbase/oceanbase-design/pull/1142) [@wzc520pyfm](https://github.com/wzc520pyfm)
  - 🐞 修复 DateRanger 在连续点击时面板会频繁开启、关闭的问题。[#1148](https://github.com/oceanbase/oceanbase-design/pull/1148) [@wzc520pyfm](https://github.com/wzc520pyfm)

## 0.4.17

`2025-08-07`

- 🇺🇸 修复 Login 缺失 `第三方登录` 的英文文案。[#1127](https://github.com/oceanbase/oceanbase-design/pull/1127)

## 0.4.16

`2025-07-27`

- 💄 ProCard 折叠图标使用实心箭头、图标颜色改为二级文本色。[#1111](https://github.com/oceanbase/oceanbase-design/pull/1111) [@wzc520pyfm](https://github.com/wzc520pyfm)

## 0.4.15

`2025-07-10`

- 💄 Login 的背景图片居中展示。[#1094](https://github.com/oceanbase/oceanbase-design/pull/1094)
- 💄 将 DateRanger 快捷选项的背景色从透明调整为白色。[#1095](https://github.com/oceanbase/oceanbase-design/pull/1095) [@wzc520pyfm](https://github.com/wzc520pyfm)

## 0.4.14

`2025-07-01`

- DateRanger
  - 🆕 新增 `getPopupContainer` 属性，用于设置弹出面板的挂载容器。[#1072](https://github.com/oceanbase/oceanbase-design/pull/1072) [@wzc520pyfm](https://github.com/wzc520pyfm)
  - 🐞 修复 DataRanger 设置 hideSecond 没有隐藏面板内秒数信息的问题。[#1071](https://github.com/oceanbase/oceanbase-design/pull/1071) [@wzc520pyfm](https://github.com/wzc520pyfm)
  - 🐞 修复下拉面板出现额外阴影的问题。[#1074](https://github.com/oceanbase/oceanbase-design/pull/1074) [@wzc520pyfm](https://github.com/wzc520pyfm)
- 🆕 Password 新增 `generatePassword` 属性，用于自定义生成密码。[#1084](https://github.com/oceanbase/oceanbase-design/pull/1084) [@Hx-xiang](https://github.com/Hx-xiang)

## 0.4.13

`2025-04-28`

- Login
  - 🆕 Login 新增 `passwordOptional` 属性，用于设置是否允许密码为空。[#1046](https://github.com/oceanbase/oceanbase-design/pull/1046) [@linhf123](https://github.com/linhf123)
  - 🆕 Login 新增 `componentProps` 属性，用于设置各个组件属性。[#1046](https://github.com/oceanbase/oceanbase-design/pull/1046) [@linhf123](https://github.com/linhf123)
- 🐞 修复 DateRanger `style` 和 `className` 应该仅对根组件生效、不应该对 RangePicker 生效的问题。[#1040](https://github.com/oceanbase/oceanbase-design/pull/1040) [@wzc520pyfm](https://github.com/wzc520pyfm)
- 💄 优化 Boundary 描述文案的间距和操作按钮的字体颜色。[#1047](https://github.com/oceanbase/oceanbase-design/pull/1047)

## 0.4.12

`2025-04-18`

- 🆕 Action.Button 和 Action.Link 新增 `divider` 属性，用于设置位于下拉菜单内时是否带分割线。[#1029](https://github.com/oceanbase/oceanbase-design/pull/1029)
- 🆕 BasicLayout 新增 `topHeader.versionNoticePath` 属性，用于设置顶部导航栏的版本公告。[#1008](https://github.com/oceanbase/oceanbase-design/pull/1008) [@zousongxia](https://github.com/zousongxia)
- 🆕 ProTable 新增 `innerBordered` 属性，用于设置内部边框。[#1037](https://github.com/oceanbase/oceanbase-design/pull/1037)
- DateRanger
  - ⭐️ 日期格式改为 `mask`，自动对齐日期和时间格式。[#1010](https://github.com/oceanbase/oceanbase-design/pull/1010) [@wzc520pyfm](https://github.com/wzc520pyfm)
  - 💄 优化日期选择面板交互，降低二次选择的复杂性和视觉干扰。[#1006](https://github.com/oceanbase/oceanbase-design/pull/1006) [@wzc520pyfm](https://github.com/wzc520pyfm)

## 0.4.11

`2025-03-31`

- 🆕 SideTip 组件新增 `draggable` 属性，可关闭拖拽功能 [#999](https://github.com/oceanbase/oceanbase-design/pull/999)

## 0.4.9

`2025-02-13`

- DateRanger
  - 🆕 DateRanger 新增 `autoAdjustOverflow` 属性，用于控制弹出面板是否自动调整位置。[#972](https://github.com/oceanbase/oceanbase-design/pull/972) [@wzc520pyfm](https://github.com/wzc520pyfm)
  - 🆕 DateRanger 新增 `overlayClassName` 和 `overlayStyle` 属性，用于设置弹出面板的样式。[#970](https://github.com/oceanbase/oceanbase-design/pull/970) [@wzc520pyfm](https://github.com/wzc520pyfm)
- 🐞 修复 ProCard `ghost` 模式下卡片阴影和内容区 padding 不正确的问题。[#967](https://github.com/oceanbase/oceanbase-design/pull/967)

## 0.4.8

`2025-02-05`

- DateRanger
  - 🆕 DateRanger 支持自定义快捷选项。[#952](https://github.com/oceanbase/oceanbase-design/pull/952) [@wzc520pyfm](https://github.com/wzc520pyfm)
  - ⭐️ DateRanger 支持自动校验和交换起止时间。[#953](https://github.com/oceanbase/oceanbase-design/pull/953) [@linhf123](https://github.com/linhf123)
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
