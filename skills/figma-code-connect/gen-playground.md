# Figma Playground 文档 Demo（交互预览）

在 **dumi 文档**里为 `packages/design/src/figma/<Name>/` 增加 **Playground 用的 React demo**（左侧预览 + 右侧属性面板），与 Figma Component playground 的 **props 维度**及 Code Connect **语义**一致。**`figma.connect` 的写法**以 [`gen-figma.md`](./gen-figma.md) 为准；本文只约束 **普通 React demo**，**不参与** `figma connect parse`。

---

## 1. 职责边界（必读）

| 约束 | 说明 |
| --- | --- |
| **不改映射文件** | 新增/迭代 Playground 时 **不要**改 `packages/design/src/figma/<Name>/index.figma.tsx`（及同目录其它 `*.figma.tsx`）。Code Connect 走 [`gen-figma.md`](./gen-figma.md)；与 Playground **分开展示**、**分开验收**。 |
| **只读对照** | Demo 的 props 维度、`example` 解构、传给真实组件的属性与 **子树 JSX**，均以 **当前仓库 `index.figma.tsx`** 为准（只读照抄），避免 demo 与映射漂移。 |
| **组件 API 用新名** | `demo/*.tsx` 须符合 **`@oceanbase/design` / antd 当前类型**（与 gen-figma **§2.2** 一致），**禁止** `@deprecated` 旧 prop。映射里若仍写旧名，demo **仍用新 API** 做等价表达，并注释「映射待按 gen-figma 升级」。常见：**Dropdown** → `popupRender`；**Modal/Drawer** → `open` / `afterOpenChange`（以 `*.d.ts` 为准）。 |

---

## 2. 何时需要

- 设计在 Figma 里用 **Component properties** 驱动多维度，希望在文档站 **同一套维度** 调参看效果。
- 希望文档 demo 与 **`props` / `example` 拼装**一致，避免两套语义。

不必强做：少量静态示例能说清时，普通 demo 即可。

---

## 3. 产出：`demo/` + `index.md`

| 项 | 约定 |
| --- | --- |
| **目录** | `packages/design/src/figma/<Name>/demo/` |
| **文件数** | **每条** `figma.connect` **一个** Playground 文件：主 connect → **`demo/index.tsx`**，其余 → **`demo/<具名>.tsx`**（命名可读、与映射/占位一致）。**例外**：**Icons** 见 **§4**。 |
| **单条对齐** | 每条 demo **只**对齐 **一条** connect：`props` 键、`example` 解构、根组件属性与子节点。 |
| **依赖** | 与 gen-figma 一致：默认 `@oceanbase/design`、图标 `@oceanbase/icons`；若映射已用 `@ant-design/icons` 等，demo **沿用**，勿擅自改 import。 |
| **`index.md`** | 每个 demo 文件在 **`packages/design/src/figma/<Name>/index.md`** 中对应 **一行** `<code src="./demo/…" title="…" description="…">`（风格以仓库现有 figma 页为准）。 |
| **页首** | 在 **`## 代码演示` 之前**写一句：本页对应 **`…/index.figma.tsx`** 的 Code Connect；句末 **`[Figma](https://www.figma.com/design/…)`**（链接文案只用 **`Figma`**，不写 **node-id**）。URL 优先取各 `figma.connect` **块上方注释**中的 design 链接（多 connect 时取与主 demo 对齐或**第一条**）；无注释时从 **`figma/figma.config.json`** 的 **`codeConnect.documentUrlSubstitutions`** 按占位符取。 |

---

## 4. `Icons`（聚合例外）

`Icons/index.figma.tsx` 脚本生成、大量 **无 `props`** 的 connect，**不适用**「一条 connect 一个文件」。

| 项 | 约定 |
| --- | --- |
| **入口** | 仅 **`demo/index.tsx`** 聚合；**`index.md`** 一行 `<code src="./demo/index.tsx" …>`。 |
| **对齐** | 单图标仍为 **`example` 语义**（`<Icon />`），不擅自加映射里没有的 props。 |
| **辅助文件** | **`demo/icon-connect-names.ts`**（与 `figma.connect` 组件名一一对应，映射变更时同步）；**`demo/icon-categories.ts`**（分区 + 网格）；聚合内 **按名搜索**（不区分大小写）、空状态文案。 |
| **布局** | CSS Grid（如 5 列）、浅底与可读标签；线框/Primary 可用 **`currentColor`**；多色 SVG 不强制单色。整页为可滚动图标墙时，**不强制**再套一层整区 flex 居中（与 **§6** 左栏「单段示例居中」区分）。 |
| **边界** | 仍遵守 **§1**：不改 **`index.figma.tsx`**。 |

参考：**[`figma/Icons/demo/index.tsx`](../../packages/design/src/figma/Icons/demo/index.tsx)**（及 `icon-connect-names.ts`、`icon-categories.ts`）。

---

## 5. 与 `index.figma.tsx` 对齐（核心）

1. **从 `props` 列维度**：每个 `figma.boolean` / `figma.enum` / `figma.textContent` 等 → 右栏一项（或一组分支）。
2. **控件映射（与 §6 左/右栏一致）**
   - `figma.boolean` → **`Switch`**。
   - `figma.enum` **仅两档且键为 `true`/`false`** → **`Switch`**（不要用两档 **Select** 模拟）。
   - 其它 `figma.enum`（多档或非布尔键名）→ **`Select`**，`value`/`label` 与枚举键一致（稿面拼写错误可在 label 标注，代码映射正确语义）。
   - `figma.textContent` → 可编辑用 **Input**，否则常量并注释对齐。
