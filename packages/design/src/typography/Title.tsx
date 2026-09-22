import React, { useContext } from 'react';
import { Typography as AntTypography } from 'antd';
import type { TitleProps as AntTitleProps } from 'antd/es/typography/Title';
import ConfigProvider from '../config-provider';
import type { Copyable } from '../_util/getCopyableConfig';
import { getEllipsisConfig } from '../_util/getEllipsisConfig';
import useClassName from './hooks/useClassName';
import useCopyable from './hooks/useCopyable';
import useStyle from './style';

const { Title: AntTitle } = AntTypography;

export * from 'antd/es/typography/Title';

export interface TitleProps extends AntTitleProps {
  copyable?: Copyable;
}

type CompoundedComponent = React.ForwardRefExoticComponent<
  TitleProps & React.RefAttributes<HTMLElement>
> & {
  /** @internal */
  __ANT_TYPOGRAPHY: boolean;
};

const Title = React.forwardRef<HTMLElement, TitleProps>(
  (
    {
      editable,
      ellipsis,
      copyable,
      prefixCls: customizePrefixCls,
      className,
      children,
      ...restProps
    },
    ref
  ) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('typography', customizePrefixCls);
    const [wrapCSSVar] = useStyle(prefixCls);
    const { hover: copyableHover, copyable: copyableConfig } = useCopyable(copyable, children);
    const typographyCls = useClassName({
      prefixCls,
      className,
      editable,
      copyableHover,
    });

    return wrapCSSVar(
      <AntTitle
        ref={ref}
        editable={editable}
        ellipsis={getEllipsisConfig(ellipsis, children)}
        copyable={copyableConfig}
        prefixCls={customizePrefixCls}
        className={typographyCls}
        {...restProps}
      >
        {children}
      </AntTitle>
    );
  }
) as CompoundedComponent;

if (process.env.NODE_ENV !== 'production') {
  Title.displayName = AntTitle.displayName;
}

Title.__ANT_TYPOGRAPHY = true;

export default Title;
