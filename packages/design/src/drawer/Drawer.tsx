import { Drawer as AntDrawer } from 'antd';
import { Button, Space } from '@oceanbase/design';
import type { DrawerProps as AntDrawerProps } from 'antd/es/drawer';
import type { ButtonProps } from '@oceanbase/design/es/button';
import React, { useContext } from 'react';
import { isBoolean } from 'lodash';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import defaultLocale from '../locale/en-US';
import useStyle from './style';
export * from 'antd/es/drawer';

export interface DrawerLocale {
  okText?: string;
  cancelText?: string;
}

export interface DrawerProps extends AntDrawerProps {
  onOk?: (e) => void;
  onCancel?: (e) => void;
  confirmLoading?: boolean;
  footer?: React.ReactNode | boolean;
  extra?: React.ReactNode;
  cancelText?: string;
  okText?: string;
  okButtonProps?: ButtonProps;
  locale?: DrawerLocale;
}

const Drawer = ({
  locale: customLocale,
  children,
  onOk,
  onClose,
  onCancel,
  cancelText, // = '取消',
  okText, // = '确定',
  okButtonProps,
  confirmLoading = false,
  footer = true,
  extra,
  className,
  prefixCls: customizePrefixCls,
  style = {},
  ...restProps
}: DrawerProps) => {
  const { locale: contextLocale = defaultLocale } = React.useContext<ConfigConsumerProps>(
    ConfigProvider.ConfigContext
  );

  // @ts-ignore
  const drawerLocale: DrawerLocale = { ...contextLocale?.Drawer, ...customLocale };

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('drawer', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const drawerCls = classNames(prefixCls, className);

  return wrapSSR(
    <AntDrawer
      destroyOnClose={true}
      className={`${drawerCls}`}
      prefixCls={customizePrefixCls}
      styles={{
        body: {
          marginBottom: footer ? 80 : 0,
        },
      }}
      style={{
        ...style,
      }}
      onClose={onClose || onCancel}
      {...restProps}
    >
      {children}
      {(footer || extra) && (
        <div className={`${prefixCls}-footer-content`}>
          <div>{extra}</div>
          {isBoolean(footer) ? (
            <Space>
              <Button onClick={onCancel || onClose}>
                {cancelText || drawerLocale?.cancelText}
              </Button>
              <Button onClick={onOk} type="primary" loading={confirmLoading} {...okButtonProps}>
                {okText || drawerLocale?.okText}
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

if (process.env.NODE_ENV !== 'production') {
  Drawer.displayName = AntDrawer.displayName;
}

export default Drawer;
