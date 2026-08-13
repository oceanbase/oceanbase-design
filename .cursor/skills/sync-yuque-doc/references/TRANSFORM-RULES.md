# Yuque → Dumi Transform Rules

Reference for `sync-yuque-doc`. Apply mechanically; do not improvise layout.

## Frontmatter

Dumi spec docs use YAML frontmatter **unchanged across syncs**:

```yaml
---
group: Design Foundation 设计基础
subGroup: Icongraphy 图形
title: Product graphic 产品缺省图
order: 12
---
```

- **Never** take frontmatter from Yuque export
- **Always** read from existing `docs/spec/{slug}.zh-CN.md` or config `frontmatter.zh-CN`

## Site intro (Dumi-only)

Insert after frontmatter, before Yuque body. Not in Yuque source.

```markdown
产品缺省图通过 [Empty](/components/empty) 与 [Result](/components/result) 组件提供，使用方式详见组件文档。
```

English counterpart in `frontmatter` / `siteIntro.en` for build scripts.

## Headings

| Yuque          | Dumi reason                    | Output         |
| -------------- | ------------------------------ | -------------- |
| `# 变更点`     | frontmatter `title` is page H1 | `## 变更点`    |
| `## 元素剖析`  | keep relative depth            | `### 元素剖析` |
| `### 颜色规范` | keep                           | `### 颜色规范` |

Regex: `body.replace(/^# /gm, '## ')`

Do **not** demote `##` → `###` globally; only top-level `#`.

## Lists

Yuque OBUI docs use `+` for unordered lists in spec sections:

```markdown
- 欢迎页面：左右版式...
- 常规页面：上下版式...
```

Keep `+`. Do not normalize to `-` unless the existing target file already uses `-` for that section.

Numbered lists: keep `1.` / `2.` / `3.` as exported.

## Inline HTML

| Tag | Action |
| --- | --- |
| `<u>一级插图 + 三级插图</u>` | keep |
| `<br/>` in table cells | keep (required for multi-image cells) |
| `<br/><br/>` in tertiary table cells | keep |
| `<!-- comment -->` | strip |
| `<div style="display:flex">` | **only** if Yuque source uses flex; prefer tables when Yuque uses tables |

## Dumi containers

| Yuque        | Dumi                      |
| ------------ | ------------------------- |
| `:::tips`    | `:::tips` (not `:::info`) |
| `:::warning` | `:::warning`              |

Strip entire container when matched by config `stripBlocks`, e.g.:

```json
"stripBlocks": [
  ":::tips\\s*\\n插图设计地址：[\\s\\S]*?:::\\s*"
]
```

## Tables

Yuque scenario tables = screenshot + illustration in one cell:

```markdown
| ![](cdn/page.png)<br/>![label](cdn/icon.jpeg) | ... |
| --------------------------------------------- | --- |
```

Helper:

```js
const cell = parts => parts.filter(Boolean).join('<br/>');
const tertiaryCell = parts => parts.filter(Boolean).join('<br/><br/>');
```

Alignment row from Yuque:

- Status feedback: `| :---: | --- | --- | --- |`
- Tertiary: `| :---: | :---: |`

Empty trailing cells: keep `|  |` as in Yuque.

## Images

### URL replacement

```js
body.replace(/https:\/\/intranetproxy\.alipay\.com\/[^)\s"]+/g, (url) => {
  const file = url.split('/').pop();
  if (skipImages.has(file)) return '';
  return urlMap[file] || throw;
});
body.replace(/!\[\]\(\)/g, '');
```

### CDN URL choice

Use Huamei JSON `results[i].asset.assetUrl` (ends with `/original`).

Do **not** use `subAssets[0].assetUrl` (WebP) for spec docs — matches `docs/spec/chart-color.zh-CN.md` and `system-color.zh-CN.md`.

### skipImages

Page screenshots that 404 on Yuque CDN. Example: `1781580507731-1c0ab9e8-c87e-4114-9fa6-b328484df5e7.jpeg` (404 column page mock).

Cell keeps illustration image only.

### PNG → JPEG

File `1781604356167-a5e9673a-d887-4441-aab6-bc0092a0b6be.png` fails Huamei PNG compress:

```bash
sips -s format jpeg "$png" --out /tmp/upload.jpeg
huamei asset upload /tmp/upload.jpeg --space-id S_nZdyOe --json
```

Map key remains original `.png` filename for markdown replacement.

## Links

| Type                           | Action                                       |
| ------------------------------ | -------------------------------------------- |
| `/components/empty`            | keep (site internal)                         |
| `https://yuque.antfin.com/...` | remove unless user wants source link         |
| `https://www.figma.com/...`    | strip via `stripBlocks` unless user requests |
| `intranetproxy` image URLs     | replace with CDN                             |

## English generation

### translate-docs (simple)

- Input: synced `*.zh-CN.md`
- Output: `*.md` (unsuffixed English in `docs/`)
- Preserve: CDN URLs, table HTML, `<u>`, `+`, structure
- Translate: headings, paragraphs, list text, image alt text

For Dumi-only layout tweaks (flex rows, `.product-graphic-spec` wrappers), edit zh-CN markdown after sync, then run `translate-docs` for EN.

## Anti-patterns (from product-graphic sync)

| Wrong                              | Right                        |
| ---------------------------------- | ---------------------------- |
| Flex layout for scenario grids     | Markdown tables with `<br/>` |
| `200×200` when Yuque has `200*200` | keep `*`                     |
| Local `/assets/spec/...` in git    | Huamei CDN only              |
| `:::info` for Yuque `:::tips`      | match container type         |
| Paraphrase 「欢迎登陆1」           | keep Yuque wording           |
| Manual CDN paste                   | url-map from `huamei --json` |

## Validation grep

```bash
rg 'intranetproxy|/assets/spec/' docs/spec/
rg ':::info' docs/spec/product-graphic.zh-CN.md   # should be empty if stripped
rg '^# ' docs/spec/product-graphic.zh-CN.md       # no H1 in body
```
