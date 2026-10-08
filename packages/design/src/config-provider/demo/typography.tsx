import React, { useState } from 'react';
import { ConfigProvider, Form, Space, Switch, Typography } from '@oceanbase/design';

const { Text, Link } = Typography;

const App: React.FC = () => {
  const [hover, setHover] = useState(true);

  return (
    <>
      <Form layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item label="typography.copyable.hover" required={true}>
          <Switch size="small" value={hover} onChange={setHover} />
        </Form.Item>
      </Form>
      <ConfigProvider typography={{ copyable: { hover } }}>
        <Space direction="vertical">
          <Text copyable>This is a copyable text.</Text>
          <Link copyable href="https://design.oceanbase.com" target="_blank">
            This is a copyable link.
          </Link>
          <Text copyable={{ hover: false }}>Component hover false overrides global.</Text>
        </Space>
      </ConfigProvider>
    </>
  );
};

export default App;
