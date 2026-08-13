import React from 'react';
import { Collapse, theme } from 'antd';

const Demo = () => {
  const { token } = theme.useToken();
  return <Collapse style={{ borderRadius: token.borderRadiusLG }} />;
};

export default Demo;
