import React from 'react';
import { Alert, ConfigProvider, Space, Spin } from '@oceanbase/design';
import { LoadingOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  return (
    <ConfigProvider
      spin={{
        indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />,
      }}
    >
      <Space size="middle" direction="vertical">
        <Spin />
        <Spin tip="Loading">
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
      </Space>
    </ConfigProvider>
  );
};

export default App;
