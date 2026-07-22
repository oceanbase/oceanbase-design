---
title: Changelog
order: 11
group: Charts
---

`@oceanbase/charts` strictly follows [Semantic Versioning 2.0.0](http://semver.org/).

---

## 1.0.0-alpha.3

`2025-11-28`

- 🛠 Migrated Stat and Score component styles from Less to CSS for Next.js compatibility. [#1279](https://github.com/oceanbase/oceanbase-design/pull/1279)

## 0.4.9

`2025-11-27`

- 🛠 Migrated Stat and Score component styles from Less to CSS for faster style loading.

## 0.4.8

`2025-08-29`

- 🐞 Fixed `sideEffects` configuration for tree shaking. [#1161](https://github.com/oceanbase/oceanbase-design/pull/1161)

## 0.4.6

`2025-07-01`

- 🆕 Line: added `area.gradientFill` for gradient area charts. [#1078](https://github.com/oceanbase/oceanbase-design/pull/1078) [@wzc520pyfm](https://github.com/wzc520pyfm)

## 0.4.0

`2024-10-09`

## 0.3.3

`2024-09-23`

- 🐞 Fixed tooltip wrapping / overflow issue. [#684](https://github.com/oceanbase/oceanbase-design/pull/684)

## 0.3.1

`2024-04-12`

- 🐞 Line, Area, Column, and DualAxes: removed incorrect `xAxis.tickCount` logic; controlled upstream. [#560](https://github.com/oceanbase/oceanbase-design/pull/560)
- 💄 Bar width is now adaptive instead of fixed.
- 💄 Column and DualAxes column width is now adaptive instead of fixed.

## 0.3.0

`2024-03-22`

## 0.2.22

`2024-01-18`

- 🆕 Stat: added `padding` for chart inner padding. [#412](https://github.com/oceanbase/oceanbase-design/pull/412)
- 🐞 Fixed Pie donut stat title/content `formatter` not applying. [#413](https://github.com/oceanbase/oceanbase-design/pull/413)

## 0.2.21

`2024-01-12`

- 🐞 Fixed float precision when summing values in Pie donut mode. [#406](https://github.com/oceanbase/oceanbase-design/pull/406)

## 0.2.20

`2023-12-28`

- Stat
  - 🆕 Added `chartConfig` for chart configuration. [#384](https://github.com/oceanbase/oceanbase-design/pull/384)
  - 💄 Improved styles: title min 12px, value max 40px, better center alignment. [#385](https://github.com/oceanbase/oceanbase-design/pull/385)
  - 💄 When container height < 72px, chart height ratio reduced from 0.5 to 0.25. [#387](https://github.com/oceanbase/oceanbase-design/pull/387)
- Liquid
  - 🆕 Added `containerStyle`, `percentStyle`, and `titleStyle`. [#374](https://github.com/oceanbase/oceanbase-design/pull/374)
  - 🐞 Fixed liquid not rendering without chart height. [#383](https://github.com/oceanbase/oceanbase-design/pull/383)
- 💄 Column: time-series X axis auto-sorts data and disables auto-padding to avoid side gaps. [#382](https://github.com/oceanbase/oceanbase-design/pull/382)

## 0.2.19

`2023-12-14`

- 🐞 Fixed tooltip could not be disabled on Line, Area, and DualAxes. [#351](https://github.com/oceanbase/oceanbase-design/pull/351) [@Qiuhang817385](https://github.com/Qiuhang817385)

## 0.2.17

`2023-11-30`

- 🌈 Updated light and dark categorical and semantic palettes. [#306](https://github.com/oceanbase/oceanbase-design/pull/306)
