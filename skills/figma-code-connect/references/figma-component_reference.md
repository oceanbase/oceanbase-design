# Code Connect（React）编写规则

本文约定 **`packages/design` / `packages/ui`** 各组件目录下 **`index.figma.tsx`** 的写法及 **`figma connect parse`** 自检。

**结构速查**：**§1** 包与路径 → **§2** 属性类型（布尔 / API）→ **§3** 核心（`props` / `example` 分工、变体、DOM 根、**样式分工**、布局、展开、**TS 类型**）→ **§4** `example` 表达式禁区 → **§5** 文案与禁用 `figma.children` → **§6** 非映射文件的样式字面量 → **§7** parse 与清单。

---

## 1. 目标组件库

- **`figma.connect` 第一个参数**与 **`example` 内出现的组件**：**默认**来自 **`@oceanbase/design`**；图标来自 **`@oceanbase/icons`**。**业务 / 布局类**（如 **`PageContainer`、`FooterToolbar`、`ListToolBar`** 等）来自 **`@oceanbase/ui`**，与现有 **`index.figma.tsx`** 一致即可。
- **文件位置**：Code Connect 源文件为各组件目录下的 **`index.figma.tsx`**，即 **`packages/design/src/<组件>/index.figma.tsx`** 或 **`packages/ui/src/<组件>/index.figma.tsx`**（与 **`figma-components.ts`** 仅向上述路径生成/重置的规则一致；**须**与组件源码同目录，**不要**单独拆到其它聚合目录）。
- **配置依据**：根目录 **`package.json`**、**`skills/figma-code-connect/figma.config.json`** 的 **`codeConnect.importPaths`** / **`paths`**，以及同仓库已有 **`index.figma.tsx`** 的 import 写法。
- **无合适 OceanBase 图标时**：先在 **`@oceanbase/icons`** 导出中找语义等价；仍无时可用 **`@ant-design/icons`**，并在本条 **`index.figma.tsx` 顶部注释**或 PR 中说明「Figma 图层名 / 选用理由」，避免无声混用。

---

## 2. 属性类型怎么映射

### 2.1 布尔：用 `figma.boolean`

- Figma 上是 **true / false**（或开关）→ **`figma.boolean("名", { true: …, false: … })`**，映射到代码里的 `boolean` 或对应 JSX。
- **不要**用 **`figma.enum`** 配 **`"true"` / `"false"`** 再在 example 里做字符串比较。
- **例外**：设计稿本就是 **多档枚举**（如 `yes` / `no`）、或稿面 VARIANT 名为 **`True` / `False`** 等**非原生布尔** → 用 **`figma.enum`**，在分支里再落到 `boolean` 或 UI。

### 2.2 组件 API：不要用过时 props

- 使用 **`@oceanbase/design` / antd 当前类型与文档** 推荐的写法。
- **例**：`Descriptions.Item` 用 **`styles={{ label: {…}, content: {…} }}`**，不用 **`labelStyle` / `contentStyle`**；有 **`styles` / `classNames`** 时优先于旧 **`*Style`**。不确定时查 **`.d.ts`** 与官方迁移说明。
- **与 §3.4c 的关系**：在**普通业务代码**中可按类型使用 **`styles` / `classNames`**；**本仓库若对 `index.figma.tsx` 执行 §3.4c**，映射文件内**不**写这些字段。

---

## 3. `props` 与 `example` 怎么分工

### 3.1 总原则

- **所有 `figma.*` 映射只写在 `props` 里**；**`example` 只解构已映射好的值**，拼成 **`<目标组件 prop={…} />`**，**禁止**在 `example` 里再写 **`figma.enum` / `figma.boolean` / `figma.string` / `figma.instance`**。
- **优先**把 Figma 控件拆成与组件 API 一致的 **离散 props**（`label`、`styles`、`disabled`、`children` 等），在 **example** 里显式传入；**禁止**在能用离散 props 表达时，把整段 UI 收成 **`props` 里的一个 `ReactNode`** 再写 **`example: ({ itemNode }) => itemNode`** / **`({ root }) => root`** 仅做透传。
- **例外**：无法拆成离散 props、只能一整棵子树时，才在 `props` 里映射 **单一 `ReactNode`**，在 **example** 里一次渲染（且须已确认无法用离散 props 覆盖）。**评审**时应能说明：目标组件缺哪些 prop、为何不能继续拆（否则视为未充分尝试离散映射）。
- **`figma.children`**：见 **§5**。

