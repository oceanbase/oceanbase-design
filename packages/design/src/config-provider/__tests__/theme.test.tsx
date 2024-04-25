import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, useToken, theme } from '@oceanbase/design';
import defaultTheme from '../../theme/default';

const antToken = theme.getDesignToken();

describe('ConfigProvider theme', () => {
  it('ConfigProvider theme token', () => {
    const Child1 = () => {
      const { token } = useToken();
      expect(token.colorBgLayout).toBe(defaultTheme.token.colorBgLayout);
      return <div />;
    };
    const Child2 = () => {
      const { token } = useToken();
      expect(token.colorBgLayout).toBe('#ff0000');
      return <div />;
    };
    const Child3 = () => {
      const { token } = useToken();
      expect(token.colorBgLayout).toBe('#ff0000');
      return <div />;
    };
    render(
      <ConfigProvider>
        <Child1 />
        <ConfigProvider
          theme={{
            token: {
              colorBgLayout: '#ff0000',
            },
          }}
        >
          <Child2 />
          <ConfigProvider>
            <Child3 />
          </ConfigProvider>
        </ConfigProvider>
      </ConfigProvider>
    );
  });

  it('ConfigProvider theme.customFont', () => {
    const Child1 = () => {
      const { token } = useToken();
      expect(token.fontFamily).toBe(antToken.fontFamily);
      return <div />;
    };
    const Child2 = () => {
      const { token } = useToken();
      expect(token.fontFamily).toBe(`'Source Sans Pro', ${antToken.fontFamily}`);
      return <div />;
    };
    const Child3 = () => {
      const { token } = useToken();
      expect(token.fontFamily).toBe(`'Source Sans Pro', ${antToken.fontFamily}`);
      return <div />;
    };
    render(
      <ConfigProvider>
        <Child1 />
        <ConfigProvider
          theme={{
            customFont: true,
          }}
        >
          <Child2 />
          <ConfigProvider>
            <Child3 />
          </ConfigProvider>
        </ConfigProvider>
      </ConfigProvider>
    );
  });
});
