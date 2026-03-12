import React from 'react';
import { Card } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Card title="Card title">
      <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
        Inner Card content
      </Card>
    </Card>
    <br />
    <Card title="Card title">
      <Card title="Inner Card title" divided={false}>
        Inner Card content
      </Card>
    </Card>
    <br />
    <Card
      title="Card title"
      bodyStyle={{
        padding: 0,
      }}
    >
      <Card title="Inner Card title" bordered={false} divided={false}>
        Inner Card content
      </Card>
    </Card>
    <br />
    <Card title="Card title" divided={false}>
      <Card
        title="Inner Card title"
        tabList={[
          { key: '1', label: 'Tab 1' },
          { key: '2', label: 'Tab 2' },
        ]}
      >
        Inner Card content
      </Card>
    </Card>
  </>
);

export default App;
