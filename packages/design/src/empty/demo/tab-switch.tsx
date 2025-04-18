import React from 'react';
import { Button, Empty, Tabs } from '@oceanbase/design';

export default () => {
  const renderEmpty = () => {
    return (
      <Empty
        image={Empty.PRESENTED_IMAGE_COLORED}
        title="Create Your Cluster"
        description="There is no cluster, welcome to create one!"
      >
        <Button type="primary">Create</Button>
      </Empty>
    );
  };
  return (
    <Tabs>
      <Tabs.TabPane key="1" tab="Tab 1">
        {renderEmpty()}
      </Tabs.TabPane>
      <Tabs.TabPane key="2" tab="Tab 2">
        {renderEmpty()}
      </Tabs.TabPane>
      <Tabs.TabPane key="3" tab="Tab 3">
        {renderEmpty()}
      </Tabs.TabPane>
    </Tabs>
  );
};
