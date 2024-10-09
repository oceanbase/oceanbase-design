import type { TabsProps } from '@oceanbase/design';
import { Space, Tabs } from '@oceanbase/design';
import React from 'react';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Tab 1`,
    children: `Content of Tab Pane 1`,
  },
  {
    divider: true,
  },
  {
    key: '2',
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
  },
  {
    divider: true,
  },
  {
    key: '3',
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
];

const App: React.FC = () => (
  <Space direction="vertical" size={32}>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    <Tabs defaultActiveKey="1" items={items} tabPosition="left" onChange={onChange} />
  </Space>
);

export default App;
