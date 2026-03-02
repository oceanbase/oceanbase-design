---
title: Agent Skills
order: 7
group: 基础组件
---

本仓库提供 **oceanbase-design-usage** Skill，用于在开发、Code Review、迁移时统一 OceanBase Design（OBUI）各包的使用方式，减少样式与代码差异。

## 在本仓库中使用

本仓库根目录的 `AGENTS.md` 已注册 `oceanbase-design-usage`。在 Cursor、Claude Code 等支持 OpenSkills 的环境中：

- Agent 会根据任务自动匹配并加载该 Skill。
- 涉及「OceanBase Design」「OBUI」「Table」「Filter」「ConfigProvider」「迁移」「obToken」等关键词时，会优先参考 Skill 中的规范与 reference。

无需额外配置，克隆仓库后即可在对话中依赖该 Skill 生成或审查与 design/ui/icons 相关的代码。

## 在其它项目中使用

若业务项目使用 `@oceanbase/design` / `@oceanbase/ui`，希望 AI 按同一套规范辅助开发，可安装本 Skill：

```bash
# 从本仓库本地安装（开发/调试）
npx openskills install ./path/to/oceanbase-design/skills/oceanbase-design-usage

# 若已发布为 npm 包，可从包内安装
npx openskills install ./node_modules/@oceanbase/design-skills/oceanbase-design-usage
```

安装后，在对应项目里使用 `npx openskills read oceanbase-design-usage` 可加载规范内容；支持 OpenSkills 的 AI 会在相关任务中自动引用。

## Skill 内容结构

| 入口 | 说明 |
|------|------|
| **SKILL.md** | 包关系、包选择速查、最高优先级规则、快速规范、各包说明与链接 |
| **references/design/** | 00 概述、01 主题与 Token、02～09 组件约束与示例 |
| **references/ASSEMBLY.md** | 各模块关键约束一句话汇总 |
| **rules/** | 原子化规则（ConfigProvider、图标来源、Card+Table、Filter 受控等），可做 CI/门禁 |

## 命名说明：oceanbase-design-usage vs oceanbase-design-using

| 名称 | 含义 | 适用场景 |
|------|------|----------|
| **oceanbase-design-usage**（当前） | **usage** = 使用方式、用法规范。名词，强调「如何使用」的指南与约定。 | 规范类、手册类 Skill，侧重「用法/规范」时更贴切。 |
| **oceanbase-design-using** | **using** = 正在使用。偏进行时/动名词，常见于 "Using XXX" 文档标题。 | 若希望强调「使用 OceanBase Design 的实践指南」，也可用；与 "Using Ant Design" 等标题风格一致。 |

**选用建议**：当前 Skill 定位为**使用规范与约束**（如何正确用 design/ui/icons、ConfigProvider、obToken 等），**usage** 更贴近「用法/规范」的语义，因此保留 **oceanbase-design-usage**。若后续增加偏「上手指南」「实战教程」的 Skill，可考虑 **oceanbase-design-using** 或类似命名作为补充。
