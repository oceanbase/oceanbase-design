import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider } from '@oceanbase/design';

describe('ConfigProvider hideOnSinglePage', () => {
  it('ConfigProvider hideOnSinglePage', () => {
    const Child1 = () => {
      const { hideOnSinglePage } = useContext(ConfigProvider.ExtendedConfigContext);
      expect(hideOnSinglePage).toBe(true);
      return <div />;
    };
    const Child2 = () => {
      const { hideOnSinglePage } = useContext(ConfigProvider.ExtendedConfigContext);
      expect(hideOnSinglePage).toBe(false);
      return <div />;
    };
    const Child3 = () => {
      const { hideOnSinglePage } = useContext(ConfigProvider.ExtendedConfigContext);
      expect(hideOnSinglePage).toBe(false);
      return <div />;
    };
    render(
      <ConfigProvider>
        <Child1 />
        <ConfigProvider hideOnSinglePage={false}>
          <Child2 />
          <ConfigProvider>
            <Child3 />
          </ConfigProvider>
        </ConfigProvider>
      </ConfigProvider>
    );
  });
});
