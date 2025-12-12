import React from 'react';
import { Button } from '@oceanbase/design';
import { ProTable } from '@oceanbase/ui';

const App: React.FC = () => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
    },
    {
      title: '链接',
      dataIndex: 'link',
      render: (text: string, record: any) => {
        return (
          <a href={record.link} target="_blank" rel="noopener noreferrer">
            链接
          </a>
        );
      },
    },
  ];

  const dataSource = [];
  for (let i = 1; i < 100; i++) {
    dataSource.push({
      key: i,
      name: '胡彦斌' + i,
      age: 32,
      address: `西湖区湖底公园${i}号`,
      link: 'https://www.oceanbase.com',
    });
  }

  return (
    <ProTable
      headerTitle="高级表格"
      cardBordered={true}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default App;
