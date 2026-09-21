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
- 🆕 支持通过 `ConfigProvider` / `notification.config` / `message.config` 全局配置各类型的默认自动关闭时长。
- 📌 **通知场景统一使用 `notification`**；`message` 仅作兼容入口，内部转发至 Notification。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本" description="五种类型：info、success、warning、error、loading，对应不同业务场景。"></code>
<code src="./demo/placement.tsx" title="位置" description="默认 `bottomLeft`。"></code>
<code src="./demo/auto-close.tsx" title="自动关闭" description="仅标题 5s、含描述 10s；error 默认不自动关闭；悬停暂停倒计时。"></code>
<code src="./demo/update.tsx" title="更新消息内容" description="通过 `key` 更新同一条通知，适用于 loading 等进度场景。"></code>
<code src="./demo/actions.tsx" title="文字链操作" description="在 `message` / `description` 中插入 `<a>` 或 `Typography.Link`，样式自动按通知类型着色。"></code>
<code src="./demo/error-details.tsx" title="异常明细" description="warning / error 可附加结构化诊断信息，支持折叠展开与 Markdown 复制。"></code>
<code src="./demo/stack.tsx" title="堆叠" description="最多堆叠 3 条，悬停展开。"></code>
<code src="./demo/dedupe.tsx" title="去重" description="`dedupeKey` 在同类型下去除重复弹出；与 `key`（替换）语义不同。"></code>
<code src="./demo/hooks.tsx" title="Hooks" description="通过 `notification.useNotification()` 获取可消费 ConfigProvider 上下文的实例。"></code>
<code src="./demo/max-height.tsx" title="内容最大高度" description="内容超过 320px 时内容区内部滚动，关闭按钮与进度条保持固定。" debug></code>
<code src="./demo/global-duration.tsx" title="全局配置自动关闭时长" description="通过 `ConfigProvider` 的 `notification.duration` 按类型配置，如 error 5s、其余 3s。"></code>

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

| 行为               | 默认值                        |
| ------------------ | ----------------------------- |
| placement          | `bottomLeft`                  |
| bottom             | `24`                          |
| width              | `350px`                       |
| stack              | 最多 3 条，展开间距 8px       |
| duration（仅标题） | `5`                           |
| duration（含描述） | `10`                          |
| duration（error）  | `0`（不自动关闭）             |
| showProgress       | 自动关闭时启用                |
| pauseOnHover       | `true`                        |
| closable           | `true`（始终显示关闭按钮）    |
| 内容最大高度       | `320px`，超出后内容区内部滚动 |

传入 `duration` 可覆盖以上自动关闭策略，也可以全局配置。

### 全局配置自动关闭时长

`duration` 支持数字或按类型配置的对象，可全局生效，无需逐条传入。

| 配置入口 | 说明 |
| --- | --- |
| `ConfigProvider` 的 `notification` 属性 | 声明式，应配置在应用根节点；静态方法读取最外层 ConfigProvider，`useNotification` 读取最近一层 |
| `notification.config` | 命令式全局配置，静态方法与 hooks 均生效 |
| `message.config` | 兼容入口，与 `notification.config` 共享同一份全局配置 |

```tsx | pure
// 1. ConfigProvider：error 3s 自动关闭，其余类型统一 5s
import { ConfigProvider } from '@oceanbase/design';

const App = () => (
  <ConfigProvider notification={{ duration: { error: 3, default: 5 } }}>
    <YourApp />
  </ConfigProvider>
);
```

```tsx | pure
// 2. notification.config：所有类型统一 3s
notification.config({ duration: 3 });

// 3. message.config：仅 error 生效（message 内部转发至 notification）
message.config({ duration: { error: 3 } });
```

`duration` 的优先级由高到低：

1. 单次调用的 `duration`，如 `notification.error({ message: '失败', duration: 8 })`
2. `notification.useNotification(config)` 的实例级 `duration`
3. `ConfigProvider notification.duration`
4. `notification.config` / `message.config` 的全局 `duration`
5. 内置策略：仅标题 5s、含描述 10s、error 不自动关闭

单次调用未传 `duration` 时，按类型从高到低逐级查找：某一级未命中该类型时继续看下一级，同一级内未命中该类型时回退到 `default`；所有配置级别都未命中才回退到内置策略。`duration: 0` 表示不自动关闭。多次调用 `notification.config` / `message.config` 会按类型合并，传数字则整体覆盖。

例如 `ConfigProvider notification={{ duration: { error: 3 } }}` 与 `notification.config({ duration: { success: 2 } })` 同时存在时，error 为 3s、success 为 2s。

### 方法

- `notification.loading(config)`：展示进行中通知。
- `notification.config(config)`：全局配置，`duration` 支持数字或按类型配置的对象。
- `notification.useNotification()`：获取 Hook 实例，需将返回的 `contextHolder` 插入组件树以消费 ConfigProvider 上下文。

### 与 Message 的兼容

| 旧用法                         | 推荐用法                                                   |
| ------------------------------ | ---------------------------------------------------------- |
| `message.success('已保存')`    | `notification.success({ message: '已保存' })`              |
| `message.error('失败')`        | `notification.error({ message: '失败' })`                  |
| `message.loading('处理中', 0)` | `notification.loading({ message: '处理中', duration: 0 })` |
| `message.useMessage()`         | `notification.useNotification()`                           |
| `message.config({ duration })` | `notification.config({ duration })`                        |

`message` 仍保留兼容 antd Message API，内部转发至 Notification；新代码请直接使用 `notification`。
