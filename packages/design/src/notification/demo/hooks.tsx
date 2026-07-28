import React from 'react';
import { Button, notification } from '@oceanbase/design';

export default () => {
  const [api, contextHolder] = notification.useNotification();

  return (
    <>
      {contextHolder}
      <Button
        onClick={() => {
          api.success({
            message: 'Task submitted',
            description: 'Use notification.useNotification() when you need ConfigProvider context.',
          });
        }}
      >
        Open with hooks
      </Button>
    </>
  );
};
