import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, Pagination } from '@oceanbase/design';
import zhCN from '../../locale/zh-CN';

describe('Pagination', () => {
  it('render', () => {
    const { container } = render(<Pagination total={50} />);
    expect(container.querySelector('.ant-pagination')).toBeTruthy();
  });

  it('should show default total text', () => {
    const { container } = render(<Pagination total={50} />);
    expect(container.querySelector('.ant-pagination-total-text').textContent).toBe('50 in Total');
  });

  it('should not show total text when total is not provided', () => {
    const { container } = render(<Pagination />);
    expect(container.querySelector('.ant-pagination-total-text')).toBeFalsy();
  });

  it('should show default total text with zh-CN locale', () => {
    const { container } = render(
      <ConfigProvider locale={zhCN}>
        <Pagination total={50} />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-pagination-total-text').textContent).toBe('共 50 条');
  });

  it('showTotal could be customized', () => {
    const { container } = render(<Pagination total={50} showTotal={total => `共 ${total} 条`} />);
    expect(container.querySelector('.ant-pagination-total-text').textContent).toBe('共 50 条');
  });

  it('showTotal could be disabled by false', () => {
    const { container } = render(<Pagination total={50} showTotal={false} />);
    expect(container.querySelector('.ant-pagination-total-text')).toBeFalsy();
  });

  it('showTotal could be disabled by undefined', () => {
    const { container } = render(<Pagination total={50} showTotal={undefined} />);
    expect(container.querySelector('.ant-pagination-total-text')).toBeFalsy();
  });

  it('ConfigProvider pagination.showTotal could be customized', () => {
    const { container } = render(
      <ConfigProvider pagination={{ showTotal: total => `ctx ${total}` }}>
        <Pagination total={50} />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-pagination-total-text').textContent).toBe('ctx 50');
  });

  it('ConfigProvider pagination.showTotal could be disabled by false', () => {
    const { container } = render(
      <ConfigProvider pagination={{ showTotal: false }}>
        <Pagination total={50} />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-pagination-total-text')).toBeFalsy();
  });

  it('pagination showTotal false should override ConfigProvider showTotal', () => {
    const { container } = render(
      <ConfigProvider pagination={{ showTotal: total => `ctx ${total}` }}>
        <Pagination total={50} showTotal={false} />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-pagination-total-text')).toBeFalsy();
  });
});
