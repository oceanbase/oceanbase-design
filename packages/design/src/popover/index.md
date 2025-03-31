---
title: Popover 气泡卡片
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全继承 antd [Popover](https://ant.design/components/popover-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本"></code>
<code src="./demo/trigger.tsx" title="触发方式"></code>
<code src="./demo/over-length.tsx" title="超长内容" description="浮层大小默认由内容区决定，最大宽度为 100vw。如果不想浮层被内容无限撑开，可以通过 `overlayInnerStyle` 设置最大宽高。"></code>
<code src="./demo/with-table.tsx" title="和表格搭配使用" description="1、浮层设置最大宽度，避免被表格内容无限拉伸。<br/>2、表格设置横向滚动 `scroll={{ x: 'max-content' }}`，避免折行。<br/>3、表格尺寸设为 `middle`，分页器尺寸设为 `small`，减小空间占用。"></code>

## API

- 详见 antd Popover 文档: https://ant.design/components/popover-cn
