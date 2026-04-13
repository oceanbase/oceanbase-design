// @ts-nocheck

import type { CSSProperties } from 'react';
import { figma } from '@figma/code-connect';
import {
  EllipsisOutlined,
  FilterOutlined,
  LeftOutlined,
  ReadOutlined,
  SearchOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Badge, Button, Divider, Flex, Input, Space, Tabs } from '@oceanbase/design';

/**
 * Code Connect — PageHeader（5486:1358：type × w/toolbar）。
 * 变体矩阵在 props 内展开；example 仅包一层根节点（gen-figma §4）。
 * Page: "↵PageHeader"
 */

// Figma: "Page Header" · 5486:1358
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5486-1358&m=dev
figma.connect(Flex, '<FIGMA_OCEANBASE_PAGE_HEADER>', {
  props: {
    layout: figma.enum('type', {
      带tab: figma.boolean('w/toolbar', {
        true: (
          <Flex
            vertical
            gap={0}
            style={{
              width: '100%',
              maxWidth: 1242,
              background: '#fbfcfe',
              padding: '24px 32px 0',
            }}
          >
            <Flex
              align="center"
              justify="space-between"
              gap={16}
              style={{ width: '100%', marginBottom: 0 }}
            >
              <Space size={8} align="center">
                <span
                  style={
                    {
                      fontSize: 20,
                      fontWeight: 500,
                      lineHeight: '28px',
                      color: '#132039',
                    } as CSSProperties
                  }
                >
                  {figma.string('PAGE TITLE')}
                </span>
                <Divider
                  type="vertical"
                  style={{ height: 16, margin: 0, borderColor: '#e2e8f3' }}
                />
                <ReadOutlined style={{ fontSize: 16, color: '#132039' }} />
              </Space>
              <Flex
                align="center"
                justify="flex-end"
                gap={8}
                style={{ height: 28, flex: 1, minWidth: 0 }}
              >
                <Input
                  placeholder={figma.string('Search')}
                  prefix={<SearchOutlined style={{ color: '#b6c0d4', fontSize: 14 }} />}
                  style={{ width: 264 }}
                />
                <Flex
                  align="center"
                  gap={4}
                  style={{
                    border: '1px solid #cdd5e4',
                    borderRadius: 4,
                    padding: '4px 12px',
                    background: '#ffffff',
                  }}
                >
                  <FilterOutlined style={{ fontSize: 16, color: '#595959' }} />
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#132039' }}>
                    {figma.string('Filters')}
                  </span>
                </Flex>
                <Space size={8}>
                  <Button type="default">{figma.string('Button')}</Button>
                  <Button
                    type="default"
                    icon={<EllipsisOutlined />}
                    style={{ padding: '6px 12px' }}
                  />
                  <Button type="default" icon={<SyncOutlined />} style={{ padding: '6px 12px' }} />
                </Space>
              </Flex>
            </Flex>
            <div style={{ width: '100%', marginTop: 0, borderBottom: '1px solid #e2e8f3' }}>
              <Tabs
                defaultActiveKey="2"
                style={{ width: '100%' }}
                tabBarGutter={24}
                items={[
                  { key: '1', label: figma.string('Tab001') },
                  { key: '2', label: figma.string('Tab002') },
                  { key: '3', label: figma.string('Tab003'), disabled: true },
                  {
                    key: 'sep',
                    label: (
                      <span
                        style={{
                          display: 'inline-block',
                          width: 1,
                          height: 20,
                          background: '#e2e8f3',
                          verticalAlign: 'middle',
                        }}
                      />
                    ),
                    disabled: true,
                  },
                  { key: '4', label: figma.string('Tab004') },
                ]}
              />
            </div>
          </Flex>
        ),
        false: (
          <Flex
            vertical
            gap={0}
            style={{
              width: '100%',
              maxWidth: 1242,
              background: '#fbfcfe',
              padding: '24px 32px 0',
            }}
          >
            <Flex
              align="center"
              justify="space-between"
              gap={16}
              style={{ width: '100%', marginBottom: 0 }}
            >
              <Space size={8} align="center">
                <span
                  style={
                    {
                      fontSize: 20,
                      fontWeight: 500,
                      lineHeight: '28px',
                      color: '#132039',
                    } as CSSProperties
                  }
                >
                  {figma.string('PAGE TITLE')}
                </span>
                <Divider
                  type="vertical"
                  style={{ height: 16, margin: 0, borderColor: '#e2e8f3' }}
                />
                <ReadOutlined style={{ fontSize: 16, color: '#132039' }} />
              </Space>
            </Flex>
            <div style={{ width: '100%', marginTop: 0, borderBottom: '1px solid #e2e8f3' }}>
              <Tabs
                defaultActiveKey="2"
                style={{ width: '100%' }}
                tabBarGutter={24}
                items={[
                  { key: '1', label: figma.string('Tab001') },
                  { key: '2', label: figma.string('Tab002') },
                  { key: '3', label: figma.string('Tab003'), disabled: true },
                  {
                    key: 'sep',
                    label: (
                      <span
                        style={{
                          display: 'inline-block',
                          width: 1,
                          height: 20,
                          background: '#e2e8f3',
                          verticalAlign: 'middle',
                        }}
                      />
                    ),
                    disabled: true,
                  },
                  { key: '4', label: figma.string('Tab004') },
                ]}
              />
            </div>
          </Flex>
        ),
      }),
      带返回: figma.boolean('w/toolbar', {
        true: (
          <Flex
            align="center"
            justify="space-between"
            gap={16}
            style={{
              width: '100%',
              maxWidth: 1242,
              background: '#fbfcfe',
              padding: '24px 32px 8px',
            }}
          >
            <Space size={16} align="center">
              <Button type="default" icon={<LeftOutlined />} style={{ padding: '6px 12px' }} />
              <span
                style={
                  {
                    fontSize: 20,
                    fontWeight: 500,
                    lineHeight: '28px',
                    color: '#132039',
                  } as CSSProperties
                }
              >
                {figma.string('PAGE TITLE')}
              </span>
              <Space size={8} align="center">
                <Badge status="processing" />
                <span
                  style={{ fontSize: 14, fontWeight: 400, lineHeight: '20px', color: '#132039' }}
                >
                  {figma.string('status')}
                </span>
              </Space>
            </Space>
            <Flex
              align="center"
              justify="flex-end"
              gap={8}
              style={{ height: 28, flex: 1, minWidth: 0 }}
            >
              <Input
                placeholder={figma.string('Search')}
                prefix={<SearchOutlined style={{ color: '#b6c0d4', fontSize: 14 }} />}
                style={{ width: 264 }}
              />
              <Flex
                align="center"
                gap={4}
                style={{
                  border: '1px solid #cdd5e4',
                  borderRadius: 4,
                  padding: '4px 12px',
                  background: '#ffffff',
                }}
              >
                <FilterOutlined style={{ fontSize: 16, color: '#595959' }} />
                <span style={{ fontSize: 13, fontWeight: 500, color: '#132039' }}>
                  {figma.string('Filters')}
                </span>
              </Flex>
              <Space size={8}>
                <Button type="default">{figma.string('Button')}</Button>
                <Button
                  type="default"
                  icon={<EllipsisOutlined />}
                  style={{ padding: '6px 12px' }}
                />
                <Button type="default" icon={<SyncOutlined />} style={{ padding: '6px 12px' }} />
              </Space>
            </Flex>
          </Flex>
        ),
        false: (
          <Flex
            align="center"
            justify="space-between"
            gap={16}
            style={{
              width: '100%',
              maxWidth: 1242,
              background: '#fbfcfe',
              padding: '24px 32px 8px',
            }}
          >
            <Space size={16} align="center">
              <Button type="default" icon={<LeftOutlined />} style={{ padding: '6px 12px' }} />
              <span
                style={
                  {
                    fontSize: 20,
                    fontWeight: 500,
                    lineHeight: '28px',
                    color: '#132039',
                  } as CSSProperties
                }
              >
                {figma.string('PAGE TITLE')}
              </span>
              <Space size={8} align="center">
                <Badge status="processing" />
                <span
                  style={{ fontSize: 14, fontWeight: 400, lineHeight: '20px', color: '#132039' }}
                >
                  {figma.string('status')}
                </span>
              </Space>
            </Space>
          </Flex>
        ),
      }),
      默认: figma.boolean('w/toolbar', {
        true: (
          <Flex
            align="center"
            justify="space-between"
            gap={16}
            style={{
              width: '100%',
              maxWidth: 1242,
              background: '#fbfcfe',
              padding: '24px 32px 8px',
            }}
          >
            <Space size={8} align="center">
              <span
                style={
                  {
                    fontSize: 20,
                    fontWeight: 500,
                    lineHeight: '28px',
                    color: '#132039',
                  } as CSSProperties
                }
              >
                {figma.string('PAGE TITLE')}
              </span>
              <Divider type="vertical" style={{ height: 16, margin: 0, borderColor: '#e2e8f3' }} />
              <ReadOutlined style={{ fontSize: 16, color: '#132039' }} />
            </Space>
            <Flex
              align="center"
              justify="flex-end"
              gap={8}
              style={{ height: 28, flex: 1, minWidth: 0 }}
            >
              <Input
                placeholder={figma.string('Search')}
                prefix={<SearchOutlined style={{ color: '#b6c0d4', fontSize: 14 }} />}
                style={{ width: 264 }}
              />
              <Flex
                align="center"
                gap={4}
                style={{
                  border: '1px solid #cdd5e4',
                  borderRadius: 4,
                  padding: '4px 12px',
                  background: '#ffffff',
                }}
              >
                <FilterOutlined style={{ fontSize: 16, color: '#595959' }} />
                <span style={{ fontSize: 13, fontWeight: 500, color: '#132039' }}>
                  {figma.string('Filters')}
                </span>
              </Flex>
              <Space size={8}>
                <Button type="default">{figma.string('Button')}</Button>
                <Button
                  type="default"
                  icon={<EllipsisOutlined />}
                  style={{ padding: '6px 12px' }}
                />
                <Button type="default" icon={<SyncOutlined />} style={{ padding: '6px 12px' }} />
              </Space>
            </Flex>
          </Flex>
        ),
        false: (
          <Flex
            align="center"
            justify="space-between"
            gap={16}
            style={{
              width: '100%',
              maxWidth: 1242,
              background: '#fbfcfe',
              padding: '24px 32px 8px',
            }}
          >
            <Space size={8} align="center">
              <span
                style={
                  {
                    fontSize: 20,
                    fontWeight: 500,
                    lineHeight: '28px',
                    color: '#132039',
                  } as CSSProperties
                }
              >
                {figma.string('PAGE TITLE')}
              </span>
              <Divider type="vertical" style={{ height: 16, margin: 0, borderColor: '#e2e8f3' }} />
              <ReadOutlined style={{ fontSize: 16, color: '#132039' }} />
            </Space>
          </Flex>
        ),
      }),
    }),
  },
  example: ({ layout }) => <div style={{ width: '100%', boxSizing: 'border-box' }}>{layout}</div>,
});
