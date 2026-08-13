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

export const ProTableTest: React.FC<ProTableProps<any, any, any>> = props => (
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

  it('render empty', () => {
    const { container } = render(<ProTableTest dataSource={[]} />);
    expect(container.querySelector('.ant-table-empty-wrapper')).toBeTruthy();
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

  it('innerBordered should work', () => {
    const { container, asFragment } = render(<ProTableTest innerBordered={true} />);
    expect(container.querySelector('.ant-table-inner-bordered .ant-table-bordered')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('outerBordered should work', () => {
    const { container, asFragment } = render(<ProTableTest outerBordered={true} />);
    // outerBordered 即 ProCard 边框
    expect(container.querySelector('.ant-pro-card-border')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('outerBordered + innerBordered should work', () => {
    const { container, asFragment } = render(
      <ProTableTest outerBordered={true} innerBordered={true} />
    );
    // 外框 + 内部全网格
    expect(container.querySelector('.ant-pro-card-border')).toBeTruthy();
    expect(container.querySelector('.ant-table-inner-bordered .ant-table-bordered')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('outerBordered with column tooltip should keep single outer border', () => {
    const tooltipColumns = [
      { title: 'Name', dataIndex: 'name', tooltip: 'the name column' },
      { title: 'Age', dataIndex: 'age' },
    ];
    const { container, asFragment } = render(
      <ProTableTest columns={tooltipColumns} outerBordered={true} />
    );
    // tooltip 列走 tableViewRender 渲染内部 Table，外层边框仍由 ProCard 提供
    expect(container.querySelector('.ant-pro-card-border')).toBeTruthy();
    // 内部不再自包 Card，避免双边框
    expect(container.querySelector('.ant-card-bordered')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
