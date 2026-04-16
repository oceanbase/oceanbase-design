// @ts-nocheck

import { DownOutlined } from '@ant-design/icons';
import { figma } from '@figma/code-connect';
import {
  Badge,
  Button,
  Checkbox,
  Progress,
  Space,
  Table,
  Tag,
  Tooltip,
  Typography,
} from '@oceanbase/design';
import { ObTenantOutlined } from '@oceanbase/icons';

/**
 * Code Connect — Table 页：TableCell / TableGroup / TableHeader。
 * Default 单元格：unfold × checkbox × icon × desc 按 Figma 组件属性嵌套映射。
 *
 * 编写规则见 `skills/figma-code-connect/gen-figma.md`（§3.2 不在模块顶层声明示例用函数/const JSX；§3.4 example 优先直接返回带 DOM 的组件）。
 *
 * 与 `figma/Table/demo/*` 的关系：演示页为交互可读性，Default / TableHeader 可能采用「语义线性组合」；
 * 此处仍以 Figma 变体树为准。若 unfold=true 下部分 checkbox 真假分支生成的片段相同，属变体设计冗余，
 * 需改映射时应先在 Figma 区分视觉再同步本文件。
 */

// Figma: "TableCell" · 2324:9665
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2324-9665&m=dev
figma.connect(Table.Column, '<FIGMA_OCEANBASE_TABLECELL>', {
  props: {
    align: figma.enum('position', {
      left: 'left',
      center: 'center',
      right: 'right',
    }),
    cellRender: figma.enum('element', {
      Default: figma.boolean('unfold', {
        true: figma.boolean('checkbox', {
          true: figma.boolean('icon', {
            true: figma.boolean('desc', {
              true: () => (
                <Space size={4} align="start">
                  <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  <Checkbox />
                  <ObTenantOutlined style={{ fontSize: 14, color: '#595959' }} />
                  <Space direction="vertical" size={0}>
                    <Typography.Text>{figma.string('Title')}</Typography.Text>
                    <Typography.Text type="secondary">{figma.string('Desc')}</Typography.Text>
                  </Space>
                </Space>
              ),
              false: () => (
                <Space size={4} align="start">
                  <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  <Checkbox />
                  <ObTenantOutlined style={{ fontSize: 14, color: '#595959' }} />
                  <Typography.Text>{figma.string('Title')}</Typography.Text>
                </Space>
              ),
            }),
            false: figma.boolean('desc', {
              true: () => (
                <Space size={4} align="start">
                  <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  <Checkbox />
                  <Space direction="vertical" size={0}>
                    <Typography.Text>{figma.string('Title')}</Typography.Text>
                    <Typography.Text type="secondary">{figma.string('Desc')}</Typography.Text>
                  </Space>
                </Space>
              ),
              false: () => (
                <Space size={4} align="start">
                  <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  <Checkbox />
                  <Typography.Text>{figma.string('Title')}</Typography.Text>
                </Space>
              ),
            }),
          }),
          false: figma.boolean('icon', {
            true: figma.boolean('desc', {
              true: () => (
                <Space size={4} align="start">
                  <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  <Checkbox />
                  <ObTenantOutlined style={{ fontSize: 14, color: '#595959' }} />
                  <Space direction="vertical" size={0}>
                    <Typography.Text>{figma.string('Title')}</Typography.Text>
                    <Typography.Text type="secondary">{figma.string('Desc')}</Typography.Text>
                  </Space>
                </Space>
              ),
              false: () => (
                <Space size={4} align="start">
                  <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  <Checkbox />
                  <ObTenantOutlined style={{ fontSize: 14, color: '#595959' }} />
                  <Typography.Text>{figma.string('Title')}</Typography.Text>
                </Space>
              ),
            }),
            false: figma.boolean('desc', {
              true: () => (
                <Space size={4} align="start">
                  <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  <Checkbox />
                  <Space direction="vertical" size={0}>
                    <Typography.Text>{figma.string('Title')}</Typography.Text>
                    <Typography.Text type="secondary">{figma.string('Desc')}</Typography.Text>
                  </Space>
                </Space>
              ),
              false: () => (
                <Space size={4} align="start">
                  <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                  <Checkbox />
                  <Typography.Text>{figma.string('Title')}</Typography.Text>
                </Space>
              ),
            }),
          }),
        }),
        false: figma.boolean('checkbox', {
          true: figma.boolean('icon', {
            true: figma.boolean('desc', {
              true: () => (
                <Space size={4} align="start">
                  <Checkbox />
                  <ObTenantOutlined style={{ fontSize: 14, color: '#595959' }} />
                  <Space direction="vertical" size={0}>
                    <Typography.Text>{figma.string('Title')}</Typography.Text>
                    <Typography.Text type="secondary">{figma.string('Desc')}</Typography.Text>
                  </Space>
                </Space>
              ),
              false: () => (
                <Space size={4} align="start">
                  <Checkbox />
                  <ObTenantOutlined style={{ fontSize: 14, color: '#595959' }} />
                  <Typography.Text>{figma.string('Title')}</Typography.Text>
                </Space>
              ),
            }),
            false: figma.boolean('desc', {
              true: () => (
                <Space size={4} align="start">
                  <Checkbox />
                  <Space direction="vertical" size={0}>
                    <Typography.Text>{figma.string('Title')}</Typography.Text>
                    <Typography.Text type="secondary">{figma.string('Desc')}</Typography.Text>
                  </Space>
                </Space>
              ),
              false: () => (
                <Space size={4} align="start">
                  <Checkbox />
                  <Typography.Text>{figma.string('Title')}</Typography.Text>
                </Space>
              ),
            }),
          }),
          false: figma.boolean('icon', {
            true: figma.boolean('desc', {
              true: () => (
                <Space size={4} align="start">
                  <ObTenantOutlined style={{ fontSize: 14, color: '#595959' }} />
                  <Space direction="vertical" size={0}>
                    <Typography.Text>{figma.string('Title')}</Typography.Text>
                    <Typography.Text type="secondary">{figma.string('Desc')}</Typography.Text>
                  </Space>
                </Space>
              ),
              false: () => (
                <Space size={4} align="start">
                  <ObTenantOutlined style={{ fontSize: 14, color: '#595959' }} />
                  <Typography.Text>{figma.string('Title')}</Typography.Text>
                </Space>
              ),
            }),
            false: figma.boolean('desc', {
              true: () => (
                <Space direction="vertical" size={0}>
                  <Typography.Text>{figma.string('Title')}</Typography.Text>
                  <Typography.Text type="secondary">{figma.string('Desc')}</Typography.Text>
                </Space>
              ),
              false: () => <Typography.Text>{figma.string('Title')}</Typography.Text>,
            }),
          }),
        }),
      }),
      Tag: () => (
        <Space size={4}>
          <Tag color="error">tag</Tag>
          <Tag color="success">tag</Tag>
          <Tag color="processing">tag</Tag>
        </Space>
      ),
      Status: () => (
        <Space size={8} align="center">
          <Badge status="processing" text="status" />
        </Space>
      ),
      Process: () => (
        <Space size={8} align="center">
          <Progress percent={50} showInfo={false} style={{ width: 120 }} />
          <Typography.Text>50%</Typography.Text>
        </Space>
      ),
      Actions: () => (
        <Space size={8}>
          <Button type="primary" ghost>
            Button
          </Button>
          <Button>Button</Button>
          <Button icon={<Typography.Text>⋯</Typography.Text>} />
        </Space>
      ),
    }),
  },
  example: ({ align, cellRender }) => (
    <Table
      dataSource={[{ key: 'r1', v: '' }]}
      pagination={false}
      columns={[{ title: '列标题', dataIndex: 'v', key: 'v', align, render: cellRender }]}
    />
  ),
});

