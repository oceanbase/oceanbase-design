# design 表单与输入

Form、Input、InputNumber、Select、TreeSelect、Radio、Checkbox、Switch、Slider 的约束与推荐；未列 API 与 antd 一致。

## Form

- **约束**：`preserve: true`；`requiredMark: 'optional'`（必填需显式设）。Form.Item 新增 `description`、`tooltip`（支持 type、icon、overlayInnerStyle）、**`action`**（操作项，仅垂直布局生效）、`extra`。
- **推荐**：必选样式用 `requiredMark`；说明与提示用 `description`/`tooltip`/`extra`。提交按钮用 **`htmlType="submit"`**，表单用 `onFinish`/`onFinishFailed` 处理结果。

**错误 / 正确**：提交按钮未用 `htmlType="submit"` 而用 `onClick` 触发表单提交，会绕过 Form 校验与 onFinish。正确做法：主提交按钮设 `htmlType="submit"`，在 Form 的 `onFinish` 中处理提交逻辑。

```tsx
import { Form, Input, Select, Button } from '@oceanbase/design';

<Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
  <Form.Item name="name" label="姓名" required rules={[{ required: true, message: '请输入' }]}>
    <Input />
  </Form.Item>
  {/* Form.Item 扩展：description、tooltip（支持 type: 'info'） */}
  <Form.Item
    name="type"
    label="类型"
    description="选择一项类型"
    tooltip={{ title: '说明', type: 'info' }}
  >
    <Select options={[{ label: 'A', value: 'a' }]} />
  </Form.Item>
  <Form.Item>
    <Button type="primary" htmlType="submit">
      提交
    </Button>
  </Form.Item>
</Form>;
```

## Input

- **约束**：默认填充 placeholder，可通过 ConfigProvider `locale.Input.placeholder` 配置。**design 扩展**：`showCount={true}` 时默认 formatter 为 `${count}/${maxLength}`，可传入 `showCount={{ formatter }}` 自定义。
- **场景**：搜索用 Search 变体；密码框 `autoComplete="new-password"`；字数 `showCount`；清除 `allowClear`。

```tsx
import { Input } from '@oceanbase/design';

<Input placeholder="请输入" />
<Input.Search placeholder="搜索" onSearch={handleSearch} />
{/* 密码框建议 autoComplete="new-password" 避免浏览器自动填充 */}
<Input.Password autoComplete="new-password" />
<Input showCount maxLength={100} />
```

## InputNumber

- **约束**：始终展示上下箭头；支持 `status`（error/warning）。前置/后置用 `addonBefore`/`addonAfter`；格式用 `formatter`+`parser`。

```tsx
import { InputNumber } from '@oceanbase/design';

<InputNumber min={0} max={100} />
<InputNumber addonBefore="¥" addonAfter="元" formatter={v => `¥ ${v}`} parser={v => v.replace('¥ ', '')} />
<InputNumber status="error" />
```

## Select

- **约束**：默认 placeholder，可通过 ConfigProvider 配置；支持 `variant`（outlined/filled/borderless）。
- **推荐**：placeholder 与文案通过 ConfigProvider 或 locale 统一配置。

```tsx
import { Select } from '@oceanbase/design';

<Select
  options={[
    { label: '选项一', value: '1' },
    { label: '选项二', value: '2' },
  ]}
  placeholder="请选择"
/>
<Select mode="multiple" />
<Select variant="borderless" />
```

## TreeSelect

- **约束**：默认 placeholder，可通过 ConfigProvider 配置。树形单选/多选；勾选用 `treeCheckable`；异步用 `loadData`。
- **说明**：与 Filter.Cascader 区分——表单树形用 TreeSelect，级联筛选用 Filter.Cascader。

```tsx
import { TreeSelect } from '@oceanbase/design';

{
  /* 表单树形用 TreeSelect，级联筛选用 Filter.Cascader */
}
<TreeSelect treeData={treeData} placeholder="请选择" treeCheckable />;
```

## Radio

- **约束**：Radio.Button 新增 `icon` 属性。
- **场景**：单选组 Radio.Group；按钮态 Radio.Button + `icon`。

```tsx
import { Radio } from '@oceanbase/design';

<Radio.Group options={[{ label: 'A', value: 'a' }]} />
<Radio.Group optionType="button">
  <Radio.Button value="a" icon={<Icon />}>选项 A</Radio.Button>
</Radio.Group>
```

## Checkbox / Switch

- **Checkbox**：与 Form 组合；**与 Filter.Checkbox 区分**——表单内多选用 Checkbox/Checkbox.Group，表格上方筛选用 Filter.Checkbox。
- **Switch**：用 `checkedChildren`/`unCheckedChildren`、`loading`，勿外包 Typography 仿样式。

**Select / Checkbox 场景区分**：表单内单选/多选用 **Select**、**Checkbox**；页面顶部与 Table 联动的筛选用 **Filter.Select**、**Filter.Checkbox**。勿在同一个筛选项上混用 design 的 Select 与 Filter.Select（应统一用 Filter.\*）。

```tsx
import { Checkbox, Switch } from '@oceanbase/design';

{/* 与 Filter.Checkbox（筛选器）区分，表单用 Checkbox */}
<Checkbox.Group options={[{ label: 'A', value: 'a' }]} />
<Switch checkedChildren="开" unCheckedChildren="关" />
<Switch loading />
```

## Slider

- **约束**：与 antd 一致。带刻度用 `marks`；垂直 `vertical`。

```tsx
import { Slider } from '@oceanbase/design';

<Slider min={0} max={100} />
<Slider marks={{ 0: '0', 50: '50', 100: '100' }} />
```
