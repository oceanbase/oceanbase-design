import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { Tag as AntTag } from 'antd';
import type { TagProps as AntTagProps } from 'antd/es/tag';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import Typography from '../typography';
import useStyle from './style';
import { getEllipsisConfig } from '../_util/getEllipsisConfig';
import type { Ellipsis } from '../_util/getEllipsisConfig';

export * from 'antd/es/tag';

export interface TagProps extends AntTagProps {
  ellipsis?: Ellipsis;
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      children,
      prefixCls: customizePrefixCls,
      icon,
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

    const realIcon = icon ? <span className="inner-icon">{icon}</span> : null;

    return wrapSSR(
      <AntTag
        ref={ref}
        prefixCls={customizePrefixCls}
        className={tagCls}
        icon={ellipsisConfig ? null : icon}
        {...restProps}
      >
        {ellipsisConfig ? (
          <Typography.Text ellipsis={ellipsisConfig}>
            {realIcon}
            {children}
          </Typography.Text>
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
