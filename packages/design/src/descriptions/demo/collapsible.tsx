import React, { useState } from 'react';
import { Button, Descriptions, Space } from '@oceanbase/design';
import { CaretRightOutlined } from '@oceanbase/icons';

const items = [
  { key: '1', label: 'UserName', children: 'Zhou Maomao' },
  { key: '2', label: 'Telephone', children: '1810000000' },
  { key: '3', label: 'Live', children: 'Hangzhou, Zhejiang' },
  { key: '4', label: 'Remark', children: 'empty' },
  {
    key: '5',
    label: 'Address',
    children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
  },
  { key: '6', label: 'Company', children: 'Ant Group' },
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <Descriptions title="User Info" collapsible defaultCollapsed={false} items={items} />
      <Space>
        <Button
          icon={<CaretRightOutlined rotate={collapsed ? 0 : 90} />}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? 'Expand' : 'Collapse'}
        </Button>
      </Space>
      <Descriptions
        title="User Info (Controlled)"
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        items={items}
      />
    </Space>
  );
};

export default App;
