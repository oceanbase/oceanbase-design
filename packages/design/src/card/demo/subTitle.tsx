import React from 'react';
import { Card } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Card title="Card Title" subTitle="SubTitle" style={{ width: 300 }}>
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </Card>
    <br />
    <Card title="Card Title" subTitle="SubTitle" divided={false} style={{ width: 300 }}>
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </Card>
  </>
);

export default App;
