---
title: Card/ProCard 无内边距时 Table 必须 innerBordered
impact: high
tags: [design, table, card, layout]
---

# Card 或 ProCard 使用 bodyStyle={{ padding: 0 }}（无横向内间距）且内嵌 Table 时，Table 必须设置 innerBordered

## Why

无内边距时 Table 外边框与 Card 边框会重叠或缺失，出现双线或断线；innerBordered 使表格仅保留内部单元格边框，视觉正确。

## Incorrect

```tsx
<Card title="列表" bodyStyle={{ padding: 0 }}>
  <Table columns={columns} dataSource={dataSource} />
</Card>
```

## Correct

```tsx
<Card title="列表" bodyStyle={{ padding: 0 }}>
  <Table innerBordered columns={columns} dataSource={dataSource} />
</Card>
```

## When not to use

- Card 有内边距（未设 bodyStyle={{ padding: 0 }}）或 ProCard 有默认 padding 且未去掉时，Table 可不设 innerBordered；若仍出现边框问题再设。
