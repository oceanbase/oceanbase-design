---
title: Agent Skills
order: 3
group:
  title: AI
  order: 0
---

This repository provides the **oceanbase-design** Skill to unify how **OceanBase Design** packages (design, ui, icons, charts, util) are used during development, code review, and migration — reducing style and code drift. It applies to this repo and business projects that depend on these packages; migration covers `@oceanbase/codemod` and manual verification.

Programmatic setup lives in the sidebar **AI** group (aligned with Ant Design). This page is narrative and code-review guidance; start at [For Agents](/docs/react/for-agents).

## Skill vs CLI

| Question | Where to look |
| --- | --- |
| Why does Card+Table need `innerBordered`? | Skill `09-combo` / ASSEMBLY |
| What OB-extended props does `Table` have? | `ob-design info Table` / `ob_info` (**not** the Skill) |
| Filter or LightFilter for this page? | Skill `08-filter` + `ob-design route` |
| How to configure project MCP? | `ob-design setup` / For Agents |

The Skill is **narrative and patterns**; `@oceanbase/design-cli` is the **machine truth for APIs and constraints**. They complement each other — prop tables are not duplicated in the Skill (props are CI-generated via `extract:added-props` → `references/generated/props-index.md`).

## Lessons from vibe-tests

In real LLM batch runs, **ob-skill-only scored 18/18**, showing the Skill is already clear enough for models. Priorities:

1. **Keep the Skill lean** — no API tables in SKILL.md; details in `references/`, machine index in `generated/props-index.md`
2. **Strengthen Agent entry** — SKILL.md top links to `ob-design setup` and For Agents (Agent tooling section added)
3. **Front-load high-value constraints** — Filter, innerBordered, icon package routing stay in the highest-priority block

## Use in external projects

If your project uses `@oceanbase/design` / `@oceanbase/ui` and you want AI to follow the same conventions, install this Skill from **GitHub** without cloning the whole repo. Skills are not published to npm and are not bundled with `@oceanbase/design`.

### Install

In your project root (aligned with [Ant Design](https://ant.design/docs/react/for-agents), recommended):

```bash
npx skills add oceanbase/oceanbase-design
```

## Skill layout

```
oceanbase-design/
├── SKILL.md                              # Entry and overview
└── references/
    ├── ASSEMBLY.md                       # 00–09 constraint summary
    ├── design/                           # General components
    │   ├── README.md                     # Module index
    │   ├── 00-overview.md                # Overview, ConfigProvider, conventions
    │   ├── 01-theme-and-token.md         # Theme and Token
    │   ├── 02-basic.md                   # Basic components
    │   ├── 03-layout-card.md             # Layout and Card
    │   ├── 04-form.md                    # Form
    │   ├── 05-data-display.md            # Data display
    │   ├── 06-feedback.md                # Feedback
    │   ├── 07-navigation.md              # Navigation
    │   ├── 08-filter.md                  # Filter (controlled conventions)
    │   └── 09-combo.md                   # Combos (Card+Table innerBordered)
    ├── ui.md                             # Biz components
    ├── icons.md                          # Icons
    ├── util.md                           # Utilities
    ├── charts.md                         # Charts
    ├── codemod.md                        # Codemod migration
    ├── agent-tooling.md                  # Agent tooling (CLI/MCP/AGENTS.md)
    └── generated/
        └── props-index.md                # CI-generated OB extended props index
```
