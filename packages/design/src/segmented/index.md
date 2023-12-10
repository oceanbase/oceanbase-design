---
title: Segmented 分段控制器
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全继承 antd [Segmented](https://ant.design/components/segmented-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式（颜色宽度等），符合 OceanBase Design 设计规范。
- 🆕 `options` 选项新增 `ellipsis` 属性，用于配置内容溢出时出现省略和 Tooltip 提示。

## 代码演示

### 基本使用

<code src="./demo/basic.tsx" title="基本"></code>

<code src="./demo/disabled.tsx" title="不可用"></code>

<code src="./demo/size.tsx" title="三种大小"></code>

<code src="./demo/block.tsx" title="block" description="block 属性使其撑满父元素宽度"></code>

<code src="./demo/ellipsis.tsx" title="省略" description="需要同时配置分段器的 block 和选项的 ellipsis 属性"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| options | 选项列表 | string[] \| number[] \| { label: ReactNode; value: string; icon?: ReactNode; disabled?: boolean; ellipsis?: [EllipsisConfig](https://ant.design/components/typography-cn#ellipsis); className?: string }[] | [] | - |

- 更多 API 详见 antd Segmented 文档: https://ant.design/components/segmented-cn
