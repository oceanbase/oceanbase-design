import { Button, Space, Tooltip } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space>
      <Tooltip title="This is prompt text">
        <Button>Default</Button>
      </Tooltip>
      <Tooltip title="This is prompt text" type="light">
        <Button>Light</Button>
      </Tooltip>
      <Tooltip title="This is prompt text" type="info">
        <Button>Info</Button>
      </Tooltip>
      <Tooltip title="This is prompt text" type="success">
        <Button>Success</Button>
      </Tooltip>
      <Tooltip title="This is prompt text" type="warning">
        <Button>Warning</Button>
      </Tooltip>
      <Tooltip title="This is prompt text" type="error">
        <Button>Error</Button>
      </Tooltip>
    </Space>
  );
};

export default App;
