import React, { useContext } from 'react';
import { Typography as AntTypography } from 'antd';
import type { TextProps as AntTextProps } from 'antd/es/typography/Text';
import ConfigProvider from '../config-provider';
import type { Copyable } from '../_util/getCopyableConfig';
import { getEllipsisConfig } from '../_util/getEllipsisConfig';
import useClassName from './hooks/useClassName';
import useCopyable from './hooks/useCopyable';
import useStyle from './style';

const { Text: AntText } = AntTypography;

export * from 'antd/es/typography/Text';

export interface TextProps extends AntTextProps {
  caption?: boolean;
  block?: boolean;
  copyable?: Copyable;
}

type CompoundedComponent = React.ForwardRefExoticComponent<
  TextProps & React.RefAttributes<HTMLSpanElement>
> & {
  /** @internal */
  __ANT_TYPOGRAPHY: boolean;
};

const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  (
    {
      editable,
      ellipsis,
      copyable,
      caption,
      block,
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
      caption,
      block,
      copyableHover,
    });

    return wrapCSSVar(
      <AntText
        ref={ref}
        editable={editable}
        ellipsis={getEllipsisConfig(ellipsis, children)}
        copyable={copyableConfig}
        prefixCls={customizePrefixCls}
        className={typographyCls}
        {...restProps}
      >
        {children}
      </AntText>
    );
  }
) as CompoundedComponent;

if (process.env.NODE_ENV !== 'production') {
  Text.displayName = AntText.displayName;
}

Text.__ANT_TYPOGRAPHY = true;

export default Text;
