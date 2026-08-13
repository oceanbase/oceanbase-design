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
  ellipsis?: Ellipsis | 'css';
  pill?: boolean;
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      children,
      prefixCls: customizePrefixCls,
      icon,
      color: colorProp,
      closable,
      ellipsis = {
        tooltip: {
          title: children,
        },
      },
      pill,
      className,
      title,
      ...restProps
    },
    ref
  ) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('tag', customizePrefixCls);
    const [wrapCSSVar] = useStyle(prefixCls);
    const isCritical = colorProp === 'critical';
    // css 模式走纯 CSS 截断 + 原生 title，不包 Typography.Text，避免每个 Tag 都挂测量与 Tooltip 逻辑
    const isCssEllipsis = ellipsis === 'css';

    const ellipsisConfig = isCssEllipsis ? undefined : getEllipsisConfig(ellipsis, children);
    const tagCls = classNames(
      {
        [`${prefixCls}-closable`]: !!closable,
        [`${prefixCls}-ellipsis`]: !!ellipsisConfig,
        [`${prefixCls}-ellipsis-css`]: isCssEllipsis,
        [`${prefixCls}-pill`]: pill,
        [`${prefixCls}-critical`]: isCritical,
      },
      className
    );

    const realIcon = icon ? <span className={`${prefixCls}-icon`}>{icon}</span> : null;

    // 原生 title 仅支持纯文本，字符串 children 自动派生；结构化 children 需业务显式传 title
    const mergedTitle =
      title !== undefined
        ? title
        : isCssEllipsis && typeof children === 'string'
          ? children
          : title;

    return wrapCSSVar(
      <AntTag
        ref={ref}
        prefixCls={customizePrefixCls}
        className={tagCls}
        title={mergedTitle}
        icon={isCssEllipsis ? icon : ellipsisConfig ? null : icon}
        // treat critical as preset status, avoid being treated as custom color
        color={isCritical ? undefined : colorProp}
        closable={closable}
        {...restProps}
      >
        {isCssEllipsis ? (
          <span className={`${prefixCls}-ellipsis-css-content`}>{children}</span>
        ) : ellipsisConfig ? (
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
