import { Tag as AntTag } from 'antd';
import type { TagProps as AntTagProps } from 'antd/es/tag';
import { Typography } from '@oceanbase/design';
import classNames from 'classnames';
import React, { ReactElement, useContext } from 'react';
import ConfigProvider from '../config-provider';
import useStyle from './style';

export * from 'antd/es/tag';

export interface TagProps extends AntTagProps {
  ellipsis?: boolean;
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ prefixCls: customizePrefixCls, className, ellipsis = true, ...restProps }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('tag', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);

    const tagCls = classNames(
      {
        [`${prefixCls}-ellipsis`]: ellipsis,
      },
      className
    );
    const childrenType = (restProps.children as ReactElement)?.type as any;
    const { ellipsis: defalutEllipsis, children: defaultChildren } =
      (restProps.children as ReactElement)?.props || {};

    const ellipsisConfig =
      typeof defalutEllipsis === 'object'
        ? defalutEllipsis
        : {
            tooltip: childrenType?.__ANT_TOOLTIP ? false : defaultChildren || restProps.children,
          };

    return ellipsis ? (
      wrapSSR(
        <Typography.Text ellipsis={{ ...ellipsisConfig }}>
          <AntTag ref={ref} prefixCls={customizePrefixCls} className={tagCls} {...restProps} />
        </Typography.Text>
      )
    ) : (
      <AntTag ref={ref} prefixCls={customizePrefixCls} className={tagCls} {...restProps} />
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  Tag.displayName = AntTag.displayName;
}

export default Object.assign(Tag, {
  CheckableTag: AntTag.CheckableTag,
});
