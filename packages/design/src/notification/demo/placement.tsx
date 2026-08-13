import React from 'react';
import { Button, Space, notification } from '@oceanbase/design';

export default () => {
  return (
    <Space wrap>
      <Button
        onClick={() => {
          notification.info({
            message: 'Bottom left (default)',
            description: 'OBUI 2.0 recommends bottom-left placement with a 24px offset.',
          });
        }}
      >
        Bottom left
      </Button>
      <Button
        onClick={() => {
          notification.info({
            message: 'Top right',
            description: 'Pass placement: "topRight" for top-right placement.',
            placement: 'topRight',
          });
        }}
      >
        Top right
      </Button>
    </Space>
  );
};
