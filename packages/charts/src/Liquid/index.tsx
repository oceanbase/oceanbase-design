import React, { forwardRef } from 'react';
import type { LiquidConfig as AntLiquidConfig } from '@ant-design/charts';
import { Liquid as AntLiquid } from '@ant-design/charts';
// @ts-ignore
import type { PathCommand } from '@antv/g-base';
import { toPercent } from '../util/number';
import { useTheme } from '../theme';
import type { Theme } from '../theme';
import { customMemo } from '../util/custom-memo';

function rectWithRadius(x: number, y: number, width: number, height: number): PathCommand[] {
  const GOLDEN_SECTION_RATIO = 0.618;
  const h = height / 2;
  const w = (width / 2) * GOLDEN_SECTION_RATIO;
  const radius = 6;
  return [
    ['M', x - w + radius, y - h],
    ['L', x + w - radius, y - h],
    ['a', radius, radius, 0, 0, 1, radius, radius],
    ['L', x + w, y + h - radius],
    ['a', radius, radius, 0, 0, 1, -radius, radius],
    ['L', x - w + radius, y + h],
    ['a', radius, radius, 0, 0, 1, -radius, -radius],
    ['L', x - w, y - h + radius],
    ['a', radius, radius, 0, 0, 1, radius, -radius],
  ];
}

export interface LiquidConfig extends AntLiquidConfig {
  // 布局
  layout?: 'horizontal' | 'vertical';
  title?: React.ReactNode;
  // 警告水位线
  warningPercent?: number;
  // 危险水位线
  dangerPercent?: number;
  // 百分比最多保留的有效小数位数
  decimal?: number;
  theme?: Theme;
  containerStyle?: React.CSSProperties;
  percentStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
}

const Liquid = forwardRef<unknown, LiquidConfig>(
  (
    {
      height,
      // 宽度默认与高度一致，才能保证图表内部上下 padding 为 0
      width = height,
      shape = 'circle',
      layout = 'vertical',
      title,
      percent,
      warningPercent,
      dangerPercent,
      decimal = 2,
      liquidStyle,
      shapeStyle,
      outline,
      wave,
      statistic,
      theme,
      containerStyle,
      percentStyle,
      titleStyle,
      ...restConfig
    },
    ref
  ) => {
    const themeConfig = useTheme(theme);

    let color;
    if (dangerPercent && percent >= dangerPercent) {
      color = themeConfig.semanticRed;
    } else if (warningPercent && percent >= warningPercent) {
      color = themeConfig.semanticYellow;
    }
    const newConfig: LiquidConfig = {
      height,
      width,
      shape:
        shape === 'rect'
          ? // 自定义带圆角的 rect
            rectWithRadius
          : shape,
      radius: 1.0,
      percent,
      liquidStyle: {
        // 水波背景色
        fill: color || themeConfig.semanticGreen,
        radius: 10,
        ...liquidStyle,
      },
      shapeStyle: {
        // 形状背景色
        fill: themeConfig.subColor,
        radius: 10,
        ...shapeStyle,
      },
      outline: {
        // 去掉边框和间距
        border: 0,
        distance: 0,
        ...outline,
      },
      wave: {
        // 水波个数默认为 1
        count: 1,
        ...wave,
      },
      // 默认去掉内置的指标文案
      statistic: {
        title: false,
        content: false,
        ...statistic,
      },
      theme: themeConfig.theme,
      ...restConfig,
    };
    return layout === 'horizontal' ? (
      // 水平布局
      <div style={{ color, display: 'flex', ...containerStyle }}>
        <AntLiquid {...newConfig} ref={ref} />
        <span
          style={{
            marginLeft: shape === 'rect' ? 12 - (width * 3) / 16 : 12,
            display: 'inline-flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height,
          }}
        >
          <span
            style={{
              color: color || themeConfig.axis.labelFill,
              lineHeight: 1,
              ...titleStyle,
            }}
          >
            {title}
          </span>
          <span
            style={{
              display: 'flex',
              alignItems: 'end',
              lineHeight: 1,
              ...percentStyle,
            }}
          >
            <span
              style={{
                fontFamily: 'Avenir-Heavy',
                fontSize: height * 0.618,
                lineHeight: 0.618,
                marginRight: 4,
              }}
            >
              {toPercent(percent, decimal)}
            </span>
            <span>%</span>
          </span>
        </span>
      </div>
    ) : (
      // 垂直布局
      <div style={{ color, textAlign: 'center', ...containerStyle }}>
        <div
          style={{
            marginBottom: 4,
            ...percentStyle,
          }}
        >
          {`${toPercent(percent, decimal)}%`}
        </div>
        <AntLiquid {...newConfig} ref={ref} />
        {title && (
          <div
            style={{
              color: color || themeConfig.axis.labelFill,
              marginTop: 4,
              ...titleStyle,
            }}
          >
            {title}
          </div>
        )}
      </div>
    );
  }
);

export default customMemo(Liquid);
