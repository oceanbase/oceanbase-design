import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider } from '@oceanbase/design';

describe('ConfigProvider appProps', () => {
  it('ConfigProvider styleProviderProps.component', () => {
    const { asFragment } = render(
      <ConfigProvider>
        <div>Child 1</div>
        <ConfigProvider appProps={{ component: 'div' }}>
          <div>Child 2</div>
        </ConfigProvider>
      </ConfigProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
