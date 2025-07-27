import React from 'react';
import { Tabs } from '@oceanbase/design';
import type { TabsProps } from '@oceanbase/design';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Tab 1`,
    children: `Content of Tab Pane 1`,
    // badge content
    badge: 22,
  },
  {
    key: '2',
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
    // same as `badge: 33`
    badge: {
      count: 33,
    },
  },
  {
    key: '3',
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
    // custom badge
    badge: {
      count: 0,
      showZero: true,
    },
  },
];

const App: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default App;
