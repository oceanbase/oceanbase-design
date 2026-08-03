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

    render(
      <Form>
        <Form.Item name="password" label="Password">
          <Password />
        </Form.Item>
      </Form>
    );

    const passwordInput = document.querySelector('input[type="password"]') as HTMLInputElement;
    expect(passwordInput).toBeTruthy();

    await user.type(passwordInput, VALID_PASSWORD);
    await user.tab();

    await waitFor(() => {
      expect(screen.getByText(REMEMBER_TEXT, { exact: false })).toBeTruthy();
    });
  });
});
