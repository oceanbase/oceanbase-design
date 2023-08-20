import React from 'react';
import { Spin, token } from '@oceanbase/design';

const App: React.FC = () => (
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

export default App;
