---
title: Button 按钮
nav:
  title: Shadcn UI
  path: /shadcn
demo:
  cols: 2
markdown: |
  用于开始一个即时操作。

  基于 shadcn/ui 和 OceanBase Design 主题的按钮组件。
---

## 组件说明

- 🎨 使用 OceanBase Design 主题颜色和样式
- 🧩 基于 shadcn/ui 组件架构
- 📦 支持多种变体和尺寸

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="按钮类型" description="按钮有多种类型：默认、次要、危险、轮廓、幽灵和链接按钮。"></code>
<code src="./demo/size.tsx" title="按钮尺寸" description="小、默认、大三种尺寸。"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| variant | 按钮类型 | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` |
| size | 按钮尺寸 | `'default' \| 'sm' \| 'lg' \| 'icon'` | `'default'` |
| disabled | 禁用状态 | `boolean` | `false` |
| className | 自定义类名 | `string` | - |

