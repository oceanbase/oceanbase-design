import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, Table, compactTheme } from '@oceanbase/design';
import type { TableProps } from '@oceanbase/design';
import zhCN from '../../locale/zh-CN';
import enUS from '../../locale/en-US';

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

  it('table cell font size keeps the same scale for default, middle and small size', () => {
    const getCellFontSize = (node: React.ReactElement, size?: TableProps<any>['size']): string => {
      const { container, unmount } = render(
        size ? React.cloneElement(node, { size } as any) : node
      );
      const cellFontSize = getComputedStyle(
        container.querySelector('.ant-table') as HTMLElement
      ).fontSize;
      unmount();
      return cellFontSize;
    };
    const enTable = (
      <ConfigProvider locale={enUS}>
        <TableTest />
      </ConfigProvider>
    );
    const zhTable = (
      <ConfigProvider locale={zhCN}>
        <TableTest />
      </ConfigProvider>
    );
    // antd 会让 cellFontSizeSM / cellFontSizeMD 默认回落到 token.fontSize，若不显式指定，
    // 小/中尺寸的表格字号会变成正文的 13px，比默认尺寸的 12px 更大
    expect(getCellFontSize(enTable)).toBe('12px');
    expect(getCellFontSize(enTable, 'middle')).toBe('12px');
    expect(getCellFontSize(enTable, 'small')).toBe('12px');
    // 中文排版下正文和单元格同为 14px，三个尺寸保持一致
    expect(getCellFontSize(zhTable)).toBe('14px');
    expect(getCellFontSize(zhTable, 'middle')).toBe('14px');
    expect(getCellFontSize(zhTable, 'small')).toBe('14px');
    // compactTheme 锁定了非中文排版，同样不受 locale 影响
    const compactTable = (
      <ConfigProvider locale={zhCN} theme={compactTheme}>
        <TableTest />
      </ConfigProvider>
    );
    expect(getCellFontSize(compactTable, 'small')).toBe('12px');
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
    expect(container.querySelector('.ant-pagination-total-text')).toBeFalsy();
    // pagination.showSizeChanger
    expect(container.querySelector('.ant-pagination-options')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('pagination.showTotal should show default total when it is not set', () => {
    const { container } = render(<TableTest pagination={{ showSizeChanger: false }} />);
    // 不传 showTotal 时保留默认文案，与显式传 undefined / false 区分
    expect(container.querySelector('.ant-pagination-total-text').textContent).toBe('99 in Total');
  });

  it('pagination.showTotal could be disabled by undefined', () => {
    const { container } = render(<TableTest pagination={{ showTotal: undefined }} />);
    // 显式传 undefined 会覆盖默认文案（靠 useDefaultPagination 的对象展开保留该键），不渲染总数占位元素
    expect(container.querySelector('.ant-pagination-total-text')).toBeFalsy();
  });

  it('pagination.showTotal could be disabled by false', () => {
    const { container } = render(<TableTest pagination={{ showTotal: false }} />);
    // false 是对外推荐的关闭方式，内部会归一化为 undefined
    expect(container.querySelector('.ant-pagination-total-text')).toBeFalsy();
  });

  it('ConfigProvider pagination.showTotal could be disabled by false', () => {
    const { container } = render(
      <ConfigProvider pagination={{ showTotal: false }}>
        <TableTest />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-pagination-total-text')).toBeFalsy();
  });

  it('ConfigProvider pagination.showTotal could be customized', () => {
    const { container } = render(
      <ConfigProvider pagination={{ showTotal: total => `ctx ${total}` }}>
        <TableTest />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-pagination-total-text').textContent).toBe('ctx 99');
  });

  it('pagination.showTotal false should override ConfigProvider showTotal', () => {
    const { container } = render(
      <ConfigProvider pagination={{ showTotal: total => `ctx ${total}` }}>
        <TableTest pagination={{ showTotal: false }} />
      </ConfigProvider>
    );
    // 组件级分页配置优先于 ConfigProvider，可关闭上下文传入的总数文案
    expect(container.querySelector('.ant-pagination-total-text')).toBeFalsy();
  });

  it('pagination.showTotal could be customized', () => {
    const { container } = render(
      <TableTest pagination={{ showTotal: total => `共 ${total} 条` }} />
    );
    expect(container.querySelector('.ant-pagination-total-text').textContent).toBe('共 99 条');
  });

  it('default total should coexist with batch operation bar', () => {
    const { container } = render(<TableTest rowSelection={{ selectedRowKeys: ['1'] }} />);
    const totalSlot = container.querySelector('.ant-pagination-total-text');
    // 批量操作栏与默认总数文案共用分页器总数插槽，两者都要渲染
    expect(totalSlot?.querySelector('.ant-table-batch-operation-bar')).toBeTruthy();
    expect(totalSlot?.textContent).toContain('99 in Total');
  });

  it('batch operation bar should render in pagination total slot when showTotal is disabled', () => {
    const { container } = render(
      <TableTest
        pagination={{ showTotal: undefined }}
        rowSelection={{
          selectedRowKeys: ['1'],
        }}
      />
    );
    // 有选中项时，批量操作栏占用分页器总数插槽
    expect(container.querySelector('.ant-pagination-total-text')).toBeTruthy();
    expect(container.querySelector('.ant-table-batch-operation-bar')).toBeTruthy();
  });

  it('batch operation bar should render in pagination total slot when showTotal is false', () => {
    const { container } = render(
      <TableTest
        pagination={{ showTotal: false }}
        rowSelection={{
          selectedRowKeys: ['1'],
        }}
      />
    );
    // 关闭总数不影响批量操作栏，有选中项时插槽仍然渲染
    expect(container.querySelector('.ant-pagination-total-text')).toBeTruthy();
    expect(container.querySelector('.ant-table-batch-operation-bar')).toBeTruthy();
    // 关闭总数后不应再留下空的占位 span（批量操作栏内的 span 层级更深）
    expect(container.querySelector('.ant-pagination-total-text > div > span')).toBeFalsy();
  });

  it('pagination total slot should be hidden when showTotal is disabled and no row selected', () => {
    const { container } = render(
      <TableTest pagination={{ showTotal: undefined }} rowSelection={{}} />
    );
    expect(container.querySelector('.ant-pagination-total-text')).toBeFalsy();
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
