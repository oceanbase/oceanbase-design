import React from 'react';
import { Tag } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Tag color="default">default</Tag>
    <Tag color="success">success</Tag>
    <Tag color="processing">processing</Tag>
    <Tag color="warning">warning</Tag>
    <Tag color="error">error</Tag>
    <Tag color="critical">critical</Tag>
  </>
);

export default App;
