import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, useToken } from '@oceanbase/design';
import defaultTheme from '../../theme/default';

describe('theme', () => {
  it('default theme color', () => {
    const Child = () => {
      const { token } = useToken();
      // semantic color
      expect(token.colorPrimary).toBe(defaultTheme.token.colorPrimary);
      expect(token.colorInfo).toBe(defaultTheme.token.colorInfo);
      expect(token.colorSuccess).toBe(defaultTheme.token.colorSuccess);
      expect(token.colorWarning).toBe(defaultTheme.token.colorWarning);
      expect(token.colorError).toBe(defaultTheme.token.colorError);
      // preset color
      expect(token.blue).toBe(defaultTheme.token.colorInfo);
      expect(token.green).toBe(defaultTheme.token.colorSuccess);
      expect(token.yellow).toBe(defaultTheme.token.colorWarning);
      expect(token.red).toBe(defaultTheme.token.colorError);
      return <div />;
    };
    render(
      <ConfigProvider>
        <Child />
      </ConfigProvider>
    );
  });
});
