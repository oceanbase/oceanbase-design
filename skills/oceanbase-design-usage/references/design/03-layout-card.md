# design 布局与卡片

Card、App、ConfigProvider 使用要点；ConfigProvider 详解见 [00-overview.md](00-overview.md)。

## Card

- **约束**：新增 `subTitle`、`document`（文档链接）、`divided`（默认 true）、`gray`（灰底）、`collapsible`/`defaultCollapsed`/`onCollapse`；`tabList` 项支持 **`badge`**（角标或数量；`tag` 已废弃）。
- **场景**：需文档入口用 `document`；灰底用 `gray`；可折叠用 `collapsible`；无边框 `bordered={false}`，无内边距 `bodyStyle={{ padding: 0 }}`。
- **推荐**：分割线可通过 ConfigProvider `card.divided` 全局配置；文档链接文案用 `locale.Card.viewDocument`。

```tsx
import { Card, Table } from '@oceanbase/design';

<Card title="标题" subTitle="副标题" extra={<a>更多</a>}>
  内容
</Card>

<Card size="small" title="小尺寸卡片" extra={<a>更多</a>} style={{ width: 300 }}>
  内容
</Card>

<Card
  title="带文档"
  document="https://example.com/doc"
  divided
  extra={<a>更多</a>}
>
  内容
</Card>

<Card title="可折叠" collapsible defaultCollapsed={false}>
  内容
</Card>

<Card gray title="灰底">内容</Card>

{/* 内嵌表格且 bodyStyle={{ padding: 0 }} 时，Table 必须设 innerBordered，见 09-combo */}
<Card title="内嵌表格时" bodyStyle={{ padding: 0 }}>
  <Table innerBordered columns={columns} dataSource={dataSource} />
</Card>
```

## App

ConfigProvider **默认内嵌 App**，message、notification、Modal 等静态方法会自动消费 ConfigProvider；业务侧无需再包 App。若需配置 App 行为，使用 ConfigProvider 的 `appProps`。

```tsx
import { ConfigProvider } from '@oceanbase/design';

<ConfigProvider appProps={{ message: { top: 100 } }}>
  <App />
</ConfigProvider>;
```
