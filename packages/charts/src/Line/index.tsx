import React, { forwardRef, useRef } from 'react';
import { sortByMoment } from '@oceanbase/util';
import type { LineConfig as AntLineConfig } from '@ant-design/charts';
import { Line as AntLine } from '@ant-design/charts';
import { composeRef } from 'rc-util/es/ref';
import type { Tooltip } from '../hooks/useTooltipScrollable';
import useTooltipScrollable from '../hooks/useTooltipScrollable';
import { useTheme } from '../theme';
import type { Theme } from '../theme';
import { customMemo } from '../util/custom-memo';

export interface LineConfig extends AntLineConfig {
  tooltip?: false | Tooltip;
  theme?: Theme;
}

const Line = forwardRef<unknown, LineConfig>(
  (
    { data, stepType, xField, xAxis, yAxis, tooltip, legend, interactions, theme, ...restConfig },
    ref
  ) => {
    const themeConfig = useTheme(theme);

    const chartRef = useRef(null);
    const mergedRef = composeRef(ref, chartRef);
    const tooltipConfig = useTooltipScrollable(
      tooltip,
      chartRef.current?.getChart()?.chart?.height
    );

    const newConfig: LineConfig = {
      data:
        // xAxis.type 为时间轴时，需要对 data 进行排序
        // issue: https://github.com/antvis/G2/issues/3194
        xAxis && (xAxis?.type === 'time' || xAxis?.type === 'timeCat')
          ? data?.sort((a, b) => sortByMoment(a, b, xField || ''))
          : data,
      stepType,
      xField,
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
                    lineWidth: themeConfig.styleSheet.axisGridBorder,
                    stroke: themeConfig.styleSheet.axisGridBorderColor,
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
          symbol: 'hyphen',
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
    return <AntLine {...newConfig} ref={mergedRef} />;
  }
);

export default customMemo(Line);
