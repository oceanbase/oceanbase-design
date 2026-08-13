import React from 'react';
import { Table } from '@oceanbase/design';
import type { TableColumnsType } from '@oceanbase/design';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  amount: number;
  address: string;
}

const dataSource: DataType[] = [
  { key: '1', name: 'Mike', age: 32, amount: 1200, address: '10 Downing Street' },
  { key: '2', name: 'John', age: 42, amount: 2400, address: '20 Oxford Street' },
  { key: '3', name: 'Jane', age: 28, amount: 800, address: '30 Baker Street' },
];

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    tooltip: 'User display name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
    tooltip: { title: 'Age in years', type: 'info' },
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    sorter: (a, b) => a.amount - b.amount,
    filters: [
      { text: '>= 1000', value: 'high' },
      { text: '< 1000', value: 'low' },
    ],
    onFilter: (value, record) => (value === 'high' ? record.amount >= 1000 : record.amount < 1000),
    tooltip: 'Amount before tax',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    tooltip: (
      <div>
        Address help, <b>ReactNode</b> is supported
      </div>
    ),
  },
];

const App: React.FC = () => <Table columns={columns} dataSource={dataSource} pagination={false} />;

export default App;
