import React from 'react';
import { Space, Typography } from '@oceanbase/design';

const { Text } = Typography;

const App: React.FC = () => (
  <Space direction="vertical">
    <Text>OceanBase Design (default)</Text>
    <Text caption>OceanBase Design (caption)</Text>
  </Space>
);

export default App;
