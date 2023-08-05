/**
 * title: 回到顶部
 * iframe: true
 */

import { ArrowUpOutlined } from '@oceanbase/icons';
import { BackTop } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';

export default () => {
  return (
    <div style={{ height: '600vh', padding: 8 }}>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <BackTop>
        <SideTip
          hideable={false}
          buttonStyle={{ opacity: 0.9 }}
          icon={<ArrowUpOutlined />}
          tooltip={{ title: '返回顶部', placement: 'left', mouseEnterDelay: 0.4 }}
        />
      </BackTop>
      <BackTop>
        <SideTip
          hideable={false}
          buttonStyle={{ opacity: 0.9 }}
          position={{ right: 100 }}
          size="small"
          icon={<ArrowUpOutlined />}
          tooltip={{ title: '返回顶部', placement: 'left', mouseEnterDelay: 0.4 }}
        />
      </BackTop>
    </div>
  );
};
