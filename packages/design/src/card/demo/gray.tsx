import React, { useState } from 'react';
import { Card, Form, Radio, Space, Switch } from '@oceanbase/design';
import type { CardSize } from '@oceanbase/design/es/card';

const App: React.FC = () => {
  const [size, setSize] = useState<CardSize>('default');
  const [title, setTitle] = useState(true);
  const [divided, setDivided] = useState(true);
  return (
    <>
      <Form layout="inline" requiredMark={false} style={{ marginBottom: 24 }}>
        <Form.Item label="size">
          <Radio.Group
            value={size}
            onChange={e => {
              setSize(e.target.value);
            }}
          >
            <Radio.Button value="default">default</Radio.Button>
            <Radio.Button value="small">small</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="title">
          <Switch
            size="small"
            checked={title}
            onChange={e => {
              setTitle(e);
            }}
          />
        </Form.Item>
        {title && (
          <Form.Item label="divided">
            <Switch
              size="small"
              checked={divided}
              onChange={e => {
                setDivided(e);
              }}
            />
          </Form.Item>
        )}
      </Form>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Card
          title={title && 'Card title'}
          size={size}
          divided={divided}
          gray={true}
          bordered={false}
          style={{ width: 300 }}
        >
          <div>Card content</div>
          <div>Card content</div>
          <div>Card content</div>
        </Card>
        <Card
          title={title && 'Card title'}
          size={size}
          divided={divided}
          collapsible={true}
          gray={true}
          bordered={false}
          style={{ width: 300 }}
        >
          <div>Card content</div>
          <div>Card content</div>
          <div>Card content</div>
        </Card>
      </Space>
    </>
  );
};

export default App;
