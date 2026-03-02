---
title: Filter 受控筛选项必须传 value + onChange
impact: high
tags: [design, filter, table]
---

# 筛选项需要与列表数据联动（受控）时，每个 Filter 子组件必须传 value 与 onChange

## Why

只传 options 不传 value/onChange 时，筛选值无法回写、清空无效，与 Table 数据源不同步。

## Incorrect

```tsx
<Filter.ResponsiveGroup onApply={() => fetchList()}>
  <Filter.Select label="状态" options={statusOptions} />
</Filter.ResponsiveGroup>
// 无法把当前选中值传给 fetchList，清空也无法更新 state
```

## Correct

```tsx
const [filters, setFilters] = useState({ status: undefined });
<Filter.ResponsiveGroup
  onApply={() => fetchList(filters)}
  onClearAll={() => {
    setFilters({});
    fetchList({});
  }}
>
  <Filter.Select
    label="状态"
    value={filters.status}
    onChange={v => setFilters(prev => ({ ...prev, status: v }))}
    options={statusOptions}
  />
</Filter.ResponsiveGroup>;
```

## When not to use

- 纯展示、筛选值不需要与后端或 state 联动时，可不受控；一旦 onApply/onClearAll 需要用到当前筛选值，即应受控。
