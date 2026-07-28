import React from 'react';
import { Button, Space, notification } from '@oceanbase/design';

export default () => {
  return (
    <Space wrap>
      <Button
        onClick={() => {
          notification.info({
            message: 'Background sync completed',
            description:
              '3 records were updated while you were on another page. Refresh the list to see the latest data.',
          });
        }}
      >
        Info
      </Button>
      <Button
        onClick={() => {
          notification.success({
            message: 'Instance created successfully',
          });
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          notification.warning({
            message: 'Quota is almost full',
            description:
              'You have used 90% of the storage quota. Clean up unused backups or upgrade your plan.',
          });
        }}
      >
        Warning
      </Button>
      <Button
        onClick={() => {
          notification.error({
            message: 'Unable to save changes',
            description:
              'The request failed due to a network timeout. Your draft is still saved locally.',
          });
        }}
      >
        Error
      </Button>
      <Button
        onClick={() => {
          notification.loading({
            message: 'Exporting report',
            description: 'Estimated time remaining: about 2 minutes.',
          });
        }}
      >
        Loading
      </Button>
    </Space>
  );
};
