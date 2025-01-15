import { Card } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Card divided={false} title="Card title" extra={<a>More</a>} style={{ width: 300 }}>
    <div>Card content</div>
    <div>Card content</div>
    <div>Card content</div>
  </Card>
);

export default App;
