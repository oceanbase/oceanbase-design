import React from 'react';
import { Button, Space, Tooltip } from '@oceanbase/design';

const App: React.FC = () => {
  return (
    <Space direction="vertical" size="small">
      <div>Custom offset (offset: [50, -50])</div>
      <Space>
        <Tooltip title="Offset 50px to the right, 50px up" align={{ offset: [50, -50] }}>
          <Button>Hover me</Button>
        </Tooltip>
      </Space>
    </Space>
  );
};

export default App;
