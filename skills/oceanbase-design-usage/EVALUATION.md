# oceanbase-design-usage Skill 优化评估

参考文档：团队工程能力 Skill 化（实现机制、结构模板与落地方法）。从**三层架构、规则原子化、发现/运行/应用机制、输出规约与可审计性**等维度评估当前 skill，并给出可优化项。

---

## 一、当前结构 vs 推荐三层架构

| 推荐层 | 推荐形态 | 当前对应 | 符合度 |
| --- | --- | --- | --- |
| **索引层** | SKILL.md：name、description、适用场景、规则分组、快速索引；轻量、重路由 | SKILL.md 含概述（OBUI）、包关系、包选择速查表、**最高优先级（必遵）**、快速规范、各包详细说明与链接；design 有 00-overview + README + 02～09 | 符合度提升：已有规则分组（最高优先级 vs 快速规范）、Trigger terms、design 入口完整（00 概述 + README 导航） |
| **规则层** | rules/\*.md：一文件一规则，frontmatter + Why + Incorrect/Correct + 例外 | references/design/00～09：按**组件模块**组织，00 为概述、01 为主题与 Token，02～09 含约束+场景+正例，高价值处已补错误/正确说明 | 部分符合：仍为组件手册形态，但关键约束已有正反例；无单规则 ID、无 rules/\* 原子化 |
| **汇编层** | AGENTS.md：规则汇总为人机共读手册 | 仓库根 AGENTS.md 仅列 available_skills，skill 内无 ASSEMBLY 或规则汇编 | 仍缺失：可选增加 skill 内汇编文档供一次性查阅 |

**结论**：索引层已加强（优先级、00/01、Trigger terms、输出规约）；规则层在现有形态下已补关键反例与 00 概述；汇编层为可选增强。

---

## 二、已做得较好的点

- **description**：包含 WHAT（OBUI/各包使用规范）、WHEN（developing、modifying、reviewing、migrating）、**Trigger terms**（OceanBase Design、OBUI、Table、Filter、ConfigProvider、codemod、obToken 等），便于 Agent 检索。
- **最高优先级（必遵）**：根节点 ConfigProvider、组件/图标包、Card+Table innerBordered、迁移 codemod，便于「先做什么」。
- **包选择速查表**：需求→推荐包→说明，利于快速命中。
- **快速规范**：4 条浓缩约定，适合首屏加载。
- **design 入口完整**：00-overview（概述与主题）、README（模块导航）、02～09（组件约束与示例），引用均已有效。
- **references 拆分**：design 按 00～09 分模块，按需查阅可减少 token；references 路径在 SKILL 中明确。
- **正例与反例**：02～09 及 icons 中高价值约束配有代码示例，且已补错误/正确说明（Table+Card、Message/ConfigProvider、Filter 受控、图标包混用）。
- **输出规约**：SKILL 末尾「使用本 Skill 生成或修改代码时」说明遵循与例外、迁移注明 codemod，便于可审计。
- **CHANGELOG**：skill 变更可追溯；SKILL 链到 CHANGELOG。
- **Stateless 使用**：Skill 本身无状态，通过「先读 SKILL → 再按任务读 00/01 或 02～09」可实现渐进披露。

---

## 三、已落实的优化项（对照文档建议）

| 文档建议 | 落实情况 |
| --- | --- |
| description 含 Trigger terms | ✅ 已写入 description（OceanBase Design、OBUI、Table、Filter、ConfigProvider、codemod、obToken 等） |
| 无效引用修复 | ✅ design 入口为 00-overview + README，均已存在并链入 SKILL |
| 关键约束补反例 | ✅ 05 Table+Card、06 Message/ConfigProvider、08 Filter 受控、icons 图标混用 已补错误/正确 |
| 规则优先级 | ✅ SKILL 中「最高优先级（必遵）」4 条 |
| 输出规约（可审计） | ✅ SKILL 末尾「使用本 Skill 生成或修改代码时」+ 例外说明、迁移 codemod |
| CHANGELOG / 版本 | ✅ CHANGELOG.md 已建，SKILL 链到变更说明；命名统一 OceanBase Design / OBUI |

## 四、剩余可优化项（可选）

### 可选一：汇编层

- 若需「人机共读一份总手册」：在 skill 内增加 `references/ASSEMBLY.md` 或 `ASSEMBLY.md`，内容为 00～09 目录式汇总 + 每模块关键约束一句话 + 链接，供一次性拉取或离线审阅。仓库根 AGENTS.md 保持仅列 available_skills。

### 可选二：更多「何时不用」与反例

- 在 02～09 中继续为其他易错点（如 Form 未用 htmlType="submit"、Tabs 未用 items、Select 与 Filter.Select 混用等）补 1～2 句错误/正确或「何时不用」，不要求全量。

### 可选三：规则原子化（rules/\*.md）

- 若要与扫描脚本 / CI 门禁强绑定：将高价值、可自动检测的约定拆成 `rules/*.md`，单文件单规则，frontmatter（title、impact、tags）+ Why + Incorrect/Correct + When not to use。可先选 5～10 条试点，不必重写全部 02～09。

### 可选四：自动化与 PR 模板

- checks/ 扫描禁用模式、CI 门禁、PR 模板中「本次是否遵循 oceanbase-design-usage，例外及理由」。与现有输出规约呼应。

---

## 五、已落实优化清单（与语雀文档对照）

- 修 SKILL 引用：design 入口为 [references/design/00-overview.md](references/design/00-overview.md) + [README.md](references/design/README.md)。
- 新建 [references/design/00-overview.md](references/design/00-overview.md)：概述、定位、主题（ConfigProvider、obToken）、00～09 模块表。
- description 中补 Trigger terms（OceanBase Design、OBUI、Table、Filter、ConfigProvider、codemod 等）。
- SKILL 增加「最高优先级（必遵）」与「使用本 Skill 生成或修改代码时」输出规约。
- 新建 references/design/README.md 作为 design 模块导航，并纳入 00/01。
- 05（Table+Card）、06（Message/Notification）、08（Filter 受控）、icons（图标包）增加错误/正确说明。
- 新建 CHANGELOG.md，SKILL 末尾链到变更说明。
- 标题与表述统一：OceanBase Design、OBUI，概述中明确「OceanBase Design 即 OBUI，包含 design、ui、icons、charts、util 等多个库」。

## 六、总结

- 对照语雀文档「团队工程能力 Skill 化」：**索引层**已具备 name、description、Trigger terms、规则分组（最高优先级 + 快速规范）、design 完整入口（00 概述 + README + 01～09）；**规则层**在保持组件手册形态下，已为高价值约束补正反例与 00 概述；**输出规约、CHANGELOG、可审计性**已落实。
- **剩余为可选增强**：汇编层（ASSEMBLY）、更多「何时不用」、规则原子化（rules/\*）、CI/PR 联动。按团队需要择机实施即可。
