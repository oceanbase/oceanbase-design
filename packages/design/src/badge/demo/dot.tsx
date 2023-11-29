import React from 'react';
import { Badge, Space } from '@oceanbase/design';
import { NotificationOutlined } from '@ant-design/icons';

const App: React.FC = () => (
  <Space>
    <Badge dot>
      <NotificationOutlined style={{ fontSize: 16 }} />
    </Badge>
    <Badge dot>
      <a href="#">Link something</a>
    </Badge>
  </Space>
);

export default App;
