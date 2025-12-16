import React from 'react';
import { Button, Space, notification } from '@oceanbase/design';

export default () => {
  return (
    <Space>
      <Button
        onClick={() => {
          notification.info({
            message: 'Notification Title',
            description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          });
        }}
      >
        Info
      </Button>
      <Button
        onClick={() => {
          notification.success({
            message: 'Notification Title',
            description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          });
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          notification.error({
            message: 'Notification Title',
            description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          });
        }}
      >
        Error
      </Button>
      <Button
        onClick={() => {
          notification.warning({
            message: 'Notification Title',
            description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          });
        }}
      >
        Warning
      </Button>
    </Space>
  );
};
