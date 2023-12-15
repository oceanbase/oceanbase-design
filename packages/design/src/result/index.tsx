import React, { useContext } from 'react';
import { Result as Antresult } from 'antd';
import type { ResultProps as AntResultProps } from 'antd/es/result';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import useStyle from './style';
export * from 'antd/es/result';

export interface ResultProps extends AntResultProps {}

const Result: React.FC<ResultProps> = ({
  children,
  prefixCls: customizePrefixCls,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('result', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);

  return wrapSSR(<Antresult className={classNames(`${prefixCls}`)} {...restProps} />);
};

if (process.env.NODE_ENV !== 'production') {
  Result.displayName = Antresult.displayName;
}

export default Result;
