import React, { useContext } from 'react';
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

    const realIcon = icon ? <span className={`${prefixCls}-icon`}>{icon}</span> : null;

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
            {/* Typography.Text 存在 ellipsis 配置时 ，将 icon 放在 Typography.Text 内部，避免溢出时与 icon 发生样式冲突。这里保留 Typography.Text 主要为了使用 Typography.Text 的判断内容溢出展示 Tooltip 的能力，自定义实现成本过大 */}
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
