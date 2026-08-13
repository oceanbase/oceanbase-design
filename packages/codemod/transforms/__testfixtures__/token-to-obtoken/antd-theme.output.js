import React from 'react';
import { Collapse, theme } from 'antd';

const Demo = () => {
  const { obToken } = theme.useToken();
  return <Collapse style={{ borderRadius: obToken.radiusLg }} />;
};

export default Demo;
