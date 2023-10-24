import React from 'react';
import { Alert, Button, theme } from '@oceanbase/design';

const Demo = () => {
  const { token } = theme.useToken();
  return (
    (<div>
      <Alert style={{ color: token.colorText, background: token.colorTextSecondary, backgroundColor: token.colorTextTertiary, borderColor: token.colorBgLayout }} />
      <Button style={{ color: token.colorInfo, background: token.colorSuccess, backgroundColor: token.colorWarning, borderColor: token.colorError }}></Button>
    </div>)
  );
};

export default Demo;
