import React from 'react';
import { Card, Divider, Table, theme } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';

interface DataType {
  key: string;
  name: string;
  money: string;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
    align: 'right',
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
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sydney No. 1 Lake Park',
  },
];

const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <>
      <Table columns={columns} dataSource={data} innerBordered />
      <Divider>with Card</Divider>
      <div
        style={{
          padding: 24,
          borderRadius: token.borderRadiusLG,
          backgroundColor: token.colorBgLayout,
        }}
      >
        <Card bordered={false} bodyStyle={{ padding: 0 }}>
          <Table columns={columns} dataSource={data} innerBordered />
        </Card>
      </div>
    </>
  );
};

export default App;
