import React, { useState } from 'react';
import { ConfigProvider, Button, Space, Card, Input, Switch } from '@oceanbase/design';

const CssVarDemo: React.FC = () => {
  const [cssVarEnabled, setCssVarEnabled] = useState(false);
  const [hashed, setHashed] = useState(true);

  return (
    <div>
      <Card
        title="CSS Variable Mode Configuration"
        style={{ marginBottom: 24 }}
        extra={
          <Space>
            <span>Enable CSS Variables:</span>
            <Switch checked={cssVarEnabled} onChange={setCssVarEnabled} />
            <span>Enable Hash:</span>
            <Switch checked={hashed} onChange={setHashed} disabled={!cssVarEnabled} />
          </Space>
        }
      >
        <p>
          CSS variable mode allows you to switch themes dynamically using CSS custom properties
          without re-rendering components.
        </p>
        <p>
          After enabling, you can see generated CSS variables in browser DevTools, for example:
          <code>--ant-color-primary</code>, <code>--ant-color-success</code>, etc.
        </p>
      </Card>

      <ConfigProvider
        theme={{
          cssVar: cssVarEnabled,
          hashed,
          token: {
            colorPrimary: '#0d6cf2',
          },
        }}
      >
        <Card title="Component Examples">
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Space>
              <Button type="primary">Primary Button</Button>
              <Button type="default">Default Button</Button>
              <Button type="dashed">Dashed Button</Button>
              <Button danger>Danger Button</Button>
            </Space>

            <Input placeholder="Input with CSS variables" />

            <Space>
              <Button type="primary" size="small">
                Small
              </Button>
              <Button type="primary" size="middle">
                Middle
              </Button>
              <Button type="primary" size="large">
                Large
              </Button>
            </Space>
          </Space>
        </Card>
      </ConfigProvider>

      {cssVarEnabled && (
        <Card title="Usage Tips" style={{ marginTop: 24 }}>
          <ul>
            <li>
              In browser DevTools, inspect elements to see generated CSS variables, for example:
              <code>--ant-color-primary</code>
            </li>
            <li>
              You can dynamically change the theme by modifying CSS variables without re-rendering
              components
            </li>
            <li>
              In React 16/17, manually specify the <code>key</code> prop to ensure theme isolation
            </li>
            <li>
              When using a single version only, set <code>hashed: false</code> to reduce stylesheet
              size
            </li>
          </ul>
        </Card>
      )}
    </div>
  );
};

export default CssVarDemo;
