# Code Connect（React）编写规则

**用户故事 / 批量任务**：执行 `figma/ralph/stories/US-*.json` 时，须同时遵守 [`batch-execute.md`](./batch-execute.md) 中的 **「每次跑用户故事时的强制顺序」**（preflight → Figma MCP 逐 URL 拉最新稿 → 按本文全文重写 → §7 与 §7.1 自检）。

## 1. 目标组件库

- **`figma.connect` 第一个参数**与 **`example` 内出现的组件**，默认来自 **`@oceanbase/design`**；图标来自 **`@oceanbase/icons`**。依据：`package.json`、`figma/figma.config.json` 的 `codeConnect.importPaths`、以及已有 **`packages/design/src/figma/<Name>/index.figma.tsx`** 写法。
- **无合适 OceanBase 图标时**：先在仓库与 **`@oceanbase/icons`** 导出列表中找语义等价图标；仍无时可用 **`@ant-design/icons`**，并在本条 **`index.figma.tsx` 顶部注释**或 PR 中说明「Figma 图层名 / 选用理由」，避免无声混用。

---

## 2. 属性类型怎么映射

### 2.1 布尔：用 `figma.boolean`

- Figma 上是 **true / false**（或开关）→ **`figma.boolean("名", { true: …, false: … })`**，映射到代码里的 `boolean` 或对应 JSX。
- **不要**用 **`figma.enum`** 配 **`"true"` / `"false"`** 再在 example 里做字符串比较。
- **例外**：设计稿本就是 **多档枚举**（如 `yes` / `no`）→ 用 **`figma.enum`**，在分支里再落到 `boolean` 或 UI。

### 2.2 组件 API：不要用过时 props

- 使用 **`@oceanbase/design` / antd 当前类型与文档** 推荐的写法。
- **例**：`Descriptions.Item` 用 **`styles={{ label: {…}, content: {…} }}`**，不用 **`labelStyle` / `contentStyle`**；有 **`styles` / `classNames`** 时优先于旧 **`*Style`**。不确定时查 **`.d.ts`** 与官方迁移说明。

---

## 3. `props` 与 `example` 怎么分工

### 3.1 总原则

- **所有 `figma.*` 映射只写在 `props` 里**；**`example` 只解构已映射好的值**，拼成 **`<目标组件 prop={…} />`**，**禁止**在 `example` 里再写 **`figma.enum` / `figma.boolean` / `figma.string` / `figma.instance`**。
- **优先**把 Figma 控件拆成与组件 API 一致的 **离散 props**（`label`、`styles`、`disabled`、`children` 等），在 **example 里显式传入**；**禁止**在能用离散 props 表达时，把整段 UI 收成 **`props` 里的一个 `ReactNode`** 再写 **`example: ({ itemNode }) => itemNode`** / **`({ root }) => root`** 仅做透传。
- **例外**：无法拆成离散 props、只能一整棵子树时，才在 `props` 里映射 **单一 `ReactNode`**，在 **example 里一次渲染**（且须已确认无法用离散 props 覆盖）。**评审**时应能说明：目标组件缺哪些 prop、为何不能继续拆（否则视为未充分尝试离散映射）。
- **`figma.children`**：见 **§5**。

### 3.2 写在哪、几条 connect、顶层约束

- **仅**在 **`figma.connect(..., { props, example })`** 内写示例 UI；**禁止**在模块顶层用 **`function` 包装组件** 再给 `example` 用；**禁止**在 `example` 里渲染**同文件顶层声明**的本地组件（如 `<MyChip />`）。
- **禁止**在模块顶层用 **`const` 保存「示例 JSX」**：含 **`<… />`、含图标的 `items` 数组、`<Menu items={…}>` 等用于 Code Connect 预览的片段**，一律写在对应 **`figma.connect` 的 `props` 字面量内**（必要时重复片段以满足 **`figma connect parse`**，见 **§7**）。
- **模块顶层 `const`（两档口径）**
  - **最低（必须）**：上一段所述的 **示例 JSX** 不得顶层 `const`。
  - **推荐（严）**：**仅服务于某一条** `figma.connect` 的 **theme 对象、`ConfigProvider` 的 `theme`、`style` 对象、整段内联 CSS 字符串**，也放在该条的 **`props` / `example` 字面量内**，不要抽到模块顶层；若 **`default` / `fold` 等分支**需相同配置，**允许复制同一段字面量**。**例外**：多个 **互不嵌套** 的 `figma.connect` 共用、且 **不含 JSX** 的纯数据（如仅数字常量）可顶层 `const`——尽量少用。
- **`figma.connect` 第一个参数**须为**真实组件引用**（或占位组件），**不能**是 `<></>`，否则 parse 失败。
- **同一稿面组件**：**一条** `figma.connect`，在 **`props` 里并列映射全部变体**（多组 `figma.boolean` / `figma.enum` 等）；**不要**拆成多条 `figma.connect`。

### 3.3 变体分支里何时保留整块 JSX

