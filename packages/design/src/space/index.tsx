import * as React from 'react';
import classNames from 'classnames';
import useFlexGapSupport from '../_util/useFlexGapSupport';
import { ConfigContext } from '../config-provider';
import Compact from 'antd/es/space/Compact';
import type { SpaceProps, SpaceSize } from 'antd/es/space';
import type { GlobalToken } from 'antd/es/theme/interface';
import { Space as AntSpace } from 'antd';
import theme from '../theme';
import useStyle from './style';

export * from 'antd/es/space';
export { SpaceContext } from 'antd/es/space/context';

// normalize a single SpaceSize to a css value, fallback to token preset size
const toCssSize = (
  size: SpaceSize,
  token: Pick<GlobalToken, 'paddingXS' | 'padding' | 'paddingLG'>
): string => {
  if (typeof size === 'number') {
    return `${size}px`;
  }
  if (size === 'small') {
    return `${token.paddingXS}px`;
  }
  if (size === 'large') {
    return `${token.paddingLG}px`;
  }
  return `${token.padding}px`;
};

// split SpaceSize into [row, column] css values, matching CSS gap: <row-gap> <column-gap>
// antd Space size array order is [horizontal, vertical], which maps to [column, row] in CSS gap
const parseSpaceSize = (
  size: SpaceProps['size'],
  token: Pick<GlobalToken, 'paddingXS' | 'padding' | 'paddingLG'>
): { row: string; column: string } => {
  // antd Space default size is 'small'
  const mergedSize = size ?? 'small';
  const [horizontalSize, verticalSize] = Array.isArray(mergedSize)
    ? mergedSize
    : [mergedSize, mergedSize];
  return {
    row: toCssSize(verticalSize, token),
    column: toCssSize(horizontalSize, token),
  };
};

const Space = React.forwardRef<HTMLDivElement, SpaceProps>(
  ({ prefixCls: customizePrefixCls, className, size, style, ...restProps }, ref) => {
    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls('space', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);
    const { token } = theme.useToken();

    const supportFlexGap = useFlexGapSupport();
    const spaceCls = classNames(
      {
        [`${prefixCls}-not-support-gap`]: !supportFlexGap,
        [`${prefixCls}-wrap`]: restProps?.wrap,
      },
      className
    );

    // expose gap as css variables for the `-not-support-gap` margin fallback
    const gap = !supportFlexGap ? parseSpaceSize(size, token) : undefined;
    const gapVars = gap
      ? {
          '--space-gap-row': gap.row,
          '--space-gap-column': gap.column,
        }
      : undefined;

    return wrapSSR(
      <AntSpace
        ref={ref}
        className={spaceCls}
        style={{ ...gapVars, ...style }}
        size={size}
        {...restProps}
      />
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  Space.displayName = 'Space';
}

type CompoundedComponent = React.ForwardRefExoticComponent<
  SpaceProps & React.RefAttributes<HTMLDivElement>
> & {
  Compact: typeof Compact;
};

const CompoundedSpace = Space as CompoundedComponent;

CompoundedSpace.Compact = Compact;

export default CompoundedSpace;
