import React from 'react';
import { Space, Typography } from '@oceanbase/design';
import { SmileFilled, SmileOutlined } from '@oceanbase/icons';

const { Text, Link } = Typography;

const App: React.FC = () => (
  <Space direction="vertical">
    <Text copyable>This is a copyable text.</Text>
    <Text copyable={{ text: 'Hello, OceanBase Design!' }}>Custom copy text.</Text>
    <Text copyable={{ hover: true }}>Hover this text to show the copy entry.</Text>
    <Link copyable={{ hover: true }} href="https://design.oceanbase.com" target="_blank">
      Hover this link to show the copy entry.
    </Link>
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
