# design 基础组件

Alert、Button、Space、Grid、Typography、Tag、Divider 的约束与推荐用法；未列 API 与 antd 一致。

## Alert

- **约束**：`showIcon` 默认 `true`；新增 `ghost`（透明背景）、`mini`（超轻量紧凑）。类型默认 `info`；banner 时默认 `type: 'warning'`。
- **场景**：轻量提示用 `mini`；内嵌/弱化背景用 `ghost`；顶部公告用 `banner`。

```tsx
import { Alert } from '@oceanbase/design';

<Alert message="提示文案" type="info" />
<Alert message="轻量提示" mini />
<Alert message="透明背景" ghost />
<Alert banner message="顶部公告" />
```

## Button

- **约束**：五种类型 primary/default/dashed/text/link；尺寸默认中。主按钮同一操作区最多一个；危险操作用 `danger` 属性。图标通过 `icon` 传入，`iconPosition` 为 `'start'` 或 `'end'`。**design 扩展**：`loading` 且 `type === 'primary'` 时自动 `disabled`，避免重复点击。
- **推荐**：用 `loading`/`disabled`；定制用 `size`/`type`/`variant`/`color`，避免覆写样式。仅图标时只传 `icon` 不传 children。

```tsx
import { Button } from '@oceanbase/design';
import { SearchOutlined, PlusOutlined } from '@oceanbase/icons';

<Button type="primary">主按钮</Button>
<Button type="dashed">虚线按钮</Button>
<Button danger>危险操作</Button>
<Button type="primary" icon={<PlusOutlined />} iconPosition="end">新增</Button>
{/* 仅图标时不传 children */}
<Button icon={<SearchOutlined />} iconPosition="end" />
<Button loading>加载中</Button>
```

## Space

- **约束**：支持 `wrap`、`direction`。用于间距与排版。**Space.Compact** 子组件用于紧凑布局（子元素紧贴、无间隙）。
- **推荐**：相邻组件用 Space 包裹，用 `size`/`direction` 控制，不手写 margin。

```tsx
import { Button, Space, Input } from '@oceanbase/design';

<Space size="middle">
  <Button>按钮一</Button>
  <Button>按钮二</Button>
</Space>
<Space direction="vertical" size="small">
  <div>块一</div>
  <div>块二</div>
</Space>
<Space.Compact>
  <Input placeholder="前缀" />
  <Input placeholder="后缀" />
</Space.Compact>
```

## Grid（Col / Row）

- **约束**：Col 必须放在 Row 内。**推荐 gutter 使用 (16+8n)px**（n 为自然数）。

```tsx
import { Col, Row } from '@oceanbase/design';

{/* gutter 推荐 (16+8n)px */}
<Row gutter={[16, 16]}>
  <Col span={12}>列1</Col>
  <Col span={12}>列2</Col>
</Row>
<Row gutter={24}>
  <Col span={8} offset={4}>偏移列</Col>
</Row>
```

## Typography

- **约束**：Text/Paragraph 默认继承父元素颜色与行高；`Typography.Text` 新增 `caption`（12px 辅助描述）。
- **场景**：辅助说明用 `caption`；可复制 `copyable`；可编辑 `editable`。

```tsx
import { Typography } from '@oceanbase/design';

const { Title, Text, Paragraph } = Typography;

<Title level={4}>标题</Title>
<Text>正文</Text>
<Text caption>辅助描述</Text>
<Text copyable>可复制内容</Text>
<Paragraph editable>可编辑段落</Paragraph>
```

## Tag

- **约束**：新增 `critical` 状态；`pill`（胶囊）、`ellipsis`（溢出省略与 Tooltip）。
- **场景**：状态用 `status`（含 critical）；短标签用 `pill`；长文案用 `ellipsis`。

```tsx
import { Tag } from '@oceanbase/design';

<Tag status="success">成功</Tag>
<Tag status="critical">严重</Tag>
<Tag pill>胶囊</Tag>
<Tag ellipsis>很长很长很长...</Tag>
```

## Divider

- **约束**：默认为水平分割线；垂直用 `type="vertical"`。

```tsx
import { Divider } from '@oceanbase/design';

<Divider />
<Divider type="vertical" />
<span>左</span><Divider type="vertical" /><span>右</span>
```
