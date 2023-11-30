import React from 'react';
import { Card } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Card title="Card title">
      <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
        Inner Card content
      </Card>
      <Card
        type="inner"
        title="Inner Card title"
        bordered={false}
        extra={<a href="#">More</a>}
        style={{ marginTop: 16 }}
      >
        Inner Card content
      </Card>
    </Card>
    <br />
    <Card title="Card title">
      <Card title="Inner Card title" divided={false}>
        Inner Card content
      </Card>
      <Card title="Inner Card title" bordered={false} divided={false} style={{ marginTop: 16 }}>
        Inner Card content
      </Card>
    </Card>
  </>
);

export default App;
