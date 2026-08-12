import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { ConfigProvider, Table } from '@oceanbase/design';
import { waitFakeTimer, isTooltipOpen } from '../../../../../tests/util';
import {
  ColumnTitleWithTooltip,
  isValidColumnTooltip,
  injectColumnTitleTooltip,
} from '../ColumnTitleWithTooltip';
import type { TableColumnsType } from '../index';

const prefixCls = 'ant-table';

afterEach(() => {
  vi.useRealTimers();
});

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

  it('should render bare JSX tooltip as Tooltip content, not flat trigger', () => {
    const { container } = render(
      <ConfigProvider>
        <ColumnTitleWithTooltip
          prefixCls={prefixCls}
          title="Status"
          tooltip={<div data-testid="status-tip">Status help</div>}
        />
      </ConfigProvider>
    );
    expect(container.textContent).toContain('Status');
    expect(container.querySelector(`.${prefixCls}-column-title-tooltip-icon`)).toBeTruthy();
    // JSX 作为 Tooltip 内容，不直接平铺渲染在表头
    expect(container.querySelector('[data-testid="status-tip"]')).toBeFalsy();
  });

  it('should show bare JSX tooltip as Tooltip content on hover', async () => {
    vi.useFakeTimers();
    const { container } = render(
      <ConfigProvider>
        <ColumnTitleWithTooltip
          prefixCls={prefixCls}
          title="Status"
          tooltip={<div data-testid="status-tip">Status help</div>}
        />
      </ConfigProvider>
    );
    fireEvent.mouseEnter(container.querySelector(`.${prefixCls}-column-title-tooltip-icon`)!);
    await waitFakeTimer();
    expect(isTooltipOpen()).toBe(true);
    // JSX 内容渲染在 Tooltip 弹出层中，而非表头平铺
    expect(document.querySelector('.ant-tooltip [data-testid="status-tip"]')).toBeTruthy();
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

  it('should render bare JSX tooltip as Tooltip content in column header', () => {
    const columns: TableColumnsType<{ key: string; status: string }> = [
      {
        title: 'Status',
        dataIndex: 'status',
        tooltip: <div data-testid="status-tip">Status help</div>,
      },
    ];
    const { container } = render(
      <ConfigProvider>
        <Table pagination={false} dataSource={[{ key: '1', status: 'active' }]} columns={columns} />
      </ConfigProvider>
    );
    const header = container.querySelector('.ant-table-thead tr th:first-child');
    expect(header?.textContent).toContain('Status');
    expect(header?.querySelector(`.${prefixCls}-column-title-tooltip-icon`)).toBeTruthy();
    // JSX 作为 Tooltip 内容，不直接平铺渲染在表头
    expect(header?.querySelector('[data-testid="status-tip"]')).toBeFalsy();
  });

  it('should show bare JSX tooltip as Tooltip content on hover in table', async () => {
    vi.useFakeTimers();
    const columns: TableColumnsType<{ key: string; status: string }> = [
      {
        title: 'Status',
        dataIndex: 'status',
        tooltip: <div data-testid="status-tip">Status help</div>,
      },
    ];
    const { container } = render(
      <ConfigProvider>
        <Table pagination={false} dataSource={[{ key: '1', status: 'active' }]} columns={columns} />
      </ConfigProvider>
    );
    const header = container.querySelector('.ant-table-thead tr th:first-child');
    fireEvent.mouseEnter(header!.querySelector(`.${prefixCls}-column-title-tooltip-icon`)!);
    await waitFakeTimer();
    expect(isTooltipOpen()).toBe(true);
    // JSX 内容渲染在 Tooltip 弹出层中，而非表头平铺
    expect(document.querySelector('.ant-tooltip [data-testid="status-tip"]')).toBeTruthy();
  });

  it('should support tooltip in grouped (nested children) columns', () => {
    const columns: TableColumnsType<{ key: string; name: string; age: number }> = [
      {
        title: 'Group',
        children: [
          {
            title: 'Name',
            dataIndex: 'name',
            tooltip: <span data-testid="group-tip">Name help</span>,
          },
          { title: 'Age', dataIndex: 'age' },
        ],
      },
    ];
    const { container } = render(
      <ConfigProvider>
        <Table pagination={false} dataSource={dataSource} columns={columns} />
      </ConfigProvider>
    );
    const nameHeader = container.querySelector('.ant-table-thead tr:nth-child(2) th:first-child');
    expect(nameHeader?.querySelector(`.${prefixCls}-column-title-tooltip-icon`)).toBeTruthy();
    // JSX 作为 Tooltip 内容，不直接平铺在表头
    expect(nameHeader?.querySelector('[data-testid="group-tip"]')).toBeFalsy();
  });
});
