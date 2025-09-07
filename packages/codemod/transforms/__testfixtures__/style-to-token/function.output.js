import React from 'react';
import { Alert, Button, Tooltip, token } from '@oceanbase/design';

function getComponent1() {
  const tokenList = [token.colorTextTertiary, token.colorInfo, token.colorBgLayout];
  return (
    <div>
      <Alert style={{ color: token.colorText, background: token.colorTextSecondary, backgroundColor: token.colorTextTertiary, border: `1px solid ${token.colorBorder}`, fontSize: token.fontSize }} />
      <Button style={{ color: token.colorInfo, background: token.colorSuccess, backgroundColor: token.colorWarning, borderColor: token.colorError, fontSize: token.fontSizeSM }}></Button>
      <Tooltip color={token.colorBgContainer} backgroundColor={token.colorErrorBg} borderColor={token.colorBgLayout} border={`1px solid ${token.colorBgLayout}`} />
    </div>
  );
};

const getComponent2 = () => {
  const tokenList = [token.colorTextTertiary, token.colorInfo, token.colorBgLayout];
  return (
    <div>
      <Alert style={{ color: token.colorText, background: token.colorTextSecondary, backgroundColor: token.colorTextTertiary, border: `1px solid ${token.colorBorder}`, fontSize: token.fontSize }} />
      <Button style={{ color: token.colorInfo, background: token.colorSuccess, backgroundColor: token.colorWarning, borderColor: token.colorError, fontSize: token.fontSizeSM }}></Button>
      <Tooltip color={token.colorBgContainer} backgroundColor={token.colorErrorBg} borderColor={token.colorBgLayout} border={`1px solid ${token.colorBgLayout}`} />
    </div>
  );
};

export default () => {
  const tokenList = [token.colorTextTertiary, token.colorInfo, token.colorBgLayout];
  return (
    <div>
      <Alert style={{ color: token.colorText, background: token.colorTextSecondary, backgroundColor: token.colorTextTertiary, border: `1px solid ${token.colorBorder}`, fontSize: token.fontSize }} />
      <Button style={{ color: token.colorInfo, background: token.colorSuccess, backgroundColor: token.colorWarning, borderColor: token.colorError, fontSize: token.fontSizeSM }}></Button>
      <Tooltip color={token.colorBgContainer} backgroundColor={token.colorErrorBg} borderColor={token.colorBgLayout} border={`1px solid ${token.colorBgLayout}`} />
    </div>
  );
};

export { getComponent1, getComponent2 };
