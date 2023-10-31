import React from 'react';
import { Alert, Space, Spin, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  const containerStyle = {
    padding: 50,
    background: token.colorBgLayout,
    borderRadius: 4,
    width: 120,
    height: 120,
  };

  return (
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
};

export default App;
