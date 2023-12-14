import { Button, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical">
    <Space>
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>
        Primary(disabled)
      </Button>
    </Space>
    <Space>
      <Button>Default</Button>
      <Button disabled>Default(disabled)</Button>
    </Space>
    <Space>
      <Button type="dashed">Dashed</Button>
      <Button type="dashed" disabled>
        Dashed(disabled)
      </Button>
    </Space>
    <Space>
      <Button type="text">Text</Button>
      <Button type="text" disabled>
        Text(disabled)
      </Button>
    </Space>
    <Space>
      <Button type="link">Link</Button>
      <Button type="link" disabled>
        Link(disabled)
      </Button>
    </Space>
    <Space>
      <Button type="primary" href="https://design.oceanbase.com">
        Href Primary
      </Button>
      <Button type="primary" href="https://design.oceanbase.com" disabled>
        Href Primary(disabled)
      </Button>
    </Space>
    <Space>
      <Button type="primary" danger>
        Danger Default
      </Button>
      <Button type="primary" danger disabled>
        Danger Default(disabled)
      </Button>
    </Space>
    <Space>
      <Button danger>Danger Default</Button>
      <Button danger disabled>
        Danger Default(disabled)
      </Button>
    </Space>
  </Space>
);

export default App;
