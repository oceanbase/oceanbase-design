/**
 * title: 普通按钮模式
 * iframe: true
 */

import { CloudUploadOutlined } from '@ant-design/icons';
import { message } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';

export default () => {
  return (
    <SideTip
      icon={<CloudUploadOutlined />}
      hideable={false}
      onClick={() => {
        message.info('点击事件触发');
      }}
    />
  );
};
