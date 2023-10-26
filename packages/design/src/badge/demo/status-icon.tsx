import React from 'react';
import { Badge, Space } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Space>
      <Badge icon={true} status="success" />
      <Badge icon={true} status="error" />
      <Badge icon={true} status="default" />
      <Badge icon={true} status="processing" />
      <Badge icon={true} status="warning" />
    </Space>
    <br />
    <br />
    <Space direction="vertical">
      <Badge icon={true} status="success" text="Success" />
      <Badge icon={true} status="error" text="Error" />
      <Badge icon={true} status="default" text="Default" />
      <Badge icon={true} status="processing" text="Processing" />
      <Badge icon={true} status="warning" text="Warning" />
    </Space>
  </>
);

export default App;
