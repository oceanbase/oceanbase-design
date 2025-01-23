import React, { useRef, forwardRef } from 'react';
import type { AreaConfig as AntAreaConfig } from '@ant-design/charts';
import { Area as AntArea } from '@ant-design/charts';
import { sortByMoment } from '@oceanbase/util';
import { composeRef } from 'rc-util/es/ref';
import type { Tooltip } from '../hooks/useTooltipScrollable';
import useTooltipScrollable from '../hooks/useTooltipScrollable';
import { useTheme } from '../theme';
import type { Theme } from '../theme';
import { customMemo } from '../util/custom-memo';

export interface AreaConfig extends AntAreaConfig {
  tooltip?: false | Tooltip;
  theme?: Theme;
}

const Area = forwardRef<unknown, AreaConfig>(
  (
    { data, line, xField, xAxis, yAxis, tooltip, legend, interactions, theme, ...restConfig },
    ref
  ) => {
    const themeConfig = useTheme(theme);

    const chartRef = useRef(null);
    const mergedRef = composeRef(ref, chartRef);
    const tooltipConfig = useTooltipScrollable(tooltip, chartRef?.chart?.height);

    const newConfig: AreaConfig = {
      data:
        // xAxis.type 为时间轴时，需要对 data 进行排序
        // issue: https://github.com/antvis/G2/issues/3194
        xAxis && (xAxis?.type === 'time' || xAxis?.type === 'timeCat')
          ? data?.sort((a, b) => sortByMoment(a, b, xField || ''))
          : data,
      xField,
      line: {
        ...line,
        style: {
          lineWidth: themeConfig.line.lineWidth,
          ...line?.style,
        },
      },
      xAxis: xAxis !== false && {
        // type 为 time 时需要关闭自动美化，否则 X 轴两侧会留白
        // issue: https://github.com/antvis/G2Plot/issues/1951
        nice: xAxis?.type === 'time' ? false : undefined,
        ...xAxis,
        // x 方向增加虚线网格
        grid:
          xAxis?.grid === null
            ? null
            : {
                ...xAxis?.grid,
                line: {
                  ...xAxis?.grid?.line,
                  style: {
                    lineWidth: themeConfig.axis.gridLineWidth,
                    stroke: themeConfig.axis.gridStroke,
                    lineDash: [4, 4],
                    ...xAxis?.grid?.line?.style,
                  },
                },
              },
      },
      yAxis: yAxis !== false && {
        // 避免超出 Y 轴刻度线
        nice: true,
        // Y 轴方向默认展示 5 个刻度线
        tickCount: 5,
        ...yAxis,
      },
      tooltip: tooltipConfig,
      legend: legend !== false && {
        position: 'bottom-left',
        offsetX: 30,
        ...legend,
        marker: {
          symbol: 'square',
          ...legend?.marker,
        },
      },
      // 默认开启 x 方向框选
      interactions: interactions || [
        {
          type: 'brush-x',
        },
      ],
      theme: themeConfig.theme,
      ...restConfig,
    };
    return <AntArea {...newConfig} ref={mergedRef} />;
  }
);

export default customMemo(Area);
