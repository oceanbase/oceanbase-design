---
title: Tabs 标签页
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全继承 antd [Tabs](https://ant.design/components/tabs-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式（火柴棍宽度等），符合 OceanBase Design 设计规范。
- 🆕 `items` 和 `TabPane` 新增 `tag` 属性，用于设置选项卡后面的标签。

## 代码演示

<code src="./demo/basic.tsx" title="基本"></code>

<code src="./demo/size.tsx" title="大小"></code>

<code src="./demo/position.tsx" title="位置"></code>

<code src="./demo/tag.tsx" title="标签" description="可设置选项卡后面的标签"></code>

<code src="./demo/tab-pane.tsx" title="TabPane 语法糖（不推荐使用）" description="即将废弃的 API，不推荐使用，详见 antd [文档](https://4x.ant.design/components/tabs-cn/#4.23.0-%E7%94%A8%E6%B3%95%E5%8D%87%E7%BA%A7)"></code>

## API

### items

| 参数 | 说明                     | 类型      | 默认值 | 版本 |
| :--- | :----------------------- | :-------- | :----- | :--- |
| tag  | 用于设置选项卡后面的标签 | ReactNode | -      | -    |

- 更多 API 详见 antd Tabs 文档: https://ant.design/components/tabs-cn
