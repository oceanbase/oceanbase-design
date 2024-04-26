import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, useToken } from '@oceanbase/design';
import { injectedStaticFunction } from '../../static-function';

describe('ConfigProvider injectStaticFunction', () => {
  it('injectStaticFunction', () => {
    const Child = () => {
      expect(injectedStaticFunction).toBe(true);
      return <div />;
    };
    render(
      <ConfigProvider>
        <Child />
      </ConfigProvider>
    );
  });
});
