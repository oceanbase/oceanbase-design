import { Alert, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert message="Info Text" type="info" />
    <Alert message="Success Text" type="success" />
    <Alert message="Warning Text" type="warning" />
    <Alert message="Error Text" type="error" />
  </Space>
);

export default App;
