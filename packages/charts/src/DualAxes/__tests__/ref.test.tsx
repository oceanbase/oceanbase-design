import React, { useEffect, useRef } from 'react';
import { render } from '@testing-library/react';
import { DualAxes } from '@oceanbase/charts';

describe('DualAxes ref', () => {
  it('ref', () => {
    const DemoDualAxes = () => {
      const ref = useRef(null);
      useEffect(() => {
        expect(ref).not.toBeNull();
        expect(typeof ref?.chart).toBe('object');
      }, []);
      const config = {
        data: [[], []],
        xField: 'x',
        yField: ['y1', 'y2'],
      };
      return <DualAxes {...config} ref={ref} />;
    };
    const { asFragment } = render(<DemoDualAxes />);
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
