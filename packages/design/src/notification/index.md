---
title: Notification 通知提醒框
nav:
  title: 基础组件
  path: /components
---

用于展示与任务发起页脱钩的非阻断性任务结果或系统反馈，通过全局悬浮机制实现跨页面触达。

- 🔥 继承 antd [Notification](https://ant.design/components/notification-cn) 的能力和 API，可无缝切换。
- 💄 默认左下角展示，固定宽度 350px，线性图标与自动关闭进度条，标题/描述内链接自动应用类型色样式。
- 🆕 新增 `notification.loading` 方法，用于展示持续时间较长的进程状态。
- 🆕 新增 `errorDetails` 属性，用于展示异常信息，并支持复制为 Markdown 格式。
- 🆕 新增 `dedupeKey` 属性，用于去除重复弹出。
- 📌 **通知场景统一使用 `notification`**；`message` 仅作兼容入口，内部转发至 Notification。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本" description="五种类型：info、success、warning、error、loading，对应不同业务场景。"></code>
<code src="./demo/placement.tsx" title="位置" description="默认 `bottomLeft`。"></code>
<code src="./demo/auto-close.tsx" title="自动关闭" description="仅标题 5s、含描述 10s；error 默认不自动关闭；悬停暂停倒计时。"></code>
<code src="./demo/update.tsx" title="更新消息内容" description="通过 `key` 更新同一条通知，适用于 loading 等进度场景。"></code>
<code src="./demo/error-details.tsx" title="异常明细" description="warning / error 可附加结构化诊断信息，支持折叠展开与 Markdown 复制。"></code>
<code src="./demo/actions.tsx" title="文字链操作" description="在 `message` / `description` 中插入 `<a>` 或 `Typography.Link`，样式自动按通知类型着色。"></code>
<code src="./demo/dedupe.tsx" title="去重" description="`dedupeKey` 在同类型下去除重复弹出；与 `key`（替换）语义不同。"></code>
<code src="./demo/stack.tsx" title="堆叠" description="最多堆叠 3 条，悬停展开。"></code>
<code src="./demo/hooks.tsx" title="Hooks" description="通过 `notification.useNotification()` 获取可消费 ConfigProvider 上下文的实例。"></code>

## 通知类型

| 类型    | 含义             | 推荐用法                                            |
| ------- | ---------------- | --------------------------------------------------- |
| info    | 值得知道的事     | 后台任务结果、跨页面同步提示；默认可自动关闭        |
| success | 写入任务成功     | 创建/保存/提交成功；仅标题时 5s 自动关闭            |
| warning | 可能重要，请注意 | 配额、权限、网络抖动等；重复告警可用 `dedupeKey`    |
| error   | 出错了           | 默认不自动关闭；建议包含安抚、原因、解决方案        |
| loading | 进行中           | 长耗时任务；提供预估时间或阶段，配合 `key` 更新进度 |

## API

### 扩展参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| errorDetails | 异常明细，适用于 warning / error | `ErrorDetailItem[]` | - |
| dedupeKey | 去重 key，同类型下相同 key 仅展示第一条；关闭后允许再次弹出 | `string` | - |

- 更多 API 详见 antd Notification 文档：https://ant.design/components/notification-cn。

### `key` 与 `dedupeKey`

|              | `key`                          | `dedupeKey`               |
| ------------ | ------------------------------ | ------------------------- |
| 同值再次调用 | **替换**原通知内容             | **跳过**新通知            |
| 典型场景     | loading 进度更新、导出阶段切换 | 轮询告警、接口错误防刷屏  |
| 关闭后       | 可用同 key 创建新通知          | 可用同 dedupeKey 再次弹出 |

### ErrorDetailItem

| 参数     | 说明         | 类型      | 默认值 |
| -------- | ------------ | --------- | ------ |
| label    | 明细标签     | `string`  | -      |
| value    | 明细值       | `string`  | -      |
| copyable | 是否参与复制 | `boolean` | `true` |

### 默认行为

| 行为               | 默认值                     |
| ------------------ | -------------------------- |
| placement          | `bottomLeft`               |
| bottom             | `24`                       |
| width              | `350px`                    |
| stack              | 最多 3 条，展开间距 8px    |
| duration（仅标题） | `5`                        |
| duration（含描述） | `10`                       |
| duration（error）  | `0`（不自动关闭）          |
| showProgress       | 自动关闭时启用             |
| pauseOnHover       | `true`                     |
| closable           | `true`（始终显示关闭按钮） |

传入 `duration` 可覆盖以上自动关闭策略。

### 方法

- `notification.loading(config)`：展示进行中通知。
- `notification.useNotification()`：获取 Hook 实例，需将返回的 `contextHolder` 插入组件树以消费 ConfigProvider 上下文。

### 与 Message 的兼容

| 旧用法                         | 推荐用法                                                   |
| ------------------------------ | ---------------------------------------------------------- |
| `message.success('已保存')`    | `notification.success({ message: '已保存' })`              |
| `message.error('失败')`        | `notification.error({ message: '失败' })`                  |
| `message.loading('处理中', 0)` | `notification.loading({ message: '处理中', duration: 0 })` |
| `message.useMessage()`         | `notification.useNotification()`                           |

`message` 仍保留兼容 antd Message API，内部转发至 Notification；新代码请直接使用 `notification`。
