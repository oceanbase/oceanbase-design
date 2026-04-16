// @ts-nocheck

import type { CSSProperties } from 'react';
import { figma } from '@figma/code-connect';
import {
  DownOutlined,
  FilterOutlined,
  MoreHorizontalOutlined,
  SearchOutlined,
  SyncOutlined,
} from '@oceanbase/icons';
import { Button, Flex, Input, Space } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

/**
 * Code Connect — PageContainer（2348:5411：collapsible × tabs × fliters）。
 * 使用 @oceanbase/ui 的 PageContainer 实现；VARIANT 名与 MCP get_context_for_code_connect 一致。
 * Page: "↵PageContainer"
 */

// Figma: "PageContainer" · 2348:5411
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2348-5411&m=dev
figma.connect(PageContainer, '<FIGMA_OCEANBASE_PAGECONTAINER>', {
  props: {
    layout: figma.enum('collapsible', {
      True: figma.enum('tabs', {
        false: figma.enum('fliters', {
          false: (
            <PageContainer
              ghost={false}
              style={{
                width: 1204,
                minHeight: 720,
                background: '#ffffff',
                border: '1px solid #e2e8f3',
                borderRadius: 8,
              }}
              header={{
                title: (
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
                  </Flex>
                ),
                extra: (
                  <Space size={8}>
                    <Button type="primary">{figma.string('Button')}</Button>
                    <Button type="default" color="primary" variant="outlined">
                      {figma.string('Button')}
                    </Button>
                    <Button type="default">{figma.string('Button')}</Button>
                    <Button type="default" icon={<MoreHorizontalOutlined />} />
                  </Space>
                ),
              }}
            >
              <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
            </PageContainer>
          ),
          true: (
            <PageContainer
              ghost={false}
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
            </PageContainer>
          ),
        }),
        true: figma.enum('fliters', {
          false: (
            <PageContainer
              ghost={false}
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
            </PageContainer>
          ),
          true: (
            <PageContainer
              ghost={false}
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
            </PageContainer>
          ),
        }),
      }),
      false: figma.enum('tabs', {
        false: figma.enum('fliters', {
          false: (
            <PageContainer
              ghost={false}
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
            </PageContainer>
          ),
          true: (
            <PageContainer
              ghost={false}
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
            </PageContainer>
          ),
        }),
        true: figma.enum('fliters', {
          false: (
            <PageContainer
              ghost={false}
              style={{
                width: 1204,
                minHeight: 720,
                background: '#ffffff',
                border: '1px solid #e2e8f3',
                borderRadius: 8,
                overflow: 'hidden',
              }}
              tabList={[
                { key: '1', tab: figma.string('Tab001') },
                { key: '2', tab: figma.string('Tab002') },
                { key: '3', tab: figma.string('Tab004') },
              ]}
              tabProps={{ defaultActiveKey: '2' }}
              tabBarExtraContent={
                <Space size={8}>
                  <Button type="default">{figma.string('Button')}</Button>
                  <Button type="default" icon={<MoreHorizontalOutlined />} />
                </Space>
              }
            >
              <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
            </PageContainer>
          ),
          true: (
            <PageContainer
              ghost={false}
              style={{
                width: 1204,
                minHeight: 720,
                background: '#ffffff',
                border: '1px solid #e2e8f3',
                borderRadius: 8,
                overflow: 'hidden',
              }}
              tabList={[
                { key: '1', tab: figma.string('Tab001') },
                { key: '2', tab: figma.string('Tab002') },
                { key: '3', tab: figma.string('Tab004') },
              ]}
              tabProps={{ defaultActiveKey: '2' }}
            >
              <Flex vertical style={{ width: '100%' }}>
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
                      <Flex align="center" style={{ display: 'inline-flex' }}>
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
                      </Flex>
                      <span style={{ fontSize: 13, fontWeight: 500, color: '#132039' }}>
                        {figma.string('Status')}
                      </span>
                      <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                    </Flex>
                    <Flex
                      align="center"
                      gap={8}
                      style={{
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
                    </Flex>
                  </Space>
                  <Space size={8}>
                    <Button type="default">{figma.string('Button')}</Button>
                    <Button type="default" icon={<MoreHorizontalOutlined />} />
                    <Button type="default" icon={<SyncOutlined />} />
                  </Space>
                </Flex>
                <div style={{ flex: 1, minHeight: 400, width: '100%' }} />
              </Flex>
            </PageContainer>
          ),
        }),
      }),
    }),
  },
  example: ({ layout }) => <div>{layout}</div>,
});
