---
title: Modal 对话框
nav:
  title: 基础组件
  path: /components
markdown: |
  模态对话框是在当前页面上方以遮罩叠加居中浮层的形式显示内容，底层页面内容被遮盖且无法访问，直到用户完成任务或关闭模态对话框。该模式可将用户注意力集中在当前任务上，适用于需用户集中注意力快速完成某任务的场景。

  ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/lI3EQ6WmlxgAAAAAAAAAAAAADv3-AQBr/original)
---

## 组件说明

- 🔥 完全继承 antd [Modal](https://ant.design/components/modal-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 📢 `destroyOnClose` 属性的默认值为 `true`。
- 🆕 Modal 新增 `extra` 属性，用于设置底部额外内容。
- 🆕 新增 `Modal.Progress` 组件，可用于异步任务或耗时较长的场景。
- 🆕 `Modal.method()` 静态方法，支持消费 `ConfigProvider` 全局配置。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本"></code>
<code src="./demo/no-title.tsx" title="无标题" description="标题为空的 Modal 示例，用于调试。" debug></code>
<code src="./demo/extra.tsx" title="底部额外内容" description="可通过 `extra` 属性进行设置。"></code>
<code src="./demo/form.tsx" title="Form 表单"></code>
<code src="./demo/scroll.tsx" title="内容区滚动" description="可限制最大高度，并设置滚动。"></code>
<code src="./demo/progress.tsx" title="带百分比的进度对话框" description="可用于异步任务或耗时较长的场景。"></code>
<code src="./demo/progress-with-loading.tsx" title="不带百分比的进度对话框" description="无法获取具体进度时，会展示 loading 态。"></code>
<code src="./demo/static-function.tsx" title="静态方法" description="支持消费 `ConfigProvider` 全局配置。"></code>

## API

### Modal

| 参数           | 说明                        | 类型    | 默认值 | 版本  |
| :------------- | :-------------------------- | :------ | :----- | :---- |
| destroyOnClose | 关闭时销毁 Modal 里的子元素 | boolean | true   | 0.3.1 |

- 更多 API 详见 antd Modal 文档: https://ant.design/components/modal-cn#api

### Modal.Progress

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| width | 对话框宽度 | string \| number | 480 | - |
| maskClosable | 点击蒙层是否允许关闭 | boolean | false | - |
| destroyOnClose | 关闭时销毁 Modal 里的子元素 | boolean | true | 0.3.1 |
| title | 标题 | ReactNode | - | - |
| loading | 是否加载中 | boolean | false | - |
| progress | 进度条属性 | [ProgressProps](https://ant-design.antgroup.com/components/progress-cn#api) | `{ type: 'circle', size: 150  }` | - |
| description | 描述 | ReactNode | - | - |
| footer | 底部内容 | ReactNode | null | - |
| extra | 底部额外内容 | ReactNode | null | - |

- 更多 API 详见 antd Modal 文档: https://ant.design/components/modal-cn#api

### Modal.method()

- 详见 antd Modal.method() 文档 https://ant.design/components/modal-cn#modalmethod
