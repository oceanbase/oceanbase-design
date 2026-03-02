# @oceanbase/icons 使用要点

## 定位

OceanBase 图标库，与 design、ui 组件搭配使用，保证图标风格与依赖单一来源。

## 导入约定

- **按图标名从 `@oceanbase/icons` 引入**，不混用 `@ant-design/icons`。
- 与 design 的 Button、Input、Table、Filter、Tabs、Dropdown 等组件搭配时，图标均从本包引入。

**错误**：与 design 组件搭配时从 `@ant-design/icons` 引入，会导致依赖混用、样式与命名空间不一致。**正确**：统一从 `@oceanbase/icons` 引入。

```tsx
// 正确
import { CloseOutlined, FilterOutlined, SearchOutlined } from '@oceanbase/icons';
import { Button, Input } from '@oceanbase/design';

<Button icon={<SearchOutlined />}>搜索</Button>
<Input suffix={<SearchOutlined />} />

// 错误：勿与 design 混用
import { SearchOutlined } from '@ant-design/icons';
```

## 常用图标分类（示例）

| 场景      | 示例图标名                                                  |
| --------- | ----------------------------------------------------------- |
| 关闭/删除 | CloseOutlined、DeleteOutlined                               |
| 筛选/搜索 | FilterOutlined、SearchOutlined                              |
| 方向/展开 | CaretRightOutlined、DownOutlined、RightOutlined、UpOutlined |
| 状态      | LoadingOutlined、CheckOutlined、ExclamationCircleOutlined   |
| 编辑/操作 | EditOutlined、PlusOutlined、MoreOutlined                    |

具体导出以 oceanbase-design 仓库内 `packages/icons` 的导出为准（含 Outlined 系列与 Colored 系列等）。

## 约束与推荐

- **统一来源**：在 design/ui 组件或业务代码中**只使用 `@oceanbase/icons`**，避免混用 `@ant-design/icons`，以保证图标风格一致与包依赖清晰。
- **与 design 搭配**：Button 的 `icon`、Input 的 `prefix`/`suffix`、Table 操作列、Filter、Tabs、Dropdown 等中的图标，均从 `@oceanbase/icons` 引入。
- **尺寸与颜色**：图标尺寸与颜色通常随组件（如 Button、Input）的 theme 与 size 继承；若单独使用，可通过包裹组件或 className 控制，或使用 design 的 `theme.useToken().obToken` 中的颜色与间距。

## 代码示例

```tsx
import { SearchOutlined, FilterOutlined, DownOutlined } from '@oceanbase/icons';
import { Button, Dropdown } from '@oceanbase/design';

<Button type="primary" icon={<SearchOutlined />} iconPosition="end">
  搜索
</Button>

<Dropdown
  menu={{ items: menuItems }}
  trigger={['click']}
>
  <Button>
    更多 <DownOutlined />
  </Button>
</Dropdown>
```
