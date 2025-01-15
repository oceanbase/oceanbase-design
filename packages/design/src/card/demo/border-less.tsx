import React from 'react';
import { Card, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        backgroundColor: token.colorBgLayout,
        padding: '40px 24px',
        margin: '-40px -24px',
      }}
    >
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </Card>
    </div>
  );
};

export default App;
