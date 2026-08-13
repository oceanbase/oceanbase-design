# design 反馈类组件

Modal、Drawer、Spin、Badge、Tooltip、Popover、Message、Notification、Lottie、Pagination、Steps、Progress、Upload、Divider、Collapse 的约束与推荐。

## Modal

- **约束**：`destroyOnClose` 默认 `true`；新增 `extra`、`document`；**Modal.Progress** 用于异步任务；`Modal.method()` 消费 ConfigProvider。
- **场景**：异步任务用 Modal.Progress；文档入口用 `document`；底部扩展用 `extra`。

```tsx
import { Modal, Button } from '@oceanbase/design';

<Button type="primary" onClick={() => setOpen(true)}>打开</Button>
<Modal
  title="标题"
  open={open}
  onOk={() => setOpen(false)}
  onCancel={() => setOpen(false)}
>
  <p>内容</p>
</Modal>

<Modal
  title="标题"
  open={open}
  onOk={handleOk}
  onCancel={() => setOpen(false)}
  document="https://example.com/doc"
  extra={<a>次要操作</a>}
>
  内容
</Modal>

{/* Modal.Progress：有百分比时 progress={{ percent }}；无百分比时 loading={true}、progress 为空 */}
<Modal.Progress
  title={percent === 100 ? '完成' : '创建中...'}
  open={open}
  progress={{ percent }}
  description={percent === 100 ? '成功' : '请稍候'}
  onOk={() => setOpen(false)}
/>
{/* 无百分比（ indeterminate ）：loading={true} */}
<Modal.Progress
  title="创建中..."
  open={open}
  loading={true}
  progress={{}}
  description="请稍候"
  onOk={() => setOpen(false)}
/>
```

## Drawer

- **约束**：`destroyOnClose` 默认 `true`；新增 `document`、`footer`/`footerExtra`、`onOk`/`onCancel`、`okText`/`cancelText`、`okButtonProps`、`confirmLoading`。设 `onOk` 即渲染默认页脚。
- **场景**：表单抽屉用 `onOk`+`confirmLoading`；详情用 Descriptions；扩展用 `footerExtra`。

```tsx
import { Drawer, Form } from '@oceanbase/design';

{/* 设 onOk/onCancel 即渲染默认页脚 */}
<Drawer
  title="编辑"
  open={open}
  onOk={() => setOpen(false)}
  onCancel={() => setOpen(false)}
>
  <p>内容</p>
</Drawer>

<Drawer
  title="编辑"
  open={open}
  onClose={() => setOpen(false)}
  onOk={handleSubmit}
  confirmLoading={submitting}
  footerExtra={<a>扩展链接</a>}
>
  <Form>...</Form>
</Drawer>
```

## Spin

- **约束**：默认 `gray: true`；设为 `false` 为彩色。ConfigProvider `spin` 可配全局 indicator。
- **场景**：小尺寸文本加载、默认卡片级、大尺寸页面级。

```tsx
import { Spin } from '@oceanbase/design';

<Spin />
<Spin gray={false} />
<Spin tip="加载中...">
  <div>内容</div>
</Spin>
```

## Badge

- **约束**：新增 `icon`（boolean 或 ReactNode，状态图标；`status` 时生效）、`progressProps`（processing 时传给 Progress，如 `percent`）；状态文本继承父元素。
- **场景**：状态点 `status`；图标 `icon`；数字/红点 `count`/`dot`；与 Tabs/Segmented 用 `badge`。

```tsx
import { Badge } from '@oceanbase/design';

<Badge status="success" text="成功" />
<Badge status="processing" progressProps={{ percent: 75 }} text="进行中" />
<Badge status="success" icon text="成功" />
<Badge count={5}><span>消息</span></Badge>
<Badge dot>未读</Badge>
```

## Tooltip

- **约束**：新增 `type`（default/light/info/success/warning/error）、`mouseFollow`（鼠标跟随）、`closeIcon`、`onClose`。浮层默认 maxWidth 300px、maxHeight 250px；可用 `overlayStyle`/`overlayInnerStyle` 覆盖。
- **推荐**：按语义选 `type`；超长用 overlayStyle/overlayInnerStyle。

