import React from 'react';
import { Alert } from '@oceanbase/design';

export default () => (
  <Alert
    type="warning"
    showIcon
    message="Message is deprecated"
    description={
      <>
        Use <a href="/components/notification">Notification</a> for notification scenarios. message
        remains as an antd Message-compatible alias and is implemented via Notification.
      </>
    }
  />
);
