import { describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from '@oceanbase/design';
import Password from '../index';

const CUSTOM_RULE_MESSAGE = 'At least 12 characters';
// 8 位且包含大小写+数字，可通过内置云密码规则（8-20 位、三类字符），但不符合自定义规则（≥12 位）
const customRules = [
  {
    validate: (val?: string) => Boolean(val && val.length >= 12),
    message: CUSTOM_RULE_MESSAGE,
  },
];

const unsafeMatchRules = [
  {
    validate: (val?: string) => {
      // Mirrors consumer validators that call .match without a null guard.
      const uppercaseMatch = (val as string).match(/[A-Z]/g) || [];
      return uppercaseMatch.length >= 1;
    },
    message: 'Contains uppercase letter',
  },
];

describe('Password custom rules', () => {
  it('mounts safely when custom validate uses match on an undefined value', () => {
    expect(() =>
      render(
        <Form>
          <Form.Item name="password" label="Password">
            <Password rules={unsafeMatchRules} />
          </Form.Item>
        </Form>
      )
    ).not.toThrow();
  });

  it('validates against custom rules instead of the built-in cloud rules', async () => {
    const user = userEvent.setup();

    const { container } = render(
      <Form>
        <Form.Item name="password" label="Password">
          <Password rules={customRules} />
        </Form.Item>
      </Form>
    );

    const passwordInput = container.querySelector('.ant-input-password input') as HTMLInputElement;
    expect(passwordInput).toBeTruthy();

    await user.type(passwordInput, 'Abcdef12');
    await user.tab();

    await waitFor(() => {
      // Blur feedback surfaces through the Form.Item explain area; scope the query
      // there instead of the whole document, where the popover rules list may
      // briefly carry the same text while its close animation settles.
      const explainError = container.querySelector('.ant-form-item-explain-error');
      expect(explainError?.textContent).toContain(CUSTOM_RULE_MESSAGE);
    });
  });
});
