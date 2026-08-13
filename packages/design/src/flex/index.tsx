import * as React from 'react';
import classNames from 'classnames';
import { Flex as AntFlex } from 'antd';
import type { FlexProps } from 'antd/es/flex/interface';
import type { GlobalToken } from 'antd/es/theme/interface';
import { isPresetSize } from 'antd/es/_util/gapSize';
import useFlexGapSupport from '../_util/useFlexGapSupport';
import { ConfigContext } from '../config-provider';
import theme from '../theme';
import useStyle from './style';

export type { FlexProps } from 'antd/es/flex/interface';

// normalize a single gap value to a css length, preset sizes map to design tokens
const toCssGap = (
  gap: NonNullable<FlexProps['gap']>,
  token: Pick<GlobalToken, 'paddingXS' | 'padding' | 'paddingLG'>
): string => {
  if (typeof gap === 'number') {
    return `${gap}px`;
  }
  if (isPresetSize(gap)) {
    const presetMap = {
      small: token.paddingXS,
      middle: token.padding,
      large: token.paddingLG,
    } as const;
    return `${presetMap[gap as keyof typeof presetMap]}px`;
  }
  return gap;
};

// split a gap into [row, column] css values, matching CSS `gap: <row-gap> <column-gap>`
const parseGap = (
  gap: FlexProps['gap'],
  token: Pick<GlobalToken, 'paddingXS' | 'padding' | 'paddingLG'>
): { row: string; column: string } | undefined => {
  if (gap === undefined) {
    return undefined;
  }
  // CSS gap 支持 "row column" 双值字符串语法
  const [row, column] = toCssGap(gap, token).split(/\s+/);
  return {
    row,
    column: column ?? row,
  };
};

const Flex = React.forwardRef<HTMLElement, FlexProps>(
  ({ prefixCls: customizePrefixCls, className, style, gap, vertical, wrap, ...restProps }, ref) => {
    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls('flex', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);
    const { token } = theme.useToken();

    const supportFlexGap = useFlexGapSupport();
    const wrapable = wrap === true || wrap === 'wrap' || wrap === 'wrap-reverse';
    // 类名需与 style 规则选择器一致：
    // `.ant-flex-not-support-gap.ant-flex-horizontal` 等（antd Flex 不生成 -horizontal/-wrap 类，需显式补上）
    const flexCls = classNames(
      {
        [`${prefixCls}-not-support-gap`]: !supportFlexGap,
        [`${prefixCls}-horizontal`]: !supportFlexGap && !vertical,
        [`${prefixCls}-vertical`]: !supportFlexGap && vertical,
        [`${prefixCls}-wrap`]: !supportFlexGap && wrapable,
      },
      className
    );

    // expose gap as css variables for the `-not-support-gap` margin fallback
    const gapVar = !supportFlexGap ? parseGap(gap, token) : undefined;
    const gapVars = gapVar
      ? {
          '--flex-gap-row': gapVar.row,
          '--flex-gap-column': gapVar.column,
        }
      : undefined;

    return wrapSSR(
      <AntFlex
        ref={ref}
        className={flexCls}
        style={{ ...gapVars, ...style }}
        gap={gap}
        vertical={vertical}
        wrap={wrap}
        {...restProps}
      />
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  Flex.displayName = 'Flex';
}

export default Flex;
