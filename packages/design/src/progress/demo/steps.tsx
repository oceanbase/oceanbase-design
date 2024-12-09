import React from 'react';
import { Flex, Progress, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <Flex gap="small" vertical>
      <Progress percent={30} steps={3} />
      <Progress percent={50} steps={5} />
      <Progress percent={100} steps={5} size="small" strokeColor={token.colorSuccess} />
      <Progress
        percent={60}
        steps={5}
        strokeColor={[token.colorSuccess, token.colorSuccess, token.colorError]}
      />
    </Flex>
  );
};

export default App;
