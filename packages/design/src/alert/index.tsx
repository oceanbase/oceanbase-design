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
  mini?: boolean;
}

const iconMapOutlined = {
  success: <CheckCircleOutlined />,
  info: <InfoCircleOutlined />,
  error: <CloseCircleOutlined />,
  warning: <ExclamationCircleOutlined />,
};

const Alert = ({
  type: typeProp,
  showIcon = true,
  closable,
  ghost,
  mini,
  banner,
  prefixCls: customizePrefixCls,
  className,
  ...restProps
}: AlertProps) => {
  // banner exists and type is empty, use warning type by default for correct icon
  const type = banner && !typeProp ? 'warning' : typeProp;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('alert', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const alertCls = classNames(
    {
      [`${prefixCls}-closable`]: closable,
      [`${prefixCls}-ghost`]: ghost,
      [`${prefixCls}-mini`]: mini,
    },
    className
  );
  return wrapSSR(
    <AntAlert
      type={type}
      showIcon={showIcon}
      closable={closable}
      banner={banner}
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
