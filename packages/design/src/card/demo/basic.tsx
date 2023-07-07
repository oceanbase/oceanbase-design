import React from 'react';
import { Card } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Card title="Default size card" extra={<a>More</a>} style={{ width: 300 }}>
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </Card>
    <br />
    <Card size="small" title="Small size card" extra={<a>More</a>} style={{ width: 300 }}>
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </Card>
  </>
);

export default App;
