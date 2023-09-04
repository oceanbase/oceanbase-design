import React, { forwardRef } from 'react';
import type { TinyColumnConfig as AntTinyColumnConfig } from '@ant-design/charts';
import { TinyColumn as AntTinyColumn } from '@ant-design/charts';
// @ts-ignore
import type { Label } from '@antv/g2plot/esm/types/label';
import { useTheme } from '../theme';
import type { Theme } from '../theme';

export interface TinyColumnConfig extends AntTinyColumnConfig {
  theme?: Theme;
  label?: Label;
  maxColumnWidth?: number;
  minColumnWidth?: number;
}

const TinyColumn: React.FC<TinyColumnConfig> = forwardRef(
  ({ height = 60, columnStyle, label, theme, ...restConfig }, ref) => {
    const themeConfig = useTheme(theme);

    const newConfig: TinyColumnConfig = {
      height,
      appendPadding: label ? [16, 0, 0, 0] : 0,
      maxColumnWidth: themeConfig.columnWidth,
      minColumnWidth: themeConfig.columnWidth,
      columnStyle: {
        radius: [2, 2, 0, 0],
        ...columnStyle,
      },
      label: label
        ? {
            position: 'top',
            offset: 4,
            ...label,
          }
        : undefined,
      theme: themeConfig.theme,
      ...restConfig,
    };
    return <AntTinyColumn {...newConfig} ref={ref} />;
  }
);

export default TinyColumn;
