import React from 'react';
import { render } from '@testing-library/react';
import { Table } from '@oceanbase/design';
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

const TableTest: React.FC<TableProps<any>> = props => (
  <Table dataSource={dataSource} columns={columns} {...props} />
);

describe('Table', () => {
  it('render', () => {
    const { container, asFragment } = render(<TableTest />);
    expect(container.querySelector('.ant-pagination')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('hideOnSinglePage should be true by default', () => {
    const { container, asFragment } = render(<TableTest dataSource={dataSource.slice(0, 10)} />);
    expect(container.querySelector('.ant-pagination')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('hideOnSinglePage could be changed', () => {
    const { container, asFragment } = render(
      <TableTest
        dataSource={dataSource.slice(0, 10)}
        pagination={{
          hideOnSinglePage: false,
        }}
      />
    );
    expect(container.querySelector('.ant-pagination')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
