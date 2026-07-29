import React from 'react';
import { Alert, Button, Tooltip, useToken } from '@oceanbase/design';

const Demo = () => {
  const { obToken } = useToken();
  const columns = [{
    render: () => {
      return <Tooltip color={obToken.colorTextInverse} backgroundColor={obToken.colorBgError} borderColor={obToken.colorBorderDefault} border={`1px solid ${obToken.colorBorderDefault}`} style={{ fontSize: obToken.fontSize325 }} />;
    },
  }];
  return (
    <div>
      <Alert style={{ color: obToken.colorTextDefault, background: obToken.colorBgSecondary, backgroundColor: obToken.colorBgHoverSecondary, border: `1px solid ${obToken.colorBorderDefault}`, fontSize: obToken.fontSize325 }} />
      <Button style={{ color: obToken.colorTextLink, background: obToken.colorTextSuccess, backgroundColor: obToken.colorTextWarning, borderColor: obToken.colorTextError, fontSize: obToken.fontSize300 }}></Button>
    </div>
  );
};

export default Demo;
