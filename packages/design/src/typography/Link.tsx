import React, { useContext } from 'react';
import { Typography as AntTypography } from 'antd';
import type { LinkProps as AntLinkProps } from 'antd/es/typography/Link';
import ConfigProvider from '../config-provider';
import type { Copyable } from '../_util/getCopyableConfig';
import useClassName from './hooks/useClassName';
import useCopyable from './hooks/useCopyable';
import useStyle from './style';

const { Link: AntLink } = AntTypography;

export * from 'antd/es/typography/Link';

export interface LinkProps extends AntLinkProps {
  block?: boolean;
  copyable?: Copyable;
}

type CompoundedComponent = React.ForwardRefExoticComponent<
  LinkProps & React.RefAttributes<HTMLElement>
> & {
  /** @internal */
  __ANT_TYPOGRAPHY: boolean;
};

const Link = React.forwardRef<HTMLElement, LinkProps>(
  (
    { editable, block, copyable, prefixCls: customizePrefixCls, className, children, ...restProps },
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
      block,
      copyableHover,
    });

    return wrapCSSVar(
      <AntLink
        ref={ref}
        editable={editable}
        copyable={copyableConfig}
        prefixCls={customizePrefixCls}
        className={typographyCls}
        {...restProps}
      >
        {children}
      </AntLink>
    );
  }
) as CompoundedComponent;

if (process.env.NODE_ENV !== 'production') {
  Link.displayName = AntLink.displayName;
}

Link.__ANT_TYPOGRAPHY = true;

export default Link;
