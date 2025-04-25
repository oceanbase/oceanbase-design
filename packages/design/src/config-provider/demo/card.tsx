import React, { useState } from 'react';
import { Card, ConfigProvider, Form, Space, Switch } from '@oceanbase/design';

const App: React.FC = () => {
  const [divided, setDivided] = useState(true);

  return (
    <>
      <Form layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item label="Card divided" required={true}>
          <Switch
            size="small"
            value={divided}
            onChange={value => {
              setDivided(value);
            }}
          />
        </Form.Item>
      </Form>
      <ConfigProvider card={{ divided }}>
        <Space size={[0, 16]} direction="vertical">
          <Card title="Card title" style={{ width: 300 }}>
            <div>Card content</div>
            <div>Card content</div>
            <div>Card content</div>
          </Card>
          <Card
            tabList={[
              {
                key: '1',
                label: 'Tab 1',
              },
              {
                key: '2',
                label: 'Tab 2',
              },
              {
                key: '3',
                label: 'Tab 3',
              },
            ]}
            style={{ width: 300 }}
          >
            <div>Card content</div>
            <div>Card content</div>
            <div>Card content</div>
          </Card>
        </Space>
      </ConfigProvider>
    </>
  );
};

export default App;
