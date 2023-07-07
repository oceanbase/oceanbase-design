/**
 * title: 基本使用
 * iframe: true
 */

import { CloudUploadOutlined } from '@ant-design/icons';
import { message } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';

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
