import { Alert, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert message="Info Text" type="info" showIcon mini closable />
    <Alert message="Success Text" type="success" showIcon mini closable />
    <Alert message="Warning Text" type="warning" showIcon mini closable />
    <Alert message="Error Text" type="error" showIcon mini closable />
  </Space>
);

export default App;
