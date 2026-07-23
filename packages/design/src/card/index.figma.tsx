// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Badge, Button, Card, Flex, Input, Space, Typography } from '@oceanbase/design';
import {
  DownOutlined,
  EllipsisOutlined,
  FilterOutlined,
  SearchOutlined,
  SyncOutlined,
} from '@ant-design/icons';

/**
 * Code Connect — Card（collapsible × tabs × fliters 稿面布尔嵌套）。
 * §3.4c：映射不含 style / styles / className；预览尺寸与稿面像素见 `demo/index.figma.tsx`（§3.4a）。
 * 图标：稿面为通用线图标，使用 @ant-design/icons（§1）。
 */

// Figma: "Card" · 5313:14414 — collapsible × tabs × fliters（boolean）
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5313-14414&m=dev
figma.connect(Card, '<FIGMA_OCEANBASE_CARD>', {
  props: {
    cardNode: figma.boolean('collapsible', {
      true: (
        <Card
          collapsible
          title={
            <Space size={8}>
              <DownOutlined />
              {figma.textContent('Title')}
            </Space>
          }
          extra={
            <Space size={8}>
              <Button type="primary">Button</Button>
              <Button type="default" variant="outlined">
                Button
              </Button>
              <Button type="default">Button</Button>
              <Button type="default" icon={<EllipsisOutlined />} />
            </Space>
          }
        >
          <Typography.Text type="secondary">Content</Typography.Text>
        </Card>
      ),
      false: figma.boolean('tabs', {
        false: (
          <Card title="Card">
            <Typography.Text type="secondary">
              稿面无 collapsible=false 且 tabs=false 的展示；占位便于解析布尔嵌套。
            </Typography.Text>
          </Card>
        ),
        true: figma.boolean('fliters', {
          false: (
            <Card
              variant="borderless"
              tabList={[
                {
                  key: '1',
                  label: (
                    <Space size={4}>
                      <span>Tab001</span>
                      <Badge dot />
                    </Space>
                  ),
                },
                { key: '2', label: 'Tab002' },
                { key: '3', label: 'Tab003', disabled: true },
                { key: '4', label: 'Tab004' },
              ]}
              defaultActiveTabKey="2"
              tabBarExtraContent={
                <Space size={8}>
                  <Button type="primary">Button</Button>
                  <Button type="default" variant="outlined">
                    Button
                  </Button>
                  <Button type="default">Button</Button>
                  <Button type="default" icon={<EllipsisOutlined />} />
                </Space>
              }
            >
              <Typography.Text type="secondary">Content</Typography.Text>
            </Card>
          ),
          true: (
            <Card
              variant="borderless"
              tabList={[
                {
                  key: '1',
                  label: (
                    <Space size={4}>
                      <span>Tab001</span>
                      <Badge count={99} />
                    </Space>
                  ),
                },
                { key: '2', label: 'Tab002' },
                { key: '3', label: 'Tab003', disabled: true },
                { key: '4', label: 'Tab004' },
              ]}
              defaultActiveTabKey="2"
              tabBarExtraContent={
                <Space size={8}>
                  <Button type="default">Button</Button>
                  <Button type="default" icon={<EllipsisOutlined />} />
                  <Button type="default" icon={<SyncOutlined />} />
                </Space>
              }
            >
              <Flex vertical gap="middle">
                <Flex justify="space-between" align="center">
                  <Space size={8}>
                    <Input placeholder="Search" prefix={<SearchOutlined />} />
                    <Button type="default">
                      <Space size={4}>
                        <Badge dot />
                        <Badge dot />
                        <Badge dot />
                        <Badge dot />
                        <Badge dot />
                        <span>Status</span>
                      </Space>
                    </Button>
                    <Button type="default" icon={<FilterOutlined />}>
                      Filters
                    </Button>
                  </Space>
                  <Space size={8}>
                    <Button type="default">Button</Button>
                    <Button type="default" icon={<EllipsisOutlined />} />
                    <Button type="default" icon={<SyncOutlined />} />
                  </Space>
                </Flex>
                <Typography.Text type="secondary">Content</Typography.Text>
              </Flex>
            </Card>
          ),
        }),
      }),
    }),
  },
  example: ({ cardNode }) => <div>{cardNode}</div>,
});
