import { Button, Table } from '@oceanbase/design';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>(['4', '5']);
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '3',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '4',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '5',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '6',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '7',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '8',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

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

  const toolOptionsRender = (action: any) => {
    return [<Button>批量删除</Button>, <Button>批量更新</Button>, <Button>批量重启</Button>];
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
