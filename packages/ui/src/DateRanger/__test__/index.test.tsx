import React from 'react';
import { render } from '@testing-library/react';
import { DateRanger } from '@oceanbase/ui';

describe('DateRanger', () => {
  it('Normal display', () => {
    const { container, asFragment } = render(<DateRanger />);
    expect(container.querySelector('.ob-date-ranger-wrapper')).toBeTruthy();
  });
});
