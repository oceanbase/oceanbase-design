import React, { useEffect, useRef } from 'react';
import tinycolor from 'tinycolor2';
import { toNumber, toString } from 'lodash';
import classNames from 'classnames';
import useResizeObserver from 'use-resize-observer';
import { sortByNumber } from '@oceanbase/util';
import type { TinyAreaConfig, TinyAreaRef } from '../Tiny/TinyArea';
import TinyArea from '../Tiny/TinyArea';
import { useTheme } from '../theme';
import type { Theme } from '../theme';
import { calculateFontSize } from '../util/measureText';
import './index.less';

export interface StatConfig {
  width?: number;
  height?: number;
  padding?: number;
  title?: string;
  value?: number;
  prefix?: string;
  suffix?: string;
  layout?: 'vertical' | 'horizontal';
  theme?: Theme;
  colorMode?: 'none' | 'value' | 'background';
  chartMode?: 'none' | 'line' | 'area';
  chartData?: number[];
  chartConfig?: TinyAreaConfig;
  textAlign: 'auto' | 'center';
  thresholds?: Record<string, string>;
  className?: string;
  style?: React.CSSProperties;
}

const prefixCls = 'ob-stat';

const LINE_HEIGHT = 1.2;
const TITLE_MAX_SIZE = 20;
const VALUE_MAX_SIZE = 40;
const VALUE_FONT_WEIGHT = 500;

function fontSizeReductionFactor(fontSize: number) {
  if (fontSize < 20) {
    return 0.9;
  }
  if (fontSize < 26) {
    return 0.8;
  }
  return 0.6;
}

