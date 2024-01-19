import React, { useContext } from 'react';
import { Tag as AntTag } from 'antd';
import type { TagProps as AntTagProps } from 'antd/es/tag';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import Typography from '../typography';
import useStyle from './style';
import { getEllipsisConfig } from '../_util/getEllipsisConfig';
import type { Ellipsis } from '../_util/getEllipsisConfig';
import { TooltipPlacement } from '../tooltip';

export * from 'antd/es/tag';

export interface TagProps extends AntTagProps {
  ellipsis?: Ellipsis;
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      children,
      prefixCls: customizePrefixCls,
      className,
      ellipsis = {
        tooltip: {
          title: children,
        },
      },
      ...restProps
    },
    ref
  ) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('tag', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);

    const ellipsisConfig = getEllipsisConfig(ellipsis, children);

    const tagCls = classNames(
      {
        [`${prefixCls}-ellipsis`]: !!ellipsisConfig,
      },
      className
    );

    return wrapSSR(
      <AntTag ref={ref} prefixCls={customizePrefixCls} className={tagCls} {...restProps}>
        {ellipsisConfig ? (
          <Typography.Text ellipsis={ellipsisConfig}>{children}</Typography.Text>
        ) : (
          children
        )}
      </AntTag>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  Tag.displayName = AntTag.displayName;
}

export default Object.assign(Tag, {
  CheckableTag: AntTag.CheckableTag,
});
