import React from 'react';
import { Card, Table } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

export default () => {
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
      address: 'New York No. 1 Lake Park',
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
      address: 'New York No. 1 Lake Park',
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
      address: 'New York No. 1 Lake Park',
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
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '9',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '10',
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake Park',
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
  return (
    <PageContainer>
      <Card
        tabList={[
          {
            tab: 'Basic Info',
            key: 'base',
          },
          {
            tab: 'Details',
            key: 'info',
          },
        ]}
      >
        <Table columns={columns} dataSource={dataSource} />
      </Card>
    </PageContainer>
  );
};
