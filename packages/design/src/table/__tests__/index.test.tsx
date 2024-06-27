import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, Table } from '@oceanbase/design';
import type { TableProps } from '@oceanbase/design';

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

export const TableTest: React.FC<TableProps<any>> = props => (
  <Table dataSource={dataSource} columns={columns} {...props} />
);

describe('Table', () => {
  it('render', () => {
    const { container, asFragment } = render(<TableTest />);
    expect(container.querySelector('.ant-pagination')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('hideOnSinglePage should be false by default', () => {
    const { container, asFragment } = render(<TableTest dataSource={dataSource.slice(0, 10)} />);
    expect(container.querySelector('.ant-pagination')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('hideOnSinglePage could be changed', () => {
    const { container, asFragment } = render(
      <TableTest
        dataSource={dataSource.slice(0, 10)}
        pagination={{
          showSizeChanger: false,
          // hideOnSinglePage work only when showSizeChanger is false
          hideOnSinglePage: true,
        }}
      />
    );
    expect(container.querySelector('.ant-pagination')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('row selection should work', () => {
    const { container, asFragment } = render(
      <TableTest
        rowSelection={{
          selectedRowKeys: ['1', '2'],
        }}
      />
    );
    // selection column
    expect(container.querySelector('.ant-table-selection-column')).toBeTruthy();
    // batch operation bar
    expect(container.querySelector('.ant-table-batch-operation-bar')).toBeTruthy();
  });

  it('default pagination should work', () => {
    const { container, asFragment } = render(<TableTest />);
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
        <TableTest />
      </ConfigProvider>
    );
    // pagination.showTotal
    expect(container.querySelector('.ant-pagination-total-text').textContent).toBe('');
    // pagination.showSizeChanger
    expect(container.querySelector('.ant-pagination-options')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
