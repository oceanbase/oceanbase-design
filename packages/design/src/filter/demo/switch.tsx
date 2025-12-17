import React, { useState } from 'react';
import { Filter, Space } from '@oceanbase/design';

const App: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Space wrap>
      <Filter.Switch label="启用功能" value={enabled} onChange={setEnabled} />
      <Filter.Switch label="暗黑模式" value={darkMode} onChange={setDarkMode} />
      <Filter.Switch label="禁用状态" disabled switchProps={{ disabled: true }} />
    </Space>
  );
};

export default App;
