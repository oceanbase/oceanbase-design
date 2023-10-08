import React from 'react';
import { Badge, Space } from '@oceanbase/design';
import {
  LoadingOutlined,
  AppleOutlined,
  WindowsOutlined,
  ChromeOutlined,
  TaobaoOutlined,
} from '@oceanbase/icons';

const App: React.FC = () => (
  <Space direction="vertical">
    <Badge icon={<ChromeOutlined />} status="success" text="Success" />
    <Badge icon={<AppleOutlined />} status="error" text="Error" />
    <Badge icon={<WindowsOutlined />} status="default" text="Default" />
    <Badge icon={<LoadingOutlined />} status="processing" text="Processing" />
    <Badge icon={<TaobaoOutlined />} status="warning" text="Warning" />
  </Space>
);

export default App;
