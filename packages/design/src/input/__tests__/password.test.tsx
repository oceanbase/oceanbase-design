import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Input } from '@oceanbase/design';

describe('Input.Password autoComplete="new-password"', () => {
  it('does not lock input by default', () => {
    const { container } = render(<Input.Password />);
    const input = container.querySelector('.ant-input-password input') as HTMLInputElement;
    expect(input.readOnly).toBe(false);
    expect(input.getAttribute('autocomplete')).toBeNull();
  });

  it('applies saved-password dropdown mitigation for new-password', () => {
    const { container } = render(<Input.Password autoComplete="new-password" />);
    const input = container.querySelector('.ant-input-password input') as HTMLInputElement;
    expect(input.readOnly).toBe(true);
    expect(input.getAttribute('autocomplete')).toBe('new-password');
    expect(input.getAttribute('data-lpignore')).toBe('true');

    fireEvent.focus(input);
    expect(input.readOnly).toBe(false);

    fireEvent.blur(input);
    expect(input.readOnly).toBe(true);
  });

  it('does not apply mitigation for current-password', () => {
    const { container } = render(<Input.Password autoComplete="current-password" />);
    const input = container.querySelector('.ant-input-password input') as HTMLInputElement;
    expect(input.readOnly).toBe(false);
    expect(input.getAttribute('data-lpignore')).toBeNull();
  });
});
