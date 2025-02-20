import React from 'react';
import { Space, Typography } from '@oceanbase/design';
import { SmileFilled, SmileOutlined } from '@oceanbase/icons';

const { Text } = Typography;

const App: React.FC = () => (
  <Space direction="vertical">
    <Text copyable>This is a copyable text.</Text>
    <Text copyable={{ text: 'Hello, OceanBase Design!' }}>Custom copy text.</Text>
    <Text
      copyable={{
        icon: [<SmileOutlined key="copy-icon" />, <SmileFilled key="copied-icon" />],
        tooltips: ['click here', 'you clicked!!'],
      }}
    >
      Custom copy icon and tooltips text.
    </Text>
    <Text copyable={{ text: 'text to be copied' }} />
  </Space>
);

export default App;
