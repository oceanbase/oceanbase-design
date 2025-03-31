import React, { useContext } from 'react';
import { Alert as AntAlert } from 'antd';
import type { AlertProps as AntAlertProps } from 'antd/es/alert';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
} from '@oceanbase/icons';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import useStyle from './style';

export * from 'antd/es/alert';

export interface AlertProps extends AntAlertProps {
  ghost?: boolean;
  colored?: boolean;
}

const iconMapOutlined = {
  success: <CheckCircleOutlined />,
  info: <InfoCircleOutlined />,
  error: <CloseCircleOutlined />,
  warning: <ExclamationCircleOutlined />,
};

const Alert = ({
  type,
  ghost,
  colored,
  prefixCls: customizePrefixCls,
  className,
  ...restProps
}: AlertProps) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('alert', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const alertCls = classNames(
    {
      [`${prefixCls}-ghost`]: ghost,
      [`${prefixCls}-colored`]: colored,
    },
    className
  );
  return wrapSSR(
    <AntAlert
      type={type}
      icon={iconMapOutlined[type]}
      prefixCls={customizePrefixCls}
      className={alertCls}
      {...restProps}
    />
  );
};

Alert.ErrorBoundary = AntAlert.ErrorBoundary;

if (process.env.NODE_ENV !== 'production') {
  Alert.displayName = AntAlert.displayName;
}

export default Alert;
