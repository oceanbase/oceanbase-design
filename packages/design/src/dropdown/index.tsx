import React, { useContext } from 'react';
import { Dropdown as AntDropdown } from 'antd';
import type { DropDownProps } from 'antd/es/dropdown';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import DropdownButton from './dropdown-button';
import useStyle from './style';

export * from 'antd/es/dropdown';

type CompoundedComponent = React.FC<DropDownProps> & {
  Button: typeof DropdownButton;
  _InternalPanelDoNotUseOrYouWillBeFired: typeof AntDropdown._InternalPanelDoNotUseOrYouWillBeFired;
};

const Dropdown: CompoundedComponent = ({
  prefixCls: customizePrefixCls,
  className,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('dropdown', customizePrefixCls);
  const [wrapCSSVar] = useStyle(prefixCls);
  const dropdownCls = classNames(className);

  return wrapCSSVar(
    <AntDropdown prefixCls={customizePrefixCls} className={dropdownCls} {...restProps} />
  );
};

Dropdown._InternalPanelDoNotUseOrYouWillBeFired =
  AntDropdown._InternalPanelDoNotUseOrYouWillBeFired;

Dropdown.Button = DropdownButton;

export default Dropdown;
