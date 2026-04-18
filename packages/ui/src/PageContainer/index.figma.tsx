// @ts-nocheck

import { figma } from '@figma/code-connect';
import {
  DownOutlined,
  FilterOutlined,
  MoreHorizontalOutlined,
  SearchOutlined,
  SyncOutlined,
} from '@oceanbase/icons';
import { Badge, Button, Card, Flex, Input, Space, Typography } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

/**
 * Code Connect — PageContainer（2348:5411：collapsible × tabs × fliters）。
 * **`props` / `example` 内不写 `style` / `styles` / `className`**；布局与稿面像素由 **`demo/index.figma.tsx`** 等外部注入（见 `figma-component_reference.md` §3.4a）。
 * 稿面 VARIANT 名为 **`True` / `False`** → **`figma.enum`**；`tabProps` 仅保留行为项（如 **`defaultActiveKey`**），不含 **`tabBarStyle`**。
 * **`example`**：`layout` 为 **`props` 映射出的整段子树**，须包一层 **`<div>{layout}</div>`** 作为真实 DOM 根（见 `figma-component_reference.md` §3.4）；**不在该 `div` 上写** `style` / `className`。
 * Page: "↵PageContainer"
 */

// Figma: "PageContainer" · 2348:5411
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2348-5411&m=dev
figma.connect(PageContainer, '<FIGMA_OCEANBASE_PAGECONTAINER>', {
  props: {
    layout: figma.enum('collapsible', {
      True: figma.enum('tabs', {
        True: figma.enum('fliters', {
          True: (
            <PageContainer
              ghost={false}
              tabList={[
                { key: '1', tab: figma.string('Tab001') },
                { key: '2', tab: figma.string('Tab002') },
                { key: '3', tab: figma.string('Tab004') },
              ]}
              tabProps={{
                defaultActiveKey: '2',
              }}
            >
              <Flex vertical>
                <Card size="small" variant="borderless">
                  <Flex justify="space-between" align="center" wrap="wrap" gap={12}>
                    <Space size={8} align="center">
                      <Input placeholder={figma.string('Search')} prefix={<SearchOutlined />} />
                      <Card size="small" variant="borderless">
                        <Flex align="center" gap={8} wrap="wrap">
                          <Space size={4}>
                            <Badge status="processing" />
                            <Badge status="success" />
                            <Badge status="warning" />
                            <Badge status="error" />
                          </Space>
                          <Typography.Text strong>{figma.string('Status')}</Typography.Text>
                          <DownOutlined />
                        </Flex>
                      </Card>
                      <Card size="small" variant="borderless">
                        <Flex align="center" gap={8}>
                          <FilterOutlined />
                          <Typography.Text strong>{figma.string('Filters')}</Typography.Text>
                        </Flex>
                      </Card>
                    </Space>
                    <Space size={8}>
                      <Button color="primary" variant="outlined">
                        {figma.string('Button')}
                      </Button>
                      <Button type="default" icon={<MoreHorizontalOutlined />} />
                      <Button type="default" icon={<SyncOutlined />} />
                    </Space>
                  </Flex>
                </Card>
                <Flex flex={1} />
              </Flex>
            </PageContainer>
          ),
          False: (
            <PageContainer
              ghost={false}
              tabList={[
                { key: '1', tab: figma.string('Tab001') },
                { key: '2', tab: figma.string('Tab002') },
                { key: '3', tab: figma.string('Tab004') },
              ]}
              tabProps={{
                defaultActiveKey: '2',
              }}
              tabBarExtraContent={
                <Space size={8}>
                  <Button color="primary" variant="outlined">
                    {figma.string('Button')}
                  </Button>
                  <Button type="default" icon={<MoreHorizontalOutlined />} />
                </Space>
              }
            >
              <Flex flex={1} />
            </PageContainer>
          ),
        }),
        False: figma.enum('fliters', {
          True: (
            <PageContainer
              ghost={false}
              header={{
                title: (
                  <Flex align="center" gap={8}>
                    <DownOutlined />
                    <Typography.Text strong>{figma.string('Title')}</Typography.Text>
                  </Flex>
                ),
                extra: (
                  <Space size={8}>
                    <Button type="primary">{figma.string('Button')}</Button>
                    <Button type="default" color="primary" variant="outlined">
                      {figma.string('Button')}
                    </Button>
                    <Button type="text">{figma.string('Button')}</Button>
                    <Button type="default" icon={<MoreHorizontalOutlined />} />
                  </Space>
                ),
              }}
            >
              <Flex vertical>
                <Card size="small" variant="borderless">
                  <Flex justify="space-between" align="center" wrap="wrap" gap={12}>
                    <Space size={8} align="center">
                      <Input placeholder={figma.string('Search')} prefix={<SearchOutlined />} />
                      <Card size="small" variant="borderless">
                        <Flex align="center" gap={8} wrap="wrap">
                          <Space size={4}>
                            <Badge status="processing" />
                            <Badge status="success" />
                            <Badge status="warning" />
                            <Badge status="error" />
                          </Space>
                          <Typography.Text strong>{figma.string('Status')}</Typography.Text>
                          <DownOutlined />
                        </Flex>
                      </Card>
                      <Card size="small" variant="borderless">
                        <Flex align="center" gap={8}>
                          <FilterOutlined />
                          <Typography.Text strong>{figma.string('Filters')}</Typography.Text>
                        </Flex>
                      </Card>
                    </Space>
                    <Space size={8}>
                      <Button color="primary" variant="outlined">
                        {figma.string('Button')}
                      </Button>
                      <Button type="default" icon={<MoreHorizontalOutlined />} />
                      <Button type="default" icon={<SyncOutlined />} />
                    </Space>
                  </Flex>
                </Card>
                <Flex flex={1} />
              </Flex>
            </PageContainer>
          ),
          False: (
            <PageContainer
              ghost={false}
              header={{
                title: (
                  <Flex align="center" gap={8}>
                    <DownOutlined />
                    <Typography.Text strong>{figma.string('Title')}</Typography.Text>
                  </Flex>
                ),
                extra: (
                  <Space size={8}>
                    <Button type="primary">{figma.string('Button')}</Button>
                    <Button type="default" color="primary" variant="outlined">
                      {figma.string('Button')}
                    </Button>
                    <Button type="text">{figma.string('Button')}</Button>
                    <Button type="default" icon={<MoreHorizontalOutlined />} />
                  </Space>
                ),
              }}
            >
              <Flex flex={1} />
            </PageContainer>
          ),
        }),
      }),
      False: figma.enum('tabs', {
        True: figma.enum('fliters', {
          True: (
            <PageContainer
              ghost={false}
              tabList={[
                { key: '1', tab: figma.string('Tab001') },
                { key: '2', tab: figma.string('Tab002') },
                { key: '3', tab: figma.string('Tab004') },
              ]}
              tabProps={{
                defaultActiveKey: '2',
              }}
            >
              <Flex vertical>
                <Card size="small" variant="borderless">
                  <Flex justify="space-between" align="center" wrap="wrap" gap={12}>
                    <Space size={8} align="center">
                      <Input placeholder={figma.string('Search')} prefix={<SearchOutlined />} />
                      <Card size="small" variant="borderless">
                        <Flex align="center" gap={8} wrap="wrap">
                          <Space size={4}>
                            <Badge status="processing" />
                            <Badge status="success" />
                            <Badge status="warning" />
                            <Badge status="error" />
                          </Space>
                          <Typography.Text strong>{figma.string('Status')}</Typography.Text>
                          <DownOutlined />
                        </Flex>
                      </Card>
                      <Card size="small" variant="borderless">
                        <Flex align="center" gap={8}>
                          <FilterOutlined />
                          <Typography.Text strong>{figma.string('Filters')}</Typography.Text>
                        </Flex>
                      </Card>
                    </Space>
                    <Space size={8}>
                      <Button color="primary" variant="outlined">
                        {figma.string('Button')}
                      </Button>
                      <Button type="default" icon={<MoreHorizontalOutlined />} />
                      <Button type="default" icon={<SyncOutlined />} />
                    </Space>
                  </Flex>
                </Card>
                <Flex flex={1} />
              </Flex>
            </PageContainer>
          ),
          False: (
            <PageContainer
              ghost={false}
              tabList={[
                { key: '1', tab: figma.string('Tab001') },
                { key: '2', tab: figma.string('Tab002') },
                { key: '3', tab: figma.string('Tab004') },
              ]}
              tabProps={{
                defaultActiveKey: '2',
              }}
              tabBarExtraContent={
                <Space size={8}>
                  <Button color="primary" variant="outlined">
                    {figma.string('Button')}
                  </Button>
                  <Button type="default" icon={<MoreHorizontalOutlined />} />
                </Space>
              }
            >
              <Flex flex={1} />
            </PageContainer>
          ),
        }),
        False: figma.enum('fliters', {
          True: (
            <PageContainer ghost={false}>
              <Flex vertical>
                <Card size="small" variant="borderless">
                  <Flex justify="space-between" align="center" wrap="wrap" gap={12}>
                    <Space size={8} align="center">
                      <Input placeholder={figma.string('Search')} prefix={<SearchOutlined />} />
                      <Card size="small" variant="borderless">
                        <Flex align="center" gap={8} wrap="wrap">
                          <Space size={4}>
                            <Badge status="processing" />
                            <Badge status="success" />
                            <Badge status="warning" />
                            <Badge status="error" />
                          </Space>
                          <Typography.Text strong>{figma.string('Status')}</Typography.Text>
                          <DownOutlined />
                        </Flex>
                      </Card>
                      <Card size="small" variant="borderless">
                        <Flex align="center" gap={8}>
                          <FilterOutlined />
                          <Typography.Text strong>{figma.string('Filters')}</Typography.Text>
                        </Flex>
                      </Card>
                    </Space>
                    <Space size={8}>
                      <Button color="primary" variant="outlined">
                        {figma.string('Button')}
                      </Button>
                      <Button type="default" icon={<MoreHorizontalOutlined />} />
                      <Button type="default" icon={<SyncOutlined />} />
                    </Space>
                  </Flex>
                </Card>
                <Flex flex={1} />
              </Flex>
            </PageContainer>
          ),
          False: (
            <PageContainer ghost={false}>
              <Flex flex={1} />
            </PageContainer>
          ),
        }),
      }),
    }),
  },
  example: ({ layout }) => <div>{layout}</div>,
});
