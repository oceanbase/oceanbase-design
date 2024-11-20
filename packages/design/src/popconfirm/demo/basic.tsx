import React from 'react';
import { Button, message, Popconfirm } from '@oceanbase/design';

const App: React.FC = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    onConfirm={e => {
      console.log(e);
      message.success('Click on Yes');
    }}
    onCancel={e => {
      console.log(e);
      message.info('Click on No');
    }}
  >
    <Button danger>Delete</Button>
  </Popconfirm>
);

export default App;
