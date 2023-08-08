import React from 'react';
import { render } from '@testing-library/react';
import { Spin } from '@oceanbase/design';

describe('Spin', () => {
  it('default indicator should render correctly', () => {
    const { container, asFragment } = render(<Spin />);
    expect(container.querySelector('.ant-spin-oceanbase')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('gray default indicator should render correctly', () => {
    const { container, asFragment } = render(<Spin gray={true} />);
    expect(container.querySelector('.ant-spin-oceanbase-gray')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('custom indicator should work', () => {
    const { container, asFragment } = render(
      <Spin indicator={<div className="custom-indicator" />} />
    );
    expect(container.querySelector('.custom-indicator')).toBeTruthy();
    expect(container.querySelector('.ant-spin-oceanbase')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
