import React from 'react';
import { render } from '@testing-library/react';
import { Segmented } from '@oceanbase/design';

describe('Segmented', () => {
  it('render options', () => {
    const { asFragment } = render(
      <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('render options with ellipsis', () => {
    const { asFragment } = render(
      <Segmented
        block
        options={[
          123,
          456,
          {
            value: 'longtext',
            label: 'longtext',
            ellipsis: {
              tooltip: true,
            },
          },
        ]}
      />
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