### 3.2 写在哪、几条 connect、顶层约束

- **仅**在 **`figma.connect(..., { props, example })`** 内写示例 UI；**禁止**在模块顶层用 **`function` 包装组件** 再给 `example` 用；**禁止**在 `example` 里渲染**同文件顶层声明**的本地组件（如 `<MyChip />`）。
- **禁止**在模块顶层用 **`const` 保存「示例 JSX」**：含 **`<… />`、含图标的 `items` 数组、`<Menu items={…}>` 等用于 Code Connect 预览的片段**，一律写在对应 **`figma.connect` 的 `props` 字面量内**（必要时重复片段以满足 **`figma connect parse`**，见 **§7**）。
- **模块顶层 `const`（两档口径）**
  - **最低（必须）**：上一段所述的 **示例 JSX** 不得顶层 `const`。
  - **推荐（严）**：**仅服务于某一条** `figma.connect` 的 **theme 对象、`ConfigProvider` 的 `theme`、`style` 对象、整段内联 CSS 字符串**，也放在该条的 **`props` / `example` 字面量内**，不要抽到模块顶层；若 **`default` / `fold` 等分支**需相同配置，**允许复制同一段字面量**。**例外**：多个 **互不嵌套** 的 `figma.connect` 共用、且 **不含 JSX** 的纯数据（如仅数字常量）可顶层 `const`——尽量少用。**若仓库执行 §3.4c**，**`index.figma.tsx`** 顶层仍**不得**为「预览」抽 **`style` 常量**。
- **`figma.connect` 第一个参数**须为**真实组件引用**（或占位组件），**不能**是 `<></>`，否则 parse 失败。
- **同一稿面组件**：**一条** `figma.connect`，在 **`props` 里并列映射全部变体**（多组 `figma.boolean` / `figma.enum` 等）；**不要**拆成多条 `figma.connect`。

### 3.3 变体分支里何时保留整块 JSX

- **承接 §3.1**，仅约定 **变体控件分支的叶子**：**仅当**缺 prop、必须额外布局或固定子树组合、且离散 props 已尽力仍不够时，才在 **`figma.enum` / `figma.boolean` 的叶子**里写完整 JSX，再由 example 解构（如 `layoutNode`）。
- **复合对象**（`style`、`items[].label` 等）：在 **`props` 里**用具名键 + `figma.*` 组合好；**不要**在 **example** 里写 `style={{ …: figma.enum(…) }}`。
- **文案**：在 **`props` 映射的内层 JSX** 里用 **`figma.string("图层名")`**；不要依赖 example 解构出的 `text` 再往回拼进映射。
- 可与阅读性并存：保留 **`type` / `status`** 等与 Figma 同名的 **props**；**example 解构列表里只写实际用到的键**；仅当 `props` 无法表达时，才在 example 里出现 `figma.*`（极少）。

### 3.4 `example` 返回值与 DOM 根

- **优先**：`example` 直接返回**已映射到真实 DOM 的单个目标组件**即可（如 **`<Breadcrumb … />`**、**`<Button … />`**），**不必**再包一层 **`<div>`**。
- **须包一层 `<div>`**：`props` 里只有**整段变体子树**（单一 **`ReactNode`** 键，如 **`layout`**，由 **`figma.enum` / `figma.boolean` 嵌套**拼出），且 **example 内未直接写** **`<目标组件 … />`** 时 → **`example` 应为** **`({ layout }) => <div>{layout}</div>`**，保证**真实 DOM 根**（与 **§3.1**「整块子树映射」例外配套）。
- **补充（避免误判「优先」）**：即使 **`props` 里拼出的子树类型**与 **`figma.connect` 第一个参数**相同（例如 **`groupRow`** 已是 **`<Radio.Group />`**），只要 **`example` 里只写** **`({ groupRow }) => groupRow`**、**没有出现目标组件的标签字面量**，仍按上条**须包 `<div>`**，写成 **`({ groupRow }) => <div>{groupRow}</div>`**。**「优先」不省略 `<div>`** 仅适用于 **`example` 函数体里显式写出** **`<目标组件 … />`** 的情形。
- **其它须包裹**：仅透传 **`props` 映射出的 `ReactNode`**、自身不是带 DOM 的组件时，用 **`<div>` / `<section>`**；**唯一根是 Fragment** → 改为真实 DOM 根或带 DOM 的组件。
- **包裹用 `<div>`**：**不写** **`style` / `className`**（见 **§3.4c**）。预览像素见 **§3.4a**。

