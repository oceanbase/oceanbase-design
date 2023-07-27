/**
 * title: 不可用
 * iframe: true
 */

import { EditOutlined } from '@oceanbase/icons';
import { message } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';

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
