import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { message } from '../../static-function';
import ErrorDetails from '../ErrorDetails';

describe('ErrorDetails', () => {
  const originalExecCommand = document.execCommand;

  afterEach(() => {
    document.execCommand = originalExecCommand;
    vi.restoreAllMocks();
  });

  const renderErrorDetails = () =>
    render(
      <ErrorDetails
        prefixCls="ant-notification-notice"
        items={[
          { label: 'Request ID', value: 'abc' },
          { label: 'Error Code', value: 'ROLE_NOT_AUTHORIZE' },
        ]}
      />
    );

  it('renders error details with expand and copy actions', () => {
    // `copy-to-clipboard` 内部走 `document.execCommand('copy')`，非安全上下文同样可用
    const execCommand = vi.fn(() => true);
    document.execCommand = execCommand;
    const successSpy = vi.spyOn(message, 'success').mockReturnValue(undefined as any);

    const { getByText } = renderErrorDetails();

    expect(getByText('Show more')).toBeTruthy();
    fireEvent.click(getByText('Show more'));
    expect(getByText('Error Code: ROLE_NOT_AUTHORIZE')).toBeTruthy();
    fireEvent.click(getByText('Copy'));

    expect(execCommand).toHaveBeenCalledWith('copy');
    expect(successSpy).toHaveBeenCalledWith('Copied');
  });

  it('shows the failure message when the browser cannot copy', () => {
    // 复制能力不可用时（无 execCommand、无 clipboardData），仍然给出失败提示
    document.execCommand = undefined as any;
    const errorSpy = vi.spyOn(message, 'error').mockReturnValue(undefined as any);
    vi.spyOn(window, 'prompt').mockImplementation(() => null);

    const { getByText } = renderErrorDetails();
    fireEvent.click(getByText('Copy'));

    expect(errorSpy).toHaveBeenCalledWith('Copy failed');
  });
});
