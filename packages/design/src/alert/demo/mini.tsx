import { Alert, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert message="Info Text" type="info" showIcon mini />
    <Alert message="Success Text" type="success" showIcon mini />
    <Alert message="Warning Text" type="warning" showIcon mini />
    <Alert message="Error Text" type="error" showIcon mini />
  </Space>
);

export default App;
