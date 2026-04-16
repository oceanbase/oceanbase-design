// @ts-nocheck

import { QuestionCircleOutlined } from '@ant-design/icons';
import { figma } from '@figma/code-connect';
import { Checkbox, Space } from '@oceanbase/design';

/**
 * Auto-generated — Code Connect (one file per Figma page).
 * Page: "↵Checkbox"
 */

// Figma: "Checkbox" · 2245:2141
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2141&m=dev
figma.connect(Checkbox, '<FIGMA_OCEANBASE_CHECKBOX>', {
  props: {
    status: figma.enum('status', {
      default: 'default',
      selected: 'selected',
      'selected part': 'selected part',
    }),
    disabled: figma.enum('disabled', {
      false: 'false',
      true: 'true',
    }),
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
    disabledBool: figma.enum('disabled', {
      false: false,
      true: true,
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
    <Checkbox.Group
      defaultValue={defaultValue}
      options={options}
      style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}
    />
  ),
});

// Figma: "CheckboxItem" · 2245:2428
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2428&m=dev
figma.connect(Checkbox, '<FIGMA_OCEANBASE_CHECKBOXITEM>', {
  props: {
    text: figma.string('text'),
    info: figma.enum('info', {
      false: 'false',
      true: 'true',
    }),
    labelSlot: figma.enum('info', {
      false: (
        <span style={{ color: '#595959', fontSize: 13, lineHeight: '20px' }}>
          {figma.string('text')}
        </span>
      ),
      true: (
        <Space size={4} align="center">
          <span style={{ color: '#595959', fontSize: 13, lineHeight: '20px' }}>
            {figma.string('text')}
          </span>
          <QuestionCircleOutlined style={{ color: '#8c8c8c', fontSize: 14 }} />
        </Space>
      ),
    }),
  },
  example: ({ labelSlot }) => <Checkbox defaultChecked={false}>{labelSlot}</Checkbox>,
});
