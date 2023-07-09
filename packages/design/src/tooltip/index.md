---
title: Tooltip 文字提示
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全兼容 antd [Tooltip](https://ant.design/components/tooltip-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 🆕 新增 `type` 属性，支持 `default`、`light`、`info`、`success`、`warning` 和 `error` 五种类型的 Tooltip。
- 🆕 新增 `mouseFollow` 属性，支持鼠标跟随。

## 代码演示

<code src="./demo/basic.tsx" title="基本"></code>

<code src="./demo/type.tsx" title="Tooltip 类型" description="Tooltip 有五种类型：default、light、info、success、warning 和 error，以满足不同场景的提示需求。"></code>

<code src="./demo/mouse-follow.tsx" title="鼠标跟随" description="设置 `mouseFollow: true` 可开启鼠标跟随，此时会去掉箭头，并且 `placement`、`open` 和 `trigger` 等属性也将失效。"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| type | 类型 | default \| light \| info \| success \| warning \| error | default | - |
| mouseFollow | 是否跟随鼠标移动，开启后会去掉箭头，并且 `placement`、`open` 和 `trigger` 等属性也将失效 | boolean | false | - |

- 更多 API 详见 antd Tooltip 文档: https://ant.design/components/tooltip-cn
