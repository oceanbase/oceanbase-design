---
name: oceanbase-figma-code-connect
internal: true
description: >-
  Incrementally create or update Figma Code Connect mappings in packages/**/index.figma.tsx. Use when the user mentions Code Connect, index.figma.tsx, Figma Dev Mode snippets, design-to-code mapping, or publishing component connections for @oceanbase/design / @oceanbase/ui.
---

# Figma Code Connect (OceanBase Design)

## When to use this skill

- User asks to **update / fix / add** Code Connect for a component (e.g. "同步 Alert 的 Figma 映射").
- Figma component properties changed (new variant, renamed layer).
- New in-scope component needs its first `index.figma.tsx`.

**Do not** bulk-rewrite all 38 mappings unless explicitly asked. **One component per task** (incremental).

## Source of truth

| Path | Role |
| --- | --- |
| `packages/design/src/<dir>/index.figma.tsx` | design 组件映射（直接编辑、Git 入库） |
| `packages/ui/src/<Name>/index.figma.tsx` | ui 组件映射 |
| [`figma.config.json`](figma.config.json) | `include`、`paths`、`documentUrlSubstitutions` |
| [`references/CONVENTIONS.md`](references/CONVENTIONS.md) | 映射写法与硬规则 |

There is **no** `sources/` or `generate` step. Edit the colocated file in `packages/`.

## Agent workflow (incremental update)

### 1. Scope one component

Identify target directory, e.g. `alert` → `packages/design/src/alert/index.figma.tsx`.

If the file exists, **read it first** and apply minimal diff. If missing, copy structure from a similar component (e.g. `skeleton` for simple, `breadcrumb` for multi-connect).

### 2. Gather context

| Need | Tool |
| --- | --- |
| OB component props | `ob-design info <Component>` or MCP `ob_info` |
| Figma property names / types | Figma MCP `get_context_for_code_connect` (see [CONVENTIONS.md](references/CONVENTIONS.md)) |
| Existing patterns | Read sibling `index.figma.tsx` in repo |
| Draft scaffold | `npx @figma/code-connect connect create "<figma-url>" --outFile ...` (then refine) |

### 3. Edit mapping

- Import from `@oceanbase/design` / `@oceanbase/ui` / `@oceanbase/icons` only.
- Use `figma.connect(RealComponent, '<FIGMA_OCEANBASE_*>' | url, { props, example })`.
- New `<FIGMA_*>` placeholder → add to `figma.config.json` `documentUrlSubstitutions`.
- Follow [CONVENTIONS.md](references/CONVENTIONS.md) (no style/className in mapping, Figma typo values, etc.).

### 4. Validate (single file first)

```bash
pnpm run figma:parse:file -- packages/design/src/alert/index.figma.tsx
```

Fix until exit code 0. Then optional full check:

```bash
pnpm run figma:parse
```

### 5. Config housekeeping (only if needed)

```bash
pnpm run figma:sync-include   # after adding a new index.figma.tsx path
```

### 6. Publish (human / maintainer with token)

```bash
pnpm run figma:publish:dry-run
pnpm run figma:publish
```

Requires `.cursor/skills/figma-code-connect/.env` (`FIGMA_ACCESS_TOKEN`, `FIGMA_FILE_KEY`).

## Commands (repo root)

```bash
pnpm run figma:sync-include
pnpm run figma:parse
pnpm run figma:publish:dry-run
pnpm run figma:publish
```

## In-scope components (38)

design: alert, badge, breadcrumb, button, card, checkbox, date-picker, descriptions, divider, drawer, dropdown, empty, filter, form, input, input-number, menu, message, modal, notification, pagination, popconfirm, progress, radio, result, segmented, select, skeleton, spin, steps, switch, table, tabs, tag, tooltip, upload.

ui: FooterToolbar, PageContainer.

**Out of scope:** `packages/icons` icon matrix (separate effort).

## Minimal example (single connect)

See `packages/design/src/alert/index.figma.tsx`:

```tsx
figma.connect(Alert, '<FIGMA_OCEANBASE_ALERT>', {
  props: {
    type: figma.enum('type', {
      info: 'info',
      warning: 'warning',
      success: 'success',
      error: 'error',
    }),
    message: figma.textContent('Text'),
  },
  example: ({ type, message }) => <Alert type={type} message={message} />,
});
```

## PR merge gate

- Only touched component(s)' `index.figma.tsx` (+ `figma.config.json` if placeholders changed).
- `pnpm run figma:parse` passes.
- `pnpm build` no regression.

## Anti-patterns

- Editing all mappings in one PR without request.
- Copying from `antd` Code Connect examples.
- Putting layout/preview styles in `props` instead of component API props.
- Forgetting `documentUrlSubstitutions` for new `<FIGMA_*>` keys.
- Running `figma:publish` without local `figma:parse` success.
