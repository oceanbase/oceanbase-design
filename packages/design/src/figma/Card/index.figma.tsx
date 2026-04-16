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
 * Auto-generated — Code Connect (one file per Figma page).
 * Page: "↵Card"
 * 单条 connect：`collapsible` / `tabs` / `fliters` 为稿面布尔属性；嵌套映射避免 example 内分支（gen-figma §3.2、§4）。
 * 图标：稿面为通用线图标，使用 @ant-design/icons（gen-figma §1）。
 */

// Figma: "Card" · 5313:14414 — collapsible × tabs × fliters（boolean）
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5313-14414&m=dev
figma.connect(Card, '<FIGMA_OCEANBASE_CARD>', {
  props: {
    cardNode: figma.boolean('collapsible', {
      true: (
        <Flex style={{ padding: 8, overflow: 'auto' }}>
          <Card
            title={
              <Space size={8}>
                <DownOutlined style={{ fontSize: 16, color: '#132039' }} />
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
            styles={{ body: { minHeight: 600, background: '#ffffff' } }}
            style={{ width: 1204, border: '1px solid #e2e8f3', borderRadius: 8 }}
          >
            <Flex style={{ minHeight: 480 }} />
          </Card>
        </Flex>
      ),
      false: figma.boolean('tabs', {
        false: (
          <Flex style={{ padding: 8, overflow: 'auto' }}>
            <Card
              style={{ width: 1204, border: '1px solid #e2e8f3', borderRadius: 8 }}
              title="Card"
            >
              <Typography.Text type="secondary">
                稿面无 collapsible=false 且 tabs=false 的展示；占位便于解析布尔嵌套。
              </Typography.Text>
            </Card>
          </Flex>
        ),
        true: figma.boolean('fliters', {
          false: (
            <Flex style={{ padding: 8, overflow: 'auto' }}>
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
                styles={{
                  header: {
                    paddingLeft: 24,
                    paddingRight: 24,
                    marginBottom: 0,
                    borderBottom: '1px solid #e2e8f3',
                  },
                  body: { padding: 24, minHeight: 600 },
                }}
                style={{ width: 1204, border: '1px solid #e2e8f3', borderRadius: 8 }}
              >
                <Flex style={{ minHeight: 480 }} />
              </Card>
            </Flex>
          ),
          true: (
            <Flex style={{ padding: 8, overflow: 'auto' }}>
              <Card
                variant="borderless"
                tabList={[
                  {
                    key: '1',
                    label: (
                      <Space size={4}>
                        <span>Tab001</span>
                        <Badge
                          count={99}
                          style={{ backgroundColor: '#ebeff7', color: '#5c6b8a' }}
                        />
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
                styles={{
                  header: {
                    paddingLeft: 24,
                    paddingRight: 24,
                    marginBottom: 0,
                    borderBottom: '1px solid #e2e8f3',
                  },
                  body: { padding: '0 24px 24px', minHeight: 600 },
                }}
                style={{ width: 1204, border: '1px solid #e2e8f3', borderRadius: 8 }}
              >
                <Flex
                  justify="space-between"
                  align="center"
                  style={{
                    padding: '8px 0 16px',
                    borderBottom: '1px solid #e2e8f3',
                    marginBottom: 16,
                    minHeight: 28,
                  }}
                >
                  <Space size={8}>
                    <Input
                      placeholder="Search"
                      prefix={<SearchOutlined style={{ color: '#b6c0d4', fontSize: 14 }} />}
                      style={{ width: 264 }}
                    />
                    <Button type="default" style={{ height: 28, padding: '4px 12px' }}>
                      <Space size={4}>
                        <Badge dot color="#9eadc4" />
                        <Badge dot color="#9eadc4" />
                        <Badge dot color="#9eadc4" />
                        <Badge dot color="#9eadc4" />
                        <Badge dot color="#9eadc4" />
                        <span>Status</span>
                      </Space>
                    </Button>
                    <Button
                      type="default"
                      icon={<FilterOutlined style={{ fontSize: 16, color: '#595959' }} />}
                    >
                      Filters
                    </Button>
                  </Space>
                  <Space size={8}>
                    <Button type="default">Button</Button>
                    <Button type="default" icon={<EllipsisOutlined />} />
                    <Button type="default" icon={<SyncOutlined />} />
                  </Space>
                </Flex>
                <Flex style={{ minHeight: 400 }} />
              </Card>
            </Flex>
          ),
        }),
      }),
    }),
  },
  example: ({ cardNode }) => <Flex>{cardNode}</Flex>,
});
