import { Space, Card } from '@oceanbase/design';
import React from 'react';
const App: React.FC = () => (
  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
    <Card title="Card" size="small">
      <div>Card content</div>
      <div>Card content</div>
    </Card>
    <Card title="Card" size="small">
      <div>Card content</div>
      <div>Card content</div>
    </Card>
    <Card title="Card" size="small">
      <div>Card content</div>
      <div>Card content</div>
    </Card>
  </Space>
);

export default App;
