---
title: 组件
nav:
  title: 工具函数
  path: /components
---

# 组件

## joinComponent(array, render, separator)

将数组的所有元素，映射为 `React` 组件后，通过分隔符连接成完整的组件。数组原生的 `join` 方法只能连接数字、字符串等简单值，而 `joinComponent` 则可以连接对象、组件等复杂值

### API

| 参数      | 说明               | 类型             | 默认值 |
| --------- | ------------------ | ---------------- | ------ |
| array     | 数组               | T[]              | -      |
| render    | 数组元素的渲染函数 | (T) => ReactNode | -      |
| separator | 分隔符             | string           | `、`   |