**错误**：Tooltip 包裹块级元素时可能导致定位异常。**正确**：包裹 inline 或 inline-block 元素。

```tsx
import { Tooltip } from '@oceanbase/design';

<Tooltip title="提示文案">悬停</Tooltip>
<Tooltip title="提示" type="warning">警告</Tooltip>
<Tooltip title="可关闭" closeIcon onClose={handleClose}>内容</Tooltip>
```

## Popover

- **约束**：与 Tooltip 类似，支持富内容；浮层可配置 overlayStyle/overlayInnerStyle。
- **场景**：需要点击/复杂内容时用 Popover，仅悬停简短文案用 Tooltip。

```tsx
import { Popover, Button } from '@oceanbase/design';

<Popover content={<div>浮层内容</div>} title="标题">
  <Button>点击</Button>
</Popover>;
```

## Message / Notification / Modal 静态方法

- **约束**：从 `@oceanbase/design` 解构 `message`、`notification`、`modal`，与 ConfigProvider 联动。**务必根节点已挂 ConfigProvider**。**注意**：design 的 `modal` 无 `warn` 方法，请用 `modal.warning`。

**错误**：根节点未包 ConfigProvider 即调用 `message.success()` / `notification.info()`，会导致主题或容器异常；使用 `message.useMessage()` 时若未将返回的 `holder` 挂到 React 节点中，静态方法不会生效。**正确**：应用根节点已用 ConfigProvider 包裹；useMessage 时在 return 的 JSX 中包含 `{holder}`。

```tsx
import { message, notification } from '@oceanbase/design';

{
  /* 根节点需已挂 ConfigProvider */
}
message.success('成功');
notification.info({ message: '标题', description: '详情' });

{
  /* useMessage：holder 必须挂在节点中，否则静态方法不生效 */
}
const [msgApi, holder] = message.useMessage();
return (
  <>
    {holder}
    <Button onClick={() => msgApi.success('ok')}>提示</Button>
  </>
);
```

## Lottie

- **约束**：支持 `path`（json 路径）或 `animationData`（json 对象）；`mode`: 'default' | 'icon'；`loop` 默认 true；`speed` 默认 1。**LottieRef** 通过 `ref` 暴露 `animation` 实例（lottie-web 的 AnimationItem），可用于控制播放/暂停等。
- **场景**：加载动画、空状态插图、引导动效；icon 模式用于小图标动效。
- **推荐**：用 path 或 animationData + loop/speed 控制，避免直接改 lottie 实例。

```tsx
import { Lottie } from '@oceanbase/design';
import type { LottieRef } from '@oceanbase/design';

const lottieRef = useRef<LottieRef>(null);
<Lottie ref={lottieRef} path="/anim/loading.json" loop speed={1} />;
// lottieRef.current?.animation 可控制播放
```

## Pagination / Steps / Progress / Upload / Divider / Collapse

- **Pagination**：与 Table/List 搭配；`showTotal`、`size="small"`、`showSizeChanger`。
- **Steps**：`items`、`direction="vertical"`、`progressDot`、`onChange` 可点击；与 Empty.steps 区分。
- **Progress**：线形/圆形/步骤；圆形 width≤20 时进度以 Tooltip 展示。
- **Upload**：`beforeUpload` 限制格式与大小；`fileList` 受控；手动上传 `beforeUpload` 返回 false。
- **Divider**：默认水平；垂直 `type="vertical"`。
- **Collapse**：**design 定制**：展开图标默认为实心箭头；弱化边框色；`borderless`/`ghost`。

```tsx
import { Pagination, Steps, Progress, Upload, Divider, Collapse } from '@oceanbase/design';

<Pagination total={100} showTotal showSizeChanger />
<Steps current={1} items={[{ title: '步骤1' }, { title: '步骤2' }]} onChange={setCurrent} />
<Progress percent={60} />
{/* beforeUpload 返回 false 时不自动上传，可改为手动上传 */}
<Upload beforeUpload={f => { if (f.size > 1024) return false; }} />
<Divider type="vertical" />
<Collapse items={[{ key: '1', label: '面板', children: '内容' }]} />
```
