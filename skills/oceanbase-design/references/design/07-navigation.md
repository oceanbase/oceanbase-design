# design 导航

Tabs、Breadcrumb、Dropdown、Segmented 的约束与推荐。

## Tabs

- **约束**：新增 `divider`（分割线，默认不展示）；items 项支持 `badge`、**`divider`**（该项渲染为分割线，无 children）。`tag` 已废弃，用 `badge`。
- **场景**：选项卡后标签用 `badge`；附加内容用 `tabBarExtraContent`；项间分割线用 `items` 中某条 `divider: true`。
- **说明**：推荐使用 `items` 配置（每项含 `key`、`label`、`children`），TabPane 语法糖即将废弃。受控用 `activeKey`+`onChange`，非受控用 `defaultActiveKey`。

```tsx
import type { TabsProps } from '@oceanbase/design';
import { Tabs, Button } from '@oceanbase/design';

const items: TabsProps['items'] = [
  { key: '1', label: 'Tab 1', children: '内容1' },
  { key: 'divider', divider: true },
  { key: '2', label: 'Tab 2', badge: 3, children: '内容2' },
];

<Tabs defaultActiveKey="1" items={items} onChange={key => console.log(key)} />
<Tabs items={items} tabBarExtraContent={<Button>操作</Button>} />
<Tabs divider items={items} />
```

## Breadcrumb

- **约束**：与 antd 一致，样式定制。路由型用 `itemRender`；带图标在 Item 内嵌。
- **场景**：页面层级导航。

```tsx
import { Breadcrumb } from '@oceanbase/design';

<Breadcrumb items={[{ title: '首页', href: '/' }, { title: '当前页' }]} />;
```

## Dropdown

- **约束**：支持 `selectable` 使菜单项可选中（高亮当前项）。
- **推荐**：下拉按钮用 Dropdown.Button 或 Button 的 `dropdown`；选中态用 `selectable`。

```tsx
import { Dropdown, Button } from '@oceanbase/design';
import { DownOutlined } from '@oceanbase/icons';

const menuItems = [{ key: '1', label: '项1' }, { key: '2', label: '项2' }];

<Dropdown menu={{ items: menuItems }} selectable>
  <Button>下拉 <DownOutlined /></Button>
</Dropdown>
<Dropdown.Button menu={{ items: menuItems }}>主操作</Dropdown.Button>
```

## Segmented

- **约束**：options 项支持 **`icon`**、**`ellipsis`**（仅 `block` 时生效，溢出省略+Tooltip）、**`badge`**（角标或数量）、**`disabled`**。
- **场景**：视图/维度切换；选项过长且 block 时用 `ellipsis`；需图标或角标时用 `icon`/`badge`。

```tsx
import { Segmented } from '@oceanbase/design';
import { ListOutlined, AppstoreOutlined } from '@oceanbase/icons';

<Segmented options={['列表', '卡片', '地图']} />;
{
  /* icon、ellipsis、badge 需 options 为对象数组 */
}
<Segmented
  block
  options={[
    { label: '列表', value: 'list', icon: <ListOutlined /> },
    { label: '很长文案...', value: '2', ellipsis: { tooltip: true } },
    { label: '带角标', value: '3', badge: 5 },
  ]}
/>;
```
