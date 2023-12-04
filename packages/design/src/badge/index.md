---
title: Badge 徽标数
nav:
  title: 基础组件
  path: /components
demo:
  cols: 2
---

- 🔥 完全继承 antd [Badge](https://ant.design/components/badge-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 🆕 新增 `icon` 属性，支持状态图标，仅设置了 `status` 有效。
- 📢 状态文本的默认字体颜色，会继承父元素的设置，而不总是 `token.colorText`，便于和其他组件组合使用。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/count.tsx" title="数字徽标"></code>
<code src="./demo/count-independent.tsx" title="独立使用的数字徽标" description="不包裹任何元素"></code>
<code src="./demo/dot.tsx" title="徽标点"></code>
<code src="./demo/status.tsx" title="状态点" description="用于表示状态的小圆点"></code>
<code src="./demo/status-icon.tsx" title="状态图标" description="使用图标标识状态，增强感知"></code>
<code src="./demo/status-custom-icon.tsx" title="自定义状态图标"></code>
<code src="./demo/status-inner.tsx" title="状态点和状态图标和其他组件组合使用"></code>
<code src="./demo/ribbon.tsx" title="缎带徽标"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| icon | 是否为图标模式，值为 true 时展示默认图标，值为 ReactNode 时展示自定义图标 | boolean \| React.ReactNode | false | - |

- 更多 API 详见 antd Badge 文档: https://ant.design/components/badge-cn
