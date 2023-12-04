import React, { isValidElement, useState, useContext } from 'react';
import { Result as Antresult, Space } from 'antd';
import type { ResultProps as AntResultProps } from 'antd/es/result';
import { useScroll } from 'ahooks';
import classNames from 'classnames';
import { omit } from 'lodash';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import Button from '../button';
import type { ButtonProps } from '../button';
import defaultLocale from '../locale/en-US';
import useStyle from './style';

export * from 'antd/es/Result';

export interface resultLocale {}

export interface ResultProps extends AntResultProps {
  locale?: resultLocale;
  type?: string;
  layout?: string; // horizontal | vertical
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
  locale: customLocale,
  type,
  layout = 'vertical',
  title,
  extra,
  subTitle,
  className,
  children,
  rootClassName,
  prefixCls: customizePrefixCls,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('result', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);

  return wrapSSR(
    <>
      {layout === 'vertical' ? (
        <Antresult
          className={classNames(`${prefixCls}`, `${prefixCls}-${layout}`)}
          title={title}
          subTitle={subTitle}
          extra={extra}
          {...restProps}
        />
      ) : (
        <Antresult
          className={classNames(`${prefixCls}`, `${prefixCls}-${layout}`)}
          title={null}
          extra={null}
          subTitle={
            <div className={classNames(`${prefixCls}-describe`)}>
              <div className={`${prefixCls}-title`}>{title}</div>
              {subTitle && <div className={`${prefixCls}-subtitle`}>{subTitle}</div>}
              <Extra prefixCls={prefixCls} extra={extra} />
              {children && <div className={`${prefixCls}-content`}>{children}</div>}
            </div>
          }
          {...restProps}
        />
      )}
    </>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Result.displayName = Antresult.displayName;
}

export default Result;
