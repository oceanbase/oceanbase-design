import React, { forwardRef } from 'react';
import type { TinyAreaConfig as AntTinyAreaConfig } from '@ant-design/charts';
import { TinyArea as AntTinyArea } from '@ant-design/charts';
import { useTheme } from '../theme';
import type { Theme } from '../theme';

export interface TinyAreaConfig extends AntTinyAreaConfig {
  theme?: Theme;
}

const TinyArea: React.FC<TinyAreaConfig> = forwardRef(
  ({ height = 60, color, line, point, areaStyle, theme, ...restConfig }, ref) => {
    const themeConfig = useTheme(theme);

    const newConfig: TinyAreaConfig = {
      height,
      line: {
        // line 大小默认为 1
        size: 1,
        ...line,
        style: {
          stroke: typeof color === 'string' ? color : undefined,
          ...line?.style,
        },
      },
      point: point
        ? {
            // point 大小默认为 1.5
            size: 1.5,
            ...point,
            style: {
              fill: typeof color === 'string' ? color : themeConfig.defaultColor,
              // 去掉边框
              lineWidth: 0,
              ...point.style,
            },
          }
        : undefined,
      areaStyle: {
        fill: themeConfig.semanticBlueGradient,
        ...areaStyle,
      },
      theme: themeConfig.theme,
      ...restConfig,
    };
    return <AntTinyArea {...newConfig} ref={ref} />;
  }
);

export default TinyArea;
