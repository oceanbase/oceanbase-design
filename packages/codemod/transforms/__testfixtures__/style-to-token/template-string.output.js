import { theme, token } from '@oceanbase/design';
import React from 'react';

const Component = () => {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        border: `1px solid ${token.colorTextSecondary}`,
      }}
    />
  );
};

const getComponent = () => {
  return (
    <div
      style={{
        border: `1px solid ${token.colorTextSecondary}`,
      }}
    />
  );
};

export default Component;