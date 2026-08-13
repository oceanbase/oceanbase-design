import { Button, Table } from '@oceanbase/design';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>(['4', '5']);
  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '5',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '6',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '7',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '8',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
  ];

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

  const toolOptionsRender = (action: any) => {
    return [
      <Button>Batch Delete</Button>,
      <Button>Batch Update</Button>,
      <Button>Batch Restart</Button>,
    ];
  };

  const toolSelectedContent = (selectedRowKeys: any, selectedRows: any) => {
    return <Table columns={columns} dataSource={selectedRows} pagination={false} />;
  };

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      toolOptionsRender={toolOptionsRender}
      toolSelectedContent={toolSelectedContent}
      rowSelection={{
        selectedRowKeys: selectedRowKeys,
        onChange: (keys: React.Key[]) => {
          setSelectedRowKeys(keys);
        },
      }}
    />
  );
};

export default App;
