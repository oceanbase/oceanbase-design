import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider } from '@oceanbase/design';
import { ProTable } from '@oceanbase/ui';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    tooltip: 'User display name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a: { age: number }, b: { age: number }) => a.age - b.age,
    tooltip: { title: 'Age in years', type: 'info' },
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    sorter: (a: { amount: number }, b: { amount: number }) => a.amount - b.amount,
    filters: [
      { text: '>= 1000', value: 'high' },
      { text: '< 1000', value: 'low' },
    ],
    onFilter: (value: string | number | boolean, record: { amount: number }) =>
      value === 'high' ? record.amount >= 1000 : record.amount < 1000,
    tooltip: 'Amount before tax',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const dataSource = [
  { key: '1', name: 'Mike', age: 32, amount: 1200, address: '10 Downing Street' },
  { key: '2', name: 'John', age: 42, amount: 2400, address: '20 Oxford Street' },
];

describe('ProTable column tooltip', () => {
  it('should render OB Table tooltip icons consistently', () => {
    const { container } = render(
      <ConfigProvider>
        <ProTable
          search={false}
          options={false}
          pagination={false}
          columns={columns}
          dataSource={dataSource}
        />
      </ConfigProvider>
    );
    const nameHeader = container.querySelector('.ant-table-thead tr th:nth-child(1)');
    const ageHeader = container.querySelector('.ant-table-thead tr th:nth-child(2)');
    const amountHeader = container.querySelector('.ant-table-thead tr th:nth-child(3)');
    expect(nameHeader?.querySelector('.ant-table-column-title-tooltip-icon')).toBeTruthy();
    expect(ageHeader?.querySelector('.ant-table-column-title-tooltip-icon')).toBeTruthy();
    expect(amountHeader?.querySelector('.ant-table-column-title-tooltip-icon')).toBeTruthy();
    expect(container.querySelector('.ant-pro-core-label-tip-icon')).toBeFalsy();
  });
});
