---
name: sync-yuque-doc
description: >-
  Syncs Yuque (语雀) design/docs into oceanbase-design Dumi markdown (docs/spec/*.zh-CN.md + *.md). Handles content, format, Huamei CDN images, and attachments. Use when syncing 语雀文档, updating spec docs from Yuque, or when the user asks for sync-yuque-doc / 语雀同步.
---

# Sync Yuque Doc → Dumi Spec

One-shot sync from Yuque to `docs/spec/{slug}.zh-CN.md` (+ English `docs/spec/{slug}.md`), with **no manual edits** when config and tooling are in place.

## Prerequisites

| Tool                                | Purpose                                     |
| ----------------------------------- | ------------------------------------------- |
| MCP `user-语雀mcp-server v2`        | `skylark_resolve_url`, `skylark_doc_detail` |
| `huamei` CLI (`@alipay/huamei-cli`) | Upload images to CDN                        |
| `translate-docs` skill              | English `docs/spec/*.md` for simple docs    |

Default Huamei space for **design spec** images: `S_nZdyOe`  
CDN pattern: `https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/.../original`

## Quick start (one command after fetch)

```bash
# 1. Agent: fetch Yuque body via MCP → save to /tmp/yuque-body.md
# 2. Run sync (download images → Huamei → write zh-CN)
node .cursor/skills/sync-yuque-doc/scripts/sync-yuque-doc.mjs \
  --config .cursor/skills/sync-yuque-doc/configs/product-graphic.json \
  --body /tmp/yuque-body.md

# 3. Generate English with translate-docs skill (docs/spec/product-graphic.zh-CN.md → product-graphic.md)
```

## Workflow

Copy this checklist and complete every step:

```
Sync progress:
- [ ] 1. Resolve Yuque URL → doc_id
- [ ] 2. Fetch body (format=md) + save to temp file
- [ ] 3. Load or create sync config for target slug
- [ ] 4. Run sync-yuque-doc.mjs (images + transform + write zh-CN)
- [ ] 5. Generate English (`translate-docs` skill)
- [ ] 6. Validate (grep + dev preview)
- [ ] 7. Remove temp assets; do NOT commit url-map / downloaded images
```

### Step 1–2: Fetch from Yuque

```text
skylark_resolve_url({ url: "<yuque-url>" })  → doc_id
skylark_doc_detail({ doc_id, format: "md" }) → save body to /tmp/yuque-body.md
```

Use `format: "md"` (not `ymd`) unless you need section-level editing via `skylark_doc_section_*`.

### Step 3: Config

Copy [configs/\_template.json](configs/_template.json) → `configs/{slug}.json`. Set:

- `outputs.zh-CN` — e.g. `docs/spec/product-graphic.zh-CN.md`
- `outputs.en` — e.g. `docs/spec/product-graphic.md`
- `frontmatter` — **preserve existing** `group`, `subGroup`, `title`, `order`
- `siteIntro` — Dumi-only paragraph(s) after frontmatter (component links, etc.)
- `huameiSpaceId` — default `S_nZdyOe` for spec docs
- `skipImages` — filenames that 404 on Yuque CDN (screenshots only; keep illustration)
- `stripBlocks` — regex list (e.g. Figma `:::tips` blocks)

See [product-graphic.json](configs/product-graphic.json) for a real example.

### Step 4: Run sync script

```bash
node .cursor/skills/sync-yuque-doc/scripts/sync-yuque-doc.mjs \
  --config .cursor/skills/sync-yuque-doc/configs/{slug}.json \
  --body /tmp/yuque-body.md \
  [--url-map /tmp/huamei-url-map.json]   # skip download/upload if map exists
```

Script does:

1. Extract `intranetproxy.alipay.com` image URLs from body
2. Download to temp dir (skip `skipImages`)
3. `huamei asset upload <dir> --space-id <spaceId> --json`
4. Retry failures: PNG → JPEG via `sips`, re-upload
5. Write `/tmp/huamei-url-map.json` (`filename → asset.assetUrl`)
6. Transform body → prepend frontmatter + siteIntro → write `outputs.zh-CN`

### Step 5: English

Use `translate-docs` skill: `docs/spec/{slug}.zh-CN.md` → `docs/spec/{slug}.md`.

**Rule:** EN and zh-CN must share the **same structure and CDN URLs**; only text differs.

### Step 6: Validate

```bash
# No intranet / local asset leaks
rg 'intranetproxy|/assets/spec/' docs/spec/{slug}*.md

# All images in zh-CN resolve (optional spot-check)
rg -o 'https://mdn.alipayobjects.com[^)]+' docs/spec/{slug}.zh-CN.md | head

# Preview
pnpm dev  # open /zh-CN/docs/spec/{slug} and /docs/spec/{slug}
```

Pass criteria:

- [ ] Heading levels: page title in frontmatter; body starts at `##`
- [ ] Tables match Yuque (cells use `<br/>`, tertiary rows `<br/><br/>`)
- [ ] `+` lists, `<u>`, numbered lists preserved
- [ ] No `intranetproxy`, no `public/assets/spec/` paths
- [ ] `skipImages` cells show illustration only (no broken img)
- [ ] `stripBlocks` removed (no Figma / internal-only links unless requested)
- [ ] siteIntro present; wording unchanged from last sync unless intentional

## Content transform rules

Full reference: [references/TRANSFORM-RULES.md](references/TRANSFORM-RULES.md)

### Must preserve (Yuque → Dumi)

| Yuque                   | Dumi                                                   |
| ----------------------- | ------------------------------------------------------ |
| `# 章节`                | `## 章节` (demote one level; H1 = frontmatter `title`) |
| `+` unordered lists     | keep `+` (do not convert to `-` if Yuque used `+`)     |
| `<u>…</u>`              | keep                                                   |
| `:::tips` / `:::info`   | keep type Yuque used (`:::tips` not `:::info`)         |
| Table multi-image cells | join with `<br/>`; tertiary section `<br/><br/>`       |
| `200*100` size notation | keep `*` not `×` if Yuque used `*`                     |
| Original Chinese copy   | do not paraphrase                                      |

### Must transform

| Source | Target |
| --- | --- |
| `https://intranetproxy.alipay.com/skylark/.../{filename}` | Huamei `asset.assetUrl` (`/original`) |
| `<!-- ... -->` | remove |
| `![]()` after skipped image | remove |
| Flex `<div style="display:flex">` **if Yuque used tables** | use Markdown tables, not flex |
| Internal-only blocks in `stripBlocks` | remove |

### Must NOT do

- Commit downloaded images under `public/assets/spec/`
- Commit `/tmp/huamei-url-map.json` (regenerate on sync)
- Replace tables with flex layouts for “prettier” rendering
- Add Figma / Yuque links unless user asks
- Use `subAssets[0]` WebP for spec docs — use **`asset.assetUrl` (`/original`)** for consistency with existing spec pages

## Images & attachments

### Image pipeline

```
Yuque MD (intranetproxy URLs)
  → download to /tmp/sync-yuque-doc-{slug}/
  → huamei asset upload --space-id S_nZdyOe --json
  → map[filename] = result.asset.assetUrl
  → replace URLs in markdown
  → delete temp dir
```

### Upload failures

| Error               | Fix                                                                |
| ------------------- | ------------------------------------------------------------------ |
| PNG compress fail   | `sips -s format jpeg <file> --out /tmp/<name>.jpeg` then re-upload |
| Single file fail    | Upload individually; merge into url-map                            |
| Source 404 on Yuque | Add filename to `skipImages`; remove resulting `![]()`             |

### Non-image attachments

- Yuque file cards / attachments: use `skylark_resource_detail` if URL is a resource id
- For public site: upload via `huamei asset upload <file> --type file --space-id S_nZdyOe`
- Replace link in MD with `asset.assetUrl`

## Config vs manual layout

| Scenario | Tool |
| --- | --- |
| First sync / Yuque structure changed | Update config `stripBlocks` / `skipImages`, re-run sync script |
| CDN URLs changed | Re-run sync with existing `--url-map` |
| Dumi-only layout (flex rows, `.product-graphic-spec`) | Edit `docs/spec/*.zh-CN.md` directly; then `translate-docs` for EN |

## Agent notes

1. **Always read existing target file** before sync — preserve `frontmatter` and `siteIntro` unless user wants replace.
2. **MCP auth**: if `skylark_*` fails, ask user to authenticate 语雀 MCP first.
3. **huamei not found**: `source ~/.zshrc; tnpm i -g @alipay/huamei-cli`
4. After sync, summarize: files written, image count, skipped images, stripped blocks.
5. Changelog: spec doc sync is user-facing → mention in PR/design-CHANGELOG if part of a release task.

## Related

- [references/TRANSFORM-RULES.md](references/TRANSFORM-RULES.md) — transform details & edge cases
- [translate-docs](../translate-docs/SKILL.md) — English prose docs
