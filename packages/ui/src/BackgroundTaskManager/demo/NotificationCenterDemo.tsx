import { Button, message } from '@oceanbase/design';
import React, { useCallback } from 'react';
import NotificationCenter from './NotificationCenter';

export default () => {
  const onBtnClick = useCallback(() => {
    const id = `${Math.round(Math.random() * 1000)}`;
    message.info(`Task ${id} submitted successfully. Please wait...`);
    // In production, call via the model
    (window as any).obuiMockModel?.backgroundTaskManagerAPIs?.pushNotificationQueue?.({
      [id]: 'download_task',
    });
  }, []);

  return (
    <>
      <NotificationCenter />
      <Button onClick={onBtnClick}>download</Button>
    </>
  );
};
