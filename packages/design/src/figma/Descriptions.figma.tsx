// @ts-nocheck

import { figma } from '@figma/code-connect';
import { QuestionCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Descriptions, Space } from '@oceanbase/design';

/**
 * Auto-generated — Code Connect (one file per Figma page).
 * Page: "↵Descriptions"
 */

// Figma: "DescriptionGroup" · 5029:10089
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5029-10089&m=dev
figma.connect(Descriptions, '<FIGMA_OCEANBASE_DESCRIPTIONGROUP>', {
  props: {
    bordered: figma.enum('position', {
      page: true,
      drawer: false,
      popover: false,
    }),
    column: figma.enum('position', {
      page: 4,
      drawer: 1,
      popover: 1,
    }),
    layout: figma.enum('position', {
      page: 'vertical',
      drawer: 'horizontal',
      popover: 'horizontal',
    }),
    size: figma.enum('position', {
      page: 'default',
      drawer: 'default',
      popover: 'small',
    }),
    title: figma.enum('position', {
      page: (
        <Space size={8} align="center">
          <RightOutlined style={{ fontSize: 16, color: '#132039' }} />
          <span style={{ fontSize: 16, fontWeight: 500, color: '#132039', lineHeight: '24px' }}>
            Card Title
          </span>
        </Space>
      ),
      drawer: (
        <span style={{ fontSize: 14, fontWeight: 500, color: '#132039', lineHeight: '20px' }}>
          Card Title
        </span>
      ),
      popover: (
        <span style={{ fontSize: 14, fontWeight: 500, color: '#132039', lineHeight: '20px' }}>
          Card Title
        </span>
      ),
    }),
    items: figma.enum('position', {
      page: [
        { key: '1', label: 'label', children: 'caption' },
        { key: '2', label: 'label', children: 'caption' },
        { key: '3', label: 'label', children: 'caption' },
        { key: '4', label: 'label', children: 'caption' },
        { key: '5', label: 'label', children: 'caption' },
        { key: '6', label: 'label', children: 'caption' },
        { key: '7', label: 'label', children: 'caption' },
        { key: '8', label: 'label', children: 'caption' },
      ],
      drawer: [
        { key: '1', label: 'label', children: 'caption' },
        { key: '2', label: 'label', children: 'caption' },
        { key: '3', label: 'label', children: 'caption' },
      ],
      popover: [
        { key: '1', label: 'label', children: 'caption' },
        { key: '2', label: 'label', children: 'caption' },
        { key: '3', label: 'label', children: 'caption' },
      ],
    }),
    style: figma.enum('position', {
      page: { width: 696, borderRadius: 6, background: '#ffffff' },
      drawer: { width: 370, padding: 16, background: '#ffffff', borderRadius: 6, rowGap: 0 },
      popover: { width: 200, padding: 12, background: '#ffffff', borderRadius: 6 },
    }),
    styles: figma.enum('position', {
      page: {
        label: { color: '#5c6b8a', fontSize: 12, lineHeight: '20px' },
        content: { color: '#132039', fontSize: 14, lineHeight: '20px' },
      },
      drawer: {
        label: { color: '#5c6b8a', fontSize: 14, lineHeight: '20px', whiteSpace: 'nowrap' },
        content: { color: '#132039', fontSize: 14, lineHeight: '20px' },
      },
      popover: {
        label: { color: '#5c6b8a', fontSize: 12, lineHeight: '20px', whiteSpace: 'nowrap' },
        content: { color: '#132039', fontSize: 12, lineHeight: '20px' },
      },
    }),
  },
  example: ({ bordered, column, layout, size, title, items, style, styles }) => (
    <Descriptions
      bordered={bordered}
      column={column}
      layout={layout}
      size={size}
      title={title}
      items={items}
      style={style}
      styles={styles}
    />
  ),
});

// Figma: "DescriptionItem" · 5029:10078
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5029-10078&m=dev
figma.connect(Descriptions.Item, '<FIGMA_OCEANBASE_DESCRIPTIONITEM>', {
  props: {
    label: figma.boolean('info', {
      true: (
        <Space size={4} align="center">
          <span>label</span>
          <QuestionCircleOutlined style={{ fontSize: 16, color: '#8c8c8c' }} />
        </Space>
      ),
      false: 'label',
    }),
    styles: figma.enum('layout', {
      horizontal: figma.boolean('info', {
        true: {
          label: { color: '#5c6b8a', fontSize: 14, lineHeight: '20px' },
          content: { color: '#132039', fontSize: 14, lineHeight: '20px', whiteSpace: 'nowrap' },
        },
        false: {
          label: { color: '#5c6b8a', fontSize: 14, lineHeight: '20px' },
          content: { color: '#132039', fontSize: 14, lineHeight: '20px', whiteSpace: 'nowrap' },
        },
      }),
      vertical: figma.boolean('info', {
        true: {
          label: { color: '#5c6b8a', fontSize: 12, lineHeight: '20px' },
          content: {
            color: '#132039',
            fontSize: 14,
            lineHeight: '20px',
            display: 'block',
            width: '100%',
          },
        },
        false: {
          label: { color: '#5c6b8a', fontSize: 12, lineHeight: '20px' },
          content: {
            color: '#132039',
            fontSize: 14,
            lineHeight: '20px',
            display: 'block',
            width: '100%',
          },
        },
      }),
    }),
  },
  example: ({ label, styles, children }) => (
    <Descriptions.Item label={label} styles={styles}>
      caption
    </Descriptions.Item>
  ),
});
