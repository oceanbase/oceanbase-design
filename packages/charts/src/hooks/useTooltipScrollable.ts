import type { Tooltip as AntTooltip } from '@ant-design/charts';

export interface Tooltip extends AntTooltip {
  // tooltip 是否可进入且可滚动，常用于 tooltip 数过多、需要滚动查看的场景
  scrollable?: boolean;
}

export default (tooltip?: false | Tooltip, height?: number) => {
  if (typeof tooltip === 'object') {
    const { scrollable, domStyles, ...restTooltip } = tooltip || {};
    return scrollable
      ? {
          follow: true,
          shared: true,
          enterable: true,
          // 允许鼠标滑入 tooltip 会导致框选很难选中区间，因此加大鼠标和 tooltip 之间的间距，以缓解该问题
          offset: 20,
          ...restTooltip,
          domStyles: {
            ...domStyles,
            'g2-tooltip': {
              maxHeight: `${height}px`,
              overflow: 'auto',
              ...domStyles?.['g2-tooltip'],
            },
          },
        }
      : tooltip;
  }
  // when tooltip is undefined, should return {} to ensure that crosshairs could display normally
  if (tooltip === undefined) {
    return {};
  }
  return tooltip;
};
