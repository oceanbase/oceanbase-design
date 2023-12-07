import React, { useContext } from 'react';
import { Result as Antresult } from 'antd';
import type { ResultProps as AntResultProps } from 'antd/es/result';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import useStyle from './style';
import FailedIcon from './icon/FailedIcon';
import HealthyIcon from './icon/HealthyIcon';
import RunningIcon from './icon/RunningIcon';
import SuccessIcon from './icon/SuccessIcon';
import WarningIcon from './icon/WarningIcon';

export * from 'antd/es/Result';

export interface ResultProps extends AntResultProps {
  type?: string;
  resultStatus?: string;
}

type CompoundedComponent = React.FC<ResultProps> & {
  // _InternalPanelDoNotUseOrYouWillBeFired: typeof Antresult._InternalPanelDoNotUseOrYouWillBeFired;
};

interface ExtraProps {
  prefixCls: string;
  extra: React.ReactNode;
}

const Extra: React.FC<ExtraProps> = ({ prefixCls, extra }) => {
  if (!extra) {
    return null;
  }
  return <div className={`${prefixCls}-extra`}>{extra}</div>;
};

const Result: CompoundedComponent = ({
  resultStatus,
  type,
  title,
  extra,
  subTitle,
  className,
  children,
  icon,
  status,
  rootClassName,
  prefixCls: customizePrefixCls,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('result', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);

  const renderIcon = () => {
    let iconImage;
    switch (resultStatus) {
      case 'failed':
        iconImage = <FailedIcon />;
        break;
      case 'healthy':
        iconImage = <HealthyIcon />;
        break;
      case 'running':
        iconImage = <RunningIcon />;
        break;
      case 'success':
        iconImage = <SuccessIcon />;
        break;
      case 'warning':
        iconImage = <WarningIcon />;
        break;
      default:
        iconImage = <HealthyIcon />;
        break;
    }
    return iconImage;
  };

  return wrapSSR(
    <Antresult
      className={classNames(`${prefixCls}`)}
      title={title}
      subTitle={subTitle}
      extra={extra}
      icon={icon || status ? icon : renderIcon()}
      {...restProps}
    />
  );
};

if (process.env.NODE_ENV !== 'production') {
  Result.displayName = Antresult.displayName;
}

export default Result;
