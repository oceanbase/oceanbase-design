/**
 * title: ToolTip
 * iframe: true
 */

import { CloudUploadOutlined } from '@ant-design/icons';
import { message } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';

export default () => {
  return (
    <SideTip
      type="primary"
      tooltip={{
        title: 'ToolTip 提示',
      }}
      icon={<CloudUploadOutlined />}
      onClick={() => {
        message.info('点击事件触发');
      }}
    />
  );
};
