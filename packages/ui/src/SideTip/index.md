---
title: SideTip 悬浮操作按钮
nav:
  title: 业务组件
  path: /biz-components
---

侧边提示用于在页面侧边栏右下角提示用户进行操作时候的便捷按钮，功能特性为：

- 默认处于页面右下角
- 可拖拽
- 可隐藏(hover 出隐藏小按钮)
- 可点击

## 使用场景

如提供帮助咨询，收集调查问卷等。

## 演示

### 基本使用

侧边提示默认提供 `primary` 和默认两种形式的按钮供选择，可以配置 `defaultHide` 来初始隐藏。详见页面右下角隐藏的按钮。

<code src="./demo/basic.tsx"></code>

### 普通按钮模式

侧边提示按钮默认可隐藏，但你也可以禁用这些能力，退化成普通的按钮。

<code src="./demo/normal.tsx"></code>

### 小尺寸

侧边提示默认提供 `small` 和默认两种尺寸的按钮供选择

<code src="./demo/small.tsx"></code>

### 操作选单

操作选单要根据按钮的相对位置而变，需要使用 `id` 标记按钮，然后 `DropDown` 下拉选项的 `getPopupContainer` 方法设定其相对的 pop 位置。

<code src="./demo/operation.tsx"></code>

### 回到顶部

我们尝试用 `SideTip` 组件实现回到顶部的功能。

<code src="./demo/backTop.tsx"></code>

### 不可用

要配置按钮不可用只要配置 `disabled` 属性即可。

<code src="./demo/disabled.tsx"></code>

### 加载中

根据 `type` 不同, loading 的颜色也会相应变化。

<code src="./demo/loading.tsx"></code>

### 内容展示

集成 antd `Badge` 组件相关属性，参考 <a href="https://ant.design/components/badge-cn/#API" target="_blank">badge</a> 组件。

<code src="./demo/content.tsx"></code>

### 点击新建 Modal

<code src="./demo/modal.tsx"></code>

### ToolTip 提示

<code src="./demo/tooltip.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| type | 设置按钮类型，可选值为 `primary` 或者不设 | string | - | - |
| hideable | 设置是否可隐藏 | boolean | true | - |
| size | 设置按钮尺寸 | small \| default | default | - |
| icon | 指定按钮图标 | URL \| ReactNode | - | - |
| open | 指定是否打开 | boolean | false | - |
| defaultHide | 默认是否隐藏, `hideable`为`true`时有效 | boolean | false | - |
| disabled | 指定是否禁用 | boolean | false | - |
| loading | 是否为加载中状态 | boolean | false | - |
| position | 初始位置 | { right: number, bottom: number } | {right: 24, bottom: 24} | - |
| badge | antd Badge 组件相关属性 | 参考 <a href="https://ant.design/components/badge-cn/#API" target="_blank">badge</a> 组件 | - | - |
| tooltip | antd Tooltip 组件相关属性 | 参考 <a href="https://ant.design/components/tooltip-cn/#API" target="_blank">tooltip</a> 组件 | - | - |
| id | 若页面中有多个侧边提示组件，则通过 id 标识当前组件，用于缓存侧边提示组件是否隐藏配置 | string | - | - |
| onDragStart | 开始拖动的方法回调 | () => void | - | - |
| onDragEnd | 结束拖动的方法回调 | () => void | - | - |
| onDrag | 拖动中的方法回调 | (offset: {right: number, bottom: number}) => void | - | - |
| buttonStyle | 按钮的样式 | React.CSSProperties | - | 2.10.3 | - |
| buttonClassName | 按钮的类 | string | - | 2.10.3 | - |
