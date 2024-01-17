import React, { useContext } from 'react';
import { ConfigProvider } from '@oceanbase/design';

describe('ConfigProvider table', () => {
  it('table.selectionColumnWidth should work', () => {
    const Child1 = () => {
      const { table } = useContext(ConfigProvider.ConfigContext);
      expect(table?.selectionColumnWidth).toBe(undefined);
      return <div />;
    };
    const Child2 = () => {
      const { table } = useContext(ConfigProvider.ConfigContext);
      expect(table?.selectionColumnWidth).toBe(48);
      return <div />;
    };
    const Child3 = () => {
      const { table } = useContext(ConfigProvider.ConfigContext);
      expect(table?.selectionColumnWidth).toBe(48);
      return <div />;
    };
    <ConfigProvider>
      <Child1 />
      <ConfigProvider
        table={{
          selectionColumnWidth: 48,
        }}
      >
        <Child2 />
        <ConfigProvider>
          <Child3 />
        </ConfigProvider>
      </ConfigProvider>
    </ConfigProvider>;
  });
});
