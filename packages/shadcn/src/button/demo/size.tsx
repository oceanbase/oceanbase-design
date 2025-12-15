import React from 'react';
import { Button } from '@oceanbase/shadcn';

export default () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Button size="sm">小按钮</Button>
      <Button size="default">默认按钮</Button>
      <Button size="lg">大按钮</Button>
    </div>
  );
};

