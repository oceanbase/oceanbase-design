import React from 'react';
import { Space, Spin } from '@oceanbase/design';

const App: React.FC = () => (
  <Space size="middle">
    <Spin gray={false} size="small" />
    <Spin gray={false} />
    <Spin gray={false} size="large" />
  </Space>
);

export default App;
