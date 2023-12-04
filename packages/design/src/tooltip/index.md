---
title: Tooltip 文字提示
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全继承 antd [Tooltip](https://ant.design/components/tooltip-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 🆕 新增 `type` 属性，支持 `default`、`light`、`info`、`success`、`warning` 和 `error` 五种类型的 Tooltip。
- 🆕 新增 `mouseFollow` 属性，支持鼠标跟随。
- 🆕 新增 `closeIcon` 属性，支持展示关闭按钮。
- 🆕 新增 `onClose` 属性，关闭按钮被点击时调用此函数，可以配合 `open` 和 `onOpenChange` 属性来控制 `Tooltip` 展示。

## 代码演示

<code src="./demo/basic.tsx" title="基本"></code>

<code src="./demo/close-icon.tsx" title="关闭按钮" description="Tooltip 可以通过设置 closeIcon 变为可关闭 Tooltip, 并支持自定义关闭按钮，设置为 true 时将使用默认关闭按钮。可关闭 Tooltip 具有 onClose 事件"></code>

<code src="./demo/type.tsx" title="Tooltip 类型" description="Tooltip 有五种类型：default、light、info、success、warning 和 error，以满足不同场景的提示需求。"></code>

<code src="./demo/mouse-follow.tsx" title="鼠标跟随" description="设置 `mouseFollow: true` 可开启鼠标跟随，此时会去掉箭头，并且 `placement`、`open` 和 `trigger` 等属性也将失效。"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| type | 类型 | default \| light \| info \| success \| warning \| error | default | - |
| mouseFollow | 是否跟随鼠标移动，开启后会去掉箭头，并且 `placement`、`open`、`closeIcon` 和 `trigger` 等属性也将失效 | boolean | false | - |
| closeIcon | 自定义关闭按钮 | boolean \| ReactNode | false | - |
| closeTitle | 自定义关闭标题 | ReactNode | - | - |
| onClose | 关闭时的回调（可通过 e.preventDefault() 来阻止默认行为） | (e) => void | - | - |

- 更多 API 详见 antd Tooltip 文档: https://ant.design/components/tooltip-cn
