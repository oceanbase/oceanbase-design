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

    // 保持 readonly 直到用户真正交互，避免 focus 阶段移除后浏览器弹出已保存密码下拉
    fireEvent.focus(input);
    expect(input.readOnly).toBe(true);

    fireEvent.click(input);
    expect(input.readOnly).toBe(false);

    fireEvent.blur(input);
    expect(input.readOnly).toBe(true);
  });

  it('unlocks the field once user starts typing', () => {
    const { container } = render(<Input.Password autoComplete="new-password" />);
    const input = container.querySelector('.ant-input-password input') as HTMLInputElement;
    expect(input.readOnly).toBe(true);

    fireEvent.focus(input);
    expect(input.readOnly).toBe(true);

    fireEvent.keyDown(input, { key: 'a' });
    expect(input.readOnly).toBe(false);
  });

  it('does not apply mitigation for current-password', () => {
    const { container } = render(<Input.Password autoComplete="current-password" />);
    const input = container.querySelector('.ant-input-password input') as HTMLInputElement;
    expect(input.readOnly).toBe(false);
    expect(input.getAttribute('data-lpignore')).toBeNull();
  });
});
