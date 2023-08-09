import React from 'react';
import { Space, Spin } from '@oceanbase/design';

const App: React.FC = () => (
  <Space size="middle">
    <Spin gray={true} size="small" />
    <Spin gray={true} />
    <Spin gray={true} size="large" />
  </Space>
);

export default App;
