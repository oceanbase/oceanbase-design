import { Button, message } from '@oceanbase/design';
import React, { useCallback } from 'react';
import NotificationCenter from './NotificationCenter';

export default () => {
  const onBtnClick = useCallback(() => {
    const id = `${Math.round(Math.random() * 1000)}`;
    message.info(`id为: ${id}的任务已经提交成功，请等候处理...`);
    // 实际使用通过引入model的方法来调用
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
