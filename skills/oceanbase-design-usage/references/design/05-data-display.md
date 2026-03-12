# design 数据展示

Table、Descriptions、List、Empty、Result 的约束与推荐；未列 API 与 antd 一致。

## Table

- **约束**：新增 `innerBordered`（仅内部边框）；`column.ellipsis` 自动省略并 Tooltip；扩展 `pagination`、`locale`、选择文案；**批量操作栏**：`toolOptionsRender`（渲染操作按钮）、`toolAlertRender`（渲染提示文案）、`toolSelectedContent`（渲染已选内容）、`cancelText`/`collapseText`/`openText`、`hiddenCancelBtn`；排序/筛选图标为自定义。
- **说明**：**列头 ellipsis 暂不支持和排序/筛选同时使用**；虚拟滚动需 `scroll.x`/`scroll.y` 为 number；选择列宽 ConfigProvider `table.selectionColumnWidth`。当 **Card 无横向内间距**（如 `bodyStyle={{ padding: 0 }}`）且**表格需要内部边框**时，两者搭配使用一般要设置 Table 的 `innerBordered`。
- **推荐**：**优先使用 Table（优于 ProTable）**；空数据用 Empty；单元格内按钮默认小尺寸。批量操作时 `rowSelection` 配合 `toolOptionsRender` 等。

**Table + 批量操作栏**：`rowSelection` 选中行后，通过 `toolOptionsRender` 渲染批量操作按钮、`toolAlertRender` 自定义提示、`toolSelectedContent` 自定义已选展示；`locale.batchOperationBar` 可配置「已选 x 项」等文案。

**错误 / 正确（Card + Table）**：Card 使用 `bodyStyle={{ padding: 0 }}` 时若 Table 不设 `innerBordered`，会出现双线或边框缺失。正确做法见下方示例。

```tsx
import { Table, Empty, Button } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design';

const columns: ColumnsType<Record<string, unknown>> = [
  { title: '姓名', dataIndex: 'name', key: 'name', ellipsis: true },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '住址', dataIndex: 'address', key: 'address' },
];

<Table columns={columns} dataSource={dataSource} />

<Table
  columns={columns}
  dataSource={dataSource}
  rowSelection={{ selectedRowKeys, onChange: setSelectedRowKeys }}
  pagination={{ pageSize: 10 }}
  locale={{ emptyText: <Empty description="暂无数据" /> }}
/>

{/* 批量操作栏：toolOptionsRender 渲染操作按钮 */}
<Table
  rowSelection={{ selectedRowKeys, onChange: setSelectedRowKeys }}
  toolOptionsRender={(keys, rows) => [
    <Button key="batch" type="primary">批量处理</Button>,
  ]}
  toolAlertRender={(keys) => `已选 ${keys.length} 项`}
  columns={columns}
  dataSource={dataSource}
/>

{/* Card bodyStyle={{ padding: 0 }} 时 Table 需 innerBordered */}
<Card title="列表" bodyStyle={{ padding: 0 }}>
  <Table innerBordered columns={columns} dataSource={dataSource} />
</Card>
```

## Descriptions

- **约束**：无边框下内容溢出自动省略并 Tooltip；items/Descriptions.Item 支持 `contentProps`（省略、编辑、复制）；`collapsible`、`contentAlign: 'left'`。
- **场景**：详情页无边框 + contentProps；与 Drawer 组合做详情抽屉。

```tsx
import { Descriptions } from '@oceanbase/design';

<Descriptions
  items={[
    { label: '姓名', children: '张三' },
    { label: '说明', children: '很长...', contentProps: { ellipsis: true } },
  ]}
/>
<Descriptions collapsible defaultCollapsed={false} />
```

## List

- **约束**：与 antd 一致，样式定制。空状态用 Empty（`locale.emptyText` 或 children）。**design 扩展**：`pagination.hideOnSinglePage` 受 ConfigProvider 的 `hideOnSinglePage` 影响；当 `pagination.showSizeChanger` 为 true 时，强制 `hideOnSinglePage` 为 false。
- **推荐**：列表空状态统一用 Empty，勿业务自实现。

```tsx
import { List, Empty } from '@oceanbase/design';

<List dataSource={[]} locale={{ emptyText: <Empty description="暂无数据" /> }} />;
```

## Empty

- **约束**：PRESENTED_IMAGE_COLORED（页面/区块）、PRESENTED_IMAGE_DATABASE（数据库）、PRESENTED_IMAGE_GUIDE（引导）；`title`、`steps`、`layout`（vertical/horizontal）。描述区最大宽度 600px、步骤区 1000px。**`layout="horizontal"` 时**，`children` 会渲染在底部 footer 区域（与 steps 并排）。
- **推荐**：空状态场景**统一使用本组件**，避免业务侧自实现。

```tsx
import { Empty, Button } from '@oceanbase/design';

<Empty
  image={Empty.PRESENTED_IMAGE_COLORED}
  title="暂无数据"
  description="描述文案"
>
  <Button type="primary">创建</Button>
</Empty>

<Empty image={Empty.PRESENTED_IMAGE_DATABASE} description="暂无实例" />
<Empty image={Empty.PRESENTED_IMAGE_GUIDE} layout="horizontal" />
```

## Result

- **约束**：`status` 含 `processing`；403/404/500 用 `status="403"`/`"404"`/`"500"`。副标题最大宽度 600px、内容区 1000px。
- **推荐**：错误页/结果页**统一使用本组件**。

```tsx
import { Result, Button } from '@oceanbase/design';

<Result status="success" title="操作成功" subTitle="详情" extra={<Button>返回</Button>} />
<Result status="404" title="404" subTitle="页面未找到" />
<Result status="403" title="无权限" />
<Result status="500" title="服务器错误" />
<Result status="processing" title="进行中" />
```
