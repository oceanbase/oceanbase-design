---
title: Drawer 抽屉
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全兼容 antd [Drawer](https://ant.design/components/drawer-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 🆕 增强 `footer` 属性，增加默认的抽屉的页脚操作按钮。
- 🆕 新增`onOk` 新增 `onCancel` 属性，用于设置抽屉页脚操作按钮的回调。
- 🆕 新增`cancelText` 新增 `okText` 属性，用于设置抽屉页脚取消、确定按钮文字。
- 🆕 新增`okButtonProps` 属性，用于设置抽屉页脚 ok 按钮 props。
- 🆕 新增`confirmLoading` 属性，用于设置抽屉页脚 确定按钮 loading。

## 代码演示

<code src="./demo/basic.tsx" title="典型带 footer 抽屉" description="包含标题、内容、操作区域。"></code>

<code src="./demo/no-footer.tsx" title="无 footer" description="去掉抽屉底部的 footer。"></code>

<code src="./demo/custom-footer.tsx" title="自定义 footer" description="自定义 footer 的内容。"></code>

<code src="./demo/confirmLoading.tsx" title="确定按钮 loading" description="确定按钮 loading。"></code>


## API

| 参数           | 说明                         | 类型                                     | 默认值 | 版本 |
| :------------- | :-------------------------- | :-------------------------------------- | :----- | :--- |
| footer         | 抽屉的页脚	                   |  boolean \| ReactNode                    | true  | -    |
| onOk           | 点击确定回调                  | function(e)                             | -      | -    |
| onCancel       | 点击取消按钮的回调             | function(e)                             | -      | -    |
| cancelText     | 设置取消按钮文字               | string                                  | 取消    | -    |
| okText         | 确认按钮文字	                 | string                                  | 确定   | -    |
| okButtonProps  | ok 按钮 props                | ButtonProps                             | -     | -    |
| confirmLoading | 确定按钮 loading              | boolean                                 | false  | -    |

- 更多 API 详见 antd Drawer 文档: https://ant.design/components/drawer-cn
