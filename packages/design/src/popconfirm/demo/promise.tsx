import React from 'react';
import { Button, message, Popconfirm } from '@oceanbase/design';

const App: React.FC = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    onConfirm={() => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(null);
          message.success('The task is deleted');
        }, 3000);
      });
    }}
  >
    <Button danger>Delete</Button>
  </Popconfirm>
);

export default App;
