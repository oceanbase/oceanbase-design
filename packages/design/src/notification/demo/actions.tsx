import React from 'react';
import { ExportOutlined } from '@oceanbase/icons';
import { Button, Space, Typography, notification } from '@oceanbase/design';

export default () => {
  return (
    <Space wrap>
      <Button
        onClick={() => {
          notification.info({
            message: (
              <>
                Export is ready.{' '}
                <a
                  href="#"
                  onClick={event => {
                    event.preventDefault();
                  }}
                >
                  Download
                </a>
                {', '}
                <a href="https://design.oceanbase.com" target="_blank" rel="noreferrer">
                  View details
                </a>
              </>
            ),
          });
        }}
      >
        Links in title
      </Button>
      <Button
        onClick={() => {
          notification.error({
            message: 'Backup failed',
            description: (
              <>
                The backup job stopped because the target bucket is unavailable. Check the bucket
                policy or{' '}
                <Typography.Link
                  onClick={event => {
                    event.preventDefault();
                  }}
                >
                  open troubleshooting guide
                </Typography.Link>
                .
              </>
            ),
          });
        }}
      >
        Links in description
      </Button>
      <Button
        onClick={() => {
          notification.success({
            message: 'Report exported',
            description: (
              <>
                Your file is ready.{' '}
                <Typography.Link href="https://design.oceanbase.com">
                  Open file <ExportOutlined />
                </Typography.Link>
              </>
            ),
          });
        }}
      >
        Typography.Link
      </Button>
    </Space>
  );
};
