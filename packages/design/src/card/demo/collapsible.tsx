import React, { useState } from 'react';
import { Card, Button, Space } from '@oceanbase/design';
import { CaretRightOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <Card
        title="Collapsible Card"
        collapsible
        defaultCollapsed={false}
        extra={<a>More</a>}
        style={{ width: 400 }}
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </Card>
      <Space>
        <Button
          icon={<CaretRightOutlined rotate={collapsed ? 0 : 90} />}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? 'Expand' : 'Collapse'}
        </Button>
      </Space>
      <Card
        title="Collapsible Card (Controlled)"
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        extra={<a>More</a>}
        style={{ width: 400 }}
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </Card>
    </Space>
  );
};

export default App;
