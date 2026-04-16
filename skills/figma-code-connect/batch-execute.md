# 批量 Code Connect 工作流

从 **stub 全量生成** 到 **按组件文件闭环**（仅 Code Connect）。**编写细则只认** [`gen-figma.md`](./gen-figma.md)；本文只补充 **批量任务的路径、顺序、交付边界**，不重复 gen-figma 正文。

## 与 `gen-figma.md` 的分工（必读）

- **规范**：[`gen-figma.md`](./gen-figma.md) 是唯一完整规则。`stories/US-*.json` 里「gen-figma §…」条目是摘要，**不能**代替阅读全文；冲突时以 skill 为准。
- **自动化**：执行与本仓库各 `packages/design/src/figma/<Name>/index.figma.tsx` 相关的用户故事时，应加载 **gen-figma** skill（若已注册）。

### 每次跑用户故事时的强制顺序（首次与重跑相同）

以下顺序**不可省略**；**不得以「代码已有」为由跳过 Figma MCP**，也不得仅用旧实现或记忆代替最新稿。

1. **读 skill**：打开并遵循 [`gen-figma.md`](./gen-figma.md) 全文（含 **§7.1 自检清单**），不仅是 `parse`。
2. **Preflight**：执行该条 `US-*.json` 的 **`preflightCommand`**（`npm run generate:figma-stubs` 或带 `-- <fileBase>`），退出码 0。
   - **与 parse 的关系**：单文件 preflight 会**覆盖**该页为自动生成 stub（常含 `figma.connect(<></>, …)` 等占位），**此时 `figma connect parse` 失败是预期的**，**不要**在「仅跑完 preflight」时当作故事未通过或去修 parse。下一步必须是步骤 3–4；**步骤 5 的 parse 只在重写完成后**做收口，**标 `passes: true` 前**须 parse 通过。
3. **拉最新稿**：对目标 `index.figma.tsx` 中**每一块** `figma.connect` 上方注释里的 Figma URL，用 **Figma MCP**（如 **`get_design_context`**，必要时 **`get_context_for_code_connect`**）**逐条**拉取**当前**设计上下文；解析 `fileKey`、`nodeId`（及分支链路的 `branchKey`）按 MCP 说明处理。
4. **重写实现**：严格按 **gen-figma.md** 编写或重写 **`figma.connect` 与 `example`**；**禁止**在未对照最新 MCP 输出的情况下仅微调旧代码。
5. **自检**：完成 gen-figma **§7** `parse`，并逐项核对 **§7.1** 及 §1–§6。

---

## 1. 产出物与路径

| 说明 | 路径 |
| --- | --- |
| 执行顺序 | [`loop-manifest.json`](../../figma/ralph/loop-manifest.json) 的 `storyFiles`（先 US-001，再按文件） |
| 单条用户故事 | [`stories/`](../../figma/ralph/stories/)：`US-001` = 全量 stub；其余与每个 `…/<Name>/index.figma.tsx` 一一对应。每条可有 **`preflightCommand`**（可复制执行的 **`npm run generate:figma-stubs`** 及参数；JSON 不会自动执行） |
| 合并 PRD | [`prd.json`](../../figma/ralph/prd.json) |

---

## 2. 执行顺序（stub 前置）

| 阶段 | 命令（项目根目录） | 含义 |
| --- | --- | --- |
| **US-001** | `npm run generate:figma-stubs` | **无参数**：只补缺失页，**不覆盖**已有 `…/<Name>/index.figma.tsx` |
| **US-002 起** | `npm run generate:figma-stubs -- <fileBase>` | **重置该页** stub；`<fileBase>` 与 `packages/design/src/figma/<fileBase>/` 目录名一致（对应 `index.figma.tsx`，如 `Alert`；匹配不区分大小写，见 `scripts/figma/code-connect/gen-figma-stubs.ts --help`） |

细则：

- 文件级故事可直接复制对应 JSON 里的 **`preflightCommand`**，与上表 US-002 起一行等价。
- `npm run … -- <fileBase>` 中间的 **`--`** 为 npm 固定写法，勿省略。
- 脚本从 **`figma/.env`** 加载 **Figma 凭证**（见 `scripts/figma/code-connect/gen-figma-stubs.ts`）；依赖见 `package.json` 的 `generate:figma-stubs`。
- 然后按 `storyFiles` 顺序交付；**前置命令成功退出后**，须先经 **Figma MCP 按 URL 拉最新稿**（见上文「每次跑用户故事时的强制顺序」），再写 `figma.connect` 与 `example`。

---

## 3. 文件级故事的交付物（US-002 起）

每条故事在同一闭环内交付：

- **`packages/design/src/figma/<Name>/index.figma.tsx`**：全部 `figma.connect` 在本故事完成；自上而下顺序；每块上方 Figma URL 为设计依据且不遗漏。
- **[`figma/figma.config.json`](../../figma/figma.config.json) `codeConnect.include`**：本文件的 `packages/design/src/figma/<Name>/index.figma.tsx` **必须**列入，否则 `figma connect parse`（见 gen-figma §7）不会解析该文件。

**组件 import**：以 [`gen-figma.md` §1](./gen-figma.md)、`package.json`、`figma.config.json` 的 `importPaths` 及仓库内现有写法为准，勿单凭某条 `US-*.json` 猜包名。

---

## 4. 自检、`passes` 与 prd 同步

- **规则与清单**：实现与评审以 [`gen-figma.md`](./gen-figma.md) 全文为准；`acceptanceCriteria` 中带 gen-figma § 的条目由 `npm run generate:ralph-batch-loop` 生成，按条核对。
- **`parse` 与规范**：`npx figma connect parse -c figma/figma.config.json …` 仅覆盖 gen-figma §7，**不能**代替对 §3.1 等的理解。
- **标 `passes: true` 前**：`include` 已含该文件、parse 等自检已通过（交付物见 §3）。
- **`prd.json`**：将对应 `stories/US-*.json` 与 `prd.json` 里同 `id` 的 **`passes`** 一并更新；若只改了 `stories/`，可执行 **`npm run generate:ralph-batch-loop`** 重生成 `prd.json`，避免两处不一致。

---

## 5. 新增或重命名 `…/<Name>/index.figma.tsx` 之后

在 `packages/design/src/figma` 增加或调整组件目录（其下 `index.figma.tsx`）后执行：

`npm run generate:ralph-batch-loop`

以刷新 `figma/ralph/stories/`、`figma/ralph/loop-manifest.json` 与 `figma/ralph/prd.json`。
