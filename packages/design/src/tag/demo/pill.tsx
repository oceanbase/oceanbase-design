import { TagOutlined } from '@oceanbase/icons';
import { Tag } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <>
    <Tag pill>ID</Tag>
    <Tag pill icon={<TagOutlined />}>
      1
    </Tag>
    <Tag pill closable>
      Tag
    </Tag>
    <Tag pill color="success">
      success
    </Tag>
    <Tag pill color="processing">
      processing
    </Tag>
    <Tag pill color="error">
      error
    </Tag>
    <Tag pill color="warning">
      warning
    </Tag>
  </>
);

export default App;
