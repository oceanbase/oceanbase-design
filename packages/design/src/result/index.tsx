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
import useStyle from './style';

export * from 'antd/es/result';

export type ResultStatusType = AntResultStatusType | 'processing';

export interface ResultProps extends Omit<AntResultProps, 'status'> {
  status?: ResultStatusType;
}

export type ResultType = React.FC<ResultProps> & {
  PRESENTED_IMAGE_403: typeof Image403;
  PRESENTED_IMAGE_404: typeof Image404;
  PRESENTED_IMAGE_500: typeof Image500;
};

const Result: ResultType = ({ prefixCls: customizePrefixCls, className, status, ...restProps }) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('result', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const resultCls = classNames(className);

  const statusMap = {
    success: <Success />,
    error: <Error />,
    warning: <Warning />,
    processing: <Processing />,
    403: <Image403 />,
    404: <Image404 />,
    500: <Image500 />,
  };

  return wrapSSR(
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

if (process.env.NODE_ENV !== 'production') {
  Result.displayName = AntResult.displayName;
}

export default Result;
