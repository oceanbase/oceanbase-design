---
title: AI 设计原则
order: 14
group: 基础组件
---

OceanBase Design 面向人与 AI Agent 采用同一套工作流：API 约定、文档、CLI/MCP 与 Skill 协同设计。

## 三条承诺

### Strong OB conventions

组件与图标从 `@oceanbase/design`、`@oceanbase/icons` 引入；筛选用 `Filter.*`；主题用 `obToken` 或 `var(--ob-*)`；包路由遵循 design / ui / charts 分工。学会几个组件后，其余组件行为可预测。

### One workflow for humans and AI

- **叙事层**：`oceanbase-design-usage` Skill（为何、组合范式）
- **机器真相层**：`@oceanbase/design-cli` 与单体 `ob-design mcp`（`ob_info` 为唯一组件 API 入口）
- **约束层**：`metadata/constraints.yaml` 与 ASSEMBLY 汇编

业务项目通过 `ob-design setup` 注入 AGENTS.md 与 MCP 配置，禁止直接配置 antd MCP 编写 OB 代码。

### Earned by measurement

通过 `internal/vibe-tests` 对比 `baseline-antd` 与 `ob-mcp-only` 等配置，用数据验证文档与工具是否降低约束违反率，而非仅宣称「对 AI 友好」。

**真实 LLM 全量跑批（2026-07-17T01-09-31，18 prompts × 5 configs）：**

| 配置          | MCP | Skill | AGENTS.md | 通过率 |
| ------------- | --- | ----- | --------- | ------ |
| baseline-antd | —   | —     | —         | 0%     |
| ob-skill-only | —   | ✓     | —         | 100%   |
| ob-agents-md  | —   | —     | ✓         | 100%   |
| ob-mcp-only   | ✓   | —     | —         | 100%   |
| ob-full       | ✓   | ✓     | ✓         | 100%   |

主指标 Lift（ob-mcp vs baseline）= **100%**（目标 ≥ 40%）。CI 可跑 `pnpm run test:vibe-smoke`；发布前建议 `pnpm run test:vibe-run`。

## 单体 ob-design mcp

Agent 只连接 `@oceanbase/design-cli mcp`。`@ant-design/cli` 仅作为 **`ob_info` 的内部子进程 delegate**（非 antd MCP），对外不暴露 `antd_info`；查询范围**锁定 antd v5**（OceanBase Design 1.x 暂不支持 antd v6）。`ob_doc` / `ob_demo` / `ob_token` 等为纯 OB 离线数据。详见 [CLI 命令与 antd 依赖矩阵](/docs/react/cli#命令与-antd-依赖矩阵)。

详见 [For Agents](/docs/react/for-agents)、[MCP Server](/docs/react/mcp) 与 [LLMs.txt](/docs/react/llms)。
