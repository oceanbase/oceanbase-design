# Agent 工具链

本页说明 Skill 与 `@oceanbase/design-cli` 如何配合，避免在 Skill 中重复维护组件 API。

## 分工

| 层       | 载体                                             | 何时用                          |
| -------- | ------------------------------------------------ | ------------------------------- |
| 叙事     | 本 Skill（SKILL.md + references）                | 理解范式、组合场景、Code Review |
| 机器真相 | `@oceanbase/design-cli` / `ob-design mcp`        | 查 props、demo、约束、页面路由  |
| 项目规则 | `AGENTS.md`（`ob-design setup --client agents`） | 业务仓库常驻规则                |

## 推荐接入顺序

```bash
# 1. 业务项目：MCP + AGENTS.md
npx @oceanbase/design-cli setup --client cursor
npx @oceanbase/design-cli setup --client agents

# 2. Skill（叙事规范）
npx openskills install oceanbase/oceanbase-design/skills/oceanbase-design-usage
```

## Agent 工作流

1. `ob-design route "<页面意图>"` — 选组件组合（Filter / Table / PageContainer 等）
2. `ob-design info <Component>` — 查 merge 后的 API（**不以本 Skill 猜测 props**）
3. 有疑虑时 `ob-design constraint --dense` 或查阅 [ASSEMBLY.md](ASSEMBLY.md)
4. 可选 `ob-design template list-filter-table` 作起点
5. 完成后 `ob-design lint ./src`

## 禁止

- 不要配置 `@ant-design/cli mcp` 或调用 `antd_info` 写 OB 代码
- 不要从 `antd` / `@ant-design/icons` import
- 不要用裸 `Select` 充当列表筛选条（用 `Filter.*` 或 `@oceanbase/ui` 的 `LightFilter`）

## 决策速查

与 [design/08-filter.md](design/08-filter.md) 决策树一致：

| 场景                            | 推荐                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| 标准多条件筛选条（默认）        | `@oceanbase/design` 的 `Filter.*` + `Filter.ResponsiveGroup` |
| 轻量单行筛选、`onFinish` 紧凑条 | `@oceanbase/ui` 的 `LightFilter`                             |
| 静态列表表格                    | `@oceanbase/design` 的 `Table`                               |
| 需 request / 内置搜索           | `@oceanbase/ui` 的 `ProTable`                                |
| Card 无内边距 + Table           | `Table innerBordered`                                        |
| 图标                            | `@oceanbase/icons`                                           |

完整分支逻辑见 [08-filter.md — Filter vs LightFilter 决策树](design/08-filter.md#filter-vs-lightfilter-决策树)。

## 站点文档

- [For Agents](https://design.oceanbase.com/docs/react/for-agents)
- [LLMs.txt 指南](https://design.oceanbase.com/docs/react/llms)
- [MCP Server 指南](https://design.oceanbase.com/docs/react/mcp)
- [CLI 参考](https://design.oceanbase.com/docs/react/cli)

OB 扩展 props 机器索引：[generated/props-index.md](generated/props-index.md)（CI 生成，与 `ob-design info` 同源 metadata）。
