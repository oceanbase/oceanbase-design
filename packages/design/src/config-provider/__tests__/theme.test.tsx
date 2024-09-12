import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, useToken } from '@oceanbase/design';
import defaultTheme, { fontFamilyEn } from '../../theme/default';
import enUS from '../../locale/en-US';

describe('ConfigProvider theme', () => {
  it('token', () => {
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

  it('token.fontFamily', () => {
    const Child1 = () => {
      const { token } = useToken();
      expect(token.fontFamily).toBe(defaultTheme.token.fontFamily);
      return <div />;
    };
    const Child2 = () => {
      const { token } = useToken();
      expect(token.fontFamily).toBe(`'Custom Font'`);
      return <div />;
    };
    const Child3 = () => {
      const { token } = useToken();
      expect(token.fontFamily).toBe(`'Custom Font'`);
      return <div />;
    };
    const Child4 = () => {
      const { token } = useToken();
      expect(token.fontFamily).toBe(fontFamilyEn);
      return <div />;
    };
    const Child5 = () => {
      const { token } = useToken();
      expect(token.fontFamily).toBe(fontFamilyEn);
      return <div />;
    };
    render(
      <ConfigProvider>
        <Child1 />
        <ConfigProvider
          theme={{
            token: {
              fontFamily: `'Custom Font'`,
            },
          }}
        >
          <Child2 />
          <ConfigProvider>
            <Child3 />
          </ConfigProvider>
        </ConfigProvider>
        <ConfigProvider locale={enUS}>
          <Child4 />
          <ConfigProvider>
            <Child5 />
          </ConfigProvider>
        </ConfigProvider>
      </ConfigProvider>
    );
  });

  it('theme.isAliyun', () => {
    const Child1 = () => {
      const { token } = useToken();
      expect(token.colorPrimary).toBe(defaultTheme.token.colorPrimary);
      return <div />;
    };
    const Child2 = () => {
      const { token } = useToken();
      expect(token.colorPrimary).toBe('#0064c8');
      return <div />;
    };
    const Child3 = () => {
      const { token } = useToken();
      expect(token.colorPrimary).toBe('#0064c8');
      return <div />;
    };
    render(
      <ConfigProvider>
        <Child1 />
        <ConfigProvider
          theme={{
            isAliyun: true,
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
