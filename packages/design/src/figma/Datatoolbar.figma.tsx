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
import { Button, Flex, Input, Space } from '@oceanbase/design';

/**
 * Code Connect — DataToolBar（2348:3190：single line × w/search × w/more filters × w/ action group）。
 * 变体矩阵在 props 内嵌套展开；example 仅包一层根节点（gen-figma §4）。
 * Page: "↵DataToolbar"
 */

// Figma: "DataToolBar" · 2348:3190
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2348-3190&m=dev
figma.connect(Flex, '<FIGMA_OCEANBASE_DATATOOLBAR>', {
  props: {
    toolbar: figma.enum('single line', {
      yes: figma.boolean('w/search', {
        true: figma.boolean('w/more filters', {
          true: figma.boolean('w/ action group', {
            true: (
              <Flex
                justify="space-between"
                align="center"
                gap={8}
                style={{ width: 1000, minHeight: 28 }}
              >
                <Space size={8} align="center">
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
                        style={{ width: 8, height: 8, borderRadius: '50%', background: '#722ed1' }}
                      />
                    </span>
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
                  <Button type="default" size="middle">
                    {figma.string('Button')}
                  </Button>
                  <Button type="default" size="middle" icon={<EllipsisOutlined />} />
                  <Button type="default" size="middle" icon={<SyncOutlined />} />
                </Space>
              </Flex>
            ),
            false: (
              <Flex
                justify="space-between"
                align="center"
                gap={8}
                style={{ width: 1000, minHeight: 28 }}
              >
                <Space size={8} align="center">
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
                        style={{ width: 8, height: 8, borderRadius: '50%', background: '#722ed1' }}
                      />
                    </span>
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
              </Flex>
            ),
          }),
          false: figma.boolean('w/ action group', {
            true: (
              <Flex
                justify="space-between"
                align="center"
                gap={8}
                style={{ width: 1000, minHeight: 28 }}
              >
                <Space size={8} align="center">
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
                        style={{ width: 8, height: 8, borderRadius: '50%', background: '#722ed1' }}
                      />
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 500, color: '#132039' }}>
                      {figma.string('Status')}
                    </span>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                </Space>
                <Space size={8}>
                  <Button type="default" size="middle">
                    {figma.string('Button')}
                  </Button>
                  <Button type="default" size="middle" icon={<EllipsisOutlined />} />
                  <Button type="default" size="middle" icon={<SyncOutlined />} />
                </Space>
              </Flex>
            ),
            false: (
              <Flex
                justify="space-between"
                align="center"
                gap={8}
                style={{ width: 1000, minHeight: 28 }}
              >
                <Space size={8} align="center">
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
                        style={{ width: 8, height: 8, borderRadius: '50%', background: '#722ed1' }}
                      />
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 500, color: '#132039' }}>
                      {figma.string('Status')}
                    </span>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                </Space>
              </Flex>
            ),
          }),
        }),
        false: figma.boolean('w/more filters', {
          true: figma.boolean('w/ action group', {
            true: (
              <Flex
                justify="space-between"
                align="center"
                gap={8}
                style={{ width: 1000, minHeight: 28 }}
              >
                <Space size={8} align="center">
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
                        style={{ width: 8, height: 8, borderRadius: '50%', background: '#722ed1' }}
                      />
                    </span>
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
                  <Button type="default" size="middle">
                    {figma.string('Button')}
                  </Button>
                  <Button type="default" size="middle" icon={<EllipsisOutlined />} />
                  <Button type="default" size="middle" icon={<SyncOutlined />} />
                </Space>
              </Flex>
            ),
            false: (
              <Flex
                justify="space-between"
                align="center"
                gap={8}
                style={{ width: 1000, minHeight: 28 }}
              >
                <Space size={8} align="center">
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
                        style={{ width: 8, height: 8, borderRadius: '50%', background: '#722ed1' }}
                      />
                    </span>
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
              </Flex>
            ),
          }),
          false: figma.boolean('w/ action group', {
            true: (
              <Flex
                justify="space-between"
                align="center"
                gap={8}
                style={{ width: 1000, minHeight: 28 }}
              >
                <Space size={8} align="center">
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
                        style={{ width: 8, height: 8, borderRadius: '50%', background: '#722ed1' }}
                      />
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 500, color: '#132039' }}>
                      {figma.string('Status')}
                    </span>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                </Space>
                <Space size={8}>
                  <Button type="default" size="middle">
                    {figma.string('Button')}
                  </Button>
                  <Button type="default" size="middle" icon={<EllipsisOutlined />} />
                  <Button type="default" size="middle" icon={<SyncOutlined />} />
                </Space>
              </Flex>
            ),
            false: (
              <Flex
                justify="space-between"
                align="center"
                gap={8}
                style={{ width: 1000, minHeight: 28 }}
              >
                <Space size={8} align="center">
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
                        style={{ width: 8, height: 8, borderRadius: '50%', background: '#722ed1' }}
                      />
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 500, color: '#132039' }}>
                      {figma.string('Status')}
                    </span>
                    <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  </Flex>
                </Space>
              </Flex>
            ),
          }),
        }),
      }),
      no: figma.boolean('w/search', {
        true: figma.boolean('w/more filters', {
          true: figma.boolean('w/ action group', {
            true: (
              <Flex
                justify="flex-end"
                align="center"
                gap={8}
                style={{ width: 1000, minHeight: 28 }}
              >
                <Space size={8} align="center">
                  <Input
                    placeholder={figma.string('Search')}
                    prefix={<SearchOutlined style={{ color: '#b6c0d4', fontSize: 14 }} />}
                    style={{ width: 264 }}
                  />
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
                  <Space size={8}>
                    <Button type="default" size="middle">
                      {figma.string('Button')}
                    </Button>
                    <Button type="default" size="middle" icon={<EllipsisOutlined />} />
                    <Button type="default" size="middle" icon={<SyncOutlined />} />
                  </Space>
                </Space>
              </Flex>
            ),
            false: (
              <Flex
                justify="flex-end"
                align="center"
                gap={8}
                style={{ width: 1000, minHeight: 28 }}
              >
                <Space size={8} align="center">
                  <Input
                    placeholder={figma.string('Search')}
                    prefix={<SearchOutlined style={{ color: '#b6c0d4', fontSize: 14 }} />}
                    style={{ width: 264 }}
                  />
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
              </Flex>
            ),
          }),
          false: figma.boolean('w/ action group', {
            true: (
              <Flex
                justify="flex-end"
                align="center"
                gap={8}
                style={{ width: 1000, minHeight: 28 }}
              >
                <Space size={8} align="center">
                  <Input
                    placeholder={figma.string('Search')}
                    prefix={<SearchOutlined style={{ color: '#b6c0d4', fontSize: 14 }} />}
                    style={{ width: 264 }}
                  />
                  <Space size={8}>
                    <Button type="default" size="middle">
                      {figma.string('Button')}
                    </Button>
                    <Button type="default" size="middle" icon={<EllipsisOutlined />} />
                    <Button type="default" size="middle" icon={<SyncOutlined />} />
                  </Space>
                </Space>
              </Flex>
            ),
            false: (
              <Flex
                justify="flex-end"
                align="center"
                gap={8}
                style={{ width: 1000, minHeight: 28 }}
              >
                <Space size={8} align="center">
                  <Input
                    placeholder={figma.string('Search')}
                    prefix={<SearchOutlined style={{ color: '#b6c0d4', fontSize: 14 }} />}
                    style={{ width: 264 }}
                  />
                </Space>
              </Flex>
            ),
          }),
        }),
        false: figma.boolean('w/more filters', {
          true: figma.boolean('w/ action group', {
            true: (
              <Flex
                justify="flex-end"
                align="center"
                gap={8}
                style={{ width: 1000, minHeight: 28 }}
              >
                <Space size={8} align="center">
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
                  <Space size={8}>
                    <Button type="default" size="middle">
                      {figma.string('Button')}
                    </Button>
                    <Button type="default" size="middle" icon={<EllipsisOutlined />} />
                    <Button type="default" size="middle" icon={<SyncOutlined />} />
                  </Space>
                </Space>
              </Flex>
            ),
            false: (
              <Flex
                justify="flex-end"
                align="center"
                gap={8}
                style={{ width: 1000, minHeight: 28 }}
              >
                <Space size={8} align="center">
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
              </Flex>
            ),
          }),
          false: figma.boolean('w/ action group', {
            true: (
              <Flex
                justify="flex-end"
                align="center"
                gap={8}
                style={{ width: 1000, minHeight: 28 }}
              >
                <Space size={8} align="center">
                  <Space size={8}>
                    <Button type="default" size="middle">
                      {figma.string('Button')}
                    </Button>
                    <Button type="default" size="middle" icon={<EllipsisOutlined />} />
                    <Button type="default" size="middle" icon={<SyncOutlined />} />
                  </Space>
                </Space>
              </Flex>
            ),
            false: (
              <Flex
                justify="flex-end"
                align="center"
                gap={8}
                style={{ width: 1000, minHeight: 28 }}
              >
                <span style={{ fontSize: 13, color: '#132039' }}> </span>
              </Flex>
            ),
          }),
        }),
      }),
    }),
  },
  example: ({ toolbar }) => (
    <div
      style={
        {
          width: '100%',
          maxWidth: 1000,
          boxSizing: 'border-box',
        } as CSSProperties
      }
    >
      {toolbar}
    </div>
  ),
});
