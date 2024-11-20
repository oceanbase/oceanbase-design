import React, { useState } from 'react';
import { Space, Switch, Tooltip } from '@oceanbase/design';

const App: React.FC = () => {
  const [custom, setCustom] = useState(false);
  return (
    <Space size={16} direction="vertical">
      <Space>
        max-width and max-height:
        <Switch
          value={custom}
          size="small"
          onChange={value => {
            setCustom(value);
          }}
        />
      </Space>
      <Tooltip
        overlayStyle={custom ? { maxWidth: 800 } : {}}
        overlayInnerStyle={custom ? { maxHeight: 400 } : {}}
        title="This is long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long  long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long  long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long  long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long text."
      >
        <span>Tooltip will show on mouse enter.</span>
      </Tooltip>
    </Space>
  );
};

export default App;
