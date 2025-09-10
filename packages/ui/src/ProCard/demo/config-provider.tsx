import React, { useState } from 'react';
import { ConfigProvider, Form, Switch } from '@oceanbase/design';
import { ProCard } from '@oceanbase/ui';

export default () => {
  const [divided, setDivided] = useState(true);
  const [bordered, setBordered] = useState(true);
  return (
    <ConfigProvider card={{ divided, variant: bordered ? 'outlined' : 'borderless' }}>
      <Form layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item label="bordered" required={true}>
          <Switch
            size="small"
            value={bordered}
            onChange={value => {
              setBordered(value);
            }}
          />
        </Form.Item>
        <Form.Item label="divided" required={true}>
          <Switch
            size="small"
            value={divided}
            onChange={value => {
              setDivided(value);
            }}
          />
        </Form.Item>
      </Form>
      <ProCard
        bordered={bordered}
        headerBordered={divided}
        title="这是标题"
        extra="extra"
        tooltip="这是提示"
        style={{ width: 300 }}
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
    </ConfigProvider>
  );
};
