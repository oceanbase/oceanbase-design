import React, { useState } from 'react';
import { Form, Switch, theme } from '@oceanbase/design';
import { ProCard } from '@oceanbase/ui';

export default () => {
  const { token } = theme.useToken();
  const [hasHeader, setHasHeader] = useState(true);
  const [headerBordered, setHeaderBordered] = useState(false);
  const [hasPadding, setHasPadding] = useState(true);
  const bodyStyle: React.CSSProperties = hasPadding ? {} : { padding: 0 };
  return (
    <>
      <Form layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item label="has header" required={true}>
          <Switch
            size="small"
            value={hasHeader}
            onChange={value => {
              setHasHeader(value);
            }}
          />
        </Form.Item>
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
        title={hasHeader && '默认尺寸'}
        extra={hasHeader && 'extra'}
        tooltip={hasHeader && '这是提示'}
        style={{ width: 300 }}
        bodyStyle={bodyStyle}
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
      <ProCard
        bordered
        headerBordered={headerBordered}
        size="small"
        title={hasHeader && '小尺寸'}
        extra={hasHeader && 'extra'}
        tooltip={hasHeader && '这是提示'}
        style={{ width: 300, marginBlockStart: 24 }}
        bodyStyle={bodyStyle}
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
      <div
        style={{
          marginBlockStart: 24,
          padding: 24,
          borderRadius: 8,
          background: token.colorBgLayout,
        }}
      >
        <ProCard
          headerBordered={headerBordered}
          title={hasHeader && '无边框'}
          extra={hasHeader && 'extra'}
          tooltip={hasHeader && '这是提示'}
          style={{ width: 300 }}
          bodyStyle={bodyStyle}
        >
          <div>Card content</div>
          <div>Card content</div>
          <div>Card content</div>
        </ProCard>
      </div>
    </>
  );
};
