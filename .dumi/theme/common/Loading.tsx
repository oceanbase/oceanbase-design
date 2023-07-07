import React from 'react';
import { Skeleton, Space } from '@oceanbase/design';

const Loading: React.FC = () => {
  return (
    <Space direction="vertical" style={{ width: '100%', marginTop: 24 }} size={40}>
      <Skeleton title={false} active paragraph={{ rows: 3 }} />
      <Skeleton active paragraph={{ rows: 3 }} />
    </Space>
  );
};

export default Loading;
