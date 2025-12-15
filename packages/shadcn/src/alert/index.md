---
title: Alert 提示
nav:
  title: Shadcn UI
  path: /shadcn
demo:
  cols: 2
markdown: |
  用于展示重要的提示信息。

  基于 shadcn/ui 和 OceanBase Design 主题的提示组件。
---

## 组件说明

- 🎨 使用 OceanBase Design 主题颜色和样式
- 🧩 基于 shadcn/ui 组件架构
- 📦 支持多种状态类型

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="提示类型" description="支持默认、信息、成功、警告和错误等类型。"></code>

## API

### Alert

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| variant | 提示类型 | `'default' \| 'info' \| 'success' \| 'warning' \| 'destructive'` | `'default'` |
| className | 自定义类名 | `string` | - |

### AlertTitle

提示标题。

### AlertDescription

提示描述。

