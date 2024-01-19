import React, { useState } from 'react';
import { Card, Form, Radio, Table } from '@oceanbase/design';

const App: React.FC = () => {
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
    <div>
      <Form layout="inline" style={{ marginBottom: 24 }}>
        <Form.Item label="Card title" required={true}>
          <Radio.Group
            value={hasTitle}
            onChange={e => {
              setHasTitle(e.target.value);
            }}
          >
            <Radio.Button value={true}>Has title</Radio.Button>
            <Radio.Button value={false}>No title </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Card body padding" required={true}>
          <Radio.Group
            value={hasPadding}
            onChange={e => {
              setHasPadding(e.target.value);
            }}
          >
            <Radio.Button value={true}>Has padding</Radio.Button>
            <Radio.Button value={false}>No padding </Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Card
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
