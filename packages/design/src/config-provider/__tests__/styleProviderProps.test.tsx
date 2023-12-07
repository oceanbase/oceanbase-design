import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider } from '@oceanbase/design';
import { legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs';
import StyleContext from '@ant-design/cssinjs/es/StyleContext';

describe('ConfigProvider styleProviderProps', () => {
  it('ConfigProvider styleProviderProps.hashPriority', () => {
    const Child1 = () => {
      const { hashPriority, transformers } = useContext(StyleContext);
      expect(hashPriority).toBe('low');
      expect(transformers).toBeUndefined();
      return <div />;
    };
    const Child2 = () => {
      const { hashPriority, transformers } = useContext(StyleContext);
      expect(hashPriority).toBe('low');
      expect(transformers).toBeUndefined();
      return <div />;
    };
    const Child3 = () => {
      const { hashPriority, transformers } = useContext(StyleContext);
      expect(hashPriority).toBe('high');
      expect(transformers.length).toBe(1);
      return <div />;
    };
    const { asFragment } = render(
      <ConfigProvider>
        <Child1 />
        <ConfigProvider>
          <Child2 />
        </ConfigProvider>
        <ConfigProvider
          styleProviderProps={{
            hashPriority: 'high',
            transformers: [legacyLogicalPropertiesTransformer],
          }}
        >
          <Child3 />
        </ConfigProvider>
      </ConfigProvider>
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
