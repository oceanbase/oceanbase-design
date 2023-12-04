---
title: Spin 加载中
nav:
  title: 基础组件
  path: /components
demo:
  cols: 2
---

- 🔥 完全继承 antd [Spin](https://ant.design/components/spin-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 🆕 定制 `indicator` 加载指示符，支持 `默认` 和 `灰色` 两种类型。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本用法" description="一个简单的 loading 状态"></code>
<code src="./demo/size.tsx" title="各种大小" description="小的用于文本加载，默认用于卡片容器级加载，大的用于**页面级**加载"></code>
<code src="./demo/gray.tsx" title="灰色的加载指示符"></code>
<code src="./demo/inside.tsx" title="放入一个容器中"></code>
<code src="./demo/nested.tsx" title="卡片加载中" description="可以直接把内容内嵌到 `Spin` 中，将现有容器变为加载状态"></code>
<code src="./demo/tip.tsx" title="自定义描述文案"></code>
<code src="./demo/custom-indicator.tsx" title="自定义指示符" description="使用自定义指示符"></code>

## API

| 参数 | 说明                                         | 类型    | 默认值 | 版本 |
| :--- | :------------------------------------------- | :------ | :----- | :--- |
| gray | 是否为灰色的加载指示符，仅针对默认指示符生效 | boolean | false  | -    |

- 更多 API 详见 antd Spin 文档: https://ant.design/components/spin-cn
