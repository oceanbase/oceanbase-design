import React from 'react';
import { createFromIconfontCN } from '@oceanbase/icons';

export interface IconFontProps {
  type: string;
  className?: string;
  style?: React.CSSProperties;
}

const CustomIcon = createFromIconfontCN({
  // 在 iconfont.cn 上生成
  scriptUrl: '//at.alicdn.com/t/a/font_3786261_ifhixq9j5c.js',
});

const IconFont = (props: IconFontProps) => {
  const { type, ...restProps } = props;
  return <CustomIcon type={type} {...restProps} />;
};

export default IconFont;
