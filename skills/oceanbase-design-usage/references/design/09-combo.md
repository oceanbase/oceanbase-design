# design 组合使用推荐

常见组合的推荐写法与代码示例，减少样式错乱与重复配置。

## Card + Table

当 **Card 无横向内间距**（如 `bodyStyle={{ padding: 0 }}`）且内嵌 Table 时，须设置 Table 的 **`innerBordered`**，否则 Table 外边框与 Card 会重叠或缺失，出现双线或断线；innerBordered 使表格仅保留内部单元格边框。Card 有内边距或 ProCard 未去掉 padding 时可不设；若仍出现边框问题再设。

```tsx
import { Card, Table } from '@oceanbase/design';

{
  /* bodyStyle={{ padding: 0 }} 时 Table 必须 innerBordered，否则边框错乱 */
}
<Card title="列表" bodyStyle={{ padding: 0 }}>
  <Table innerBordered columns={columns} dataSource={dataSource} pagination={{ pageSize: 10 }} />
</Card>;
```

## Filter + Table

顶部 Filter.ResponsiveGroup，下方 Table；onApply/onClearAll 驱动数据。

```tsx
import { Filter, Table } from '@oceanbase/design';

<>
  <Filter.ResponsiveGroup onApply={handleApply} onClearAll={handleClearAll}>
    <Filter.Select label="状态" options={statusOptions} value={status} onChange={setStatus} />
    <Filter.Checkbox label="类型" options={typeOptions} value={types} onChange={setTypes} />
  </Filter.ResponsiveGroup>
  <Table columns={columns} dataSource={dataSource} />
</>;
```

## Form + Modal / Form + Drawer

Modal 或 Drawer 内放 Form；提交用 onOk，提交中设 **confirmLoading**；Drawer 扩展用 footerExtra。

```tsx
import { Modal, Form, Input, Drawer } from '@oceanbase/design';

{/* onOk 中 form.submit()，confirmLoading 表示提交中 */}
<Modal
  title="编辑"
  open={open}
  onOk={() => form.submit()}
  onCancel={() => setOpen(false)}
  confirmLoading={submitting}
>
  <Form form={form} onFinish={handleFinish}>
    <Form.Item name="name" label="名称"><Input /></Form.Item>
  </Form>
</Modal>

<Drawer open={open} onClose={close} onOk={handleSubmit} confirmLoading={submitting} footerExtra={<a>链接</a>}>
  <Form>...</Form>
</Drawer>
```

## Empty + Table / List

Table 的 locale.emptyText 或自定义空状态用 Empty；推荐 PRESENTED_IMAGE_COLORED + title/description/操作。

```tsx
import { Table, Empty, Button } from '@oceanbase/design';

<Table
  locale={{
    emptyText: (
      <Empty image={Empty.PRESENTED_IMAGE_COLORED} description="暂无数据">
        <Button type="primary">创建</Button>
      </Empty>
    ),
  }}
  columns={columns}
  dataSource={dataSource}
/>;
```

## Descriptions + Drawer（详情抽屉）

Drawer 内用 Descriptions 展示只读详情；无边框 Descriptions + contentProps 实现省略/编辑/复制。

```tsx
import { Drawer, Descriptions } from '@oceanbase/design';

{
  /* 详情抽屉 footer={null} 隐藏页脚 */
}
<Drawer title="详情" open={open} onClose={close} footer={null}>
  <Descriptions
    column={1}
    items={[
      { label: '姓名', children: detail.name },
      { label: '说明', children: detail.desc, contentProps: { ellipsis: true } },
    ]}
  />
</Drawer>;
```

## Modal.Progress + 异步任务

受控 `open` + `progress.percent`；percent 到 100 时标题与描述可切为成功态，用户点「确定」时在 `onOk` 中关闭。**无百分比（indeterminate）时**：`loading={true}`，`progress` 可为空对象 `{}`。

```tsx
import { Modal } from '@oceanbase/design';

const [open, setOpen] = useState(false);
const [percent, setPercent] = useState(0);

{
  /* 有百分比：progress={{ percent }}，可加 status: 'exception' 表示失败 */
}
<Modal.Progress
  title={percent === 100 ? '完成' : '处理中...'}
  open={open}
  progress={{ percent }}
  description={percent === 100 ? '成功' : '请稍候'}
  onOk={() => setOpen(false)}
/>;
{
  /* 无百分比：loading={true} */
}
<Modal.Progress
  title="处理中..."
  open={open}
  loading={true}
  progress={{}}
  description="请稍候"
  onOk={() => setOpen(false)}
/>;
```

## Table + ProCard（@oceanbase/ui）

ProCard 无横向内间距且表格需内部边框时，Table 用 **innerBordered** 搭配。

```tsx
import { Table } from '@oceanbase/design';
import { ProCard } from '@oceanbase/ui';

<ProCard title="列表">
  <Table innerBordered columns={columns} dataSource={dataSource} />
</ProCard>;
```

## Table + 批量操作栏

`rowSelection` 配合 `toolOptionsRender`、`toolAlertRender`、`toolSelectedContent` 实现批量操作；`locale.batchOperationBar` 可配置「已选 x 项」等文案。

```tsx
import { Table, Button } from '@oceanbase/design';

<Table
  rowSelection={{ selectedRowKeys, onChange: setSelectedRowKeys }}
  toolOptionsRender={(keys, rows) => [
    <Button key="batch" type="primary">
      批量删除
    </Button>,
  ]}
  toolAlertRender={keys => `已选 ${keys.length} 项，点击取消可清空`}
  columns={columns}
  dataSource={dataSource}
/>;
```

## ConfigProvider 全局配置

`card.divided`、`table.selectionColumnWidth`、`spin.indicator`、`pagination` 等可在 ConfigProvider 层统一配置，减少重复 props。

```tsx
import { ConfigProvider } from '@oceanbase/design';

<ConfigProvider
  theme={{ isAliyun: true, isDark: false }}
  card={{ divided: true }}
  table={{ selectionColumnWidth: 48 }}
  spin={{ indicator: <CustomSpinner /> }}
  pagination={{ showSizeChanger: true }}
>
  <App />
</ConfigProvider>;
```

## Typography / Badge 与其他组件

Typography.Text/Paragraph 默认继承父元素颜色与行高，放在 Table 单元格、Descriptions、Card 内时无需额外包一层。Badge 状态文本继承父元素；Tabs 的 `items[].badge`、Segmented 的 `options[].badge` 用于角标或数量。

业务开发自定义样式时请优先使用 **obToken**。
