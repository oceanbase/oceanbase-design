# 原子化规则（Atomic Rules）

本目录为 oceanbase-design-usage 技能的高价值、可检测约定的原子化表述，便于 CI/门禁或人工逐条核对。

| 规则文件 | 标题 | 用途 |
| --- | --- | --- |
| [config-provider-required.md](config-provider-required.md) | ConfigProvider 必包 | 根节点必须用 design ConfigProvider 包裹 |
| [icons-from-oceanbase.md](icons-from-oceanbase.md) | 图标从 @oceanbase/icons 引入 | 与 design/ui 搭配的图标不混用 @ant-design/icons |
| [card-table-innerBordered.md](card-table-innerBordered.md) | Card+Table innerBordered | 无内边距 Card/ProCard 内嵌 Table 时 Table 设 innerBordered |
| [filter-controlled.md](filter-controlled.md) | Filter 受控 | 筛选项与数据联动时 value+onChange 必传 |

每则规则含：Why、Incorrect、Correct、When not to use。与 [references/ASSEMBLY.md](../references/ASSEMBLY.md) 配合使用。
