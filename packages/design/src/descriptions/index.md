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
- 🆕 新增 `collapsible` 属性，支持内容区展开和收起。
- 🆕 新增 `contentAlign` 属性，支持内容左对齐。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本" description="简单展示。"></code>
<code src="./demo/content.tsx" title="内容展示" description="内容超长自动省略，并展示 `Tooltip`。同时通过 `contentProps` 可设置省略、编辑、复制等内容属性。"></code>
<code src="./demo/collapsible.tsx" title="可折叠" description="支持内容区的展开和收起。"></code>
<code src="./demo/content-align.tsx" title="内容左对齐" description="设置 `contentAlign` 为 `left` 可以让内容左对齐，并且总是为单列模式。"></code>
<code src="./demo/popover.tsx" title="在 Popover 中使用" description="内容左对齐 + 小尺寸。"></code>
<code src="./demo/debug-typography.tsx" title="验证内置 Typography 在各个场景下的效果" description="超长省略、编辑、复制等功能均需表现正常。" debug></code>
<code src="./demo/vertical.tsx" title="垂直" description="默认去掉冒号。"></code>
<code src="./demo/bordered.tsx" title="带边框"></code>
<code src="./demo/vertical-bordered.tsx" title="垂直带边框"></code>
<code src="./demo/size.tsx" title="不同尺寸"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| collapsible | 是否可折叠 | boolean | - | - |
| collapsed | 是否折叠（受控） | boolean | - | - |
| defaultCollapsed | 是否默认折叠 | boolean | false | - |
| onCollapse | 折叠状态改变回调 | (collapsed: boolean) => void | - | - |
| contentAlign | 内容对齐方式，设置为 `left` 时根据最长 label 宽度对齐 | `left` | - | - |

### items 和 Descriptions.Item

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| contentProps | 内容属性，仅无边框模式生效 | [TextProps](https://ant.design/components/typography-cn#typographytext) | - | - |

- 更多 API 详见 antd Descriptions 文档: https://ant.design/components/descriptions-cn
