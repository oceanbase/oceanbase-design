import React, { useContext } from 'react';
import { Typography as AntTypography } from 'antd';
import type { ParagraphProps as AntParagraphProps } from 'antd/es/typography/Paragraph';
import ConfigProvider from '../config-provider';
import useClassName from './hooks/useClassName';
import useStyle from './style';

const { Paragraph: AntParagraph } = AntTypography;

export * from 'antd/es/typography/Paragraph';

export interface ParagraphProps extends AntParagraphProps {}

type CompoundedComponent = React.ForwardRefExoticComponent<
  ParagraphProps & React.RefAttributes<HTMLElement>
> & {
  /** @internal */
  __ANT_TYPOGRAPHY: boolean;
};

const Paragraph = React.forwardRef<HTMLElement, ParagraphProps>(
  ({ editable, prefixCls: customizePrefixCls, className, children, ...restProps }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('typography', customizePrefixCls);
    const [wrapCSSVar] = useStyle(prefixCls);
    const typographyCls = useClassName(prefixCls, className, editable);

    return wrapCSSVar(
      <AntParagraph
        ref={ref}
        editable={editable}
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
