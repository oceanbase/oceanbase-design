import React from 'react';
import { Alert, theme } from '@oceanbase/design';

const Demo = () => {
  const { token } = theme.useToken();
  return (
    <Alert
      style={{
        color: token.colorText,
        background: token.colorBgContainer,
        border: `1px solid ${token.colorBorder}`,
      }}
    />
  );
};

export default Demo;
