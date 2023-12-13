import { Button, Popconfirm, Space } from '@oceanbase/design';
import React from 'react';
const App: React.FC = () => (
  <Space>
    Space
    <Button type="primary">Button</Button>
    <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
      <Button>Confirm</Button>
    </Popconfirm>
  </Space>
);

export default App;
