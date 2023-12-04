import React from 'react';
import { Badge, Button, Space, Tooltip } from '@oceanbase/design';

const App: React.FC = () => (
  <Space size={16}>
    <Button type="primary">
      <Badge status="success" text="Success" />
    </Button>
    <Button danger={true}>
      <Badge status="success" text="Success" icon={true} />
    </Button>
    <Tooltip open={true} title={<Badge status="success" text="Success" />}>
      <span>Tooltip</span>
    </Tooltip>
  </Space>
);

export default App;
