import React from 'react';
import { Button, Popover, Table } from '@oceanbase/design';
import { ColumnProps } from '@oceanbase/design/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const App: React.FC = () => {
  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 50,
      address: 'London Park',
    },
    {
      key: '4',
      name: 'Jim Green',
      age: 60,
      address: 'London Park',
    },
    {
      key: '5',
      name: 'Jim Green',
      age: 70,
      address: 'London Park',
    },
  ];

  const columns: ColumnProps<DataType>[] = [
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
      sorter: true,
    },
    { title: 'Column 1', dataIndex: 'address', key: '1' },
    { title: 'Column 2', dataIndex: 'address', key: '2' },
    { title: 'Column 3', dataIndex: 'address', key: '3' },
    { title: 'Column 4', dataIndex: 'address', key: '4' },
    { title: 'Column 5', dataIndex: 'address', key: '5' },
    { title: 'Column 6', dataIndex: 'address', key: '6' },
    { title: 'Column 7', dataIndex: 'address', key: '7' },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      render: () => <a>action</a>,
    },
  ];
  return (
    <Popover
      content={
        <Table
          size="middle"
          columns={columns}
          dataSource={dataSource}
          scroll={{ x: 'max-content' }}
          pagination={{
            size: 'small',
            pageSize: 5,
            showSizeChanger: false,
          }}
        />
      }
      overlayInnerStyle={{ maxWidth: 600 }}
    >
      <Button type="primary">Hover me</Button>
    </Popover>
  );
};

export default App;