- **承接 §3.1**，仅约定 **变体控件分支的叶子**：**仅当**缺 prop、必须额外布局或固定子树组合、且离散 props 已尽力仍不够时，才在 **`figma.enum` / `figma.boolean` 的叶子**里写完整 JSX，再由 example 解构（如 `layoutNode`）。
- **复合对象**（`style`、`items[].label` 等）：在 **`props` 里**用具名键 + `figma.*` 组合好；**不要**在 **example** 里写 `style={{ …: figma.enum(…) }}`。
- **文案**：在 **`props` 映射的内层 JSX** 里用 **`figma.string("图层名")`**；不要依赖 example 解构出的 `text` 再往回拼进映射。
- 可与阅读性并存：保留 **`type` / `status`** 等与 Figma 同名的 **props**；**example 解构列表里只写实际用到的键**；仅当 `props` 无法表达时，才在 example 里出现 `figma.*`（极少）。

### 3.4 `example` 返回值与 DOM 根

- **优先**：`example` 直接返回**已映射到真实 DOM 的单个组件**即可（如 **`<Breadcrumb … />`**、**`<Button … />`**），**不必**再包一层 **`<div>`**。
- **仅当**返回值**没有**可用的 DOM 根时，才用 **`<div>` / `<section>`** 等包一层，例如：
  - **`({ cardNode }) => cardNode`**：仅透传 `props` 里映射出的 **ReactNode**，自身**不是**带 DOM 的组件 → **须**包一层，如 **`({ cardNode }) => <div>{cardNode}</div>`**（仍须遵守 **§3.1**，避免不必要的整节点透传）。
  - **唯一根是 Fragment**（**`<>…</>`**）→ **须**改为真实 DOM 根或改为返回带 DOM 的组件；**不推荐**以 Fragment 作为 `example` 的唯一根。
- 可按布局需要为包裹层加 **`className` / `style`**。

### 3.5 布局：优先 `Flex` / `Space`（`@oceanbase/design`）

- **`props` 与 `example` 里用于排版的容器**，优先使用 **`@oceanbase/design` 的 `Flex`（弹性布局）与 `Space`（间距）**，表达横向/纵向对齐、间距与换行，与 OBUI 用法一致。
- **避免**为布局手写 **`<div style={{ display: 'flex', … }}>`**；需要滚动、内边距等时，可把 **`style` 写在 `Flex` 上**（如 **`padding` / `overflow`**）。
- **例外**（须在实现或评审时能说明）：目标组件 **API 要求特定子节点结构**（例如 **`Checkbox.Group` 只能接收一组 `Checkbox` 子节点**），**不能**在外层再包一层 `Flex`/`Space` 时 → 优先改用组件自带的 **`options`** 等声明式 API；若仍须在根上控制流式排布，可在**该组件根**的 **`style`** 上使用与 `Flex` 语义一致的 **`gap` / `flexWrap` / `alignItems`**，而不是再套一层手写 flex 的 `div`。

### 3.6 `example` 内禁用对象展开（parse / Code Connect 可读性）

- **`example` 回调内禁止**用 **对象展开** 去合并从 **`props` 解构来的对象**（典型反例：`menu={{ ...menu, style: { ...menu.style, … } }}`）。**`figma connect parse`** 与 Code Connect 静态分析往往 **无法可靠识别**，易报 **unreadable** 或映射丢失。
- **应**：把需合并的字段（如 **`style`**、与变体无关的固定配置）写进 **`props` 里**对应对象（如各 **`menu`** 分支）的**字面量**中，使 **`example` 只**做 **`menu={menu}`**、**`items={items}`** 等**无 `...`** 的传递。
- 若必须在多处分支写同一段配置，**允许在 `props` 内重复字面量**（同 **§3.2**），**仍避免**在 **`example` 里**写 **`...`**。

---

## 4. `example` 里允许的表达式

- **适用范围**：本条**仅约束 `example` 回调函数体内**的表达式；**`props` 映射对象内**为静态结构可使用模板字符串书写多行 CSS，但**不宜**含 **`${}` 插值**（易与稿面不同步），且须遵守 **§6**。
- **禁止**（在 **`example` 内**）：`void` 丢弃解构值；**`if` / `else` / `switch`**；**三目** `cond ? a : b`；**带插值的模板字符串** `` `a${x}b` ``（静态文案拼接改用 **`'a' + x + 'b'`**）；**对象展开**合并解构值（见 **§3.6**）。
- **唯一例外：`Dropdown` 的 `dropdownRender`**：须在回调里使用菜单 **`node`** 时，可在**该条** `figma.connect` 的 **`example` 里、仅此一个** `dropdownRender` 中使用 **一处** 三目或 **`??`**，在「菜单」与互斥的「另一套面板」之间切换；**不得**为此在文件顶层新增函数组件；**不得在** `example` 其它任何位置再写条件分支。

---

## 5. 文本与子结构（禁用 `figma.children`）

