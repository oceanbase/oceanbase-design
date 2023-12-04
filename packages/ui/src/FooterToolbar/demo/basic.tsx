/**
 * iframe: 600
 */
import React from 'react';
import { Button, theme } from '@oceanbase/design';
import { FooterToolbar } from '@oceanbase/ui';

export default () => {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        height: 800,
        backgroundColor: token.colorBgLayout,
      }}
    >
      <FooterToolbar extra="Some extra message">
        <Button>Cancel</Button>
        <Button type="primary">Ok</Button>
      </FooterToolbar>
    </div>
  );
};
