import React from 'react';
import { Button, Space, Tooltip } from '@oceanbase/design';

const App: React.FC = () => {
  return (
    <Space direction="vertical" size="small">
      <div>自定义偏移（offset: [50, -50]）</div>
      <Space>
        <Tooltip title="向右偏移 50px，向上偏移 50px" align={{ offset: [50, -50] }}>
          <Button>Hover me</Button>
        </Tooltip>
      </Space>
    </Space>
  );
};

export default App;
