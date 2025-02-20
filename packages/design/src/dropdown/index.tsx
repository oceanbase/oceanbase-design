import React from 'react';
import { Dropdown as AntDropdown } from 'antd';
import type { DropDownProps } from 'antd/es/dropdown';
import DropdownButton from './dropdown-button';

export * from 'antd/es/dropdown';

type CompoundedComponent = React.FC<DropDownProps> & {
  Button: typeof DropdownButton;
  _InternalPanelDoNotUseOrYouWillBeFired: typeof AntDropdown._InternalPanelDoNotUseOrYouWillBeFired;
};

const Dropdown: CompoundedComponent = props => {
  return <AntDropdown {...props} />;
};

Dropdown._InternalPanelDoNotUseOrYouWillBeFired =
  AntDropdown._InternalPanelDoNotUseOrYouWillBeFired;

Dropdown.Button = DropdownButton;

export default Dropdown;
