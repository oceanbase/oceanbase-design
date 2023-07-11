---
title: GraphToolbar 图工具栏
nav:
  title: 业务组件
  path: /biz-components
---

- 📢 需要和 [G6](https://github.com/antvis/G6) Graph 配合使用。

## 代码演示

<code src="../TaskGraph/demo/basic.tsx" title="基本"></code>

## API

| 参数           | 说明               | 类型               | 默认值  | 版本 |
| :------------- | :----------------- | :----------------- | :------ | :--- |
| mode           | 展示模式           | fixed \| embed | fixed | -    |
| graph          | G6 Graph 实例      | Graph              | -       | -    |
| showFullscreen | 是否展示全屏入口   | boolean            | false   | -    |
| onFullscreen   | 点击全屏的回调函数 | () => void         | -       | -    |
| onReload       | 点击刷新的回调函数 | () => void         | -       | -    |
