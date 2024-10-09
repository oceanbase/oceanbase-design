import React from 'react';
import { Typography } from '@oceanbase/design';

const { Title } = Typography;

const App: React.FC = () => (
  <>
    <Title>h1. OceanBase Design</Title>
    <Title level={2}>h2. OceanBase Design</Title>
    <Title level={3}>h3. OceanBase Design</Title>
    <Title level={4}>h4. OceanBase Design</Title>
    <Title level={5}>h5. OceanBase Design</Title>
  </>
);

export default App;
