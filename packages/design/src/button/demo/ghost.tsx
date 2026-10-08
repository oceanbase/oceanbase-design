import React from 'react';
import { Button, Flex, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      wrap
      gap="small"
      style={{
        background: token.gray6,
        padding: `${token.paddingMD}px ${token.padding}px`,
        borderRadius: token.borderRadiusLG,
      }}
    >
      <Button type="primary" ghost>
        Primary
      </Button>
      <Button ghost>Default</Button>
      <Button type="dashed" ghost>
        Dashed
      </Button>
      <Button type="primary" danger ghost>
        Danger
      </Button>
    </Flex>
  );
};

export default App;
