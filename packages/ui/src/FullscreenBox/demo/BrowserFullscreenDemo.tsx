/**
 * title: 浏览器全屏
 */
import React from 'react';
import { FullscreenBox } from '@oceanbase/ui';
import { SimpleTable } from './SimpleTable';

export default () => {
  return (
    <FullscreenBox defaultMode="browser" header={{ title: '可全屏表格-浏览器全屏' }}>
      <SimpleTable />
    </FullscreenBox>
  );
};
