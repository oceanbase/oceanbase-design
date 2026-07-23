---
name: changelog
internal: true
description: >-
  Write user-facing changelog for oceanbase/oceanbase-design: PR bilingual table, post-commit chat output (design-CHANGELOG style), and when to skip. Use after commit, when filling PR Changelog, or when the user asks for 更新日志.
---

# Changelog

## Principle

**User-perceivable only.** Describe the capability or fix from the reader's side. Implementation and repo plumbing belong in PR Background, not Changelog.

| ✅ Write                                 | ❌ Skip                                            |
| ---------------------------------------- | -------------------------------------------------- |
| Component API / behavior / visual change | `index.figma.tsx` paths, colocated files           |
| Bug users would hit in apps              | ESLint / tsconfig / father ignores                 |
| CLI / MCP / Figma workflow users adopt   | Cursor Agent Skill, `publish.sh`, CI job names     |
| Breaking change + migration              | File counts ("38 components") without user meaning |

No user impact → **do not invent changelog**. Use `No user-facing changes` / `无用户可感知变更` in PR, and omit post-commit changelog unless the user asks.

## PR Changelog (required in template)

One **short sentence** per language. Same meaning in EN and CN.

```markdown
| Language | Changelog |
| --- | --- |
| 🇺🇸 English | Figma design components now link to `@oceanbase/design` and `@oceanbase/ui` code via Code Connect. |
| 🇨🇳 Chinese | Figma 设计组件可通过 Code Connect 查看对应的 `@oceanbase/design` 与 `@oceanbase/ui` 代码。 |
```

Counter-example (too internal):

```markdown
| 🇺🇸 English | Added 38 colocated index.figma.tsx files, Cursor agent skill, and CI parse/publish workflow. |
```

See also: `.cursor/skills/github-pr-submit/SKILL.md`.

## Post-commit changelog (chat)

After commit in this repo, output changelog in **`docs/design/design-CHANGELOG.md`** style when the change is user-facing.

Structure:

```markdown
- <Area or Component>
  - <emoji> <One line, user-facing>
```

Common emoji (match existing releases):

| Emoji | Use                      |
| ----- | ------------------------ |
| 🆕    | New feature              |
| 🐞    | Bug fix                  |
| 💄    | Style / visual           |
| 🌈    | Theme / token            |
| 📖    | Documentation users read |
| ⭐️    | Enhancement              |
| ♿    | Accessibility            |

Example (Figma Code Connect):

```markdown
- Figma Code Connect
  - 🆕 Figma 设计组件可通过 Code Connect 查看对应的 `@oceanbase/design` 与 `@oceanbase/ui` 代码实现。
```

Example (component fix):

```markdown
- Table
  - 🐞 Fixed first-column row merge padding misalignment inside Card.
```

Package-specific releases use their own files when cutting a release:

- `docs/design/design-CHANGELOG.md`
- `docs/ui/ui-CHANGELOG.md`
- `docs/charts/charts-CHANGELOG.md`
- `docs/codemod/codemod-CHANGELOG.md`

Do **not** edit those files on every PR unless release or the user explicitly requests it.

## Checklist

1. Would a consumer of the npm package or Figma library notice this without reading our repo?
2. Can you remove file names, script names, and architecture words and still be accurate?
3. Is one line enough? Prefer one line.
