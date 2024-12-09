import React, { useState } from 'react';
import { Button, Popover, Space, Switch } from '@oceanbase/design';

const App: React.FC = () => {
  const [limit, setLimit] = useState(false);
  return (
    <Space size={16} direction="vertical">
      <Space>
        max-width and max-height:
        <Switch
          value={limit}
          size="small"
          onChange={value => {
            setLimit(value);
          }}
        />
      </Space>
      <Popover
        title="Title"
        content="This is long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long  long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long  long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long  long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long content."
        overlayInnerStyle={limit ? { maxWidth: 300, maxHeight: 250, overflow: 'auto' } : {}}
      >
        <Button type="primary">Hover me</Button>
      </Popover>
    </Space>
  );
};

export default App;
