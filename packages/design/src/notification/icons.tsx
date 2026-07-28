import React from 'react';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
  LoadingOutlined,
} from '@oceanbase/icons';
import type { NotificationType } from './interface';

export const iconMap: Record<NotificationType, React.ReactNode> = {
  success: <CheckCircleOutlined />,
  info: <InfoCircleOutlined />,
  error: <CloseCircleOutlined />,
  warning: <ExclamationCircleOutlined />,
  processing: <LoadingOutlined spin />,
};
