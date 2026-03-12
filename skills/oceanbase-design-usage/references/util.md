# @oceanbase/util 使用要点

## 定位

工具函数与 hooks，被 design、ui、charts 等依赖。业务与组件中需要格式化、健壮性处理、排序、通用工具或 hooks 时，优先从本包引入，避免重复实现或引用其他不一致的工具库。

## 导入约定

- **从 `@oceanbase/util` 按需引入**，包含以下子模块的导出：
  - **format**：humanSize、us2ms、byte2KB/MB/GB/TB/PB、GB2byte、toBoolean、toPercent、formatNumber、formatTime、separateNumber
  - **robust**：健壮性相关（如空值、异常处理）
  - **sort**：排序相关
  - **hooks**：useTableData、useQuery、useScrollToPosition、useLocalStorageState
  - **util**：isNullValue、findBy、findByValue 等通用方法
  - **component**：组件相关工具

  robust、sort、component 等具体 API 以 oceanbase-design 仓库内 `packages/util` 源码及类型定义为准。

```tsx
// 推荐：按需引入
import { humanSize, formatTime, formatNumber, toPercent } from '@oceanbase/util';
import { useLocalStorageState, useQuery } from '@oceanbase/util';
import { isNullValue, findBy } from '@oceanbase/util';
```

## 常用能力与场景

### format（格式化）

- **约束**：数值类注意空值返回（如 formatTime 空值返回 `'-'`）；字节换算支持 base 2 与 10。
- **场景**：表格列展示（时间、字节、百分比、千分位）、表单回显、统计卡片。

| 方法                          | 说明                   | 示例场景           |
| ----------------------------- | ---------------------- | ------------------ |
| humanSize                     | 字节转易读（KB/MB/GB） | 存储、流量展示     |
| formatTime                    | 时间戳/字符串格式化    | 创建时间、更新时间 |
| formatNumber / separateNumber | 数字精度、千分位       | 金额、数量         |
| toPercent                     | 转百分比字符串         | 进度、占比         |
| byte2KB/MB/GB 等              | 字节换算               | 容量、大小         |

```tsx
import { humanSize, formatTime, toPercent, separateNumber } from '@oceanbase/util';

// 表格列
{ title: '大小', dataIndex: 'size', render: (v) => humanSize(v) }
{ title: '时间', dataIndex: 'createTime', render: (v) => formatTime(v) }
{ title: '占比', dataIndex: 'ratio', render: (v) => toPercent(v) }
{ title: '数量', dataIndex: 'count', render: (v) => separateNumber(v) }
```

### hooks

- **约束**：useLocalStorageState 与 React 状态同步；useQuery 用于 URL 查询参数；useTableData 用于表格数据与请求。
- **场景**：持久化用户偏好、列表筛选项与 URL 同步、表格 request 封装。

```tsx
import { useLocalStorageState, useQuery } from '@oceanbase/util';

const [collapsed, setCollapsed] = useLocalStorageState('sidebar-collapsed', false);
const [params, setParams] = useQuery({ page: 1, pageSize: 10 });
```

### util（通用工具）

- **约束**：isNullValue 包含 null、undefined、''、NaN；findBy/findByValue 未找到返回空对象。
- **场景**：表单/表格中空值判断、从 options 中取当前选中项。

```tsx
import { isNullValue, findBy, findByValue } from '@oceanbase/util';

if (!isNullValue(value)) {
  setLabel(findByValue(options, value).label);
}
```

## 与 design / ui / charts 的配合

- 与 design 的 Table、Descriptions、Form 等配合：列 render、表单 initialValues 中使用 format；空值展示与 isNullValue 结合。
- 与 ui 的 ProTable、PageContainer 等配合：request 与 useTableData/useQuery 可组合使用。
- 与 charts 配合：图表数据格式化、时间轴等可使用 formatTime、formatNumber。

## 规范小结

- 需要工具方法时**优先从 `@oceanbase/util` 引入**，保持与 design、ui、charts 同一工具来源，便于升级与行为一致。
- 避免在业务中重复实现 humanSize、formatTime、useLocalStorageState 等已有能力。
