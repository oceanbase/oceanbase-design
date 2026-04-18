# Figma 设计说明里的文档链接（documentationLinks）

**本质**：在 Figma 里给 **组件 / 组件集 / 变体** 的 **描述与说明**（Dev Mode 中通过节点的 **`documentationLinks`** 呈现，常出现在组件说明、变体说明等文档区）加上 **指向文档站「组件映射」Tab** 的链接，让设计稿与线上交互预览一一对应。

**不要**在 `*.figma.tsx` 里塞 URL（会影响 `figma connect parse`）。链接只挂在 **Figma 画布节点**上；引用库组件请到 **库源文件** 里改主组件。

**推荐顺序（Agent / 人工都适用）**：① **先**在仓库根执行脚本，把 JSON **打到 stdout 或重定向到本机任意路径**（**不要**把默认产物写进 **`skills/figma-code-connect/`** 被 Git 追踪的目录，以免误提交）；② **再**用这份 JSON，**按条目一条条** 在设计稿里改对应节点的 **`documentationLinks`**（例如通过 Figma MCP **`use_figma`**）。不要跳过脚本手搓整份 JSON，也不要试图一条命令批量改稿却不对照 JSON。

---

## 怎么做

### 第 1 步：脚本生成 JSON（占位键 → 文档站 URL）

在仓库根目录执行：

```bash
pnpm exec ts-node --esm --transpile-only skills/figma-code-connect/scripts/figma-documentation-link-urls.ts > /tmp/documentation-link-urls.json
```

（默认 **仅 stdout**；上例把 JSON 写到本机 `/tmp`，避免在仓库内新增文件。若确需写盘：`--out /绝对路径/…json`。）

可选环境变量（文档站 origin，用于拼出链接）：

- **`DOCUMENTATION_LINK_DOC_ORIGIN`**（推荐）
- **`PLAYGROUND_DOC_ORIGIN`**（与旧说明兼容，等价）

实现与默认常量见 **[`../scripts/figma-documentation-link-urls.ts`](../scripts/figma-documentation-link-urls.ts)**。脚本会：

- 在 **`packages/design/src`**、**`packages/ui/src`** 下**递归**查找 **`index.$tab-playground.md`**（遍历 design 时**不进入**顶层 **`figma`** 目录）。
- 对每个 tab 文件，读取**同目录**的 **`index.figma.tsx`**，用 **`figma.connect(..., '<占位键>', …)`** 的第二参作为 JSON 的键；若同目录没有 **`index.figma.tsx`**，该 tab 会被跳过并在 stderr 打出 `[skip]`。

产出内容：`Code Connect 第二参（占位键）→ 文档站 URL`。

| 包 | 文档站路径模式（`slug` = 组件目录名转 kebab-case） |
| --- | --- |
| `@oceanbase/design`（`packages/design/src/<组件>/`） | `{origin}/components/<slug>?tab=playground` |
| `@oceanbase/ui`（`packages/ui/src/<组件>/`） | `{origin}/biz-components/<slug>?tab=playground` |

默认 **`DOCUMENTATION_LINK_DOC_ORIGIN`** 未设置时为 **`https://design.oceanbase.com`**（与脚本内常量一致）。

### 第 2 步：按 JSON 逐条改设计稿（写 `documentationLinks`）

对 **每一条** 键值对（**一条 JSON 键值 ≈ 稿面上一处节点的一次更新**）：

1. 取 **JSON 的键**（与 `figma.connect(..., '<键>', …)` 第二参一致）。
2. 用 **同一占位键** 在 **`skills/figma-code-connect/figma.config.json`** 的 **`codeConnect.documentUrlSubstitutions`** 里找到对应 Figma 设计链接，解析 **`fileKey`** 和 **`node-id`**（URL 里 `5025-6647` → Plugin API 里 `5025:6647`），在稿中定位 **组件 / 组件集 / 变体** 节点。
3. 用 Figma MCP **`use_figma`**（调用前必须先读并遵守 **figma-use** 技能）执行一次：在该节点上把 **`documentationLinks`** 设为指向 **JSON 里该键对应的 URL**（按需同时维护 **`descriptionMarkdown`**）。

**一条 JSON 条目对应一次对稿面的写入**（例如一次 `use_figma`）；不要为「写回 Figma」再临时加仓库脚本替代上述逐条对照。

全部写完后，设计稿说明区即可跳到文档站 **组件映射** 预览。

---

## 注意

- 链接目标当前脚本固定为 **`?tab=playground`**，与文档站「组件映射」Tab 对齐（站点若启用 **hash 路由**，浏览器完整地址可能为 `{origin}/#/components/...` 等形式，以线上为准）。
- **仅**在同时存在 **`index.$tab-playground.md`** 与 **`index.figma.tsx`** 的组件目录中产出键值。
- 若节点来自 **引用库**，须到 **库源** 修改主组件上的 **`documentationLinks`**。
- Code Connect 编写规范见 **[`figma-component_reference.md`](figma-component_reference.md)**。
