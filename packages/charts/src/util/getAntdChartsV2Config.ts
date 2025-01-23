import type { CommonConfig } from '@ant-design/charts';
import type { Options } from '@antv/g2plot';

export function getAntdChartsV2Config<T>({
  xAxis,
  yAxis,
  axis,
  // tooltip,
  // interaction,
  ...restConfig
}: T & CommonConfig & Pick<Options, 'xAxis' | 'yAxis'>): T & CommonConfig {
  return {
    ...restConfig,
    axis: {
      x: xAxis,
      y: yAxis,
      ...axis,
    },
    // interaction: {
    //   tooltip: {},
    // },
  };
}
