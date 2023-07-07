/**
 * iframe: 600
 * transform: true
 */

import { Table } from '@oceanbase/design';
import { BatchOperationBar } from '@oceanbase/ui';
import type { AlertRenderParams } from '@oceanbase/ui/es/BatchOperationBar';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export default () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedData, setSelectedData] = useState<DataType[]>([]);
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
  const content = ({ selectedRows, setSelectedRows }: AlertRenderParams) => {
    const rowSelection = {
      selectedRowKeys: selectedRows?.map(row => row?.key),
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        setSelectedRows(selectedRows);
        setSelectedData(selectedData);
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <Table
        rowKey={(row: DataType) => row.key}
        rowSelection={rowSelection}
        toolAlertRender={false}
        hiddenCancelBtn={true}
        pagination={{
          pageSize: 2,
        }}
        columns={columns}
        dataSource={selectedRows}
      />
    );
  };
  return (
    <>
      <div style={{ padding: 24 }}>
        <h2>Table</h2>
        <Table
          columns={columns}
          dataSource={data}
          toolAlertRender={false}
          hiddenCancelBtn={true}
          pagination={{
            pageSize: 2,
          }}
          rowSelection={{
            selectedRowKeys: selectedRowKeys,
            onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
              setSelectedRowKeys(selectedRowKeys);
              setSelectedData(selectedRows);
            },
          }}
        />
      </div>
      <BatchOperationBar title={'Table'} content={content} selectedRows={selectedData} />
    </>
  );
};