### 3.4a 预览样式：写在 Playground（`demo/*.figma.tsx`）

- **`index.figma.tsx` 的 `example`**：只负责按 **`props` 解构**拼装目标组件；**文档预览用的根尺寸、白底、抵消 fixed 等**，写在 **`demo/*.figma.tsx`**（模块常量或 `App` 内 **`React.CSSProperties`**），**由外 `style={…}` 传入**封装组件。
- **不要**在 **`index.figma.tsx`** 为「仅预览」写根 **`style` / `className`**（含 **§3.4** 的包裹 **`div`**）。
- 详见 **[`playground_reference.md`](./playground_reference.md)**。

### 3.4b 映射内外观：`index.figma.tsx` 用语义 props；禁止原生元素乱写 `style`

- 在 **`props` 映射 JSX**（含分支叶子）中，**禁止**在 **`span` / `div` 等原生元素**上随手写 **`style={{ … }}`**。
- **应**通过 **`@oceanbase/design` / antd** 的 **语义化 props** 表达结构与状态（**`Typography`**、**`Button` `type`/`variant`**、**`Flex` `gap`/`align`** 等，与 **§2.2** 一致）。
- **若本仓库执行 §3.4c**：映射内**连组件级** **`style` / `styles` / `className`** 也**一律不写**，**§3.4b 本条不再单独作为「可写组件 styles」的依据**——以 **§3.4c** 为准。

### 3.4c `index.figma.tsx` 不外挂样式（本仓库推荐口径）

- **`props` 映射**与 **`example`** 内**不得**出现 **`style`**、**`styles`**、**`className`**。
- **常见外观向 API**（除非团队明确豁免）：**`tabProps.tabBarStyle`**、**`Card` 的 `styles`** 等；改在 **`demo/*.figma.tsx`** 外层容器或 **`ConfigProvider`** 注入。
- **目的**：映射文件只保留**结构、变体、文案**；**稿面像素**只在 Playground 维护，避免 **`index.figma.tsx`** 与 **`demo`** 两套样式漂移。
- **§3.5 / §3.6**：凡写「在 `Flex` 上写 `style`」「在 `props` 里合并 `style`」——**已执行 §3.4c 的 `index.figma.tsx`** 均**不适用**，改在 **demo** 处理。

### 3.5 布局：优先 `Flex` / `Space`（`@oceanbase/design`）

- 用于排版的容器优先 **`Flex` / `Space`**；**避免**手写 **`<div style={{ display: 'flex' }}>`**。
- **未执行 §3.4c 的其它文件**：需要时可在 **`Flex` 根**写 **`style`**（如 **`padding` / `overflow`**）。**已执行 §3.4c 的 `index.figma.tsx`**：不在映射里给 **`Flex` 写 `style`**，见 **§3.4c**。
- **例外**：目标组件 **API 限定子节点**（如 **`Checkbox.Group`**）时，优先 **`options`** 等声明式 API；若必须在组件根写 **`gap` / `flexWrap`**，**不适用于已执行 §3.4c 的 `index.figma.tsx`**。

### 3.6 `example` 内禁用对象展开（parse / Code Connect 可读性）

- **`example` 内禁止**用 **`...`** 合并从 **`props` 解构来的对象**（如 `menu={{ ...menu, style: … }}`），易 **unreadable**。
- **应**把需合并的字段写进 **`props` 各分支**的字面量，**`example` 只做** **`menu={menu}`** 等无展开传递。样式合并若与 **§3.4c** 冲突，**不在 `index.figma.tsx` 的 `props` 里合并 `style`**，改 **demo**。
- 多分支相同配置**允许在 `props` 内重复字面量**（同 **§3.2**）。

### 3.7 TypeScript：禁止为映射「压类型」的断言

- **`index.figma.tsx`** 内**不要**使用 **`as never`**、**`as any`**、**`as unknown as …`** 等类型断言；**`figma.enum` / `figma.boolean` 分支叶子**里的 JSX 同样保持**无断言**。
- 若整文件与 Code Connect / `figma.*` 推断冲突，**优先**在文件**首行**使用 **`// @ts-nocheck`**（与本仓库多数 **`index.figma.tsx`** 一致），**不要**在分支上逐段加断言。

---

## 4. `example` 里允许的表达式

