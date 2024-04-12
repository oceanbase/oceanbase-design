import React, { useRef, forwardRef } from 'react';
import type { DualAxesConfig as AntDualAxesConfig } from '@ant-design/charts';
import { DualAxes as AntDualAxes } from '@ant-design/charts';
// @ts-ignore
import type { GeometryColumnOption } from '@antv/g2plot/esm/plots/dual-axes/types';
// @ts-ignore
import type { Axis } from '@antv/g2plot/esm/types/axis';
import { sortByMoment } from '@oceanbase/util';
import { composeRef } from 'rc-util/es/ref';
import type { Tooltip } from '../hooks/useTooltipScrollable';
import useTooltipScrollable from '../hooks/useTooltipScrollable';
import { useTheme } from '../theme';
import type { Theme } from '../theme';
import { customMemo } from '../util/custom-memo';

export interface DualAxesConfig extends Omit<AntDualAxesConfig, 'yAxis'> {
  // 限制双轴图的 yAxis 为对象格式，而非数组格式。官方文档的示例均为对象格式，方便统一用法
  yAxis?: Record<string, Axis>;
  tooltip?: false | Tooltip;
  theme?: Theme;
}

const DualAxes = forwardRef<unknown, DualAxesConfig>(
  (
    { data, xField, yField, xAxis, yAxis, tooltip, legend, geometryOptions, theme, ...restConfig },
    ref
  ) => {
    const themeConfig = useTheme(theme);

    const chartRef = useRef(null);
    const mergedRef = composeRef(ref, chartRef);
    const tooltipConfig = useTooltipScrollable(
      tooltip,
      chartRef.current?.getChart()?.chart?.height
    );

    const yField1 = yField?.[0];
    const yField2 = yField?.[1];

    const newConfig: DualAxesConfig = {
      data:
        // xAxis.type 为时间轴时，需要对 data 进行排序
        // issue: https://github.com/antvis/G2/issues/3194
        xAxis && (xAxis?.type === 'time' || xAxis?.type === 'timeCat')
          ? [
              data?.[0]?.sort((a, b) => sortByMoment(a, b, xField)) || [],
              data?.[1]?.sort((a, b) => sortByMoment(a, b, xField)) || [],
            ]
          : data,
      xField,
      yField,
      // 图例位于底部，顶部需要留出适当间距，否则一部分图表会被遮挡
      appendPadding: [4, 0, 0, 0],
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
      yAxis: yAxis && {
        [yField1]: yAxis?.[yField1] !== false && {
          // 避免超出 Y 轴刻度线
          nice: true,
          // 两侧 Y 轴默认展示 5 个刻度线，保证大部分场景下两侧刻度线能对齐，方便查看
          tickCount: 5,
          // 设置两侧 Y 轴的最小值为 0，否则可能不是从 0 开始
          min: 0,
          ...yAxis?.[yField1],
        },
        [yField2]: yAxis?.[yField2] !== false && {
          nice: true,
          tickCount: 5,
          min: 0,
          ...yAxis?.[yField2],
        },
      },
      tooltip: tooltipConfig,
      legend: legend !== false && {
        position: 'bottom-left',
        offsetX: 30,
        ...legend,
      },
      geometryOptions: geometryOptions?.map((item, index) => {
        let defaultGeometryOption = {};
        if (item.geometry === 'line') {
          defaultGeometryOption = {};
        } else if (item.geometry === 'column') {
          const { seriesField, isStack, isRange } = item as GeometryColumnOption;
          const stackValues =
            (isStack &&
              seriesField &&
              data?.[index]
                ?.filter(datum => datum[seriesField])
                .map(datum => datum[seriesField])) ||
            [];
          // 堆叠柱状图中最后一段对应的值
          const lastStackValue = stackValues?.[0];
          defaultGeometryOption = {
            columnStyle: datum => {
              return {
                radius:
                  // 区间柱状图左右两侧均有 2px 圆角
                  isRange
                    ? 2
                    : !isStack ||
                        (isStack &&
                          seriesField &&
                          // 堆叠柱状图仅最后一段末端展示 2px 圆角
                          datum[seriesField] === lastStackValue)
                      ? [2, 2, 0, 0]
                      : [],
              };
            },
          };
        }
        return {
          ...defaultGeometryOption,
          ...item,
        };
      }),
      theme: themeConfig.theme,
      ...restConfig,
    };
    return <AntDualAxes {...newConfig} ref={mergedRef} />;
  }
);

export default customMemo(DualAxes);
