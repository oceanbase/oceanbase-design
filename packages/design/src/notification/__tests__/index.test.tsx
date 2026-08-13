import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ErrorDetails from '../ErrorDetails';

describe('ErrorDetails', () => {
  it('renders error details with expand and copy actions', () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    });

    const { getByText } = render(
      <ErrorDetails
        prefixCls="ant-notification-notice"
        items={[
          { label: 'Request ID', value: 'abc' },
          { label: 'Error Code', value: 'ROLE_NOT_AUTHORIZE' },
        ]}
      />
    );

    expect(getByText('Show more')).toBeTruthy();
    fireEvent.click(getByText('Show more'));
    expect(getByText('Error Code: ROLE_NOT_AUTHORIZE')).toBeTruthy();
    fireEvent.click(getByText('Copy'));
    expect(writeText).toHaveBeenCalledWith('- Request ID: abc\n- Error Code: ROLE_NOT_AUTHORIZE');
  });
});
