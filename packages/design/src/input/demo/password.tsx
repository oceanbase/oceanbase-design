import React from 'react';
import { Input, Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Input.Password placeholder="auto fill password by default" />
      <Input.Password
        autoComplete="new-password"
        placeholder='not auto fill password with autoComplete="new-password"'
      />
    </Space>
  );
};

export default App;
