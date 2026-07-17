---
title: design.md
order: 1
group:
  title: AI
  order: 0
---

本指南介绍 OceanBase Design 的 `design.md`：在 [Ant Design design.md](https://ant.design/design.md) 基线上融合 OB 品牌与组件约定，供 AI 设计/编码工具使用。

## 什么是 design.md？ {#what-is-design-md}

<a href="/design.md" target="_blank" rel="noopener noreferrer">design.md</a> 是面向 AI 设计工具的设计语言描述文件，遵循 [google-labs-code/design.md](https://github.com/google-labs-code/design.md) 规范。

- **基线**：antd 视觉语言（颜色层级、排版、间距、组件范式）
- **增量**：OB 主色 `#0D6CF2`、`obToken` / `var(--ob-*)`、`Filter.*`、`innerBordered`、包路由等

> OceanBase Design 1.x 运行时基于 **antd v5**；`design.md` 基线由 antd v6 `design.md` 生成并打 OB 补丁，编码 API 仍以 `ob_info` 为准。

## 在线读取 {#read-online}

根相对路径（适用于本地开发与生产）：

```text
/design.md
```

AI 设计工具提示词示例（Agent 需拼接站点 origin，如 `http://localhost:8000/design.md`）：

```text
阅读 /design.md，并按 OceanBase Design（继承 Ant Design）的视觉语言生成界面。组件代码使用 @oceanbase/design，禁止 from 'antd'。
```

## 通过 CLI 获取 {#cli}

```bash
ob-design design.md
ob-design design.md --format json
```

构建前在仓库内生成：`pnpm run generate:design-md`（合并 antd 基线 + OB overlay 到 `public/design.md`）。

## 文件包含什么 {#content}

- antd 默认 Light 主题的颜色、字号、圆角、间距、阴影与组件视觉范式
- OB 品牌色与 `ConfigProvider` / `obToken` 主题说明
- Filter、Card+Table、包选择等 OB 组件约定
- Agent 工具链入口（`ob_info`、`ob_constraint`）

## 相关文档 {#related}

- [For Agents](/docs/react/for-agents)
- [LLMs.txt](/docs/react/llms)
- [CLI](/docs/react/cli)
