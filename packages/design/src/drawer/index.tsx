import React, { isValidElement, useState, useContext } from 'react';
import { Drawer as AntDrawer, Space } from 'antd';
import type { DrawerProps as AntDrawerProps } from 'antd/es/drawer';
import { useScroll, useSize } from 'ahooks';
import classNames from 'classnames';
import { omit } from 'lodash';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import Button from '../button';
import type { ButtonProps } from '../button';
import defaultLocale from '../locale/en-US';
import useStyle from './style';

export * from 'antd/es/drawer';

export interface DrawerLocale {
  okText?: string;
  cancelText?: string;
}

export interface DrawerProps extends AntDrawerProps {
  onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel?: (e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void;
  confirmLoading?: boolean;
  footer?: React.ReactNode | boolean;
  // only work for default footer
  footerExtra?: React.ReactNode;
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
  loading,
  onOk,
  onClose,
  onCancel,
  okText,
  cancelText,
  okButtonProps,
  confirmLoading,
  footer,
  footerExtra,
  rootClassName,
  bodyStyle,
  styles,
  prefixCls: customizePrefixCls,
  ...restProps
}) => {
  const { locale: contextLocale } = React.useContext<ConfigConsumerProps>(
    ConfigProvider.ConfigContext
  );
  const drawerLocale: DrawerLocale = {
    ...defaultLocale.Drawer,
    ...contextLocale?.Drawer,
    ...customLocale,
  };

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('drawer', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);

  const [contentElment, setContentElement] = useState<HTMLDivElement | null>(null);
  // useSize for re-render when contentElment change size
  useSize(contentElment);
  // useScroll for re-render when scroll
  const scroll = useScroll(contentElment);
  const isScroll = !loading && contentElment?.scrollHeight !== contentElment?.clientHeight;
  // start scroll
  const isStartScroll = !loading && scroll.top > 0;
  // Determine if an element has been totally scrolled
  // ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#determine_if_an_element_has_been_totally_scrolled
  const isTotalScroll =
    !loading &&
    Math.abs(
      (contentElment?.scrollHeight || 0) -
        (contentElment?.clientHeight || 0) -
        (contentElment?.scrollTop || 0)
    ) < 1;

  const handleCancel = onCancel || onClose;
  const showFooter = !!(footer || onOk) && footer !== false && footer !== null;
  const drawerCls = classNames(
    {
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-with-footer`]: showFooter,
    },
    rootClassName
  );

  return wrapSSR(
    <AntDrawer
      loading={loading}
      destroyOnClose={true}
      onClose={handleCancel}
      rootClassName={drawerCls}
      prefixCls={customizePrefixCls}
      classNames={{
        header: classNames({
          [`${prefixCls}-header-shadow`]: isStartScroll,
        }),
      }}
      styles={omit(styles, ['body', 'footer'])}
      {...restProps}
    >
      <div
        ref={element => {
          setContentElement(element);
        }}
        className={`${prefixCls}-body-content`}
        style={{
          ...bodyStyle,
          ...styles?.body,
        }}
      >
        {children}
      </div>
      {showFooter && (
        // footer className should not be `${prefixCls}-footer` to avoid conflicts with antd
        // ref: https://github.com/ant-design/ant-design/blob/master/components/drawer/style/index.ts#L214
        <div
          className={classNames(`${prefixCls}-footer-container`, {
            [`${prefixCls}-footer-container-shadow`]: isScroll && !isTotalScroll,
          })}
          style={styles?.footer}
        >
          {isValidElement(footer) ? (
            footer
          ) : (
            <div className={`${prefixCls}-footer-content`}>
              <Space>
                <Button onClick={onOk} type="primary" loading={confirmLoading} {...okButtonProps}>
                  {okText || drawerLocale?.okText}
                </Button>
                <Button onClick={handleCancel}>{cancelText || drawerLocale?.cancelText}</Button>
              </Space>
              {footerExtra}
            </div>
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
