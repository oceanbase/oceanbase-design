import * as React from 'react';
import useFlexGapSupport from '../_util/useFlexGapSupport';
import { ConfigContext } from '../config-provider';
import { SpaceContext } from 'antd/es/space/context';
import type { SpaceContextType } from 'antd/es/space/context';
import type { SpaceSize } from 'antd/es/space';
import type { ItemProps } from 'antd/es/space/Item';

export interface ItemProp extends ItemProps {
  direction?: string;
  wrap?: boolean;
  size?: number | 'small' | 'middle' | 'large' | [SpaceSize, SpaceSize];
}

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
};

function getNumberSize(size: SpaceSize) {
  return typeof size === 'string' ? spaceSize[size] : size || 0;
}

const Item: React.FC<ItemProp> = ({
  className,
  index,
  children,
  direction,
  wrap,
  split,
  style,
  size,
}) => {
  const { latestIndex } = React.useContext<SpaceContextType>(SpaceContext);
  const { direction: directionConfig } = React.useContext(ConfigContext);
  const supportFlexGap = useFlexGapSupport();
  const [horizontalSize, verticalSize] = React.useMemo(
    () =>
      ((Array.isArray(size) ? size : [size, size]) as [SpaceSize, SpaceSize]).map(item =>
        getNumberSize(item)
      ),
    [size]
  );

  if (children === null || children === undefined) {
    return null;
  }
  const marginDirection = directionConfig === 'rtl' ? 'marginLeft' : 'marginRight';
  let compatibilityStyle: React.CSSProperties = {};
  if (!supportFlexGap) {
    if (direction === 'vertical') {
      if (index < latestIndex) {
        compatibilityStyle = { marginBottom: getNumberSize(horizontalSize) / (split ? 2 : 1) };
      }
    } else {
      compatibilityStyle = {
        ...(index < latestIndex && {
          [marginDirection]: getNumberSize(horizontalSize) / (split ? 2 : 1),
        }),
        ...(wrap && { paddingBottom: verticalSize }),
      };
    }
  }

  return (
    <>
      <div className={className} style={supportFlexGap ? style : compatibilityStyle}>
        {children}
      </div>
      {index < latestIndex && split && (
        <span className={`${className}-split`} style={!supportFlexGap && compatibilityStyle}>
          {split}
        </span>
      )}
    </>
  );
};

export default Item;
