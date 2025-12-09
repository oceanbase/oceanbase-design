---
title: 更新日志
order: 6
group: 基础组件
---

`@oceanbase/design` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

---

## 1.0.0-alpha.8

`2025-12-08`

- 主题:
  - 🐞 修复英文环境下 token `fontWeightWeak` 值不正确的问题。[#1308](https://github.com/oceanbase/oceanbase-design/pull/1308)
  - 🐞 修复 `Inter-Medium` 和 `Inter-SemiBold` 远程字体链接不正确的问题。[#1309](https://github.com/oceanbase/oceanbase-design/pull/1309)
- 🐞 修复 Form.Item `renderProps` 不生效的问题。[#1310](https://github.com/oceanbase/oceanbase-design/pull/1310)

## 1.0.0-alpha.7

`2025-12-04`

- 📝 更新在 Next.js 中使用的文档。[#1291](https://github.com/oceanbase/oceanbase-design/pull/1291)
- 🌈 全局修改英文字体的字重，包括:
  - 更新 `Inter` 字体文件、样式定义和字重。[#1304](https://github.com/oceanbase/oceanbase-design/pull/1304)
  - 修改辅助描述的字重 token `fontWeightWeak` `300 => 400`。[#1304](https://github.com/oceanbase/oceanbase-design/pull/1304)
  - 在 Table、Descriptions、PageContainer 和 ProTable 等组件层面适配字重。[#1304](https://github.com/oceanbase/oceanbase-design/pull/1304)
- 🌈 包含 `href` 或 `data-aspm-param^="obcloud_openLink=` 的 `<a>` 链接，hover 时底部增加下划线。[#1297](https://github.com/oceanbase/oceanbase-design/pull/1297)
- 🐞 修复 Alert 未设置 `type` 时图标展示不正确的问题。[#1296](https://github.com/oceanbase/oceanbase-design/pull/1296)
- 💄 优化 Form.Item 校验信息的字体大小和间距。[#1293](https://github.com/oceanbase/oceanbase-design/pull/1293)
- Input
  - 💄 优化 Input suffix 后缀的字体大小。[#1294](https://github.com/oceanbase/oceanbase-design/pull/1294)
  - 💄 调整 Input `showCount` 的默认格式 `count / maxLength` => `count/maxLength`。[#1294](https://github.com/oceanbase/oceanbase-design/pull/1294)
- 💄 优化 InputNumber 前置和后置标签的字体大小和颜色。[#1295](https://github.com/oceanbase/oceanbase-design/pull/1295)

## 1.0.0-alpha.6

`2025-12-01`

- 🛠 重构全局样式实现，将 `global.css` 迁移为 CSS-in-JS 注入方式，提升样式管理的灵活性和一致性，并支持在非 Webpack 框架 (比如 Next.js、Vite) 中使用。[#1283](https://github.com/oceanbase/oceanbase-design/pull/1283)
- 📝 Cascader 和 Tooltip 新增自定义偏移的示例。[#1287](https://github.com/oceanbase/oceanbase-design/pull/1287)
- 🐞 修复 Alert `action` 操作区位置不正确的问题。[#1284](https://github.com/oceanbase/oceanbase-design/pull/1284)
- 💄 优化暗色和紧凑主题。[#1285](https://github.com/oceanbase/oceanbase-design/pull/1285)
- 💄 去掉 Button 的 `box-shadow` 阴影。[#1288](https://github.com/oceanbase/oceanbase-design/pull/1288)
- 💄 优化 DatePicker、Dropdown、Popover、Select、Tooltip 和 Menu 弹出层的圆角大小。[#1289](https://github.com/oceanbase/oceanbase-design/pull/1289)
- 💄 优化大尺寸 Input 和 InputNumber 的圆角大小。[#1289](https://github.com/oceanbase/oceanbase-design/pull/1289)

## 1.0.0-alpha.5

`2025-11-28`

- 主题:
  - 🆕 新增 CSS 变量模式支持，通过 ConfigProvider 的 `theme.cssVar` 配置启用。[#1280](https://github.com/oceanbase/oceanbase-design/pull/1280)
  - 🛠 改造 Design Token 样式运算的实现方案，使用专门的运算函数 (cal、unit 等)，以适配 CSS 变量模式。[#1281](https://github.com/oceanbase/oceanbase-design/pull/1281)
  - 📝 新增 CSS 变量模式使用文档和示例代码。[#1280](https://github.com/oceanbase/oceanbase-design/pull/1280)

## 1.0.0-alpha.4

`2025-11-27`

- 🌐 站点支持中英文语言切换。[#1265](https://github.com/oceanbase/oceanbase-design/pull/1265)
- 主题
  - 🌈 更新 Design Token 三级填充色 colorFillTertiary、四级填充色 colorFillQuaternary 的值。[#1273](https://github.com/oceanbase/oceanbase-design/pull/1273)
  - 🌈 更新 Design Token 布局背景色 `colorBgLayout` 的值。[#1275](https://github.com/oceanbase/oceanbase-design/pull/1275)
  - 💄 优化字重的样式实现，使用 Design Token `fontWeight` 和 `fontWeightStrong` 替代硬编码值，确保字重随主题变化。[#1265](https://github.com/oceanbase/oceanbase-design/pull/1265)
- Alert
  - 🔥 新版 Alert 组件，调整颜色、字体、间距等样式。[#1266](https://github.com/oceanbase/oceanbase-design/pull/1266)
  - 🆕 新增 `mini` 属性，支持超轻量信息提醒模式，尺寸更紧凑，无边框，宽度自适应内容。[#1266](https://github.com/oceanbase/oceanbase-design/pull/1266)
  - 🗑️ 移除 `colored` 属性支持。[#1266](https://github.com/oceanbase/oceanbase-design/pull/1266)
  - 💄 调整操作按钮的位置，将操作按钮从右上角改为内容下方。[#1266](https://github.com/oceanbase/oceanbase-design/pull/1266)
  - 💄 Alert 优化链接样式，链接默认带下划线，且链接颜色与 message 保持一致。[#1266](https://github.com/oceanbase/oceanbase-design/pull/1266)
- Badge
  - 💄 Badge 状态点尺寸改为 `8px`。[#1267](https://github.com/oceanbase/oceanbase-design/pull/1267)
  - 💄 优化 Badge `default` 状态点的颜色。[#1267](https://github.com/oceanbase/oceanbase-design/pull/1267)
- Card
  - 🔥 新版 Card 组件，根据设计规范更新样式，调整标题区、内容区和标签页的间距。[#1270](https://github.com/oceanbase/oceanbase-design/pull/1270)
  - 🆕 新增 `collapsible` 属性，用于支持内容区展开和收起。[#1270](https://github.com/oceanbase/oceanbase-design/pull/1270)
- 💄 Collapse 更新展开图标的颜色。[#1274](https://github.com/oceanbase/oceanbase-design/pull/1274)
- 🔥 新版 Drawer 组件，根据设计规范更新样式，包括标题区增加分割线、标题字体大小 `16px => 18px`、调整内容区间距等。[#1269](https://github.com/oceanbase/oceanbase-design/pull/1269)
- Form
  - 🆕 Form.Item 新增 `description` 属性，用于设置表单控件前的描述信息。[#1272](https://github.com/oceanbase/oceanbase-design/pull/1272)
  - 💄 Form.Item 根据设计规范更新 `extra` 的字体大小和间距。[#1272](https://github.com/oceanbase/oceanbase-design/pull/1272)
- Modal
  - 🔥 新版 Modal 组件，根据设计规范更新样式，包括标题区增加分割线、标题字体大小 `16px => 18px`、优化内容区间距等。[#1268](https://github.com/oceanbase/oceanbase-design/pull/1268)
  - 🐞 修复 Modal 静态方法样式在未使用 `<Modal />` 时不生效的问题，需要在全局配置中注册样式。[#1271](https://github.com/oceanbase/oceanbase-design/pull/1271)
  - 💄 Modal 静态方法中的面性图标改为线性图标。[#1268](https://github.com/oceanbase/oceanbase-design/pull/1268)
- 💄 Table 使用 `CaretRightOutlined` 作为展开图标。[#1274](https://github.com/oceanbase/oceanbase-design/pull/1274)
- 💄 优化 Tabs 垂直模式下选项卡分割线的间距。[#1263](https://github.com/oceanbase/oceanbase-design/pull/1263)
- Tag
  - 🆕 Tag 新增 `pill` 属性，用于设置胶囊标签样式。[#1264](https://github.com/oceanbase/oceanbase-design/pull/1264)
  - 💄 非胶囊 Tag 的字体加粗。[#1264](https://github.com/oceanbase/oceanbase-design/pull/1264)

## 1.0.0-alpha.3

`2025-10-23`

- Design Token
  - 🌈 更新 `功能色` 和 `中性色` 相关的 Design Token。[#1244](https://github.com/oceanbase/oceanbase-design/pull/1244)
  - 🌈 更新 `lineHeight` 和 `controlHeightSM` 相关的 Design Token。[#1245](https://github.com/oceanbase/oceanbase-design/pull/1245)
  - 🌈 更新 controlHeightSM 控件高度 `20` => `24`。[#1249](https://github.com/oceanbase/oceanbase-design/pull/1249)
  - 🌈 更新 Menu `groupTitleColor` 分组标题颜色 `#8592AD` => `#5C6B8A`。[#1223](https://github.com/oceanbase/oceanbase-design/pull/1223)
  - 🌈 更新 `fontWeight` 和 `fontWeightStrong` Design Token，并且支持根据中英文切换不同的值。[#1246](https://github.com/oceanbase/oceanbase-design/pull/1246)
  - 🌈 新增 `fontWeightWeak`、`borderRadiusMD` 和 `colorFuchsia 相关` 的自定义 Design Token。[#1247](https://github.com/oceanbase/oceanbase-design/pull/1247)
- 🔥 新版 Tag 组件，优化颜色、间距、图标等样式。[#1251](https://github.com/oceanbase/oceanbase-design/pull/1251)
- 💄 优化 Select, TreeSelect 和 Cascader 中的多选项样式。[#1251](https://github.com/oceanbase/oceanbase-design/pull/1251)
- Button
  - 💄 优化 Button 的行内间距和圆角样式。[#1248](https://github.com/oceanbase/oceanbase-design/pull/1248)
  - 💄 优化小尺寸 Button 的字体大小 `13` => `12`。[#1250](https://github.com/oceanbase/oceanbase-design/pull/1250)
- 💄 带边框的 Card 嵌套时圆角逐级递减。[#1235](https://github.com/oceanbase/oceanbase-design/pull/1235)
- 💄 优化 Drawer 加载中的间距样式。[#1238](https://github.com/oceanbase/oceanbase-design/pull/1238)
- 🐞 修复 App、Drawer、Empty 和 Result 组件类名重复的问题。[#1254](https://github.com/oceanbase/oceanbase-design/pull/1254)

## 1.0.0-alpha.2

`2025-09-24`

- Design Token
  - 🌈 更新 `fontSizeLG` 和 `fontSizeHeading` 字体大小。[#1200](https://github.com/oceanbase/oceanbase-design/pull/1200)
  - 🌈 更新 `controlHeight` 控件高度 `32` => `28`。[#1201](https://github.com/oceanbase/oceanbase-design/pull/1201)
  - 🌈 更新 `borderRadiusLG` 大号圆角 `6` => `8`。[#1206](https://github.com/oceanbase/oceanbase-design/pull/1206)
  - 🌈 更新 Table `cellPaddingBlock` 单元格纵向间距。[#1208](https://github.com/oceanbase/oceanbase-design/pull/1208)
- Badge
  - 🐞 修复 Badge 状态文本字体大小不会继承父元素的问题，便于和其他组件组合使用。[#1214](https://github.com/oceanbase/oceanbase-design/pull/1214)
  - 💄 调整 Badge `processing` 态的颜色和圆点大小。[#1205](https://github.com/oceanbase/oceanbase-design/pull/1205)
- Card
  - 💄 Card `tabs` 默认尺寸改为 `middle`。[#1216](https://github.com/oceanbase/oceanbase-design/pull/1216)
  - 💄 优化 Card 嵌套时的圆角样式，内层卡片的圆角逐级递减。[#1211](https://github.com/oceanbase/oceanbase-design/pull/1211)
- 💄 优化 Descriptions `label` 的字体颜色和垂直布局下的间距。[#1204](https://github.com/oceanbase/oceanbase-design/pull/1204)
- 💄 优化 Skeleton 的骨架屏圆角 `2` => `4`。[#1212](https://github.com/oceanbase/oceanbase-design/pull/1212)

## 1.0.0-alpha.1

`2025-09-10`

- 🌈 更新主题色、文本色、填充色相关的 Design Token。[#1186](https://github.com/oceanbase/oceanbase-design/pull/1186)
- 🌈 [图标]更新双色图标的主题色 `#006AFF` => `#0D6CF2`。[#1191](https://github.com/oceanbase/oceanbase-design/pull/1191)

## 1.0.0-alpha.0

`2025-09-08`

- 🌈 更新主题色、字体大小、圆角相关的 Design Token。[#1174](https://github.com/oceanbase/oceanbase-design/pull/1174)
- 💄 去掉 Button 的自定义样式，包括阴影、边框和背景色。[#1173](https://github.com/oceanbase/oceanbase-design/pull/1173)
- 💄 去掉 Empty 和 Result 的大尺寸样式。[#1175](https://github.com/oceanbase/oceanbase-design/pull/1175)
- 💄 更新 Table 样式，包括去掉斑马纹、增加行分隔线、调整单元格间距等。[#1176](https://github.com/oceanbase/oceanbase-design/pull/1176)
- 💄 调整 Tabs 的字体颜色和火柴棍长度。[#1177](https://github.com/oceanbase/oceanbase-design/pull/1177)

## 0.4.19

`2025-12-04`

- 🌐 优化日语 (ja-JP) 的文案翻译。[#1299](https://github.com/oceanbase/oceanbase-design/pull/1299)
- Segmented
  - 🐞 修复 Segmented 带 `icon` 时的样式问题。[#1300](https://github.com/oceanbase/oceanbase-design/pull/1300)
  - ⭐️ Segmented 默认开启 `ellipsis` 省略和 tooltip。[#1300](https://github.com/oceanbase/oceanbase-design/pull/1300)
- 💄 优化 Typography 切换编辑态时的位置抖动。[#1301](https://github.com/oceanbase/oceanbase-design/pull/1301)

## 0.4.18

`2025-11-24`

- 🌐 新增日语 (ja-JP) 国际化支持。[#1258](https://github.com/oceanbase/oceanbase-design/pull/1258)

## 0.4.17

`2025-09-24`

- Tabs
  - 🆕 Tabs 新增 `divider` 属性，用于设置分割线。[#1179](https://github.com/oceanbase/oceanbase-design/pull/1179)
  - 🐞 修复 Tabs `ref` 不生效的问题。[#1178](https://github.com/oceanbase/oceanbase-design/pull/1178)
- 🐞 修复 Typography `Text` 和 `Paragraph` 类名样式 (行高、字体颜色和大小) 不生效的问题。[#1180](https://github.com/oceanbase/oceanbase-design/pull/1180)
- TypeScript
  - 🤖 导出 FormItem 类型，以兼容 antd 的类型用法。[#1171](https://github.com/oceanbase/oceanbase-design/pull/1171)

## 0.4.16

`2025-08-29`

- ⭐️ 优化自定义字体的加载顺序为 `系统字体 -> 自托管字体 -> 在线字体`，避免发起网络请求。[#1158](https://github.com/oceanbase/oceanbase-design/pull/1158)
- 🐞 修复 Descriptions.Item 子元素为 Typography 时复制 tooltip 位置不正确的问题。[#1159](https://github.com/oceanbase/oceanbase-design/pull/1159)
- 🐞 修复 `sideEffects` 配置问题，以支持 tree shaking。[#1161](https://github.com/oceanbase/oceanbase-design/pull/1161)

## 0.4.15

`2025-08-21`

- 🐞 修复 Form.Item `action` 属性在 antd 5.27.0 版本下不生效的问题。[#1141](https://github.com/oceanbase/oceanbase-design/pull/1141)

## 0.4.14

`2025-08-07`

- 🆕 Modal 新增 `extra` 属性，用于设置底部额外内容。[#1130](https://github.com/oceanbase/oceanbase-design/pull/1121)
- 🐞 修复 Tag 设置 `font-size` 样式不生效的问题。[#1121](https://github.com/oceanbase/oceanbase-design/pull/1121)

## 0.4.13

`2025-07-27`

- 🆕 Segmented `options` 新增 `badge` 属性，用于设置选项卡后面的徽标。[#1100](https://github.com/oceanbase/oceanbase-design/pull/1100) [@wzc520pyfm](https://github.com/wzc520pyfm)
- 🆕 Tabs `options` 新增 `badge` 属性，用于设置选项卡后面的徽标。原 `tag` 属性标记为即将废弃，后续不推荐使用。[#1110](https://github.com/oceanbase/oceanbase-design/pull/1110) [@wzc520pyfm](https://github.com/wzc520pyfm)
- 💄 优化 Slider 在最大值和最小值相等时的 `marks` 样式。[#1105](https://github.com/oceanbase/oceanbase-design/pull/1105)

## 0.4.12

`2025-07-10`

- 🐞 修复 `boxShadow` 相关 Design Token 不正确的问题。[#1096](https://github.com/oceanbase/oceanbase-design/pull/1096)
- 💄 更新 boxShadowTertiary token 的值。[#1097](https://github.com/oceanbase/oceanbase-design/pull/1097)

## 0.4.11

`2025-07-01`

- 🐞 修复 Form.Item `layout` 属性不生效的问题。[#1085](https://github.com/oceanbase/oceanbase-design/pull/1085)
- 🐞 修复 Table 已排序列头的分割线丢失的问题。[#1076](https://github.com/oceanbase/oceanbase-design/pull/1076) [@wzc520pyfm](https://github.com/wzc520pyfm)

## 0.4.10

`2025-04-18`

- 📖 新增 AutoComplete 的示例和文档。[#1012](https://github.com/oceanbase/oceanbase-design/pull/1012)
- 📖 新增 Anchor 的文档和示例。[#1013](https://github.com/oceanbase/oceanbase-design/pull/1013)
- 📖 新增 Steps 的文档和示例。[#1014](https://github.com/oceanbase/oceanbase-design/pull/1014)
- 📖 新增 Menu 的文档和示例。[#1015](https://github.com/oceanbase/oceanbase-design/pull/1015)
- 📖 新增 Pagination 的文档和示例。[#1016](https://github.com/oceanbase/oceanbase-design/pull/1016)
- 📖 新增 Upload 的文档和示例。[#1017](https://github.com/oceanbase/oceanbase-design/pull/1017)
- 📖 新增 Tree 的文档和示例。[#1018](https://github.com/oceanbase/oceanbase-design/pull/1018)
- 📖 新增 TreeSelect 的文档和示例。[#1019](https://github.com/oceanbase/oceanbase-design/pull/1019)
- 📖 [图标] 展示更多的图标。[#1024](https://github.com/oceanbase/oceanbase-design/pull/1024)
- 🆕 Form.Item 新增 `action` 属性，用于设置操作项。[#1028](https://github.com/oceanbase/oceanbase-design/pull/1028)
- Table
  - 🆕 Table 新增 `innerBordered` 属性，用于设置内部边框。[#1036](https://github.com/oceanbase/oceanbase-design/pull/1036)
  - 💄 优化 Table 在无水平间距卡片内的样式，包括第一列和卡片标题对齐、最后一列和卡片操作区对齐、分页器左右增加间距。[#1030](https://github.com/oceanbase/oceanbase-design/pull/1030)
  - 💄 带边框 Table 的表头改为灰底。[#1035](https://github.com/oceanbase/oceanbase-design/pull/1035)
- 🐞 修复多个 Empty 同时出现时 svg id 冲突导致插图展示异常的问题。[#1027](https://github.com/oceanbase/oceanbase-design/pull/1027)
- 🐞 修复编辑态的 Typography 在 Descriptions 内被遮挡和没有垂直居中的问题。[#1033](https://github.com/oceanbase/oceanbase-design/pull/1033)
- 💄 优化 Descriptions 在垂直布局下的间距，并且多列垂直和单列垂直的间距不同。[#1031](https://github.com/oceanbase/oceanbase-design/pull/1031) [#1032](https://github.com/oceanbase/oceanbase-design/pull/1032)

## 0.4.9

`2025-02-20`

- 📖 Table 设计文档新增 `高亮显式` 规范。[#986](https://github.com/oceanbase/oceanbase-design/pull/986)
- 📖 Typography 新增可复制和在 Modal 中编辑的示例。[#985](https://github.com/oceanbase/oceanbase-design/pull/985)
- ⭐️ ConfigProvider 移除 `injectStaticFunction` 属性，改为自动判断是否注入可消费全局配置的静态方法。[#981](https://github.com/oceanbase/oceanbase-design/pull/981)
- Table
  - 🐞 修复 Table 可展开&固定列时的间距问题。[#982](https://github.com/oceanbase/oceanbase-design/pull/982)
  - 🐞 修复 Table 可展开&可滚动时不应该展示斑马条的问题。[#983](https://github.com/oceanbase/oceanbase-design/pull/983)
- 💄 Alert 改为使用线性图标，以对齐最新的设计规范。[#987](https://github.com/oceanbase/oceanbase-design/pull/987)
- 💄 Dropdown.Button 默认图标改为 `DownOutlined` 向下箭头。[#984](https://github.com/oceanbase/oceanbase-design/pull/984)

## 0.4.8

`2025-02-13`

- 📖 优化设计基础、设计原则和组件设计文档的内容和样式。[#966](https://github.com/oceanbase/oceanbase-design/pull/966)
- 🐞 修复 `@ctrl/tinycolor` 依赖缺失的问题。[#973](https://github.com/oceanbase/oceanbase-design/pull/973)
- Tooltip:
  - 🔨 去掉 Tooltip `mouseFollow` 模式下控制台出现的 NaN 告警。[#968](https://github.com/oceanbase/oceanbase-design/pull/968)
  - 🔨 将 [react-sticky-mouse-tooltip](https://github.com/marlo22/react-sticky-mouse-tooltip) 代码内置到 Tooltip，避免控制台告警和错误都指向 `MouseTooltip.jsx`、干扰问题排查。[#969](https://github.com/oceanbase/oceanbase-design/pull/969)

## 0.4.7

`2025-02-05`

- 🔥 新增 11 篇设计规范文档，包括 5 篇设计原则、6 篇设计基础。[#954](https://github.com/oceanbase/oceanbase-design/pull/954)
- 🔥 新增 6 篇组件规范文档，包括 Alert、Button、Tabs、Table、Modal 和 DateRanger。[#955](https://github.com/oceanbase/oceanbase-design/pull/955)
- 📖 优化官网在移动端的样式和访问体验。[#956](https://github.com/oceanbase/oceanbase-design/pull/956)
- 💄 默认去掉 Form.Item 包裹 Switch 时的可选样式。[#949](https://github.com/oceanbase/oceanbase-design/pull/949)
- 💄 优化 Table 空状态的高度，大中小尺寸分别为 360px、260px 和 160px。[#947](https://github.com/oceanbase/oceanbase-design/pull/947)

## 0.4.6

`2025-01-15`

- 🌈 自定义 Tabs `horizontalItemGutter` token 值，全局设置页标签间隙。[#935](https://github.com/oceanbase/oceanbase-design/pull/935)
- 🆕 ConfigProvider 新增 `card.divided` 属性，用于配置 Card 是否展示分割线。[#939](https://github.com/oceanbase/oceanbase-design/pull/939)
- Table
  - 🐞 修复中小尺寸的可展开 Table 单元格高度不正确的问题。[#924](https://github.com/oceanbase/oceanbase-design/pull/924)
  - 💄 Table 点击行可展开时，设置行样式为 `cursor: pointer`。[#925](https://github.com/oceanbase/oceanbase-design/pull/925)
  - 💄 优化 Table 在无分割线 Card 和 ProCard 内的间距。[#933](https://github.com/oceanbase/oceanbase-design/pull/933)
  - 💄 优化 Table 在无间距 ProCard 内的样式，包括第一列和卡片标题对齐、最后一列和卡片操作区对齐、分页器左右增加间距。[#923](https://github.com/oceanbase/oceanbase-design/pull/923)
  - 💄 优化 Table 顶部圆角的样式。[#941](https://github.com/oceanbase/oceanbase-design/pull/941)

## 0.4.5

`2024-12-30`

- 🐞 修复 Table 底部圆角和列左侧内间距不正确的问题。[#910](https://github.com/oceanbase/oceanbase-design/pull/910)

## 0.4.4

`2024-12-16`

- 🐞 修复 antd 重置样式的引入路径 `antd/dist/reset.css` => `~antd/dist/reset.css`，以适配 Umi 3 和 Bigfish 3 的解析逻辑。[#894](https://github.com/oceanbase/oceanbase-design/pull/894)

## 0.4.3

`2024-12-14`

- 📖 修复 demo 展开全部代码不生效的问题。[#888](https://github.com/oceanbase/oceanbase-design/pull/888)
- 📖 修复部分组件不展示 demo 操作栏的问题。[#888](https://github.com/oceanbase/oceanbase-design/pull/888)
- ⚡ 设置 `sideEffects`，以支持 tree shaking。[#886](https://github.com/oceanbase/oceanbase-design/pull/886)
- Collapse [#882](https://github.com/oceanbase/oceanbase-design/pull/882)
  - 📖 新增 Collapse 的文档和示例。
  - 💄 将 Collapse 默认展开图标改为实心箭头。
  - 💄 弱化 Collapse 边框，将边框颜色改为 `#E2E8F3`。
- Table
  - 🐞 修复普通 Table 的单元格出现底部边框的问题。[#879](https://github.com/oceanbase/oceanbase-design/pull/879)
  - 💄 优化 Table 带边框时的底部圆角样式。[#880](https://github.com/oceanbase/oceanbase-design/pull/880)
  - 💄 优化 Table 空状态在 Popover、Tooltip 下的高度。[#891](https://github.com/oceanbase/oceanbase-design/pull/891)

## 0.4.2

`2024-11-29`

- 📖 新增 DatePicker 的文档和示例。[#852](https://github.com/oceanbase/oceanbase-design/pull/852)
- 📖 新增 TimePicker 的文档和示例。[#853](https://github.com/oceanbase/oceanbase-design/pull/853)
- 📖 新增 Popconfirm 的文档和示例。[#851](https://github.com/oceanbase/oceanbase-design/pull/851)
- 📖 新增 Popover 的文档和示例。[#850](https://github.com/oceanbase/oceanbase-design/pull/850)
- 📖 新增 Progress 的文档和示例。[#834](https://github.com/oceanbase/oceanbase-design/pull/834)
- 🌈 将 Design Token lineWidthFocus 设为 0，以去掉组件聚焦时的线条样式。[#841](https://github.com/oceanbase/oceanbase-design/pull/841)
- ⭐️ 优先从系统加载 `Inter`、`Consolas` 和 `Helvetica Neue` 字体。[#861](https://github.com/oceanbase/oceanbase-design/pull/861)
- 🐞 修复 Slider 两端标签的对齐样式在部分场景下不生效的问题。[#832](https://github.com/oceanbase/oceanbase-design/pull/832)
- 💄 将全局的滚动条颜色改为 `#e2e8f3`。[#846](https://github.com/oceanbase/oceanbase-design/pull/846)
- Empty
  - 💄 Empty 主标题的字体大小从 24px 调整为 20px。[#845](https://github.com/oceanbase/oceanbase-design/pull/845)
  - 💄 优化 Empty 超长内容的样式，限制描述区的最大宽度为 600px、步骤区的最大宽度为 1000px。[#844](https://github.com/oceanbase/oceanbase-design/pull/844)
- Result
  - 💄 Result 主标题的字体大小从 24px 调整为 20px。[#845](https://github.com/oceanbase/oceanbase-design/pull/845)
  - 💄 优化 Result 超长内容的样式，限制副标题的最大宽度为 600px、内容区的最大宽度为 1000px。[#842](https://github.com/oceanbase/oceanbase-design/pull/842)
- 💄 优化 Switch 未选中态的背景色，和置灰态的背景色进行区分。[#833](https://github.com/oceanbase/oceanbase-design/pull/833)
- Table
  - 💄 优化 Table 嵌套子表格和可展开内容的样式，以对齐最新的设计规范。[#865](https://github.com/oceanbase/oceanbase-design/pull/865)
  - 💄 将 Table 虚拟滚动条的颜色改为 `#e2e8f3`，和全局滚动条保持一致。[#864](https://github.com/oceanbase/oceanbase-design/pull/864)
- Tooltip
  - 🐞 修复 Tooltip 开启 `mouseFollow` 后没有继承 `.ant-tooltip` 类名和样式的问题。[#849](https://github.com/oceanbase/oceanbase-design/pull/849)
  - 💄 优化 Tooltip 可关闭图标的颜色样式。[#848](https://github.com/oceanbase/oceanbase-design/pull/848)
  - 💄 限制 Tooltip 的最大宽度为 300px、最大高度为 250px，内容超出时横向折行、纵向滚动。[#847](https://github.com/oceanbase/oceanbase-design/pull/847)
- Typography
  - 💄 Typography 编辑模式文本触发器增加 hover 边框，以提示用户可以点击进行编辑。[#839](https://github.com/oceanbase/oceanbase-design/pull/839)
  - 💄 优化 Typography 编辑模式样式，避免只读态和编辑态之间切换时出现抖动。[#839](https://github.com/oceanbase/oceanbase-design/pull/839)
- 🔨 打包后的 `dist` 目录增加 `reset.css` 样式文件，以对齐 antd。[#855](https://github.com/oceanbase/oceanbase-design/pull/855)
- 🔨 适配 CodeSandbox 环境下编译报错、无法预览的问题。[#855](https://github.com/oceanbase/oceanbase-design/pull/855)

## 0.4.1

`2024-11-11`

- 📖 新增 Checkbox 的文档和示例。[#812](https://github.com/oceanbase/oceanbase-design/pull/812)
- 📖 新增 Dropdown 的文档和示例。[#803](https://github.com/oceanbase/oceanbase-design/pull/803)
- 📖 新增 Slider 的文档和示例。[#815](https://github.com/oceanbase/oceanbase-design/pull/815)
- ⭐️ ConfigProvider 新增 `appProps` 属性，用于控制内嵌 App 是否渲染组件、以便让被包裹元素继承 `.ant-app` 样式。[#824](https://github.com/oceanbase/oceanbase-design/pull/824)
- 🐞 去掉自定义的 Design Token `fontSizeHeading` 和 `lineHeightHeading`，修复标题大小错误的问题。[#813](https://github.com/oceanbase/oceanbase-design/pull/813)
- 🐞 修复 Dropdown.Button 为主按钮时分割线超出和背景色不正确的问题。[#803](https://github.com/oceanbase/oceanbase-design/pull/803)
- 🐞 [图标] 删除自定义的 UserOutlined 图标，避免和 `@ant-design/icons` 图标冲突以及在 Login 组件中的展示异常。[#802](https://github.com/oceanbase/oceanbase-design/pull/802)
- 💄 弱化 Breadcrumb 最后一项的字体颜色，将其改为 `#5c6b8a`。[#816](https://github.com/oceanbase/oceanbase-design/pull/816)
- Card
  - 💄 优化小尺寸 Card 带页签时的头部间距样式。[#821](https://github.com/oceanbase/oceanbase-design/pull/821)
  - 💄 优化 Card 无分割线时的底部间距。[#819](https://github.com/oceanbase/oceanbase-design/pull/819)
- 💄 优化 Checkbox 超长内容的垂直对齐样式，从居中对齐改为顶部对齐。[#812](https://github.com/oceanbase/oceanbase-design/pull/812)
- 💄 更新 Empty 的默认插图。[#814](https://github.com/oceanbase/oceanbase-design/pull/814)
- 💄 优化 Radio 超长内容的垂直对齐样式，从居中对齐改为顶部对齐。[#811](https://github.com/oceanbase/oceanbase-design/pull/811)
- 💄 优化 Slider 轨道覆盖部分的颜色，以及左右两端的标签对齐样式。[#815](https://github.com/oceanbase/oceanbase-design/pull/815)
- Table
  - 💄 优化 Table 底部分割线的展示逻辑，无分页器时也应该展示。[#822](https://github.com/oceanbase/oceanbase-design/pull/822)
  - 💄 将非嵌套 Table 的空状态最小高度设为 `360px`。[#818](https://github.com/oceanbase/oceanbase-design/pull/818)

## 0.4.0

`2024-10-09`

- 📖 新增 Skeleton 的文档和示例。[#724](https://github.com/oceanbase/oceanbase-design/pull/724)
- 📖 新增 Divider 的示例和文档。[#723](https://github.com/oceanbase/oceanbase-design/pull/723)
- 支持 Next.js:
  - 📖 新增 @oceanbase/design 在 Nextjs 中的 [使用文档](https://design.oceanbase.com/docs/design-use-with-nextjs) 和 [项目模板](https://stackblitz.com/edit/nextjs-oceanbase-design)。[#785](https://github.com/oceanbase/oceanbase-design/pull/785)
  - 🔨 lottie-web 改为懒加载，以支持 Next.js 的 SSR 服务端渲染。[#751](https://github.com/oceanbase/oceanbase-design/pull/751)
  - 🔨 所有组件均显式引入 React，以适配 Next.js 构建。[#783](https://github.com/oceanbase/oceanbase-design/pull/783)
- Design Token 更新:
  - 🌈 更新 `fontSizeHeading` 和 `lineHeightHeading`，减小标题的字体大小和行高。[#727](https://github.com/oceanbase/oceanbase-design/pull/727)
  - 🌈 更新 Tag `defaultColor` 为 `#5c6b8a`，弱化字体颜色。[#786](https://github.com/oceanbase/oceanbase-design/pull/786)
  - 🌈 更新 Tooltip `colorBgSpotlight` 为 `#ffffff`、`colorTextLightSolid` 为 `#132039`，将默认背景改为白色、默认字体改为黑色。[#653](https://github.com/oceanbase/oceanbase-design/pull/653)
- 字体更新:
  - ⭐️ 更新默认字体、英文字体和代码字体，并且会根据语言设置自动切换默认字体和英文字体。[#726](https://github.com/oceanbase/oceanbase-design/pull/726)
  - ⭐️ 内置 `Inter`、`Consolas` 和 `Helvetica Neue` 字体，保证字体效果一致性。[#732](https://github.com/oceanbase/oceanbase-design/pull/732)
- 图标更新:
  - 🔥 新增 36 个线框图标、37 个实底图标和 76 个彩色图标。[#733](https://github.com/oceanbase/oceanbase-design/pull/733)
- 🆕 Tabs `items` 和 `TabPane` 新增 `divider` 属性，用于设置选项卡为分割线。[#659](https://github.com/oceanbase/oceanbase-design/pull/659)
- 🐞 将 `@theme` less 变量改为延迟加载，修复其无法被覆盖的问题。[#725](https://github.com/oceanbase/oceanbase-design/pull/725)

## 0.3.8

`2024-09-23`

- 🔥 新增 `设计` 和 `博客` 模块，并上线 10 篇设计规范文档和 2 篇博客。[#682](https://github.com/oceanbase/oceanbase-design/pull/682)
- 📖 主题文档新增 Design Token 列表，便于开发侧查阅。[#701](https://github.com/oceanbase/oceanbase-design/pull/701)
- 💄 升级 [@oceanbase/aliyun-theme](https://www.npmjs.com/package/@oceanbase/aliyun-theme) 主题包，并更新阿里云主题的 less 样式文件。[#668](https://github.com/oceanbase/oceanbase-design/pull/668)
- 🐞 修复 Space 在新版浏览器下可能出现的间距抖动问题。[#722](https://github.com/oceanbase/oceanbase-design/pull/722)
- 🐞 修复 Tag 同时设置 `icon` 和 `ellipsis` 时省略样式异常的问题。[#687](https://github.com/oceanbase/oceanbase-design/pull/687) [@linhf123](https://github.com/linhf123)

## 0.3.7

`2024-07-26`

- 📖 补充 Button、Input 和 Switch 的示例和文档。[#640](https://github.com/oceanbase/oceanbase-design/pull/640) [#657](https://github.com/oceanbase/oceanbase-design/pull/657) [#658](https://github.com/oceanbase/oceanbase-design/pull/658)
- 📖 新增阿里云和 less 主题使用文档，优化暗色主题使用文档。[#644](https://github.com/oceanbase/oceanbase-design/pull/644)
- ⭐️ 新增阿里云主题的 less 变量文件，方便在 less 中使用。[#643](https://github.com/oceanbase/oceanbase-design/pull/643)
- 💄 更新 Design Token `colorBgBase` 的颜色值 `#132039` => `#000000`。[#642](https://github.com/oceanbase/oceanbase-design/pull/642)
- 💄 优化 Table 表头的字体颜色，以对齐设计规范。[#641](https://github.com/oceanbase/oceanbase-design/pull/641)

## 0.3.6

`2024-07-10`

- 🐞 修复 Table 空状态插图缺失的问题。[#630](https://github.com/oceanbase/oceanbase-design/pull/630)

## 0.3.5

`2024-06-27`

- 🆕 ConfigProvider 新增 `theme.isAliyun` 属性，用于开启阿里云主题。[#602](https://github.com/oceanbase/oceanbase-design/pull/602)
- 🐞 修复 Modal, message, notification 静态函数无法触发的问题。[#606](https://github.com/oceanbase/oceanbase-design/pull/606)
- Table
  - 🐞 修复 Table 批量操作栏未关联 `rowSelection` 的问题。[#591](https://github.com/oceanbase/oceanbase-design/pull/591)
  - 🐞 修复 Table 批量操作栏国际化不生效的问题。[#591](https://github.com/oceanbase/oceanbase-design/pull/591)
  - 💄 优化 Table 在无间距卡片内的展示样式，包括第一列和卡片标题对齐、最后一列和卡片操作区对齐、分页器左右增加间距。[#618](https://github.com/oceanbase/oceanbase-design/pull/618)
- 💄 优化 Alert 的间距样式，以对齐设计规范。[#615](https://github.com/oceanbase/oceanbase-design/pull/615)
- Empty
  - ⭐️ Empty 新增 PRESENTED_IMAGE_DATABASE 插图，用于数据库实例的空状态场景。[#607](https://github.com/oceanbase/oceanbase-design/pull/607)
  - 💄 更新 Empty 的 PRESENTED_IMAGE_COLORED 插图。[#607](https://github.com/oceanbase/oceanbase-design/pull/607)
  - 💄 优化 Empty 操作区的按钮样式，加大行高和圆角。[#608](https://github.com/oceanbase/oceanbase-design/pull/608)
- 💄 优化 Result 样式，包括标题加粗、加大操作区的按钮行高和圆角。[#609](https://github.com/oceanbase/oceanbase-design/pull/609)
- 💄 优化 Select 加载器的颜色，使其更具识别度。[#616](https://github.com/oceanbase/oceanbase-design/pull/616)

## 0.3.4

`2024-05-11`

- 💄 优化 Empty 步骤提示的背景颜色，以对齐设计规范。[#586](https://github.com/oceanbase/oceanbase-design/pull/587)
- 💄 将 Breadcrumb 字体大小改为 12px，以对齐设计规范。[#587](https://github.com/oceanbase/oceanbase-design/pull/587)

## 0.3.3

`2024-04-25`

- ConfigProvider
  - 🐞 修复 ConfigProvider 开启 `theme.customFont` 并且多次嵌套后 `fontFamily` 不正确的问题。[#572](https://github.com/oceanbase/oceanbase-design/pull/572)
  - 🐞 修复 ConfigProvider 自定义 `theme.token.fontFamily` 不生效的问题。[#573](https://github.com/oceanbase/oceanbase-design/pull/573)
  - 🐞 修复 ConfigProvider 多次使用会默认多次注入 StaticFunction，导致 Modal、message 和 notification 静态方法不会正常展示的问题。[#574](https://github.com/oceanbase/oceanbase-design/pull/574)
- 🐞 修复主题 Token `boxShadowSecondary` 通过静态 token 对象和 less 变量访问时值不正确的问题。[#569](https://github.com/oceanbase/oceanbase-design/pull/569)
- 💄 优化 Radio.Button 选中置灰态的背景颜色，避免和字体颜色区分不清。[#570](https://github.com/oceanbase/oceanbase-design/pull/570)

## 0.3.2

`2024-04-12`

- 📢 Input `placeholder` 默认为 `请输入`。[#540](https://github.com/oceanbase/oceanbase-design/pull/540)
- 📢 InputNumber `placeholder` 默认为 `请输入`。[#548](https://github.com/oceanbase/oceanbase-design/pull/548)
- 📢 Select `placeholder` 默认为 `请选择`。[#546](https://github.com/oceanbase/oceanbase-design/pull/546)
- 📢 TreeSelect `placeholder` 默认为 `请选择`。[#547](https://github.com/oceanbase/oceanbase-design/pull/547)
- ConfigProvider
  - 🆕 ConfigProvider 新增 `locale.Input.placeholder` 属性，用于配置 Input 的默认 placeholder。[#540](https://github.com/oceanbase/oceanbase-design/pull/540)
  - 🆕 ConfigProvider 新增 `locale.global.inputPlaceholder` 和 `locale.InputNumber.placeholder` 属性，用于配置 InputNumber 的默认 placeholder。[#548](https://github.com/oceanbase/oceanbase-design/pull/548)
  - 🆕 ConfigProvider 新增 `locale.Select.placeholder` 属性，用于配置 Select 的默认 placeholder。[#546](https://github.com/oceanbase/oceanbase-design/pull/546)
  - 🆕 ConfigProvider 新增 `locale.TreeSelect.placeholder` 属性，用于配置 Select 的默认 `placeholder`。[#547](https://github.com/oceanbase/oceanbase-design/pull/547)
- 🐞 修复主题 Token `boxShadow` 和 `boxShadowSecondary` 通过静态 token 对象和 less 变量访问时值不正确的问题。[#552](https://github.com/oceanbase/oceanbase-design/pull/552)
- 💄 优化 Select、TreeSelect 和 Cascader 多选项的背景色和边框色，以对齐设计规范。[#553](https://github.com/oceanbase/oceanbase-design/pull/553)
- 💄 Table 分页器配置默认改为 `{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '50', '100'], showTotal: total => \`共 ${total} 条\` }`。

## 0.3.1

`2024-03-29`

- ConfigProvider
  - 🆕 新增 `theme.customFont` 属性，用于开启 `Source Sans Pro` 定制字体以提升展示效果，仅支持线上应用和英文环境。[#536](https://github.com/oceanbase/oceanbase-design/pull/536)
  - 🐞 ConfigProvider `form.requiredMark` 属性的默认值改为 `optional`，以修复可选样式在 ProForm 没有默认开启的问题。[#535](https://github.com/oceanbase/oceanbase-design/pull/535)
- Empty
  - ⭐️ Empty 新增 `PRESENTED_IMAGE_GUIDE` 内置图片，用于功能开通等引导类场景。[#532](https://github.com/oceanbase/oceanbase-design/pull/532)
  - 🐞 修复 Empty `style` 属性不生效的问题。[#529](https://github.com/oceanbase/oceanbase-design/pull/529)
- 📢 Form `preserve` 属性的默认值改为 `false`。[#534](https://github.com/oceanbase/oceanbase-design/pull/534)
- Modal
  - 📢 Modal `destroyOnClose` 属性的默认值改为 `true`。[#530](https://github.com/oceanbase/oceanbase-design/pull/530)
  - 🐞 修复 Modal `footer` 为 `false` 时未去掉页脚 DOM 的问题。[#531](https://github.com/oceanbase/oceanbase-design/pull/531)

## 0.3.0

`2024-03-22`

- ⭐️ 去掉所有组件的重置样式，避免被 Tooltip、Popover、Space、Dropdown 等组件包裹时字体大小、颜色被覆盖。[#450](https://github.com/oceanbase/oceanbase-design/pull/450)
- ⭐️ 组件的样式加载顺序改为 -900，保证自定义样式的优先级高于 antd。[#464](https://github.com/oceanbase/oceanbase-design/pull/464)
- 🌈 更新中性色板，包括 Design Token 以及 less 主题变量。[#484](https://github.com/oceanbase/oceanbase-design/pull/484)
- 🔥 新版 Empty 组件 [#465](https://github.com/oceanbase/oceanbase-design/pull/465)
  - 💄 定制插图、主题和样式，以符合 OceanBase Design 设计规范。
  - 🆕 新增 `title` 属性，用于设置空状态标题。
  - 🆕 新增 `steps` 属性，用于设置步骤提示。
  - 🆕 新增 `layout` 属性，用于设置空状态布局，默认为 vertical。
  - 🆕 通过 ConfigProvider `renderEmpty` 定制全局组件的空状态。[#467](https://github.com/oceanbase/oceanbase-design/pull/467)
- 🔥 新版 Result 组件 [#476](https://github.com/oceanbase/oceanbase-design/pull/476)
  - 💄 定制插图、主题和样式，以符合 OceanBase Design 设计规范。
  - 🆕 `status` 属性新增 `processing` 枚举值，用于设置进行中的状态。
- Spin
  - 💄 更新 Spin 的加载动画，包括灰色和彩色动画。[#512](https://github.com/oceanbase/oceanbase-design/pull/512)
  - 💄 Spin 的默认加载指示符从彩色动画改为灰色动画。[#491](https://github.com/oceanbase/oceanbase-design/pull/491)
- Table
  - 🐞 修复 Table 的 loading 动画没有水平和垂直居中的问题。[#518](https://github.com/oceanbase/oceanbase-design/pull/518)
  - 💄 Table 处于 `loading` 时隐藏空状态。[#518](https://github.com/oceanbase/oceanbase-design/pull/518)
- 💄 优化 Badge default 状态的颜色，并更新 default 状态和 warning 状态的图标。[#500](https://github.com/oceanbase/oceanbase-design/pull/500)
- [Icon] 🆕 新增 `EllipsisCircleFilled` 图标。[#499](https://github.com/oceanbase/oceanbase-design/pull/499)

## 0.2.37

`2024-01-30`

- 🆕 新增 injectStaticFunction 属性，用于配置 message、notification 和 Modal 静态方法是否可以消费全局配置，默认开启。[#446](https://github.com/oceanbase/oceanbase-design/pull/446)
- 🐞 修复 Typography 的样式优先级，保证字体和行高默认继承父元素，便于和其他组件组合使用。[#428](https://github.com/oceanbase/oceanbase-design/pull/428) [@wdyea-ya](https://github.com/wdyea-ya)
- 🐞 修复 Table 选中行和 `hover` 行的背景色不一致的问题。[#455](https://github.com/oceanbase/oceanbase-design/pull/455)

## 0.2.36

`2024-01-19`

- 💄 ConfigProvider 内嵌的 App 组件不再创建 DOM 节点，避免增加一层 DOM 结构影响子元素的样式表现。[#431](https://github.com/oceanbase/oceanbase-design/pull/431)

## 0.2.35

`2024-01-18`

- 🆕 ConfigProvider 新增 `table.selectionColumnWidth` 属性，用于配置表格的选择列宽度。[#421](https://github.com/oceanbase/oceanbase-design/pull/421)
- Table
  - 🐞 修复 Table 可展开时底部出现重复边框的问题。[#420](https://github.com/oceanbase/oceanbase-design/pull/420)
  - 💄 优化 Table 在无间距卡片内的展示样式，包括第一列和卡片标题对齐、最后一列和卡片操作区对齐、分页器左右增加间距。[#422](https://github.com/oceanbase/oceanbase-design/pull/422)
  - 💄 减小 Table 单元格的纵向内间距，以对齐设计规范。[#425](https://github.com/oceanbase/oceanbase-design/pull/425)
- 💄 Modal 去掉最大高度限制，高度超出时内容滚动改由上层控制。[#411](https://github.com/oceanbase/oceanbase-design/pull/411)

## 0.2.34

`2024-01-12`

- Drawer
  - 🆕 新增 `footerExtra` 属性，用于设置抽屉底部的额外内容，仅默认页脚生效。[#408](https://github.com/oceanbase/oceanbase-design/pull/408)
  - 📢 调整页脚的 DOM 结构，并将原先的 `.ant-drawer-footer-content` 类名改为 `.ant-drawer-footer-container`。[#408](https://github.com/oceanbase/oceanbase-design/pull/408)
- 🐞 修复 Tooltip `title` 为空时仍然展示的问题。[#405](https://github.com/oceanbase/oceanbase-design/pull/405) [@linhf123](https://github.com/linhf123)

## 0.2.33

`2023-12-28`

- 🐞 ConfigProvider `hideOnSinglePage` 默认值改为 `false`，避免统一去掉分页器带来的问题。[#388](https://github.com/oceanbase/oceanbase-design/pull/388)
- 🐞 修复 Table 只有一页数据且存在批量操作或 `pageSize` 切换时分页器被隐藏的问题。[#389](https://github.com/oceanbase/oceanbase-design/pull/389)
- 🐞 修复 List 只有一页数据且存在 `pageSize` 切换时分页器被隐藏的问题。[#390](https://github.com/oceanbase/oceanbase-design/pull/390)
- 💄 更新 Design Token，新增 `fontHeight`、`fontHeightLG` 和 `fontHeightSM` less 变量。[#381](https://github.com/oceanbase/oceanbase-design/pull/381)

## 0.2.32

`2023-12-14`

- 🔥 Space 和 Grid 组件的间距样式兼容 Chrome 84 以下的浏览器。[#344](https://github.com/oceanbase/oceanbase-design/pull/344) [@wdyea-ya](https://github.com/wdyea-ya)
- 🌈 更新默认主题的功能色板，包括 Design Token 和 less 变量。[#354](https://github.com/oceanbase/oceanbase-design/pull/354)
- Tag
  - 🆕 Tag 新增 `ellipsis` 属性，用于配置内容溢出时的省略和 Tooltip 提示。[#361](https://github.com/oceanbase/oceanbase-design/pull/361)
  - 🐞 修复 Tag 字体大小不正确的问题。[#360](https://github.com/oceanbase/oceanbase-design/pull/360)
- 🐞 修复 Select 在多选模式和 `large` & `small` 尺寸下，选中项缺少边框样式的问题。[#332](https://github.com/oceanbase/oceanbase-design/pull/332) [@wdyea-ya](https://github.com/wdyea-ya)
- 💄 优化 Button 样式，包括更新主按钮的渐变色，并去除 `box-shadow` 阴影。[#352](https://github.com/oceanbase/oceanbase-design/pull/352)
- TypeScript
  - 🤖 导出 SpaceProps、SpaceSize、ColProps、ColSize 和 RowProps 的类型定义。[#344](https://github.com/oceanbase/oceanbase-design/pull/344)

## 0.2.31

`2023-12-08`

- 🆕 ConfigProvider 新增 `styleProviderProps` 属性，一般用于配置 StyleProvider 的 `hashPriority` 和 `transformers` 属性实现样式降级，来兼容 Chrome 88 以下的低版本浏览器。[#343](https://github.com/oceanbase/oceanbase-design/pull/343)
- 🐞 修复 Drawer 的分隔阴影没有跟随内容和窗口尺寸变化实时更新的问题。[#337](https://github.com/oceanbase/oceanbase-design/pull/337)
- 🐞 修复 Form `hideRequiredMark` 优先级低于 ConfigProvider `form.requiredMark` 的问题。[#349](https://github.com/oceanbase/oceanbase-design/pull/349)

## 0.2.30

`2023-11-30`

- 🌈 更新功能色板，包括 Design Token 和 less 变量。
- 🔥 实现新版 Drawer 的样式和交互。[#319](https://github.com/oceanbase/oceanbase-design/pull/319)
  - 优化页头、内容区和页脚的间距。
  - 当内容区高度大于抽屉高度时，页脚置底展示；当内容区高度小于抽屉高度时，页脚跟随内容展示。
  - 内容区滚动时，动态设置页头和页脚的阴影，实现和内容区的分隔效果。
  - 页脚操作区的主按钮位置居左。
- 📢 Form 默认开启 `requiredMark: optional` 可选样式。[#312](https://github.com/oceanbase/oceanbase-design/pull/312)
- 📢 Table 和 List 默认开启 `pagination.hideOnSinglePage`，即只有一页数据时会隐藏分页器。[#330](https://github.com/oceanbase/oceanbase-design/pull/330)
- 🆕 ConfigProvider 支持全局配置 `hideOnSinglePage`。[#330](https://github.com/oceanbase/oceanbase-design/pull/330)
- 🆕 Segmented `options` 选项新增 `ellipsis` 属性，用于配置内容溢出时的省略和 Tooltip 提示。[#227](https://github.com/oceanbase/oceanbase-design/pull/227) [@TianWuwt](https://github.com/TianWuwt)
- Descriptions
  - 🆕 Descriptions `items` 新增 `contentProps` 属性，用于设置省略、编辑、复制等内容属性，仅无边框模式下生效。[#329](https://github.com/oceanbase/oceanbase-design/pull/329)
  - 💄 Descriptions 垂直布局下默认去掉 `colon` 冒号。[#328](https://github.com/oceanbase/oceanbase-design/pull/328)
- Badge
  - 🐞 修复开启状态图标时间距样式不生效的问题。[#300](https://github.com/oceanbase/oceanbase-design/pull/300)
  - 💄 状态文本的默认字体颜色，会继承父元素的设置，而不总是 `token.colorText`，便于和其他组件组合使用。[#322](https://github.com/oceanbase/oceanbase-design/pull/322)
- Card
  - 🐞 修复 Card 分隔线可能会被内容区遮挡的问题。[#326](https://github.com/oceanbase/oceanbase-design/pull/326)
  - 💄 去掉无边框内部卡片的阴影，优化嵌套卡片的样式效果。[#325](https://github.com/oceanbase/oceanbase-design/pull/325)
- 💄 Typography.Text 和 Typography.Paragraph 的默认字体颜色和行高，会继承父元素的设置，而不总是 `token.colorText` 和 `token.lineHeight`，便于和其他组件组合使用。[#321](https://github.com/oceanbase/oceanbase-design/pull/321)
- TypeScript
  - 🤖 导出 AlertProps、CardProps、ConfigProviderProps、DescriptionsItemProps、FormItemProps、ModalProps、ModalProgressProps、DrawerProps、TableProps、TabsProps、TagProps、TooltipProps、SpinProps 和 BadgeProps 等扩展组件的 TS 类型。[#311](https://github.com/oceanbase/oceanbase-design/pull/311)

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
