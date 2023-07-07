---
title: Card 卡片
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全兼容 antd [Card](https://ant.design/components/card-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式（火柴棍宽度等），符合 OceanBase Design 设计规范。
- 🆕 新增 `divided` 属性，控制是否展示分割线。
- 🆕 `tabList` 新增 `tag` 属性，用于设置选项卡后面的标签。

## 代码演示

<code src="./demo/basic.tsx" title="典型卡片" description="包含标题、内容、操作区域。"></code>

<code src="./demo/no-divider.tsx" title="无分割线" description="去掉卡片头部和内容区的分割线。"></code>

<code src="./demo/tabs.tsx" title="带页签的卡片" description="页签可设置选项卡后面的标签。"></code>

## API

| 参数    | 说明           | 类型                                             | 默认值 | 版本 |
| :------ | :------------- | :----------------------------------------------- | :----- | :--- |
| divided | 是否展示分割线 | boolean                                          | true   | -    |
| tabList | 页签标题列表   | {key: string, tab: ReactNode, tag: ReactNode }[] | -      | -    |

- 更多 API 详见 antd Card 文档: https://ant.design/components/card-cn