3. **`example` 拼装**：`FigmaXxxExample`（或内联）**解构键与 `example` 一致**，**单行**渲染与映射相同根节点；`size`→`style` 等间接量用 `useMemo`/派生，**字面量从 `index.figma.tsx` 复制**。
4. **富文本**：若 Code Connect 为 `figma.textContent` 而文档要链样式，可用 `ReactNode`，**文件头注释**说明与映射差异。

---

## 6. 布局与交互（推荐）

- **整体**：左预览 + 右属性（`Row`/`Col` 或 flex），外框 `border` + `borderRadius`。
- **左侧预览区（必选）**：示例组件须在区域内 **水平、垂直居中**。推荐在同一容器上写 **`display: 'flex'`**、**`flexDirection: 'column'`**、**`alignItems: 'center'`**、**`justifyContent: 'center'`**（或与 flex 行布局等价的居中）。**不要**用 **`justifyContent: 'flex-end'`** 把示例贴底，除非该 demo 在文件头注释说明「需顶对齐 / 全宽铺展」等例外（如极少量全宽表格、整页菜单骨架）。
- **右侧**：宽约 **280px**，`Space direction="vertical"`；多档枚举 **`Select` 100% 宽**；**仅 true/false 的维度**（含 **§5** 中「仅两档布尔」的 `figma.enum`）→ **`Switch`**（标签左、开关右）。
- **主题**：demo 可用 **`var(--ant-…)`**（与 gen-figma 里 Code Connect **样式字面量**约束不同）。
- **浮层与弹出（Modal / Drawer / Popconfirm / Dropdown / Popover / Tooltip 等）**  
  **默认不挡文档**：首屏 **关闭/不展开**；**由用户点击**再打开；触发器 **不要** `autoFocus` / 挂载 **`focus()`**。若映射 `example` 写死 `open`，Playground 可加「默认关 + 按钮打开」状态，**其余 props/子树与映射一致**，文件头注释说明。

参考：**[`Alert/demo/index.tsx`](../../packages/design/src/figma/Alert/demo/index.tsx)**；多 connect：**[`Button/demo/`](../../packages/design/src/figma/Button/demo/)**。

---

## 7. 实现边角

| 问题 | 建议 |
| --- | --- |
| **两档布尔仍用 Select** | 易踩 `false` 序列化问题；若必须用，**value 用 `'true'\|'false'` 字符串**，`onChange` 里转 boolean（见 **§5**「控件映射」，优先 **Switch**）。 |
| **`Select` 泛型** | 本仓库可能无 `Select<T>`；**onChange 内断言/窄化**。 |
| **枚举键 vs 组件 API** | 以 **该条 connect 映射**为准，demo 不擅自改 API；改映射须先 **`index.figma.tsx`**（Playground 任务本身 **不编辑** figma 文件时按现有文件做）。 |
| **Figma 独有** | Variable modes 等代码无对应时 **不强行做控件**；可只读一句。 |
| **性能** | `action` 等依赖开关的 `ReactNode` 可用 **`useMemo`**（可选）。 |

过时 API 列表不重述，见 **§1** 与 gen-figma **§2.2**。

---

## 8. 自检清单

| # | 项 |
| --- | --- |
| 1 | **`figma.connect` 条数** ↔ **`demo/` 文件数**（Icons：**§4** 单文件聚合）；**`index.md`** 已 `<code src>` 全部 demo。 |
| 2 | 右栏控件 ↔ 该条 **`props`**（或多一项已注释说明）。 |
| 3 | **`FigmaXxxExample` / 根节点** ↔ 该条 **`example` 传参**。 |
| 4 | **`figma.enum` 分支** 的字面量 / JSX 与 **`index.figma.tsx` 一致**（常量复制）。 |
| 5 | **Lint/类型通过**；**true/false 维度用 Switch**（或 **§7** 字符串布尔 Select 无坑）。 |
| 6 | **无过时 API**（**§1**）；**§6 浮层/弹出** 未首屏遮罩、未抢焦点；**左侧预览**已按 **§6** 居中（无多余贴底）。 |
| 7 | **未无谓修改 `index.figma.tsx`**；Code Connect parse 仍只针对 figma 文件。 |
| 8 | **`index.md` 页首**含 **`[Figma](…)`**（规则 **§3**）。 |

---

## 9. 与其它 skill

| 文档 | 职责 |
| --- | --- |
| [`gen-figma.md`](./gen-figma.md) | **`figma.connect`、`props`、`example`** 与 **`figma connect parse`** |
| [`batch-execute.md`](./batch-execute.md) | 批量故事、stub、MCP 拉稿（Code Connect 主线） |
| [`gen-link.md`](./gen-link.md) | 存在 **`index.$tab-playground.md`** 时，按 embed 与 `<slug>` 在 **Figma 组件节点**上补 **组件映射** 跳转链接（与 `figma.connect` 一一对应） |
| **本文** | Playground **产出与对齐**；执行 Playground 时 **仅改 `demo/`、`index.md`**（及 Icons 辅助 ts），**映射变更以 figma 为准，demo 跟随**。 |
