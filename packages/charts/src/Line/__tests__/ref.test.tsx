import React, { useEffect, useRef } from 'react';
import { render } from '@testing-library/react';
import { Line } from '@oceanbase/charts';

describe('Line ref', () => {
  it('ref', () => {
    const DemoLine = () => {
      const ref = useRef(null);
      useEffect(() => {
        expect(ref.current).not.toBeNull();
        expect(typeof ref.current?.getChart).toBe('function');
      }, []);
      const config = {
        data: [],
        xField: 'x',
        yField: 'y',
      };
      return <Line {...config} ref={ref} />;
    };
    const { asFragment } = render(<DemoLine />);
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
