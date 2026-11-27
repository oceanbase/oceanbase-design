---
title: Pagination 分页
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全继承 antd [Pagination](https://ant.design/components/pagination-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 🔢 默认展示总数文案（跟随语言包，如「共 50 条」），可通过 `showTotal={false}` 关闭。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本"></code>
<code src="./demo/total.tsx" title="总数" description="不传 `showTotal` 时默认展示总数文案，也可传函数自定义；传 `false` 关闭展示。"></code>
<code src="./demo/small.tsx" title="小尺寸"></code>
<code src="./demo/changer.tsx" title="设置分页大小"></code>

## API

- 详见 antd Pagination 文档: https://ant.design/components/pagination-cn
- `showTotal`: 未传时展示默认总数文案；传函数自定义；传 `false` 关闭展示。可同时在 `ConfigProvider` 的 `pagination.showTotal` 中配置。
