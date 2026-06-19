// @ts-nocheck

// QuestionCircleOutlined：Figma 为提示类图标；@oceanbase/icons 无等价语义图标时沿用 @ant-design/icons（§1）。
import { QuestionCircleOutlined } from '@ant-design/icons';
import { figma } from '@figma/code-connect';
import { Checkbox, Space, Typography } from '@oceanbase/design';

/**
 * Code Connect — Checkbox 页多节点。`index.figma.tsx` 不挂样式（§3.4c）；预览根与白底见 `demo/*.figma.tsx`（§3.4a）。
 */

// Figma: "Checkbox" · 2245:2141
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2141&m=dev
figma.connect(Checkbox, '<FIGMA_OCEANBASE_CHECKBOX>', {
  props: {
    defaultChecked: figma.enum('status', {
      default: false,
      selected: true,
      'selected part': false,
    }),
    indeterminate: figma.enum('status', {
      default: false,
      selected: false,
      'selected part': true,
    }),
    disabledBool: figma.boolean('disabled', {
      true: true,
      false: false,
    }),
  },
  example: ({ defaultChecked, indeterminate, disabledBool }) => (
    <Checkbox
      defaultChecked={defaultChecked}
      indeterminate={indeterminate}
      disabled={disabledBool}
    />
  ),
});

// Figma: "CheckboxGroup" · 5029:8827
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5029-8827&m=dev
figma.connect(Checkbox.Group, '<FIGMA_OCEANBASE_CHECKBOXGROUP>', {
  props: {
    defaultValue: ['1'],
    options: [
      { label: 'item', value: '1' },
      { label: 'item', value: '2' },
      { label: 'item', value: '3' },
      { label: 'item', value: '4' },
      { label: 'item', value: '5', disabled: true },
    ],
  },
  example: ({ defaultValue, options }) => (
    <Checkbox.Group defaultValue={defaultValue} options={options} />
  ),
});

// Figma: "CheckboxItem" · 2245:2428
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2428&m=dev
figma.connect(Checkbox, '<FIGMA_OCEANBASE_CHECKBOXITEM>', {
  props: {
    labelSlot: figma.boolean('info', {
      false: <Typography.Text>{figma.string('text')}</Typography.Text>,
      true: (
        <Space size={4} align="center">
          <Typography.Text>{figma.string('text')}</Typography.Text>
          <QuestionCircleOutlined />
        </Space>
      ),
    }),
  },
  example: ({ labelSlot }) => <Checkbox defaultChecked={false}>{labelSlot}</Checkbox>,
});
