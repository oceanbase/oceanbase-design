import React from 'react';
import { ConfigProvider, Skeleton, Space } from '@oceanbase/design';

const Loading: React.FC = () => {
  // Loading should be wrapped by ConfigProvider as it is out of SiteThemeProvider
  return (
    <ConfigProvider>
      <Space direction="vertical" style={{ width: '100%', marginTop: 24 }} size={40}>
        <Skeleton title={false} active paragraph={{ rows: 3 }} />
        <Skeleton active paragraph={{ rows: 3 }} />
      </Space>
    </ConfigProvider>
  );
};

export default Loading;
