import { Button, ConfigProvider, Space } from '@oceanbase/design';
import { legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs';
import React from 'react';

const App: React.FC = () => (
  <ConfigProvider
    styleProviderProps={{
      hashPriority: 'high',
      transformers: [legacyLogicalPropertiesTransformer],
    }}
  >
    <Space>
      <Button type="primary">Button</Button>
      <Button>Button</Button>
    </Space>
  </ConfigProvider>
);

export default App;
