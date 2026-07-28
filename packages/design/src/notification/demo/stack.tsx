import React from 'react';
import { Button, notification } from '@oceanbase/design';

export default () => {
  return (
    <Button
      onClick={() => {
        ['Backup started', 'Index rebuilt', 'Cache refreshed', 'Audit log exported'].forEach(
          (title, index) => {
            notification.info({
              key: `stack-${index}`,
              message: title,
              description: 'Hover the stack to expand. Up to 3 notifications are visible at once.',
            });
          }
        );
      }}
    >
      Show stacked notifications
    </Button>
  );
};
