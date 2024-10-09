import React from 'react';
import { AppstoreOutlined, BarsOutlined } from '@oceanbase/icons';
import { Segmented } from '@oceanbase/design';

const Demo: React.FC = () => (
  <Segmented
    vertical
    options={[
      { value: 'List', icon: <BarsOutlined /> },
      { value: 'Kanban', icon: <AppstoreOutlined /> },
    ]}
  />
);

export default Demo;
