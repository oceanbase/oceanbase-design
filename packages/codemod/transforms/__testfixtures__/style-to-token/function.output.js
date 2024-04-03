import React from 'react';
import { Alert, Button, theme, Tooltip, token } from '@oceanbase/design';

const getComponent = () => {
  const tokenList = [token.colorTextTertiary, token.colorInfo, token.colorBgLayout];
  return (
    (<div>
      <Alert style={{ color: token.colorText, background: token.colorTextSecondary, backgroundColor: token.colorTextTertiary, border: `1px solid ${token.colorBorder}` }} />
      <Button style={{ color: token.colorInfo, background: token.colorSuccess, backgroundColor: token.colorWarning, borderColor: token.colorError }}></Button>
      <Tooltip color={token.colorBgContainer} backgroundColor={token.colorErrorBg} borderColor={token.colorBgLayout} border={`1px solid ${token.colorBgLayout}`} />
    </div>)
  );
};

export default getComponent;