const Stat: React.FC<StatConfig> = ({
  width,
  height,
  padding = 8,
  title,
  value,
  prefix,
  suffix,
  layout = 'vertical',
  theme,
  colorMode = 'background',
  chartMode,
  chartData = [],
  chartConfig,
  textAlign,
  thresholds = {},
  className,
  style,
  ...restConfig
}) => {
  const themeConfig = useTheme(theme);
  const {
    ref: containerRef,
    width: containerWidth = 0,
    height: containerHeight = 0,
  } = useResizeObserver<HTMLDivElement>();
  const isFlat = containerHeight < 72;
  const maxWidth = containerWidth - padding * 2;
  const maxHeight = containerHeight - padding * 2;

  const thresholdList = Object.keys(thresholds)
    .map(key => ({
      value: toNumber(key),
      color: thresholds[key],
    }))
    .sort((a, b) => sortByNumber(a, b, 'value'));
  const color =
    thresholdList.find(
      (item, index) =>
        !value ||
        (value >= item.value &&
          (!thresholdList[index + 1] || value < thresholdList[index + 1]?.value))
    )?.color || themeConfig.defaultColor;

  // ref: https://github.com/grafana/grafana/blob/main/packages/grafana-ui/src/components/BigValue/BigValueLayout.tsx#L131
  const themeFactor = themeConfig.theme === 'dark' ? 1 : -0.7;
  const bgColor1 = tinycolor(color)
    .darken(15 * themeFactor)
    .spin(8)
    .toRgbString();
  const bgColor2 = tinycolor(color)
    .darken(5 * themeFactor)
    .spin(-8)
    .toRgbString();
  const bgColor = `linear-gradient(120deg, ${bgColor1}, ${bgColor2})`;

  const hasChart = chartMode === 'line' || chartMode === 'area';
  const hasPrefixOrSuffix = prefix || suffix;
  const prefixOrSuffixWdithPercent = 0.1;
  let titleWidthPercent = 1;
  let titleHeightPercent = 1;
  let valueWidthPercent = 1;
  let valueHeightPercent = 1;
  let chartHeightPercent = 0.5;

  if (isFlat) {
    if (hasChart) {
      if (layout === 'horizontal') {
        titleWidthPercent = 0.6;
        titleHeightPercent = 0.4;
        valueWidthPercent = hasPrefixOrSuffix ? 0.3 - prefixOrSuffixWdithPercent : 0.3;
        valueHeightPercent = 0.5;
        chartHeightPercent = 0.5;
      } else {
        titleWidthPercent = 1;
        titleHeightPercent = 0.25;
        valueWidthPercent = hasPrefixOrSuffix ? 1 - prefixOrSuffixWdithPercent : 1;
        valueHeightPercent = 0.5;
        chartHeightPercent = 0.25;
      }
    } else {
      if (layout === 'horizontal') {
        titleWidthPercent = 0.6;
        titleHeightPercent = 0.5;
        valueWidthPercent = hasPrefixOrSuffix ? 0.3 - prefixOrSuffixWdithPercent : 0.3;
        valueHeightPercent = 1;
        chartHeightPercent = 0;
      } else {
        titleWidthPercent = 1;
        titleHeightPercent = 0.3;
        valueWidthPercent = hasPrefixOrSuffix ? 1 - prefixOrSuffixWdithPercent : 1;
        valueHeightPercent = 0.7;
        chartHeightPercent = 0;
      }
    }
  } else {
    if (hasChart) {
      if (layout === 'horizontal') {
        titleWidthPercent = 0.6;
        titleHeightPercent = 0.4;
        valueWidthPercent = hasPrefixOrSuffix ? 0.4 - prefixOrSuffixWdithPercent : 0.4;
        valueHeightPercent = 0.5;
        chartHeightPercent = 0.5;
      } else {
        titleWidthPercent = 1;
        titleHeightPercent = 0.1;
        valueWidthPercent = hasPrefixOrSuffix ? 1 - prefixOrSuffixWdithPercent : 1;
        valueHeightPercent = 0.4;
        chartHeightPercent = 0.5;
      }
    } else {
      if (layout === 'horizontal') {
        titleWidthPercent = 0.6;
        titleHeightPercent = 0.5;
        valueWidthPercent = hasPrefixOrSuffix ? 0.4 - prefixOrSuffixWdithPercent : 0.4;
        valueHeightPercent = 1;
        chartHeightPercent = 0;
      } else {
        titleWidthPercent = 1;
        titleHeightPercent = 0.3;
        valueWidthPercent = hasPrefixOrSuffix ? 1 - prefixOrSuffixWdithPercent : 1;
        valueHeightPercent = 0.7;
        chartHeightPercent = 0;
      }
    }
  }

  const titleFontSize = calculateFontSize(
    title || '',
    maxWidth * titleWidthPercent,
    maxHeight * titleHeightPercent,
    LINE_HEIGHT,
    TITLE_MAX_SIZE
  );
  const valueFontSize = calculateFontSize(
    toString(value),
    maxWidth * valueWidthPercent,
    maxHeight * valueHeightPercent,
    LINE_HEIGHT,
    VALUE_MAX_SIZE,
    VALUE_FONT_WEIGHT
  );
  const prefixAndSuffixFontSize = valueFontSize * fontSizeReductionFactor(valueFontSize);

  const chartRef = useRef<TinyAreaRef>();
  const chartHeight = containerHeight * chartHeightPercent;

  useEffect(() => {
    setTimeout(() => {
      const chart = chartRef?.current?.getChart();
      if (chart) {
        chart.changeSize(containerWidth, chartHeight);
      }
    }, 0);
  }, [chartHeight]);

  const chartColor = colorMode === 'background' ? 'rgba(256, 256, 256, 0.65)' : color;
  const newChartConfig: TinyAreaConfig = {
    height: chartHeight,
    data: chartData,
    appendPadding: [0, -padding, 0, -padding],
    tooltip: false,
    color: chartColor,
    ...chartConfig,
    areaStyle: {
      fill: chartMode === 'area' ? chartColor : 'transparent',
      fillOpacity: colorMode === 'background' ? 0.65 : 0.15,
      ...chartConfig?.areaStyle,
    },
  };

  return (
    <div
      ref={containerRef}
      className={classNames(prefixCls, `${prefixCls}-${layout}`, `${prefixCls}-${colorMode}`, {
        className,
        [`${prefixCls}-no-chart`]: !hasChart,
        [`${prefixCls}-center`]: textAlign === 'center',
      })}
      style={{
        width,
        height,
        padding,
        background: colorMode === 'background' ? bgColor : undefined,
        ...style,
      }}
      {...restConfig}
    >
      <div className={`${prefixCls}-content`}>
        <div
          style={{
            lineHeight: LINE_HEIGHT,
            fontSize: titleFontSize,
          }}
          className={`${prefixCls}-title`}
        >
          {title}
        </div>
        <div
          style={{
            color: colorMode === 'value' ? color : undefined,
          }}
        >
          {prefix && (
            <span
              className={`${prefixCls}-prefix`}
              style={{
                lineHeight: LINE_HEIGHT,
                fontSize: prefixAndSuffixFontSize,
                marginRight: 4,
              }}
            >
              {prefix}
            </span>
          )}
          <span
            className={`${prefixCls}-value`}
            style={{
              lineHeight: LINE_HEIGHT,
              fontWeight: VALUE_FONT_WEIGHT,
              fontSize: valueFontSize,
            }}
          >
            {value}
          </span>
          {suffix && (
            <span
              className={`${prefixCls}-suffix`}
              style={{
                lineHeight: LINE_HEIGHT,
                fontSize: prefixAndSuffixFontSize,
                marginLeft: 4,
              }}
            >
              {suffix}
            </span>
          )}
        </div>
      </div>
      {containerHeight > 0 && hasChart && (
        <div className={`${prefixCls}-chart`}>
          <TinyArea
            {...newChartConfig}
            // @ts-ignore
            ref={chartRef}
          />
        </div>
      )}
    </div>
  );
};

export default Stat;
