# @oceanbase/ui 使用要点

## 定位

业务级组件与布局，基于 `@oceanbase/design` 与 `@oceanbase/icons` 构建。提供 ProTable、PageContainer、BasicLayout、LightFilter、Action、DateRanger 等增强能力。

## 导入约定

- **统一从 `@oceanbase/ui` 按需引入**，类型一并从该包引入（如 `ProTableProps`、`PageContainerProps`、`NavMenuItem`）。
- 同时会再导出 `@ant-design/pro-components`，可按需从同一入口使用，避免多源引用。

```tsx
// 推荐
import { ProTable, PageContainer, BasicLayout, LightFilter, Action } from '@oceanbase/ui';
import type { ProTableProps, PageContainerProps, NavMenuItem } from '@oceanbase/ui';

// 布局与页面
import { ProTable, PageContainer, BasicLayout, FooterToolbar } from '@oceanbase/ui';
// 操作与筛选
import { Action, LightFilter, BatchOperationBar } from '@oceanbase/ui';
// 日期与范围
import { DateRanger, Ranger } from '@oceanbase/ui';
// 其他
import { TreeSearch, TagSelect, BackgroundTaskManager, Boundary, Login } from '@oceanbase/ui';
```

## 与 design 的关系

- ui 内部已使用 design 的 ConfigProvider/theme，**业务侧只需在应用根节点包一层 design 的 ConfigProvider**；页面中直接使用 ui 组件即可，无需再包一层。
- 表格、筛选、空状态、结果页等**优先使用 design 的 Table、Filter、Empty、Result**，以保持与设计规范一致；仅在确有增强能力需求时使用 ui 的 ProTable、LightFilter。

## 表格与筛选的选用（约束与推荐）

| 场景 | 推荐 | 说明 |
| --- | --- | --- |
| 通用表格 | **@oceanbase/design Table** | 样式与设计规范统一，支持 innerBordered、tool 栏等 |
| 需内置请求、工具栏、搜索 | @oceanbase/ui ProTable | 仅在确有 ProTable 增强能力时使用 |
| 通用筛选 | **@oceanbase/design Filter** | Filter.ResponsiveGroup + Filter.Select/Checkbox 等 |
| 需 LightFilter 形态 | @oceanbase/ui LightFilter | 仅在确有该形态需求时使用 |

- **推荐**：表格场景**优先 design 的 Table**，筛选场景**优先 design 的 Filter**；ProTable / LightFilter 作为补充选项。

## 常用组件与场景

### ProTable

- **约束**：依赖 design 的 Table 与主题；类型为 `ProTableProps`。
- **场景**：需要内置请求、工具栏、搜索、批量操作等一体化表格时使用。
- **推荐**：与 design 的 ConfigProvider 同根下使用；ProCard 无横向内间距且表格需内部边框时，Table 用 `innerBordered` 搭配（见 [design 组合](design/09-combo.md)）。

```tsx
import { ProTable } from '@oceanbase/ui';
import type { ProTableProps } from '@oceanbase/ui';

<ProTable
  columns={columns}
  request={async () => ({ data: [], success: true })}
  toolBarRender={() => [<Button key="add">新建</Button>]}
/>;
```

### PageContainer / BasicLayout / FooterToolbar

- **约束**：PageContainer 提供面包屑、标题、额外操作等；BasicLayout 提供整体布局与菜单；FooterToolbar 固定底部操作栏。
- **场景**：标准页面框架、中后台布局、列表页底部批量操作。

```tsx
import { PageContainer, BasicLayout, FooterToolbar } from '@oceanbase/ui';
import { Button } from '@oceanbase/design';

<PageContainer title="页面标题" extra={<Button>操作</Button>}>
  内容
</PageContainer>

<FooterToolbar extra={<span>已选 2 项</span>}>
  <Button type="primary">批量提交</Button>
</FooterToolbar>
```

### LightFilter / Action

- **约束**：LightFilter 为紧凑筛选条；Action 为操作项/按钮组封装。
- **场景**：需要 LightFilter 形态时从 ui 引入；否则优先 design 的 Filter。

```tsx
import { LightFilter, Action } from '@oceanbase/ui';
import { Select } from '@oceanbase/design';

<LightFilter onFinish={values => fetchList(values)}>
  <LightFilter.Item name="status" label="状态">
    <Select options={statusOptions} />
  </LightFilter.Item>
</LightFilter>

<Action.Group>
  <Action.Item onClick={handleEdit}>编辑</Action.Item>
  <Action.Item danger onClick={handleDelete}>删除</Action.Item>
</Action.Group>
```

### DateRanger / Ranger、TreeSearch、TagSelect

- **场景**：日期范围选择、快捷时间、树搜索、标签多选等业务能力。
- **推荐**：与 design 的 Form、Table 组合时，表单项与筛选项仍优先 design 组件；DateRanger/Ranger 等作为时间类增强。

### Boundary / Login / BackgroundTaskManager

- **场景**：错误边界（Boundary）、登录页（Login）、后台任务管理（BackgroundTaskManager）。
- **说明**：403/404/500 等结果页优先使用 design 的 Result；Boundary 用于捕获运行时异常。

## 规范小结

- 新业务组件若依赖 design 基础组件或主题，应从 `@oceanbase/design` 引入组件与 `theme.useToken()`，从 `@oceanbase/icons` 引入图标，保持与仓库内现有 ui 组件写法一致。
- 类型从 `@oceanbase/ui` 引入，避免从 @ant-design/pro-components 单独引类型导致版本不一致。
