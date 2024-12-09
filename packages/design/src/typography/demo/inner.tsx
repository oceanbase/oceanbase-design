import React from 'react';
import { Button, Space, Tooltip, Typography } from '@oceanbase/design';

const App: React.FC = () => (
  <Space size={16}>
    Typography Text
    <Button type="primary">
      <Typography.Text>Typography Text</Typography.Text>
    </Button>
    <Button danger={true}>
      <Typography.Text>Typography Text</Typography.Text>
    </Button>
    <Tooltip open={true} title={<Typography.Text>This is Typography Text</Typography.Text>}>
      <span>Tooltip</span>
    </Tooltip>
  </Space>
);

export default App;
