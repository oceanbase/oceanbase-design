import React from 'react';
import { ProTable } from '@oceanbase/ui';

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
    <ProTable headerTitle="Advanced Table" cardBordered={true} columns={columns} dataSource={[]} />
  );
};

export default App;
