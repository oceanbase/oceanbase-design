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
  for (let i = 1; i < 100; i++) {
    dataSource.push({
      key: i,
      name: '胡彦斌' + i,
      age: 32,
      address: `西湖区湖底公园${i}号`,
    });
  }

  return <Table columns={columns} dataSource={dataSource} />;
};

export default App;
