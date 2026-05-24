---
name: oceanbase-figma-code-connect
description: >-
  oceanbase-design monorepo Figma Code Connect：配置在 skills/figma-code-connect（figma.config.json、本地 .env、publish.sh）。发布：`bash skills/figma-code-connect/publish.sh`；CLI 装在 skills/figma-code-connect/.figma-publish-deps（gitignore），首发时在本目录 `npm install` 拉取 tarball，不依赖仓库根 node_modules。附加参数：`bash skills/figma-code-connect/publish.sh --dry-run`。documentationLinks：scripts/figma-documentation-link-urls.ts。Chinese：组件映射、@skills/figma-code-connect。
---

# OceanBase Design · Figma Code Connect（入口）

规范与细节在 **`references/`**；本文件做 **索引 + 仓库配置路径 + 提问示例 + Agent 执行约束**。

## 仓库内配置（原 `figma/` 已迁入本 skill）

| 路径 | 用途 |
| --- | --- |
| [`figma.config.json`](figma.config.json) | Code Connect `include` / `paths` / `documentUrlSubstitutions` |
| **`.env`**（同目录，gitignore） | 本地 `FIGMA_ACCESS_TOKEN`、`FIGMA_FILE_KEY` |
| [`publish.sh`](publish.sh) | 发布入口；CLI 缓存在 [`.figma-publish-deps/`](.figma-publish-deps/)（自动安装，已 gitignore） |

本地 secrets：**`skills/figma-code-connect/.env`**。若仍留着旧路径 `figma/.env`，请把变量迁到上文路径。

## Agent 执行约束（默认必须跑命令）

当用户请求与本技能相关的 **可脚本化步骤**（含但不限于：`figma-components.ts`、`figma-icons.ts`、`figma-documentation-link-urls.ts`、`bash skills/figma-code-connect/publish.sh`）时：

1. **默认**：在 **monorepo 仓库根**（`oceanbase-design/`）下 **实际执行** 各脚本/CLI；根据 **退出码与终端输出** 汇报结果。**不要**把「仅粘贴可复制命令」当作唯一交付物。
2. **例外**：用户写明 **「只给命令不要执行」「不要跑终端」「口述即可」** 等时，可只输出命令与说明。
3. 失败时：若因缺少 **`skills/figma-code-connect/.env`** 或 `FIGMA_ACCESS_TOKEN` / `FIGMA_FILE_KEY` 等，说明缺失项与放置位置；网络或 API 错误则概括原因并建议重试或检查 token/文件 key。

## references

| 文件 | 用途 |
| --- | --- |
| [`references/figma-component_reference.md`](references/figma-component_reference.md) | （若存在）`figma.connect`、`props` / `example`、`figma connect parse`、自检；**§3.7** 不写 **`as never` / `as any`** 等断言，用 **`// @ts-nocheck`** |
| [`references/playground_reference.md`](references/playground_reference.md) | （若存在）文档站 Playground（`demo/`、`index.md`） |
| [`references/figma-documentation-links_reference.md`](references/figma-documentation-links_reference.md) | Figma **`documentationLinks`**、脚本 JSON、MCP 写回 |

**documentationLinks 数据脚本**：[`scripts/figma-documentation-link-urls.ts`](scripts/figma-documentation-link-urls.ts)。

---

## 提问示例（可直接复制）

1. **改映射**  
   `对照 Figma 最新稿改 packages/design/src/button/index.figma.tsx，保存后对照相邻组件的 index.figma.tsx 做一致性检查；需要同步到 Figma 时再执行发布脚本（见下）。`

2. **拉组件 stub — 全量（只补缺）**  
   `在仓库根用 figma-components.ts 做一次全量同步：只为还没有对应 index.figma.tsx 的页面生成 stub，已有文件不覆盖。`

3. **拉组件 stub — 单个（重置再拉）**  
   `在仓库根用 figma-components.ts 把 Badge 的 index.figma.tsx 用 --reset 重新生成。`

4. **拉图标**  
   `按 figma-icons.ts，从 Figma 更新 packages/icons/svg`

5. **Playground demo**  
   `给 packages/design/src/alert/demo/ 与文档（与 sibling 组件风格一致）补全示例；不要改 index.figma.tsx。`

6. **设计稿 documentationLinks（两步：脚本 → 逐条改稿）**  
   `按 references/figma-documentation-links_reference.md：① 在仓库根执行 figma-documentation-link-urls.ts，JSON 重定向到本机路径；② 按 JSON 每条，对照 skills/figma-code-connect/figma.config.json 的 documentUrlSubstitutions，用 use_figma 把 URL 写到对应节点的 documentationLinks。`

7. **发布到 Figma**  
   `在仓库根执行 bash skills/figma-code-connect/publish.sh`

8. **整条链路（粗粒度）**  
   `按 skills/figma-code-connect：从 Code Connect 映射、需要时 publish、Playground 到 documentationLinks 各要做哪些事。`
