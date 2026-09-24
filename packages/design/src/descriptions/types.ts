import type { Ellipsis } from '../_util/getEllipsisConfig';
import type { TextProps } from '../typography/Text';

/**
 * 描述项内容属性。
 *
 * `ellipsis` 额外支持 `'css'` 轻量模式：走纯 CSS 单行截断 + 原生 `title`，
 * 不触发 Typography 的溢出测量和 Tooltip，适合描述项数量多的场景。
 */
export type DescriptionsContentProps = Omit<TextProps, 'ellipsis'> & {
  ellipsis?: Ellipsis | 'css';
};
