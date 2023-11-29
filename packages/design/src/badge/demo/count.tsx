import React from 'react';
import { Avatar, Badge, Space, theme } from '@oceanbase/design';
import { ClockCircleOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <Space size="middle">
      <Badge count={5}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={0} showZero>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={<ClockCircleOutlined style={{ color: token.colorError }} />}>
        <Avatar shape="square" size="large" />
      </Badge>
    </Space>
  );
};

export default App;
