---
title: Descriptions 描述列表
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全继承 antd [Descriptions](https://ant.design/components/descriptions-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和全局样式，符合 OceanBase Design 设计规范。
- 🆕 无边框模式下，描述项内容溢出时自动省略，并展示 `Tooltip`。
- 🆕 无边框模式下，`items` 和 Descriptions.Item 新增 `contentProps` 属性，用于设置省略、编辑、复制等内容属性。

## 代码演示

<code src="./demo/basic.tsx" title="基本" description="简单展示"></code>

<code src="./demo/content.tsx" title="内容展示" description="内容超长自动省略，并展示 `Tooltip`。同时通过 `contentProps` 可设置省略、编辑、复制等内容属性。"></code>

<code src="./demo/vertical.tsx" title="垂直列表" description="默认去掉冒号"></code>

<code src="./demo/bordered.tsx" title="带边框"></code>

<code src="./demo/size.tsx" title="不同尺寸"></code>

## API

### items 和 Descriptions.Item

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| contentProps | 内容属性，仅无边框模式生效 | [TextProps](https://ant.design/components/typography-cn#typographytext) | - | - |

- 更多 API 详见 antd Descriptions 文档: https://ant.design/components/descriptions-cn
