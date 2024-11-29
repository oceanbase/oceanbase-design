import React from 'react';
import { Flex, Progress, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <Flex wrap gap="middle" style={{ marginTop: 16 }}>
      <Progress
        type="dashboard"
        steps={8}
        percent={50}
        trailColor={token.colorFillSecondary}
        strokeWidth={20}
      />
      <Progress
        type="circle"
        percent={100}
        trailColor={token.colorFillSecondary}
        steps={{ count: 5, gap: 7 }}
        strokeWidth={20}
      />
    </Flex>
  );
};

export default App;
