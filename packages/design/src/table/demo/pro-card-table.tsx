import React, { useState } from 'react';
import { Form, Radio, Switch, Table, theme } from '@oceanbase/design';
import type { RadioChangeEvent } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';
import { ProCard } from '@oceanbase/ui';

const App: React.FC = () => {
  const { token } = theme.useToken();

  // card
  const [hasBorder, setHasBorder] = useState(true);
  const [hasTitle, setHasTitle] = useState(true);
  const [hasTabs, setHasTabs] = useState(false);
  const [hasPadding, setHasPadding] = useState(false);
  const [hasData, setHasData] = useState(true);

  // table
  const [bordered, setBordered] = useState(false);
  const [innerBordered, setInnerBordered] = useState(false);
  const [pagination, setPagination] = useState(true);
  const [expandable, setExpandable] = useState(true);
  const [selectable, setSelectable] = useState(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState<string | undefined>(undefined);
  const [rowspan, setRowspan] = useState(false);

  const columns: ColumnsType<Record<string, any>> = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  // 开启 rowspan 时使用 4 行，与 demo/rowspan.tsx 数据行数一致，便于两两合并
  const rowCount = hasData ? (rowspan ? 4 : 5) : 0;
  const dataSource: Record<string, any>[] = [];
  for (let i = 1; i <= rowCount; i++) {
    dataSource.push({
      key: i,
      name: '胡彦斌' + i,
      age: 32,
      address: `西湖区湖底公园${i}号`,
    });
  }

  // 参考 card-table / dynamic-settings 的 scroll 配置
  const scroll: { x?: number | string; y?: number | string } = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = '1000px';
  }

  const tableColumns = columns.map(item => ({ ...item }));
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = 'left';
    tableColumns[tableColumns.length - 1].fixed = 'right';
  }
  // 第一列行合并，onCell 规则与 demo/rowspan.tsx 一致
  if (rowspan) {
    const rowspanOnCell: NonNullable<ColumnsType<Record<string, any>>[number]['onCell']> = (
      _,
      index
    ) => ({
      rowSpan: index! % 2 === 0 ? 2 : 0,
    });
    const firstCol = tableColumns[0];
    if (firstCol) {
      firstCol.onCell = rowspanOnCell;
    }
  }

  return (
    <div
      style={
        hasBorder
          ? {}
          : {
              backgroundColor: token.colorBgLayout,
              padding: 24,
              margin: -24,
            }
      }
    >
      <Form layout="inline">
        <Form.Item label="Card bordered" required={true}>
          <Switch
            size="small"
            value={hasBorder}
            onChange={value => {
              setHasBorder(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Card title" required={true}>
          <Switch
            size="small"
            value={hasTitle}
            onChange={value => {
              setHasTitle(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Card tabs" required={true}>
          <Switch
            size="small"
            value={hasTabs}
            onChange={value => {
              setHasTabs(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Card body horizontal padding" required={true}>
          <Switch
            size="small"
            value={hasPadding}
            onChange={value => {
              setHasPadding(value);
            }}
          />
        </Form.Item>
      </Form>
      <Form layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item label="Table bordered" required={true}>
          <Switch
            size="small"
            value={bordered}
            onChange={value => {
              setBordered(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Table inner bordered" required={true}>
          <Switch
            size="small"
            value={innerBordered}
            onChange={value => {
              setInnerBordered(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Table pagination" required={true}>
          <Switch
            size="small"
            value={pagination}
            onChange={value => {
              setPagination(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Table expandable" required={true}>
          <Switch
            size="small"
            value={expandable}
            onChange={value => {
              setExpandable(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Table selectable" required={true}>
          <Switch
            size="small"
            value={selectable}
            onChange={value => {
              setSelectable(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Table has data" required={true}>
          <Switch
            size="small"
            value={hasData}
            onChange={value => {
              setHasData(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Table rowspan" required={true}>
          <Switch size="small" checked={rowspan} onChange={setRowspan} />
        </Form.Item>
        <Form.Item label="Fixed Header" required={true}>
          <Switch size="small" checked={!!yScroll} onChange={setYScroll} />
        </Form.Item>
        <Form.Item label="Table Scroll" required={true}>
          <Radio.Group
            size="small"
            value={xScroll}
            onChange={(e: RadioChangeEvent) => setXScroll(e.target.value)}
          >
            <Radio.Button value={undefined}>Unset</Radio.Button>
            <Radio.Button value="scroll">Scroll</Radio.Button>
            <Radio.Button value="fixed">Fixed Columns</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <ProCard
        bordered={hasBorder}
        title={hasTitle ? 'Title' : ''}
        tabs={
          hasTabs
            ? {
                items: [
                  {
                    key: '1',
                    label: 'Tab 1',
                    children: `Content of Tab Pane 1`,
                  },
                  {
                    key: '2',
                    label: 'Tab 2',
                    children: `Content of Tab Pane 2`,
                  },
                  {
                    key: '3',
                    label: 'Tab 3',
                    children: `Content of Tab Pane 3`,
                  },
                ],
              }
            : undefined
        }
        bodyStyle={hasPadding ? { padding: 24 } : { padding: 0 }}
      >
        <Table
          bordered={bordered}
          innerBordered={innerBordered}
          columns={tableColumns}
          dataSource={hasData ? dataSource : []}
          rowKey={record => record.key}
          scroll={scroll}
          expandable={
            expandable
              ? {
                  expandedRowRender: () => <div>This is expanded content</div>,
                }
              : undefined
          }
          rowSelection={
            selectable
              ? {
                  selectedRowKeys: selectedRowKeys,
                  onChange: (keys: React.Key[]) => {
                    setSelectedRowKeys(keys);
                  },
                }
              : undefined
          }
          pagination={
            pagination
              ? {
                  pageSize: 5,
                }
              : false
          }
        />
      </ProCard>
    </div>
  );
};

export default App;
