import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Input } from '@oceanbase/design';

const { Search } = Input;

describe('Input.Search', () => {
  it('should render search icon in prefix by default', () => {
    const { container } = render(<Search />);
    expect(container.querySelector('.ant-input-prefix .anticon-search')).toBeTruthy();
  });

  it('should allow custom prefix', () => {
    const { container } = render(<Search prefix={<span data-testid="custom-prefix" />} />);
    expect(container.querySelector('[data-testid="custom-prefix"]')).toBeTruthy();
    expect(container.querySelector('.ant-input-prefix .anticon-search')).toBeFalsy();
  });

  it('should trigger onSearch when pressing Enter', () => {
    const onSearch = vi.fn();
    const { container } = render(<Search onSearch={onSearch} defaultValue="hello" />);
    const input = container.querySelector('.ant-input-search input') as HTMLInputElement;
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(onSearch).toHaveBeenCalledWith('hello', expect.any(Object), { source: 'input' });
  });

  it('should trigger onSearch when clicking enter button', () => {
    const onSearch = vi.fn();
    const { container } = render(<Search enterButton onSearch={onSearch} defaultValue="world" />);
    fireEvent.click(container.querySelector('.ant-input-search-button')!);
    expect(onSearch).toHaveBeenCalledWith('world', expect.any(Object), { source: 'input' });
  });

  it('should not render enter button when enterButton is false', () => {
    const { container } = render(<Search />);
    expect(container.querySelector('.ant-input-search-button')).toBeFalsy();
  });
});
