import { Flex } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Flex wrap="wrap" gap="middle">
    {Array.from({ length: 24 }, (_, i) => (
      <div
        key={i}
        style={{
          width: 100,
          height: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f0f5ff',
          border: '1px solid #adc6ff',
        }}
      >
        {i + 1}
      </div>
    ))}
  </Flex>
);

export default App;
