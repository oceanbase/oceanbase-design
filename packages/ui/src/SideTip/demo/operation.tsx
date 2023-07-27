/**
 * title: 操作选单
 * iframe: true
 */

import { SettingFilled } from '@oceanbase/icons';
import { useState } from 'react';
import { Dropdown, Menu } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';

export default () => {
  const [open, setOpen] = useState(false);
  const handleVisibleChange = isOpen => {
    setOpen(isOpen);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.oceanbase.com/">
          创建画布
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          导入
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.antgroup.com/">
          另存为
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu}
      open={open}
      placement="topRight"
      trigger={['hover']}
      onVisibleChange={handleVisibleChange}
      onOpenChange={handleVisibleChange}
      getPopupContainer={() => document.getElementById('dropdown')}
      overlayStyle={{ paddingInlineEnd: 56 }}
    >
      <SideTip icon={<SettingFilled />} open={open} id="dropdown" />
    </Dropdown>
  );
};
