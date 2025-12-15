import React from 'react';
import { Badge } from '@oceanbase/shadcn';

export default () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Badge>默认</Badge>
      <Badge variant="secondary">次要</Badge>
      <Badge variant="destructive">危险</Badge>
      <Badge variant="outline">轮廓</Badge>
    </div>
  );
};
