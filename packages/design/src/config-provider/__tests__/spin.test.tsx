import React from 'react';
import { render } from '@testing-library/react';
import ConfigProvider from '..';
import Spin from '../../spin';

describe('ConfigProvider spin', () => {
  beforeEach(() => {});

  it('ConfigProvider spin.indicator should work', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        spin={{
          indicator: <div className="custom-indicator" />,
        }}
      >
        <Spin />
      </ConfigProvider>
    );
    expect(container.querySelector<HTMLElement>('.ant-spin-dot')?.className).toContain(
      'custom-indicator'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
