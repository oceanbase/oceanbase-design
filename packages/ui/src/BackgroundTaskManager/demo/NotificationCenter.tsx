import type {
  BackgroundTaskManagerRef,
  ITaskMgrPreset,
  ITaskMgrQueue,
  TaskMgrID,
} from '@oceanbase/ui';
import { BackgroundTaskManager, BackgroundTaskManagerConstants } from '@oceanbase/ui';
import React, { useEffect, useRef } from 'react';
import { getTaskById } from './mockApi';

const { NotificationApi, REFRESH_FREQUENCY } = BackgroundTaskManagerConstants;

// mock model
(window as any).obuiMockModel = {
  backgroundTaskManagerAPIs: {},
};

export enum TASK_CENTER_STATUS {
  'WAITING' = 'WAITING',
  'PROCESSING' = 'PROCESSING',
  'SUCCESS' = 'SUCCESS',
  'FAILED' = 'FAILED',
}

const NotificationCenter = () => {
  const ref = useRef<BackgroundTaskManagerRef>();

  const setNotificationPreset = (p: ITaskMgrPreset) => {
    ref.current?.setPreset(p);
  };

  const setNotificationQueue = (q: ITaskMgrQueue) => {
    ref.current?.setQueue(q);
  };

  const pushNotificationQueue = (q: ITaskMgrQueue) => {
    ref.current?.pushQueue(q);
  };

  const popNotificationQueue = (q: TaskMgrID) => {
    ref.current?.popQueue(q);
  };

  const fetchPreset = () => {
    const preset = ref.current?.fetchPreset();
    return preset;
  };

  const fetchQueue = () => {
    const queue = ref.current?.fetchQueue();
    return queue;
  };

  const fetchQueueNsById = (id: TaskMgrID) => {
    return ref.current?.fetchQueueNsById(id);
  };

  // mock model存储
  (window as any).obuiMockModel.backgroundTaskManagerAPIs = {
    setNotificationPreset,
    setNotificationQueue,
    pushNotificationQueue,
    popNotificationQueue,
    fetchPreset,
    fetchQueue,
    fetchQueueNsById,
  };

  useEffect(() => {
    const api = async ({ id }: any) => {
      return getTaskById({ id });
    };
    setNotificationPreset({
      download_task: {
        api,
        successCb: (data, id) => {
          const { status, fileName, fileUrl } = data || {};
          if ([TASK_CENTER_STATUS.SUCCESS, TASK_CENTER_STATUS.FAILED].includes(status)) {
            popNotificationQueue(id);
            const typeMap = {
              [TASK_CENTER_STATUS.SUCCESS]: NotificationApi.success,
              [TASK_CENTER_STATUS.FAILED]: NotificationApi.error,
            };
            const msgMap = {
              [TASK_CENTER_STATUS.SUCCESS]: 'The file has been generated and can be downloaded',
              [TASK_CENTER_STATUS.FAILED]: 'File generation failed',
            };
            return {
              type: typeMap[status],
              config: {
                key: id,
                top: 78,
                duration: null,
                message: msgMap[status],
                description:
                  status === TASK_CENTER_STATUS.SUCCESS ? (
                    <>
                      <div>{fileName}</div>
                      <a href={fileUrl} target="_blank" rel="noreferrer">
                        Download
                      </a>
                    </>
                  ) : null,
              },
            };
          }
          return null;
        },
      },
    });
  }, []);

  return (
    <BackgroundTaskManager
      ref={ref}
      rollingFrequency={REFRESH_FREQUENCY.EXTREMELY}
      prefix="obui_backgroundtaskmanager_demo"
    />
  );
};

export default NotificationCenter;
