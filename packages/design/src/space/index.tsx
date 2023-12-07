import * as React from 'react';
import classNames from 'classnames';
import toArray from 'rc-util/lib/Children/toArray';
import useFlexGapSupport from '../_util/useFlexGapSupport';
import { isPresetSize, isValidGapNumber } from 'antd/es/_util/gapSize';
import { ConfigContext } from '../config-provider';
import Compact from 'antd/es/space/Compact';
import { SpaceContextProvider } from 'antd/es/space/context';
import type { SpaceContextType } from 'antd/es/space/context';
import type { SpaceProps } from 'antd/es/space';
import Item from './Item';
import useStyle from 'antd/es/space/style';

export { SpaceContext } from 'antd/es/space/context';

const Space = React.forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
  const { getPrefixCls, space, direction: directionConfig } = React.useContext(ConfigContext);

  const {
    size = space?.size || 'small',
    align,
    className,
    rootClassName,
    children,
    direction = 'horizontal',
    prefixCls: customizePrefixCls,
    split,
    style,
    wrap = false,
    classNames: customClassNames,
    styles,
    ...otherProps
  } = props;
  const supportFlexGap = useFlexGapSupport();

  const [horizontalSize, verticalSize] = Array.isArray(size) ? size : ([size, size] as const);

  const isPresetVerticalSize = isPresetSize(verticalSize);

  const isPresetHorizontalSize = isPresetSize(horizontalSize);

  const isValidVerticalSize = isValidGapNumber(verticalSize);

  const isValidHorizontalSize = isValidGapNumber(horizontalSize);

  const childNodes = toArray(children, { keepEmpty: true });

  const mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
  const prefixCls = getPrefixCls('space', customizePrefixCls);
  const [wrapCSSVar, hashId] = useStyle(prefixCls);

  const cls = classNames(
    prefixCls,
    space?.className,
    hashId,
    `${prefixCls}-${direction}`,
    {
      [`${prefixCls}-rtl`]: directionConfig === 'rtl',
      [`${prefixCls}-align-${mergedAlign}`]: mergedAlign,
      [`${prefixCls}-gap-row-${verticalSize}`]: isPresetVerticalSize,
      [`${prefixCls}-gap-col-${horizontalSize}`]: isPresetHorizontalSize,
    },
    className,
    rootClassName
  );

  const itemClassName = classNames(
    `${prefixCls}-item`,
    customClassNames?.item ?? space?.classNames?.item
  );
  // Calculate latest one
  let latestIndex = 0;
  const nodes = childNodes.map<React.ReactNode>((child, i) => {
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }

    const key = (child && child.key) || `${itemClassName}-${i}`;

    return (
      <Item
        className={itemClassName}
        key={key}
        index={i}
        split={split}
        size={size}
        direction={direction}
        wrap={wrap}
        style={styles?.item ?? space?.styles?.item}
      >
        {child}
      </Item>
    );
  });

  const spaceContext = React.useMemo<SpaceContextType>(() => ({ latestIndex }), [latestIndex]);

  // =========================== Render ===========================
  if (childNodes.length === 0) {
    return null;
  }

  const gapStyle: React.CSSProperties = {};

  if (wrap) {
    gapStyle.flexWrap = 'wrap';
    if (!supportFlexGap) {
      gapStyle.marginBottom = -verticalSize;
    }
  }

  if (!isPresetHorizontalSize && isValidHorizontalSize) {
    gapStyle.columnGap = horizontalSize;
  }

  if (!isPresetVerticalSize && isValidVerticalSize) {
    gapStyle.rowGap = verticalSize;
  }

  return wrapCSSVar(
    <div
      ref={ref}
      className={cls}
      style={{ ...gapStyle, ...space?.style, ...style }}
      {...otherProps}
    >
      <SpaceContextProvider value={spaceContext}>{nodes}</SpaceContextProvider>
    </div>
  );
});

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
