import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, token } from '@oceanbase/design';
import defaultTheme from '../../theme/default';

describe('ConfigProvider static function', () => {
  it('token', () => {
    render(
      <ConfigProvider>
        <div />
      </ConfigProvider>
    );
    expect(token.boxShadow).toBe(defaultTheme.token.boxShadow);
    expect(token.boxShadowSecondary).toBe(defaultTheme.token.boxShadowSecondary);
  });
});
