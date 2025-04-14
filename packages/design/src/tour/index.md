---
title: Tour 漫游式引导
nav:
  title: 基础组件
  path: /components
demo:
  cols: 2
---

- 🔥 完全继承 antd [Tour](https://ant.design/components/tour-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本"></code>
<code src="./demo/new-feature-guide.tsx" title="新功能引导"></code>
<code src="./demo/type.tsx" title="轻量级引导"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| type | 类型 | default \| info \| success \| warning \| error | default | - |
| mouseFollow | 是否跟随鼠标移动，开启后会去掉箭头，并且 `placement`、`open`、`closeIcon` 和 `trigger` 等属性也将失效 | boolean | false | - |
| closeIcon | 自定义关闭按钮 | boolean \| ReactNode | false | - |
| onClose | 关闭时的回调（可通过 e.preventDefault() 来阻止默认行为） | (e) => void | - | - |

- 更多 API 详见 antd Tour 文档: https://ant.design/components/tour-cn
