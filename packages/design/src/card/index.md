---
title: Card 卡片
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全继承 antd [Card](https://ant.design/components/card-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 🆕 新增 `divided` 属性，控制是否展示分割线。
- 🆕 `tabList` 新增 `tag` 属性，用于设置选项卡后面的标签。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="典型卡片" description="包含标题、内容、操作区域。"></code>
<code src="./demo/border-less.tsx" title="无边框" description="带有阴影，通常位于灰色背景之上。"></code>
<code src="./demo/no-divider.tsx" title="无分割线" description="去掉卡片头部和内容区的分割线。"></code>
<code src="./demo/inner.tsx" title="嵌套卡片" description="多层级展示，支持多种内部卡片样式。"></code>
<code src="./demo/grid.tsx" title="网格型内嵌卡片"></code>
<code src="./demo/tabs.tsx" title="带页签的卡片" description="页签可设置选项卡后面的标签。"></code>
<code src="./demo/with-form.tsx" title="和 Form 组合使用"></code>
<code src="../table/demo/card-table.tsx" title="和 Table 组合使用"></code>
<code src="./demo/config-provider.tsx" title="ConfigProvider" description="用于调试内部的 ConfigProvider 是否表现正常，需要连续触发 2 次及以上，观察第二个弹窗是否正常展示" debug></code>

## API

| 参数    | 说明           | 类型                                             | 默认值 | 版本 |
| :------ | :------------- | :----------------------------------------------- | :----- | :--- |
| divided | 是否展示分割线 | boolean                                          | true   | -    |
| tabList | 页签标题列表   | {key: string, tab: ReactNode, tag: ReactNode }[] | -      | -    |

- 更多 API 详见 antd Card 文档: https://ant.design/components/card-cn
