import { ClockCircleOutlined, FilterOutlined } from '@oceanbase/icons';
import type { CSSProperties, ReactNode } from 'react';

export const getIcon = (icon?: 'time' | 'filter') => {
  switch (icon) {
    case 'time':
      return <ClockCircleOutlined />;
    case 'filter':
      return <FilterOutlined />;
    default:
      return undefined;
  }
};

/**
 * 获取 Filter 组件的占位符文案
 */
export const getPlaceholder = (): string => {
  return '请选择';
};

/**
 * Wrapped 模式下显示值的样式
 */
export const wrappedValueStyle: CSSProperties = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  flex: 1,
};

/**
 * 获取 Wrapped 模式下显示值的样式（包含颜色）
 * @param hasValue 是否有值
 */
export const getWrappedValueStyle = (hasValue: boolean): CSSProperties => ({
  ...wrappedValueStyle,
  color: hasValue ? undefined : '#b6c0d4',
});

/**
 * 包装 Filter 内容的容器
 * @param content 内容
 * @param padding 内边距，默认为 8
 * @param maxHeight 最大高度，默认为 300
 */
export const wrapContent = (
  content: ReactNode,
  padding: number | string = 8,
  maxHeight = 300
): ReactNode => {
  return <div style={{ padding, maxHeight, overflowY: 'auto' }}>{content}</div>;
};
