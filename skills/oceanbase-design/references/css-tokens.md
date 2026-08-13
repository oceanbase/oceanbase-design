# CSS Token 规范（`var(--ob-*)`）

<!-- SYNC: metadata/css-token-migration-hints.yaml, metadata/constraints.yaml -->

业务自定义样式**仅使用** `var(--ob-*)` 或 `obToken`。**禁止** `var(--ant-*)`、antd `token.xxx`，以及按 antd 命名「发明」的 `--ob-*`。

React 侧用法详见 [01-theme-and-token.md](design/01-theme-and-token.md)。

## 查 → 写 → 验

```
涉及自定义样式（CSS/SCSS/内联 style）
  → ob-design token --dense          # 或 MCP ob_token
  → 使用 var(--ob-*) / obToken 编写
  → ob-design lint ./src             # 默认含样式 token 校验
```

## 书写规则

1. **间距**：统一 `--ob-space-*`（50/100/150/200/300/400/500/600/800），禁止 `--ob-padding-*` / `--ob-margin-*`
2. **文字色**：`default` / `navigation` / `label` / `description` / `link`
3. **背景**：`primary`（页面）、`default`（容器）、`hover` / `hover-secondary`
4. **圆角**：`--ob-radius-sm` | `md` | `lg`
5. **边框**：`--ob-color-border-default` | `hover` | `focus`
6. **不确定时**：运行 `ob-design token --json` 或 MCP `ob_token`；勿 invent

## antd vs OB

- `--ant-*` 与 `--ob-*` 语义体系不同
- `@oceanbase/design` 的 `ConfigProvider` 自动注入 `--ob-*`，无需 `theme.cssVar`
- 存量 `var(--ant-*)` 用 codemod `token-to-obtoken` 迁移

## 常见误用对照（节选）

| 非法 / 未注入                      | 合法运行时 token              |
| ---------------------------------- | ----------------------------- |
| `--ob-color-text-tertiary`         | `--ob-color-text-description` |
| `--ob-color-text`                  | `--ob-color-text-default`     |
| `--ob-color-bg-layout`             | `--ob-color-bg-primary`       |
| `--ob-color-border`                | `--ob-color-border-default`   |
| `--ob-padding-m` / `--ob-margin-m` | `--ob-space-400`              |
| `--ob-border-radius-m`             | `--ob-radius-md`              |
| `--ob-font-size-350`               | `--ob-font-size-325`          |
| `--ob-shadow-popover`              | `--ob-shadow-2`               |

完整 35 条映射：`ob-design token --json` → `migrationHints`，或 `metadata/css-token-migration-hints.yaml`。

## CLI / MCP

```bash
ob-design token --json                              # 完整列表 + 分类 + hints
ob-design token --check --ob-color-text-tertiary    # 单 token 校验
ob-design lint ./src                                # JS 规则 + 样式 token（默认）
ob-design lint ./src --styles                       # 仅样式 token
ob-design migrate --rule ob-css-tokens ./src        # 批量替换已知误用
```

MCP：`ob_token`（`json` / `check` / `dense`）、`ob_lint`（`includeStyles` 默认 true）。

## 存量迁移

| 场景                          | 工具                                                |
| ----------------------------- | --------------------------------------------------- |
| 非法 `--ob-*` 别名            | `ob-design migrate --rule ob-css-tokens`            |
| antd `token` / `var(--ant-*)` | `@oceanbase/codemod --transformer=token-to-obtoken` |
| Less/Sass 硬编码              | 默认 pipeline `less-to-cssvar` / `sass-to-cssvar`   |
