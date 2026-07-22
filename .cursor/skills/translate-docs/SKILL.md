---
name: translate-docs
description: Translates Chinese Markdown documentation to English for oceanbase-design i18n. Use when translating docs, creating *.en-US.md files, or when the user asks for doc translation, i18n translation, or zh-CN to en-US conversion.
---

# Translate Docs (zh-CN → en-US)

Translates Chinese Markdown docs to English for the oceanbase-design site.

## File naming conventions

Dumi default locale is **en-US** at `/`; **zh-CN** uses `/zh-CN` prefix.

| Area                                | English (en-US)  | Chinese (zh-CN) |
| ----------------------------------- | ---------------- | --------------- |
| `docs/**` site docs                 | `foo.md`         | `foo.zh-CN.md`  |
| `packages/**/src/**` component docs | `index.en-US.md` | `index.md`      |

**Rules**

- `docs/`: unsuffixed `.md` = English; `.zh-CN.md` = Chinese (including `docs/blog/`).
- `packages/`: `index.md` = Chinese; `index.en-US.md` = English (legacy layout; do not rename without a migration plan).
- Internal links in Chinese docs: locale-agnostic paths (`/components/button`). `rehypePlugin` adds `/zh-CN` for `.zh-CN.md` files.
- Sidebar locale filtering uses filename suffix (see `isSidebarItemZhCN` in `.dumi/theme/utils.ts`).

## When to Use

- User asks to translate a doc, create English version, or generate `*.en-US.md` / split `*.zh-CN.md`
- Batch translating `docs/` or `packages/*/src/**/index.md` for i18n

## Workflow

1. Read the source Chinese file (`.md` in packages, or `.zh-CN.md` in docs)
2. Apply [glossary.json](glossary.json) for consistent terminology
3. Translate content; preserve structure (see rules below)
4. Write output:
   - `docs/foo.zh-CN.md` → `docs/foo.md`
   - `packages/design/src/button/index.md` → `packages/design/src/button/index.en-US.md`

## Rules

### Do NOT translate

- Code blocks (`...`) — keep as-is; only translate Chinese comments inside code if present
- Frontmatter keys: `title`, `order`, `group`, `path`, `nav` — translate values only
- Link paths: `/components/button`, `/docs/design-introduce` — keep unchanged
- `<code src="...">` — keep `src` path; translate `title` and `description` attributes
- `<embed src="...">` — keep `src` path unchanged
- File paths, package names, API names

### Do translate

- Body text, headings, paragraphs, list items
- Frontmatter `title`, `group.title`, `nav.title` values
- `<code title="..." description="...">` attribute values
- Table headers and cell content (except code/API names)

### Structure preservation

- Keep heading levels (`#`, `##`, `###`)
- Keep Markdown syntax (lists, tables, links)
- Keep Dumi directives: `<code>`, `<embed>`, `<!-- prettier-ignore -->`

## Glossary

Use [glossary.json](glossary.json) for term mapping. Key entries:

| 中文     | English           |
| -------- | ----------------- |
| 按钮     | Button            |
| 表单     | Form              |
| 表格     | Table             |
| 全局配置 | ConfigProvider    |
| 分页     | Pagination        |
| 日期选择 | DatePicker        |
| 选择器   | Select            |
| 输入框   | Input             |
| 设计系统 | design system     |
| 组件库   | component library |

Full list in [glossary.json](glossary.json). When translating, prefer these mappings for consistency.

## Output naming

| Source (Chinese)                        | Output (English)                            |
| --------------------------------------- | ------------------------------------------- |
| `docs/design/design-introduce.zh-CN.md` | `docs/design/design-introduce.md`           |
| `docs/design/react/for-agents.zh-CN.md` | `docs/design/react/for-agents.md`           |
| `packages/design/src/button/index.md`   | `packages/design/src/button/index.en-US.md` |

## Integration with baoyu-translate

When `baoyu-translate` (from JimLiu/baoyu-skills) is available:

- Use `/translate --to en-US --mode normal docs/design/design-introduce.md` for full workflow (analyze → translate)
- Use `--mode refined` for publication-quality docs (analyze → translate → review → polish)
- Output: `{source}-en-US/translation.md` — copy to `{source}.en-US.md` for Dumi
- Project EXTEND.md: `.baoyu-skills/baoyu-translate/EXTEND.md` (glossary: `glossary-zh-en.md`)

## Composer / Batch Tips

When translating multiple files with Cursor Composer:

- **Batch prompt**: "Translate the following docs to English using the translate-docs skill. Create \*.en-US.md for each. Apply glossary.json for terminology."
- **Consistency check**: After batch translation, run "Compare keys/terms across all \*.en-US.md files. List any inconsistent translations."
- **Review**: Always do human spot-check on P0 docs (design-introduce, quickstart, component overview).

## Example

**Input (excerpt):**

```markdown
---
title: Button 按钮
---

## 组件说明

按钮用于开始一个即时操作。
```

**Output:**

```markdown
---
title: Button
---

## Component Description

Button is used to trigger an instant action.
```
