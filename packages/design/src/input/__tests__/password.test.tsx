import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Input } from '@oceanbase/design';

describe('Input.Password', () => {
  it('renders as native password input by default', () => {
    const { container } = render(<Input.Password />);
    const input = container.querySelector('.ant-input-password input') as HTMLInputElement;
    expect(input.getAttribute('type')).toBe('password');
    expect(input.readOnly).toBe(false);
  });

  it('renders as native password input for current-password', () => {
    const { container } = render(<Input.Password autoComplete="current-password" />);
    const input = container.querySelector('.ant-input-password input') as HTMLInputElement;
    expect(input.getAttribute('type')).toBe('password');
  });

  it('reveals plain text when visibility toggled', () => {
    const { container } = render(<Input.Password defaultValue="password" />);
    const input = container.querySelector('.ant-input-password input') as HTMLInputElement;
    expect(input.getAttribute('type')).toBe('password');

    fireEvent.click(container.querySelector('.ant-input-password-icon') as HTMLElement);
    expect(input.getAttribute('type')).toBe('text');

    fireEvent.click(container.querySelector('.ant-input-password-icon') as HTMLElement);
    expect(input.getAttribute('type')).toBe('password');
  });

  it('renders new-password as native password input', () => {
    const { container } = render(<Input.Password autoComplete="new-password" />);
    const input = container.querySelector('.ant-input-password input') as HTMLInputElement;
    expect(input.getAttribute('type')).toBe('password');
  });

  it('reveals plain text when visibility toggled for new-password', () => {
    const { container } = render(
      <Input.Password autoComplete="new-password" defaultValue="password" />
    );
    const input = container.querySelector('.ant-input-password input') as HTMLInputElement;
    expect(input.getAttribute('type')).toBe('password');

    fireEvent.click(container.querySelector('.ant-input-password-icon') as HTMLElement);
    expect(input.getAttribute('type')).toBe('text');

    fireEvent.click(container.querySelector('.ant-input-password-icon') as HTMLElement);
    expect(input.getAttribute('type')).toBe('password');
  });

  it('keeps third-party password manager ignore attrs for new-password', () => {
    const { container } = render(<Input.Password autoComplete="new-password" />);
    const input = container.querySelector('.ant-input-password input') as HTMLInputElement;
    expect(input.getAttribute('autocomplete')).toBe('new-password');
    expect(input.getAttribute('data-lpignore')).toBe('true');
  });

  it('does not apply mitigation for current-password', () => {
    const { container } = render(<Input.Password autoComplete="current-password" />);
    const input = container.querySelector('.ant-input-password input') as HTMLInputElement;
    expect(input.getAttribute('data-lpignore')).toBeNull();
  });
});
