import React, { useContext } from 'react';
import { Typography as AntTypography } from 'antd';
import type { TitleProps as AntTitleProps } from 'antd/es/typography/Title';
import ConfigProvider from '../config-provider';
import useClassName from './hooks/useClassName';
import useStyle from './style';

const { Title: AntTitle } = AntTypography;

export * from 'antd/es/typography/Title';

export interface TitleProps extends AntTitleProps {}

const Title = React.forwardRef<HTMLElement, TitleProps>(
  ({ editable, prefixCls: customizePrefixCls, className, children, ...restProps }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('typography', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);
    const typographyCls = useClassName(prefixCls, className, editable);

    return wrapSSR(
      <AntTitle
        ref={ref}
        editable={editable}
        prefixCls={customizePrefixCls}
        className={typographyCls}
        {...restProps}
      >
        {children}
      </AntTitle>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  Title.displayName = AntTitle.displayName;
}

export default Title;
