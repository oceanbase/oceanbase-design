/**
 * iframe: true
 */
import React, { useState } from 'react';
import { Dropdown, Menu } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { SettingFilled } from '@oceanbase/icons';

export default () => {
  const [open, setOpen] = useState(false);
  const handleVisibleChange = isOpen => {
    setOpen(isOpen);
  };

  const menu = (
    <Menu>
      <Menu.Item>创建画布</Menu.Item>
      <Menu.Item>导入</Menu.Item>
      <Menu.Item>另存为</Menu.Item>
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
    >
      <SideTip icon={<SettingFilled />} open={open} />
    </Dropdown>
  );
};
