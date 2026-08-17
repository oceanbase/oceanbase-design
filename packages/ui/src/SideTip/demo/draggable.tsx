/**
 * iframe: true
 */
import React from 'react';
import { SideTip } from '@oceanbase/ui';
import { CloudUploadOutlined } from '@oceanbase/icons';

export default () => {
  return <SideTip type="primary" icon={<CloudUploadOutlined />} draggable={false} />;
};
