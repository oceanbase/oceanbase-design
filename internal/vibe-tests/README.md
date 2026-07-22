# OceanBase Design vibe-tests

Measures how well agents follow OB conventions under different tooling configs.

## Configs

| Config        | MCP     | Skill | AGENTS.md |
| ------------- | ------- | ----- | --------- |
| baseline-antd | —       | —     | —         |
| ob-skill-only | —       | ✓     | —         |
| ob-agents-md  | —       | —     | ✓         |
| ob-mcp-only   | ob only | —     | —         |
| ob-full       | ob      | ✓     | ✓         |

Primary metric: `ob-mcp-only` vs `baseline-antd` constraint adherence lift >= 40%.

## Quick start

```bash
# Full iteration: 18 prompts × 5 configs = 90 results
pnpm run test:vibe-run

# Or from vibe-tests package
node internal/vibe-tests/src/cli.mjs run --configs all --fresh

# Primary compare only (faster)
node internal/vibe-tests/src/cli.mjs run --configs baseline-antd,ob-mcp-only --fresh

# Report + compare
node internal/vibe-tests/src/cli.mjs report --iteration <id>
node internal/vibe-tests/src/cli.mjs compare --iteration <id>
```

## Agent-driven iteration (LLM)

```bash
# 1. 创建 18 个 task
node internal/vibe-tests/src/cli.mjs interactive --sample 18

# 2. 由 Agent 按 tasks/*.json 生成 results/{config}-{id}.tsx + .json
#    （可用 Cursor subagent 分批，5 configs × 18 prompts = 90 results）

# 3. 汇总与对比
node internal/vibe-tests/src/cli.mjs aggregate --iteration <id>
node internal/vibe-tests/src/cli.mjs compare --iteration <id>
node internal/vibe-tests/src/cli.mjs report --iteration <id>
```

### 真实 LLM 跑批记录（2026-07-17）

| Iteration | 方式 | baseline | ob-skill | ob-agents | ob-mcp | ob-full | Lift |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **`2026-07-17T01-09-31`** | **9× subagent LLM（完整 5 配置）** | 0/18 | **18/18** | **18/18** | **18/18** | **18/18** | **100%** |
| `2026-07-17T01-09-31`（早期） | 6× subagent（仅 ob-mcp + baseline） | 0/18 | — | — | 18/18 | — | 100% |
| `2026-07-17T01-06-56` | 确定性 generator | 0/18 | 13/18 | 18/18 | 18/18 | 18/18 | 100% |

完整 LLM 报告：`internal/vibe-tests/results/2026-07-17T01-09-31/REPORT.md`

## Latest run (example)

After `run`, see `internal/vibe-tests/results/<timestamp>/`:

- `summary.json` — aggregate stats
- `REPORT.md` — human-readable report
- `results/*.tsx` — generated code per config × prompt

`run` uses config-specific generators: `ob-mcp-only` calls real `ob-design route` / `ob-design template` CLI.
