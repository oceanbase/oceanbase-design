---
title: Welcome 欢迎页
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本"></code>
<code src="./demo/with-card-type.tsx" title="stepType 类型"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| title | 标题 | string | - | - |
| description | 描述 | string | - | - |
| bgImage | 背景图片 URL 地址 | string | - | - |
| introduces | 介绍列表 | [IntroduceItem](welcome#introduceitem)[] | - | - |
| buttonText | 按钮文本 | string | - | - |
| buttonProps | Button 属性 | [ButtonProps](https://ant.design/components/button-cn/#API) | - | - |
| steps | 步骤列表 | [StepItem](welcome#stepitem)[] | {} | - |
| stepType | 步骤的展示类型 | ['default', 'card'] | default | - |
| helps | 固定表头 | [HelpItem](welcome#helpitem)[] | - | - |

### IntroduceItem

| 参数        | 说明            | 类型   | 默认值 | 版本 |
| :---------- | :-------------- | :----- | :----- | :--- |
| image       | 图片的 URL 地址 | string | -      | -    |
| title       | 介绍标题        | string | -      | -    |
| description | 介绍描述        | string | -      | -    |

### StepItem

| 参数        | 说明     | 类型             | 默认值 | 版本 |
| :---------- | :------- | :--------------- | :----- | :--- |
| title       | 步骤标题 | string           | -      | -    |
| description | 步骤描述 | string           | -      | -    |
| imgUrl      | icon     | string           | -      | -    |
| operations  | 操作描述 | OperationProps[] | -      | -    |

### OperationProps

| 参数    | 说明     | 类型   | 默认值 | 版本 |
| :------ | :------- | :----- | :----- | :--- |
| onClick | 操作回调 | Func   | -      | -    |
| text    | 操作文案 | string | -      | -    |

### HelpItem

| 参数   | 说明              | 类型    | 默认值 | 版本 |
| :----- | :---------------- | :------ | :----- | :--- |
| title  | 帮助标题          | string  | -      | -    |
| link   | 帮助文档对应链接  | string  | -      | -    |
| isMore | 是否为 `查看更多` | boolean | false  | -    |
