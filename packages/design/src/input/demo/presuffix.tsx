import React from 'react';
import { Input, Space, Tooltip } from '@oceanbase/design';
import { InfoCircleOutlined, UserOutlined, LockOutlined } from '@oceanbase/icons';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Input
      placeholder="Enter your username"
      prefix={<UserOutlined />}
      suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined />
        </Tooltip>
      }
    />
    <Input prefix="￥" suffix="RMB" />
    <Input prefix="￥" suffix="RMB" disabled />
    <Input.Password suffix={<LockOutlined />} placeholder="input password support suffix" />
  </Space>
);

export default App;
