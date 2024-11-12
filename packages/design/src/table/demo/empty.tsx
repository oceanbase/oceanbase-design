import React from 'react';
import { Divider, Table } from '@oceanbase/design';

const App: React.FC = () => {
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

  return (
    <>
      <Divider>Empty Table</Divider>
      <Table columns={columns} dataSource={[]} />
      <Divider>Nested Empty Table</Divider>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: () => <Table columns={columns} dataSource={[]} />,
          defaultExpandedRowKeys: ['0'],
        }}
        dataSource={[{ key: '0', name: '胡彦斌', age: 32, address: `西湖区湖底公园` }]}
      />
    </>
  );
};

export default App;
