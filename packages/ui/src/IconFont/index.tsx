import React from 'react';
import './font/iconfont.css';

export interface IconFontProps {
  type: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * @deprecated Please use `@oceanbase/icons` instead.
 */
const IconFont = (props: IconFontProps) => {
  const { type, className, ...restProps } = props;
  return <i className={`iconfont ${type} ${className}`} {...restProps} />;
};

export default IconFont;
