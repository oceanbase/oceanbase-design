---
title: 可访问性（WCAG 2.1）
order: 7
group: 基础组件
---

OceanBase Design 默认主题与 antd 5.x 对齐，建议在业务中遵循 [WCAG 2.1](https://www.w3.org/TR/WCAG21/) AA 级要求。以下为与 **Design Token** 强相关的约定；对比度测算与组件审计见 <a href="/wcag-audit-report.html" target="_blank" rel="noopener noreferrer">WCAG 审计报告</a>。

## 文本与语义色

- **正文**（小号正文，约 12–14px）：前景与背景对比度应 ≥ **4.5:1**。不要将 `colorSuccess`、`colorWarning`、`colorError` 等**主色块**直接用作正文叠白底；这些 token 用于状态块、标签底色等场景。
- **说明性状态文案**：优先使用 `colorSuccessText` / `colorWarningText` / `colorErrorText` 与对应的 `colorSuccessBg` / `colorWarningBg` / `colorErrorBg` 组合，主题已按高对比配置。
- **三级、四级文本**：`colorTextTertiary`（`gray7`）、`colorTextQuaternary`（`gray6`）在白底上不满足小号正文 4.5:1，仅用于**辅助说明、占位符场景**或**大号/粗体**（≥3:1）等合规用法；占位符在 Input/Select/DatePicker 等组件中已通过组件级 token 将四级字色提升到 `gray8` 以改善可读性。

### 禁止用法（常见 AA 失败原因）

以下写法在审计中会被判为 **1.4.3 不达标**，请避免：

| 场景 | 禁止 | 推荐 |
| --- | --- | --- |
| 小号正文 / 表格单元格 | `colorTextTertiary`、`colorTextQuaternary` 叠白底 | `colorText` / `colorTextSecondary`，或放大字号 |
| 状态说明 | 单独使用 `colorSuccess` / `colorWarning` / `colorError` 文字 | `color*Text` + `color*Bg`，并配图标或文案 |
| 结构分隔 | 仅依赖 `colorBorder` / `colorBorderSecondary` 色相区分区域 | 加粗线宽、分隔槽、浅阴影或相邻深色标题 |
| 信息传达 | 仅用颜色表示成功/失败/警告 | 颜色 + 图标 + 文字（1.4.1） |

## 仅用颜色传达信息（1.4.1）

- Alert、Tag、表单校验等状态应配合 **图标或文案**，避免仅依赖色相。
- 细边框（`colorBorder` / `colorBorderSecondary`）相对白底非文本对比度不足时，可配合 **线宽、分隔槽或浅阴影**，不要单独依赖边框颜色区分关键结构。

## 键盘与焦点（2.4.7）

- 默认主题使用 `lineWidthFocus: 2`，与 antd 控制项焦点环一致；请勿在业务主题中随意将 `lineWidthFocus` 设为 `0`。
- 全局样式对**非 antd 类名**的原生可聚焦元素提供 `:focus-visible` 轮廓兜底；antd 组件以主题 token 为准。

## 触控目标（2.5.8）

- icon-only 按钮、表格行内操作等可点击区域应 **≥ 24×24 CSS 像素**（含透明 padding / hit slop）。
- `@oceanbase/ui` 的 Dialog 控制按钮、FullscreenBox 全屏切换等已按最小触控区处理；Table / ProTable 行内操作若仍紧凑，业务侧应加大 `padding` 或包裹为带 `aria-label` 的 `Button`。

## 页面级

- 为 `<html lang="...">` 设置与内容一致的语言（如 `zh-CN` / `en`）。
- 复杂页面请使用语义化 landmark（`main`、`nav`、`toolbar` 等）；`@oceanbase/ui` 的 BasicLayout、BatchOperationBar、FooterToolbar、NavMenu 等已补充相关属性。

## 相关链接

- <a href="/wcag-audit-report.html" target="_blank" rel="noopener noreferrer">WCAG 审计报告</a>
- [Design Token](design-token.md)
- [主题配置](design-theme.md)
