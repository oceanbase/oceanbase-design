import React from 'react';
import { Space, Spin } from '@oceanbase/design';

const App: React.FC = () => (
  <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
);

export default App;
