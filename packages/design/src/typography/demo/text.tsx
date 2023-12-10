import React from 'react';
import { Space, Typography } from '@oceanbase/design';

const { Text, Link } = Typography;

const App: React.FC = () => (
  <Space direction="vertical">
    <Text>OceanBase Design (default)</Text>
    <Text type="secondary">OceanBase Design (secondary)</Text>
    <Text type="success">OceanBase Design (success)</Text>
    <Text type="warning">OceanBase Design (warning)</Text>
    <Text type="danger">OceanBase Design (danger)</Text>
    <Text disabled>OceanBase Design (disabled)</Text>
    <Text mark>OceanBase Design (mark)</Text>
    <Text code>OceanBase Design (code)</Text>
    <Text keyboard>OceanBase Design (keyboard)</Text>
    <Text underline>OceanBase Design (underline)</Text>
    <Text delete>OceanBase Design (delete)</Text>
    <Text strong>OceanBase Design (strong)</Text>
    <Text italic>OceanBase Design (italic)</Text>
    <Link href="https://design.oceanbase.com" target="_blank">
      OceanBase Design (Link)
    </Link>
  </Space>
);

export default App;
