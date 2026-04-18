// @ts-nocheck

import { figma } from '@figma/code-connect';
import { QuestionCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Descriptions, Space, Typography } from '@oceanbase/design';

/**
 * Code Connect — Descriptions（DescriptionGroup + DescriptionItem）。
 * §3.4c：映射不含 style / styles / className；预览像素见 `demo/*.figma.tsx`（§3.4a）。
 * 图标使用 @ant-design/icons，与稿面图层一致。
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
          <RightOutlined />
          <Typography.Text>Card Title</Typography.Text>
        </Space>
      ),
      drawer: <Typography.Text>Card Title</Typography.Text>,
      popover: <Typography.Text>Card Title</Typography.Text>,
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
  },
  example: ({ bordered, column, layout, size, title, items }) => (
    <Descriptions
      bordered={bordered}
      column={column}
      layout={layout}
      size={size}
      title={title}
      items={items}
    />
  ),
});

// Figma: "DescriptionItem" · 5029:10078
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5029-10078&m=dev
// layout × info 在稿面上主要体现为排版与字色；§3.4c 下不在此映射 styles，用整段子树保留 Figma 控件维度（§3.1 例外）。
figma.connect(Descriptions.Item, '<FIGMA_OCEANBASE_DESCRIPTIONITEM>', {
  props: {
    root: figma.enum('layout', {
      horizontal: figma.boolean('info', {
        true: (
          <Descriptions.Item
            label={
              <Space size={4} align="center">
                <span>label</span>
                <QuestionCircleOutlined />
              </Space>
            }
          >
            caption
          </Descriptions.Item>
        ),
        false: <Descriptions.Item label="label">caption</Descriptions.Item>,
      }),
      vertical: figma.boolean('info', {
        true: (
          <Descriptions.Item
            label={
              <Space size={4} align="center">
                <span>label</span>
                <QuestionCircleOutlined />
              </Space>
            }
          >
            caption
          </Descriptions.Item>
        ),
        false: <Descriptions.Item label="label">caption</Descriptions.Item>,
      }),
    }),
  },
  example: ({ root }) => <div>{root}</div>,
});
