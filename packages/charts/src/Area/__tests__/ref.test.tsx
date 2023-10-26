import React, { useEffect, useRef } from 'react';
import { render } from '@testing-library/react';
import { Area } from '@oceanbase/charts';

describe('Area ref', () => {
  it('ref', () => {
    const DemoArea = () => {
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
      return <Area {...config} ref={ref} />;
    };
    const { asFragment } = render(<DemoArea />);
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
