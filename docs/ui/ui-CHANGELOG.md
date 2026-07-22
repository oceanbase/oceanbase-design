---
title: Changelog
order: 6
group: Biz Components
---

`@oceanbase/ui` strictly follows [Semantic Versioning 2.0.0](http://semver.org/).

---

## 1.0.0-alpha.20

`2026-06-14`

- Accessibility
  - ♿ Improve accessibility for Dialog, BasicLayout, FullscreenBox, and other components with semantic markup, touch targets, and i18n copy. [#1483](https://github.com/oceanbase/oceanbase-design/pull/1483)
- BasicLayout
  - 🆕 `menus` adds `type="group"` to support menu grouping. [#1448](https://github.com/oceanbase/oceanbase-design/pull/1448) [@linhf123](https://github.com/linhf123)
- Action
  - 🐞 Fix Action.Group rendering empty when conditionally rendering or nesting child elements. [#1470](https://github.com/oceanbase/oceanbase-design/pull/1470) [@linhf123](https://github.com/linhf123)
- FullscreenBox
  - 🐞 Fix fullscreen entry and header styles not applying. [#1487](https://github.com/oceanbase/oceanbase-design/pull/1487)
- 💄 Replace default brand logo with new blue-purple gradient brand mark. [#1486](https://github.com/oceanbase/oceanbase-design/pull/1486)

## 1.0.0-alpha.19

`2026-04-07`

- 💄 DateRanger width adapts to content. [#1464](https://github.com/oceanbase/oceanbase-design/pull/1464) [@18735185652](https://github.com/18735185652)

## 1.0.0-alpha.18

`2026-03-31`

- DateRanger
  - 🆕 DateRanger adds `variant` prop to set variants (e.g. `dashed`). [#1453](https://github.com/oceanbase/oceanbase-design/pull/1453) [@18735185652](https://github.com/18735185652)
  - ⭐️ DateRanger supports cross-component copy and paste for date-time values. [#1450](https://github.com/oceanbase/oceanbase-design/pull/1450) [@18735185652](https://github.com/18735185652)

## 1.0.0-alpha.16

`2026-02-11`

- 💄 Increase PageContainer header style specificity to avoid style issues caused by CSS load order. [#1436](https://github.com/oceanbase/oceanbase-design/pull/1436)

## 1.0.0-alpha.15

`2026-02-05`

- ⭐️ DateRanger time picker supports segmented editing. [#1403](https://github.com/oceanbase/oceanbase-design/pull/1403) [@18735185652](https://github.com/18735185652)
- 🐞 Fix PageContainer browser API usage for SSR compatibility. [#1426](https://github.com/oceanbase/oceanbase-design/pull/1426)

## 1.0.0-alpha.14

`2026-01-22`

- 🐞 Fix Action not inheriting Action.Group `buttonSize` when wrapped by Tooltip or Popconfirm. [#1421](https://github.com/oceanbase/oceanbase-design/pull/1421)
- 💄 Improve FooterToolbar shadow. [#1406](https://github.com/oceanbase/oceanbase-design/pull/1406)
- 💄 When PageContainer reaches max width, tabs divider no longer spans full width. [#1407](https://github.com/oceanbase/oceanbase-design/pull/1407)

## 1.0.0-alpha.13

`2026-01-05`

- Boundary
  - 💄 Improve Boundary background and spacing for direct use without a wrapper container. [#1389](https://github.com/oceanbase/oceanbase-design/pull/1389)
  - ⭐️ Improve Boundary `class` naming to avoid conflicts with common business class names and style overrides. [#1389](https://github.com/oceanbase/oceanbase-design/pull/1389)
- 💄 Improve DateRanger border color on `hover`. [#1382](https://github.com/oceanbase/oceanbase-design/pull/1382)

## 1.0.0-alpha.12

`2025-12-25`

- 💄 Improve Password hint text font size. [#1374](https://github.com/oceanbase/oceanbase-design/pull/1374)

## 1.0.0-alpha.10

`2025-12-19`

- 🐞 Fix incorrect link font size under ProTable. [#1337](https://github.com/oceanbase/oceanbase-design/pull/1337)
- 💄 Improve ProCard title area top spacing to align with Card styles. [#1340](https://github.com/oceanbase/oceanbase-design/pull/1340)
- PageContainer
  - 💄 Auto-apply default styles when PageContainer uses a custom document link. [#1352](https://github.com/oceanbase/oceanbase-design/pull/1352)
  - 💄 Improve PageContainer subtitle font size. [#1353](https://github.com/oceanbase/oceanbase-design/pull/1353)

## 1.0.0-alpha.9

`2025-12-11`

- 📝 Update i18n usage documentation. [#1322](https://github.com/oceanbase/oceanbase-design/pull/1322)
- 🌐 Fix site locale switcher copy not applying. [#1322](https://github.com/oceanbase/oceanbase-design/pull/1322)
- PageContainer
  - 🐞 Fix PageContainer not supporting `onBack` prop. [#1315](https://github.com/oceanbase/oceanbase-design/pull/1315)
  - 💄 Add divider to PageContainer header Tabs and span full width. [#1326](https://github.com/oceanbase/oceanbase-design/pull/1326)
- 💄 Improve DateRanger border radius, border, width, and other styles. [#1323](https://github.com/oceanbase/oceanbase-design/pull/1323)
- 🐞 Fix Ranger quick-select border radius issue. [#1324](https://github.com/oceanbase/oceanbase-design/pull/1324)

## 1.0.0-alpha.7

`2025-12-04`

- 📝 Remove Vite-specific documentation; no extra configuration needed to use with Vite. [#1292](https://github.com/oceanbase/oceanbase-design/pull/1292)
- 🗑️ Remove TaskGraph and GraphToolbar components and drop G6 dependency and legacy baggage. [#1292](https://github.com/oceanbase/oceanbase-design/pull/1292)
- 🆕 PageContainer adds `header.document` prop to set document link. [#1305](https://github.com/oceanbase/oceanbase-design/pull/1305)
- 🐞 Fix ProTable `cardProps.headerBordered` prop not applying. [#1306](https://github.com/oceanbase/oceanbase-design/pull/1306)

## 1.0.0-alpha.5

`2025-11-28`

- 🛠 Migrate all component styles from Less to CSS-in-JS for dynamic theming, better style management, and Next.js usage. [#1279](https://github.com/oceanbase/oceanbase-design/pull/1279)
- 🛠 Normalize class name prefix: replace hardcoded `ob-xxx` with dynamic `prefixCls`, configurable via ConfigProvider. [#1279](https://github.com/oceanbase/oceanbase-design/pull/1279)
- 🛠 Refactor class components (Dialog, Dialog/Anchor, Action/Item) to function components. [#1279](https://github.com/oceanbase/oceanbase-design/pull/1279)
- ⚡ Declare `sideEffects: false` to enable tree shaking. [#1279](https://github.com/oceanbase/oceanbase-design/pull/1279)

## 1.0.0-alpha.4

`2025-11-27`

- 💄 Update PageContainer header and content spacing, and FooterToolbar position and spacing. [#1276](https://github.com/oceanbase/oceanbase-design/pull/1276)
- 💄 Update FooterToolbar position and spacing. [#1276](https://github.com/oceanbase/oceanbase-design/pull/1276)

## 1.0.0-alpha.3

`2025-10-23`

- 🐞 Fix ProCard styles under ProTable not applying. [#1237](https://github.com/oceanbase/oceanbase-design/pull/1237)

## 1.0.0-alpha.2

`2025-09-24`

- PageContainer
  - 💄 Update PageContainer back icon. [#1215](https://github.com/oceanbase/oceanbase-design/pull/1215)
  - 💄 Improve PageContainer title and action area styles. [#1202](https://github.com/oceanbase/oceanbase-design/pull/1202)
- ProCard
  - 🐞 Fix ProCard border color inconsistent with Card. [#1207](https://github.com/oceanbase/oceanbase-design/pull/1207)
  - 🐞 Fix ProCard loading skeleton inconsistent with Card. [#1213](https://github.com/oceanbase/oceanbase-design/pull/1213)
- ProTable
  - 🐞 Fix ProTable `cardBordered` and `cardProps` not respecting ConfigProvider `card` config. [#1209](https://github.com/oceanbase/oceanbase-design/pull/1209)
  - 🐞 Fix ProTable `cardProps.headerBordered` prop not applying. [#1210](https://github.com/oceanbase/oceanbase-design/pull/1210)
  - 🐞 Fix excessive bottom spacing on ProTable card. [#1219](https://github.com/oceanbase/oceanbase-design/pull/1219)

## 1.0.0-alpha.1

`2025-09-10`

- 🆕 ProCard supports ConfigProvider global config. [#1187](https://github.com/oceanbase/oceanbase-design/pull/1187)
- 🐞 Fix DateRanger, GraphToolbar, and Highlight border radius styles not applying. [#1185](https://github.com/oceanbase/oceanbase-design/pull/1185)

## 1.0.0-alpha.0

`2025-09-08`

- 💄 Remove large-size styles from FooterToolbar and PageContainer. [#1175](https://github.com/oceanbase/oceanbase-design/pull/1175)

## 0.4.24

`2026-01-05`

- 💄 Improve DateRanger time forward and backward button styles. [#1395](https://github.com/oceanbase/oceanbase-design/pull/1395)

## 0.4.23

`2025-12-08`

- 🐞 Fix Password validation rules popover offset being too large. [#1312](https://github.com/oceanbase/oceanbase-design/pull/1312)

## 0.4.22

`2025-12-04`

- 🌐 Improve Japanese (ja-JP) copy. [#1299](https://github.com/oceanbase/oceanbase-design/pull/1299)

## 0.4.21

`2025-11-24`

- Action
  - 🆕 Action.Button supports `danger` prop in dropdown menu for danger styling. [#1260](https://github.com/oceanbase/oceanbase-design/pull/1260)
  - 🆕 Action.Button supports nesting Popconfirm and Tooltip in dropdown menu. [#1260](https://github.com/oceanbase/oceanbase-design/pull/1260)
  - 🐞 Fix Action.Button Tooltip display issue in dropdown menu. [#1260](https://github.com/oceanbase/oceanbase-design/pull/1260)
- 🌐 Add Japanese (ja-JP) i18n support. [#1258](https://github.com/oceanbase/oceanbase-design/pull/1258)

## 0.4.20

`2025-09-24`

- DateRanger
  - 🆕 DateRanger adds history feature. [#1149](https://github.com/oceanbase/oceanbase-design/pull/1149) [@wzc520pyfm](https://github.com/wzc520pyfm)
  - 🐞 Fix DateRanger `Last week` range label being too long. [#1198](https://github.com/oceanbase/oceanbase-design/pull/1198) [@wzc520pyfm](https://github.com/wzc520pyfm)
- 🐞 Fix excessive bottom spacing on ProTable card. [#1219](https://github.com/oceanbase/oceanbase-design/pull/1219)

## 0.4.19

`2025-08-29`

- DateRanger
  - ⭐️ DateRanger adds `Last 30 days` quick option. [#1160](https://github.com/oceanbase/oceanbase-design/pull/1160) [@Richard-Zhang1019](https://github.com/Richard-Zhang1019)
  - 🐞 Fix page crash when DateRanger `defaultValue` is empty. [#1152](https://github.com/oceanbase/oceanbase-design/pull/1152) [@linhf123](https://github.com/linhf123)
- 🐞 Fix `sideEffects` configuration to support tree shaking. [#1161](https://github.com/oceanbase/oceanbase-design/pull/1161)

## 0.4.18

`2025-08-21`

- DateRanger
  - ⭐️ DateRanger adds `Last 7 days` quick option. [#1142](https://github.com/oceanbase/oceanbase-design/pull/1142) [@wzc520pyfm](https://github.com/wzc520pyfm)
  - 🐞 Fix DateRanger panel toggling open and closed on rapid consecutive clicks. [#1148](https://github.com/oceanbase/oceanbase-design/pull/1148) [@wzc520pyfm](https://github.com/wzc520pyfm)

## 0.4.17

`2025-08-07`

- 🇺🇸 Fix Login missing English copy for `Third-party login`. [#1127](https://github.com/oceanbase/oceanbase-design/pull/1127)

## 0.4.16

`2025-07-27`

- 💄 ProCard collapse icon uses solid arrow; icon color changed to secondary text color. [#1111](https://github.com/oceanbase/oceanbase-design/pull/1111) [@wzc520pyfm](https://github.com/wzc520pyfm)

## 0.4.15

`2025-07-10`

- 💄 Login background image centered. [#1094](https://github.com/oceanbase/oceanbase-design/pull/1094)
- 💄 Change DateRanger quick option background from transparent to white. [#1095](https://github.com/oceanbase/oceanbase-design/pull/1095) [@wzc520pyfm](https://github.com/wzc520pyfm)

## 0.4.14

`2025-07-01`

- DateRanger
  - 🆕 Add `getPopupContainer` prop to set popup panel mount container. [#1072](https://github.com/oceanbase/oceanbase-design/pull/1072) [@wzc520pyfm](https://github.com/wzc520pyfm)
  - 🐞 Fix DateRanger `hideSecond` not hiding seconds in panel. [#1071](https://github.com/oceanbase/oceanbase-design/pull/1071) [@wzc520pyfm](https://github.com/wzc520pyfm)
  - 🐞 Fix extra shadow on dropdown panel. [#1074](https://github.com/oceanbase/oceanbase-design/pull/1074) [@wzc520pyfm](https://github.com/wzc520pyfm)
- 🆕 Password adds `generatePassword` prop for custom password generation. [#1084](https://github.com/oceanbase/oceanbase-design/pull/1084) [@Hx-xiang](https://github.com/Hx-xiang)

## 0.4.13

`2025-04-28`

- Login
  - 🆕 Login adds `passwordOptional` prop to allow empty password. [#1046](https://github.com/oceanbase/oceanbase-design/pull/1046) [@linhf123](https://github.com/linhf123)
  - 🆕 Login adds `componentProps` prop to set individual component props. [#1046](https://github.com/oceanbase/oceanbase-design/pull/1046) [@linhf123](https://github.com/linhf123)
- 🐞 Fix DateRanger `style` and `className` applying only to root, not RangePicker. [#1040](https://github.com/oceanbase/oceanbase-design/pull/1040) [@wzc520pyfm](https://github.com/wzc520pyfm)
- 💄 Improve Boundary description spacing and action button font color. [#1047](https://github.com/oceanbase/oceanbase-design/pull/1047)

## 0.4.12

`2025-04-18`

- 🆕 Action.Button and Action.Link add `divider` prop to show divider when inside dropdown menu. [#1029](https://github.com/oceanbase/oceanbase-design/pull/1029)
- 🆕 BasicLayout adds `topHeader.versionNoticePath` prop for top nav version notice. [#1008](https://github.com/oceanbase/oceanbase-design/pull/1008) [@zousongxia](https://github.com/zousongxia)
- 🆕 ProTable adds `innerBordered` prop for inner borders. [#1037](https://github.com/oceanbase/oceanbase-design/pull/1037)
- DateRanger
  - ⭐️ Date format changed to `mask`, auto-aligning date and time formats. [#1010](https://github.com/oceanbase/oceanbase-design/pull/1010) [@wzc520pyfm](https://github.com/wzc520pyfm)
  - 💄 Improve date picker panel interaction, reducing secondary selection complexity and visual noise. [#1006](https://github.com/oceanbase/oceanbase-design/pull/1006) [@wzc520pyfm](https://github.com/wzc520pyfm)

## 0.4.11

`2025-03-31`

- 🆕 SideTip adds `draggable` prop to disable drag. [#999](https://github.com/oceanbase/oceanbase-design/pull/999)

## 0.4.9

`2025-02-13`

- DateRanger
  - 🆕 DateRanger adds `autoAdjustOverflow` prop to control popup auto-positioning. [#972](https://github.com/oceanbase/oceanbase-design/pull/972) [@wzc520pyfm](https://github.com/wzc520pyfm)
  - 🆕 DateRanger adds `overlayClassName` and `overlayStyle` props for popup panel styling. [#970](https://github.com/oceanbase/oceanbase-design/pull/970) [@wzc520pyfm](https://github.com/wzc520pyfm)
- 🐞 Fix ProCard `ghost` mode card shadow and content padding issues. [#967](https://github.com/oceanbase/oceanbase-design/pull/967)

## 0.4.8

`2025-02-05`

- DateRanger
  - 🆕 DateRanger supports custom quick options. [#952](https://github.com/oceanbase/oceanbase-design/pull/952) [@wzc520pyfm](https://github.com/wzc520pyfm)
  - ⭐️ DateRanger auto-validates and swaps start/end time. [#953](https://github.com/oceanbase/oceanbase-design/pull/953) [@linhf123](https://github.com/linhf123)
- 💄 Improve ProTable spacing to align Table styles inside Card. [#948](https://github.com/oceanbase/oceanbase-design/pull/948)

## 0.4.7

`2025-01-15`

- Action
  - 🆕 Action supports indirect child nesting. [#928](https://github.com/oceanbase/oceanbase-design/pull/928)
  - 💄 Action.Link spacing changed to 16px. [#926](https://github.com/oceanbase/oceanbase-design/pull/926)
  - 💄 Improve Action more button width and remove dropdown min width. [#931](https://github.com/oceanbase/oceanbase-design/pull/931)
- DateRanger
  - 🆕 DateRanger adds `rules` prop for start/end time validation. [#940](https://github.com/oceanbase/oceanbase-design/pull/940) [@linhf123](https://github.com/linhf123)
  - 🆕 DateRanger adds `NEAR_12_HOURS` and `LAST_1_DAY` quick options. [#927](https://github.com/oceanbase/oceanbase-design/pull/927) [@wzc520pyfm](https://github.com/wzc520pyfm)
  - 🌐 Improve DateRanger English copy and date format. [#918](https://github.com/oceanbase/oceanbase-design/pull/918) [@18735185652](https://github.com/18735185652)
  - 🐞 Fix DateRanger `allowClear` not working. [#929](https://github.com/oceanbase/oceanbase-design/pull/929) [@linhf123](https://github.com/linhf123)
  - 💄 Remove DateRanger `focus` box shadow. [#934](https://github.com/oceanbase/oceanbase-design/pull/934)
  - 💄 DateRanger switch buttons no-wrap when horizontal space is limited. [#920](https://github.com/oceanbase/oceanbase-design/pull/920) [@wzc520pyfm](https://github.com/wzc520pyfm)
- ProCard
  - 📖 Add ProCard documentation and demos. [#923](https://github.com/oceanbase/oceanbase-design/pull/923)
  - 💄 Improve ProCard header styles when gutter is zero. [#923](https://github.com/oceanbase/oceanbase-design/pull/923)
  - 💄 Improve ProCard border radius, shadow, and padding to align with Card. [#938](https://github.com/oceanbase/oceanbase-design/pull/938)
  - 💄 Improve ProCard tab styles to align with Card tabs. [#937](https://github.com/oceanbase/oceanbase-design/pull/937)

## 0.4.6

`2024-12-30`

- DateRanger:
  - 🌐 Quick options support i18n. [#903](https://github.com/oceanbase/oceanbase-design/pull/903)
  - 🆕 `selects` adds `enLabel` prop for quick option English copy. [#903](https://github.com/oceanbase/oceanbase-design/pull/903)
- Action
  - 🆕 Add `moreType` prop to set more-actions element type. [#911](https://github.com/oceanbase/oceanbase-design/pull/911)
  - 💄 Improve Action more-actions element type detection. [#911](https://github.com/oceanbase/oceanbase-design/pull/911)
  - 📖 Add Action demos with Tooltip and Popconfirm. [#902](https://github.com/oceanbase/oceanbase-design/pull/902)

## 0.4.4

`2024-12-14`

- ⚡ Set `sideEffects` to support tree shaking. [#886](https://github.com/oceanbase/oceanbase-design/pull/886)
- ⚡ Dynamically load TaskGraph dependency `@antv/g6` to improve load performance. [#884](https://github.com/oceanbase/oceanbase-design/pull/884)
- ⭐️ Improve DateRanger interaction and styles: [#885](https://github.com/oceanbase/oceanbase-design/pull/885) [@wzc520pyfm](https://github.com/wzc520pyfm)
  - Remove time icon
  - No longer disable backward time button
  - Hide refresh time button when custom time is selected
  - Add hover styles to time components
  - Add tooltips to forward/backward time buttons
  - Time picker does not support clearing value
  - Improve select box border radius, button group border, and quick option font color
  - Support English date-time format
  - Improve DateRanger cursor styles [#883](https://github.com/oceanbase/oceanbase-design/pull/883)
- 🆕 Action component `onClick` callback adds event parameter. [#874](https://github.com/oceanbase/oceanbase-design/pull/874)
- 🐞 Fix PageContainer top-right action area Select multi-select not vertically centered. [#881](https://github.com/oceanbase/oceanbase-design/pull/881)
- 💄 Improve ContentWithQuestion question icon color. [#887](https://github.com/oceanbase/oceanbase-design/pull/887)

## 0.4.3

`2024-12-02`

- 🐞 Fix incorrect `@oceanbase/design` i18n locale path causing runtime errors. [#870](https://github.com/oceanbase/oceanbase-design/pull/870)

## 0.4.2

`2024-11-29`

- 💄 DateRanger exposes `updateCurrentTime` function to update current time. [#862](https://github.com/oceanbase/oceanbase-design/pull/862) [@18735185652](https://github.com/18735185652)

## 0.4.1

`2024-11-11`

- ⭐️ Major DateRanger interaction and style improvements: [#810](https://github.com/oceanbase/oceanbase-design/pull/810) [#795](https://github.com/oceanbase/oceanbase-design/pull/795)
  - Adjust layout and styles
  - Date and time inputs support quick selection
  - Fix calendar panel not updating when manually entering dates
  - Minimal mode off by default
  - Show year and seconds by default
  - Replace `Current` button with refresh icon
  - Remove quick option tags
  - Move info and error messages to panel bottom
  - Custom time no longer auto-calculates range by default; remove custom option
- 🆕 Ranger supports passing props through to QuickPicker. [#799](https://github.com/oceanbase/oceanbase-design/pull/799)
- 💄 Remove PageContainer header top padding for tighter page layout. [#817](https://github.com/oceanbase/oceanbase-design/pull/817)
- ProTable
  - 💄 Align expandable, empty state, and `footer` styles with Table. [#825](https://github.com/oceanbase/oceanbase-design/pull/825)
  - 💄 Improve query form: swap search/reset button group with expand/collapse. [#801](https://github.com/oceanbase/oceanbase-design/pull/801)
- 💄 Improve multiple Password styles to align with design spec. [#820](https://github.com/oceanbase/oceanbase-design/pull/820)

## 0.4.0

`2024-10-09`

- 🔥 Add new DateRanger date-time picker component. [#295](https://github.com/oceanbase/oceanbase-design/pull/295)

## 0.3.8

`2024-09-23`

- 📖 Add `@oceanbase/ui` Vite usage docs and project template. [#673](https://github.com/oceanbase/oceanbase-design/pull/673)
- 🆕 Action.Group adds `buttonSize` prop to set button size. [#719](https://github.com/oceanbase/oceanbase-design/pull/719)
- 🆕 Action.Button adds `size` prop to set button size. [#719](https://github.com/oceanbase/oceanbase-design/pull/719)
- 💄 Improve PageContainer header and content spacing when only `title` is set. [#721](https://github.com/oceanbase/oceanbase-design/pull/721)

## 0.3.6

`2024-07-10`

- 📢 BasicLayout company name changed from `Ant Group` to `Beijing OceansBase Technology Co., Ltd.`. [#629](https://github.com/oceanbase/oceanbase-design/pull/629)

## 0.3.4

`2024-05-11`

- 💄 Adjust PageContainer refresh icon size and spacing to align with design spec. [#588](https://github.com/oceanbase/oceanbase-design/pull/588)

## 0.3.3

`2024-04-25`

- ⭐️ Boundary supports `className` prop and built-in `ob-boundary-error`, `ob-boundary-403`, and `ob-boundary-404` class names per component for upstream error type detection. [#571](https://github.com/oceanbase/oceanbase-design/pull/571)

## 0.3.2

`2024-04-12`

- 💄 Improve LightFilter border radius, padding, background, and other styles to align with design spec. [#554](https://github.com/oceanbase/oceanbase-design/pull/554)
- ProTable [#549](https://github.com/oceanbase/oceanbase-design/pull/549)
  - 🐞 Fix ProTable not inheriting Table styles.
  - 🐞 Fix ProTable query form showing `requiredMark` optional style.
  - 💄 ProTable pagination default changed to `{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '50', '100'], showTotal: total => \`Total ${total} items\` }`.

## 0.3.1

`2024-03-29`

- 🌐 i18n:
  - Improve Ranger `en-US` translations. [#533](https://github.com/oceanbase/oceanbase-design/pull/533)

## 0.3.0

`2024-03-22`

- 🆕 Add PageLoading page-level loading component. [#497](https://github.com/oceanbase/oceanbase-design/pull/497)
- 🐞 Fix incorrect Password English copy. [#469](https://github.com/oceanbase/oceanbase-design/pull/469)
- 💄 Improve PageContainer loading style for vertical centering within page. [#497](https://github.com/oceanbase/oceanbase-design/pull/497)

## 0.2.38

`2024-01-30`

- PageContainer
  - 🐞 Fix PageContainer header and footer action areas incorrectly setting `large` size on components outside action area. [#443](https://github.com/oceanbase/oceanbase-design/pull/443)
  - 💄 Fix PageContainer header and footer action area styles for Space.Compact. [#454](https://github.com/oceanbase/oceanbase-design/pull/454)
- 🐞 Fix FooterToolbar incorrectly setting `large` size on components outside children. [#447](https://github.com/oceanbase/oceanbase-design/pull/447)

## 0.2.37

`2024-01-19`

- PageContainer
  - 💄 PageContainer header and footer action area components default to `large` size and `middle` font size. [#432](https://github.com/oceanbase/oceanbase-design/pull/432)
  - 💄 Improve PageContainer and Tabs combined spacing to align with design spec. [#434](https://github.com/oceanbase/oceanbase-design/pull/434)
- 💄 FooterToolbar children default to `large` component size and `middle` font size. [#433](https://github.com/oceanbase/oceanbase-design/pull/433)

## 0.2.36

`2024-01-18`

- 🐞 Fix Password losing characters and focus jumping on fast input. [#424](https://github.com/oceanbase/oceanbase-design/pull/424) [@Vanleehao](https://github.com/Vanleehao)
- 🐞 Fix Highlight i18n not applying. [#419](https://github.com/oceanbase/oceanbase-design/pull/419) [@linhf123](https://github.com/linhf123)
- 💄 Improve PageContainer top-right and footer action area Input styles for correct width, height, and font size. [#426](https://github.com/oceanbase/oceanbase-design/pull/426)

## 0.2.35

`2024-01-12`

- 🌐 Highlight supports i18n; previously fixed English copy only. [#409](https://github.com/oceanbase/oceanbase-design/pull/409) [@linhf123](https://github.com/linhf123)

## 0.2.34

`2023-12-28`

- IconFont
  - 🐞 Fix IconFont requesting unnecessary JS resources. [#375](https://github.com/oceanbase/oceanbase-design/pull/375)
  - 📢 Mark IconFont as deprecated; not recommended. [#375](https://github.com/oceanbase/oceanbase-design/pull/375)
- 💄 Improve TagSelect `disabled` and `hover` styles; migrate hardcoded styles to Design Token. [#373](https://github.com/oceanbase/oceanbase-design/pull/373)

## 0.2.33

`2023-12-14`

- 📝 Add BasicLayout `location` prop usage docs for syncing selected menu with current route. [#363](https://github.com/oceanbase/oceanbase-design/pull/363)
- 💄 BasicLayout auto-expands menu items based on current route. [#364](https://github.com/oceanbase/oceanbase-design/pull/364)

## 0.2.32

`2023-12-08`

- 💄 Customize FooterToolbar styles per OceanBase Design spec. [#345](https://github.com/oceanbase/oceanbase-design/pull/345)
- 🛠 Replace hardcoded `.anticon` in Lottie and BasicLayout with `token.iconCls` and `iconPrefixCls`. [#338](https://github.com/oceanbase/oceanbase-design/pull/338)
- TypeScript
  - 🤖 Export BasicLayoutProps, BatchOperationBarProps, LoginProps, LottieProps, PasswordProps, RangerProps, RangerProps, and TreeSearchProps types. [#346](https://github.com/oceanbase/oceanbase-design/pull/346)

## 0.2.31

`2023-11-30`

- 📢 Disable FooterToolbar `portalDom` by default; bottom toolbar renders to parent element instead of `body`. [#333](https://github.com/oceanbase/oceanbase-design/pull/333)

## 0.2.29

`2023-11-14`

- 🆕 Login adds `isMobile` prop for mobile styles. [#288](https://github.com/oceanbase/oceanbase-design/pull/288)
- 🔨 Refactor ContentWithQuestion from Less to CSS-in-JS for dynamic theming. [#283](https://github.com/oceanbase/oceanbase-design/pull/283) [@Vanleehao](https://github.com/Vanleehao)

## 0.2.28

`2023-11-09`

- 💄 Improve Login styles across screen sizes. [#274](https://github.com/oceanbase/oceanbase-design/pull/274)
- 💄 Improve TagSelect selected state styles. [#260](https://github.com/oceanbase/oceanbase-design/pull/260) [@wdyea-ya](https://github.com/wdyea-ya)
- 🐞 Fix PageContainer header misaligned with content area and insufficient top spacing. [#271](https://github.com/oceanbase/oceanbase-design/pull/271)

## 0.2.27

`2023-11-03`

## 0.2.26

`2023-10-31`

- 🆕 BackgroundTaskManager notifications add unique key and expose `closeNotification` API for manual close. [#239](https://github.com/oceanbase/oceanbase-design/pull/239) [@Qiuhang817385](https://github.com/Qiuhang817385)
- 🐞 Fix PageContainer header styles not applying. [#254](https://github.com/oceanbase/oceanbase-design/pull/254)
- 🐞 Fix BasicLayout top language switcher font size too large. [#255](https://github.com/oceanbase/oceanbase-design/pull/255)

## 0.2.25

`2023-10-26`

- BasicLayout
  - 🔥 Refactor styles from Less to CSS-in-JS for dynamic theming. [#201](https://github.com/oceanbase/oceanbase-design/pull/201) [@Vanleehao](https://github.com/Vanleehao)
  - 🆕 Long menu items auto-ellipsis with tooltip. [#208](https://github.com/oceanbase/oceanbase-design/pull/208)
  - 💄 Adapt dark theme. [#208](https://github.com/oceanbase/oceanbase-design/pull/208)
  - 💄 Improve styles when combined with Welcome. [#208](https://github.com/oceanbase/oceanbase-design/pull/208)
- 💄 PageContainer adapts to latest pro-components; improve header and breadcrumb styles. [#209](https://github.com/oceanbase/oceanbase-design/pull/209)
