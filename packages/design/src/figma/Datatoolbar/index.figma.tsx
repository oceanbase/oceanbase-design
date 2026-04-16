// @ts-nocheck

import type { CSSProperties } from 'react';
import { figma } from '@figma/code-connect';
import {
  FilterOutlined,
  MoreHorizontalOutlined,
  SearchOutlined,
  SyncOutlined,
} from '@oceanbase/icons';
import { Button, Filter, Flex, Input, Space } from '@oceanbase/design';
import { ListToolBar } from '@oceanbase/ui';

/**
 * Code Connect — DataToolBar（2348:3190：single line × w/search × w/more filters × w/ action group）。
 * `props.toolbar` 仅映射 Flex 矩阵；「Status」用 `Filter.Checkbox` 状态模式（options 含 `color`）；「Filters」用 `Filter.Select`；`example` 用 ListToolBar 包一层（filter={toolbar}）。
 * Page: "↵DataToolbar"
 */

// Figma: "DataToolBar" · 2348:3190
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2348-3190&m=dev
figma.connect(ListToolBar, '<FIGMA_OCEANBASE_DATATOOLBAR>', {
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
                  <Filter.Checkbox
                    label={figma.string('Status')}
                    bordered
                    value={['s1', 's2', 's3', 's4']}
                    options={[
                      { value: 's1', label: 'S1', color: '#1677ff' },
                      { value: 's2', label: 'S2', color: '#52c41a' },
                      { value: 's3', label: 'S3', color: '#faad14' },
                      { value: 's4', label: 'S4', color: '#ff4d4f' },
                      { value: 's5', label: 'S5', color: '#722ed1' },
                    ]}
                  />
                  <Filter.Select
                    label={figma.string('Filters')}
                    icon={<FilterOutlined style={{ color: '#595959', fontSize: 14 }} />}
                    bordered
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                    ]}
                  />
                </Space>
                <Space size={8}>
                  <Button type="default" size="middle">
                    {figma.string('Button')}
                  </Button>
                  <Button type="default" size="middle" icon={<MoreHorizontalOutlined />} />
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
                  <Filter.Checkbox
                    label={figma.string('Status')}
                    bordered
                    value={['s1', 's2', 's3', 's4']}
                    options={[
                      { value: 's1', label: 'S1', color: '#1677ff' },
                      { value: 's2', label: 'S2', color: '#52c41a' },
                      { value: 's3', label: 'S3', color: '#faad14' },
                      { value: 's4', label: 'S4', color: '#ff4d4f' },
                      { value: 's5', label: 'S5', color: '#722ed1' },
                    ]}
                  />
                  <Filter.Select
                    label={figma.string('Filters')}
                    icon={<FilterOutlined style={{ color: '#595959', fontSize: 14 }} />}
                    bordered
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                    ]}
                  />
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
                  <Filter.Checkbox
                    label={figma.string('Status')}
                    bordered
                    value={['s1', 's2', 's3', 's4']}
                    options={[
                      { value: 's1', label: 'S1', color: '#1677ff' },
                      { value: 's2', label: 'S2', color: '#52c41a' },
                      { value: 's3', label: 'S3', color: '#faad14' },
                      { value: 's4', label: 'S4', color: '#ff4d4f' },
                      { value: 's5', label: 'S5', color: '#722ed1' },
                    ]}
                  />
                </Space>
                <Space size={8}>
                  <Button type="default" size="middle">
                    {figma.string('Button')}
                  </Button>
                  <Button type="default" size="middle" icon={<MoreHorizontalOutlined />} />
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
                  <Filter.Checkbox
                    label={figma.string('Status')}
                    bordered
                    value={['s1', 's2', 's3', 's4']}
                    options={[
                      { value: 's1', label: 'S1', color: '#1677ff' },
                      { value: 's2', label: 'S2', color: '#52c41a' },
                      { value: 's3', label: 'S3', color: '#faad14' },
                      { value: 's4', label: 'S4', color: '#ff4d4f' },
                      { value: 's5', label: 'S5', color: '#722ed1' },
                    ]}
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
                justify="space-between"
                align="center"
                gap={8}
                style={{ width: 1000, minHeight: 28 }}
              >
                <Space size={8} align="center">
                  <Filter.Checkbox
                    label={figma.string('Status')}
                    bordered
                    value={['s1', 's2', 's3', 's4']}
                    options={[
                      { value: 's1', label: 'S1', color: '#1677ff' },
                      { value: 's2', label: 'S2', color: '#52c41a' },
                      { value: 's3', label: 'S3', color: '#faad14' },
                      { value: 's4', label: 'S4', color: '#ff4d4f' },
                      { value: 's5', label: 'S5', color: '#722ed1' },
                    ]}
                  />
                  <Filter.Select
                    label={figma.string('Filters')}
                    icon={<FilterOutlined style={{ color: '#595959', fontSize: 14 }} />}
                    bordered
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                    ]}
                  />
                </Space>
                <Space size={8}>
                  <Button type="default" size="middle">
                    {figma.string('Button')}
                  </Button>
                  <Button type="default" size="middle" icon={<MoreHorizontalOutlined />} />
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
                  <Filter.Checkbox
                    label={figma.string('Status')}
                    bordered
                    value={['s1', 's2', 's3', 's4']}
                    options={[
                      { value: 's1', label: 'S1', color: '#1677ff' },
                      { value: 's2', label: 'S2', color: '#52c41a' },
                      { value: 's3', label: 'S3', color: '#faad14' },
                      { value: 's4', label: 'S4', color: '#ff4d4f' },
                      { value: 's5', label: 'S5', color: '#722ed1' },
                    ]}
                  />
                  <Filter.Select
                    label={figma.string('Filters')}
                    icon={<FilterOutlined style={{ color: '#595959', fontSize: 14 }} />}
                    bordered
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                    ]}
                  />
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
                  <Filter.Checkbox
                    label={figma.string('Status')}
                    bordered
                    value={['s1', 's2', 's3', 's4']}
                    options={[
                      { value: 's1', label: 'S1', color: '#1677ff' },
                      { value: 's2', label: 'S2', color: '#52c41a' },
                      { value: 's3', label: 'S3', color: '#faad14' },
                      { value: 's4', label: 'S4', color: '#ff4d4f' },
                      { value: 's5', label: 'S5', color: '#722ed1' },
                    ]}
                  />
                </Space>
                <Space size={8}>
                  <Button type="default" size="middle">
                    {figma.string('Button')}
                  </Button>
                  <Button type="default" size="middle" icon={<MoreHorizontalOutlined />} />
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
                  <Filter.Checkbox
                    label={figma.string('Status')}
                    bordered
                    value={['s1', 's2', 's3', 's4']}
                    options={[
                      { value: 's1', label: 'S1', color: '#1677ff' },
                      { value: 's2', label: 'S2', color: '#52c41a' },
                      { value: 's3', label: 'S3', color: '#faad14' },
                      { value: 's4', label: 'S4', color: '#ff4d4f' },
                      { value: 's5', label: 'S5', color: '#722ed1' },
                    ]}
                  />
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
                  <Filter.Select
                    label={figma.string('Filters')}
                    icon={<FilterOutlined style={{ color: '#595959', fontSize: 14 }} />}
                    bordered
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                    ]}
                  />
                  <Space size={8}>
                    <Button type="default" size="middle">
                      {figma.string('Button')}
                    </Button>
                    <Button type="default" size="middle" icon={<MoreHorizontalOutlined />} />
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
                  <Filter.Select
                    label={figma.string('Filters')}
                    icon={<FilterOutlined style={{ color: '#595959', fontSize: 14 }} />}
                    bordered
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                    ]}
                  />
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
                    <Button type="default" size="middle" icon={<MoreHorizontalOutlined />} />
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
                  <Filter.Select
                    label={figma.string('Filters')}
                    icon={<FilterOutlined style={{ color: '#595959', fontSize: 14 }} />}
                    bordered
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                    ]}
                  />
                  <Space size={8}>
                    <Button type="default" size="middle">
                      {figma.string('Button')}
                    </Button>
                    <Button type="default" size="middle" icon={<MoreHorizontalOutlined />} />
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
                  <Filter.Select
                    label={figma.string('Filters')}
                    icon={<FilterOutlined style={{ color: '#595959', fontSize: 14 }} />}
                    bordered
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                    ]}
                  />
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
                    <Button type="default" size="middle" icon={<MoreHorizontalOutlined />} />
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
  example: ({ toolbar }) => <ListToolBar style={{ width: 1000, minHeight: 28 }} filter={toolbar} />,
});
