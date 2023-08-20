import React from 'react';
import { render } from '@testing-library/react';
import ConfigProvider from '..';
import Spin from '../../spin';

describe('ConfigProvider spin', () => {
  it('spin.indicator should work', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        spin={{
          indicator: <div className="custom-indicator" />,
        }}
      >
        <Spin />
      </ConfigProvider>
    );
    expect(container.querySelector('.custom-indicator')).toBeTruthy();
    expect(container.querySelector('.ant-spin-oceanbase')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
