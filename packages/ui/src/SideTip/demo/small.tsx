/**
 * title: 小尺寸
 * iframe: true
 */
import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { CloudUploadOutlined } from '@oceanbase/icons';

export default () => {
  const [open, setOpen] = useState(false);

  const handleVisibleChange = () => {
    message.success('点击事件触发');
    setOpen(!open);
  };
  return (
    <SideTip
      type="primary"
      size="small"
      loading
      open={open}
      icon={<CloudUploadOutlined />}
      onClick={handleVisibleChange}
    />
  );
};
