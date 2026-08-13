import React from 'react';
import { Table } from '@oceanbase/design';

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

  const dataSource = [];
  for (let i = 1; i < 100; i++) {
    dataSource.push({
      key: i,
      name: 'John Brown' + i,
      age: 32,
      address: `New York No. ${i} Lake Park`,
    });
  }

  return <Table columns={columns} dataSource={dataSource} />;
};

export default App;
