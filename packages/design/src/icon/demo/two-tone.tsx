import React from 'react';
import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone } from '@oceanbase/icons';
import { Space } from '@oceanbase/design';

const App: React.FC = () => (
  <Space>
    <SmileTwoTone />
    <HeartTwoTone twoToneColor="#eb2f96" />
    <CheckCircleTwoTone twoToneColor="#52c41a" />
  </Space>
);

export default App;
