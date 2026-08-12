import { describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from '@oceanbase/design';
import Password from '../index';

const VALID_PASSWORD = 'Abcdef12';
const REMEMBER_TEXT = '请牢记并妥善保存密码';

describe('Password remember hint in Form.Item', () => {
  it('shows remember hint in Form.Item explain after valid blur', async () => {
    const user = userEvent.setup();

    const { container } = render(
      <Form>
        <Form.Item name="password" label="Password">
          <Password />
        </Form.Item>
      </Form>
    );

    const passwordInput = container.querySelector('.ant-input-password input') as HTMLInputElement;
    expect(passwordInput).toBeTruthy();
    // 密码以 text 型输入 + text-security 遮蔽呈现，浏览器不将其识别为密码框
    expect(passwordInput.getAttribute('type')).toBe('text');
    expect(passwordInput.classList.contains('ant-input-text-security')).toBe(true);

    await user.type(passwordInput, VALID_PASSWORD);
    await user.tab();

    await waitFor(() => {
      expect(screen.getByText(REMEMBER_TEXT, { exact: false })).toBeTruthy();
    });
  });
});
