/**
 * iframe: 500
 * transform: true
 */
import { Button, Space, Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';
import { BatchOperationBar } from '@oceanbase/ui';
import React from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export default () => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data: DataType[] = [
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
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  const content = ({ selectedRows, setSelectedRows }) => {
    const rowSelection = {
      selectedRowKeys: selectedRows?.map(row => row?.key),
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        setSelectedRows(selectedRows);
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <Table
        rowKey={(row: DataType) => row.key}
        toolAlertRender={false}
        hiddenCancelBtn={true}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={selectedRows}
      />
    );
  };
  const alertOptionRender = ({ selectedRows, cleanSelectedRows }) => {
    return (
      <Space>
        <Button type="primary" onClick={() => console.log('selectedRows: ', selectedRows)}>
          批量操作
        </Button>
        <Button onClick={() => cleanSelectedRows()}>批量删除</Button>
      </Space>
    );
  };
  return (
    <BatchOperationBar
      title={'Table'}
      content={content}
      selectedRows={data}
      alertOptionRender={alertOptionRender}
    />
  );
};