// Figma: "TableGroup" · 2324:9563
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2324-9563&m=dev
figma.connect(Table, '<FIGMA_OCEANBASE_TABLEGROUP>', {
  props: {
    body: figma.enum('type', {
      表头: (
        <Table
          pagination={false}
          columns={[
            { title: 'Title', dataIndex: 'c1', key: 'c1' },
            { title: 'Title', dataIndex: 'c2', key: 'c2', align: 'center' },
            { title: 'Title', dataIndex: 'c3', key: 'c3', align: 'center' },
            { title: 'Title', dataIndex: 'c4', key: 'c4', align: 'center' },
            { title: 'Title', dataIndex: 'c5', key: 'c5', align: 'right' },
          ]}
          dataSource={[]}
        />
      ),
      单元格: (
        <Table
          pagination={false}
          showHeader={false}
          columns={[
            {
              key: 'c1',
              render: () => (
                <Space direction="vertical" size={0}>
                  <Typography.Text>{figma.string('Title')}</Typography.Text>
                  <Typography.Text type="secondary">{figma.string('Desc')}</Typography.Text>
                </Space>
              ),
            },
            {
              key: 'c2',
              render: () => (
                <Space align="start">
                  <Space direction="vertical" size={0}>
                    <Typography.Text>{figma.string('Title')}</Typography.Text>
                    <Typography.Text type="secondary">{figma.string('Desc')}</Typography.Text>
                  </Space>
                </Space>
              ),
            },
            { key: 'c3', dataIndex: 'plain' },
            {
              key: 'c4',
              align: 'center',
              render: () => (
                <Space size={4}>
                  <Tag color="error">tag</Tag>
                  <Tag color="success">tag</Tag>
                  <Tag color="processing">tag</Tag>
                </Space>
              ),
            },
            {
              key: 'c5',
              align: 'right',
              render: () => (
                <Space>
                  <Button type="primary" ghost>
                    Button
                  </Button>
                  <Button>Button</Button>
                  <Button icon={<Typography.Text>⋯</Typography.Text>} />
                </Space>
              ),
            },
          ]}
          dataSource={[{ key: 'row', plain: figma.string('Title') }]}
        />
      ),
      翻页器: (
        <Table
          columns={[{ title: 'Title', dataIndex: 'a', key: 'a' }]}
          dataSource={[{ key: '1', a: '—' }]}
          pagination={{
            total: 50,
            current: 1,
            pageSize: 10,
            showSizeChanger: true,
            showTotal: total => 'Total ' + total + ' items',
            pageSizeOptions: ['10', '20', '50'],
          }}
        />
      ),
      翻页器2: (
        <Table
          columns={[{ title: 'Title', dataIndex: 'a', key: 'a' }]}
          dataSource={[{ key: '1', a: '—' }]}
          pagination={{
            total: 1000,
            current: 7,
            pageSize: 10,
            showSizeChanger: true,
            showTotal: total => 'Total ' + total + ' items',
            pageSizeOptions: ['10', '20', '50'],
          }}
        />
      ),
    }),
  },
  example: ({ body }) => <div>{body}</div>,
});

