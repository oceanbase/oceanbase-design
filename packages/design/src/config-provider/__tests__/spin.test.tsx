import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, Spin } from '@oceanbase/design';

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

  it('spin.indicator should work in nested ConfigProvider', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        spin={{
          indicator: <div className="custom-indicator-1" />,
        }}
      >
        <ConfigProvider>
          <Spin />
        </ConfigProvider>
        <ConfigProvider
          spin={{
            indicator: <div className="custom-indicator-2" />,
          }}
        >
          <Spin />
        </ConfigProvider>
      </ConfigProvider>
    );
    expect(container.querySelectorAll('.custom-indicator-1').length).toBe(1);
    expect(container.querySelectorAll('.custom-indicator-2').length).toBe(1);
    expect(container.querySelectorAll('.ant-spin-oceanbase').length).toBe(0);
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
