import React from 'react';
import { Tabs } from '@oceanbase/design';

const onChange = (key: string) => {
  console.log(key);
};

const App: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1" onChange={onChange}>
      <Tabs.TabPane key="1" tab="Tab 1" badge={22}>
        Content of Tab Pane 1
      </Tabs.TabPane>
      <Tabs.TabPane divider={true} />
      <Tabs.TabPane key="2" tab="Tab 2" badge={99}>
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane divider={true} />
      <Tabs.TabPane key="3" tab="Tab 3" badge={{ count: 0, showZero: true }}>
        Content of Tab Pane 3
      </Tabs.TabPane>
    </Tabs>
  );
};

export default App;
