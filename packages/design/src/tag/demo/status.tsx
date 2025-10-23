import React from 'react';
import { Tag } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Tag color="success">success</Tag>
    <Tag color="processing">processing</Tag>
    <Tag color="error">error</Tag>
    <Tag color="warning">warning</Tag>
    <Tag color="default">default</Tag>
  </>
);

export default App;
