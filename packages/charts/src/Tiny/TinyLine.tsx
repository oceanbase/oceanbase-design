import React, { forwardRef } from 'react';
import type { TinyLineConfig as AntTinyLineConfig } from '@ant-design/charts';
import { TinyLine as AntTinyLine } from '@ant-design/charts';
import { useTheme } from '../theme';
import type { Theme } from '../theme';
import { customMemo } from '../util/custom-memo';

export interface TinyLineConfig extends AntTinyLineConfig {
  theme?: Theme;
}

const TinyLine: React.FC<TinyLineConfig> = forwardRef(
  ({ height = 60, color, lineStyle, point, theme, ...restConfig }, ref) => {
    const themeConfig = useTheme(theme);

    const newConfig: TinyLineConfig = {
      height,
      color,
      lineStyle: {
        // line 大小默认为 1
        lineWidth: 1,
        ...lineStyle,
      },
      point: point
        ? {
            // point 大小默认为 1.5
            size: 1.5,
            ...point,
            style: {
              fill: typeof color === 'string' ? color : undefined,
              // 去掉边框
              lineWidth: 0,
              ...point.style,
            },
          }
        : undefined,
      theme: themeConfig.theme,
      ...restConfig,
    };
    return <AntTinyLine {...newConfig} ref={ref} />;
  }
);

export default customMemo(TinyLine);
