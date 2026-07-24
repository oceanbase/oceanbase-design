import React from 'react';
import { Button, Space } from '@oceanbase/design';
import { EllipsisOutlined } from '@oceanbase/icons';
import { ProTable } from '@oceanbase/ui';

const App: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Link',
      dataIndex: 'link',
      render: (text: string, record: any) => {
        return (
          <a href={record.link} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        );
      },
    },
    {
      title: 'Action',
      key: 'action',
      sorter: true,
      render: () => (
        <Space>
          <Button>Delete</Button>
          <Button icon={<EllipsisOutlined />} />
        </Space>
      ),
    },
  ];

  const dataSource = [];
  for (let i = 1; i < 100; i++) {
    dataSource.push({
      key: i,
      name: 'John Brown' + i,
      age: 32,
      address: `New York No. ${i} Lake Park`,
      link: 'https://www.oceanbase.com',
    });
  }

  return (
    <ProTable
      headerTitle="Advanced Table"
      cardBordered={true}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default App;
