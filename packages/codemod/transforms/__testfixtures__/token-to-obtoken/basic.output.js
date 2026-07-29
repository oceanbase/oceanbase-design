import React from 'react';
import { Alert, theme } from '@oceanbase/design';

const Demo = () => {
  const { obToken } = theme.useToken();
  return (
    <Alert
      style={{
        color: obToken.colorTextDefault,
        background: obToken.colorBgDefault,
        border: `1px solid ${obToken.colorBorderDefault}`,
      }}
    />
  );
};

export default Demo;
