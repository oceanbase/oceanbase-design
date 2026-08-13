import React from 'react';
import { Card, message } from '@oceanbase/design';
import { BookOutlined } from '@oceanbase/icons';

const App: React.FC = () => (
  <>
    <Card
      title="Card Title"
      document="https://www.oceanbase.com"
      style={{ width: 300, marginBottom: 16 }}
    >
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </Card>
    <Card
      title="Card Title"
      document={() => {
        message.info('Click document');
      }}
      style={{ width: 300, marginBottom: 16 }}
    >
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </Card>
    <Card
      title="Card Title"
      document={
        <BookOutlined
          onClick={() => {
            message.info('Click document');
          }}
        />
      }
      style={{ width: 300 }}
    >
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </Card>
  </>
);

export default App;
