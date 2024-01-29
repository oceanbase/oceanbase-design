import React, { useState } from 'react';
import { Card, Form, Radio, Switch, Table, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();

  const [hasBorder, setHasBorder] = useState(true);
  const [hasTitle, setHasTitle] = useState(true);
  const [hasPadding, setHasPadding] = useState(true);
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
  for (let i = 1; i < 100; i++) {
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
              backgroundColor: token.colorFillContent,
              padding: '40px 24px',
              margin: '-40px -24px',
            }
      }
    >
      <Form layout="inline" style={{ marginBottom: 24 }}>
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
        <Form.Item label="Card body padding" required={true}>
          <Switch
            size="small"
            value={hasPadding}
            onChange={value => {
              setHasPadding(value);
            }}
          />
        </Form.Item>
      </Form>
      <Card
        bordered={hasBorder}
        title={hasTitle ? 'Title' : ''}
        bodyStyle={
          hasPadding
            ? {}
            : {
                padding: 0,
              }
        }
      >
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey={record => record.key}
          rowSelection={{
            selectedRowKeys: selectedRowKeys,
            onChange: (keys: React.Key[]) => {
              setSelectedRowKeys(keys);
            },
          }}
          pagination={{
            pageSize: 5,
          }}
        />
      </Card>
    </div>
  );
};

export default App;
