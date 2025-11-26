---
title: Alert 警告提示
nav:
  title: 基础组件
  path: /components
markdown: |
  以横幅形式显示突出的信息和相关的可选操作。

  ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/3jjcQ6Q0uIIAAAAAAAAAAAAADv3-AQBr/original)
---

## 组件说明

- 🔥 完全继承 antd [Alert](https://ant.design/components/alert-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 📢 `showIcon` 默认为 true，支持透明背景。
- 🆕 新增 `ghost` 属性，支持透明背景。
- 🆕 新增 `mini` 属性，支持超轻量信息提醒。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/style.tsx" title="四种样式" description="共有四种样式 `success`、`info`、`warning`、`error`。"></code>
<code src="./demo/mini.tsx" title="mini 模式" description="用于轻量信息提醒，尺寸更紧凑。"></code>
<code src="./demo/description.tsx" title="描述"></code>
<code src="./demo/closable.tsx" title="可关闭的警告提示" description="显示关闭按钮，点击可关闭警告提示。"></code>
<code src="./demo/action.tsx" title="操作" description="自定义操作项。"></code>
<code src="./demo/link.tsx" title="链接"></code>
<code src="./demo/ghost.tsx" title="透明背景"></code>
<code src="./demo/banner.tsx" iframe="250" title="顶部公告" description="页面顶部通告形式，默认有图标且 `type` 为 'warning'。"></code>
<code src="./demo/loop-banner.tsx" title="轮播的公告" description="配合 [react-text-loop-next](https://npmjs.com/package/react-text-loop-next) 或 [react-fast-marquee](https://npmjs.com/package/react-fast-marquee) 实现消息轮播通知栏。"></code>
<code src="./demo/error-boundary.tsx" title="React 错误处理" description="友好的 [React 错误处理](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html) 包裹组件。
"></code>
<code src="./demo/over-length.tsx" title="超长内容" debug></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| ghost | 是否为透明背景，开启后会去掉背景、边框和内部间距，可用于轻量提示或者提示内嵌等场景 | boolean | false | - |
| mini | 是否为 mini 模式，用于超轻量信息提醒，尺寸更紧凑 | boolean | false | - |

- 更多 API 详见 antd Alert 文档: https://ant.design/components/alert-cn