- **适用范围**：本条**仅约束 `example` 回调函数体内**；**`props` 映射内**若写多行 CSS 字符串，**不宜**含 **`${}`** 插值，且须遵守 **§6**（针对**允许写样式的文件**）。
- **禁止**：`void` 丢解构值；**`if` / `else` / `switch`**；**三目**；**带插值模板串**；**对象展开**（见 **§3.6**）。
- **唯一例外：`Dropdown` 的 `dropdownRender`**：该条 **`example` 内仅此一处**可用三目或 **`??`** 切换菜单与另一面板；**不得**为此前提在顶层新增函数组件。

---

## 5. 文本与子结构（禁用 `figma.children`）

- **本仓库暂时不要在 `props` 中使用 `figma.children`**。嵌套用 **`figma.string`、分支、`figma.enum` / `figma.boolean`、整块 JSX**（与 **§3.3** 一致）。
- **TEXT 节点**→ **`figma.textContent("图层名")`**。
- **可见 TEXT**→ **`figma.string` / `figma.textContent`** 与 MCP 层名一致；无 TEXT 层须在 **`index.figma.tsx`** 简短注释说明。
- 多段内容：**多个 `figma.*`** 或 **单一 `ReactNode` 映射**（**§3.1** 例外）。
- **`properties: {}`** 节点同上，不用 **`figma.children`**。

**图层名依据**：Figma MCP **`get_design_context`** / **`get_context_for_code_connect`** 中的层名。

---

## 6. 颜色与样式字面量（非 `index.figma.tsx` 映射文件）

- **`index.figma.tsx`**：若执行 **§3.4c**，**不写** **`style` / `styles` / `className`**；**不**在本节展开。
- **`demo/*.figma.tsx`** 等：当 API **必须**接收 **`style` / `styles`** 时，属性值用**具体字面量**（如 **`#1677ff`**、**`rgba(…)`**），**不要** **`var(--ob-…)`**，避免脱离主题时语义不清。

---

## 7. 解析与自检

- **何时跑 parse**：Figma 稿与映射对齐，且 **`figma.connect`** 已按 **§1–§6**、**§3.5** 写完后（执行 **§3.4c** 时须满足）。stub 阶段 parse 失败可接受，先对稿再 parse。
- 命令：**`npx figma connect parse -c skills/figma-code-connect/figma.config.json --exit-on-unreadable-files`**
- **`codeConnect.include`** 须覆盖所有发布的 **`index.figma.tsx`**；手工新增路径须补全。
- **`parse` 通过** ≠ 全文合规；须对照 **§7.1**。
- **解析器**：避免 **`props` 内 IIFE**、**局部 const 再传入**；**`example` 忌 `...` 合并**，见 **§3.6**。

### 7.1 合并前自检清单（建议逐项打勾）

| 顺序 | 核对项 |
| --- | --- |
| 1 | **§1**：组件与图标包；`@ant-design/icons` 是否已说明 |
| 2 | **§3.2**：顶层无示例 JSX；**§3.4c** 下不在顶层抽预览用 **`style` 常量**；一条 connect、变体维度齐 |
| 3 | **§3.1 / §3.3**：离散 props 已尽力；整块 **`ReactNode`** 是否属例外 |
| 3a | **§3.4**：单组件返回不多余包 **`div`**；整块子树仅解构返回（如 **`groupRow`**）时 **`example` 为 `<div>{groupRow}</div>`**；整块 **`layout`** 时 **`example` 为 `<div>{layout}</div>`** 且 **`div` 无样式** |
| 3a1 | **§3.4a**：预览根样式在 **`demo`** 外置传入 |
| 3a2 | **§3.4c**（若执行）：**`index.figma.tsx`** 无 **`style` / `styles` / `className`** 及列出的外观向 API；**§6** 仅用于 **demo** 等 |
| 3b | **§3.5**：优先 **`Flex` / `Space`**；例外已说明 |
| 3c | **§3.6**：**`example`** 无 **`...` 合并解构对象** |
| 3d | **§3.7**：无 **`as never` / `as any`** 等压类型断言；必要时文件级 **`// @ts-nocheck`** |
| 4 | **§4**：无禁止的表达式 |
| 5 | **§5**：TEXT 映射与 **`figma.children`** 约束 |
| 6 | **§6**：**demo** 等字面量无 **`var(--ob-…)`** |
| 7 | **§7**：`parse` 成功；**`include`** 含本文件 |
