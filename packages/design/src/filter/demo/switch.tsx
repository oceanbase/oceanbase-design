import React, { useState } from 'react';
import { Filter, Space } from '@oceanbase/design';

const App: React.FC = () => {
  const [switchValue, setSwitchValue] = useState<boolean>(false);
  const [switchValue2, setSwitchValue2] = useState<boolean>(true);

  return (
    <Space wrap>
      <Filter.Switch label="开关筛选" value={switchValue} onChange={setSwitchValue} />
      <Filter.Switch label="已开启" value={switchValue2} onChange={setSwitchValue2} />
      <Filter.Switch label="禁用状态" disabled value={false} />
      <Filter.Switch
        label="自定义 Switch 属性"
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
