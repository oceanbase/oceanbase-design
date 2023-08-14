import React from 'react';
import { Alert, Space, Spin } from '@oceanbase/design';

const containerStyle = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
  width: 120,
  height: 120,
};

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Space>
      <Spin tip="Loading" size="small">
        <div style={containerStyle} />
      </Spin>
      <Spin tip="Loading">
        <div style={containerStyle} />
      </Spin>
      <Spin tip="Loading" size="large">
        <div style={containerStyle} />
      </Spin>
    </Space>

    <Spin tip="Loading...">
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </Spin>
  </Space>
);

export default App;
