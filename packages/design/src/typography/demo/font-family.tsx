import React, { useState } from 'react';
import { ConfigProvider, Divider, Form, Radio, Space, theme, Typography } from '@oceanbase/design';

const { Text } = Typography;

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [fontWeight, setFontWeight] = useState('normal');
  return (
    <>
      <Form layout="inline" style={{ marginBottom: 24 }}>
        <Form.Item label="font weight" required={true}>
          <Radio.Group
            value={fontWeight}
            onChange={e => {
              setFontWeight(e.target.value);
            }}
          >
            <Radio.Button value="normal">normal</Radio.Button>
            <Radio.Button value="bold">bold</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Space
        direction="vertical"
        size={24}
        style={{
          width: '100%',
          backgroundColor: token.colorBgLayout,
          textAlign: 'center',
          padding: '24px 24px 48px 24px',
          fontWeight,
          fontSize: 32,
        }}
      >
        <Divider>Default font</Divider>
        <div>
          <Text style={{ display: 'block' }}>奥星贝斯设计系统</Text>
          <Text>OceanBase Design System</Text>
        </div>
        <Divider>English site font (auto-applied when locale is en)</Divider>
        <div>
          <ConfigProvider
            locale={{
              locale: 'en',
            }}
          >
            <Text>OceanBase Design System</Text>
          </ConfigProvider>
        </div>
        <Divider>Code font (auto-applied under code tag)</Divider>
        <Text code>OceanBase Design System</Text>
        <Divider>Number font (manual setup required)</Divider>
        <div
          style={{
            fontFamily: 'Helvetica Neue',
          }}
        >
          <div>9876543210</div>
          <div>0123456789</div>
        </div>
      </Space>
    </>
  );
};

export default App;
