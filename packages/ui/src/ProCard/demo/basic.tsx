import React, { useState } from 'react';
import { Form, Switch } from '@oceanbase/design';
import { ProCard } from '@oceanbase/ui';

export default () => {
  const [headerBordered, setHeaderBordered] = useState(false);
  const [hasPadding, setHasPadding] = useState(true);
  const bodyStyle: React.CSSProperties = hasPadding ? {} : { padding: 0 };
  return (
    <>
      <Form layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item label="header bordered" required={true}>
          <Switch
            size="small"
            value={headerBordered}
            onChange={value => {
              setHeaderBordered(value);
            }}
          />
        </Form.Item>
        <Form.Item label="body padding" required={true}>
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
        bordered
        headerBordered={headerBordered}
        title="默认尺寸"
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
        headerBordered={headerBordered}
        boxShadow
        title="带卡片阴影"
        extra="extra"
        tooltip="这是提示"
        style={{ width: 300, marginBlockStart: 24 }}
        bodyStyle={bodyStyle}
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
      <ProCard
        headerBordered={headerBordered}
        size="small"
        title="小尺寸卡片"
        extra="extra"
        tooltip="这是提示"
        style={{ width: 300, marginBlockStart: 24 }}
        bodyStyle={bodyStyle}
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
    </>
  );
};
