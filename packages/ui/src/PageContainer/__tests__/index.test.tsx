import React from 'react';
import { render } from '@testing-library/react';
import BasicDemo from '../demo/basic';
import ExtraAndFooterDemo from '../demo/extra-footer';

describe('PageContainer', () => {
  it('basic', () => {
    const { asFragment } = render(<BasicDemo />);
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('extra and footer', () => {
    const { asFragment } = render(<ExtraAndFooterDemo />);
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
