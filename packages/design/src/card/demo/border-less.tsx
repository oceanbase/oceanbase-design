import React from 'react';
import { Card, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        backgroundColor: token.colorBgLayout,
        padding: 24,
        margin: -24,
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
