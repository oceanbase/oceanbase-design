import React from 'react';
import { Button, Space, Table } from '@oceanbase/design';
import { EllipsisOutlined } from '@oceanbase/icons';

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
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text: string, record: any) => {
        return (
          <Space>
            <Button size="middle">Edit</Button>
            <Button shape="circle">Edit</Button>
            <Button shape="round">Edit</Button>
            <Button icon={<EllipsisOutlined />}></Button>
            <Button shape="circle" icon={<EllipsisOutlined />}></Button>
            <Button shape="round" icon={<EllipsisOutlined />}></Button>
          </Space>
        );
      },
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
