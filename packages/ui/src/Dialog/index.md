---
title: Dialog 嵌入弹窗
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/DialogDemo.tsx" title="基本" description="点击 Help 按钮打开 Dialog"></code>
<code src="./demo/EmbdedDialogDemo.tsx" title="嵌入" description="点击 Help 按钮打开嵌入版 Dialog"></code>
<code src="./demo/EmbdedDialogAndNormalDemo.tsx" title="动态切换" description="点击 Help 按钮打开嵌入版和普通版自动切换 Dialog"></code>

## API

### Dialog

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| className | 组件 className | string | - | - |
| visible | 组件是否显示 | boolean | false | - |
| min | 弹窗缩放最小限制[宽，高] | [number, number] | - | - |
| max | 弹窗缩放最大限制[宽，高] | [number, number] | - | - |
| width | 弹窗默认宽度 | number | 520 | - |
| height | 弹窗默认高度 | number | 600 | - |
| left | 弹窗默认位置 | number | - | - |
| top | 弹窗默认位置 | number | - | - |
| title | 标题 | string | 帮助文档 | - |
| extLink | 外链 | [IDialogExtLink](dialog#IDialogExtLink) | - | - |
| onClose | 关闭按钮的回调 | () => void | - | - |
| clientWidth | 窗口宽度， 必传 | number | - | - |
| clientHeight | 窗口高度， 必传 | number | - | - |
| resizable | 开启可缩放 | boolean | true | - |
| draggable | 开启可拖拽 | boolean | true | - |
| enableMaximization | 开启最大化功能 | boolean | true | - |
| setRootWidth | 设置外部容器宽度 | (params: string) => void; | - | - |
| isEmbed | 开启弹窗嵌入模式 | boolean | false | - |

### IDialogExtLink

| 参数 | 说明     | 类型   | 默认值 | 版本 |
| :--- | :------- | :----- | :----- | :--- |
| text | 外链文案 | string | ''     | -    |
| link | 外链链接 | string | ''     | -    |
