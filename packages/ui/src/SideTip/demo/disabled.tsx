/**
 * title: 不可用
 * iframe: true
 */
import React from 'react';
import { message } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { EditOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <SideTip
      disabled
      icon={<EditOutlined />}
      onClick={() => {
        message.info('点击事件触发');
      }}
    />
  );
};
