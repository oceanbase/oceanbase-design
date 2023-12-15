import React, { useState } from 'react';
import { Button, Form, Space, Switch } from '@oceanbase/design';
import { CheckOutlined, CloseOutlined, PoweroffOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  return (
    <Space size={16} direction="vertical">
      <Form layout="inline">
        <Form.Item label="loading" required={true}>
          <Switch
            checked={loading}
            onChange={value => {
              setLoading(value);
            }}
          />
        </Form.Item>
      </Form>
      <Space>
        <Button type="primary" loading={loading}>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading={loading}>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading={loading} />
      </Space>
      <Space>
        <Button type="primary" danger loading={loading}>
          Loading
        </Button>
        <Button type="primary" danger ghost loading={loading}>
          Loading
        </Button>
        <Button type="link" loading={loading}>
          Link
        </Button>
      </Space>
    </Space>
  );
};

export default App;
