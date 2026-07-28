import React from 'react';
import { Button, Space, notification } from '@oceanbase/design';

const DEDUPE_KEY = 'network-unstable';

export default () => {
  return (
    <Space wrap>
      <Button
        onClick={() => {
          Array.from({ length: 3 }).forEach((_, index) => {
            notification.warning({
              message: 'Network unstable',
              description: `Poll attempt ${index + 1}: only the first warning with the same dedupeKey is shown.`,
              dedupeKey: DEDUPE_KEY,
            });
          });
        }}
      >
        Dedupe by dedupeKey
      </Button>
      <Button
        onClick={() => {
          notification.warning({
            message: 'Network unstable',
            description: 'Shown independently because the type is different.',
            dedupeKey: DEDUPE_KEY,
          });
          notification.error({
            message: 'Request failed',
            description: 'Same dedupeKey on another type is not suppressed.',
            dedupeKey: DEDUPE_KEY,
          });
        }}
      >
        Dedupe per type
      </Button>
    </Space>
  );
};
