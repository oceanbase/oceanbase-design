import React from 'react';
import { Input, Space } from '@oceanbase/design';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Input />
    <Input.Search />
    <Input.Password />
    <Input.TextArea />
  </Space>
);

export default App;
