import React from 'react';
import { Card } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Card title="Card Title" divided={false} extra={<a>More</a>} style={{ width: 300 }}>
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </Card>
    <br />
    <Card
      title="Card Title"
      size="small"
      divided={false}
      extra={<a>More</a>}
      style={{ width: 300 }}
    >
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </Card>
  </>
);

export default App;
