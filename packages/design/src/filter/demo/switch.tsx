import React, { useState } from 'react';
import { Filter, Space } from '@oceanbase/design';

const App: React.FC = () => {
  const [switchValue, setSwitchValue] = useState<boolean>(false);
  const [switchValue2, setSwitchValue2] = useState<boolean>(true);

  return (
    <Space wrap>
      <Filter.Switch label="Switch filter" value={switchValue} onChange={setSwitchValue} />
      <Filter.Switch label="Enabled" value={switchValue2} onChange={setSwitchValue2} />
      <Filter.Switch label="Disabled" disabled value={false} />
      <Filter.Switch
        label="Custom Switch props"
        value={switchValue}
        onChange={setSwitchValue}
        switchProps={{
          size: 'small',
        }}
      />
    </Space>
  );
};

export default App;
