import React from 'react';
import { Segmented } from '@oceanbase/design';
import { AppstoreOutlined, BarsOutlined } from '@oceanbase/icons';

const Demo: React.FC = () => (
  <Segmented
    options={[
      { label: 'List', value: 'List', icon: <BarsOutlined /> },
      { label: 'Kanban', value: 'Kanban', icon: <AppstoreOutlined /> },
    ]}
  />
);

export default Demo;
