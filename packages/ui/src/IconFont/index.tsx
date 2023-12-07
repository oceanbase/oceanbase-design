import { createFromIconfontCN } from '@oceanbase/icons';
import React from 'react';
import './font/iconfont.css';

export interface IconFontProps {
  type: string;
  className?: string;
  style?: React.CSSProperties;
}

const CustomIcon = createFromIconfontCN({
  // 在 iconfont.cn 上生成
  scriptUrl: '//at.alicdn.com/t/a/font_3786261_ifhixq9j5c.js',
});

const iconfontList = [
  'backup',
  'backup-colored',
  'cluster',
  'cluster-colored',
  'data-source',
  'data-source-colored',
  'docs',
  'diagnosis',
  'diagnosis-colored',
  'host',
  'host-colored',
  'log',
  'log-colored',
  'migration',
  'migration-colored',
  'monitor',
  'monitor-colored',
  'notification',
  'obproxy',
  'obproxy-colored',
  'package',
  'package-colored',
  'overview',
  'overview-colored',
  'property',
  'property-colored',
  'tenant',
  'tenant-colored',
  'sync',
  'sync-colored',
  'system',
  'system-colored',
  'user',
];

const IconFont = (props: IconFontProps) => {
  const { type, className, ...restProps } = props;
  // TODO: 后续建议统一使用 iconfont.cn 上的图标，这里先兼容两种用法
  return iconfontList.includes(type) ? (
    <CustomIcon type={type} className={className} {...restProps} />
  ) : (
    <i className={`iconfont ${type} ${className}`} {...restProps} />
  );
};

export default IconFont;
