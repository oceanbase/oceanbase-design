import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ConfigProvider, Filter } from '@oceanbase/design';
import zhCN from '../../locale/zh-CN';
import enUS from '../../locale/en-US';
import { getPlaceholder } from '../utils';

const clickFilterButton = (container: HTMLElement) => {
  const button = container.querySelector('.ant-filter-button');
  expect(button).not.toBeNull();
  fireEvent.click(button as HTMLElement);
};

const getPopoverInput = () => {
  const input = document.querySelector('.ant-popover input.ant-input');
  expect(input).not.toBeNull();
  return input as HTMLInputElement;
};

const getPopoverEmptyText = () => {
  const empty = document.querySelector('.ant-popover .ant-empty-description');
  expect(empty).not.toBeNull();
  return empty?.textContent;
};

const selectProps = {
  label: 'Status',
  showSearch: true,
  options: [
    { value: 'success', label: 'Success' },
    { value: 'error', label: 'Error' },
  ],
};

describe('Filter locale', () => {
  it('search placeholder should use default en-US locale', () => {
    const { container } = render(<Filter.Select {...selectProps} />);
    clickFilterButton(container);
    expect(getPopoverInput().getAttribute('placeholder')).toBe('Search');
  });

  it('search placeholder should follow ConfigProvider locale', () => {
    const { container } = render(
      <ConfigProvider locale={zhCN}>
        <Filter.Select {...selectProps} />
      </ConfigProvider>
    );
    clickFilterButton(container);
    expect(getPopoverInput().getAttribute('placeholder')).toBe('搜索');
  });

  it('search placeholder of Filter.Checkbox should follow ConfigProvider locale', () => {
    const { container } = render(
      <ConfigProvider locale={zhCN}>
        <Filter.Checkbox {...selectProps} />
      </ConfigProvider>
    );
    clickFilterButton(container);
    expect(getPopoverInput().getAttribute('placeholder')).toBe('搜索');
  });

  it('empty description should follow ConfigProvider locale', () => {
    const { container } = render(
      <ConfigProvider locale={zhCN}>
        <Filter.Select {...selectProps} options={[]} />
      </ConfigProvider>
    );
    clickFilterButton(container);
    expect(getPopoverEmptyText()).toBe('无匹配结果');
  });

  it('empty description should use default en-US locale', () => {
    const { container } = render(<Filter.Select {...selectProps} options={[]} />);
    clickFilterButton(container);
    expect(getPopoverEmptyText()).toBe('No matching results');
  });

  it('placeholder should fall back to en-US locale', () => {
    expect(getPlaceholder(enUS.Filter)).toBe('Please select');
    expect(getPlaceholder(zhCN.Filter)).toBe('请选择');
  });
});
