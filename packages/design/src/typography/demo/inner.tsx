import React from 'react';
import { Button, Space, Tooltip, Typography } from '@oceanbase/design';

const App: React.FC = () => (
  <Space direction="vertical" size={48}>
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
    <Space size={16}>
      Typography Paragraph
      <Button type="primary">
        <Typography.Paragraph>Typography Paragraph</Typography.Paragraph>
      </Button>
      <Button danger={true}>
        <Typography.Paragraph>Typography Paragraph</Typography.Paragraph>
      </Button>
      <Tooltip
        open={true}
        title={<Typography.Paragraph>This is Typography Paragraph</Typography.Paragraph>}
      >
        <span>Tooltip</span>
      </Tooltip>
    </Space>
  </Space>
);

export default App;
