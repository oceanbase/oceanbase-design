import React, { useState } from 'react';
import { Form, Switch, Table, theme } from '@oceanbase/design';
import { ProCard } from '@oceanbase/ui';

const App: React.FC = () => {
  const { token } = theme.useToken();

  // card
  const [hasBorder, setHasBorder] = useState(true);
  const [hasTitle, setHasTitle] = useState(true);
  const [hasTabs, setHasTabs] = useState(false);
  const [hasPadding, setHasPadding] = useState(false);

  // table
  const [bordered, setBordered] = useState(false);
  const [innerBordered, setInnerBordered] = useState(false);
  const [pagination, setPagination] = useState(true);
  const [expandable, setExpandable] = useState(true);
  const [selectable, setSelectable] = useState(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const columns = [
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

  const dataSource = [];
  for (let i = 1; i <= 5; i++) {
    dataSource.push({
      key: i,
      name: '胡彦斌' + i,
      age: 32,
      address: `西湖区湖底公园${i}号`,
    });
  }

  return (
    <div
      style={
        hasBorder
          ? {}
          : {
              backgroundColor: token.colorBgLayout,
              padding: '40px 24px',
              margin: '-40px -24px',
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
          columns={columns}
          dataSource={dataSource}
          rowKey={record => record.key}
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
