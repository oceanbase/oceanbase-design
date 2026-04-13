// @ts-nocheck

import type { CSSProperties } from 'react';
import { figma } from '@figma/code-connect';
import {
  DownOutlined,
  EllipsisOutlined,
  FilterOutlined,
  SearchOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Button, Flex, Input, Space, Tabs } from '@oceanbase/design';

/**
 * Code Connect — PageContainer（2348:5411：collapsible × tabs × fliters）。
 * VARIANT 名与 MCP get_context_for_code_connect 一致；layout 在 props 内嵌套展开（gen-figma §3）。
 * Page: "↵PageContainer"
 */

// Figma: "PageContainer" · 2348:5411
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2348-5411&m=dev
figma.connect(Flex, '<FIGMA_OCEANBASE_PAGECONTAINER>', {
  props: {
    layout: figma.enum('collapsible', {
      True: figma.enum('tabs', {
        false: figma.enum('fliters', {
          false: (
            <Flex
              vertical
              gap={16}
              style={{
                width: 1204,
                minHeight: 720,
                background: '#ffffff',
                border: '1px solid #e2e8f3',
                borderRadius: 8,
                padding: 24,
              }}
            >
              <Flex align="center" gap={8} style={{ width: '100%' }}>
                <DownOutlined style={{ fontSize: 16, color: '#132039' }} />
                <span
                  style={
                    {
                      flex: 1,
                      fontSize: 16,
                      fontWeight: 500,
                      color: '#132039',
                      lineHeight: '24px',
                    } as CSSProperties
                  }
                >
                  {figma.string('Title')}
                </span>
                <Space size={8}>
                  <Button type="primary">{figma.string('Button')}</Button>
                  <Button type="default" color="primary" variant="outlined">
                    {figma.string('Button')}
                  </Button>
                  <Button type="default">{figma.string('Button')}</Button>
                  <Button type="default" icon={<EllipsisOutlined />} />
                </Space>
              </Flex>
              <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
            </Flex>
          ),
          true: (
            <Flex
              vertical
              style={{
                width: 1204,
                minHeight: 720,
                background: '#ffffff',
                border: '1px solid #e2e8f3',
                borderRadius: 8,
                overflow: 'hidden',
              }}
            >
              <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
            </Flex>
          ),
        }),
        true: figma.enum('fliters', {
          false: (
            <Flex
              vertical
              style={{
                width: 1204,
                minHeight: 720,
                background: '#ffffff',
                border: '1px solid #e2e8f3',
                borderRadius: 8,
                overflow: 'hidden',
              }}
            >
              <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
            </Flex>
          ),
          true: (
            <Flex
              vertical
              style={{
                width: 1204,
                minHeight: 720,
                background: '#ffffff',
                border: '1px solid #e2e8f3',
                borderRadius: 8,
                overflow: 'hidden',
              }}
            >
              <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
            </Flex>
          ),
        }),
      }),
      false: figma.enum('tabs', {
        false: figma.enum('fliters', {
          false: (
            <Flex
              vertical
              style={{
                width: 1204,
                minHeight: 720,
                background: '#ffffff',
                border: '1px solid #e2e8f3',
                borderRadius: 8,
                overflow: 'hidden',
              }}
            >
              <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
            </Flex>
          ),
          true: (
            <Flex
              vertical
              style={{
                width: 1204,
                minHeight: 720,
                background: '#ffffff',
                border: '1px solid #e2e8f3',
                borderRadius: 8,
                overflow: 'hidden',
              }}
            >
              <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
            </Flex>
          ),
        }),
        true: figma.enum('fliters', {
          false: (
            <Flex
              vertical
              style={{
                width: 1204,
                minHeight: 720,
                background: '#ffffff',
                border: '1px solid #e2e8f3',
                borderRadius: 8,
                overflow: 'hidden',
              }}
            >
              <Flex
                align="center"
                justify="space-between"
                gap={10}
                style={{
                  padding: '0 24px 16px',
                  borderBottom: '1px solid #e2e8f3',
                  width: '100%',
                }}
              >
                <Tabs
                  defaultActiveKey="2"
                  style={{ flex: 1, minWidth: 0 }}
                  items={[
                    { key: '1', label: figma.string('Tab001') },
                    { key: '2', label: figma.string('Tab002') },
                    { key: '3', label: figma.string('Tab004') },
                  ]}
                />
                <Space size={8} style={{ flexShrink: 0 }}>
                  <Button type="default">{figma.string('Button')}</Button>
                  <Button type="default" icon={<EllipsisOutlined />} />
                </Space>
              </Flex>
              <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
            </Flex>
          ),
          true: (
            <Flex
              vertical
              style={{
                width: 1204,
                minHeight: 720,
                background: '#ffffff',
                border: '1px solid #e2e8f3',
                borderRadius: 8,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  borderBottom: '1px solid #e2e8f3',
                  width: '100%',
                  padding: '0 24px',
                }}
              >
                <Tabs
                  defaultActiveKey="2"
                  items={[
                    { key: '1', label: figma.string('Tab001') },
                    { key: '2', label: figma.string('Tab002') },
                    { key: '3', label: figma.string('Tab004') },
                  ]}
                />
              </div>
              <Flex
                justify="space-between"
                align="center"
                style={{ padding: '0 24px', minHeight: 28, width: '100%' }}
              >
                <Space size={8} align="center">
                  <Input
                    placeholder={figma.string('Search')}
                    prefix={<SearchOutlined style={{ color: '#8c8c8c', fontSize: 14 }} />}
                    style={{ width: 264 }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      border: '1px solid #cdd5e4',
                      borderRadius: 4,
                      padding: '4px 12px',
                      background: '#ffffff',
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: '#1677ff',
                          marginRight: -2,
                        }}
                      />
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: '#52c41a',
                          marginRight: -2,
                        }}
                      />
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: '#faad14',
                          marginRight: -2,
                        }}
                      />
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: '#ff4d4f',
                          marginRight: -2,
                        }}
                      />
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: '#722ed1',
                        }}
                      />
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 500, color: '#132039' }}>
                      {figma.string('Status')}
                    </span>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      border: '1px solid #cdd5e4',
                      borderRadius: 4,
                      padding: '4px 12px',
                      background: '#ffffff',
                    }}
                  >
                    <FilterOutlined style={{ color: '#595959', fontSize: 14 }} />
                    <span style={{ fontSize: 13, fontWeight: 500, color: '#132039' }}>
                      {figma.string('Filters')}
                    </span>
                  </div>
                </Space>
                <Space size={8}>
                  <Button type="default">{figma.string('Button')}</Button>
                  <Button type="default" icon={<EllipsisOutlined />} />
                  <Button type="default" icon={<SyncOutlined />} />
                </Space>
              </Flex>
              <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
            </Flex>
          ),
        }),
      }),
    }),
  },
  example: ({ layout }) => <div style={{ width: '100%', boxSizing: 'border-box' }}>{layout}</div>,
});
