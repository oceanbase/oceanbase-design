import { obToken, useToken } from '@oceanbase/design';
import React from 'react';

const Component = () => {
  const { obToken } = useToken();
  return (
    <div
      style={{
        border: `1px solid ${obToken.colorTextLabel}`,
      }}
    />
  );
};

const getComponent = () => {
  return (
    <div
      style={{
        border: `1px solid ${obToken.colorTextLabel}`,
      }}
    />
  );
};

export default Component;
