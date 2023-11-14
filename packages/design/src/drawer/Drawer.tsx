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
  cancelText?: string;
  okText?: string;
  okButtonProps?: ButtonProps;
  locale?: DrawerLocale;
}

type CompoundedComponent = React.FC<DrawerProps> & {
  _InternalPanelDoNotUseOrYouWillBeFired: typeof AntDrawer._InternalPanelDoNotUseOrYouWillBeFired;
};

const Drawer: CompoundedComponent = ({
  locale: customLocale,
  children,
  onOk,
  onClose,
  onCancel,
  okText,
  cancelText,
  okButtonProps,
  confirmLoading = false,
  footer = false,
  rootClassName,
  prefixCls: customizePrefixCls,
  ...restProps
}: DrawerProps) => {
  const { locale: contextLocale = defaultLocale } = React.useContext<ConfigConsumerProps>(
    ConfigProvider.ConfigContext
  );
  const drawerLocale: DrawerLocale = { ...contextLocale?.Drawer, ...customLocale };

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('drawer', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);

  const handleCancel = onCancel || onClose;
  const showFooter = !!(footer || onOk);
  const drawerCls = classNames(
    prefixCls,
    {
      [`${prefixCls}-with-footer`]: showFooter,
    },
    rootClassName
  );

  return wrapSSR(
    <AntDrawer
      destroyOnClose={true}
      onClose={handleCancel}
      rootClassName={drawerCls}
      prefixCls={customizePrefixCls}
      {...restProps}
    >
      {children}
      {showFooter && (
        // footer className should not be `${prefixCls}-footer` to avoid conflicts with antd
        // ref: https://github.com/ant-design/ant-design/blob/master/components/drawer/style/index.ts#L214
        <div className={`${prefixCls}-footer-content`}>
          {isBoolean(footer) ? (
            <Space>
              <Button onClick={handleCancel}>{cancelText || drawerLocale?.cancelText}</Button>
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

Drawer._InternalPanelDoNotUseOrYouWillBeFired = AntDrawer._InternalPanelDoNotUseOrYouWillBeFired;

if (process.env.NODE_ENV !== 'production') {
  Drawer.displayName = AntDrawer.displayName;
}

export default Drawer;
