import React from 'react';
import { Dropdown } from 'antd';
import type { DropdownButtonProps } from 'antd/es/dropdown';
import { DownOutlined } from '@oceanbase/icons';

type CompoundedComponent = React.FC<DropdownButtonProps> & {
  /** @internal */
  __ANT_BUTTON: boolean;
};

const DropdownButton: CompoundedComponent = ({ icon = <DownOutlined />, ...restProps }) => {
  return <Dropdown.Button icon={icon} {...restProps} />;
};

DropdownButton.__ANT_BUTTON = true;

export default DropdownButton;
