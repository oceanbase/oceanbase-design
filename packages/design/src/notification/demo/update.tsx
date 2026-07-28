import React from 'react';
import { Button, notification } from '@oceanbase/design';

const UPDATE_KEY = 'report-export';

export default () => {
  return (
    <Button
      onClick={() => {
        notification.loading({
          key: UPDATE_KEY,
          message: 'Exporting report',
          description: 'Progress: 20%',
        });

        setTimeout(() => {
          notification.loading({
            key: UPDATE_KEY,
            message: 'Exporting report',
            description: 'Progress: 60%',
          });
        }, 1000);

        setTimeout(() => {
          notification.success({
            key: UPDATE_KEY,
            message: 'Report exported',
            description: 'The file is ready to download.',
          });
        }, 2000);
      }}
    >
      Update by key
    </Button>
  );
};
