import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, Typography } from '@oceanbase/design';

const { Text } = Typography;

describe('ConfigProvider typography', () => {
  it('copyable.hover', () => {
    const Child1 = () => {
      const { typography } = useContext(ConfigProvider.ConfigContext);
      expect(typography?.copyable?.hover).toBe(undefined);
      return <Text copyable>default</Text>;
    };
    const Child2 = () => {
      const { typography } = useContext(ConfigProvider.ConfigContext);
      expect(typography?.copyable?.hover).toBe(true);
      return <Text copyable>global hover</Text>;
    };
    const Child3 = () => {
      const { typography } = useContext(ConfigProvider.ConfigContext);
      expect(typography?.copyable?.hover).toBe(true);
      return <Text copyable>inherited hover</Text>;
    };
    const Child4 = () => {
      const { typography } = useContext(ConfigProvider.ConfigContext);
      expect(typography?.copyable?.hover).toBe(true);
      return <Text copyable={{ hover: false }}>override</Text>;
    };

    const { container } = render(
      <ConfigProvider>
        <Child1 />
        <ConfigProvider typography={{ copyable: { hover: true } }}>
          <Child2 />
          <ConfigProvider>
            <Child3 />
            <Child4 />
          </ConfigProvider>
        </ConfigProvider>
      </ConfigProvider>
    );
    expect(container.querySelectorAll('.ant-typography-copyable-hover').length).toBe(2);
  });
});
