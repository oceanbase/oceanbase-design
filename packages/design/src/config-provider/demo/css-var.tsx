import React, { useState } from 'react';
import { ConfigProvider, Button, Space, Card, Input, Switch } from '@oceanbase/design';

const CssVarDemo: React.FC = () => {
  const [cssVarEnabled, setCssVarEnabled] = useState(false);
  const [hashed, setHashed] = useState(true);

  return (
    <div>
      <Card
        title="CSS 变量模式配置"
        style={{ marginBottom: 24 }}
        extra={
          <Space>
            <span>启用 CSS 变量:</span>
            <Switch checked={cssVarEnabled} onChange={setCssVarEnabled} />
            <span>启用 Hash:</span>
            <Switch checked={hashed} onChange={setHashed} disabled={!cssVarEnabled} />
          </Space>
        }
      >
        <p>CSS 变量模式允许使用 CSS 自定义属性来动态切换主题，无需重新渲染组件。</p>
        <p>
          启用后，你可以在浏览器开发者工具中看到生成的 CSS 变量，例如：
          <code>--ant-color-primary</code>、<code>--ant-color-success</code> 等。
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
        <Card title="组件示例">
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
        <Card title="使用提示" style={{ marginTop: 24 }}>
          <ul>
            <li>
              在浏览器开发者工具中，检查元素可以看到生成的 CSS 变量，例如：
              <code>--ant-color-primary</code>
            </li>
            <li>可以通过修改 CSS 变量来动态改变主题，无需重新渲染组件</li>
            <li>
              在 React 16/17 中，需要手动指定 <code>key</code> 属性以确保主题隔离
            </li>
            <li>
              当只使用单一版本时，可以设置 <code>hashed: false</code> 来减少样式表大小
            </li>
          </ul>
        </Card>
      )}
    </div>
  );
};

export default CssVarDemo;
