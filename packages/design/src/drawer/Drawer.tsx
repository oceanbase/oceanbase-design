import { Drawer as AntDrawer } from 'antd';
import { Button, Space } from '@oceanbase/design';
import type { DrawerProps as AntDrawerProps } from 'antd/es/drawer';
import type { ButtonProps } from '@oceanbase/design/es/button';
import React, { useContext } from 'react';
import { isBoolean } from 'lodash';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import useStyle from './style';
export * from 'antd/es/drawer';

export interface DrawerProps extends AntDrawerProps {
  onOk?: (e) => void;
  onCancel?: (e) => void;
  confirmLoading?: boolean;
  footer?: React.ReactNode | boolean;
  cancelText?: string;
  okText?: string;
  okButtonProps?: ButtonProps;
}

type CompoundedComponent = React.FC<DrawerProps> & {
  _InternalPanelDoNotUseOrYouWillBeFired: typeof AntDrawer._InternalPanelDoNotUseOrYouWillBeFired;
};

const Drawer: CompoundedComponent = ({
  children,
  onOk,
  onCancel,
  cancelText = '取消',
  okText = '确定',
  okButtonProps,
  confirmLoading = false,
  footer = true,
  className,
  prefixCls: customizePrefixCls,
  style = {},
  ...restProps
}: DrawerProps) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('drawer', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const drawerCls = classNames(prefixCls, className);

  return wrapSSR(
    <AntDrawer
      className={`${drawerCls}`}
      prefixCls={customizePrefixCls}
      style={{
        ...style,
      }}
      {...restProps}
    >
      {children}
      {footer && (
        <div className={`${prefixCls}-footer-content`}>
          {isBoolean(footer) ? (
            <Space>
              <Button onClick={onCancel}>{cancelText}</Button>
              <Button onClick={onOk} type="primary" loading={confirmLoading} {...okButtonProps}>
                {okText}
              </Button>
            </Space>
          ) : (
            footer
          )}
        </div>
      )}
    </AntDrawer>
  );
};

Drawer._InternalPanelDoNotUseOrYouWillBeFired = AntDrawer._InternalPanelDoNotUseOrYouWillBeFired;

if (process.env.NODE_ENV !== 'production') {
  Drawer.displayName = AntDrawer.displayName;
}

export default Drawer;
