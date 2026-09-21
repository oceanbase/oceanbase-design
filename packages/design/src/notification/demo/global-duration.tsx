import React from 'react';
import { Button, ConfigProvider, Space, notification } from '@oceanbase/design';

// useNotification reads the nearest ConfigProvider, so it must be called inside it.
const DurationDemo = () => {
  const [api, contextHolder] = notification.useNotification();

  return (
    <>
      {contextHolder}
      <Space wrap>
        <Button
          onClick={() => {
            api.success({ message: 'Instance created successfully' });
          }}
        >
          Other types (3s by default)
        </Button>
        <Button
          onClick={() => {
            api.error({
              message: 'Unable to save changes',
              description:
                'Errors close after 5s because ConfigProvider sets duration.error to 5, instead of staying open.',
            });
          }}
        >
          Error (5s)
        </Button>
      </Space>
    </>
  );
};

export default () => {
  return (
    <ConfigProvider notification={{ duration: { error: 5, default: 3 } }}>
      <DurationDemo />
    </ConfigProvider>
  );
};
