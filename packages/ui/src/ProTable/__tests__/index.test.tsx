import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, Table } from '@oceanbase/design';
import { ProTable } from '@oceanbase/ui';
import type { ProTableProps } from '@oceanbase/ui';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
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

const dataSource = [];
for (let i = 1; i < 100; i++) {
  dataSource.push({
    key: i,
    name: `John ${i}`,
    age: 32,
    address: `${i} Road, Hangzhou, Zhejiang Province`,
  });
}

export const ProTableTest: React.FC<ProTableProps<any, any>> = props => (
  <ProTable dataSource={dataSource} columns={columns} {...props} />
);

describe('ProTable', () => {
  it('render', () => {
    const { container, asFragment } = render(<ProTableTest />);

    expect(container.querySelector('.ant-pagination')).toBeTruthy();

    // query form requiredMark should be false by default
    expect(container.querySelector('.ant-form-item-optional')).toBeFalsy();

    // Table style should work
    // judge by table heade background color
    expect(
      getComputedStyle(container.querySelector('.ant-table-thead .ant-table-cell')).backgroundColor
    ).toBe('rgb(255, 255, 255)');

    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('default pagination should work', () => {
    const { container, asFragment } = render(<ProTableTest />);
    // pagination.showTotal
    expect(container.querySelector('.ant-pagination-total-text').textContent).toBe('99 in Total');
    // pagination.showSizeChanger
    expect(container.querySelector('.ant-pagination-options')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('ConfigProvider pagination should work', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        pagination={{
          showTotal: undefined,
          showSizeChanger: false,
        }}
      >
        <ProTableTest />
      </ConfigProvider>
    );
    // pagination.showTotal
    expect(container.querySelector('.ant-pagination-total-text')).toBeFalsy();
    // pagination.showSizeChanger
    expect(container.querySelector('.ant-pagination-options')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
