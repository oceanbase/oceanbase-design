import React from 'react';
import { Button, Space, Table } from '@oceanbase/design';
import { EllipsisOutlined } from '@oceanbase/icons';

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
    {
      title: '操作',
      dataIndex: 'action',
      render: (text: string, record: any) => {
        return (
          <Space>
            <Button size="middle">编辑</Button>
            <Button shape="circle">编辑</Button>
            <Button shape="round">编辑</Button>
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
      name: '胡彦斌' + i,
      age: 32,
      address: `西湖区湖底公园${i}号`,
    });
  }

  return <Table columns={columns} dataSource={dataSource} />;
};

export default App;
