import React from 'react';
import { Divider, Input, Space } from '@oceanbase/design';

const App: React.FC = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <div>Input.Password</div>
      <Input.Password />
      <div>Input.Password with autoComplete="new-password"</div>
      <Input.Password autoComplete="new-password" />
    </Space>
  );
};

export default App;
