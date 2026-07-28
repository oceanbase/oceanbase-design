import React from 'react';
import { Button, Space, notification } from '@oceanbase/design';

export default () => {
  return (
    <Space wrap>
      <Button
        onClick={() => {
          notification.success({
            message: 'Instance created successfully',
          });
        }}
      >
        Title only (5s)
      </Button>
      <Button
        onClick={() => {
          notification.success({
            message: 'Instance created successfully',
            description:
              'The instance is starting. You can continue working while it becomes available.',
          });
        }}
      >
        Title + description (10s)
      </Button>
      <Button
        onClick={() => {
          notification.error({
            message: 'Unable to save changes',
            description:
              'Error notifications do not auto close. Hover to pause the countdown on auto-closing types.',
          });
        }}
      >
        Error (no auto close)
      </Button>
    </Space>
  );
};
