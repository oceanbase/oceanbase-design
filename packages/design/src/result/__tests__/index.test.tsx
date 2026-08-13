import React from 'react';
import { render } from '@testing-library/react';
import { Result } from '@oceanbase/design';

describe('Result', () => {
  it.each(['success', 'error', 'warning', 'processing', 'normal', '403', '404', '500'] as const)(
    'should render status %s correctly',
    status => {
      const { asFragment } = render(<Result status={status} title={status} />);
      expect(asFragment()).toMatchSnapshot();
    }
  );

  it.each([
    ['PRESENTED_IMAGE_NOT_FOUND', Result.PRESENTED_IMAGE_NOT_FOUND],
    ['PRESENTED_IMAGE_NETWORK_ERROR', Result.PRESENTED_IMAGE_NETWORK_ERROR],
    ['PRESENTED_IMAGE_VERSION_UPDATE', Result.PRESENTED_IMAGE_VERSION_UPDATE],
  ] as const)('should render %s correctly', (_name, Icon) => {
    const { asFragment } = render(<Result icon={<Icon />} title="Title" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
