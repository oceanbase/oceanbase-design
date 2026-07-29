import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, Table } from '@oceanbase/design';
import {
  ColumnTitleWithTooltip,
  isValidColumnTooltip,
  injectColumnTitleTooltip,
} from '../ColumnTitleWithTooltip';

const prefixCls = 'ant-table';

describe('ColumnTitleWithTooltip', () => {
  it('isValidColumnTooltip should validate tooltip content', () => {
    expect(isValidColumnTooltip(undefined)).toBe(false);
    expect(isValidColumnTooltip('')).toBe(false);
    expect(isValidColumnTooltip({})).toBe(false);
    expect(isValidColumnTooltip({ title: '' })).toBe(false);
    expect(isValidColumnTooltip('help')).toBe(true);
    expect(isValidColumnTooltip({ title: 'help' })).toBe(true);
    expect(isValidColumnTooltip({ icon: <span data-testid="custom-icon" /> })).toBe(true);
  });

  it('should render title with tooltip icon', () => {
    const { container } = render(
      <ConfigProvider>
        <ColumnTitleWithTooltip prefixCls={prefixCls} title="Name" tooltip="help text" />
      </ConfigProvider>
    );
    expect(container.textContent).toContain('Name');
    expect(container.querySelector(`.${prefixCls}-column-title-tooltip-icon`)).toBeTruthy();
  });

  it('should render only tooltip icon when title is empty', () => {
    const { container } = render(
      <ConfigProvider>
        <ColumnTitleWithTooltip prefixCls={prefixCls} tooltip="help text" />
      </ConfigProvider>
    );
    expect(container.querySelector(`.${prefixCls}-column-title-tooltip-icon`)).toBeTruthy();
  });
});

describe('Table column tooltip', () => {
  const dataSource = [{ key: '1', name: 'Mike', age: 32 }];

  it('should render tooltip icon in column header', () => {
    const { container } = render(
      <ConfigProvider>
        <Table
          pagination={false}
          dataSource={dataSource}
          columns={[
            { title: 'Name', dataIndex: 'name', tooltip: 'User name' },
            { title: 'Age', dataIndex: 'age' },
          ]}
        />
      </ConfigProvider>
    );
    const nameHeader = container.querySelector('.ant-table-thead tr th:first-child');
    const ageHeader = container.querySelector('.ant-table-thead tr th:last-child');
    expect(nameHeader?.querySelector(`.${prefixCls}-column-title-tooltip-icon`)).toBeTruthy();
    expect(ageHeader?.querySelector(`.${prefixCls}-column-title-tooltip-icon`)).toBeFalsy();
  });

  it('should not render tooltip icon when tooltip is empty', () => {
    const { container } = render(
      <ConfigProvider>
        <Table
          pagination={false}
          dataSource={dataSource}
          columns={[
            { title: 'Name', dataIndex: 'name', tooltip: '' },
            { title: 'Age', dataIndex: 'age', tooltip: {} },
          ]}
        />
      </ConfigProvider>
    );
    expect(container.querySelector(`.${prefixCls}-column-title-tooltip-icon`)).toBeFalsy();
  });

  it('should render tooltip icon without title text', () => {
    const { container } = render(
      <ConfigProvider>
        <Table
          pagination={false}
          dataSource={dataSource}
          columns={[{ dataIndex: 'name', tooltip: 'User name' }]}
        />
      </ConfigProvider>
    );
    const headerCell = container.querySelector('.ant-table-thead .ant-table-cell');
    expect(headerCell?.textContent).toBe('');
    expect(container.querySelector(`.${prefixCls}-column-title-tooltip-icon`)).toBeTruthy();
  });

  it('should keep sorter icon when tooltip exists', () => {
    const { container } = render(
      <ConfigProvider>
        <Table
          pagination={false}
          dataSource={dataSource}
          columns={[
            {
              title: 'Age',
              dataIndex: 'age',
              sorter: (a, b) => a.age - b.age,
              tooltip: 'Age in years',
            },
          ]}
        />
      </ConfigProvider>
    );
    expect(container.querySelector(`.${prefixCls}-column-title-tooltip-icon`)).toBeTruthy();
    expect(container.querySelector(`.${prefixCls}-column-sorter`)).toBeTruthy();
  });

  it('injectColumnTitleTooltip should wrap function title', () => {
    const column = injectColumnTitleTooltip(
      {
        title: ({ sortOrder }: { sortOrder?: string }) => `Age${sortOrder ? `-${sortOrder}` : ''}`,
        tooltip: 'help',
      },
      prefixCls
    );
    const { container } = render(
      <ConfigProvider>{column.title?.({ sortOrder: 'ascend' })}</ConfigProvider>
    );
    expect(container.textContent).toContain('Age-ascend');
    expect(container.querySelector(`.${prefixCls}-column-title-tooltip-icon`)).toBeTruthy();
  });
});
