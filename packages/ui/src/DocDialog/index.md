---
title: DocDialog 文档嵌入弹窗
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<code src="./demo/DocDialogDemo.tsx" title="基本" description="点击 Help 按钮打开 Dialog"></code>

## API

### Dialog

| 参数         | 说明                 | 类型                                      | 默认值   | 版本 |
| :----------- | :------------------- | :---------------------------------------- | :------- | :--- |
| className    | 组件 className       | string                                    |          | - |
| visible      | 组件是否显示         | boolean                                   | false    | - |
| title        | 标题                 | string                                    | 帮助文档 | - |
| defaultTop   | 距离屏幕顶部距离     | number                                    | -        | - |
| embedConfig  | 嵌入模式一般属性配置 | [IDialogConfig](doc-dialog#IDialogConfig) | {}       | - |
| normalConfig | 弹窗模式一般属性配置 | [IDialogConfig](doc-dialog#IDialogConfig) | {}       | - |
| onClose      | 关闭按钮的回调       | () => void                                | -        | - |
| setRootWidth | 设置外部容器宽度     | (params: string) => void;                 | -        | - |

### IDialogConfig

| 参数   | 说明                     | 类型             | 默认值 | 版本 |
| :----- | :----------------------- | :--------------- | :----- | :--- |
| min    | 弹窗缩放最小限制[宽，高] | [number, number] | -      | - |
| max    | 弹窗缩放最大限制[宽，高] | [number, number] | -      | - |
| width  | 弹窗默认宽度             | number           | 520    | - |
| height | 弹窗默认高度             | number           | 600    | - |
| left   | 弹窗默认位置             | number           | -      | - |
| top    | 弹窗默认位置             | number           | -      | - |
