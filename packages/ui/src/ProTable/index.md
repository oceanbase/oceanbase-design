---
title: ProTable 高级表格
nav:
  title: 业务组件
  path: /biz-components
---

- 🔥 完全继承 pro-components [ProTable](https://procomponents.ant.design/components/table) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 📢 ProTable 的默认尺寸改为 `large`。
- 🆕 支持 [Table](/components/table) 的 `column.tooltip` 列头帮助提示。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本" description="卡片带边框"></code>
<code src="./demo/header-bordered.tsx" title="表格标题区和内容区分隔"></code>
<code src="./demo/light-filter.tsx" title="轻量筛选"></code>
<code src="./demo/expandable.tsx" title="可展开表格"></code>
<code src="./demo/bordered.tsx" title="卡片不带边框、表格带边框"></code>
<code src="./demo/empty.tsx" title="空状态"></code>
<code src="./demo/column-tooltip.tsx" title="列头帮助提示" description="通过 `column.tooltip` 在列头展示帮助说明，可与排序、筛选一起使用。"></code>
<code src="./demo/link.tsx" title="带链接" debug></code>

## API

| 参数          | 说明       | 类型                           | 默认值  | 版本 |
| :------------ | :--------- | :----------------------------- | :------ | :--- |
| defaultSize   | 默认尺寸   | `large` \| `middle` \| `small` | `large` | -    |
| innerBordered | 带内部边框 | boolean                        | -       | -    |

- 更多 API 详见 pro-components ProTable 文档: https://procomponents.ant.design/components/table
