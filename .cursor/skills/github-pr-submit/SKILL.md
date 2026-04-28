---
name: github-pr-submit
description: >-
  Opens and updates GitHub pull requests for this repository using GitHub CLI (gh), filling the title and body from .github/PULL_REQUEST_TEMPLATE.md and team conventions. Covers optional issue links, self-check, and post-create label editing. Use when the user wants to submit a PR, open a pull request, use gh to create a PR, or align description with the repository PR template for oceanbase/oceanbase-design.
---

# 向 oceanbase/oceanbase-design 提交 PR

## 适用场景

- 本地分支已推送到 `origin`，需要开 PR 到 `master`（或指定 base）。
- 需要按仓库模板写 **标题、描述、自检项**，并可选为 PR **补打标签**。

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
