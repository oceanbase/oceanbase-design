import React, { useContext, useRef } from 'react';
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
  /**
   * Disabled by default.
   * `"css"` opts into the lightweight mode: pure CSS truncation + native `title` on overflow.
   * `true` or an `EllipsisConfig` opts into the full mode with overflow detection and Tooltip.
   */
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
      ellipsis,
      pill,
      className,
      title,
      onMouseEnter,
      ...restProps
    },
    ref
  ) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('tag', customizePrefixCls);
    const [wrapCSSVar] = useStyle(prefixCls);
    const isCritical = colorProp === 'critical';
    const isCssEllipsis = ellipsis === 'css';
    const cssContentRef = useRef<HTMLSpanElement>(null);

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

    // Native `title` only supports plain text. An explicit `title` prop is rendered as-is;
    // otherwise the title is derived on hover so short tags never show a redundant tooltip.
    const handleMouseEnter: React.MouseEventHandler<HTMLSpanElement> = event => {
      onMouseEnter?.(event);
      if (!isCssEllipsis || title !== undefined) {
        return;
      }
      const contentNode = cssContentRef.current;
      if (!contentNode || typeof children !== 'string') {
        return;
      }
      // Measuring on hover keeps the mount path free of observers and forced reflows
      if (contentNode.scrollWidth > contentNode.clientWidth) {
        contentNode.setAttribute('title', children);
      } else {
        contentNode.removeAttribute('title');
      }
    };

    return wrapCSSVar(
      <AntTag
        ref={ref}
        prefixCls={customizePrefixCls}
        className={tagCls}
        title={title}
        onMouseEnter={isCssEllipsis ? handleMouseEnter : onMouseEnter}
        icon={isCssEllipsis ? icon : ellipsisConfig ? null : icon}
        // treat critical as preset status, avoid being treated as custom color
        color={isCritical ? undefined : colorProp}
        closable={closable}
        {...restProps}
      >
        {isCssEllipsis ? (
          <span ref={cssContentRef} className={`${prefixCls}-ellipsis-css-content`}>
            {children}
          </span>
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
