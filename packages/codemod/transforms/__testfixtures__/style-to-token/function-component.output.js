import React from 'react';
import { Alert, Button, theme, Tooltip } from '@oceanbase/design';

function Demo1() {
  const { token } = theme.useToken();
  const tokenList = [token.colorTextTertiary, token.colorInfo, token.colorBgLayout];
  return (
    <div>
      <Alert style={{ color: token.colorText, background: token.colorTextSecondary, backgroundColor: token.colorTextTertiary, border: `1px solid ${token.colorBorder}`, fontSize: token.fontSize, fontWeight: token.fontWeight, borderRadius: token.borderRadius }} />
      <Button style={{ color: token.colorInfo, background: token.colorSuccess, backgroundColor: token.colorWarning, borderColor: token.colorError, fontSize: token.fontSizeSM, fontWeight: token.fontWeightStrong, borderRadius: token.borderRadiusMD }}></Button>
      <Tooltip color={token.colorBgContainer} backgroundColor={token.colorErrorBg} borderColor={token.colorBgLayout} border={`1px solid ${token.colorBgLayout}`} />
    </div>
  );
};

const Demo2 = () => {
  const { token } = theme.useToken();
  const tokenList = [token.colorTextTertiary, token.colorInfo, token.colorBgLayout];
  return (
    <div>
      <Alert style={{ color: token.colorText, background: token.colorTextSecondary, backgroundColor: token.colorTextTertiary, border: `1px solid ${token.colorBorder}`, fontSize: token.fontSize }} />
      <Button style={{ color: token.colorInfo, background: token.colorSuccess, backgroundColor: token.colorWarning, borderColor: token.colorError, fontSize: token.fontSizeSM }}></Button>
      <Tooltip color={token.colorBgContainer} backgroundColor={token.colorErrorBg} borderColor={token.colorBgLayout} border={`1px solid ${token.colorBgLayout}`} />
    </div>
  );
};

export { Demo1, Demo2 };
