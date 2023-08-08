import React from 'react';
import { Alert, Space, Spin } from '@oceanbase/design';
import { LoadingOutlined } from '@ant-design/icons';

const indicator = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const App: React.FC = () => (
  <Space size="middle" direction="vertical">
    <Spin indicator={indicator} />
    <Spin indicator={indicator} tip="Loading">
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </Spin>
  </Space>
);

export default App;
