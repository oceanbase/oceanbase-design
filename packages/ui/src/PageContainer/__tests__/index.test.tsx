import React from 'react';
import { render } from '@testing-library/react';
import BasicDemo from '../demo/basic';
import TitleCompatibleDemo from '../demo/title';

describe('PageContainer', () => {
  it('basic', () => {
    const { asFragment } = render(<BasicDemo />);
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('title', () => {
    const { asFragment } = render(<TitleCompatibleDemo />);
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
