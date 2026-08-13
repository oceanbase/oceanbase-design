import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, useToken, token, obToken } from '@oceanbase/design';
import { genObToken } from '../obToken';
import type { GlobalToken } from '../interface';
import defaultTheme from '../default';

describe('obToken', () => {
  describe('static obToken object', () => {
    it('should exist and be an object', () => {
      expect(obToken).toBeDefined();
      expect(typeof obToken).toBe('object');
    });

    it('should contain basic token properties', () => {
      expect(obToken.white).toBeDefined();
      expect(obToken.blue4).toBeDefined();
      expect(obToken.colorBgDefault).toBeDefined();
      expect(obToken.space400).toBeDefined();
      expect(obToken.radiusSm).toBeDefined();
    });

    it('should be generated from static token', () => {
      const expectedObToken = genObToken(token as GlobalToken);
      expect(obToken.white).toBe(expectedObToken.white);
      expect(obToken.blue4).toBe(expectedObToken.blue4);
      expect(obToken.colorBgDefault).toBe(expectedObToken.colorBgDefault);
      expect(obToken.space400).toBe(expectedObToken.space400);
    });
  });

  describe('useToken hook returns obToken', () => {
    it('should return obToken from useToken', () => {
      const Child = () => {
        const { obToken: hookObToken } = useToken();
        expect(hookObToken).toBeDefined();
        expect(typeof hookObToken).toBe('object');
        expect(hookObToken.white).toBeDefined();
        expect(hookObToken.blue4).toBeDefined();
        return <div />;
      };
      render(
        <ConfigProvider>
          <Child />
        </ConfigProvider>
      );
    });

    it('should match static obToken', () => {
      const Child = () => {
        const { obToken: hookObToken } = useToken();
        expect(hookObToken.white).toBe(obToken.white);
        expect(hookObToken.blue4).toBe(obToken.blue4);
        expect(hookObToken.colorBgDefault).toBe(obToken.colorBgDefault);
        expect(hookObToken.space400).toBe(obToken.space400);
        return <div />;
      };
      render(
        <ConfigProvider>
          <Child />
        </ConfigProvider>
      );
    });

    it('should be generated from current token', () => {
      const Child = () => {
        const { token: currentToken, obToken: hookObToken } = useToken();
        const expectedObToken = genObToken(currentToken as GlobalToken);
        expect(hookObToken.white).toBe(expectedObToken.white);
        expect(hookObToken.blue4).toBe(expectedObToken.blue4);
        expect(hookObToken.colorBgDefault).toBe(expectedObToken.colorBgDefault);
        return <div />;
      };
      render(
        <ConfigProvider>
          <Child />
        </ConfigProvider>
      );
    });
  });

  describe('obToken mapping from token', () => {
    it('should correctly map color token', () => {
      const Child = () => {
        const { token: currentToken, obToken: hookObToken } = useToken();
        expect(hookObToken.white).toBe(currentToken.white);
        expect(hookObToken.blue4).toBe(currentToken.blue4);
        return <div />;
      };
      render(
        <ConfigProvider>
          <Child />
        </ConfigProvider>
      );
    });

    it('should correctly map semantic color token', () => {
      const Child = () => {
        const { token: currentToken, obToken: hookObToken } = useToken();
        expect(hookObToken.colorBgDefault).toBe(currentToken.colorBgContainer);
        expect(hookObToken.colorTextDefault).toBe(currentToken.colorText);
        return <div />;
      };
      render(
        <ConfigProvider>
          <Child />
        </ConfigProvider>
      );
    });

    it('should correctly map spacing token', () => {
      const Child = () => {
        const { token: currentToken, obToken: hookObToken } = useToken();
        expect(hookObToken.space400).toBe(currentToken.padding);
        return <div />;
      };
      render(
        <ConfigProvider>
          <Child />
        </ConfigProvider>
      );
    });
  });

  describe('obToken with custom theme', () => {
    it('should support custom theme', () => {
      const customTheme = {
        token: {
          ...defaultTheme.token,
          blue4: '#1890ff',
        },
      };

      const Child = () => {
        const { obToken: hookObToken } = useToken();
        expect(hookObToken.blue4).toBe('#1890ff');
        return <div />;
      };
      render(
        <ConfigProvider theme={customTheme}>
          <Child />
        </ConfigProvider>
      );
    });

    it('should update static obToken in ConfigProvider', () => {
      const customTheme = {
        token: {
          ...defaultTheme.token,
          blue4: '#1890ff',
        },
      };

      const Child = () => {
        const { obToken: hookObToken } = useToken();
        return <div data-testid="test">{hookObToken.blue4}</div>;
      };
      const { getByTestId } = render(
        <ConfigProvider theme={customTheme}>
          <Child />
        </ConfigProvider>
      );
      expect(getByTestId('test').textContent).toBe('#1890ff');
      expect(obToken.blue4).toBe('#1890ff');
    });
  });
});
