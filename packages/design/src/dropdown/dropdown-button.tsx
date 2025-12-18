import React, { useContext } from 'react';
import { Dropdown } from 'antd';
import type { DropdownButtonProps } from 'antd/es/dropdown';
import { DownOutlined } from '@oceanbase/icons';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import useStyle from './style';

type CompoundedComponent = React.FC<DropdownButtonProps> & {
  /** @internal */
  __ANT_BUTTON: boolean;
};

const DropdownButton: CompoundedComponent = ({
  prefixCls: customizePrefixCls,
  className,
  icon = <DownOutlined />,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('dropdown', customizePrefixCls);
  const [wrapCSSVar] = useStyle(prefixCls);
  const buttonCls = classNames(className);
  return wrapCSSVar(
    <Dropdown.Button
      icon={icon}
      prefixCls={customizePrefixCls}
      className={buttonCls}
      {...restProps}
    />
  );
};

DropdownButton.__ANT_BUTTON = true;

export default DropdownButton;
