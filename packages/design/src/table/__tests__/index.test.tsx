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

  it('render empty', () => {
    const { container } = render(<TableTest dataSource={[]} />);
    expect(container.querySelector('.ant-table-empty-wrapper')).toBeTruthy();
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

  it('default empty should work', () => {
    const { container, asFragment } = render(<TableTest dataSource={[]} />);
    expect(container.querySelector('.ant-empty-image')).toBeTruthy();
    expect(container.querySelector('.ant-empty-description')).toBeTruthy();
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

  it('innerBordered should work', () => {
    const { container, asFragment } = render(<TableTest innerBordered={true} />);
    expect(container.querySelector('.ant-table-inner-bordered .ant-table-bordered')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('outerBordered should work', () => {
    const { container, asFragment } = render(<TableTest outerBordered={true} />);
    // 外层 Card 边框
    expect(container.querySelector('.ant-card-bordered')).toBeTruthy();
    expect(container.querySelector('.ant-table-outer-bordered')).toBeTruthy();
    // 内部表格保持无边框样式
    expect(container.querySelector('.ant-table-outer-bordered .ant-table-bordered')).toBeFalsy();
    // 分页器在 Card 内（外框包含分页器）
    expect(container.querySelector('.ant-card-body .ant-pagination')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('outerBordered + innerBordered should work', () => {
    const { container, asFragment } = render(
      <TableTest outerBordered={true} innerBordered={true} />
    );
    // 外框 + 内部全网格
    expect(container.querySelector('.ant-card-bordered')).toBeTruthy();
    expect(container.querySelector('.ant-table-outer-bordered .ant-table-bordered')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('outerBordered with fixed columns and rowSelection should align selection column and not overlap', () => {
    const fixedColumns = [
      { title: 'Name', dataIndex: 'name', fixed: 'left' as const, width: 120 },
      { title: 'Age', dataIndex: 'age' },
      { title: 'Address', dataIndex: 'address' },
    ];
    const { container } = render(
      <Table
        columns={fixedColumns}
        dataSource={dataSource}
        outerBordered
        rowSelection={{}}
        scroll={{ x: 800 }}
      />
    );
    const selCell = container.querySelector(
      '.ant-table-tbody .ant-table-selection-column'
    ) as HTMLElement;
    const selTh = container.querySelector(
      '.ant-table-thead .ant-table-selection-column'
    ) as HTMLElement;
    // Selection column width must fit 24px first-column padding + checkbox + 8px right padding = 46px.
    // Before the fix, antd locked it to controlHeight (28px), so the checkbox overflowed the column.
    // In non-cssVar mode unit() appends px and yields calc(24px + 14px + 8px); jsdom does not evaluate calc().
    const selCol = container.querySelector('.ant-table-selection-col') as HTMLElement;
    expect(getComputedStyle(selCol).width).toBe('calc(24px + 14px + 8px)');
    // Selection column as first column aligns with the Card content area (24px), not flush to the edge.
    expect(getComputedStyle(selCell).paddingLeft).toBe('24px');
    expect(getComputedStyle(selTh).paddingLeft).toBe('24px');
    // Measure-row first cell is padded to match the real cell, so the fixed-column ColGroup
    // does not lock the column to the narrower measured width and squeeze the checkbox out.
    const measureCell = container.querySelector(
      '.ant-table-tbody .ant-table-measure-row > th:first-child'
    ) as HTMLElement;
    expect(getComputedStyle(measureCell).paddingLeft).toBe('24px');
    // First logical column after the selection column keeps the design-default 8px indent.
    const nameCell = container.querySelectorAll(
      '.ant-table-tbody .ant-table-cell'
    )[1] as HTMLElement;
    const nameTh = container.querySelectorAll('.ant-table-thead .ant-table-cell')[1] as HTMLElement;
    expect(getComputedStyle(nameCell).paddingLeft).toBe('8px');
    expect(getComputedStyle(nameTh).paddingLeft).toBe('8px');
  });

  it('should not set has-rowspan class without row merge', () => {
    const { container } = render(
      <Table columns={columns} dataSource={dataSource.slice(0, 2)} pagination={false} />
    );
    expect(container.querySelector('.ant-table-has-rowspan')).toBeFalsy();
    expect(container.querySelector('.ant-table-has-rowspan-first')).toBeFalsy();
    expect(container.querySelector('.ant-table-has-rowspan-last')).toBeFalsy();
  });

  it('should set has-rowspan class when any column has rowSpan merge', () => {
    const rowSpanColumns = [
      { title: 'Name', dataIndex: 'name' },
      {
        title: 'Tel',
        dataIndex: 'tel',
        onCell: (_: unknown, index?: number) => {
          if (index === 0) {
            return { rowSpan: 2 };
          }
          if (index === 1) {
            return { rowSpan: 0 };
          }
          return {};
        },
      },
      { title: 'Address', dataIndex: 'address' },
    ];
    const rowSpanData = [
      { key: '1', name: 'A', tel: '111', address: 'Addr 1' },
      { key: '2', name: 'B', tel: '222', address: 'Addr 2' },
    ];
    const { container } = render(
      <Table columns={rowSpanColumns} dataSource={rowSpanData} pagination={false} />
    );
    expect(container.querySelector('.ant-table-wrapper.ant-table-has-rowspan')).toBeTruthy();
    expect(container.querySelector('.ant-table-has-rowspan-first')).toBeFalsy();
    expect(container.querySelector('.ant-table-has-rowspan-last')).toBeFalsy();
  });

  it('should set has-rowspan-first when first column has rowSpan merge', () => {
    const rowSpanColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        onCell: (_: unknown, index?: number) =>
          index === 0 ? { rowSpan: 2 } : index === 1 ? { rowSpan: 0 } : {},
      },
      { title: 'Age', dataIndex: 'age' },
    ];
    const rowSpanData = [
      { key: '1', name: 'A', age: 1 },
      { key: '2', name: 'B', age: 2 },
    ];
    const { container } = render(
      <Table columns={rowSpanColumns} dataSource={rowSpanData} pagination={false} />
    );
    expect(container.querySelector('.ant-table-wrapper.ant-table-has-rowspan')).toBeTruthy();
    expect(container.querySelector('.ant-table-has-rowspan-first')).toBeTruthy();
  });
});
