# design 筛选器 Filter

Filter 为 design 独有组件，用于表格/列表上方筛选；**优先使用 Filter（优于 LightFilter）**。

## 组成

- **子类型**：Filter.Select、Filter.Checkbox、Filter.Switch、Filter.Input、Filter.Cascader、Filter.Range。
- **容器**：Filter.Wrap（折叠）、Filter.ResponsiveGroup（响应式折叠）。
- **上下文**：FilterProvider、useFilterContext（在自定义子组件中获取折叠状态与筛选值）。

## 公共属性（BaseFilterProps）

`icon`、`label`、`disabled`、`bordered`、`footer`、`extra`、`loading`、`collapsible`、`alwaysCollapse`、`showSuffixIcon`、**`trigger`**（hover/click/focus，继承自 Popover）、**`placement`**（弹框位置）。Filter.Select 等受控时需 `value`+`onChange`；`options` 项为 `{ value, label }`，单项可设 `disabled`；可选 `icon`、`footer`、`bordered`、`showSuffixIcon`、`showSearch`。

**场景**：默认 `trigger="click"`；需悬停展开时设 `trigger="hover"`；`placement` 控制弹框相对触发元素的位置（如 `bottomLeft`、`bottomRight`）。

## 表格筛选（推荐写法）

页面顶部用 Filter.ResponsiveGroup 包裹多个筛选项，下方放 Table；`onApply`/`onClearAll` 与数据源联动。

**错误**：筛选项需要与列表数据联动（受控）时，只传 `options` 不传 `value`+`onChange`，导致筛选值无法回写、清空无效。**正确**：受控时每个筛选项必传 `value` 与 `onChange`，state 与 Table 数据源一致。**例外**：纯展示、筛选值不需与后端或 state 联动时可不受控；一旦 onApply/onClearAll 需要用到当前筛选值，即应受控。

```tsx
import { Filter, Table } from '@oceanbase/design';

const [filters, setFilters] = useState({ status: undefined, type: [] });

<Filter.ResponsiveGroup
  onApply={() => fetchList(filters)}
  onClearAll={() => { setFilters({}); fetchList({}); }}
>
  <Filter.Select
    label="状态"
    value={filters.status}
    onChange={v => setFilters(prev => ({ ...prev, status: v }))}
    options={[
      { value: '', label: '全部' },
      { value: 'success', label: '成功' },
      { value: 'pending', label: '待处理', disabled: true },
    ]}
  />
  {/* options 项含 color 时启用状态模式（Badge 颜色等） */}
  <Filter.Checkbox
    label="类型"
    value={filters.type || []}
    onChange={v => setFilters(prev => ({ ...prev, type: v }))}
    options={[
      { label: '类型A', value: 'a' },
      { label: '类型B', value: 'b', color: '#52c41a' },
    ]}
    count
  />
  <Filter.Cascader
    label="级联"
    value={filters.cascader || []}
    onChange={v => setFilters(prev => ({ ...prev, cascader: v }))}
    options={cascaderOptions}
    flat
    showSearch
  />
</Filter.ResponsiveGroup>
<Table columns={columns} dataSource={dataSource} />
```

## 固定折叠

使用 Filter.Wrap 将多个筛选项折叠到一个按钮中。

```tsx
import { Filter } from '@oceanbase/design';

<Filter.Wrap label="筛选条件" collapsed>
  <Filter.Select label="状态" options={[{ value: '1', label: '选项一' }]} />
  <Filter.Checkbox label="类型" options={[{ value: 'a', label: '类型A' }]} />
</Filter.Wrap>;
```

## 表单集成

用 Form.Item 包裹 Filter 子组件，Apply 时通过 Form 取值。

```tsx
import { Form, Filter, Table } from '@oceanbase/design';

{/* Form.Item 需 noStyle；onApply 时用 form.getFieldsValue() 取筛选值 */}
<Form form={form}>
  <Filter.ResponsiveGroup
    onApply={() => fetchList(form.getFieldsValue())}
  >
    <Form.Item name="status" noStyle>
      <Filter.Select label="状态" options={[{ value: '1', label: '选项一' }]} />
    </Form.Item>
  </Filter.ResponsiveGroup>
</Form>
<Table columns={columns} dataSource={dataSource} />
```

## 说明与推荐

- **Filter.Range**：默认提供最近 1/3/7/30 天等时间段，可通过 `options` 覆盖。
- **Filter.Checkbox**：options 含 `color` 时启用状态模式（Badge 颜色、重叠图标）。
- **Filter.Cascader**：多级且选项多时用 `flat: true`；多选用 `multiple`。
- **Filter.Input**：Switch + Input 组合；先启用 Switch 才显示 Input 输入；`inputProps`、`switchProps` 透传给内部 Input/Switch。受控时传 `value`+`onChange`。
- **Filter.Switch**：布尔筛选；`switchProps` 透传；Form.Item 包裹时用 `valuePropName="checked"`。
- **ResponsiveGroup**：需某筛选项始终在「更多」里设 `alwaysCollapse`；`showCount` 可显示计数。
- Filter 文案支持国际化（locale）。
