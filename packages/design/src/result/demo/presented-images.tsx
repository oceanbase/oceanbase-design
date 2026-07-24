import React from 'react';
import { Result, Space } from '@oceanbase/design';

const items = [
  {
    icon: <Result.PRESENTED_IMAGE_NOT_FOUND />,
    title: 'Resource not found',
    subTitle: 'The requested resource does not exist or has been removed.',
  },
  {
    icon: <Result.PRESENTED_IMAGE_NETWORK_ERROR />,
    title: 'Network error',
    subTitle: 'Please check your network connection and try again.',
  },
  {
    icon: <Result.PRESENTED_IMAGE_VERSION_UPDATE />,
    title: 'Version update',
    subTitle: 'A new version is available. Refresh to continue.',
  },
] as const;

export default () => (
  <Space direction="vertical" size={48} style={{ width: '100%' }}>
    {items.map(item => (
      <Result key={item.title} icon={item.icon} title={item.title} subTitle={item.subTitle} />
    ))}
  </Space>
);
