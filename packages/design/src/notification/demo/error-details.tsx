import React from 'react';
import { Button, Space, Typography, notification } from '@oceanbase/design';

const errorDetails = [
  {
    label: 'Request ID',
    value: '3CB0AC64-BD04-4863-82AA-A5BFC356391D',
  },
  {
    label: 'Error Code',
    value: 'ROLE_NOT_AUTHORIZE',
  },
  {
    label: 'Time',
    value: '2026-05-09 10:15:38',
  },
];

export default () => {
  return (
    <Space wrap>
      <Button
        onClick={() => {
          notification.error({
            message: 'Unable to save changes',
            description: (
              <>
                Do not worry, your draft is saved. The request failed due to a permission error.
                Contact your administrator or{' '}
                <Typography.Link
                  onClick={event => {
                    event.preventDefault();
                  }}
                >
                  retry
                </Typography.Link>
                .
              </>
            ),
            errorDetails,
          });
        }}
      >
        Error with details
      </Button>
      <Button
        onClick={() => {
          notification.warning({
            message: 'Partial sync failed',
            description:
              'Some resources were skipped because they are no longer accessible. Review the details below.',
            errorDetails: [
              {
                label: 'Skipped resources',
                value: 'cluster-a, cluster-b',
              },
              {
                label: 'Reason',
                value: 'Insufficient read permission',
              },
            ],
          });
        }}
      >
        Warning with details
      </Button>
    </Space>
  );
};
