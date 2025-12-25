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
 * 将 ReactNode 转换为稳定的字符串标识符
 * 用于生成 filterId
 */
const reactNodeToString = (node: ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }
  if (typeof node === 'boolean' || node === null || node === undefined) {
    return '';
  }
  if (Array.isArray(node)) {
    return node.map(reactNodeToString).join('-');
  }
  if (typeof node === 'object' && 'props' in node) {
    // 尝试从 props 中获取 children 或 value
    const props = (node as any).props;
    if (props?.children) {
      return reactNodeToString(props.children);
    }
    if (props?.value !== undefined) {
      return String(props.value);
    }
    if (props?.label) {
      return reactNodeToString(props.label);
    }
  }
  // 如果无法转换，使用对象的键或默认值
  return '';
};

/**
 * 生成稳定的 filterId
 * 基于 componentName 和 label 生成，确保 label 变化时 ID 也会更新
 */
export const generateFilterId = (
  componentName: string,
  label: ReactNode,
  fallbackIndex?: number
): string => {
  const labelStr = reactNodeToString(label);
  // 如果 label 为空，使用 fallbackIndex 或时间戳作为后备
  if (!labelStr && fallbackIndex !== undefined) {
    return `filter-${componentName}-${fallbackIndex}`;
  }
  if (!labelStr) {
    return `filter-${componentName}-${Date.now()}`;
  }
  // 清理 label 字符串，移除特殊字符，只保留字母数字和连字符
  const cleanLabel = labelStr
    .replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return `filter-${componentName}-${cleanLabel}`;
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

/**
 * 深度比较两个数组是否相等（用于 options 比较）
 */
export const areArraysEqual = (a: unknown[] | undefined, b: unknown[] | undefined): boolean => {
  if (a === b) return true;
  if (!a || !b) return false;
  if (a.length !== b.length) return false;

  try {
    return JSON.stringify(a) === JSON.stringify(b);
  } catch {
    // 如果 JSON.stringify 失败，使用浅比较
    return a.every((item, index) => item === b[index]);
  }
};

/**
 * 稳定化 options 数组的引用（使用 JSON.stringify 作为 key）
 * 这是一个普通函数，不是 Hook
 */
export const getStableOptionsKey = (options: unknown[] | undefined): string => {
  if (!options || options.length === 0) return '';
  try {
    return JSON.stringify(options);
  } catch {
    // 如果序列化失败，使用长度和第一个元素的组合
    return `${options.length}-${String(options[0])}`;
  }
};
