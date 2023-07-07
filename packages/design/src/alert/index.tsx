import { Alert as AntAlert } from 'antd';
import type { AlertProps as AntAlertProps } from 'antd/es/alert';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import useStyle from './style';

export * from 'antd/es/alert';

export interface AlertProps extends AntAlertProps {
  ghost?: boolean;
  colored?: boolean;
}

const Alert = ({
  ghost,
  colored,
  prefixCls: customizePrefixCls,
  className,
  ...restProps
}: AlertProps) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('alert', customizePrefixCls);
  const { wrapSSR, hashId } = useStyle(prefixCls);
  const alertCls = classNames(
    {
      [`${prefixCls}-ghost`]: ghost,
      [`${prefixCls}-colored`]: colored,
    },
    className,
    hashId
  );
  return wrapSSR(<AntAlert prefixCls={customizePrefixCls} className={alertCls} {...restProps} />);
};

Alert.ErrorBoundary = AntAlert.ErrorBoundary;

if (process.env.NODE_ENV !== 'production') {
  Alert.displayName = AntAlert.displayName;
}

export default Alert;
