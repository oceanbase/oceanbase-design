import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { message } from '../../static-function';
import ErrorDetails from '../ErrorDetails';

describe('ErrorDetails', () => {
  const originalExecCommand = document.execCommand;

  afterEach(() => {
    document.execCommand = originalExecCommand;
    vi.restoreAllMocks();
  });

  const renderErrorDetails = (props = {}) =>
    render(
      <ErrorDetails
        prefixCls="ant-notification-notice"
        items={[
          { label: 'Request ID', value: 'abc' },
          { label: 'Error Code', value: 'ROLE_NOT_AUTHORIZE' },
        ]}
        {...props}
      />
    );

  // `copy-to-clipboard` writes through a temporary node plus `document.execCommand('copy')`,
  // so reading the selection during execCommand reveals the actual text being copied
  const mockExecCommand = () => {
    let copiedText = '';
    const execCommand = vi.fn(() => {
      copiedText = window.getSelection()?.toString() ?? '';
      return true;
    });
    document.execCommand = execCommand;
    return { execCommand, getCopiedText: () => copiedText };
  };

  it('renders error details with expand and copy actions', () => {
    // `copy-to-clipboard` goes through `document.execCommand('copy')`, so it also works
    // in non-secure contexts
    const { execCommand, getCopiedText } = mockExecCommand();
    const { getByText } = renderErrorDetails();

    expect(getByText('Show more')).toBeTruthy();
    fireEvent.click(getByText('Show more'));
    expect(getByText('Error Code: ROLE_NOT_AUTHORIZE')).toBeTruthy();
    fireEvent.click(getByText('Copy'));

    expect(execCommand).toHaveBeenCalledWith('copy');
    expect(getCopiedText()).toBe('- Request ID: abc\n- Error Code: ROLE_NOT_AUTHORIZE');
  });

  it('keeps actions on the same row as the collapsed first line', () => {
    const { container, getByText } = renderErrorDetails();
    const collapsedRow = container.querySelector(
      '.ant-notification-notice-error-details-collapsed-row'
    );

    expect(collapsedRow).toBeTruthy();
    // Collapsed state shows only the first line, with expand and copy actions on that row
    expect(collapsedRow?.textContent).toContain('Request ID: abc');
    expect(collapsedRow?.textContent).toContain('Show more');
    expect(collapsedRow?.textContent).toContain('Copy');
    expect(collapsedRow?.textContent).not.toContain('Error Code');
    // Expanded state renders the detail lines and the action row separately
    fireEvent.click(getByText('Show more'));
    expect(
      container.querySelector('.ant-notification-notice-error-details-collapsed-row')
    ).toBeFalsy();
  });

  it('shows the copied label instead of a success notification', () => {
    mockExecCommand();
    const successSpy = vi.spyOn(message, 'success').mockReturnValue(undefined as any);

    const { getByText, queryByText } = renderErrorDetails();
    fireEvent.click(getByText('Copy'));

    // Successful copies are acknowledged by the action label, without a success notification
    expect(getByText('Copied')).toBeTruthy();
    expect(queryByText('Copy')).toBeFalsy();
    expect(successSpy).not.toHaveBeenCalled();
  });

  it('reverts the copy label after the feedback delay', () => {
    mockExecCommand();
    vi.useFakeTimers();

    try {
      const { getByText, queryByText } = renderErrorDetails();
      fireEvent.click(getByText('Copy'));
      expect(getByText('Copied')).toBeTruthy();

      act(() => {
        vi.advanceTimersByTime(2000);
      });

      expect(queryByText('Copied')).toBeFalsy();
      expect(getByText('Copy')).toBeTruthy();
    } finally {
      vi.useRealTimers();
    }
  });

  it('renders a divider when placed below the description', () => {
    const { container } = renderErrorDetails({ withDivider: true });

    expect(
      container.querySelector('.ant-notification-notice-error-details-with-divider')
    ).toBeTruthy();
  });

  it('only copies items without copyable: false', () => {
    const { getCopiedText } = mockExecCommand();

    const { getByText } = render(
      <ErrorDetails
        prefixCls="ant-notification-notice"
        items={[
          { label: 'Request ID', value: 'abc' },
          { label: 'Error Code', value: 'ROLE_NOT_AUTHORIZE', copyable: false },
        ]}
      />
    );
    fireEvent.click(getByText('Copy'));

    expect(getCopiedText()).toBe('- Request ID: abc');
  });

  it('shows the failure message when the browser cannot copy', () => {
    // Copying is unavailable (no execCommand, no clipboardData), so a failure message shows
    document.execCommand = undefined as any;
    const errorSpy = vi.spyOn(message, 'error').mockReturnValue(undefined as any);
    vi.spyOn(window, 'prompt').mockImplementation(() => null);

    const { getByText } = renderErrorDetails();
    fireEvent.click(getByText('Copy'));

    expect(errorSpy).toHaveBeenCalledWith('Copy failed');
  });
});
