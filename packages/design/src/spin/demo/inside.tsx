import React from 'react';
import { Spin } from '@oceanbase/design';

const App: React.FC = () => (
  <div
    style={{
      margin: '20px 0',
      marginBottom: 20,
      padding: '30px 50px',
      textAlign: 'center',
      background: 'rgba(0, 0, 0, 0.05)',
      borderRadius: 4,
    }}
  >
    <Spin />
  </div>
);

export default App;
