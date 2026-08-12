import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Input } from '@oceanbase/design';

describe('Input.Password', () => {
  it('renders as text input masked by -webkit-text-security', () => {
    const { container } = render(<Input.Password />);
    const input = container.querySelector('.ant-input-password input') as HTMLInputElement;
    expect(input.getAttribute('type')).toBe('text');
    expect(input.classList.contains('ant-input-text-security')).toBe(true);
    expect(input.readOnly).toBe(false);
  });

  it('reveals plain text when visibility toggled', () => {
    const { container } = render(<Input.Password defaultValue="password" />);
    const input = container.querySelector('.ant-input-password input') as HTMLInputElement;
    expect(input.classList.contains('ant-input-text-security')).toBe(true);

    fireEvent.click(container.querySelector('.ant-input-password-icon') as HTMLElement);
    expect(input.classList.contains('ant-input-text-security')).toBe(false);

    fireEvent.click(container.querySelector('.ant-input-password-icon') as HTMLElement);
    expect(input.classList.contains('ant-input-text-security')).toBe(true);
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
