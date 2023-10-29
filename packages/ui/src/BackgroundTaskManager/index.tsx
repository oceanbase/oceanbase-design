import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import { notification } from '@oceanbase/design';
import type {
  GlobalConfigProps,
  NotificationInstance,
} from '@oceanbase/design/es/notification/interface';
import { REFRESH_FREQUENCY } from './constants';
import { RefreshMan } from './RefreshMan';

// antd Notification组件支持的api种类
export enum NotificationApi {
  success = 'success',
  error = 'error',
  info = 'info',
  warning = 'warning',
  open = 'open',
}

export const BackgroundTaskManagerConstants = {
  REFRESH_FREQUENCY,
  NotificationApi,
};

type Namespace = string;
export type TaskMgrID = string | number;
export type ITaskMgrQueue = Record<TaskMgrID, Namespace>;

interface NotificationAction {
  api: (params: any) => Promise<any>;
  successCb: (
    response: any,
    id: TaskMgrID
  ) => { type: keyof NotificationInstance; config: GlobalConfigProps } | null;
  failedCb?: (
    response: any,
    id: TaskMgrID
  ) => { type: keyof NotificationInstance; config: GlobalConfigProps } | null;
}

export type ITaskMgrPreset = Record<Namespace, NotificationAction>;

export interface BackgroundTaskManagerRef {
  pushQueue: (queue: ITaskMgrQueue) => void;
  popQueue: (id: TaskMgrID) => void;
  setQueue: (queue: ITaskMgrQueue) => void;
  pushPreset: (preset: ITaskMgrPreset) => void;
  setPreset: (preset: ITaskMgrPreset) => void;
  fetchPreset: () => ITaskMgrPreset;
  fetchQueue: () => ITaskMgrQueue;
  fetchQueueNsById: (id: TaskMgrID) => Namespace;
  closeNotification: (key: string) => void;
}

interface IProps {
  rollingFrequency?: number;
  prefix: Namespace;
}

export default forwardRef<BackgroundTaskManagerRef, IProps>((props, ref) => {
  const { rollingFrequency = REFRESH_FREQUENCY.EXTREMELY, prefix } = props;
  // 任务管理器的任务队列
  const [queue, setQueue] = useState<ITaskMgrQueue>({});
  // 任务管理器的行为预设
  const [preset, setPreset] = useState<ITaskMgrPreset>({});

  // push任务队列
  const pushQueue = useCallback(
    (q: ITaskMgrQueue) => {
      setQueue({
        ...queue,
        ...q,
      });
    },
    [queue, setQueue]
  );
  // pop任务队列
  const popQueue = useCallback(
    (id: TaskMgrID) => {
      delete queue[id];
      setQueue({ ...queue });
    },
    [queue, setQueue]
  );

  const taskQueue = useMemo(() => {
    return Object.entries(queue);
  }, [queue]);

  const run = useCallback(
    (newPreset?: ITaskMgrPreset) => {
      if (!!taskQueue.length) {
        taskQueue?.forEach(([id, ns]) => {
          const realPreset = newPreset ?? preset;
          if (!realPreset[ns]) {
            console.warn('cannot find preset of namespace: ', ns);
            return;
          }
          const { api, successCb, failedCb } = realPreset[ns];
          api?.({ id })
            .then(res => {
              const { type, config } = successCb(res, id) || {
                type: null,
                config: null,
              };
              if (type) {
                notification[type](config as any);
              }
            })
            .catch(err => {
              if (failedCb) {
                const { type, config } = failedCb(err, id) || {
                  type: null,
                  config: null,
                };
                if (type) {
                  notification[type](config as any);
                }
              }
            });
        });
      }
    },
    [taskQueue, preset]
  );

  // push任务预设
  const pushPreset = useCallback(
    (p: ITaskMgrPreset) => {
      const newPreset = {
        ...preset,
        ...p,
      };
      if (Object.keys(newPreset).length === Object.keys(preset).length) return;
      setPreset(newPreset);
      run(newPreset);
    },
    [preset, setPreset, run]
  );

  const fetchPreset = useCallback(() => {
    return preset;
  }, [preset]);

  const fetchQueue = useCallback(() => {
    return queue;
  }, [queue]);

  const fetchQueueNsById = useCallback(
    (id: TaskMgrID) => {
      return queue[id];
    },
    [queue]
  );

  const closeNotification = useCallback((key: string) => {
    notification.destroy(key);
  }, []);

  useImperativeHandle(ref, () => ({
    pushQueue,
    popQueue,
    setQueue,
    pushPreset,
    setPreset,
    fetchPreset,
    fetchQueue,
    fetchQueueNsById,
    closeNotification,
  }));

  const getLocalStorageIds = useCallback(() => {
    const storedIdsStr = window.localStorage.getItem(prefix) || '[]';
    const storedQueue: ITaskMgrQueue = JSON.parse(storedIdsStr);
    return storedQueue;
  }, []);

  useEffect(() => {
    const storedQueue = getLocalStorageIds();
    if (!!Object.keys(storedQueue).length) setQueue(storedQueue);
  }, [setQueue, getLocalStorageIds]);

  // 组件销毁和beforeunload都需要同步
  useEffect(() => {
    const onUnload = () => {
      window.localStorage.setItem(prefix, JSON.stringify(queue));
    };
    window.addEventListener('beforeunload', onUnload);
    return () => {
      window.localStorage.setItem(prefix, JSON.stringify(queue));
      window.removeEventListener('beforeunload', onUnload);
    };
  }, [queue, preset]);

  return <>{!!taskQueue.length && <RefreshMan run={run} rollingFrequency={rollingFrequency} />}</>;
});
