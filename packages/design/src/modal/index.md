---
title: Modal 对话框
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全继承 antd [Modal](https://ant.design/components/modal-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 🆕 新增 `Modal.Progress` 组件，可用于异步任务或耗时较长的场景。
- 🆕 `Modal.method()` 静态方法，支持消费 `ConfigProvider` 全局配置。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本"></code>
<code src="./demo/over-height.tsx" title="高度自适应" description="高度超出自动滚动"></code>
<code src="./demo/progress.tsx" title="带百分比的进度对话框" description="可用于异步任务或耗时较长的场景"></code>
<code src="./demo/progress-with-loading.tsx" title="不带百分比的进度对话框" description="无法获取具体进度时，会展示 loading 态"></code>
<code src="./demo/static-function.tsx" title="静态方法" description="支持消费 `ConfigProvider` 全局配置"></code>

## API

### Modal

- 详见 antd Modal 文档: https://ant.design/components/modal-cn#api

### Modal.Progress

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| width | 对话框宽度 | string \| number | 480 | - |
| maskClosable | 点击蒙层是否允许关闭 | boolean | false | - |
| title | 标题 | ReactNode | - | - |
| loading | 是否加载中 | boolean | false | - |
| progress | 进度条属性 | [ProgressProps](https://ant-design.antgroup.com/components/progress-cn#api) | `{ type: 'circle', size: 150  }` | - |
| description | 描述 | ReactNode | - | - |
| footer | 底部内容 | ReactNode | null | - |

- 更多 API 详见 antd Modal 文档: https://ant.design/components/modal-cn#api

### Modal.method()

- 详见 antd Modal.method() 文档 https://ant.design/components/modal-cn#modalmethod
