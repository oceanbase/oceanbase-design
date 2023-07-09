---
title: FullscreenBox 全屏盒子
nav:
  title: 业务组件
  path: /biz-components
---

全屏将指定区域（容器）的内容显示范围放大到全屏区域进行浏览或操作，屏蔽区域外的其它内容干扰，并使指定区域（容器）的可视面积最大化。

## 何时使用

- 承载内容的空间不足，需要更大区域呈现内容时。
- 页面内容较复杂，部分内容需要减少干扰，达到沉浸式浏览或操作的目的时。

## 代码演示

### 基本使用

默认全屏是视口级别的全屏。

<code src="./demo/ViewportFullscreenDemo.tsx"></code>

### 视窗内全屏

可以配置 `defaultMode` 属性为 `browser` 配置浏览器全屏。

<code src="./demo/BrowserFullscreenDemo.tsx"></code>

### 和 ListToolbar 一起使用

全屏最常用的场景是和表格列表一起使用，这里给出和列表工具栏一起使用的例子，控制全屏状态。

<code src="./demo/ListToolbarDemo.tsx"></code>

## API 参数

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| className | 自定义类名 | string | - | - |
| style | 全屏容器的样式 | React.CSSProperties | - | - |
| defaultMode | 默认的全屏模式，不可变 | <code>browser &#124; viewport</code> | viewport | - |
| header | 自定义 Header | <code>false &#124; ReactNode &#124; { title: ReactNode; extra: ReactNode }</code> | - | - |
| onChange | 全屏状态值改变后的回调 | (fullscreen: boolean) => void | ​- | - |
