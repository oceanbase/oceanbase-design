/**
 * iframe: true
 */
import React from 'react';
import { message } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { CloudUploadOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <SideTip
      type="primary"
      icon={<CloudUploadOutlined />}
      onClick={() => {
        message.info('点击事件触发');
      }}
    />
  );
};