// Figma: "TableHeader" · 2324:9582
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2324-9582&m=dev
figma.connect(Table.Column, '<FIGMA_OCEANBASE_TABLEHEADER>', {
  props: {
    align: figma.enum('position', {
      left: 'left',
      center: 'center',
      right: 'right',
    }),
    sortEnabled: figma.boolean('sort', {
      true: true,
      false: false,
    }),
    titleRendered: figma.boolean('unfold', {
      true: figma.boolean('checkbox', {
        true: figma.boolean('info', {
          true: (
            <Space size={4}>
              <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
              <Checkbox />
              <Space size={4}>
                <span>{figma.string('Title')}</span>
                <Tooltip title="帮助说明">
                  <Typography.Link>ⓘ</Typography.Link>
                </Tooltip>
              </Space>
            </Space>
          ),
          false: (
            <Space size={4}>
              <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
              <Checkbox />
              <span>{figma.string('Title')}</span>
            </Space>
          ),
        }),
        false: figma.boolean('info', {
          true: (
            <Space size={4}>
              <Checkbox />
              <Space size={4}>
                <span>{figma.string('Title')}</span>
                <Tooltip title="帮助说明">
                  <Typography.Link>ⓘ</Typography.Link>
                </Tooltip>
              </Space>
            </Space>
          ),
          false: (
            <Space size={4}>
              <Checkbox />
              <span>{figma.string('Title')}</span>
            </Space>
          ),
        }),
      }),
      false: figma.boolean('checkbox', {
        true: figma.boolean('info', {
          true: (
            <Space size={4}>
              <Space size={4}>
                <span>{figma.string('Title')}</span>
                <Tooltip title="帮助说明">
                  <Typography.Link>ⓘ</Typography.Link>
                </Tooltip>
              </Space>
            </Space>
          ),
          false: <span>{figma.string('Title')}</span>,
        }),
        false: figma.boolean('info', {
          true: (
            <Space size={4}>
              <span>{figma.string('Title')}</span>
              <Tooltip title="帮助说明">
                <Typography.Link>ⓘ</Typography.Link>
              </Tooltip>
            </Space>
          ),
          false: <span>{figma.string('Title')}</span>,
        }),
      }),
    }),
  },
  example: ({ titleRendered, align, sortEnabled }) => (
    <Table
      dataSource={[{ key: '1', field: '—' }]}
      pagination={false}
      columns={[
        {
          title: titleRendered,
          dataIndex: 'field',
          key: 'field',
          align,
          sorter: sortEnabled,
        },
      ]}
    />
  ),
});
