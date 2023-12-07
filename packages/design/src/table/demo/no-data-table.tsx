import { Table } from '@oceanbase/design';
import React from 'react';

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

  const dataSource = [];

  return (
    <Table columns={columns} dataSource={dataSource} components={1111111} emptyText="1111111111" />
  );
};

export default App;
