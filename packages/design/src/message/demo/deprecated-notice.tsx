import React from 'react';
import { Alert } from '@oceanbase/design';

export default () => (
  <Alert
    type="warning"
    showIcon
    message="Message 已弃用"
    description={
      <>
        通知场景请使用 <a href="/components/notification">Notification 通知提醒框</a>。message
        仍保留兼容 antd Message API，内部已转发至 Notification 实现。
      </>
    }
  />
);
