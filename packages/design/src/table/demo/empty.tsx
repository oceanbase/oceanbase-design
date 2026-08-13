import React from 'react';
import { Divider, Table } from '@oceanbase/design';

const App: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
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
        dataSource={[
          { key: '0', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
        ]}
      />
    </>
  );
};

export default App;
