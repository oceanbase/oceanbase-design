import React, { useState } from 'react';
import { Form, Switch } from '@oceanbase/design';
import { ProCard } from '@oceanbase/ui';

export default () => {
  const [hasPadding, setHasPadding] = useState(true);
  const bodyStyle: React.CSSProperties = hasPadding ? {} : { padding: 0 };
  return (
    <>
      <Form layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item label="ProCard has padding" required={true}>
          <Switch
            size="small"
            value={hasPadding}
            onChange={value => {
              setHasPadding(value);
            }}
          />
        </Form.Item>
      </Form>
      <ProCard
        title="默认尺寸"
        bordered
        extra="extra"
        tooltip="这是提示"
        style={{ width: 300 }}
        bodyStyle={bodyStyle}
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
      <ProCard
        title="带卡片阴影"
        extra="extra"
        tooltip="这是提示"
        style={{ width: 300, marginBlockStart: 24 }}
        bodyStyle={bodyStyle}
        boxShadow
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
      <ProCard
        title="小尺寸卡片"
        extra="extra"
        tooltip="这是提示"
        style={{ width: 300, marginBlockStart: 24 }}
        bodyStyle={bodyStyle}
        size="small"
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
    </>
  );
};
