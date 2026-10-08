import { useMemo } from 'react';
import { useObNotification } from '../notification/useObNotification';
import { createMessageCompat, mapMessageConfigToNotification } from './createMessageCompat';
import type { ObMessageConfig } from './interface';

export const useMessageCompat = (messageConfig?: ObMessageConfig) => {
  const [notificationApi, holder] = useObNotification(
    mapMessageConfigToNotification(messageConfig)
  );
  const messageApi = useMemo(() => createMessageCompat(notificationApi), [notificationApi]);
  return [messageApi, holder] as const;
};
