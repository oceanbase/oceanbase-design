---
name: github-pr-submit
internal: true
description: >-
  Opens and updates GitHub pull requests for oceanbase/oceanbase-design using GitHub CLI (gh), fills PR body from .github/PULL_REQUEST_TEMPLATE.md, and writes user-facing changelog (PR bilingual table and post-commit chat output). Use when submitting a PR, opening a pull request, or when the user asks for 更新日志 after commit.
---

# 向 oceanbase/oceanbase-design 提交 PR

## 适用场景

- 本地分支已推送到 `origin`，需要开 PR 到 `master`（或指定 base）。
- 需要按仓库模板写 **标题、描述、自检项**，并可选为 PR **补打标签**。
- Commit 后需在对话中输出**用户可感知的更新日志**。

## 前置条件

- 已安装并登录 [GitHub CLI](https://cli.github.com/)：`gh auth status` 成功。
- 远程为 `github.com/oceanbase/oceanbase-design`；当前工作目录为仓库根目录。
- 若刚做过 `rebase` / 修改历史，需 `git push --force-with-lease origin <branch>` 后再开或更新 PR。

## 标题（Title）

- 使用**英文**、**单行**，与主要 commit 或变更范围一致。
- 格式与历史 PR 一致：`type(scope): short description`（如 `chore(ci): …`、`fix(design): …`、`feat(ui): …`）。
- `type` 常见：`feat`、`fix`、`chore`、`docs`、`improve` 等；`scope` 可为包名或区域（`design`、`ui`、`root`、`ci`）。

## 描述（Body）

1. 打开并遵循仓库模板：`.github/PULL_REQUEST_TEMPLATE.md`。
2. 在正文中**勾选**与本次改动对应的项（Modified package、This is a...）。
3. 填写 **Background and solution**、**Changelog** 的中英表格；无关联 issue 可写 `N/A`。
4. 勾选 **Self-Check before Merge** 中已确认或明确不需要的项。

可将正文保存为临时文件后传给 `gh`（用完后删除临时文件，避免误提交）：

```bash
gh pr create --repo oceanbase/oceanbase-design --base master --head <你的分支名> \
  --title "type(scope): English title here" \
  --body-file path/to/body.md
```

仅查看现有 PR：

```bash
gh pr list --head <你的分支名> --base master
gh pr view <number> --web
```

## Changelog

规则摘要见 `.cursor/rules/changelog.mdc`。核心：**只写用户可感知的内容**，实现细节写在 Background。

| ✅ 写                                                | ❌ 不写                                 |
| ---------------------------------------------------- | --------------------------------------- |
| 组件 API / 行为 / 视觉变更                           | 文件路径、`index.figma.tsx` 等实现布局  |
| 用户会遇到的 bug 修复                                | CI、构建、lint、内部脚本                |
| 用户会采用的公开工具（CLI、MCP、Figma Code Connect） | Agent Skill、`publish.sh` 等内部流程    |
| 破坏性变更与迁移说明                                 | 无用户意义的数量清单（如「38 个组件」） |

无用户影响 → PR 填 `No user-facing changes` / `无用户可感知变更`；commit 后**不要**编造更新日志，除非用户明确要求。

### PR Changelog 表格

中英文**各一句**，语义一致，尽量一行。

```markdown
| Language | Changelog |
| --- | --- |
| 🇺🇸 English | 🤖 Component assets now include Figma mappings; Figma Code Connect bridges design and frontend workflows, e.g. generating spec-compliant code from Figma. |
| 🇨🇳 Chinese | 🤖 组件资产新增对应的 Figma 映射文件，通过 Figma Code Connect 可以打通设计+前端工作流，比如基于 Figma 生成符合规范的代码。 |
```

反例（过于内部）：

```markdown
| 🇺🇸 English | Added 38 colocated index.figma.tsx files, Cursor agent skill, and CI parse/publish workflow. |
```

### Commit 后更新日志（对话）

有用户可感知变更时，按 `docs/design/design-CHANGELOG.md` 风格输出：

```markdown
- <区域或组件>
  - <emoji> <一行，用户视角>
```

或单行：

```markdown
- 🤖 组件资产新增对应的 Figma 映射文件，通过 Figma Code Connect 可以打通设计+前端工作流，比如基于 Figma 生成符合规范的代码。
```

常用 emoji：🆕 新功能 · 🐞 修复 · 💄 样式 · 🌈 主题 · 📖 文档 · ⭐️ 增强 · ♿ 无障碍

正式发布时写入对应包的 `*CHANGELOG.md`（`design` / `ui` / `charts` / `codemod`）；日常 PR **不要**改这些文件，除非发版或用户明确要求。

自检：npm 包或 Figma 用户不看仓库能否感知？去掉文件名后是否仍然准确？能否压成一行？

## 打标签（可选）

合并后或创建后，CI 可能通过 **PR Labeler**（`.github/labeler.yml`、工作流为 `pull_request_target`）按**变更路径**自动加标签，**同仓库分支与 fork 的 PR 均可**；若需**手动**补打仓库已有标签：

```bash
gh pr edit <PR_NUMBER> --repo oceanbase/oceanbase-design \
  --add-label "chore" \
  --add-label "workflow"
```

注意：标签名须与 [仓库已有 Labels](https://github.com/oceanbase/oceanbase-design/labels) 完全一致；无权限创建新标签时只加已有项。

**可选建议标签（按改动类型选，非必须）**

| 改动区域                | 可参考标签                              |
| ----------------------- | --------------------------------------- |
| 根目录 / CI / `.github` | `chore`, `workflow`, `CI`               |
| 仅文档 / changelog      | `documentation`, `changelog`            |
| 某子包                  | `@oceanbase/design`, `@oceanbase/ui` 等 |

## 与上一提交合并后推送

若需把多次提交**压成一条**再开 PR 或更新同一分支：

```bash
git reset --soft HEAD~<N>   # N 为要合并的提交个数
git commit -m "type(scope): single final message"
git push --force-with-lease origin <branch>
```

## 无 gh 时的后备

在浏览器打开：`https://github.com/oceanbase/oceanbase-design/compare/master...<分支名>?expand=1`，将模板内容粘贴到描述框。

## 反模式

- 在仓库中**长期保留** `body.md` 等仅用于 `gh` 的临时文件；用毕应删除，勿加入版本控制。