- **本仓库暂时不要在 `props` 中使用 `figma.children`**（含子实例、数组形式等）。嵌套结构用 **`props` 内的 `figma.string`、`figma.enum` / `figma.boolean` 分支、静态对象或整块 JSX 字面量**表达（与 **§3.3** 一致）；**不要**在 example 里手写 `figma.*` 拼菜单项。
- **TEXT 节点**（元数据为 `TEXT[…]`，不是 `INSTANCE`）→ 仍使用 **`figma.textContent("图层名")`**；不要用 **`figma.children`** 绑纯文案。
- **严谨要求**：在 **`props` 映射的内层 JSX** 中，凡对应稿面 **可见 TEXT 层** 的文案，**应**使用 **`figma.string` / `figma.textContent`** 与 MCP 层名一致；**避免**硬编码与稿面不一致的字符串。若确无 TEXT 层或占位文案，须在对应 **`index.figma.tsx` 内用简短注释**说明依据（如「stub 无文本属性」）。
- 需要多段并列内容时，用 **多个 `figma.*` 映射**或 **单一 `ReactNode` 映射**（**§3.1** 例外），不依赖 `figma.children`。
- **`properties: {}`** 的节点同样用 **`figma.textContent`**、枚举分支或 **`props` 内静态结构** 表达，**不**使用 `figma.children`。

**图层名依据**：`figma.string` / `figma.textContent` 的字符串参数仍以 Figma MCP **`get_design_context`**（或 **`get_context_for_code_connect`**）中的层名为准。

---

## 6. 颜色与样式字面量

- 在 **`figma.connect` 的 `props` / `example`** 里，颜色、边框、阴影等用 **具体值**（如 `#1677ff`、`rgba(0,0,0,0.06)`），**不要**写 **`var(--ob-…)`** 等 CSS 变量，避免脱离主题时语义不清。

---

## 7. 解析与自检

- **何时跑 parse**：在 **MCP 已按 URL 拉最新稿**且 **`figma.connect`（含 `example`）已按本文 §1–§6 与 **§3.5** 重写完成后**再执行。若刚执行过单文件 **`npm run generate:figma-stubs -- <fileBase>`**，文件被重置为 stub（含 `<></>` 等），**此时 parse 失败属正常**，应先继续拉稿与实现，**不要**在 stub 阶段强求 parse 通过。
- 项目根目录执行：  
  **`npx figma connect parse -c figma/figma.config.json --exit-on-unreadable-files`**
- **`figma/figma.config.json` 的 `include`**：`npm run generate:figma-stubs` 面向 **`packages/design/src/figma/<Name>/index.figma.tsx`**；手工新增文件须在 **include** 中可见或重跑 stub。
- **`parse` 通过**只表示可被 Code Connect 静态读取，**不**表示已满足 **§1–§6**（含 **§3.5**）；须对照 **§7.1** 与全文，避免「只跑通 parse」即视为合规。
- **与解析器的取舍**：`figma connect parse` 对过于动态的写法（如 **`props` 里 IIFE**、**局部 `const` 再传入**等）可能报 **unreadable**；在遵守 **§3.2** 的前提下，改为 **`props` 字面量内**直接展开 JSX。**`example` 内忌对解构值 `...` 合并**，见 **§3.6**。

### 7.1 合并前自检清单（建议逐项打勾）

| 顺序 | 核对项 |
| --- | --- |
| 1 | **§1**：组件与图标包是否符合；若用 `@ant-design/icons` 是否已按 §1 说明 |
| 2 | **§3.2**：模块顶层是否无「示例 JSX」；若采用 **推荐（严）**，theme/style/CSS 是否已收进对应 `props` 字面量；同一 Figma 组件是否未拆成多条 `figma.connect`、单条内 `props` 是否覆盖全部变体维度 |
| 3 | **§3.1 / §3.3**：离散 props 是否已尽力；整块 `ReactNode` 是否属于已声明例外 |
| 3a | **§3.4**：`example` 已返回带 DOM 的组件时是否**未**多余包 `<div>`；仅透传节点或 Fragment 根时是否已用真实 DOM 包裹 |
| 3b | **§3.5**：布局是否优先 `Flex` / `Space`；无法包裹时是否已按例外处理（如 `options`、根 `style` 与 `Flex` 语义一致） |
| 3c | **§3.6**：`example` 内是否**无**对解构对象的 **`...` 展开合并**（如 `menu={{ ...menu, style: … }}`）；合并字段是否已收进 **`props`** 字面量 |
| 4 | **§4**：`example` 内是否无禁止的 `void` / 分支 / 三目 / 插值模板串 / **§3.6** 对象展开 |
| 5 | **§5**：可见 TEXT 是否优先 `figma.string` / `figma.textContent`；硬编码是否有注释 |
| 6 | **§6**：颜色等为具体字面量，无 `var(--ob-…)` |
| 7 | **§7**：`parse` 命令成功；`include` 含本文件 |
