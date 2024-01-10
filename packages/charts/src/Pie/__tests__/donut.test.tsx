import React from 'react';
import { render } from '@testing-library/react';
import DonutFloor from '../demo/donut-floor';

describe('donut', () => {
  it('floor number', () => {
    const { container, asFragment } = render(<DonutFloor />);
    expect(container.querySelectorAll('.g2-html-annotation')?.[1].textContent).toBe('21.16');
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
