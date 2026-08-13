import React from 'react';
import { render } from '@testing-library/react';
import { Empty } from '@oceanbase/design';

describe('Empty', () => {
  it.each([
    ['PRESENTED_IMAGE_DEFAULT', Empty.PRESENTED_IMAGE_DEFAULT],
    ['PRESENTED_IMAGE_COLORED', Empty.PRESENTED_IMAGE_COLORED],
    ['PRESENTED_IMAGE_DATABASE', Empty.PRESENTED_IMAGE_DATABASE],
    ['PRESENTED_IMAGE_GUIDE', Empty.PRESENTED_IMAGE_GUIDE],
  ] as const)('should render %s correctly', (_name, image) => {
    const { asFragment } = render(<Empty image={image} description="No data" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render horizontal layout with guide image', () => {
    const { container, asFragment } = render(
      <Empty
        layout="horizontal"
        image={Empty.PRESENTED_IMAGE_GUIDE}
        title="Welcome"
        description="Get started"
      />
    );
    expect(container.querySelector('.ant-empty-horizontal')).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  });
});
