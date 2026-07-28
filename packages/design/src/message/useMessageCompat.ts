import { useMemo } from 'react';
import type { ConfigOptions } from 'antd/es/message/interface';
import { useObNotification } from '../notification/useObNotification';
import { createMessageCompat, mapMessageConfigToNotification } from './createMessageCompat';

export const useMessageCompat = (messageConfig?: ConfigOptions) => {
  const [notificationApi, holder] = useObNotification(
    mapMessageConfigToNotification(messageConfig)
  );
  const messageApi = useMemo(() => createMessageCompat(notificationApi), [notificationApi]);
  return [messageApi, holder] as const;
};
