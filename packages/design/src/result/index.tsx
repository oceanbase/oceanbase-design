import React, { useContext } from 'react';
import { Result as AntResult } from 'antd';
import type {
  ResultProps as AntResultProps,
  ResultStatusType as AntResultStatusType,
} from 'antd/es/result';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import Success from './Success';
import Error from './Error';
import Warning from './Warning';
import Processing from './Processing';
import Image403 from './403';
import Image404 from './404';
import Image500 from './500';
import ResourceNotFound from './ResourceNotFound';
import NetworkError from './NetworkError';
import VersionUpdate from './VersionUpdate';
import Normal from './Normal';
import useStyle from './style';

export * from 'antd/es/result';

export type ResultStatusType = AntResultStatusType | 'processing' | 'normal';

export interface ResultProps extends Omit<AntResultProps, 'status'> {
  status?: ResultStatusType;
}

export type ResultType = React.FC<ResultProps> & {
  PRESENTED_IMAGE_403: typeof Image403;
  PRESENTED_IMAGE_404: typeof Image404;
  PRESENTED_IMAGE_500: typeof Image500;
  PRESENTED_IMAGE_NOT_FOUND: typeof ResourceNotFound;
  PRESENTED_IMAGE_NETWORK_ERROR: typeof NetworkError;
  PRESENTED_IMAGE_VERSION_UPDATE: typeof VersionUpdate;
  PRESENTED_IMAGE_NORMAL: typeof Normal;
};

const Result: ResultType = ({ prefixCls: customizePrefixCls, className, status, ...restProps }) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('result', customizePrefixCls);
  const [wrapCSSVar] = useStyle(prefixCls);
  const resultCls = classNames(className);

  const statusMap = {
    success: <Success />,
    error: <Error />,
    warning: <Warning />,
    processing: <Processing />,
    normal: <Normal />,
    403: <Image403 />,
    404: <Image404 />,
    500: <Image500 />,
  };

  return wrapCSSVar(
    <AntResult
      icon={statusMap[status]}
      prefixCls={customizePrefixCls}
      className={resultCls}
      {...restProps}
    />
  );
};

Result.PRESENTED_IMAGE_403 = Image403;
Result.PRESENTED_IMAGE_404 = Image404;
Result.PRESENTED_IMAGE_500 = Image500;
Result.PRESENTED_IMAGE_NOT_FOUND = ResourceNotFound;
Result.PRESENTED_IMAGE_NETWORK_ERROR = NetworkError;
Result.PRESENTED_IMAGE_VERSION_UPDATE = VersionUpdate;
Result.PRESENTED_IMAGE_NORMAL = Normal;

if (process.env.NODE_ENV !== 'production') {
  Result.displayName = AntResult.displayName;
}

export default Result;
