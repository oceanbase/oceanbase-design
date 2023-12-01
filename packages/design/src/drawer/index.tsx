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
  confirmLoading,
  footer,
  rootClassName,
  bodyStyle,
  styles,
  prefixCls: customizePrefixCls,
  ...restProps
}) => {
  const { locale: contextLocale = defaultLocale } = React.useContext<ConfigConsumerProps>(
    ConfigProvider.ConfigContext
  );
  const drawerLocale: DrawerLocale = { ...contextLocale?.Drawer, ...customLocale };

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('drawer', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);

  const [contentElment, setContentElement] = useState<HTMLDivElement>();
  // useSize for re-render when contentElment change size
  useSize(contentElment);
  // useScroll for re-render when scroll
  const scroll = useScroll(contentElment);
  const isScroll = contentElment?.scrollHeight !== contentElment?.clientHeight;
  // start scroll
  const isStartScroll = scroll.top > 0;
  // Determine if an element has been totally scrolled
  // ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#determine_if_an_element_has_been_totally_scrolled
  const isTotalScroll =
    Math.abs(contentElment?.scrollHeight - contentElment?.clientHeight - contentElment?.scrollTop) <
    1;

  const handleCancel = onCancel || onClose;
  const showFooter = !!(footer || onOk) && footer !== false && footer !== null;
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
          className={classNames(`${prefixCls}-footer-content`, {
            [`${prefixCls}-footer-content-shadow`]: isScroll && !isTotalScroll,
          })}
          style={styles?.footer}
        >
          {isValidElement(footer) ? (
            footer
          ) : (
            <Space>
              <Button onClick={onOk} type="primary" loading={confirmLoading} {...okButtonProps}>
                {okText || drawerLocale?.okText}
              </Button>
              <Button onClick={handleCancel}>{cancelText || drawerLocale?.cancelText}</Button>
            </Space>
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
