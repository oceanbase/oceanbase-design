import React from 'react';
import { Card, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        backgroundColor: token.colorFillQuaternary,
        padding: 24,
        margin: -24,
      }}
    >
      <Card title="Card Title" bordered={false} style={{ width: 300 }}>
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </Card>
      <br />
      <Card title="Card Title" divided={false} bordered={false} style={{ width: 300 }}>
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </Card>
    </div>
  );
};

export default App;
