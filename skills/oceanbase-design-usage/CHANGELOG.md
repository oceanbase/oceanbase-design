# Changelog

本文件记录 oceanbase-design-usage skill 内容与结构的变更（非 design 包本身版本）。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)；版本号与 design 包解耦，仅用于 skill 文档迭代。

## [Unreleased]

### Added

- 最高优先级约定（SKILL.md）：根节点 ConfigProvider、组件/图标包、Card+Table innerBordered、迁移 codemod。
- design 模块入口 [references/design/README.md](references/design/README.md)：02～09 目录与一句话说明。
- 高价值约束反例：Table 在 Card 无内边距时未设 innerBordered（05）；Message/Notification 未挂 ConfigProvider 或 useMessage 未挂 holder（06）；Filter 受控未传 value+onChange（08）；图标从 @ant-design/icons 引入（icons.md）。
- 输出规约：使用本 Skill 生成/修改代码时的遵循与例外说明（SKILL.md）。
- Trigger terms 入 description，便于 Agent 检索。
- 本 CHANGELOG 与 SKILL 中变更说明链接。

### Changed

- SKILL 中 design 说明改为链接至 references/design/README.md，移除对不存在的 index.md、01-overview.md 的引用。
- 标题与表述统一：OceanBase Packages → OceanBase Design；补充「OceanBase Design 即 OBUI，包含 design、ui、icons、charts、util 等多个库」；description 与 AGENTS.md 中增加 OBUI 与 OceanBase Design 表述。

### Fixed

- 无效引用：design 入口链接指向实际存在的 README.md。
