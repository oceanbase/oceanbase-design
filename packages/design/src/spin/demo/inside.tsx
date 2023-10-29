import React from 'react';
import { Spin, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        margin: '20px 0',
        marginBottom: 20,
        padding: '30px 50px',
        textAlign: 'center',
        background: token.colorBgLayout,
        borderRadius: 4,
      }}
    >
      <Spin />
    </div>
  );
};

export default App;
