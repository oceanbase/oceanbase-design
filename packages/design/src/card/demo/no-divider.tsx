import { Card } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Card divided={false} title="Card title" extra={<a>More</a>} style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);

export default App;
