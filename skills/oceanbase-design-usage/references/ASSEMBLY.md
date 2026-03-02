# OceanBase Design 约束汇编（人机共读）

本页为 design 模块 01～09 关键约束的一句话汇总与跳转，便于一次性查阅或 Code Review 核对。

| 模块 | 关键约束 | 详见 |
| --- | --- | --- |
| **概述** | 根节点用 ConfigProvider；theme/card/table/spin 等可全局配置；主题与 Token 见 01-theme-and-token | [00-overview](design/00-overview.md) |
| **主题与 Token** | isDark/isCompact/isAliyun；CSS 变量 var(--ob-\*)；obToken、useToken；优先语义化 token | [01-theme-and-token](design/01-theme-and-token.md) |
| **基础** | Button 主按钮每区最多一个；Space.Compact 紧凑布局；Grid gutter 推荐 (16+8n)px；Typography 辅助用 caption；Tag 状态用 status、长文案用 ellipsis | [02-basic](design/02-basic.md) |
| **布局与卡片** | Card 无内边距（bodyStyle={{ padding: 0 }}）时内嵌 Table 必须 innerBordered；ConfigProvider 默认内嵌 App | [03-layout-card](design/03-layout-card.md) |
| **表单** | Form 提交按钮用 htmlType="submit"；Input showCount 默认 formatter；InputNumber 用 addonBefore/addonAfter；表单内用 Select/Checkbox，筛选用 Filter.\* | [04-form](design/04-form.md) |
| **数据展示** | Table 优先于 ProTable；批量操作用 toolOptionsRender；List pagination.hideOnSinglePage 受 ConfigProvider 影响；Card+Table 必 innerBordered；空状态用 Empty | [05-data-display](design/05-data-display.md) |
| **反馈** | Message/Notification 根节点必须 ConfigProvider；Modal.Progress 无百分比时 loading={true}；useMessage 的 holder 须挂入 JSX；Tooltip type 含 light | [06-feedback](design/06-feedback.md) |
| **导航** | Tabs 推荐 items 配置（TabPane 将废弃）；Dropdown 图标从 @oceanbase/icons 引入 | [07-navigation](design/07-navigation.md) |
| **筛选** | 优先 design Filter；Filter.Input/Switch 有 inputProps/switchProps；受控必传 value+onChange；trigger、placement | [08-filter](design/08-filter.md) |
| **组合** | Card/ProCard+Table 无内边距时 Table innerBordered；Table+批量操作 toolOptionsRender；ConfigProvider 全局配置；Filter+Table、Form+Modal 用 confirmLoading | [09-combo](design/09-combo.md) |

**通用**：组件与图标从 `@oceanbase/design`、`@oceanbase/icons` 引入；迁移先跑 `@oceanbase/codemod` 再人工核对。

**原子化规则**（可做 CI/门禁）：[config-provider-required](../rules/config-provider-required.md)、[icons-from-oceanbase](../rules/icons-from-oceanbase.md)、[card-table-innerBordered](../rules/card-table-innerBordered.md)、[filter-controlled](../rules/filter-controlled.md)。
