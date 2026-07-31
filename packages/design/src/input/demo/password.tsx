import React from 'react';
import { Divider, Input, Space } from '@oceanbase/design';

const App: React.FC = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <div>Input.Password</div>
      <Input.Password />
      <div>Input.Password autoComplete=&quot;new-password&quot;</div>
      <Input.Password autoComplete="new-password" />
      <div>Input.Password autoComplete=&quot;current-password&quot;</div>
      <Input.Password autoComplete="current-password" />
    </Space>
  );
};

export default App;
