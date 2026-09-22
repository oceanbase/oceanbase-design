import React, { useContext } from 'react';
import { Typography as AntTypography } from 'antd';
import type { ParagraphProps as AntParagraphProps } from 'antd/es/typography/Paragraph';
import ConfigProvider from '../config-provider';
import type { Copyable } from '../_util/getCopyableConfig';
import { getEllipsisConfig } from '../_util/getEllipsisConfig';
import useClassName from './hooks/useClassName';
import useCopyable from './hooks/useCopyable';
import useStyle from './style';

const { Paragraph: AntParagraph } = AntTypography;

export * from 'antd/es/typography/Paragraph';

export interface ParagraphProps extends AntParagraphProps {
  copyable?: Copyable;
}

type CompoundedComponent = React.ForwardRefExoticComponent<
  ParagraphProps & React.RefAttributes<HTMLElement>
> & {
  /** @internal */
  __ANT_TYPOGRAPHY: boolean;
};

const Paragraph = React.forwardRef<HTMLElement, ParagraphProps>(
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
      <AntParagraph
        ref={ref}
        editable={editable}
        ellipsis={getEllipsisConfig(ellipsis, children)}
        copyable={copyableConfig}
        prefixCls={customizePrefixCls}
        className={typographyCls}
        {...restProps}
      >
        {children}
      </AntParagraph>
    );
  }
) as CompoundedComponent;

if (process.env.NODE_ENV !== 'production') {
  Paragraph.displayName = AntParagraph.displayName;
}

Paragraph.__ANT_TYPOGRAPHY = true;

export default Paragraph;
