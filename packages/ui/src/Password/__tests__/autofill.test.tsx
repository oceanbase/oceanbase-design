import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import Password from '../index';

describe('Password browser saved-password dropdown suppression', () => {
  it('keeps input readonly while focused and unlocks only after user interaction', () => {
    const { container } = render(<Password />);
    const input = container.querySelector('input[type="password"]') as HTMLInputElement;
    expect(input).toBeTruthy();
    // 默认 autoComplete="new-password"，初始处于锁定态
    expect(input.getAttribute('autocomplete')).toBe('new-password');
    expect(input.readOnly).toBe(true);

    // focus 阶段保持 readonly，浏览器不会弹出已保存密码下拉
    fireEvent.focus(input);
    expect(input.readOnly).toBe(true);

    // 用户点击后才解除锁定，输入框变为可编辑
    fireEvent.click(input);
    expect(input.readOnly).toBe(false);
  });
});
